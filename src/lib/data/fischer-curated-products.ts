import type { Product } from "../types";

/**
 * Catálogo Fischer curado a mano por el usuario: 14 líneas pedidas,
 * cargadas como 14 productos ("tipos"). Un producto por tipo: la
 * silicona neutra y la salchicha PU 40 tienen el color como opción
 * dentro de la ficha (selector `colors`, mismo patrón que la medida de
 * TEL) en vez de ser productos separados por color. Orden EXACTO en
 * `sort_group` (1 a 14). Datos del sitio oficial fischer.com.ar /
 * fischer.es + revendedores argentinos reales (Somos Rex, Durador, El
 * Instalador, Martel, Cenfer). El color "Gris" de la silicona neutra
 * existe como SKU real pero se descartó por no tener foto propia
 * verificable (solo se halló una foto de otro color mal etiquetada).
 * Nota: esto es aparte del catálogo masivo pre-existente
 * (iturria-products.ts, 394 productos Fischer sin foto/inactivos).
 * Reconstruir con el scratchpad de la sesión 72ce4d70, carpeta
 * fischer/ (fischer-data.json + armar-fischer.js).
 */
export const fischerCuratedProducts: Omit<Product, "id">[] = [
  {
    "slug": "fischer-espuma-de-montaje-rapido-premium-pu-500-750",
    "name": "Espuma de Montaje Rápido Premium PU 500/750",
    "description": "Espuma de poliuretano monocomponente Fischer con adaptador reutilizable, para relleno, sellado y aislamiento de juntas de conexión de ventanas, marcos de puertas y pasamuros. Alto aislamiento acústico y buena resistencia a la presión de agua.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-espuma-de-montaje-rapido-premium-pu-500-750.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Envase",
        "value": "Aerosol 500 ml / 750 ml, adaptador reutilizable"
      },
      {
        "label": "Rendimiento",
        "value": "Hasta 45 litros de espuma libre (lata 750 ml)"
      },
      {
        "label": "Temperatura de aplicación",
        "value": "+5°C a +35°C"
      },
      {
        "label": "Tiempo libre de tacto",
        "value": "Aprox. 20 minutos"
      },
      {
        "label": "Tiempo de corte",
        "value": "Aprox. 40 minutos"
      },
      {
        "label": "Color",
        "value": "Beige"
      }
    ],
    "sort_group": 1,
    "active": true
  },
  {
    "slug": "fischer-espuma-de-pistola-pup-s-750-b2-1c",
    "name": "Espuma de Pistola PUP S 750 B2 (1C)",
    "description": "Espuma de poliuretano monocomponente de Fischer para pistola aplicadora. Rellena, aísla y sella juntas de conexión de ventanas y marcos de puertas, alféizares, cajas de persiana, tabiques de placa de yeso y penetraciones de pared.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-espuma-de-pistola-pup-s-750-b2-1c.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Código",
        "value": "PUP S 750 B2"
      },
      {
        "label": "Envase",
        "value": "Aerosol 750 ml, para pistola"
      },
      {
        "label": "Rendimiento",
        "value": "Hasta 45 litros de espuma libre"
      },
      {
        "label": "Aislamiento acústico",
        "value": "61 dB"
      },
      {
        "label": "Temperatura de aplicación",
        "value": "+5°C a +35°C"
      },
      {
        "label": "Color",
        "value": "Beige"
      }
    ],
    "sort_group": 2,
    "active": true
  },
  {
    "slug": "fischer-silicona-acetica-profesional",
    "name": "Silicona Acética Profesional",
    "description": "Sellador de silicona acética monocomponente Fischer, para superficies no porosas (vidrio, aluminio, cerámica, chapa, plástico). Cura rápido, con propiedades fungicidas contra el moho y excelente resistencia a la intemperie y rayos UV. No pintable.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-silicona-acetica-profesional.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Tipo",
        "value": "Silicona acética (ácida)"
      },
      {
        "label": "Presentación",
        "value": "Cartucho 260-300 ml"
      },
      {
        "label": "Formación de piel",
        "value": "Aprox. 5 minutos"
      },
      {
        "label": "Resistencia térmica (curado)",
        "value": "-50°C a +120°C"
      },
      {
        "label": "Elasticidad",
        "value": "25% de deformación admisible"
      },
      {
        "label": "Pintable",
        "value": "No"
      }
    ],
    "sort_group": 3,
    "active": true
  },
  {
    "slug": "fischer-sellador-pu-40",
    "name": "Sellador PU 40",
    "description": "Sellador/adhesivo de poliuretano monocomponente Fischer en cartucho, para juntas de construcción de alto movimiento. Excelente adhesión sobre hormigón, metal, madera y cerámica. Aplicaciones: juntas de dilatación y conexión en interiores y exteriores, ventanas, puertas y fachadas.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-sellador-pu-40.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Tipo",
        "value": "Poliuretano (PU)"
      },
      {
        "label": "Presentación",
        "value": "Cartucho 400 g"
      },
      {
        "label": "Tiempo de secado",
        "value": "24 horas"
      },
      {
        "label": "Resistencia térmica",
        "value": "-40°C a +80°C"
      },
      {
        "label": "Rendimiento",
        "value": "Aprox. 9 metros lineales por cartucho"
      },
      {
        "label": "Colores",
        "value": "Blanco y Gris"
      }
    ],
    "sort_group": 4,
    "active": true
  },
  {
    "slug": "fischer-multi-ms",
    "name": "Multi MS",
    "description": "Adhesivo y sellador de polímero MS híbrido Fischer, para sellado elástico permanente de juntas en interior y exterior. Sin solventes ni isocianatos, prácticamente inodoro, adhiere sobre sustratos húmedos. Resistente al moho y apto para zonas húmedas.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-multi-ms.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Base química",
        "value": "Polímero híbrido MS monocomponente"
      },
      {
        "label": "Presentación",
        "value": "Cartucho 290 ml"
      },
      {
        "label": "Adhesión inicial",
        "value": "110 kg/m² (color) / 50 kg/m² (transparente)"
      },
      {
        "label": "Resistencia térmica",
        "value": "-40°C a +90°C"
      },
      {
        "label": "Pintable",
        "value": "Sí"
      }
    ],
    "sort_group": 5,
    "active": true
  },
  {
    "slug": "fischer-pistola-de-plastico-pupk-2",
    "name": "Pistola de Plástico PUPK 2",
    "description": "Pistola aplicadora de espuma de poliuretano de cuerpo plástico Fischer, con adaptador NBS universal compatible con espumas en aerosol y pistola (incluida la línea PUP). Permite dosificar la espuma con precisión mediante tornillo regulador.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-pistola-de-plastico-pupk-2.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Código",
        "value": "PUPK 2"
      },
      {
        "label": "Material",
        "value": "Plástico especial antiadherente a restos de espuma"
      },
      {
        "label": "Adaptador",
        "value": "Rosca NBS universal"
      },
      {
        "label": "Uso",
        "value": "Aplicación dosificada de espumas de pistola estándar"
      }
    ],
    "sort_group": 6,
    "active": true
  },
  {
    "slug": "fischer-anclaje-quimico-fis",
    "name": "Anclaje Químico Fischer (FIS)",
    "description": "Mortero de inyección química Fischer para anclaje en hormigón y mampostería. La línea FIS tiene varios tipos de resina según la exigencia de la obra (poliéster, viniléster, epoxi, base biológica); elegí el tipo para ver para qué sirve específicamente cada uno.",
    "price": 0,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-anclaje-quimico-fis-p-plus-300-t.jpg",
    "specs": [
      { "label": "Marca", "value": "Fischer" },
      { "label": "Familia", "value": "FIS — morteros de inyección química" },
      { "label": "Tipos disponibles", "value": "12 (elegí el tipo arriba para ver su ficha específica)" }
    ],
    "variants": [
      {
        "label": "FIS P Plus 300 T",
        "description": "Mortero de inyección de resina de poliéster sin estireno (2 componentes) Fischer, en cartucho de 300 ml, para fijaciones de carga pesada en hormigón comprimido y mampostería, incluso en taladros con agua.",
        "specs": [
          { "label": "Base química", "value": "Poliéster sin estireno, 2 componentes" },
          { "label": "Base de anclaje", "value": "Hormigón C20/25 a C50/60, ladrillo hueco/macizo, arenisca" },
          { "label": "Carga máxima", "value": "Hasta 3050 kg por punto de anclaje en hormigón comprimido" },
          { "label": "Contenido", "value": "300 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Fijaciones de carga pesada, apto para taladros con agua" }
        ]
      },
      {
        "label": "FIS P",
        "description": "Solución económica de Fischer para anclajes en mampostería que no requieren homologación ETA/CE. Ideal para fijaciones ligeras a medias (rejas, soportes, barandillas).",
        "specs": [
          { "label": "Base química", "value": "Poliéster 2K, sin homologación europea" },
          { "label": "Base de anclaje", "value": "Mampostería hueca y maciza, hormigón celular, arenisca" },
          { "label": "Certificación", "value": "Sin ETA/CE (a diferencia de FIS P Plus)" },
          { "label": "Contenido", "value": "300 a 410 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Rejas, soportes, barandillas, fijaciones económicas" }
        ]
      },
      {
        "label": "FIS V Plus",
        "description": "El polivalente universal de Fischer para las máximas exigencias: la mayor variedad de homologaciones (hormigón fisurado y no fisurado, mampostería, empalmes de barras de refuerzo). Existe en 3 velocidades de curado (estándar, low speed para agujeros profundos, high speed para frío).",
        "specs": [
          { "label": "Base química", "value": "Viniléster híbrido, sin estireno" },
          { "label": "Base de anclaje", "value": "Hormigón C20/25-C50/60 fisurado y no fisurado, mampostería, hormigón celular, arenisca" },
          { "label": "Vida útil certificada", "value": "100 años (ETA, DIBt, ICC)" },
          { "label": "Variantes de curado", "value": "V Plus (estándar) · VS Plus (low speed) · VW Plus (high speed, frío)" },
          { "label": "Contenido", "value": "150 a 360 ml (cartucho)" }
        ]
      },
      {
        "label": "FIS VL",
        "description": "Mortero de altas prestaciones con el rango de temperatura de servicio más amplio de la gama Fischer (-40°C a +120°C), para cargas elevadas en hormigón y mampostería. La variante HIGH SPEED reduce el tiempo de endurecimiento en frío.",
        "specs": [
          { "label": "Base química", "value": "Viniléster, 2 componentes" },
          { "label": "Base de anclaje", "value": "Hormigón fisurado C20/25-C50/60, no fisurado C12/15-C50/60, mampostería" },
          { "label": "Rango de temperatura", "value": "-40°C a +120°C (el más amplio de la gama)" },
          { "label": "Contenido", "value": "300 a 410 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Cargas elevadas, ambientes de alta variación térmica" }
        ]
      },
      {
        "label": "FIS EM Plus",
        "description": "El epóxico de mayor capacidad de carga de la gama Fischer, para hormigón fisurado y aplicaciones sísmicas. Apto para perforaciones con broca diamante y con agua, incluso bajo agua; permite empalmes de barras de refuerzo con máxima resistencia.",
        "specs": [
          { "label": "Base química", "value": "Epoxi puro, 2 componentes" },
          { "label": "Base de anclaje", "value": "Hormigón fisurado/no fisurado C20/25-C50/60, piedra natural densa" },
          { "label": "Rango de temperatura", "value": "-40°C a +72°C" },
          { "label": "Certificación sísmica", "value": "Categorías C1 y C2" },
          { "label": "Aplicación típica", "value": "Máxima carga, empalmes de armadura, perforación diamantada/bajo agua" }
        ]
      },
      {
        "label": "FIS SB",
        "description": "Producto polivalente de viniléster con tecnología de silano para estructuras metálicas pesadas, silos, estanterías de gran altura y barandillas de seguridad. Muy alta adherencia y resistencia al fuego de 120 minutos.",
        "specs": [
          { "label": "Base química", "value": "Viniléster híbrido + silano, sin estireno" },
          { "label": "Base de anclaje", "value": "Hormigón C20/25-C50/60 fisurado/no fisurado, piedra natural densa" },
          { "label": "Rango de temperatura", "value": "Procesable desde -15°C, resistencia hasta +150°C" },
          { "label": "Resistencia al fuego", "value": "Certificación 120 minutos + sísmico C1/C2" },
          { "label": "Aplicación típica", "value": "Estructuras metálicas pesadas, silos, racks, barandillas" }
        ]
      },
      {
        "label": "FIS HB",
        "description": "Componente del sistema High-Bond FHB II de Fischer: el mejor rendimiento en hormigón fisurado de toda la gama. Se usa con varillas roscadas cónicas que sellan totalmente la perforación pasante al apretar la tuerca.",
        "specs": [
          { "label": "Base química", "value": "Viniléster sin estireno" },
          { "label": "Base de anclaje", "value": "Hormigón C12/15 a C50/60, fisurado y no fisurado" },
          { "label": "Sistema asociado", "value": "FHB II (varillas roscadas cónicas de gran adherencia)" },
          { "label": "Contenido", "value": "145 a 360 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Barandillas, máquinas, estructuras de acero, fijación pasante premontada" }
        ]
      },
      {
        "label": "FIS Green",
        "description": "Primer mortero de inyección del mundo con Evaluación Técnica Europea fabricado con biomateriales, para mampostería y hormigón no fisurado. Bajo contenido de compuestos orgánicos volátiles (VOC) y menor olor, pensado para bioconstrucción.",
        "specs": [
          { "label": "Base química", "value": "Resina de base biológica (biobased certificado DIN CERTCO/TÜV Rheinland)" },
          { "label": "Base de anclaje", "value": "Mampostería y hormigón no fisurado" },
          { "label": "Emisiones", "value": "Bajo VOC, menor olor" },
          { "label": "Contenido", "value": "300 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Obra con exigencias ambientales/bioconstrucción" }
        ]
      },
      {
        "label": "FIS V Zero",
        "description": "Anclaje químico universal de nueva generación libre de peróxido de dibenzoílo, clasificado \"sin etiqueta\" según reglamento CLP: máxima seguridad sin resignar prestaciones. Homologado para hormigón fisurado y no fisurado, mampostería y perforaciones sumergidas.",
        "specs": [
          { "label": "Base química", "value": "Viniléster sin peróxido de dibenzoílo, sin etiqueta de peligro (CLP)" },
          { "label": "Base de anclaje", "value": "Hormigón fisurado/no fisurado, mampostería, barras de refuerzo, perforaciones con agua" },
          { "label": "Rango de temperatura", "value": "-10°C a +40°C de instalación" },
          { "label": "Contenido", "value": "300 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Uso general todo el año con máxima seguridad laboral/ambiental" }
        ]
      },
      {
        "label": "FIS EB II",
        "description": "Epóxico económico de Fischer para aplicaciones estándar en hormigón fisurado y no fisurado, con certificación sísmica. Tiempo de procesamiento largo, apto para perforaciones grandes y profundas.",
        "specs": [
          { "label": "Base química", "value": "Epoxi, 2 componentes" },
          { "label": "Base de anclaje", "value": "Hormigón C20/25-C50/60 fisurado y no fisurado" },
          { "label": "Certificación sísmica", "value": "Categorías C1 y C2" },
          { "label": "Contenido", "value": "390 a 585 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Empalmes de barras de refuerzo, fijaciones pesadas estándar" }
        ]
      },
      {
        "label": "FIS EP",
        "description": "Alternativa epóxica económica de Fischer para hormigón fisurado y no fisurado sin homologación, apta para instalación preposicionada (\"push-in\"). Es la opción epóxica de entrada de la gama.",
        "specs": [
          { "label": "Base química", "value": "Epoxi, 2 componentes, sin homologación" },
          { "label": "Base de anclaje", "value": "Hormigón C20/25-C50/60 fisurado y no fisurado" },
          { "label": "Método de instalación", "value": "Preposicionado o push-in" },
          { "label": "Contenido", "value": "390 ml (cartucho)" },
          { "label": "Aplicación típica", "value": "Fijaciones epóxicas económicas sin exigencia normativa" }
        ]
      },
      {
        "label": "FIS RC II",
        "description": "Mortero económico de viniléster específico para empalmes de varillas de refuerzo instaladas posteriormente (rebar splicing), con homologación sísmica y vida útil de 100 años.",
        "specs": [
          { "label": "Base química", "value": "Viniléster, 2 componentes" },
          { "label": "Base de anclaje", "value": "Hormigón C12/15-C50/60, fisurado y no fisurado" },
          { "label": "Capacidad", "value": "Barras ø8-40 mm, profundidad de empotramiento hasta 2 m" },
          { "label": "Certificación", "value": "ETA-22/0502, aplicaciones sísmicas, vida útil 100 años" },
          { "label": "Contenido", "value": "360 ml (cartucho)" }
        ]
      }
    ],
    "sort_group": 7,
    "active": true
  },
  {
    "slug": "fischer-tamiz-para-fis-h-n",
    "name": "Tamiz para FIS H N",
    "description": "Casquillo metálico tipo malla (\"tamiz\") de Fischer que se inserta en mampostería hueca/perforada antes de inyectar los morteros químicos (FIS V, FIS VL, FIS P Plus), reteniendo la resina y asegurando una distribución uniforme de carga.",
    "price": 0,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-tamiz-para-fis-h-n.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Material",
        "value": "Malla/casquillo metálico"
      },
      {
        "label": "Diámetros disponibles",
        "value": "16 mm (ø8/M8), 18 mm (ø10/M10), 20 mm (ø12/M12)"
      },
      {
        "label": "Longitud",
        "value": "85 mm"
      },
      {
        "label": "Base de anclaje",
        "value": "Mampostería perforada/hueca"
      },
      {
        "label": "Presentación",
        "value": "Caja x 20 unidades"
      }
    ],
    "sort_group": 8,
    "active": true
  },
  {
    "slug": "fischer-anclaje-de-perno-fwa-metrico",
    "name": "Anclaje de Perno FWA (métrico)",
    "description": "Anclaje de expansión metálico Fischer, solución económica para fijaciones en hormigón comprimido, con rosca de conexión métrica. Disponible en acero cincado y cincado en caliente.",
    "price": 0,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-anclaje-de-perno-fwa-metrico.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Material",
        "value": "Acero electrogalvanizado o galvanizado en caliente"
      },
      {
        "label": "Rosca",
        "value": "Métrica (M6, M8, M10, etc.)"
      },
      {
        "label": "Base",
        "value": "Hormigón comprimido C20/25"
      },
      {
        "label": "Diámetros disponibles",
        "value": "6, 8 y 10 mm según variante"
      },
      {
        "label": "Aplicación",
        "value": "Estructuras de acero, barandas, consolas, escaleras, bandejas portacables"
      }
    ],
    "sort_group": 9,
    "active": true
  },
  {
    "slug": "fischer-tornillo-de-hormigon-ultracut-fbs-ii-us",
    "name": "Tornillo de Hormigón UltraCut FBS II US",
    "description": "Tornillo/taco directo para hormigón Fischer, acero galvanizado, con cabeza hexagonal y arandela prensada integrada. Su geometría de dientes de sierra corta rápidamente el hormigón.",
    "price": 0,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-tornillo-de-hormigon-ultracut-fbs-ii-us.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Diámetros",
        "value": "8, 10, 12 y 14 mm"
      },
      {
        "label": "Material",
        "value": "Acero galvanizado"
      },
      {
        "label": "Cabeza",
        "value": "Hexagonal con arandela prensada integrada"
      },
      {
        "label": "Base de anclaje",
        "value": "Hormigón fisurado y no fisurado, uso sísmico"
      }
    ],
    "sort_group": 10,
    "active": true
  },
  {
    "slug": "fischer-tornillo-de-hormigon-ultracut-fbs-ii-us-r",
    "name": "Tornillo de Hormigón UltraCut FBS II US R",
    "description": "Variante en acero inoxidable A4 del tornillo de hormigón UltraCut FBS II US, con punta endurecida roja para exteriores y ambientes húmedos o corrosivos.",
    "price": 0,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-tornillo-de-hormigon-ultracut-fbs-ii-us-r.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Diámetros",
        "value": "8, 10 y 12 mm"
      },
      {
        "label": "Material",
        "value": "Acero inoxidable A4"
      },
      {
        "label": "Cabeza",
        "value": "Hexagonal con arandela prensada integrada, punta roja"
      },
      {
        "label": "Base de anclaje",
        "value": "Hormigón fisurado y no fisurado, carga sísmica"
      }
    ],
    "sort_group": 11,
    "active": true
  },
  {
    "slug": "fischer-sellador-acrilico-premium-pintable",
    "name": "Sellador Acrílico Premium Pintable",
    "description": "Sellador plasto-elástico Fischer de dispersión acrílica en base agua (no es silicona). Excelente terminación sin grietas, adhesión sin necesidad de primer, resistente a la lluvia poco después de aplicado. Ideal para fisuras y juntas de bajo movimiento en interiores.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-sellador-acrilico-premium-pintable.jpg",
    "specs": [
      {
        "label": "Marca",
        "value": "Fischer"
      },
      {
        "label": "Tipo",
        "value": "Acrílico en base agua (no silicona)"
      },
      {
        "label": "Presentación",
        "value": "Cartucho 310 ml"
      },
      {
        "label": "Color",
        "value": "Blanco"
      },
      {
        "label": "Pintable",
        "value": "Sí, con pinturas base agua y sintéticas"
      }
    ],
    "sort_group": 12,
    "active": true
  },
  {
    "slug": "fischer-silicona-neutra",
    "name": "Silicona Neutra",
    "description": "Sellador de silicona neutra Fischer, apta para más sustratos que la acética (hormigón, mármol, piedra natural) sin manchar ni corroer. Alta flexibilidad, con fungicida. No pintable.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-silicona-neutra-transparente.jpg",
    "specs": [
      { "label": "Marca", "value": "Fischer" },
      { "label": "Tipo", "value": "Silicona neutra" },
      { "label": "Colores", "value": "Transparente, Blanco y Negro" },
      { "label": "Presentación", "value": "Cartucho 260 ml" },
      { "label": "Elasticidad", "value": "Hasta 25% de deformación admisible" },
      { "label": "Pintable", "value": "No" }
    ],
    "colors": ["Transparente", "Blanco", "Negro"],
    "color_images": {
      "Transparente": "/products/fischer/fischer-silicona-neutra-transparente.jpg",
      "Blanco": "/products/fischer/fischer-silicona-neutra-blanco.jpg",
      "Negro": "/products/fischer/fischer-silicona-neutra-negro.jpg"
    },
    "sort_group": 13,
    "active": true
  },
  {
    "slug": "fischer-salchicha-pu-40",
    "name": "Salchicha PU 40",
    "description": "Sellador de poliuretano Fischer PU 40 en formato salchicha (embutido flexible) para pistola especial, de alto rendimiento para construcción civil. Vulcaniza con la humedad ambiente formando un elastómero de gran elasticidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Fischer",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/fischer/fischer-salchicha-pu-40-blanco.png",
    "specs": [
      { "label": "Marca", "value": "Fischer" },
      { "label": "Formato", "value": "Salchicha / embutido flexible para pistola de salchicha" },
      { "label": "Contenido", "value": "900 g" },
      { "label": "Colores", "value": "Blanco, Gris y Negro" },
      { "label": "Capacidad de movimiento", "value": "+26%" },
      { "label": "Pintable", "value": "Sí" }
    ],
    "colors": ["Blanco", "Gris", "Negro"],
    "color_images": {
      "Blanco": "/products/fischer/fischer-salchicha-pu-40-blanco.png",
      "Gris": "/products/fischer/fischer-salchicha-pu-40-gris.jpg",
      "Negro": "/products/fischer/fischer-salchicha-pu-40-gris.jpg"
    },
    "sort_group": 14,
    "active": true
  }
];
