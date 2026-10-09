import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/catalog";
import { cotizarEnvio, isAndreaniConfigured } from "@/lib/shipping/andreani";
import { armarBultos } from "@/lib/shipping/packing";
import type { Product } from "@/lib/types";

/**
 * Cotiza el envío en tiempo real con Andreani a partir del código postal
 * y de lo que hay en el carrito (peso y volumen reales de cada producto).
 *
 * Siempre responde 200: si no se puede cotizar online devuelve
 * `aCotizar: true` con el motivo, y el checkout ofrece coordinar el flete
 * por WhatsApp en vez de romper la compra.
 */

interface Payload {
  postalCode?: string;
  items?: { slug: string; quantity: number }[];
}

const CP_VALIDO = /^\d{4}$/;

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  // Andreani tarifa por CP numérico de 4 dígitos (del CPA A1234BCD sirve
  // el número del medio).
  const cp = (payload.postalCode ?? "").trim().replace(/\D/g, "").slice(0, 4);
  if (!CP_VALIDO.test(cp)) {
    return NextResponse.json(
      { error: "Ingresá un código postal de 4 números." },
      { status: 400 }
    );
  }

  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length === 0) {
    return NextResponse.json({ error: "El carrito está vacío." }, { status: 400 });
  }

  // El peso y el precio se releen del catálogo: nunca se confía del navegador
  const resolved: { product: Product; quantity: number }[] = [];
  let valorDeclarado = 0;
  for (const item of items) {
    const product = await getProductBySlug(item.slug);
    const quantity = Math.floor(Number(item.quantity));
    if (!product || !product.active || quantity < 1 || quantity > 9999) {
      return NextResponse.json(
        { error: "Uno de los productos del carrito ya no está disponible." },
        { status: 400 }
      );
    }
    resolved.push({ product, quantity });
    valorDeclarado += product.price * quantity;
  }

  const empaque = armarBultos(resolved, valorDeclarado);

  if (empaque.hayVoluminosos) {
    return NextResponse.json({
      aCotizar: true,
      motivo:
        "Tu pedido incluye materiales voluminosos: el flete lo cotizamos aparte por WhatsApp.",
    });
  }

  if (!isAndreaniConfigured) {
    return NextResponse.json({
      aCotizar: true,
      motivo: "Coordinamos el envío por WhatsApp y te pasamos el costo.",
    });
  }

  try {
    const quote = await cotizarEnvio(cp, empaque.bultos);
    if (!quote) {
      return NextResponse.json({
        aCotizar: true,
        motivo: "Coordinamos el envío por WhatsApp y te pasamos el costo.",
      });
    }
    return NextResponse.json({
      aCotizar: false,
      costo: Math.round(quote.total),
      transporte: "Andreani",
      pesoKg: empaque.pesoTotalKg,
      bultos: empaque.bultos.length,
      estimado: empaque.estimado,
    });
  } catch (error) {
    console.error("[envio/cotizar] Andreani:", error);
    return NextResponse.json({
      aCotizar: true,
      motivo:
        "No pudimos cotizar el envío en este momento. Lo coordinamos por WhatsApp.",
    });
  }
}
