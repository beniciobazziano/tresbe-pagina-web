import type { Product } from "../types";

/**
 * Catálogo Adhesil curado a mano por el usuario: siliconas (neutra,
 * acética, 11 PRO). Un producto por tipo: el color es una opción más
 * dentro de la ficha (selector `colors`, mismo patrón que la medida de
 * TEL), en vez de un producto separado por color. El 11 PRO además
 * tiene la presentación (cartucho 300ml / salchicha 600ml) como
 * segundo selector (`packagings`) — mismo patrón exacto que medida +
 * empaque de TEL, acá aplicado a color + empaque.
 * Orden en `sort_group` (1 a 3). Datos y fotos del fabricante/
 * comercializador oficial BestChem S.A. (bestchem.com.ar). La silicona
 * neutra (Blanco/Transparente) y la acética (Blanco/Negro/Transparente)
 * comparten una misma foto genérica por color -- así las publica el
 * propio fabricante, no hay foto específica por color para esas dos
 * líneas (por eso no llevan `color_images`; el 11 PRO sí tiene foto
 * propia y bien etiquetada por color).
 * Reconstruir con el scratchpad de la sesión 72ce4d70, carpeta
 * adhesil/ (adhesil-data.json + armar-adhesil.js).
 */
export const adhesilProducts: Omit<Product, "id">[] = [
  {
    "slug": "adhesil-silicona-neutra",
    "name": "Silicona Neutra",
    "description": "Silicona neutra monocomponente Adhesil de uso general, para sellado y adhesión en aluminio/PVC, vidrio, policarbonato, plásticos, madera tratada y sin tratar, cerámica y porcelanato.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Adhesil",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/adhesil/adhesil-silicona-neutra-blanco.jpg",
    "specs": [
      { "label": "Marca", "value": "Adhesil (BestChem)" },
      { "label": "Tipo", "value": "Silicona neutra" },
      { "label": "Colores", "value": "Blanco y Transparente" },
      { "label": "Presentación", "value": "Cartucho 280 ml" }
    ],
    "colors": ["Blanco", "Transparente"],
    "sort_group": 1,
    "active": true
  },
  {
    "slug": "adhesil-silicona-acetica",
    "name": "Silicona Acética",
    "description": "Silicona acética Adhesil 50 de uso general para sellado en construcción, con curado por acetoxi.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Adhesil",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/adhesil/adhesil-silicona-acetica-blanco.jpg",
    "specs": [
      { "label": "Marca", "value": "Adhesil (BestChem)" },
      { "label": "Tipo", "value": "Silicona acética (línea Adhesil 50)" },
      { "label": "Colores", "value": "Blanco, Negro y Transparente" },
      { "label": "Presentación", "value": "Cartucho 280 ml" }
    ],
    "colors": ["Blanco", "Negro", "Transparente"],
    "sort_group": 2,
    "active": true
  },
  {
    "slug": "adhesil-11-pro",
    "name": "Adhesil 11 PRO",
    "description": "Adhesivo sellador de poliuretano monocomponente Adhesil de alta gama para construcción, pintable, con excelente elasticidad y resistencia estructural. Cartucho de aluminio.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Adhesil",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/adhesil/adhesil-adhesil-11-pro-gris.jpg",
    "specs": [
      { "label": "Marca", "value": "Adhesil (BestChem)" },
      { "label": "Tipo", "value": "Adhesivo sellador de poliuretano (PU pintable)" },
      { "label": "Colores", "value": "Gris, Blanco y Negro" },
      { "label": "Presentación", "value": "Cartucho de aluminio 300 ml" },
      { "label": "Uso recomendado", "value": "Construcción (Gris/Negro) · cámaras frigoríficas (Blanco)" },
      { "label": "Alargamiento a la rotura", "value": ">600%" },
      { "label": "Dureza", "value": "~40 ±5 Shore A" },
      { "label": "Resistencia térmica", "value": "-30°C a 90°C" }
    ],
    "colors": ["Gris", "Blanco", "Negro"],
    "color_images": {
      "Gris": "/products/adhesil/adhesil-adhesil-11-pro-gris.jpg",
      "Blanco": "/products/adhesil/adhesil-adhesil-11-pro-blanco.jpg",
      "Negro": "/products/adhesil/adhesil-adhesil-11-pro-negro.jpg"
    },
    "sort_group": 3,
    "active": true
  },
  {
    "slug": "adhesil-salchicha-11-pro",
    "name": "Salchicha Adhesil 11 PRO",
    "description": "El mismo sellador de poliuretano Adhesil 11 PRO, en formato salchicha (embutido flexible) de 600 ml para pistola especial, de alta gama para construcción, pintable, con excelente elasticidad y resistencia estructural.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Adhesil",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/adhesil/adhesil-salchicha-adhesil-11-pro-gris.jpg",
    "specs": [
      { "label": "Marca", "value": "Adhesil (BestChem)" },
      { "label": "Tipo", "value": "Adhesivo sellador de poliuretano (PU pintable)" },
      { "label": "Colores", "value": "Gris, Blanco y Negro" },
      { "label": "Presentación", "value": "Salchicha (embutido) 600 ml" },
      { "label": "Uso recomendado", "value": "Construcción (Gris/Negro) · cámaras frigoríficas (Blanco)" },
      { "label": "Alargamiento a la rotura", "value": ">600%" },
      { "label": "Resistencia térmica", "value": "-30°C a 90°C" }
    ],
    "colors": ["Gris", "Blanco", "Negro"],
    "color_images": {
      "Gris": "/products/adhesil/adhesil-salchicha-adhesil-11-pro-gris.jpg",
      "Blanco": "/products/adhesil/adhesil-salchicha-adhesil-11-pro-blanco.jpg",
      "Negro": "/products/adhesil/adhesil-salchicha-adhesil-11-pro-negro.jpg"
    },
    "sort_group": 4,
    "active": true
  }
];
