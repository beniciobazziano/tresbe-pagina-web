import "server-only";

/**
 * Cotizador de envíos de Andreani (API REST oficial).
 *
 * Flujo: se pide un token con Basic auth a /login (viene en el header
 * `x-authorization-token`) y con ese token se consulta GET /v1/tarifas
 * pasando el CP de destino, el contrato y los bultos (kilos + volumen).
 *
 * Credenciales en .env.local (ninguna queda en el repo):
 *   ANDREANI_USER, ANDREANI_PASSWORD  → usuario de la API
 *   ANDREANI_CONTRATO                 → nº de contrato a facturar
 *   ANDREANI_CLIENTE                  → nº de cliente (opcional)
 *   ANDREANI_SUCURSAL_ORIGEN          → sucursal de despacho (opcional)
 *   ANDREANI_API_URL                  → por defecto producción; para probar,
 *                                       https://apisqa.andreani.com
 *
 * Sin credenciales el cotizador queda apagado y el checkout ofrece
 * coordinar el flete por WhatsApp, igual que con los voluminosos.
 */

const API_URL = process.env.ANDREANI_API_URL ?? "https://apis.andreani.com";
const USER = process.env.ANDREANI_USER;
const PASSWORD = process.env.ANDREANI_PASSWORD;
const CONTRATO = process.env.ANDREANI_CONTRATO;
const CLIENTE = process.env.ANDREANI_CLIENTE;
const SUCURSAL_ORIGEN = process.env.ANDREANI_SUCURSAL_ORIGEN;

export const isAndreaniConfigured = Boolean(USER && PASSWORD && CONTRATO);

const TIMEOUT_MS = 10_000;

export interface Bulto {
  /** Peso del bulto en kilos */
  kilos: number;
  /** Volumen del bulto en cm³ */
  volumenCm: number;
  /** Valor declarado (para el seguro), en pesos */
  valorDeclarado?: number;
}

export interface AndreaniQuote {
  /** Total con IVA, en pesos */
  total: number;
  /** Total sin IVA, por si se quiere mostrar el neto */
  totalSinIva: number;
  /** Peso aforado que usó Andreani para tarifar (kg) */
  pesoAforado: number | null;
}

/** Token cacheado en memoria: Andreani lo entrega con vencimiento largo */
let cachedToken: { value: string; expiresAt: number } | null = null;
const TOKEN_TTL_MS = 50 * 60 * 1000; // 50 min, se renueva antes de vencer

async function fetchWithTimeout(url: string, init: RequestInit = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function getToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.value;

  const basic = Buffer.from(`${USER}:${PASSWORD}`).toString("base64");
  const res = await fetchWithTimeout(`${API_URL}/login`, {
    headers: { Authorization: `Basic ${basic}` },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Andreani /login respondió ${res.status}`);
  }
  const token = res.headers.get("x-authorization-token");
  if (!token) throw new Error("Andreani no devolvió el token de autorización");

  cachedToken = { value: token, expiresAt: Date.now() + TOKEN_TTL_MS };
  return token;
}

/** Un token vencido da 401: se limpia el cache y se reintenta una vez */
function clearToken() {
  cachedToken = null;
}

const toNumber = (v: unknown): number => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

function buildQuery(cpDestino: string, bultos: Bulto[]) {
  const params = new URLSearchParams();
  params.set("cpDestino", cpDestino);
  params.set("contrato", CONTRATO!);
  if (CLIENTE) params.set("cliente", CLIENTE);
  if (SUCURSAL_ORIGEN) params.set("sucursalOrigen", SUCURSAL_ORIGEN);
  // Andreani espera los bultos con notación de array tipo bultos[0][kilos]
  bultos.forEach((b, i) => {
    params.set(`bultos[${i}][kilos]`, String(b.kilos));
    params.set(`bultos[${i}][volumenCm]`, String(Math.round(b.volumenCm)));
    if (b.valorDeclarado && b.valorDeclarado > 0) {
      params.set(
        `bultos[${i}][valorDeclarado]`,
        String(Math.round(b.valorDeclarado))
      );
    }
  });
  return params.toString();
}

/**
 * Cotiza un envío. Devuelve null si el cotizador no está configurado;
 * lanza si Andreani responde con error (el que llama decide el fallback).
 */
export async function cotizarEnvio(
  cpDestino: string,
  bultos: Bulto[]
): Promise<AndreaniQuote | null> {
  if (!isAndreaniConfigured) return null;
  if (bultos.length === 0) return null;

  const url = `${API_URL}/v1/tarifas?${buildQuery(cpDestino, bultos)}`;

  const request = async () => {
    const token = await getToken();
    return fetchWithTimeout(url, {
      headers: { "x-authorization-token": token },
      cache: "no-store",
    });
  };

  let res = await request();
  if (res.status === 401) {
    clearToken();
    res = await request();
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `Andreani /v1/tarifas respondió ${res.status}${detail ? `: ${detail.slice(0, 200)}` : ""}`
    );
  }

  const data = (await res.json()) as {
    pesoAforado?: string | number;
    tarifaConIva?: { total?: string | number };
    tarifaSinIva?: { total?: string | number };
  };

  const total = toNumber(data.tarifaConIva?.total);
  if (total <= 0) {
    throw new Error("Andreani devolvió una tarifa vacía para ese destino");
  }

  return {
    total,
    totalSinIva: toNumber(data.tarifaSinIva?.total) || total,
    pesoAforado: data.pesoAforado != null ? toNumber(data.pesoAforado) : null,
  };
}
