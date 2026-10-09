"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AlertCircle, Check, Loader2, Percent, TrendingUp } from "lucide-react";
import { useCustomer } from "@/components/customer/CustomerProvider";
import { BRANDS } from "@/lib/brands";
import { salePrice } from "@/lib/pricing";
import { formatARS } from "@/lib/site";
import { GENERAL_MARKUP_KEY } from "@/lib/types";

/** Costo de ejemplo para mostrar cómo queda el precio de venta */
const EJEMPLO = 10000;

export default function RentabilidadesPage() {
  const router = useRouter();
  const { customer, ready, refresh } = useCustomer();

  const [valores, setValores] = useState<Record<string, string>>({});
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ready && !customer) router.replace("/cliente/login");
  }, [ready, customer, router]);

  const cargar = useCallback(async () => {
    try {
      const res = await fetch("/api/cliente/rentabilidades", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const iniciales: Record<string, string> = {};
        for (const [key, value] of Object.entries(data.markups ?? {})) {
          iniciales[key] = String(value);
        }
        setValores(iniciales);
      }
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    if (customer) cargar();
  }, [customer, cargar]);

  async function guardar() {
    setGuardando(true);
    setError(null);
    setGuardado(false);
    try {
      const markups: Record<string, number> = {};
      for (const [key, value] of Object.entries(valores)) {
        const n = Number(value.replace(",", "."));
        if (Number.isFinite(n) && n > 0) markups[key] = n;
      }
      const res = await fetch("/api/cliente/rentabilidades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markups }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "No se pudo guardar.");
        return;
      }
      await refresh();
      setGuardado(true);
      setTimeout(() => setGuardado(false), 2500);
      router.refresh();
    } catch {
      setError("Error de conexión. Probá de nuevo.");
    } finally {
      setGuardando(false);
    }
  }

  if (!ready || !customer) return <div className="min-h-[50vh]" />;

  const general = Number(valores[GENERAL_MARKUP_KEY]?.replace(",", ".")) || 0;

  const filaMarca = (key: string, etiqueta: string, descripcion: string) => {
    const valor = valores[key] ?? "";
    const pct = Number(valor.replace(",", ".")) || 0;
    const efectivo = pct > 0 ? pct : general;
    return (
      <div
        key={key}
        className="flex flex-wrap items-center gap-3 border-t border-concrete-100 px-5 py-3 first:border-t-0"
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{etiqueta}</p>
          <p className="text-xs text-concrete-500">{descripcion}</p>
        </div>
        <div className="relative">
          <input
            type="number"
            min={0}
            max={500}
            step="0.5"
            value={valor}
            onChange={(e) =>
              setValores((prev) => ({ ...prev, [key]: e.target.value }))
            }
            placeholder={key === GENERAL_MARKUP_KEY ? "0" : String(general || 0)}
            className="h-10 w-28 rounded-lg border border-concrete-300 bg-white pl-3 pr-8 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
          />
          <Percent className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-concrete-400" />
        </div>
        <p className="w-44 shrink-0 text-right text-xs text-concrete-500">
          {efectivo > 0 ? (
            <>
              costo {formatARS(EJEMPLO)} →{" "}
              <strong className="text-lime-700">
                {formatARS(salePrice(EJEMPLO, efectivo))}
              </strong>
            </>
          ) : (
            "sin rentabilidad"
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
          <TrendingUp className="size-6" />
        </div>
        <div>
          <p className="tech-label text-steel-500">Tus rentabilidades</p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">
            Precios de venta por marca
          </h1>
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-600">
        Cargá el porcentaje de ganancia que aplicás a cada marca. Cuando
        entres a un producto vas a ver <strong>tu costo</strong> (con tu
        descuento del {customer.discount_pct}%) y{" "}
        <strong>tu precio de venta</strong> ya calculado. Solo vos ves estos
        números.
      </p>

      {cargando ? (
        <div className="flex justify-center py-20">
          <Loader2 className="size-6 animate-spin text-steel-500" />
        </div>
      ) : (
        <>
          <div className="mt-8 overflow-hidden rounded-2xl border border-lime-300 bg-lime-50">
            {filaMarca(
              GENERAL_MARKUP_KEY,
              "Rentabilidad general",
              "Se usa en todo lo que no tenga un porcentaje propio"
            )}
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-concrete-200 bg-white">
            <div className="border-b border-concrete-200 bg-concrete-50 px-5 py-3">
              <h2 className="font-display text-sm font-bold">Por marca</h2>
              <p className="text-xs text-concrete-500">
                Dejá en blanco para usar la rentabilidad general
              </p>
            </div>
            {BRANDS.map((brand) =>
              filaMarca(brand, brand, `Productos de la marca ${brand}`)
            )}
          </div>

          {error && (
            <p className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
              <AlertCircle className="mt-0.5 size-4 shrink-0" /> {error}
            </p>
          )}

          <div className="sticky bottom-4 mt-6 flex flex-wrap items-center gap-3 rounded-full border border-concrete-200 bg-white/95 p-2 shadow-lg backdrop-blur">
            <button
              type="button"
              onClick={guardar}
              disabled={guardando}
              className={`flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors disabled:opacity-60 ${
                guardado
                  ? "bg-lime-500 text-steel-950"
                  : "bg-steel-600 text-white hover:bg-steel-700"
              }`}
            >
              {guardando ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Guardando…
                </>
              ) : guardado ? (
                <>
                  <Check className="size-4" /> Guardado
                </>
              ) : (
                "Guardar rentabilidades"
              )}
            </button>
            <Link
              href="/productos"
              className="text-sm font-medium text-steel-600 hover:text-steel-800"
            >
              Ver el catálogo con mis precios →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
