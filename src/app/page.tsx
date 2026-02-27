import Image from "next/image";
import Link from "next/link";

const OBJECTIF_FCFA = 1500000;

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-white">
      {/* Hero avec votre image en fond + overlay noir */}
      <section className="relative min-h-[80vh] w-full">
        <Image
          src="/hero-orphelinat.png"
          alt="Action de Sourire Pour Tous à l'orphelinat"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-black/75"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:px-6 sm:py-24">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50">
            <Image
              src="/logo-sourire.png"
              alt="Sourire Pour Tous"
              fill
              className="object-contain p-2"
              sizes="80px"
              priority
            />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl fade-up-soft">
            Sourire Pour Tous
          </h1>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-300 sm:text-sm">
            Un don, un sourire
          </p>
          <p className="mt-6 text-base leading-relaxed text-zinc-100/90 sm:text-lg">
            Depuis 2022, nous agissons pour redonner le sourire aux personnes
            dans le besoin : distributions alimentaires, orphelinats, daaras,
            actions solidaires.
          </p>

          <div className="mt-10 w-full max-w-sm rounded-2xl border border-[#fed7d7] bg-gradient-to-r from-[#fff5f5] via-[#ffe4e0] to-[#fff7d6] px-6 py-5 text-center text-black shadow-lg shadow-[#fed7d7]/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-900/90">
              Objectif orphelinat
            </p>
            <p className="mt-2 text-2xl font-bold text-neutral-950 sm:text-3xl">
              {OBJECTIF_FCFA.toLocaleString("fr-FR")} FCFA
            </p>
            <p className="mt-2 text-sm font-medium text-neutral-900 sm:text-base">
              Pour l&apos;orphelinat de Kounoune – action du 7 mars 2026
            </p>
          </div>

          <Link
            href="/don"
            className="mt-10 inline-block rounded-full bg-red-500 px-9 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/40 hover:bg-red-600"
          >
            Faire un don
          </Link>
        </div>
      </section>

      {/* Section – Un verset sur l'aumône */}
      <section className="bg-[#f9fafb]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="verse-card-animate overflow-hidden rounded-3xl border border-zinc-100 bg-white/90 shadow-sm md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="order-2 border-t border-zinc-100 px-5 py-7 text-left sm:px-8 md:order-1 md:border-t-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Verset sur l&apos;aumône
              </p>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900 sm:text-xl">
                « L&apos;aumône ne diminue en rien une richesse »
              </h2>

              <p
                dir="rtl"
                lang="ar"
                className="verse-arabic-animate mt-4 text-right text-base font-medium leading-relaxed text-zinc-800 sm:text-lg"
              >
                مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ
                كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ
                سُنْبُلَةٍ مِائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَنْ
                يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ
              </p>

              <p className="mt-3 text-sm italic leading-relaxed text-zinc-700 sm:text-base">
                « L&apos;exemple de ceux qui dépensent leurs biens dans le
                sentier d&apos;Allah est semblable à un grain d&apos;où naissent
                sept épis, à cent grains l&apos;épi. Et Allah multiplie la
                récompense à qui Il veut, et la grâce d&apos;Allah est immense,
                et Il est Omniscient. »
              </p>
              <p className="mt-3 text-xs font-medium text-zinc-600 sm:text-sm">
                Coran, sourate Al‑Baqarah (2:261)
              </p>
              <p className="mt-4 text-xs text-zinc-500 sm:text-sm">
                Ce verset nous rappelle que chaque don, même modeste, est
                multiplié par Allah et devient source de bien pour celui qui
                donne comme pour celui qui reçoit.
              </p>
            </div>

            <div className="order-1 flex items-stretch justify-center bg-zinc-900/95 px-5 py-7 md:order-2 md:px-0 md:py-0">
              <div className="relative h-56 w-full max-w-xs self-end sm:h-64 md:h-full md:max-w-none">
                <Image
                  src="/temoignage-enfants.png"
                  alt="Enfants bénéficiaires des dons"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 70vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section – Nos actions et notre manière d'agir */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
              Nos actions
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900 sm:text-2xl">
              Comment nous soutenons ceux qui en ont besoin
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Sourire Pour Tous, c&apos;est une équipe de bénévoles qui se
              mobilisent sur le terrain pour transformer vos dons en aide
              concrète : nourriture, produits essentiels, accompagnement
              humain.
            </p>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-red-400/80" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/60 px-4 py-5 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                Distributions ciblées
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Paniers alimentaires
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Riz, huile, sucre, lait et produits de base distribués aux
                familles et personnes en situation de rue.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/60 px-4 py-5 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                Protection des enfants
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Orphelinats & daaras
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Lait, couches, biberons, vêtements et soutien quotidien pour les
                enfants les plus vulnérables.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/60 px-4 py-5 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                Projets durables
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Eau & solidarité locale
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Participation à la création de puits et actions de proximité
                pour améliorer le quotidien des communautés.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-zinc-500 sm:text-sm">
            Chaque don est suivi avec sérieux : nous privilégions la
            transparence, le dialogue avec les responsables sur place et le
            partage de comptes rendus après les actions.
          </p>
        </div>
      </section>

      {/* Section – Devenir membre */}
      <section className="bg-zinc-50/80">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] sm:items-start">
            <div className="fade-up-soft">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md sm:aspect-square">
                <Image
                  src="/devenir-membre-team-work.png"
                  alt="Rejoignez l'équipe Sourire Pour Tous"
                  fill
                  className="image-devenir-membre object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 py-4 text-white sm:px-5 sm:py-5">
                  <p className="text-xs font-medium sm:text-sm">
                    « Ensemble, nous pouvons toucher encore plus de familles,
                    d&apos;enfants et de structures en difficulté. »
                  </p>
                  <p className="mt-1.5 text-[11px] text-white/90 sm:text-xs">
                    Devenir membre, c&apos;est s&apos;engager dans une dynamique
                    de solidarité continue, proche du terrain.
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-up-soft flex flex-col justify-center sm:delay-100 sm:-mt-8 sm:pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                Rejoindre l&apos;équipe
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900 sm:text-2xl">
                Devenir membre de Sourire Pour Tous
              </h2>
              <p className="mt-3 text-sm text-zinc-600 sm:text-base">
                Vous souhaitez donner un peu de votre temps, de vos compétences
                ou devenir donateur régulier&nbsp;? Rejoignez l&apos;association
                et participez aux distributions, visites d&apos;orphelinats et
                projets solidaires.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-zinc-600 sm:text-sm">
                <li>• Bénévolat sur le terrain (distributions, visites).</li>
                <li>• Donateurs réguliers pour sécuriser les actions.</li>
                <li>• Partenaires solidaires (entreprises, associations).</li>
              </ul>
              <Link
                href="/devenir-membre"
                className="mt-6 inline-flex rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/40 hover:bg-red-700"
              >
                Remplir le formulaire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
