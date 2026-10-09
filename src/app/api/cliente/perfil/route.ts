import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  CUSTOMER_COOKIE,
  updateCustomerProfile,
  verifyCustomerToken,
} from "@/lib/customers";

/** El cliente actualiza su teléfono y su código postal de entrega */
export async function POST(request: Request) {
  const cookieStore = await cookies();
  const id = verifyCustomerToken(cookieStore.get(CUSTOMER_COOKIE)?.value);
  if (!id) {
    return NextResponse.json({ error: "Iniciá sesión." }, { status: 401 });
  }

  let body: { phone?: string; postalCode?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const patch: { phone?: string; postal_code?: string } = {};

  if (body.phone !== undefined) {
    const phone = body.phone.trim();
    if (phone.replace(/\D/g, "").length < 8) {
      return NextResponse.json(
        { error: "Escribí un teléfono válido con característica." },
        { status: 400 }
      );
    }
    patch.phone = phone;
  }

  if (body.postalCode !== undefined) {
    const cp = body.postalCode.trim().replace(/\D/g, "").slice(0, 4);
    if (!/^\d{4}$/.test(cp)) {
      return NextResponse.json(
        { error: "El código postal son 4 números (ej: 7600)." },
        { status: 400 }
      );
    }
    patch.postal_code = cp;
  }

  try {
    const customer = await updateCustomerProfile(id, patch);
    return NextResponse.json({ customer });
  } catch {
    return NextResponse.json(
      { error: "No pudimos guardar los cambios." },
      { status: 500 }
    );
  }
}
