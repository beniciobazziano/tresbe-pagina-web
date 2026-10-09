import type { Product } from "../types";

/**
 * Catálogo Telplast (línea WOW! de adhesivos y selladores): 12
 * productos ("tipos"), en el orden dado por el usuario (campo
 * `sort_group`, 1 a 12). Un producto por tipo: el color es una opción
 * más dentro de la ficha (selector `colors`, mismo patrón que la
 * medida/empaque de TEL), con `color_images` cuando el envase cambia
 * visiblemente entre colores. Las medidas van en `sizes` con selector
 * (mismo patrón) y `size_images` cuando el envase cambia visiblemente
 * entre medidas. Datos del catálogo oficial PDF de Telplast
 * (telplastsrl.com.ar) + fotos verificadas de revendedores reales.
 * Reconstruir con el scratchpad de la sesión 72ce4d70, carpeta
 * telplast/ (telplast-data.json + armar-telplast.js).
 */
export const telplastProducts: Omit<Product, "id">[] = [
  {
    "slug": "telplast-adhesivo-multiuso-wow",
    "name": "Adhesivo Multiuso WOW!",
    "description": "Adhesivo blanco multiuso de Telplast, listo para usar, a base de polímeros, sin solventes y pintable. Para pegado de zócalos, azulejos, cerámicos, alfombras, mampostería, telgopor, yeso, metal, plásticos, tubos PVC, parquet, MDF, madera, acrílico y manualidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-adhesivo-multiuso-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Color", "value": "Blanco" },
      { "label": "Base", "value": "Polímeros, sin solventes" },
      { "label": "Uso", "value": "Interior/exterior, listo para usar, pintable" },
      { "label": "Ideal para", "value": "Zócalos, azulejos, cerámicos, alfombras, mampostería, telgopor, yeso, metal, plásticos, PVC, parquet, MDF, madera, acrílico" },
      { "label": "Presentaciones", "value": "60 gr y 150 gr (familiar) · 400 gr y 5 kg (profesional)" }
    ],
    "sizes": ["60 gr", "150 gr", "400 gr", "5 kg"],
    "size_images": {
      "60 gr": "/products/telplast/telplast-adhesivo-multiuso-wow.jpg",
      "400 gr": "/products/telplast/telplast-adhesivo-multiuso-wow-400-gr.jpg"
    },
    "sort_group": 1,
    "active": true
  },
  {
    "slug": "telplast-adhesivo-pu-hibrido-wow",
    "name": "Adhesivo PU Híbrido WOW!",
    "description": "Adhesivo híbrido de poliuretano monocomponente de Telplast, con gran adhesión y elasticidad, excelente resistencia a la intemperie y versatilidad sobre todo tipo de superficies. Cura con la humedad ambiental. Ideal para azulejos de piscina, madera, tubos PVC, espejos, bachas, azulejos y revestimientos, y zócalos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/adhesivo-pu-hibrido.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Color", "value": "Blanco" },
      { "label": "Componentes", "value": "Monocomponente" },
      { "label": "Curado", "value": "Con humedad ambiental" },
      { "label": "Ideal para", "value": "Azulejos de piscina, madera, tubos PVC, espejos, bachas, revestimientos, zócalos" },
      { "label": "Presentación", "value": "Cartucho 300 ml / 476 gr" }
    ],
    "sizes": ["300 ml"],
    "sort_group": 2,
    "active": true
  },
  {
    "slug": "telplast-sellador-multiuso-wow",
    "name": "Sellador Multiuso WOW!",
    "description": "Sellador acrílico multiuso de Telplast, elástico, listo para usar y pintable, para el profesional y la familia. Ideal para sellado de juntas de madera, chapas, cerámicos, hormigón, mampostería, acrílico, artefactos sanitarios, plásticos, repuestos automotor y juntas de dilatación.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-sellador-multiuso-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Colores", "value": "Blanco y negro" },
      { "label": "Uso", "value": "Interior/exterior, elástico, pintable, listo para usar" },
      { "label": "Ideal para", "value": "Juntas de madera, chapas, cerámicos, hormigón, mampostería, sanitarios, plásticos, automotor" },
      { "label": "Presentaciones", "value": "300 gr tubo acrílico (familiar) · 400 gr cartucho reparador (profesional)" }
    ],
    "sizes": ["300 gr", "400 gr"],
    "sort_group": 3,
    "active": true
  },
  {
    "slug": "telplast-sellador-pu-40",
    "name": "Sellador PU 40",
    "description": "Sellador poliuretánico Telplast de uso profesional, une fuerza y flexibilidad. Ideal para sellado de premoldeados, metal, juntas de dilatación, fibra de vidrio y cerámica.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-sellador-pu-40-negro.webp",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Colores", "value": "Negro y gris" },
      { "label": "Uso", "value": "Profesional" },
      { "label": "Ideal para", "value": "Premoldeados, metal, juntas de dilatación, fibra de vidrio, cerámica" },
      { "label": "Presentación", "value": "Cartucho 300 ml / 465 gr" }
    ],
    "sizes": ["300 ml"],
    "colors": ["Negro", "Gris"],
    "color_images": {
      "Negro": "/products/telplast/telplast-sellador-pu-40-negro.webp",
      "Gris": "/products/telplast/telplast-sellador-pu-40-gris.webp"
    },
    "sort_group": 4,
    "active": true
  },
  {
    "slug": "telplast-silicona-acetica",
    "name": "Silicona Acética",
    "description": "Silicona acética Telplast, elástica y de excelente adherencia, para interior y exterior.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/silicona-acetica-blanco.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Colores", "value": "Blanco, negro y transparente" },
      { "label": "Tipo", "value": "Acética" },
      { "label": "Uso", "value": "Interior/exterior, elástica" },
      { "label": "Presentación", "value": "Cartucho ~280 ml" }
    ],
    "sizes": ["280 ml"],
    "colors": ["Blanco", "Negro", "Transparente"],
    "color_images": {
      "Blanco": "/products/telplast/silicona-acetica-blanco.jpg",
      "Negro": "/products/telplast/silicona-acetica-negro.jpg",
      "Transparente": "/products/telplast/telplast-silicona-acetica-transparente.jpg"
    },
    "sort_group": 5,
    "active": true
  },
  {
    "slug": "telplast-silicona-neutra-transparente",
    "name": "Silicona Neutra Transparente",
    "description": "Silicona neutra Telplast (curado no ácido, apta para superficies sensibles al ácido acético), elástica y de excelente adherencia, para interior y exterior. Color transparente.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-silicona-neutra-transparente.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Color", "value": "Transparente" },
      { "label": "Tipo", "value": "Neutra" },
      { "label": "Uso", "value": "Interior/exterior, elástica" },
      { "label": "Presentación", "value": "Cartucho 280 ml (código SN-280)" }
    ],
    "sizes": ["280 ml"],
    "sort_group": 6,
    "active": true
  },
  {
    "slug": "telplast-reparador-grietas-piscinas-wow",
    "name": "Reparador Grietas Piscinas WOW!",
    "description": "Reparador de grietas para piscinas Telplast, con excelente adherencia y tack inicial, elástico y pintable. El sellador ideal para mantener tu piscina.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-reparador-grietas-piscinas-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Uso", "value": "Interior/exterior, elástico, pintable, excelente tack inicial" },
      { "label": "Presentaciones", "value": "300 gr tubo (familiar) · 400 gr cartucho (profesional)" }
    ],
    "sizes": ["300 gr", "400 gr"],
    "size_images": {
      "400 gr": "/products/telplast/telplast-reparador-grietas-piscinas-wow.jpg"
    },
    "sort_group": 7,
    "active": true
  },
  {
    "slug": "telplast-sellador-zingueria-wow",
    "name": "Sellador Zinguería WOW!",
    "description": "Sellador acrílico-estirénico al agua de Telplast para zinguería, elástico y listo para usar. Ideal para canaletas galvanizadas, ductos de aire acondicionado, extractores eólicos y silos de chapa.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-sellador-zingueria-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Color", "value": "Gris aluminio" },
      { "label": "Base", "value": "Acrílico-estirénica al agua" },
      { "label": "Uso", "value": "Interior/exterior, elástico, listo para usar" },
      { "label": "Ideal para", "value": "Canaletas galvanizadas, ductos de aire, extractores eólicos, silos de chapa" },
      { "label": "Presentación", "value": "Cartucho 400 gr" }
    ],
    "sizes": ["400 gr"],
    "sort_group": 8,
    "active": true
  },
  {
    "slug": "telplast-sellador-de-grietas-wow",
    "name": "Sellador de Grietas WOW!",
    "description": "Sellador de grietas Telplast para paredes, listo para usar, elástico y pintable. Sellá todas tus grietas con un producto de fácil aplicación.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-sellador-de-grietas-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Uso", "value": "Interior/exterior, elástico, pintable, listo para usar" },
      { "label": "Presentaciones", "value": "400 gr cartucho · 1.5 kg balde chico (familiar) · 5 kg balde grande (profesional)" }
    ],
    "sizes": ["400 gr", "1.5 kg", "5 kg"],
    "size_images": {
      "400 gr": "/products/telplast/telplast-sellador-de-grietas-wow.jpg",
      "5 kg": "/products/telplast/telplast-sellador-de-grietas-wow-5-kg.jpg"
    },
    "sort_group": 9,
    "active": true
  },
  {
    "slug": "telplast-masilla-para-madera-wow",
    "name": "Masilla para Madera WOW!",
    "description": "Masilla para madera Telplast, \"la masilla del carpintero\": corrige imperfecciones y rellena en una sola aplicación, excelente adherencia, flexible.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/masilla-madera-generica.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Colores", "value": "Algarrobo, Pino, Natural, Nogal, Roble, Cedro y Caoba" },
      { "label": "Uso", "value": "Corrige imperfecciones y rellena, flexible, excelente adherencia" },
      { "label": "Presentaciones", "value": "200 gr, 500 gr, 1.7 kg, 5 kg y 25 kg" }
    ],
    "sizes": ["200 gr", "500 gr", "1.7 kg", "5 kg", "25 kg"],
    "colors": ["Algarrobo", "Pino", "Natural", "Nogal", "Roble", "Cedro", "Caoba"],
    "sort_group": 10,
    "active": true
  },
  {
    "slug": "telplast-cola-vinilica-linea-carpintera-wow",
    "name": "Cola Vinílica Línea Carpintera WOW!",
    "description": "Cola vinílica Telplast para carpintería, blanca, excelente adherencia y elástica, lista para usar. Pegá con la familia de colas vinílicas de Telplast.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-cola-vinilica-linea-carpintera-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Color", "value": "Blanco" },
      { "label": "Uso", "value": "Listo para usar, excelente adherencia, elástica" },
      { "label": "Presentaciones", "value": "125 gr, 250 gr, 500 gr y 1 kg" }
    ],
    "sizes": ["125 gr", "250 gr", "500 gr", "1 kg"],
    "sort_group": 11,
    "active": true
  },
  {
    "slug": "telplast-cemento-de-contacto-sin-tolueno-wow",
    "name": "Cemento de Contacto sin Tolueno WOW!",
    "description": "Cemento de contacto Telplast sin tolueno, de excelente adherencia y tack inicial, listo para usar. Para usos rígidos (placas decorativas, telgopor, maderas, poliuretano rígido, fibra de vidrio, laminado plástico, chapa) y flexibles (alfombras, pisos vinílicos, corcho, goma espuma, cartón, revestimientos acústicos).",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Telplast",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/telplast/telplast-cemento-de-contacto-sin-tolueno-wow.jpg",
    "specs": [
      { "label": "Marca", "value": "Telplast — línea WOW!" },
      { "label": "Fórmula", "value": "Sin tolueno" },
      { "label": "Uso", "value": "Listo para usar, excelente adherencia y tack inicial" },
      { "label": "Usos rígidos", "value": "Placas decorativas, telgopor, maderas, poliuretano rígido, fibra de vidrio, laminado plástico, chapa" },
      { "label": "Usos flexibles", "value": "Alfombras, pisos vinílicos, corcho, goma espuma, cartón, revestimientos acústicos" },
      { "label": "Presentaciones", "value": "250 cm3, 500 cm3, 4 lt y 18 lt" }
    ],
    "sizes": ["250 cm3", "500 cm3", "4 lt", "18 lt"],
    "sort_group": 12,
    "active": true
  }
];
