import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/catalog";
import {
  CUSTOMER_COOKIE,
  getCustomerById,
  verifyCustomerToken,
} from "@/lib/customers";
import { saveOrder } from "@/lib/orders";
import { discountedPrice, site, whatsappLink } from "@/lib/site";
import type { OrderItem, PaymentMethod, ShippingMethod } from "@/lib/types";

interface CheckoutPayload {
  customer: { name: string; email: string; phone: string };
  shipping: { method: ShippingMethod; address?: string };
  payment: PaymentMethod;
  items: { slug: string; quantity: number }[];
  notes?: string;
}

export async function POST(request: Request) {
  let payload: CheckoutPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const { customer, shipping, payment, items, notes } = payload;

  if (
    !customer?.name?.trim() ||
    !customer?.email?.trim() ||
    !customer?.phone?.trim() ||
    !Array.isArray(items) ||
    items.length === 0
  ) {
    return NextResponse.json(
      { error: "Completá tus datos y agregá productos al carrito." },
      { status: 400 }
    );
  }

  if (shipping.method === "envio" && !shipping.address?.trim()) {
    return NextResponse.json(
      { error: "Indicá la dirección de envío." },
      { status: 400 }
    );
  }

  // Los precios se releen del catálogo en el servidor: el total nunca
  // se confía del navegador.
  const orderItems: OrderItem[] = [];
  let hasBulky = false;
  for (const item of items) {
    const product = await getProductBySlug(item.slug);
    const quantity = Math.floor(Number(item.quantity));
    if (!product || !product.active || quantity < 1 || quantity > 9999) {
      return NextResponse.json(
        { error: "Uno de los productos del carrito ya no está disponible." },
        { status: 400 }
      );
    }
    if (product.bulky) hasBulky = true;
    orderItems.push({
      product_id: product.id,
      name: product.name,
      unit_price: product.price,
      quantity,
    });
  }

  // Cliente registrado: el descuento se lee de la cookie firmada y se
  // revalida contra la base — nunca del navegador.
  const cookieStore = await cookies();
  const customerId = verifyCustomerToken(cookieStore.get(CUSTOMER_COOKIE)?.value);
  const account = customerId ? await getCustomerById(customerId) : null;
  const discountPct = account?.discount_pct ?? 0;

  const payItems = orderItems.map((i) => ({
    ...i,
    unit_price: discountedPrice(i.unit_price, discountPct),
  }));
  const total = payItems.reduce((acc, i) => acc + i.unit_price * i.quantity, 0);

  // Con voluminosos + envío, el pedido pasa a cotización: primero el flete,
  // después el pago.
  const needsQuote =
    shipping.method === "cotizacion" || (shipping.method === "envio" && hasBulky);
  const effectiveShipping: ShippingMethod = needsQuote ? "cotizacion" : shipping.method;
  const effectivePayment: PaymentMethod = needsQuote ? "whatsapp" : payment;

  const { id: orderId } = await saveOrder({
    customer_name: customer.name.trim(),
    customer_email: customer.email.trim(),
    customer_phone: customer.phone.trim(),
    shipping_method: effectiveShipping,
    shipping_address: shipping.address?.trim() || null,
    payment_method: effectivePayment,
    status: needsQuote ? "a_cotizar" : "pendiente",
    items: orderItems,
    total,
    notes: notes?.trim() || null,
    customer_id: account?.id ?? null,
    discount_pct: discountPct,
  });

  const shortId = orderId.slice(0, 8).toUpperCase();

  if (effectivePayment === "whatsapp") {
    const lines = [
      `¡Hola ${site.name}! Quiero confirmar mi pedido #${shortId}:`,
      "",
      ...orderItems.map(
        (i) => `• ${i.quantity} × ${i.name} — $${i.unit_price.toLocaleString("es-AR")}`
      ),
      "",
      ...(discountPct > 0
        ? [`Cuenta: ${account?.name} (descuento ${discountPct}%)`]
        : []),
      `Total de productos: $${total.toLocaleString("es-AR")}`,
      shipping.method === "retiro"
        ? "Retiro en el local (Chacabuco 6311)."
        : `Envío a: ${shipping.address ?? "a coordinar"}${needsQuote ? " (necesito cotización del flete)" : ""}`,
      `Mis datos: ${customer.name} — ${customer.phone}`,
    ];
    if (notes?.trim()) lines.push(`Notas: ${notes.trim()}`);
    return NextResponse.json({
      type: "whatsapp",
      orderId,
      url: whatsappLink(lines.join("\n")),
    });
  }

  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  if (effectivePayment === "mercadopago") {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        {
          error:
            "Mercado Pago todavía no está configurado (falta MP_ACCESS_TOKEN). Podés confirmar el pedido por WhatsApp mientras tanto.",
        },
        { status: 503 }
      );
    }
    const { MercadoPagoConfig, Preference } = await import("mercadopago");
    const client = new MercadoPagoConfig({ accessToken });
    const preference = await new Preference(client).create({
      body: {
        items: payItems.map((i) => ({
          id: i.product_id,
          title: i.name,
          quantity: i.quantity,
          unit_price: i.unit_price,
          currency_id: "ARS",
        })),
        payer: { name: customer.name, email: customer.email },
        external_reference: orderId,
        back_urls: {
          success: `${origin}/checkout/gracias?pedido=${shortId}&metodo=mercadopago`,
          failure: `${origin}/checkout?error=pago`,
          pending: `${origin}/checkout/gracias?pedido=${shortId}&metodo=mercadopago&estado=pendiente`,
        },
        auto_return: "approved",
      },
    });
    return NextResponse.json({
      type: "redirect",
      orderId,
      url: preference.init_point,
    });
  }

  if (effectivePayment === "stripe") {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        {
          error:
            "Stripe todavía no está configurado (falta STRIPE_SECRET_KEY). Podés pagar con Mercado Pago o confirmar por WhatsApp.",
        },
        { status: 503 }
      );
    }
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: payItems.map((i) => ({
        price_data: {
          currency: "ars",
          product_data: { name: i.name },
          // Stripe usa centavos
          unit_amount: i.unit_price * 100,
        },
        quantity: i.quantity,
      })),
      customer_email: customer.email,
      client_reference_id: orderId,
      success_url: `${origin}/checkout/gracias?pedido=${shortId}&metodo=stripe`,
      cancel_url: `${origin}/checkout?error=pago`,
    });
    return NextResponse.json({ type: "redirect", orderId, url: session.url });
  }

  return NextResponse.json({ error: "Método de pago desconocido." }, { status: 400 });
}
