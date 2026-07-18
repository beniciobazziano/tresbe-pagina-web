import { NextResponse } from "next/server";
import { authenticateCustomer, CUSTOMER_COOKIE, signCustomerToken } from "@/lib/customers";

export async function POST(request: Request) {
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const username = body.username?.trim();
  const password = body.password;
  if (!username || !password) {
    return NextResponse.json(
      { error: "Ingresá tu usuario y contraseña." },
      { status: 400 }
    );
  }

  const customer = await authenticateCustomer(username, password);
  if (!customer) {
    return NextResponse.json(
      { error: "Usuario o contraseña incorrectos." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ customer });
  response.cookies.set(CUSTOMER_COOKIE, signCustomerToken(customer.id), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });
  return response;
}
