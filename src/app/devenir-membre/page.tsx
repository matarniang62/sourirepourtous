"use client";

import { useState } from "react";
import Image from "next/image";

type TypeEngagement = "benevole" | "donateur" | "partenaire" | "autre";

export default function DevenirMembrePage() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [typeEngagement, setTypeEngagement] = useState<TypeEngagement>("benevole");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const canSubmit =
    nom.trim().length > 1 &&
    email.trim().length > 3 &&
    status !== "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/membres", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          telephone,
          ville,
          typeEngagement,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur réseau");
      }

      setStatus("success");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative mx-auto mb-10 aspect-[4/3] max-w-md overflow-hidden rounded-2xl bg-orange-50 shadow-md">
          <Image
            src="/devenir-membre-team-work.png"
            alt="Mains unies en équipe – Rejoignez Sourire Pour Tous"
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 28rem"
            priority
          />
        </div>
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
            Devenir membre
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Rejoindre Sourire Pour Tous
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            Remplissez ce formulaire pour rejoindre l&apos;association en tant
            que bénévole, donateur régulier ou partenaire. Nous vous
            contacterons rapidement.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-zinc-100 bg-zinc-50/70 px-4 py-6 shadow-sm sm:px-6 sm:py-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nom"
                className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
              >
                Nom *
              </label>
              <input
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
              >
                Prénom
              </label>
              <input
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
              >
                E-mail *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
              >
                Téléphone (WhatsApp)
              </label>
              <input
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="ville"
                className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
              >
                Ville / Quartier
              </label>
              <input
                id="ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-700">
                Type d&apos;engagement
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTypeEngagement("benevole")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    typeEngagement === "benevole"
                      ? "bg-red-600 text-white"
                      : "bg-white text-zinc-700 ring-1 ring-zinc-200"
                  }`}
                >
                  Bénévole
                </button>
                <button
                  type="button"
                  onClick={() => setTypeEngagement("donateur")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    typeEngagement === "donateur"
                      ? "bg-red-600 text-white"
                      : "bg-white text-zinc-700 ring-1 ring-zinc-200"
                  }`}
                >
                  Donateur régulier
                </button>
                <button
                  type="button"
                  onClick={() => setTypeEngagement("partenaire")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    typeEngagement === "partenaire"
                      ? "bg-red-600 text-white"
                      : "bg-white text-zinc-700 ring-1 ring-zinc-200"
                  }`}
                >
                  Partenaire
                </button>
                <button
                  type="button"
                  onClick={() => setTypeEngagement("autre")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    typeEngagement === "autre"
                      ? "bg-red-600 text-white"
                      : "bg-white text-zinc-700 ring-1 ring-zinc-200"
                  }`}
                >
                  Autre
                </button>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-700"
            >
              Message (présentez-vous, disponibilités…)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
              placeholder="Ex : disponible les week-ends pour les distributions, expérience auprès des enfants..."
            />
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/40 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {status === "success" && (
            <p className="mt-2 text-center text-xs text-emerald-600">
              Merci&nbsp;! Votre demande a bien été enregistrée. L&apos;équipe
              vous contactera très prochainement.
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-center text-xs text-red-600">
              Une erreur est survenue. Merci de réessayer plus tard.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

