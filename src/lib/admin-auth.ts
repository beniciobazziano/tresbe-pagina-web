import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";

export const ADMIN_COOKIE = "tresbe_admin";

const SECRET =
  process.env.CUSTOMER_SESSION_SECRET ?? "tresbe-dev-secret-cambiar-en-produccion";

const TOKEN_PAYLOAD = "admin:v1";

function hmac(value: string) {
  return createHmac("sha256", `${SECRET}:admin`).update(value).digest("hex");
}

export function signAdminToken() {
  return `${TOKEN_PAYLOAD}.${hmac(TOKEN_PAYLOAD)}`;
}

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;
  const payload = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  if (payload !== TOKEN_PAYLOAD) return false;
  const expected = hmac(payload);
  if (signature.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

/** Credenciales del admin local (definidas en .env.local) */
export function checkLocalAdminCredentials(username: string, password: string) {
  const envUser = process.env.ADMIN_USERNAME;
  const envPass = process.env.ADMIN_PASSWORD;
  if (!envUser || !envPass) return false;
  return (
    username.trim().toLowerCase() === envUser.toLowerCase() && password === envPass
  );
}

/**
 * ¿La petición actual viene del administrador?
 * - Con Supabase configurado: sesión de Supabase Auth.
 * - Sin Supabase: cookie firmada del admin local.
 * La cookie local también vale con Supabase configurado, para que el
 * usuario del .env.local siga funcionando siempre.
 */
export async function isAdminRequest(): Promise<boolean> {
  const cookieStore = await cookies();
  if (verifyAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) return true;

  if (isSupabaseConfigured) {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return Boolean(user);
  }
  return false;
}
