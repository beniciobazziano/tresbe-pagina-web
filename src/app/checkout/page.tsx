"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  AlertCircle,
  CreditCard,
  Loader2,
  MessageCircle,
  Store,
  Truck,
} from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { useCustomer } from "@/components/customer/CustomerProvider";
import { discountedPrice, formatARS } from "@/lib/site";
import type { PaymentMethod, ShippingMethod } from "@/lib/types";

function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, ready, total, hasBulky, clear } = useCart();
  const { customer } = useCustomer();

  const discountPct = customer?.discount_pct ?? 0;
  const discountedTotal = items.reduce(
    (acc, i) => acc + discountedPrice(i.product.price, discountPct) * i.quantity,
    0
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("retiro");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("mercadopago");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "pago"
      ? "El pago no se completó. Podés intentar de nuevo o elegir otro método."
      : null
  );

  if (!ready) return <div className="min-h-[50vh]" />;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-bold">No hay nada para pagar</h1>
        <p className="mt-2 text-sm text-concrete-600">
          Tu carrito está vacío. Agregá productos para finalizar la compra.
        </p>
        <Link
          href="/productos"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  // Voluminosos + envío ⇒ el flete se cotiza antes de pagar
  const quoteFlow = shippingMethod === "envio" && hasBulky;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name, email, phone },
          shipping: { method: shippingMethod, address },
          payment: quoteFlow ? "whatsapp" : payment,
          items: items.map((i) => ({ slug: i.product.slug, quantity: i.quantity })),
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Algo salió mal. Probá de nuevo.");
        return;
      }
      if (data.type === "whatsapp") {
        clear();
        window.open(data.url, "_blank", "noopener");
        router.push(`/checkout/gracias?pedido=${data.orderId.slice(0, 8).toUpperCase()}&metodo=whatsapp`);
        return;
      }
      if (data.type === "redirect" && data.url) {
        clear();
        window.location.href = data.url;
        return;
      }
      setError("Respuesta inesperada del servidor.");
    } catch {
      setError("No pudimos procesar el pedido. Revisá tu conexión e intentá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "h-11 w-full rounded-lg border border-concrete-300 bg-white px-3.5 text-sm outline-none transition-colors placeholder:text-concrete-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-bold tracking-tight">Finalizar compra</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          {/* Datos */}
          <section className="rounded-xl border border-concrete-200 bg-white p-6">
            <h2 className="font-display text-lg font-bold">1 · Tus datos</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Nombre y apellido *</span>
                <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Juan Pérez" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Teléfono / WhatsApp *</span>
                <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="223 555-0000" />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium">Email *</span>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="tu@email.com" />
              </label>
            </div>
          </section>

          {/* Entrega */}
          <section className="rounded-xl border border-concrete-200 bg-white p-6">
            <h2 className="font-display text-lg font-bold">2 · Entrega</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setShippingMethod("retiro")}
                className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                  shippingMethod === "retiro"
                    ? "border-steel-600 bg-steel-50 ring-2 ring-steel-200"
                    : "border-concrete-300 hover:border-steel-400"
                }`}
              >
                <Store className="mt-0.5 size-5 shrink-0 text-steel-600" />
                <span>
                  <span className="block text-sm font-semibold">Retiro en el local</span>
                  <span className="mt-0.5 block text-xs text-concrete-600">
                    Chacabuco 6311, Mar del Plata · gratis
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShippingMethod("envio")}
                className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                  shippingMethod === "envio"
                    ? "border-steel-600 bg-steel-50 ring-2 ring-steel-200"
                    : "border-concrete-300 hover:border-steel-400"
                }`}
              >
                <Truck className="mt-0.5 size-5 shrink-0 text-steel-600" />
                <span>
                  <span className="block text-sm font-semibold">Envío a domicilio</span>
                  <span className="mt-0.5 block text-xs text-concrete-600">
                    Mar del Plata y la zona
                  </span>
                </span>
              </button>
            </div>

            {shippingMethod === "envio" && (
              <label className="mt-4 block text-sm">
                <span className="mb-1.5 block font-medium">Dirección de envío *</span>
                <input
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={inputClass}
                  placeholder="Calle, número, localidad"
                />
              </label>
            )}

            {quoteFlow && (
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-lime-50 p-3 text-xs leading-5 text-lime-900">
                <Truck className="mt-0.5 size-4 shrink-0" />
                Tu pedido incluye materiales voluminosos: te contactamos por
                WhatsApp con la cotización del flete y el link de pago. No pagás
                nada todavía.
              </p>
            )}
          </section>

          {/* Pago */}
          <section className="rounded-xl border border-concrete-200 bg-white p-6">
            <h2 className="font-display text-lg font-bold">3 · Pago</h2>
            {quoteFlow ? (
              <p className="mt-4 text-sm leading-6 text-concrete-700">
                El pago se coordina después de cotizar el flete. Confirmá el
                pedido y seguimos por WhatsApp.
              </p>
            ) : (
              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  onClick={() => setPayment("mercadopago")}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    payment === "mercadopago"
                      ? "border-steel-600 bg-steel-50 ring-2 ring-steel-200"
                      : "border-concrete-300 hover:border-steel-400"
                  }`}
                >
                  <CreditCard className="size-5 shrink-0 text-steel-600" />
                  <span>
                    <span className="block text-sm font-semibold">Mercado Pago</span>
                    <span className="mt-0.5 block text-xs text-concrete-600">
                      Tarjetas, dinero en cuenta y cuotas
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPayment("stripe")}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    payment === "stripe"
                      ? "border-steel-600 bg-steel-50 ring-2 ring-steel-200"
                      : "border-concrete-300 hover:border-steel-400"
                  }`}
                >
                  <CreditCard className="size-5 shrink-0 text-steel-600" />
                  <span>
                    <span className="block text-sm font-semibold">
                      Tarjeta internacional (Stripe)
                    </span>
                    <span className="mt-0.5 block text-xs text-concrete-600">
                      Visa, Mastercard, Amex
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPayment("whatsapp")}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    payment === "whatsapp"
                      ? "border-steel-600 bg-steel-50 ring-2 ring-steel-200"
                      : "border-concrete-300 hover:border-steel-400"
                  }`}
                >
                  <MessageCircle className="size-5 shrink-0 text-steel-600" />
                  <span>
                    <span className="block text-sm font-semibold">Coordinar por WhatsApp</span>
                    <span className="mt-0.5 block text-xs text-concrete-600">
                      Transferencia, efectivo en el local u otro medio
                    </span>
                  </span>
                </button>
              </div>
            )}

            <label className="mt-5 block text-sm">
              <span className="mb-1.5 block font-medium">Notas del pedido (opcional)</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-concrete-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-concrete-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
                placeholder="Horario de entrega, referencias, factura A, etc."
              />
            </label>
          </section>
        </div>

        {/* Resumen */}
        <aside className="h-fit rounded-xl border border-concrete-200 bg-white p-6">
          <h2 className="font-display text-lg font-bold">Tu pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between gap-3">
                <span className="text-concrete-700">
                  {quantity} × {product.name}
                </span>
                <span className="shrink-0 font-semibold">
                  {formatARS(product.price * quantity)}
                </span>
              </li>
            ))}
          </ul>
          {discountPct > 0 && (
            <div className="mt-3 flex justify-between text-sm text-lime-700">
              <span>Descuento cliente ({discountPct}%)</span>
              <span className="font-semibold">
                −{formatARS(total - discountedTotal)}
              </span>
            </div>
          )}
          <div className="mt-4 flex justify-between border-t border-concrete-200 pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-display text-xl font-bold text-steel-700">
              {formatARS(discountPct > 0 ? discountedTotal : total)}
            </span>
          </div>
          {quoteFlow && (
            <p className="mt-2 text-xs text-concrete-500">+ flete a cotizar</p>
          )}

          {error && (
            <p className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-800">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-lime-500 text-sm font-semibold text-steel-950 transition-colors hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Procesando…
              </>
            ) : quoteFlow || payment === "whatsapp" ? (
              "Confirmar pedido"
            ) : (
              "Ir a pagar"
            )}
          </button>
          <p className="mt-3 text-center text-xs text-concrete-500">
            Al confirmar aceptás ser contactado para coordinar la entrega.
          </p>
        </aside>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <CheckoutForm />
    </Suspense>
  );
}
