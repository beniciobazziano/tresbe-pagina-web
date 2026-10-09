import { bynetJson, bynetRoute, parseLimit, parseSince } from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { bynetListOrderNotes } from "@/lib/bynet-data";

/**
 * GET /api/bynet/order-notes?since=<ISO>&limit=200
 * Notas de pedido del portal de clientes (cuentas de distribuidora, sin
 * pago online), de la más vieja a la más nueva.
 */
export const GET = bynetRoute(async (request) => {
  const params = new URL(request.url).searchParams;
  const since = parseSince(params.get("since"));
  const limit = parseLimit(params.get("limit"), 200, 500);
  const { orderNotes, next } = await bynetListOrderNotes({ since, limit });
  return bynetJson({ orderNotes, next });
});
