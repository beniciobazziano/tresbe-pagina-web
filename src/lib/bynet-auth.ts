import "server-only";

import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

/**
 * Autenticación y utilidades HTTP de Bynet Connect (/api/bynet/*).
 *
 * Todas las llamadas de Bynet traen `Authorization: Bearer <BYNET_API_KEY>`.
 * La clave vive en .env.local; la comparación es en tiempo constante.
 * Respuestas: JSON, sin caché, errores como { error: "..." }.
 */

/** Error con código HTTP: las rutas lo lanzan y bynetRoute lo convierte en respuesta */
export class BynetHttpError extends Error {
  constructor(
    public readonly status: number,
    message: string
  ) {
    super(message);
    this.name = "BynetHttpError";
  }
}

/** Sin caché + CORS abierto (la autenticación es por clave Bearer, no por origen): permite que Bynet llame desde un navegador. */
const NO_STORE = {
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
} as const;

/** Respuesta al preflight CORS del navegador. Exportala como OPTIONS en cada ruta. */
export function bynetOptions() {
  return new NextResponse(null, { status: 204, headers: NO_STORE });
}

export function bynetJson(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: NO_STORE });
}

export function bynetError(error: string, status: number) {
  return bynetJson({ error }, status);
}

/** Clave configurada en .env.local (null si falta o está vacía) */
export function getBynetKey(): string | null {
  const key = process.env.BYNET_API_KEY?.trim();
  return key ? key : null;
}

/** Últimos 4 caracteres de la clave, para mostrar en el panel sin revelarla */
export function bynetKeyHint(): string | null {
  const key = getBynetKey();
  return key ? key.slice(-4) : null;
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) {
    // Comparar igual algo del mismo largo para no delatar la longitud por tiempo
    timingSafeEqual(bufB, bufB);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

/**
 * Valida el encabezado Authorization. Devuelve null si la petición es
 * válida, o la respuesta de error a devolver:
 * - 503 si la tienda no tiene BYNET_API_KEY configurada
 * - 401 si la clave no coincide
 */
export function requireBynetAuth(request: Request): NextResponse | null {
  const key = getBynetKey();
  if (!key) {
    return bynetError(
      "Bynet Connect no está configurado en la tienda: definí BYNET_API_KEY en .env.local y reiniciá el servidor.",
      503
    );
  }
  const header = request.headers.get("authorization")?.trim() ?? "";
  const match = /^Bearer\s+(.+)$/i.exec(header);
  const provided = match?.[1]?.trim() ?? "";
  if (!provided || !safeEqual(provided, key)) {
    return bynetError("La clave de API no es válida.", 401);
  }
  return null;
}

/**
 * Envuelve un handler de ruta: exige la clave, atrapa errores y responde
 * siempre JSON. Los BynetHttpError conservan su código; el resto es 500.
 */
export function bynetRoute<T extends unknown[]>(
  handler: (request: Request, ...rest: T) => Promise<Response>
) {
  return async (request: Request, ...rest: T): Promise<Response> => {
    const denied = requireBynetAuth(request);
    if (denied) return denied;
    try {
      return await handler(request, ...rest);
    } catch (error) {
      if (error instanceof BynetHttpError) {
        return bynetError(error.message, error.status);
      }
      console.error("[bynet]", error);
      return bynetError(
        error instanceof Error ? error.message : "Error interno de la tienda.",
        500
      );
    }
  };
}

/** Cuerpo JSON de la petición (400 si no es JSON o no es un objeto) */
export async function bynetBody(request: Request): Promise<Record<string, unknown>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    throw new BynetHttpError(400, "El cuerpo de la petición debe ser JSON.");
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new BynetHttpError(400, "El cuerpo de la petición debe ser un objeto JSON.");
  }
  return body as Record<string, unknown>;
}

/** Parámetro ?since= en ISO 8601 (null si no viene; 400 si es inválido) */
export function parseSince(raw: string | null): Date | null {
  if (!raw || !raw.trim()) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    throw new BynetHttpError(400, "El parámetro since debe ser una fecha ISO 8601.");
  }
  return date;
}

/** Parámetro ?limit= acotado entre 1 y max */
export function parseLimit(raw: string | null, fallback: number, max: number): number {
  const n = Math.floor(Number(raw));
  if (!raw || !Number.isFinite(n) || n < 1) return fallback;
  return Math.min(n, max);
}

/** Origen público de la tienda (respeta los encabezados del proxy/Vercel) */
export function requestOrigin(request: Request): string {
  const url = new URL(request.url);
  const proto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const host =
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    request.headers.get("host") ||
    url.host;
  return `${proto || url.protocol.replace(":", "")}://${host}`;
}
