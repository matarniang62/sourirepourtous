"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/backoffice/membres";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^\d{8}$/.test(password)) {
      setError("Le mot de passe doit contenir exactement 8 chiffres.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/backoffice-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Erreur de connexion");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-center text-lg font-semibold text-zinc-900">
          Backoffice – Connexion
        </h1>
        <p className="mt-2 text-center text-xs text-zinc-500">
          Mot de passe à 8 chiffres
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={8}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/\D/g, ""))}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-center text-lg tracking-[0.3em] text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              autoFocus
              autoComplete="off"
            />
          </div>
          {error && (
            <p className="text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
        <p className="mt-4 text-center">
          <Link
            href="/"
            className="text-xs text-zinc-500 underline hover:text-zinc-700"
          >
            Retour au site
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function BackofficeLoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-zinc-100">Chargement…</div>}>
      <LoginForm />
    </Suspense>
  );
}
