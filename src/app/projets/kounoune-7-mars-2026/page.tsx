import Link from "next/link";

const GOAL = 1500000;
const CURRENT = 320000;

const needs = [
  "Lait infantile",
  "Couches",
  "Biberons",
  "Riz",
  "Huile",
  "Sucre",
];

export default function KounouneProjectPage() {
  const progress = Math.min(100, Math.round((CURRENT / GOAL) * 100));

  return (
    <div className="bg-amber-50/40">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose-600">
            Projet spécial
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Orphelinat de Kounoune – Action solidaire du 7 mars 2026
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
            Le 7 mars 2026, Sourire Pour Tous organise une grande action
            solidaire en faveur d&apos;un orphelinat à Kounoune. L&apos;objectif
            est de couvrir les besoins essentiels des bébés et enfants : lait,
            couches, biberons, alimentation et produits de première nécessité.
          </p>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100/80">
              <h2 className="text-lg font-semibold text-zinc-900">
                Objectif financier
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Nous visons à réunir un budget complet pour préparer, acheter et
                livrer tous les produits nécessaires avant le 7 mars 2026.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose-600">
                    Objectif
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900">
                    {GOAL.toLocaleString("fr-FR")}{" "}
                    <span className="text-sm font-normal text-zinc-500">
                      FCFA
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-600">
                    Déjà collecté
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900">
                    {CURRENT.toLocaleString("fr-FR")}{" "}
                    <span className="text-sm font-normal text-zinc-500">
                      FCFA
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Reste à collecter
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-amber-700">
                    {(GOAL - CURRENT).toLocaleString("fr-FR")}{" "}
                    <span className="text-sm font-normal text-zinc-500">
                      FCFA
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] text-zinc-600">
                  <span>Progression de la collecte</span>
                  <span className="font-semibold text-emerald-600">
                    {progress}% atteint
                  </span>
                </div>
                <div className="mt-1.5 h-3 rounded-full bg-emerald-50">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
              <h2 className="text-lg font-semibold text-zinc-900">
                Liste des besoins prioritaires
              </h2>
              <p className="mt-2 text-sm text-zinc-700">
                Les dons collectés serviront à acheter les produits suivants,
                en concertation avec les responsables de l&apos;orphelinat :
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                {needs.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 ring-1 ring-amber-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-zinc-500">
                Si des besoins spécifiques émergent (médicaments, matelas,
                moustiquaires…), ils seront ajoutés à cette liste et détaillés
                sur le site.
              </p>
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl bg-zinc-950 p-5 text-zinc-50 shadow-lg">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-amber-300">
              Comment participer ?
            </p>
            <p className="text-sm text-zinc-100">
              Vous pouvez soutenir ce projet en effectuant un don via Mobile
              Money (Wave, Orange Money) ou d&apos;autres canaux mis à
              disposition pour la diaspora. Chaque montant contribue à
              rapprocher l&apos;objectif.
            </p>

            <div className="space-y-2 rounded-xl bg-zinc-900/70 p-4 text-xs text-zinc-100">
              <p className="font-semibold text-amber-200">
                1. Choisissez votre moyen de paiement
              </p>
              <p>Wave, Orange Money ou virement bancaire.</p>
              <p className="mt-2 font-semibold text-amber-200">
                2. Indiquez &quot;Kounoune – Orphelinat&quot; en référence
              </p>
              <p>
                Cela nous permet de bien affecter votre don à ce projet
                spécifique.
              </p>
              <p className="mt-2 font-semibold text-amber-200">
                3. Recevez un reçu de confirmation
              </p>
              <p>
                Un accusé de réception pourra être envoyé par WhatsApp ou e-mail
                selon les informations communiquées.
              </p>
            </div>

            <Link
              href="/don?projet=kounoune-7-mars-2026"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-md shadow-amber-300/60 transition hover:bg-amber-300"
            >
              Participer maintenant
            </Link>

            <p className="text-[11px] text-zinc-300">
              Vous ne pouvez pas être présent le jour J ? Votre don permettra
              tout de même d&apos;acheter les produits pour les enfants.
            </p>
          </aside>
        </section>
      </section>
    </div>
  );
}

