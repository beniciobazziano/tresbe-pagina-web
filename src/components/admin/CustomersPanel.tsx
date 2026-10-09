"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BadgePercent,
  Loader2,
  Pencil,
  Plus,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import type { AdminCustomer, CustomerType } from "@/lib/types";

interface Draft {
  id: string | null;
  username: string;
  password: string;
  name: string;
  discount_pct: number;
  notes: string;
  active: boolean;
  customer_type: CustomerType;
}

const emptyDraft: Draft = {
  id: null,
  username: "",
  password: "",
  name: "",
  discount_pct: 0,
  notes: "",
  active: true,
  customer_type: "publico",
};

export function CustomersPanel() {
  const [customers, setCustomers] = useState<AdminCustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/customers", { cache: "no-store" });
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const data = await res.json();
    if (!res.ok) setError(data.error ?? "No se pudieron cargar los clientes.");
    else setCustomers(data.customers);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function saveDraft() {
    if (!draft) return;
    if (!draft.username.trim() || !draft.name.trim()) {
      setError("Completá al menos usuario y nombre.");
      return;
    }
    if (!draft.id && draft.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setSaving(true);
    setError(null);
    const res = await fetch("/api/admin/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "No se pudo guardar.");
    } else {
      setDraft(null);
      await load();
    }
    setSaving(false);
  }

  async function removeCustomer(c: AdminCustomer) {
    if (!confirm(`¿Eliminar la cuenta de "${c.name}"?`)) return;
    const res = await fetch(`/api/admin/customers?id=${c.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) setError(data.error ?? "No se pudo eliminar.");
    else await load();
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="size-6 animate-spin text-steel-500" />
      </div>
    );
  }

  const inputClass =
    "h-10 w-full rounded-lg border border-concrete-300 bg-white px-3 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-concrete-600">
          Cuentas con usuario y contraseña para tus clientes frecuentes, con su
          descuento y notas. Ellos entran desde{" "}
          <span className="font-semibold">“Ya soy cliente”</span>.
        </p>
        <button
          type="button"
          onClick={() => setDraft(emptyDraft)}
          className="flex h-10 items-center gap-2 rounded-full bg-steel-600 px-4 text-sm font-semibold text-white hover:bg-steel-700"
        >
          <Plus className="size-4" /> Nuevo cliente
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>
      )}

      {draft && (
        <div className="mt-6 rounded-2xl border border-steel-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">
              {draft.id ? "Editar cliente" : "Nuevo cliente"}
            </h2>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setDraft(null)}
              className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-concrete-100"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Nombre / razón social *</span>
              <input
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className={inputClass}
                placeholder="Corralón San Martín"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Usuario *</span>
              <input
                value={draft.username}
                onChange={(e) => setDraft({ ...draft, username: e.target.value })}
                className={inputClass}
                placeholder="corralonsm"
                autoComplete="off"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">
                {draft.id ? "Nueva contraseña (vacío = no cambiar)" : "Contraseña *"}
              </span>
              <input
                type="text"
                value={draft.password}
                onChange={(e) => setDraft({ ...draft, password: e.target.value })}
                className={inputClass}
                placeholder="mínimo 6 caracteres"
                autoComplete="off"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Tipo de cuenta</span>
              <select
                value={draft.customer_type}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    customer_type: e.target.value as CustomerType,
                  })
                }
                className={inputClass}
              >
                <option value="publico">
                  Venta al público (ve todo el catálogo)
                </option>
                <option value="distribuidora">
                  Distribuidora / reventa (+ sección de distribuidora)
                </option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Descuento (%)</span>
              <input
                type="number"
                min={0}
                max={90}
                value={draft.discount_pct}
                onChange={(e) =>
                  setDraft({ ...draft, discount_pct: Number(e.target.value) })
                }
                className={inputClass}
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium">
                Notas de la cuenta (el cliente las ve al iniciar sesión)
              </span>
              <textarea
                rows={3}
                value={draft.notes}
                onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                className="w-full rounded-lg border border-concrete-300 bg-white px-3 py-2 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
                placeholder="Condiciones de pago, días de retiro, acuerdos…"
              />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={draft.active}
                onChange={(e) => setDraft({ ...draft, active: e.target.checked })}
                className="size-4 accent-steel-600"
              />
              Cuenta activa
            </label>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={saveDraft}
              disabled={saving}
              className="flex h-11 items-center gap-2 rounded-full bg-lime-500 px-6 text-sm font-semibold text-steel-950 hover:bg-lime-400 disabled:opacity-60"
            >
              {saving && <Loader2 className="size-4 animate-spin" />} Guardar
            </button>
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="flex h-11 items-center rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-700 hover:bg-concrete-100"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {customers.length === 0 && !draft ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-concrete-300 bg-white px-6 py-16 text-center">
          <UserRound className="size-10 text-concrete-400" />
          <div>
            <h2 className="font-semibold">Todavía no hay clientes registrados</h2>
            <p className="mt-1 max-w-md text-sm text-concrete-600">
              Creá la primera cuenta y pasale el usuario y la contraseña a tu
              cliente.
            </p>
          </div>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-concrete-100 overflow-hidden rounded-xl border border-concrete-200 bg-white">
          {customers.map((c) => (
            <li key={c.id} className="flex items-center gap-4 p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-steel-50 text-steel-600">
                <UserRound className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 truncate text-sm font-semibold">
                  {c.name}
                  {!c.active && (
                    <span className="rounded-full bg-concrete-100 px-2 py-0.5 text-[10px] font-medium text-concrete-500">
                      inactiva
                    </span>
                  )}
                </p>
                <p className="truncate text-xs text-concrete-500">
                  usuario: {c.username}
                  {c.notes ? ` · ${c.notes}` : ""}
                </p>
              </div>
              {c.customer_type === "distribuidora" && (
                <span className="shrink-0 rounded-full bg-steel-100 px-3 py-1 text-xs font-semibold text-steel-800">
                  Distribuidora
                </span>
              )}
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-800">
                <BadgePercent className="size-3.5" /> {c.discount_pct}%
              </span>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label={`Editar ${c.name}`}
                  onClick={() =>
                    setDraft({
                      id: c.id,
                      username: c.username,
                      password: "",
                      name: c.name,
                      discount_pct: c.discount_pct,
                      notes: c.notes ?? "",
                      active: c.active,
                      customer_type: c.customer_type ?? "publico",
                    })
                  }
                  className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-steel-50 hover:text-steel-700"
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Eliminar ${c.name}`}
                  onClick={() => removeCustomer(c)}
                  className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
