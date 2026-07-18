"use client";

import { useCallback, useEffect, useState } from "react";
import { Inbox, Loader2, MessageCircle } from "lucide-react";
import { formatARS } from "@/lib/site";
import type { Order, OrderStatus } from "@/lib/types";

const STATUS_OPTIONS: { value: OrderStatus; label: string; badge: string }[] = [
  { value: "pendiente", label: "Pendiente de pago", badge: "bg-amber-100 text-amber-800" },
  { value: "a_cotizar", label: "A cotizar flete", badge: "bg-lime-100 text-lime-800" },
  { value: "pagado", label: "Pagado", badge: "bg-emerald-100 text-emerald-800" },
  { value: "preparando", label: "En preparación", badge: "bg-steel-100 text-steel-800" },
  { value: "entregado", label: "Entregado", badge: "bg-concrete-100 text-concrete-700" },
  { value: "cancelado", label: "Cancelado", badge: "bg-red-100 text-red-800" },
];

const SHIPPING_LABEL: Record<Order["shipping_method"], string> = {
  retiro: "Retiro en el local",
  envio: "Envío a domicilio",
  cotizacion: "Flete a cotizar",
};

export function OrdersPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/orders", { cache: "no-store" });
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const data = await res.json();
    if (!res.ok) setError(data.error ?? "No se pudieron cargar los pedidos.");
    else setOrders(data.orders);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(id: string, status: OrderStatus) {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    const res = await fetch("/api/admin/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!res.ok) load();
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="size-6 animate-spin text-steel-500" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="rounded-xl bg-red-50 p-5 text-sm leading-6 text-red-800">{error}</p>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-concrete-300 bg-white px-6 py-20 text-center">
        <Inbox className="size-10 text-concrete-400" />
        <div>
          <h2 className="font-semibold">Todavía no hay pedidos</h2>
          <p className="mt-1 text-sm text-concrete-600">
            Cuando alguien compre en la tienda, los pedidos aparecen acá.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const status = STATUS_OPTIONS.find((s) => s.value === order.status);
        return (
          <details
            key={order.id}
            className="group rounded-xl border border-concrete-200 bg-white"
          >
            <summary className="flex cursor-pointer flex-wrap items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-sm font-bold">
                #{order.id.slice(0, 8).toUpperCase()}
              </span>
              <span className="text-sm text-concrete-600">
                {new Date(order.created_at).toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="text-sm font-medium">{order.customer_name}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status?.badge}`}>
                {status?.label}
              </span>
              <span className="ml-auto font-display font-bold text-steel-700">
                {formatARS(order.total)}
              </span>
            </summary>
            <div className="border-t border-concrete-100 p-5">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="tech-label text-[10px] text-steel-500">Productos</h3>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {order.items.map((item, i) => (
                      <li key={i} className="flex justify-between gap-3">
                        <span>
                          {item.quantity} × {item.name}
                        </span>
                        <span className="shrink-0 text-concrete-600">
                          {formatARS(item.unit_price * item.quantity)}
                        </span>
                      </li>
                    ))}
                    {order.discount_pct > 0 && (
                      <li className="flex justify-between gap-3 border-t border-concrete-100 pt-1.5 font-medium text-lime-700">
                        <span>Cuenta cliente: descuento {order.discount_pct}%</span>
                        <span className="shrink-0">total c/desc. {formatARS(order.total)}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-medium">Entrega:</span>{" "}
                    {SHIPPING_LABEL[order.shipping_method]}
                    {order.shipping_address && ` — ${order.shipping_address}`}
                  </p>
                  <p>
                    <span className="font-medium">Contacto:</span>{" "}
                    {order.customer_phone} · {order.customer_email}
                  </p>
                  {order.notes && (
                    <p>
                      <span className="font-medium">Notas:</span> {order.notes}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <label className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Estado:</span>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order.id, e.target.value as OrderStatus)
                        }
                        className="h-9 rounded-lg border border-concrete-300 bg-white px-2 text-sm"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <a
                      href={`https://wa.me/${order.customer_phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                        `¡Hola ${order.customer_name}! Te escribimos de Tresbe por tu pedido #${order.id.slice(0, 8).toUpperCase()}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 items-center gap-1.5 rounded-full bg-lime-500 px-4 text-xs font-semibold text-steel-950 hover:bg-lime-400"
                    >
                      <MessageCircle className="size-3.5" /> Contactar cliente
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
