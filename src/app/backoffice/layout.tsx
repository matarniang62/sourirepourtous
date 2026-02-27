import Link from "next/link";

export default function BackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            href="/backoffice/membres"
            className="text-sm font-semibold text-zinc-900"
          >
            Backoffice
          </Link>
          <a
            href="/api/backoffice-auth?logout=1"
            className="text-xs text-zinc-500 hover:text-zinc-700"
          >
            Déconnexion
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
