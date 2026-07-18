"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle, Loader2, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No pudimos iniciar sesión.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Error de conexión. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-24 sm:px-6">
      <div className="flex size-12 items-center justify-center self-center rounded-full bg-steel-50 text-steel-600">
        <Lock className="size-5" />
      </div>
      <h1 className="mt-5 text-center font-display text-2xl font-bold">
        Panel de administración
      </h1>
      <p className="mt-2 text-center text-sm text-concrete-600">
        Acceso exclusivo para el equipo de Tresbe.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Usuario</span>
          <input
            required
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-11 w-full rounded-lg border border-concrete-300 bg-white px-3.5 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Contraseña</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-lg border border-concrete-300 bg-white px-3.5 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
          />
        </label>
        {error && (
          <p className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-800">
            <AlertCircle className="mt-0.5 size-4 shrink-0" /> {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-steel-600 text-sm font-semibold text-white hover:bg-steel-700 disabled:opacity-60"
        >
          {loading ? <Loader2 className="size-4 animate-spin" /> : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
