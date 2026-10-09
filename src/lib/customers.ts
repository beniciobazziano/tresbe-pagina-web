import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import {
  localAuthCustomer,
  localGetCustomer,
  localRegisterCustomer,
  localSetCustomerMarkups,
  localUpdateCustomerProfile,
} from "./localdb";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";
import type { Customer, CustomerType, Markups } from "./types";

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

/* eslint-disable @typescript-eslint/no-explicit-any */
function rowToCustomer(row: any): Customer {
  return {
    id: row.id,
    name: row.name,
    discount_pct: Number(row.discount_pct) || 0,
    notes: row.notes ?? null,
    customer_type: (row.customer_type as CustomerType) ?? "publico",
    markups: (row.markups as Markups) ?? {},
    email: row.email ?? null,
    phone: row.phone ?? null,
    postal_code: row.postal_code ?? null,
    self_registered: row.self_registered ?? false,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

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
  return rowToCustomer(data[0]);
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  if (!isSupabaseConfigured) {
    return localGetCustomer(id);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("get_customer", { p_id: id });
  if (error || !data || data.length === 0) return null;
  return rowToCustomer(data[0]);
}

/** Cliente de la sesión actual (para páginas y rutas del servidor) */
export async function getSessionCustomer(): Promise<Customer | null> {
  const cookieStore = await cookies();
  const id = verifyCustomerToken(cookieStore.get(CUSTOMER_COOKIE)?.value);
  if (!id) return null;
  return getCustomerById(id);
}

/**
 * Alta de cuenta que hace la propia persona desde la web: queda como
 * cuenta de público (sin descuento) y con su CP para cotizar el envío.
 */
export async function registerCustomer(draft: {
  name: string;
  email: string;
  phone: string;
  postal_code: string;
  password: string;
}): Promise<Customer> {
  if (!isSupabaseConfigured) {
    return localRegisterCustomer(draft);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("register_customer", {
    p_name: draft.name.trim(),
    p_email: draft.email.trim().toLowerCase(),
    p_phone: draft.phone.trim(),
    p_postal_code: draft.postal_code.trim(),
    p_password: draft.password,
  });
  if (error) {
    // 23505 = unique_violation sobre el email
    if (error.code === "23505" || /duplicate|unique/i.test(error.message)) {
      throw new Error("Ya hay una cuenta con ese email");
    }
    throw new Error(error.message);
  }
  if (!data || data.length === 0) throw new Error("No se pudo crear la cuenta");
  return rowToCustomer(data[0]);
}

/** Teléfono y código postal que el cliente edita desde su cuenta */
export async function updateCustomerProfile(
  id: string,
  patch: { phone?: string; postal_code?: string }
): Promise<Customer> {
  if (!isSupabaseConfigured) {
    return localUpdateCustomerProfile(id, patch);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("update_customer_profile", {
    p_id: id,
    p_phone: patch.phone ?? null,
    p_postal_code: patch.postal_code ?? null,
  });
  if (error) throw new Error(error.message);
  if (!data || data.length === 0) throw new Error("Cliente no encontrado");
  return rowToCustomer(data[0]);
}

/** Guarda las rentabilidades por marca del propio cliente */
export async function saveCustomerMarkups(id: string, markups: Markups) {
  if (!isSupabaseConfigured) {
    await localSetCustomerMarkups(id, markups);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.rpc("set_customer_markups", {
    p_id: id,
    p_markups: markups,
  });
  if (error) throw new Error(error.message);
}
