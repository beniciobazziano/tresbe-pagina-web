import "server-only";

import { createClient } from "@supabase/supabase-js";
import { supabaseAnonKey, supabaseUrl } from "./config";

/**
 * Cliente de Supabase sin sesión de usuario, para integraciones
 * servidor-a-servidor (Bynet Connect). Con SUPABASE_SERVICE_ROLE_KEY en
 * .env.local salta el RLS y puede leer/escribir pedidos y catálogo; sin
 * ella usa la anon key (alcanza solo para lo que es público).
 */
export function createSupabaseServiceClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || supabaseAnonKey;
  return createClient(supabaseUrl, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
