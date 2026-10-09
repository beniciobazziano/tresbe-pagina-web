"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Plug, XCircle } from "lucide-react";

const CAPABILITY_LABELS: Record<string, string> = {
  "orders.read": "Traer los pedidos de la tienda a Bynet",
  "orders.write": "Actualizar el estado y el seguimiento de los pedidos desde Bynet",
  "order_notes.read": "Traer las notas de pedido del portal de clientes",
  "catalog.write": "Publicar catálogo, precios, stock y fotos desde Bynet",
  "catalog.read": "Importar en Bynet los productos que ya están en la web",
  "customers.read": "Traer las cuentas de clientes",
};

const ENDPOINTS = [
  ["GET", "/ping", "Comprobar conexión y permisos"],
  ["GET", "/orders?since=&limit=", "Pedidos del checkout"],
  ["POST", "/orders/<id>/status", "Cambiar estado y seguimiento de un pedido"],
  ["GET", "/order-notes?since=", "Notas de pedido de distribuidora"],
  ["PUT", "/catalog", "Publicar productos, precios, stock y fotos"],
  ["GET", "/catalog", "Catálogo actual de la tienda"],
  ["GET", "/customers", "Cuentas de clientes"],
];

interface TestResult {
  ok: boolean;
  status?: number;
  url?: string;
  error?: string | null;
  body?: { store?: string; capabilities?: string[] } | null;
}

export function BynetConnectPanel({
  baseUrl,
  keyHint,
  capabilities,
  supabase,
  serviceKey,
}: {
  baseUrl: string;
  keyHint: string | null;
  capabilities: string[];
  supabase: boolean;
  serviceKey: boolean;
}) {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  async function test() {
    setTesting(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/bynet/test", { method: "POST" });
      if (res.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      setResult((await res.json()) as TestResult);
    } catch (error) {
      setResult({
        ok: false,
        error: error instanceof Error ? error.message : "No se pudo probar.",
      });
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="tech-label text-steel-500">Integraciones</p>
        <h2 className="font-display text-xl font-bold">Conectar con Bynet</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-concrete-700">
          Bynet (el sistema de gestión de escritorio) consulta esta tienda cada
          pocos minutos: trae pedidos y notas de pedido, actualiza estados y
          publica catálogo, precios y stock. En Bynet → <strong>Página web</strong>{" "}
          → <strong>Vincular</strong> pegá estos datos.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-concrete-200 bg-white p-6">
          <h3 className="tech-label text-[10px] text-steel-500">Datos para Bynet</h3>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="text-concrete-600">URL de la tienda</dt>
              <dd className="mt-0.5 font-mono text-[13px]">{baseUrl}</dd>
            </div>
            <div>
              <dt className="text-concrete-600">Prefijo de la API</dt>
              <dd className="mt-0.5 font-mono text-[13px]">/api/bynet</dd>
            </div>
            <div>
              <dt className="text-concrete-600">Clave de API (BYNET_API_KEY)</dt>
              <dd className="mt-0.5">
                {keyHint ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="font-mono text-[13px]">••••••••••••{keyHint}</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      configurada
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                      sin configurar
                    </span>
                    <span className="text-concrete-600">
                      agregá <span className="font-mono">BYNET_API_KEY</span> en{" "}
                      <span className="font-mono">.env.local</span> y reiniciá
                    </span>
                  </span>
                )}
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-concrete-600">
            La clave completa está solo en <span className="font-mono">.env.local</span>{" "}
            de este equipo: copiala de ahí y pegala en Bynet.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={test}
              disabled={testing}
              className="flex h-10 items-center gap-2 rounded-full bg-steel-600 px-5 text-sm font-semibold text-white hover:bg-steel-700 disabled:opacity-60"
            >
              {testing ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Plug className="size-4" />
              )}
              Probar conexión
            </button>
            {result && (
              <span
                className={`flex items-center gap-1.5 text-sm font-medium ${
                  result.ok ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {result.ok ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <XCircle className="size-4" />
                )}
                {result.ok
                  ? `OK: ${result.body?.store ?? "tienda"} respondió (${result.status})`
                  : (result.error ?? "Falló la prueba")}
              </span>
            )}
          </div>
          {result?.url && (
            <p className="mt-2 font-mono text-xs text-concrete-500">{result.url}</p>
          )}
        </section>

        <section className="rounded-2xl border border-concrete-200 bg-white p-6">
          <h3 className="tech-label text-[10px] text-steel-500">Capacidades</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-600" />
                <span>
                  <span className="font-mono text-[12px] text-steel-700">{cap}</span>
                  <span className="text-concrete-600"> — {CAPABILITY_LABELS[cap] ?? cap}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-concrete-600">
            Bynet muestra estas capacidades y vos elegís cuáles activar desde
            allá.
          </p>
        </section>
      </div>

      <section className="rounded-2xl border border-concrete-200 bg-white p-6">
        <h3 className="tech-label text-[10px] text-steel-500">Endpoints</h3>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {ENDPOINTS.map(([method, route, label]) => (
              <tr key={route} className="border-t border-concrete-100">
                <td className="py-2 pr-3 font-mono text-[12px] font-semibold text-steel-700">
                  {method}
                </td>
                <td className="py-2 pr-3 font-mono text-[12px]">/api/bynet{route}</td>
                <td className="py-2 text-concrete-600">{label}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs leading-5 text-concrete-600">
          Todas las llamadas llevan{" "}
          <span className="font-mono">Authorization: Bearer &lt;clave&gt;</span>. Sin
          clave configurada responden 503; con clave incorrecta, 401.
        </p>
      </section>

      {supabase && !serviceKey && (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
          <strong>Supabase:</strong> para que Bynet pueda escribir pedidos y
          catálogo sin sesión de administrador, agregá{" "}
          <span className="font-mono">SUPABASE_SERVICE_ROLE_KEY</span> en{" "}
          <span className="font-mono">.env.local</span> y ejecutá el bloque
          &quot;Bynet Connect&quot; de <span className="font-mono">supabase/schema.sql</span>.
        </p>
      )}
    </div>
  );
}
