import { headers } from "next/headers";
import { BynetConnectPanel } from "@/components/admin/BynetConnectPanel";
import { bynetKeyHint } from "@/lib/bynet-auth";
import { BYNET_CAPABILITIES } from "@/lib/bynet-types";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AdminConfiguracionPage() {
  const h = await headers();
  const proto = h.get("x-forwarded-proto")?.split(",")[0]?.trim() || "http";
  const host =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() || h.get("host") || "localhost:3000";

  return (
    <BynetConnectPanel
      baseUrl={`${proto}://${host}`}
      keyHint={bynetKeyHint()}
      capabilities={[...BYNET_CAPABILITIES]}
      supabase={isSupabaseConfigured}
      serviceKey={Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.trim())}
    />
  );
}
