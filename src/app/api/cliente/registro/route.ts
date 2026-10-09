import { NextResponse } from "next/server";
import {
  CUSTOMER_COOKIE,
  registerCustomer,
  signCustomerToken,
} from "@/lib/customers";

/** Alta de cuenta desde la web: email, teléfono y código postal */
export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    phone?: string;
    postalCode?: string;
    password?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const phone = body.phone?.trim() ?? "";
  const postalCode = (body.postalCode ?? "").trim().replace(/\D/g, "").slice(0, 4);
  const password = body.password ?? "";

  if (!name) {
    return NextResponse.json({ error: "Escribí tu nombre." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Revisá el email." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json(
      { error: "Escribí un teléfono válido con característica." },
      { status: 400 }
    );
  }
  if (!/^\d{4}$/.test(postalCode)) {
    return NextResponse.json(
      { error: "El código postal son 4 números (ej: 7600)." },
      { status: 400 }
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "La contraseña tiene que tener al menos 6 caracteres." },
      { status: 400 }
    );
  }

  try {
    const customer = await registerCustomer({
      name,
      email,
      phone,
      postal_code: postalCode,
      password,
    });

    // Queda logueado al terminar el registro
    const response = NextResponse.json({ customer });
    response.cookies.set(CUSTOMER_COOKIE, signCustomerToken(customer.id), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 días
    });
    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No pudimos crear la cuenta.";
    const yaExiste = /ya hay una cuenta/i.test(message);
    return NextResponse.json(
      {
        error: yaExiste
          ? "Ya hay una cuenta con ese email. Iniciá sesión."
          : "No pudimos crear la cuenta. Probá de nuevo.",
      },
      { status: yaExiste ? 409 : 500 }
    );
  }
}
