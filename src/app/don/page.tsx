import Image from "next/image";

const WAVE_BASE = "https://pay.wave.com/m/M_sn_zuc3MUAYE251/c/sn";

const SOUTIEN_OPTIONS = [
  1000,
  2000,
  5000,
  10000,
  15000,
  50000,
] as const;

function waveUrl(amount: number) {
  return `${WAVE_BASE}/?amount=${amount}`;
}

export default function DonPage() {
  return (
    <div className="min-h-[80vh] bg-zinc-50/80">
      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28">
        <header className="text-center">
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-sky-100">
              <Image
                src="/wave-logo.png"
                alt="Logo Wave"
                fill
                className="object-contain p-1.5"
                sizes="40px"
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Faire un don
            </h1>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Choisissez un montant pour soutenir Sourire Pour Tous via Wave.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {SOUTIEN_OPTIONS.map((amount) => (
            <a
              key={amount}
              href={waveUrl(amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200/80 bg-white py-8 shadow-sm transition duration-200 hover:border-red-100 hover:bg-red-50/80 hover:shadow-md hover:shadow-red-100/30"
            >
              <span className="text-xl font-semibold text-zinc-900 transition group-hover:text-red-600 sm:text-2xl">
                {amount.toLocaleString("fr-FR")}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-red-500">
                FCFA
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-zinc-400">
          Vous serez redirigé vers Wave pour finaliser le paiement en toute
          sécurité.
        </p>
      </section>
    </div>
  );
}
