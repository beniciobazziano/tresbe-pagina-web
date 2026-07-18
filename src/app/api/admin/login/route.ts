import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  checkLocalAdminCredentials,
  signAdminToken,
} from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const username = body.username?.trim() ?? "";
  const password = body.password ?? "";
  if (!username || !password) {
    return NextResponse.json(
      { error: "Ingresá usuario y contraseña." },
      { status: 400 }
    );
  }

  // 1) Admin local definido en .env.local (funciona siempre)
  if (checkLocalAdminCredentials(username, password)) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_COOKIE, signAdminToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 14, // 14 días
    });
    return response;
  }

  // 2) Usuario de Supabase Auth (el username es el email)
  if (isSupabaseConfigured && username.includes("@")) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });
    if (!error) return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Usuario o contraseña incorrectos." },
    { status: 401 }
  );
}
