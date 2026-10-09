import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/catalog";
import {
  CUSTOMER_COOKIE,
  getCustomerById,
  verifyCustomerToken,
} from "@/lib/customers";
import { isEmailConfigured, sendMail } from "@/lib/email";
import {
  notaPedidoHtml,
  notaPedidoTexto,
  notaSubject,
  type NotaPedidoData,
} from "@/lib/nota-pedido";
import { saveOrder } from "@/lib/orders";
import { discountedPrice, site } from "@/lib/site";
import type { OrderItem } from "@/lib/types";

interface Payload {
  contacto?: { persona?: string; telefono?: string; email?: string };
  entrega?: {
    metodo?: "retiro" | "envio";
    direccion?: string;
    codigoPostal?: string;
    fechaNecesaria?: string;
  };
  referencia?: string;
  observaciones?: string;
  items?: { slug: string; quantity: number; size?: string; color?: string; variant?: string; packaging?: string }[];
}

function buildNumero(date: Date, orderId: string) {
  const yyyymmdd = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
  })
    .format(date)
    .replace(/-/g, "");
  return `NP-${yyyymmdd}-${orderId.slice(0, 4).toUpperCase()}`;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const customerId = verifyCustomerToken(cookieStore.get(CUSTOMER_COOKIE)?.value);
  if (!customerId) {
    return NextResponse.json(
      { error: "Iniciá sesión como cliente para cargar una nota de pedido." },
      { status: 401 }
    );
  }
  const customer = await getCustomerById(customerId);
  if (!customer) {
    return NextResponse.json({ error: "Cuenta no encontrada." }, { status: 401 });
  }
  // La nota de pedido sin pago es solo para las cuentas que abre Tresbe
  // con condiciones acordadas, no para quien se registró solo en la web.
  if (customer.self_registered) {
    return NextResponse.json(
      {
        error:
          "Tu cuenta compra por el checkout normal. Si querés cuenta corriente, escribinos por WhatsApp.",
      },
      { status: 403 }
    );
  }

  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const persona = payload.contacto?.persona?.trim();
  const telefono = payload.contacto?.telefono?.trim();
  const email = payload.contacto?.email?.trim();
  const items = payload.items ?? [];

  if (!persona || !telefono) {
    return NextResponse.json(
      { error: "Completá quién hace el pedido y un teléfono de contacto." },
      { status: 400 }
    );
  }
  if (items.length === 0) {
    return NextResponse.json(
      { error: "Agregá al menos un producto al pedido." },
      { status: 400 }
    );
  }
  const metodo = payload.entrega?.metodo === "envio" ? "envio" : "retiro";
  const direccion = payload.entrega?.direccion?.trim() || null;
  const codigoPostal =
    (payload.entrega?.codigoPostal ?? "").replace(/\D/g, "").slice(0, 4) || null;
  if (metodo === "envio" && !direccion) {
    return NextResponse.json(
      { error: "Indicá la dirección de envío." },
      { status: 400 }
    );
  }

  // Los precios se releen del catálogo en el servidor
  const orderItems: OrderItem[] = [];
  let subtotal = 0;
  for (const item of items) {
    const quantity = Math.floor(Number(item.quantity));
    if (!Number.isFinite(quantity) || quantity < 1 || quantity > 99999) {
      return NextResponse.json(
        { error: `Cantidad inválida en el producto "${item.slug}".` },
        { status: 400 }
      );
    }
    const product = await getProductBySlug(item.slug);
    if (!product || !product.active) {
      return NextResponse.json(
        { error: `El producto "${item.slug}" ya no está disponible.` },
        { status: 400 }
      );
    }
    const unitPrice = discountedPrice(product.price, customer.discount_pct);
    subtotal += product.price * quantity;
    orderItems.push({
      product_id: product.id,
      name: product.name,
      unit_price: unitPrice,
      quantity,
      code: product.slug,
      unit: product.unit,
      size: item.size,
      color: item.color,
      variant: item.variant,
      packaging: item.packaging,
    });
  }

  const total = orderItems.reduce((acc, i) => acc + i.unit_price * i.quantity, 0);
  const fecha = new Date();

  const { id: orderId } = await saveOrder({
    customer_name: `${customer.name} — ${persona}`,
    customer_email: email || site.ordersEmail,
    customer_phone: telefono,
    shipping_method: metodo,
    shipping_address: direccion,
    shipping_postal_code: codigoPostal,
    payment_method: "whatsapp",
    status: "pendiente",
    items: orderItems,
    total,
    notes: [
      payload.referencia?.trim() ? `Obra/referencia: ${payload.referencia.trim()}` : null,
      payload.entrega?.fechaNecesaria?.trim()
        ? `Fecha necesaria: ${payload.entrega.fechaNecesaria.trim()}`
        : null,
      payload.observaciones?.trim(),
    ]
      .filter(Boolean)
      .join(" · ") || null,
    customer_id: customer.id,
    discount_pct: customer.discount_pct,
    order_type: "distribuidora",
    order_number: null,
  });

  const numero = buildNumero(fecha, orderId);

  const data: NotaPedidoData = {
    numero,
    fecha,
    customer,
    contacto: { persona, telefono, email: email || "—" },
    entrega: {
      metodo,
      direccion,
      codigoPostal,
      fechaNecesaria: payload.entrega?.fechaNecesaria?.trim() || null,
    },
    referencia: payload.referencia?.trim() || null,
    observaciones: payload.observaciones?.trim() || null,
    items: orderItems,
    subtotal,
    descuentoPct: customer.discount_pct,
    total,
  };

  const html = notaPedidoHtml(data);
  const text = notaPedidoTexto(data);
  const subject = notaSubject(data);

  const mail = await sendMail({
    to: site.ordersEmail,
    subject,
    html,
    text,
    replyTo: email || undefined,
  });

  return NextResponse.json({
    numero,
    orderId,
    total,
    emailEnviado: mail.sent,
    emailConfigurado: isEmailConfigured(),
    emailError: mail.error ?? null,
    destinatario: site.ordersEmail,
    // Respaldo para que la nota nunca se pierda si el mail falla
    asunto: subject,
    texto: text,
    html,
  });
}
