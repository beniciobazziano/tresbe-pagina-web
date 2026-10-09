"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
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

/** Medios de pago configurados en el servidor (GET /api/checkout) */
interface PaymentConfig {
  mercadopago: boolean;
  stripe: boolean;
  envioOnline: boolean;
}

/** Respuesta de /api/envio/cotizar */
type ShippingQuote =
  | {
      aCotizar: false;
      costo: number;
      transporte: string;
      pesoKg: number;
      bultos: number;
      estimado: boolean;
    }
  | { aCotizar: true; motivo: string };

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

  // Los datos de contacto arrancan con lo que tenga la cuenta y quedan
  // editables: null = todavía no lo tocó, se muestra el de la cuenta.
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [phoneInput, setPhoneInput] = useState<string | null>(null);
  const [postalCodeInput, setPostalCodeInput] = useState<string | null>(null);
  const email = emailInput ?? customer?.email ?? "";
  const phone = phoneInput ?? customer?.phone ?? "";
  const postalCode = postalCodeInput ?? customer?.postal_code ?? "";
  const setEmail = setEmailInput;
  const setPhone = setPhoneInput;
  const setPostalCode = setPostalCodeInput;
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("retiro");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("mercadopago");

  // Solo se ofrecen los medios de pago configurados (WhatsApp siempre)
  const [payConfig, setPayConfig] = useState<PaymentConfig | null>(null);
  useEffect(() => {
    let vivo = true;
    fetch("/api/checkout", { cache: "no-store" })
      .then((r) => r.json())
      .then((c) => {
        if (vivo) setPayConfig(c);
      })
      .catch(() => {
        if (vivo) setPayConfig({ mercadopago: false, stripe: false, envioOnline: false });
      });
    return () => {
      vivo = false;
    };
  }, []);
  const pagoDisponible = (m: PaymentMethod) =>
    m === "whatsapp" ||
    (m === "mercadopago" && payConfig?.mercadopago === true) ||
    (m === "stripe" && payConfig?.stripe === true);
  // Si el elegido no está disponible, se usa el primero que sí lo esté
  const paymentEfectivo: PaymentMethod = pagoDisponible(payment)
    ? payment
    : payConfig?.mercadopago
    ? "mercadopago"
    : payConfig?.stripe
    ? "stripe"
    : "whatsapp";
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "pago"
      ? "El pago no se completó. Podés intentar de nuevo o elegir otro método."
      : null
  );

  // Cotización del envío en vivo (Andreani) según el CP y el carrito. Se
  // guarda junto a la "clave" del pedido cotizado: si cambia el CP o el
  // carrito, la cotización vieja deja de mostrarse sola.
  const [quoted, setQuoted] = useState<{ key: string; data: ShippingQuote } | null>(
    null
  );
  const quoteSeq = useRef(0);

  const cpListo = /^\d{4}$/.test(postalCode);
  const itemsKey = items.map((i) => `${i.product.slug}:${i.quantity}`).join("|");
  const quoteKey = `${postalCode}|${itemsKey}`;
  const necesitaCotizar = shippingMethod === "envio" && cpListo && items.length > 0;

  const quote = necesitaCotizar && quoted?.key === quoteKey ? quoted.data : null;
  const quoting = necesitaCotizar && !quote;

  useEffect(() => {
    if (!necesitaCotizar) return;
    const seq = ++quoteSeq.current;
    const key = quoteKey;
    const body = JSON.stringify({
      postalCode,
      items: items.map((i) => ({ slug: i.product.slug, quantity: i.quantity })),
    });
    // Pequeño debounce mientras se tipea el CP
    const timer = setTimeout(async () => {
      let data: ShippingQuote = {
        aCotizar: true,
        motivo: "No pudimos calcular el envío. Lo coordinamos por WhatsApp.",
      };
      try {
        const res = await fetch("/api/envio/cotizar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });
        const json = await res.json();
        if (res.ok) data = json;
      } catch {
        // se queda con el mensaje de "a cotizar"
      }
      if (seq === quoteSeq.current) setQuoted({ key, data });
    }, 400);
    return () => clearTimeout(timer);
    // itemsKey/quoteKey resumen el carrito: evita recotizar en cada render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [necesitaCotizar, quoteKey]);

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

  // Nota de pedido sin pago online: SOLO para las cuentas que abre Tresbe
  // (condiciones acordadas). Quien se registró solo en la web paga normal.
  const esCliente = Boolean(customer) && customer?.self_registered !== true;
  // Voluminosos, o un destino que Andreani no cotiza ⇒ el flete se
  // cotiza aparte, antes de pagar
  const quoteFlow =
    !esCliente &&
    shippingMethod === "envio" &&
    (hasBulky || quote?.aCotizar === true);

  const shippingCost =
    shippingMethod === "envio" && quote && !quote.aCotizar ? quote.costo : 0;
  const productosTotal = discountPct > 0 ? discountedTotal : total;
  const totalConEnvio = productosTotal + shippingCost;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    // Cliente registrado: nota de pedido directa, sin pago
    if (esCliente) {
      try {
        const res = await fetch("/api/cliente/nota-pedido", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contacto: { persona: name, telefono: phone, email },
            entrega: {
              metodo: shippingMethod,
              direccion: address,
              codigoPostal: postalCode,
            },
            observaciones: notes,
            items: items.map((i) => ({
            slug: i.product.slug,
            quantity: i.quantity,
            size: i.options?.size,
            color: i.options?.color,
            variant: i.options?.variant,
            packaging: i.options?.packaging,
          })),
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "No pudimos enviar el pedido.");
          return;
        }
        clear();
        router.push(
          `/checkout/gracias?pedido=${encodeURIComponent(data.numero)}&metodo=nota${
            data.emailEnviado ? "" : "&mail=pendiente"
          }`
        );
        return;
      } catch {
        setError("No pudimos enviar el pedido. Revisá tu conexión e intentá de nuevo.");
        return;
      } finally {
        setSubmitting(false);
      }
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name, email, phone },
          shipping: { method: shippingMethod, address, postalCode },
          payment: quoteFlow ? "whatsapp" : paymentEfectivo,
          items: items.map((i) => ({
            slug: i.product.slug,
            quantity: i.quantity,
            size: i.options?.size,
            color: i.options?.color,
            variant: i.options?.variant,
            packaging: i.options?.packaging,
          })),
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
      <h1 className="font-display text-3xl font-bold tracking-tight">
        {esCliente ? "Enviar pedido" : "Finalizar compra"}
      </h1>
      {esCliente && (
        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-concrete-600">
          <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-lime-800">
            Cuenta {customer?.name}
          </span>
          Sin pago online: nos llega la nota de pedido y lo preparamos. Después
          coordinamos el pago como siempre.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          {/* Datos */}
          <section className="rounded-xl border border-concrete-200 bg-white p-6">
            <h2 className="font-display text-lg font-bold">1 · Tus datos</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">
                  {esCliente ? "Quién hace el pedido *" : "Nombre y apellido *"}
                </span>
                <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Juan Pérez" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Teléfono / WhatsApp *</span>
                <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="223 555-0000" />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium">
                  Email {esCliente ? "(opcional)" : "*"}
                </span>
                <input
                  required={!esCliente}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="tu@email.com"
                />
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
              <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_140px]">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium">
                    Dirección de envío *
                  </span>
                  <input
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={inputClass}
                    placeholder="Calle, número, localidad"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium">Código postal *</span>
                  <input
                    required
                    inputMode="numeric"
                    maxLength={4}
                    autoComplete="postal-code"
                    value={postalCode}
                    onChange={(e) =>
                      setPostalCode(e.target.value.replace(/\D/g, ""))
                    }
                    className={inputClass}
                    placeholder="7600"
                  />
                </label>
              </div>
            )}

            {/* Cotización del flete en vivo */}
            {shippingMethod === "envio" && !hasBulky && cpListo && (
              <div className="mt-4 rounded-lg bg-concrete-50 p-3 text-xs leading-5 text-concrete-700">
                {quoting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-3.5 animate-spin" />
                    Calculando el envío a tu código postal…
                  </span>
                ) : quote && !quote.aCotizar ? (
                  <span className="flex items-start gap-2">
                    <Truck className="mt-0.5 size-4 shrink-0 text-steel-600" />
                    <span>
                      Envío por <strong>{quote.transporte}</strong> a CP{" "}
                      {postalCode}:{" "}
                      <strong>{formatARS(quote.costo)}</strong> ·{" "}
                      {quote.bultos} bulto{quote.bultos !== 1 && "s"},{" "}
                      {quote.pesoKg} kg
                      {quote.estimado && (
                        <span className="mt-0.5 block text-concrete-500">
                          Peso estimado: si al preparar el pedido cambia, te
                          avisamos antes de despacharlo.
                        </span>
                      )}
                    </span>
                  </span>
                ) : quote?.aCotizar ? (
                  <span className="flex items-start gap-2">
                    <Truck className="mt-0.5 size-4 shrink-0 text-steel-600" />
                    {quote.motivo}
                  </span>
                ) : (
                  "No pudimos calcular el envío. Lo coordinamos por WhatsApp."
                )}
              </div>
            )}

            {shippingMethod === "envio" && hasBulky && (
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-lime-50 p-3 text-xs leading-5 text-lime-900">
                <Truck className="mt-0.5 size-4 shrink-0" />
                Tu pedido incluye materiales voluminosos: te contactamos por
                WhatsApp con la cotización del flete y el link de pago. No pagás
                nada todavía.
              </p>
            )}
          </section>

          {/* Pago (el cliente con cuenta no paga online) */}
          <section className="rounded-xl border border-concrete-200 bg-white p-6">
            <h2 className="font-display text-lg font-bold">
              {esCliente ? "3 · Observaciones" : "3 · Pago"}
            </h2>
            {esCliente ? (
              <p className="mt-4 text-sm leading-6 text-concrete-700">
                Tu cuenta ya tiene condiciones acordadas, así que no hace falta
                elegir forma de pago. Contanos cualquier detalle para preparar
                el pedido.
              </p>
            ) : quoteFlow ? (
              <p className="mt-4 text-sm leading-6 text-concrete-700">
                El pago se coordina después de cotizar el flete. Confirmá el
                pedido y seguimos por WhatsApp.
              </p>
            ) : (
              <div className="mt-4 grid gap-3">
                {payConfig?.mercadopago && (
                  <button
                    type="button"
                    onClick={() => setPayment("mercadopago")}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                      paymentEfectivo === "mercadopago"
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
                )}
                {payConfig?.stripe && (
                  <button
                    type="button"
                    onClick={() => setPayment("stripe")}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                      paymentEfectivo === "stripe"
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
                )}
                <button
                  type="button"
                  onClick={() => setPayment("whatsapp")}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    paymentEfectivo === "whatsapp"
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
                {payConfig && !payConfig.mercadopago && !payConfig.stripe && (
                  <p className="rounded-lg bg-concrete-50 p-3 text-xs leading-5 text-concrete-600">
                    El pago online se está habilitando: por ahora confirmá el
                    pedido y coordinamos el pago por WhatsApp.
                  </p>
                )}
              </div>
            )}

            <label className="mt-5 block text-sm">
              <span className="mb-1.5 block font-medium">
                {esCliente
                  ? "Obra, referencia y observaciones (opcional)"
                  : "Notas del pedido (opcional)"}
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-concrete-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-concrete-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
                placeholder={
                  esCliente
                    ? "Obra Alvarado 3200, fecha necesaria, facturar A, horario de retiro…"
                    : "Horario de entrega, referencias, factura A, etc."
                }
              />
            </label>
          </section>
        </div>

        {/* Resumen */}
        <aside className="h-fit rounded-xl border border-concrete-200 bg-white p-6">
          <h2 className="font-display text-lg font-bold">Tu pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map(({ product, quantity, options }) => (
              <li key={product.id + (options?.size ?? "") + (options?.color ?? "") + (options?.variant ?? "") + (options?.packaging ?? "")} className="flex justify-between gap-3">
                <span className="text-concrete-700">
                  {quantity} × {product.name}
                  {(options?.variant || options?.size || options?.color || options?.packaging) && (
                    <span className="block text-xs text-concrete-500">
                      {[options?.variant, options?.size, options?.color, options?.packaging].filter(Boolean).join(" · ")}
                    </span>
                  )}
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
          {shippingCost > 0 && (
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-concrete-700">
                Envío a CP {postalCode}
                {quote && !quote.aCotizar && (
                  <span className="block text-xs text-concrete-500">
                    {quote.transporte}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-semibold">
                {formatARS(shippingCost)}
              </span>
            </div>
          )}
          <div className="mt-4 flex justify-between border-t border-concrete-200 pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-display text-xl font-bold text-steel-700">
              {formatARS(totalConEnvio)}
            </span>
          </div>
          {quoteFlow && (
            <p className="mt-2 text-xs text-concrete-500">+ flete a cotizar</p>
          )}
          {shippingMethod === "envio" && !hasBulky && !cpListo && (
            <p className="mt-2 text-xs text-concrete-500">
              Completá tu código postal para ver el costo del envío.
            </p>
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
                <Loader2 className="size-4 animate-spin" />{" "}
                {esCliente ? "Enviando…" : "Procesando…"}
              </>
            ) : esCliente ? (
              "Enviar pedido"
            ) : quoteFlow || paymentEfectivo === "whatsapp" ? (
              "Confirmar pedido"
            ) : (
              "Ir a pagar"
            )}
          </button>
          <p className="mt-3 text-center text-xs text-concrete-500">
            {esCliente
              ? "Nos llega la nota de pedido y lo preparamos."
              : "Al confirmar aceptás ser contactado para coordinar la entrega."}
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
