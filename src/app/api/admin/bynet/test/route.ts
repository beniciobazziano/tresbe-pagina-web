import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getBynetKey, requestOrigin } from "@/lib/bynet-auth";

/**
 * POST /api/admin/bynet/test — el panel prueba la conexión: llama a
 * /api/bynet/ping desde el servidor con la clave del .env.local (la clave
 * nunca viaja al navegador).
 */
export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  const key = getBynetKey();
  const url = `${requestOrigin(request)}/api/bynet/ping`;
  if (!key) {
    return NextResponse.json({
      ok: false,
      url,
      error:
        "Falta BYNET_API_KEY en .env.local. Agregala y reiniciá la tienda para que la tome.",
    });
  }
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    const body = await res.json().catch(() => null);
    return NextResponse.json({
      ok: res.ok && body?.ok === true,
      status: res.status,
      url,
      body,
      error: res.ok ? null : (body?.error ?? `La tienda respondió ${res.status}.`),
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      url,
      error: error instanceof Error ? error.message : "No se pudo llamar al endpoint.",
    });
  }
}
