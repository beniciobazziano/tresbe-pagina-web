"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle, Loader2, UserRound } from "lucide-react";
import { useCustomer } from "@/components/customer/CustomerProvider";
import { whatsappLink } from "@/lib/site";

export default function ClienteLoginPage() {
  const router = useRouter();
  const { refresh } = useCustomer();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/cliente/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No pudimos iniciar sesión.");
        return;
      }
      await refresh();
      router.push("/cliente");
    } catch {
      setError("Error de conexión. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-20 sm:px-6">
      <div className="flex size-12 items-center justify-center self-center rounded-full bg-lime-100 text-lime-700">
        <UserRound className="size-5" />
      </div>
      <h1 className="mt-5 text-center font-display text-2xl font-bold">
        Ya soy cliente
      </h1>
      <p className="mt-2 text-center text-sm leading-6 text-concrete-600">
        Ingresá con el usuario que te dio el equipo de Tresbe para ver tus
        descuentos y condiciones de cuenta.
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
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-lime-500 text-sm font-semibold text-steel-950 hover:bg-lime-400 disabled:opacity-60"
        >
          {loading ? <Loader2 className="size-4 animate-spin" /> : "Ingresar"}
        </button>
      </form>
      <p className="mt-6 text-center text-xs leading-5 text-concrete-500">
        ¿Todavía no tenés cuenta de cliente?{" "}
        <a
          href={whatsappLink(
            "¡Hola Tresbe! Quiero abrir una cuenta de cliente con descuentos."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-lime-700 hover:text-lime-800"
        >
          Pedila por WhatsApp
        </a>{" "}
        y te la creamos con tus condiciones.
      </p>
      <p className="mt-2 text-center text-xs text-concrete-400">
        <Link href="/productos" className="hover:text-steel-600">
          ← Volver a la tienda
        </Link>
      </p>
    </div>
  );
}
