import { bynetJson, bynetRoute, parseSince } from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { bynetListCustomers } from "@/lib/bynet-data";

/**
 * GET /api/bynet/customers?since=<ISO>
 * Cuentas de clientes activas (público y distribuidora). Las cuentas no
 * guardan fecha de modificación, así que `since` se valida pero devuelve
 * siempre la lista completa.
 */
export const GET = bynetRoute(async (request) => {
  parseSince(new URL(request.url).searchParams.get("since"));
  const customers = await bynetListCustomers();
  return bynetJson({ customers, next: null });
});
