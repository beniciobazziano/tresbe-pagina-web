import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { localAuthCustomer, localGetCustomer } from "./localdb";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";
import type { Customer } from "./types";

export const CUSTOMER_COOKIE = "tresbe_cliente";

// Firma de la cookie de sesión del cliente. En producción definir
// CUSTOMER_SESSION_SECRET en .env.local con un valor largo y aleatorio.
const SECRET =
  process.env.CUSTOMER_SESSION_SECRET ?? "tresbe-dev-secret-cambiar-en-produccion";

function hmac(value: string) {
  return createHmac("sha256", SECRET).update(value).digest("hex");
}

export function signCustomerToken(id: string) {
  return `${id}.${hmac(id)}`;
}

export function verifyCustomerToken(token: string | undefined): string | null {
  if (!token) return null;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return null;
  const id = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  const expected = hmac(id);
  if (signature.length !== expected.length) return null;
  try {
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  return id;
}

export async function authenticateCustomer(
  username: string,
  password: string
): Promise<Customer | null> {
  if (!isSupabaseConfigured) {
    return localAuthCustomer(username, password);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("login_customer", {
    p_username: username,
    p_password: password,
  });
  if (error || !data || data.length === 0) return null;
  const row = data[0];
  return {
    id: row.id,
    name: row.name,
    discount_pct: Number(row.discount_pct) || 0,
    notes: row.notes ?? null,
  };
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  if (!isSupabaseConfigured) {
    return localGetCustomer(id);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("get_customer", { p_id: id });
  if (error || !data || data.length === 0) return null;
  const row = data[0];
  return {
    id: row.id,
    name: row.name,
    discount_pct: Number(row.discount_pct) || 0,
    notes: row.notes ?? null,
  };
}
