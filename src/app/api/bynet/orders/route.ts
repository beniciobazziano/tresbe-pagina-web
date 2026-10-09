import { bynetJson, bynetRoute, parseLimit, parseSince } from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { bynetListOrders } from "@/lib/bynet-data";

/**
 * GET /api/bynet/orders?since=<ISO>&limit=200
 * Pedidos del checkout creados o modificados después de `since`, del más
 * viejo al más nuevo. `next` trae el updatedAt del último si quedaron más.
 */
export const GET = bynetRoute(async (request) => {
  const params = new URL(request.url).searchParams;
  const since = parseSince(params.get("since"));
  const limit = parseLimit(params.get("limit"), 200, 500);
  const { orders, next } = await bynetListOrders({ since, limit });
  return bynetJson({ orders, next });
});
