import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const MEMBERS_FILE = path.join(DATA_DIR, "membres.json");

async function getMembers() {
  try {
    const raw = await fs.readFile(MEMBERS_FILE, "utf8");
    return JSON.parse(raw) as {
      id: string;
      createdAt: string;
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      ville: string;
      typeEngagement: string;
      message: string;
    }[];
  } catch {
    return [];
  }
}

export default async function BackofficeMembresPage() {
  const membres = await getMembers();

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="mb-6 border-b border-zinc-200 pb-4">
          <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            Backoffice – Demandes d&apos;adhésion
          </h1>
          <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
            Cette page liste les personnes qui ont rempli le formulaire
            &quot;Devenir membre&quot;. À sécuriser avant un usage public
            (authentification).
          </p>
        </header>

        {membres.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Aucune demande enregistrée pour le moment.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50/60">
            <table className="min-w-full text-left text-xs text-zinc-700 sm:text-sm">
              <thead className="bg-zinc-100/80 text-[11px] uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2">Nom</th>
                  <th className="px-3 py-2">Contact</th>
                  <th className="px-3 py-2">Ville</th>
                  <th className="px-3 py-2">Engagement</th>
                  <th className="px-3 py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {membres.map((membre) => (
                  <tr
                    key={membre.id}
                    className="border-t border-zinc-100 bg-white/70 hover:bg-zinc-50"
                  >
                    <td className="px-3 py-2 align-top text-[11px] text-zinc-500">
                      {new Date(membre.createdAt).toLocaleString("fr-FR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="px-3 py-2 align-top">
                      <div className="font-medium text-zinc-900">
                        {membre.nom} {membre.prenom}
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        {membre.email}
                      </div>
                    </td>
                    <td className="px-3 py-2 align-top text-[11px] text-zinc-600">
                      {membre.telephone || "-"}
                    </td>
                    <td className="px-3 py-2 align-top text-[11px] text-zinc-600">
                      {membre.ville || "-"}
                    </td>
                    <td className="px-3 py-2 align-top text-[11px] text-zinc-600">
                      {membre.typeEngagement || "-"}
                    </td>
                    <td className="px-3 py-2 align-top text-[11px] text-zinc-600">
                      {membre.message || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

