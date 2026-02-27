const actions = [
  {
    id: "distribution-alimentaire",
    title: "Distributions alimentaires",
    description:
      "Organisation de distributions régulières de denrées pour les familles vulnérables, les personnes en situation de rue et les structures d’accueil.",
    details: [
      "Paniers de riz, huile, sucre, pâtes, lait, dattes…",
      "Ciblage des quartiers défavorisés avec l’appui de relais locaux",
      "Mise en place de distributions spéciales pendant le Ramadan et les jours de fêtes",
    ],
  },
  {
    id: "orphelinats",
    title: "Soutien aux orphelinats",
    description:
      "Appui aux orphelinats en alimentation, produits d’hygiène et besoins spécifiques pour les bébés.",
    details: [
      "Achat de lait infantile, couches, biberons et produits d’hygiène",
      "Moments de partage et d’animation pour les enfants",
      "Suivi dans la durée avec les responsables d’orphelinat",
    ],
  },
  {
    id: "daaras",
    title: "Accompagnement des daaras",
    description:
      "Soutien aux daaras pour améliorer les conditions de vie et d’apprentissage des talibés.",
    details: [
      "Distributions de repas, riz et sucre",
      "Fourniture de matelas, nattes et couvertures selon les besoins",
      "Actions ponctuelles pour la santé et l’hygiène",
    ],
  },
  {
    id: "puits",
    title: "Création de puits",
    description:
      "Participation à la création d’un puits pour faciliter l’accès à l’eau dans une zone en difficulté.",
    details: [
      "Identification du besoin avec les populations locales",
      "Mobilisation de donateurs dédiés au projet",
      "Suivi de la réalisation jusqu’à la mise en service",
    ],
  },
];

export default function ActionsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose-600">
            Nos actions
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Des sourires concrets sur le terrain
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
            Depuis 2022, Sourire Pour Tous mène des actions de proximité pour
            répondre aux besoins essentiels : se nourrir, se soigner, vivre
            dignement. Chaque don se transforme en denrées, en eau, en chaleur
            humaine pour ceux qui en ont le plus besoin.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {actions.map((action) => (
            <article
              key={action.id}
              className="flex flex-col rounded-2xl bg-rose-50/60 p-5 shadow-sm ring-1 ring-rose-100"
            >
              <h2 className="text-lg font-semibold text-zinc-900">
                {action.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-700">
                {action.description}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700">
                {action.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Galerie photo et vidéos
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Le site mettra en avant les images fortes des distributions, des
              visites d’orphelinats, des daaras et des projets réalisés. Cette
              galerie permettra aux donateurs de voir concrètement l’impact de
              leurs contributions.
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              Sur la version finale du site, cette section sera alimentée
              automatiquement avec les photos et vidéos des dernières actions.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-zinc-950 text-zinc-50 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/50 via-rose-700/40 to-amber-400/40" />
            <div className="relative z-10 flex h-full flex-col justify-between p-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                  Aperçu média
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Défilement dynamique des actions
                </p>
                <p className="mt-2 text-xs text-zinc-100/90">
                  Slider d’images, petites vidéos, avant/après, témoignages…
                  tout pour montrer la réalité du terrain.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-1.5 text-[10px] text-zinc-100/90">
                <div className="flex h-16 items-center justify-center rounded-xl bg-zinc-900/40 ring-1 ring-rose-300/40">
                  + Distributions
                </div>
                <div className="flex h-16 items-center justify-center rounded-xl bg-zinc-900/40 ring-1 ring-rose-300/40">
                  + Orphelinats
                </div>
                <div className="flex h-16 items-center justify-center rounded-xl bg-zinc-900/40 ring-1 ring-rose-300/40">
                  + Daaras & puits
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]" />
          </div>
        </section>
      </section>
    </div>
  );
}

