import { NextResponse } from "next/server";
import { BRANDS } from "@/lib/brands";
import { getSessionCustomer, saveCustomerMarkups } from "@/lib/customers";
import { GENERAL_MARKUP_KEY, type Markups } from "@/lib/types";

export async function GET() {
  const customer = await getSessionCustomer();
  if (!customer) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  return NextResponse.json({ markups: customer.markups ?? {} });
}

export async function POST(request: Request) {
  const customer = await getSessionCustomer();
  if (!customer) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: { markups?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  // Solo se aceptan las marcas oficiales y la clave general, con valores 0–500
  const permitidas = new Set<string>([...BRANDS, GENERAL_MARKUP_KEY]);
  const markups: Markups = {};
  for (const [key, value] of Object.entries(body.markups ?? {})) {
    if (!permitidas.has(key)) continue;
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) continue;
    markups[key] = Math.min(500, Math.round(n * 100) / 100);
  }

  try {
    await saveCustomerMarkups(customer.id, markups);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo guardar." },
      { status: 500 }
    );
  }
  return NextResponse.json({ markups });
}
