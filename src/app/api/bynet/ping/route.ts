import { bynetJson, bynetRoute } from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { BYNET_CAPABILITIES } from "@/lib/bynet-types";
import { site } from "@/lib/site";

/** GET /api/bynet/ping — comprueba la clave y dice qué sabe hacer la tienda */
export const GET = bynetRoute(async () =>
  bynetJson({
    ok: true,
    store: site.name,
    platform: "nextjs",
    version: "1",
    capabilities: BYNET_CAPABILITIES,
  })
);
