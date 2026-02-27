import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const appSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourire Pour Tous – Plateforme de dons",
  description:
    "Depuis 2022, Sourire Pour Tous agit pour redonner le sourire aux personnes dans le besoin grâce à des actions solidaires et la collecte de dons.",
  metadataBase:
    typeof window === "undefined" ? new URL("https://sourirepourtous.example") : undefined,
  openGraph: {
    title: "Sourire Pour Tous – Plateforme de dons",
    description:
      "Faire un don et soutenir les actions solidaires de Sourire Pour Tous : orphelinats, daaras, distributions alimentaires, création de puits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${appSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <div className="min-h-screen flex flex-col bg-zinc-50/60">
          <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <Link href="/" className="flex items-center gap-3">
                <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-red-50">
                  <Image
                    src="/logo-sourire.png"
                    alt="Logo Sourire Pour Tous"
                    fill
                    className="object-contain p-0.5"
                    sizes="36px"
                    priority
                  />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-zinc-900">
                    Sourire Pour Tous
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    Un don, un sourire
                  </span>
                </div>
              </Link>
              <nav className="hidden items-center gap-2 text-xs font-medium text-zinc-600 sm:flex sm:text-sm">
                <Link
                  href="/"
                  className="rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  Accueil
                </Link>
                <Link
                  href="/actions"
                  className="rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  Nos actions
                </Link>
                <Link
                  href="/devenir-membre"
                  className="rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  Devenir membre
                </Link>
                <Link
                  href="/don"
                  className="ml-2 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-700 sm:text-sm"
                >
                  Faire un don
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-4xl px-4 py-5 text-center text-xs text-zinc-500 sm:justify-between sm:text-left sm:px-6">
              <p className="w-full">
                © {new Date().getFullYear()} Sourire Pour Tous – Association de solidarité
              </p>
            </div>
          </footer>
        </div>
        {/* Bouton WhatsApp flottant type chatbot */}
        <a
          href="https://wa.me/221766396416"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Sourire Pour Tous sur WhatsApp"
          className="fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition hover:bg-green-600 hover:shadow-green-500/60 sm:bottom-7 sm:right-6"
        >
          <span className="sr-only">WhatsApp</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M12.04 2C6.59 2 2.18 6.26 2.18 11.58c0 2.22.74 4.28 2.03 5.96L2 22l4.65-1.52a9.97 9.97 0 0 0 5.39 1.55c5.45 0 9.86-4.26 9.86-9.58C21.9 6.26 17.49 2 12.04 2Zm-.06 17.1c-1.77 0-3.41-.56-4.78-1.63l-.34-.25-2.76.9.9-2.63-.25-.38a7.3 7.3 0 0 1-1.19-4.01c0-4.02 3.34-7.29 7.42-7.29 4.07 0 7.39 3.27 7.39 7.29 0 4.02-3.32 7.3-7.39 7.3Zm4.05-5.32c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.94-.36-1.79-1.14-.66-.6-1.11-1.34-1.24-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.38.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.64-.18-.44-.37-.37-.5-.38h-.43c-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.15 1.6 2.46 3.9 3.35.55.22.98.35 1.31.45.55.17 1.06.15 1.46.09.45-.07 1.3-.53 1.48-1.03.18-.5.18-.93.13-1.02-.06-.08-.2-.13-.41-.24Z"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
