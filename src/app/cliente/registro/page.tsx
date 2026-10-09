"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle, Loader2, Truck, UserPlus } from "lucide-react";
import { useCustomer } from "@/components/customer/CustomerProvider";

export default function ClienteRegistroPage() {
  const router = useRouter();
  const { refresh } = useCustomer();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/cliente/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, postalCode, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No pudimos crear la cuenta.");
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

  const inputClass =
    "h-11 w-full rounded-lg border border-concrete-300 bg-white px-3.5 text-sm outline-none transition-colors placeholder:text-concrete-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6">
      <div className="flex size-12 items-center justify-center self-center rounded-full bg-lime-100 text-lime-700">
        <UserPlus className="size-5" />
      </div>
      <h1 className="mt-5 text-center font-display text-2xl font-bold">
        Crear mi cuenta
      </h1>
      <p className="mt-2 text-center text-sm leading-6 text-concrete-600">
        Guardás tus datos y calculamos el costo del envío a tu código postal
        antes de que pagues.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Nombre y apellido</span>
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Juan Pérez"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Email</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="tu@email.com"
          />
          <span className="mt-1 block text-xs text-concrete-500">
            Con este email vas a iniciar sesión.
          </span>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Teléfono / WhatsApp</span>
          <input
            required
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="223 555-0000"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Código postal</span>
          <input
            required
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={4}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value.replace(/\D/g, ""))}
            className={inputClass}
            placeholder="7600"
          />
          <span className="mt-1 flex items-start gap-1.5 text-xs text-concrete-500">
            <Truck className="mt-0.5 size-3.5 shrink-0" />
            Lo usamos para cotizar el envío. Si tu código es tipo B7600ABC,
            poné solo los 4 números.
          </span>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Contraseña</span>
          <input
            required
            type="password"
            autoComplete="new-password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            placeholder="Mínimo 6 caracteres"
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
          {loading ? <Loader2 className="size-4 animate-spin" /> : "Crear cuenta"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-concrete-500">
        ¿Ya tenés cuenta?{" "}
        <Link
          href="/cliente/login"
          className="font-semibold text-lime-700 hover:text-lime-800"
        >
          Iniciar sesión
        </Link>
      </p>
      <p className="mt-2 text-center text-xs text-concrete-400">
        <Link href="/productos" className="hover:text-steel-600">
          ← Volver a la tienda
        </Link>
      </p>
    </div>
  );
}
