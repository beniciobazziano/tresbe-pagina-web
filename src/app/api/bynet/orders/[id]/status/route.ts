import {
  BynetHttpError,
  bynetBody,
  bynetJson,
  bynetRoute,
} from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { bynetSetOrderStatus } from "@/lib/bynet-data";
import {
  BYNET_ORDER_STATUSES,
  type BynetOrderStatus,
  type BynetTracking,
} from "@/lib/bynet-types";

const text = (value: unknown, max = 300) =>
  typeof value === "string" && value.trim() ? value.trim().slice(0, max) : null;

function parseTracking(raw: unknown): BynetTracking | null {
  if (!raw || typeof raw !== "object") return null;
  const t = raw as Record<string, unknown>;
  const url = text(t.url, 1000);
  const tracking: BynetTracking = {
    carrier: text(t.carrier),
    code: text(t.code),
    url: url && /^https?:\/\//i.test(url) ? url : null,
  };
  return tracking.carrier || tracking.code || tracking.url ? tracking : null;
}

/**
 * POST /api/bynet/orders/<id>/status
 * body { status: preparing|shipped|delivered|cancelled, tracking?: { carrier, code, url } }
 */
export const POST = bynetRoute(
  async (request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const body = await bynetBody(request);
    const status = body.status;
    if (
      typeof status !== "string" ||
      !BYNET_ORDER_STATUSES.includes(status as BynetOrderStatus)
    ) {
      throw new BynetHttpError(
        400,
        `status inválido: usá ${BYNET_ORDER_STATUSES.join(", ")}.`
      );
    }
    const found = await bynetSetOrderStatus(
      id,
      status as BynetOrderStatus,
      parseTracking(body.tracking)
    );
    if (!found) throw new BynetHttpError(404, "Pedido no encontrado.");
    return bynetJson({ ok: true });
  }
);
