"use client";

import { useState } from "react";
import { Check, Loader2, Truck } from "lucide-react";
import { useCustomer } from "./CustomerProvider";
import type { Customer } from "@/lib/types";

/**
 * Teléfono y código postal de la cuenta. El CP es el que usa el checkout
 * para cotizar el envío, así que conviene tenerlo al día.
 */
export function DatosEntrega({ customer }: { customer: Customer }) {
  const { refresh } = useCustomer();
  const [phone, setPhone] = useState(customer.phone ?? "");
  const [postalCode, setPostalCode] = useState(customer.postal_code ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sinCambios =
    phone === (customer.phone ?? "") && postalCode === (customer.postal_code ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaved(false);
    setSaving(true);
    try {
      const res = await fetch("/api/cliente/perfil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, postalCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No pudimos guardar los cambios.");
        return;
      }
      await refresh();
      setSaved(true);
    } catch {
      setError("Error de conexión. Probá de nuevo.");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "h-11 w-full rounded-lg border border-concrete-300 bg-white px-3.5 text-sm outline-none transition-colors focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 rounded-2xl border border-concrete-200 bg-white p-6"
    >
      <div className="flex items-center gap-3">
        <Truck className="size-6 text-steel-600" />
        <h2 className="font-display text-lg font-bold">Datos de entrega</h2>
      </div>
      <p className="mt-2 text-sm leading-6 text-concrete-600">
        Con tu código postal calculamos el costo del envío antes de que
        confirmes la compra.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_140px]">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Teléfono / WhatsApp</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="223 555-0000"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Código postal</span>
          <input
            inputMode="numeric"
            maxLength={4}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value.replace(/\D/g, ""))}
            className={inputClass}
            placeholder="7600"
          />
        </label>
      </div>

      {error && <p className="mt-3 text-xs text-red-700">{error}</p>}

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={saving || sinCambios}
          className="flex h-11 items-center gap-2 rounded-full bg-steel-600 px-5 text-sm font-semibold text-white hover:bg-steel-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? <Loader2 className="size-4 animate-spin" /> : "Guardar"}
        </button>
        {saved && !saving && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-lime-700">
            <Check className="size-4" /> Guardado
          </span>
        )}
      </div>
    </form>
  );
}
