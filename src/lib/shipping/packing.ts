import type { Bulto } from "./andreani";
import type { Product } from "../types";

/**
 * Arma los bultos que se le pasan al cotizador de Andreani a partir de lo
 * que hay en el carrito.
 *
 * Cada producto puede traer su peso y sus medidas reales (weight_kg /
 * length_cm / width_cm / height_cm, se cargan desde el panel o por Excel).
 * Los que todavía no los tienen usan un estimado por rubro: la cotización
 * sale igual, pero se avisa que es aproximada.
 */

interface Estimacion {
  /** kg por unidad */
  kg: number;
  /** cm³ por unidad */
  cm3: number;
}

/** Estimados por rubro para los productos que aún no tienen peso cargado */
const POR_RUBRO: Record<string, Estimacion> = {
  "tornillos-y-fijaciones": { kg: 1.2, cm3: 1200 },
  "perfiles-steel-frame": { kg: 4.5, cm3: 40000 },
  "placas-y-paneles": { kg: 22, cm3: 90000 },
  aislaciones: { kg: 6, cm3: 120000 },
  "herramientas-electricas": { kg: 4, cm3: 18000 },
  "herramientas-manuales": { kg: 1, cm3: 4000 },
  "accesorios-y-terminaciones": { kg: 1.5, cm3: 6000 },
  "clavadoras-y-clavos": { kg: 3, cm3: 15000 },
};

const POR_DEFECTO: Estimacion = { kg: 1.5, cm3: 6000 };

/**
 * Límites por bulto de Andreani. Si el pedido los supera se reparte en
 * varios bultos (así lo tarifa la transportista y así se despacha).
 */
const MAX_KG_POR_BULTO = 25;
const MAX_CM3_POR_BULTO = 100_000; // ~46 x 46 x 46 cm

function unidad(product: Product): { est: Estimacion; estimado: boolean } {
  const kg = product.weight_kg;
  const tieneMedidas =
    product.length_cm != null &&
    product.width_cm != null &&
    product.height_cm != null;

  if (kg != null && kg > 0 && tieneMedidas) {
    return {
      est: {
        kg,
        cm3: product.length_cm! * product.width_cm! * product.height_cm!,
      },
      estimado: false,
    };
  }

  const fallback = POR_RUBRO[product.category_slug] ?? POR_DEFECTO;
  return {
    est: {
      kg: kg != null && kg > 0 ? kg : fallback.kg,
      cm3: tieneMedidas
        ? product.length_cm! * product.width_cm! * product.height_cm!
        : fallback.cm3,
    },
    estimado: true,
  };
}

export interface Empaque {
  bultos: Bulto[];
  pesoTotalKg: number;
  volumenTotalCm3: number;
  /** true si algún producto no tenía peso/medidas y se usó un estimado */
  estimado: boolean;
  /** Productos voluminosos: el flete no se cotiza online */
  hayVoluminosos: boolean;
}

export function armarBultos(
  items: { product: Product; quantity: number }[],
  valorDeclarado = 0
): Empaque {
  let pesoTotalKg = 0;
  let volumenTotalCm3 = 0;
  let estimado = false;
  let hayVoluminosos = false;

  for (const { product, quantity } of items) {
    if (product.bulky) hayVoluminosos = true;
    const { est, estimado: esEstimado } = unidad(product);
    if (esEstimado) estimado = true;
    pesoTotalKg += est.kg * quantity;
    volumenTotalCm3 += est.cm3 * quantity;
  }

  // Cantidad de bultos: la que exija el límite más restrictivo
  const cantidad = Math.max(
    1,
    Math.ceil(pesoTotalKg / MAX_KG_POR_BULTO),
    Math.ceil(volumenTotalCm3 / MAX_CM3_POR_BULTO)
  );

  const bultos: Bulto[] = Array.from({ length: cantidad }, () => ({
    kilos: Number((pesoTotalKg / cantidad).toFixed(2)),
    volumenCm: Math.round(volumenTotalCm3 / cantidad),
    valorDeclarado: valorDeclarado > 0 ? valorDeclarado / cantidad : undefined,
  }));

  return {
    bultos,
    pesoTotalKg: Number(pesoTotalKg.toFixed(2)),
    volumenTotalCm3: Math.round(volumenTotalCm3),
    estimado,
    hayVoluminosos,
  };
}
