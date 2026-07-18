export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** true cuando el proyecto ya tiene credenciales de Supabase cargadas en .env.local */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
