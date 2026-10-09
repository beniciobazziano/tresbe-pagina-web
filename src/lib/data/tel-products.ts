import type { Product } from "../types";

/**
 * Línea completa de autoperforantes TEL (autoperforantestel.com), la marca
 * insignia de la casa. Descripciones, medidas, presentaciones, galería de
 * fotos y contenido ampliado (características, usos) oficiales del
 * fabricante. PRECIOS ORIENTATIVOS: ajustarlos desde el panel.
 */
export const telProducts: Omit<Product, "id">[] = [
  {
    "slug": "tel-alas",
    "name": "Autoperforante TEL ALAS",
    "description": "El TEL ALAS posee un diseño especial para la unión de diferentes placas (cementicia, siding, OSB, fenólicos multilaminados, maderas) a perfiles metálicos.",
    "price": 23900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-alas.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "7 medidas (ver tabla)"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 X 1 1/4\"",
      "10 X 1 1/2\"",
      "10 X 1 5/8\"",
      "10 X 2\"",
      "10 X 2 1/2\"",
      "12 X 2 1/2\"",
      "14 X 3\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza"
      ],
      "rows": [
        [
          "8 X 1 1/4\"",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresadora"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "8,6",
          "PH2",
          "Rosca Total",
          "Fresadora"
        ],
        [
          "10 X 1 5/8\"",
          "4,8",
          "41,2",
          "9,3",
          "PH3",
          "Rosca Total",
          "Fresada"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "8,6",
          "PH2",
          "Rosca Total",
          "Fresadora"
        ],
        [
          "10 X 2 1/2\"",
          "4,8",
          "63,5",
          "8,6",
          "PH2",
          "Rosca Parcial",
          "Fresadora"
        ],
        [
          "12 X 2 1/2\"",
          "5,5",
          "63,5",
          "10,7",
          "PH3",
          "Rosca Parcial",
          "Fresadora"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "10,7",
          "PH3",
          "Rosca Parcial",
          "Fresadora"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-alas-1.jpg",
      "/products/tel/tel-alas-2.jpg",
      "/products/tel/tel-alas-3.jpg",
      "/products/tel/tel-alas-4.jpg",
      "/products/tel/tel-alas-5.jpg",
      "/products/tel/tel-alas-6.jpg"
    ],
    "uses": [
      "Madera + Perfil",
      "Placa Cemento + Perfil",
      "Steel Framing - Carrocerías"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Fresadora Fresada",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-chipboard",
    "name": "Autoperforante TEL CHIPBOARD",
    "description": "Tornillos para madera, recomendados especialmente para la fabricación de muebles, stands, escenarios, aberturas, viviendas industrializadas, decks, construcciones modulares, etc.",
    "price": 19900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-chipboard.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "36 medidas (ver tabla)"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado/Fosfato"
      },
      {
        "label": "Color",
        "value": "Amarillo/Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5474"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "M 3,0 x 10",
      "M 3,0 x 12",
      "M 3,0 x 16",
      "M 3,0 x 20",
      "M 3,0 x 25",
      "M 3,0 x 30",
      "M 3,0 x 40",
      "M 3,0 x 50",
      "M 3,5 x 10",
      "M 3,5 x 12",
      "M 3,5 x 16",
      "M 3,5 x 20",
      "M 3,5 x 25",
      "M 3,5 x 30",
      "M 3,5 x 40",
      "M 3,5 x 50",
      "M 3,5 x 60",
      "M 4,0 x 12",
      "M 4,0 x 16",
      "M 4,0 x 20",
      "M 4,0 x 25",
      "M 4,0 x 30",
      "M 4,0 x 35",
      "M 4,0 x 40",
      "M 4,0 x 50",
      "M 4,0 x 60",
      "M 4,0 x 70",
      "M 4,5 x 20",
      "M 4,5 x 25",
      "M 4,5 x 30",
      "M 4,5 x 35",
      "M 4,5 x 40",
      "M 4,5 x 50",
      "M 4,5 x 60",
      "M 4,5 x 70",
      "M 4,5 x 80"
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "M 3,0 x 10",
          "2,9",
          "10",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 12",
          "2,9",
          "12",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 16",
          "2,9",
          "16",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 20",
          "2,9",
          "20",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 25",
          "2,9",
          "25",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 30",
          "2,9",
          "30",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 40",
          "2,9",
          "40",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,0 x 50",
          "2,9",
          "50",
          "5,8",
          "PH1",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 10",
          "3,5",
          "10",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 12",
          "3,5",
          "12",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 16",
          "3,5",
          "16",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 20",
          "3,5",
          "20",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5x 25",
          "3,5",
          "25",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 30",
          "3,5",
          "30",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 40",
          "3,5",
          "40",
          "6,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 50",
          "3,5",
          "50",
          "5,8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 3,5 x 60",
          "3,5",
          "60",
          "5,8",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 12",
          "4",
          "12",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 16",
          "4",
          "16",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 20",
          "4",
          "20",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 30",
          "4",
          "30",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 35",
          "4",
          "35",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 40",
          "4",
          "40",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 50",
          "4",
          "50",
          "8",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 60",
          "4",
          "60",
          "8",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,0 x 70",
          "4",
          "70",
          "8",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 20",
          "4,5",
          "20",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 25",
          "4,5",
          "25",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 30",
          "4,5",
          "30",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 35",
          "4,5",
          "35",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5x 40",
          "4,5",
          "40",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 50",
          "4,5",
          "50",
          "9",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 60",
          "4,5",
          "60",
          "9",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 70",
          "4,5",
          "70",
          "9",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ],
        [
          "M 4,5 x 80",
          "4,5",
          "80",
          "9",
          "PH2",
          "Rosca Parcial",
          "Cincado/Fosfato",
          "Amarillo/Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-chipboard-1.jpg",
      "/products/tel/tel-chipboard-2.jpg",
      "/products/tel/tel-chipboard-3.jpg",
      "/products/tel/tel-chipboard-4.jpg",
      "/products/tel/tel-chipboard-5.jpg",
      "/products/tel/tel-chipboard-6.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Madera + Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Fresada",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "Fosfato",
          "COLOR",
          "Amarillo",
          "Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-cut",
    "name": "Autoperforante TEL CUT",
    "description": "Fijación rápida y exacta en intersecciones de placas MDF sin perforación previa. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 19900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-cut.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "4 X 45 · 4 X 48 · 4 X 55"
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Amarillo"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "4 X 45",
      "4 X 48",
      "4 X 55"
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "4 X 45",
          "4",
          "45",
          "6,7",
          "PH2",
          "Rosca Parcial",
          "Fresadora",
          "Cincado",
          "Amarillo"
        ],
        [
          "4 X 48",
          "4",
          "48",
          "6,7",
          "PH2",
          "Rosca Parcial",
          "Fresadora",
          "Cincado",
          "Amarillo"
        ],
        [
          "4 X 55",
          "4",
          "55",
          "6,7",
          "PH2",
          "Rosca Parcial",
          "Fresadora",
          "Cincado",
          "Amarillo"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-cut-1.jpg",
      "/products/tel/tel-cut-2.jpg",
      "/products/tel/tel-cut-3.jpg",
      "/products/tel/tel-cut-4.jpg",
      "/products/tel/tel-cut-5.jpg",
      "/products/tel/tel-cut-6.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Madera + Madera",
      "MDF + MDF",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Lanza",
          "CABEZA",
          "Fresadora",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Amarillo"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-deck",
    "name": "Autoperforante TEL DECK",
    "description": "Especialmente diseñado para la construcción de decks de madera. Su mecha facilita su penetración evitando fisuras y su cabeza fresada con estrías permite que quede al ras para poder transitar libremente.",
    "price": 28900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×250",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-deck.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 X 1 1/2\" · 8 X 2\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Amarillo"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 X 1 1/2\"",
      "8 X 2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "8 X 1 1/2\"",
          "4,5",
          "38,1",
          "8,3",
          "PH2",
          "Rosca Parcial",
          "Fresadora",
          "Cincado",
          "Amarillo"
        ],
        [
          "8 X 2\"",
          "4,5",
          "50,8",
          "8,3",
          "PH2",
          "Rosca Parcial",
          "Fresadora",
          "Cincado",
          "Amarillo"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-deck-1.jpg",
      "/products/tel/tel-deck-2.jpg",
      "/products/tel/tel-deck-3.jpg",
      "/products/tel/tel-deck-4.jpg",
      "/products/tel/tel-deck-5.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Madera + Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Fresadora",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Amarillo"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-4-placas-mecha",
    "name": "Autoperforante TEL DRY 4 Placas punta mecha",
    "description": "Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-4-placas-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "10 X 3\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "10 X 3\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY 4 PLACAS Mecha",
          "10 X 3\"",
          "4,8",
          "76,2",
          "9,5",
          "PH2",
          "Rosca Parcial",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-4-placas-mecha-1.jpg",
      "/products/tel/tel-dry-4-placas-mecha-2.jpg",
      "/products/tel/tel-dry-4-placas-mecha-3.jpg",
      "/products/tel/tel-dry-4-placas-mecha-4.jpg",
      "/products/tel/tel-dry-4-placas-mecha-5.jpg",
      "/products/tel/tel-dry-4-placas-mecha-6.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Fresada",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-pcl-aguja",
    "name": "Autoperforante TEL DRY PCL punta aguja",
    "description": "Esta línea de tornillos se utiliza en revestimientos fijando placas de yeso o de maderas a perfiles metálicos de espesores hasta 0.90mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz). Normas IRAM 5484/5246/5337/5338",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-pcl-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 X 1 1/4\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Magni"
      },
      {
        "label": "Color",
        "value": "Gris"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 X 1 1/4\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY PLC Aguja",
          "8 x 1 1/4\"",
          "4,2",
          "32",
          "11",
          "PH2",
          "Rosca Total",
          "Magni",
          "Gris"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-pcl-aguja-1.jpg",
      "/products/tel/tel-dry-pcl-aguja-2.jpg",
      "/products/tel/tel-dry-pcl-aguja-3.jpg",
      "/products/tel/tel-dry-pcl-aguja-4.jpg",
      "/products/tel/tel-dry-pcl-aguja-5.jpg",
      "/products/tel/tel-dry-pcl-aguja-6.jpg"
    ],
    "uses": [
      "Placa de cemento liviana + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Trompeta Fresadora",
          "TRATAMIENTO SUPERFICIAL",
          "Magni Gris",
          "COLOR",
          "Gris"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-pcl-mecha",
    "name": "Autoperforante TEL DRY PCL punta mecha",
    "description": "Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-pcl-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 X 1 1/4\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Magni"
      },
      {
        "label": "Color",
        "value": "Gris"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 X 1 1/4\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY PCL Mecha",
          "8 X 1 1/4\"",
          "4,2",
          "32",
          "11",
          "PH2",
          "Rosca Total",
          "Magni",
          "Gris"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-pcl-mecha-1.jpg",
      "/products/tel/tel-dry-pcl-mecha-2.jpg",
      "/products/tel/tel-dry-pcl-mecha-3.jpg",
      "/products/tel/tel-dry-pcl-mecha-4.jpg",
      "/products/tel/tel-dry-pcl-mecha-5.jpg",
      "/products/tel/tel-dry-pcl-mecha-6.jpg"
    ],
    "uses": [
      "Placa de cemento liviana + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Trompeta Fresadora",
          "TRATAMIENTO SUPERFICIAL",
          "Magni Gris",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t1-aguja",
    "name": "Autoperforante TEL DRY T1 punta aguja",
    "description": "Su utilización habitual es la vinculación de montantes y soleras, y para fijar distintos tipos de flejes, como en el caso de las cruces de san Andrés y los “strappings”. Como criterio de uso estos tornillos se utilizan en lugares donde irán atornilladas placas, sean interiores o exteriores, teniendo en cuenta que su cabeza minimiza la separación de la placa atornillada sobre ellos. Se aplican sobre perfiles de espesor menor o igual a 0.9 mm",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t1-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 X 3/8\" · 8 X 9/16\" · 8 x 3/4\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 3/8\"",
      "8 X 9/16\"",
      "8 x 3/4\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T1 Aguja",
          "6 x 3/8\"",
          "3,5",
          "9,5",
          "8,8",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Aguja",
          "8 X 9/16\"",
          "4,2",
          "14,2",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Plateado/Negro"
        ],
        [
          "TEL DRY T1 Aguja",
          "8 x 3/4 \"",
          "4,2",
          "19",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t1-aguja-1.jpg",
      "/products/tel/tel-dry-t1-aguja-2.jpg",
      "/products/tel/tel-dry-t1-aguja-3.jpg",
      "/products/tel/tel-dry-t1-aguja-4.jpg",
      "/products/tel/tel-dry-t1-aguja-5.jpg",
      "/products/tel/tel-dry-t1-aguja-6.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Steel Framing - Drywall",
      "Steel Framing - Estructuras Metálicas"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Wafer",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado / Fosfato",
          "COLOR",
          "Plateado / Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t1-mecha2",
    "name": "Autoperforante TEL DRY T1 punta mecha",
    "description": "Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": true,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t1-mecha2.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 medidas (ver tabla)"
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 x 1/2\"",
      "8 X 9/16\"",
      "8 x 3/4\"",
      "8 X 1\"",
      "10 X 3/4\"",
      "10 X 1\"",
      "10 X 1 1/8\" MAX",
      "10 X 1 1/2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T1 Mecha",
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Plateado/Negro"
        ],
        [
          "TEL DRY T1 Mecha",
          "8 X 9/16\"",
          "4,2",
          "14,2",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Plateado/Negro"
        ],
        [
          "TEL DRY T1 Mecha",
          "8 x 3/4 \"",
          "4,2",
          "19",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Mecha",
          "8 x 1\"",
          "4,2",
          "25,4",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Mecha",
          "10 X 3/4\"",
          "4,8",
          "19",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Mecha",
          "10 X 1\"",
          "4,8",
          "25,4",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Mecha",
          "10 X 1 1/8\" MAX\"",
          "4,8",
          "28,5",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "TEL DRY T1 Mecha",
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "11,1",
          "PH2",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t1-mecha2-1.jpg",
      "/products/tel/tel-dry-t1-mecha2-2.jpg",
      "/products/tel/tel-dry-t1-mecha2-3.jpg",
      "/products/tel/tel-dry-t1-mecha2-4.jpg",
      "/products/tel/tel-dry-t1-mecha2-5.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Steel Framing - Estructuras Metálicas"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Wafer",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado / Fosfato",
          "COLOR",
          "Plateado / Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t2-aguja",
    "name": "Autoperforante TEL DRY T2 punta aguja",
    "description": "Esta línea de tornillos se utiliza en revestimientos fijando placas de yeso o de maderas a perfiles metálicos de espesores hasta 0.90mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz). Normas IRAM 5484/5246/5337/5338",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": true,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t2-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 x 1\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Fosfato"
      },
      {
        "label": "Color",
        "value": "Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 x 1\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T2 Aguja",
          "6 x 1\"",
          "3,5",
          "25,4",
          "8,3",
          "PH2",
          "Rosca Total",
          "Fosfato",
          "Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t2-aguja-1.jpg",
      "/products/tel/tel-dry-t2-aguja-2.jpg",
      "/products/tel/tel-dry-t2-aguja-3.jpg",
      "/products/tel/tel-dry-t2-aguja-4.jpg",
      "/products/tel/tel-dry-t2-aguja-5.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Trompeta",
          "TRATAMIENTO SUPERFICIAL",
          "Fosfato",
          "COLOR",
          "Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t2-mecha",
    "name": "Autoperforante TEL DRY T2 punta mecha",
    "description": "Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t2-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 X 1 1/8\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Cincado/Fosfato"
      },
      {
        "label": "Color",
        "value": "Plateado/Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 1 1/8\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T2 Mecha",
          "6 X 1 1/8\"",
          "3,5",
          "28,5",
          "8,3",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Plateado/Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t2-mecha-1.jpg",
      "/products/tel/tel-dry-t2-mecha-2.jpg",
      "/products/tel/tel-dry-t2-mecha-3.jpg",
      "/products/tel/tel-dry-t2-mecha-4.jpg",
      "/products/tel/tel-dry-t2-mecha-5.jpg",
      "/products/tel/tel-dry-t2-mecha-6.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Trompeta",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado / Fosfato",
          "COLOR",
          "Plateado / Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t3-aguja",
    "name": "Autoperforante TEL DRY T3 punta aguja",
    "description": "Esta línea de tornillos se utiliza en revestimientos fijando placas de yeso o de maderas a perfiles metálicos de espesores hasta 0.90mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz). Normas IRAM 5484/5246/5337/5338",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t3-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 x 1 1/2\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Fosfato"
      },
      {
        "label": "Color",
        "value": "Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 x 1 1/2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T3 Aguja",
          "6 x 1 1/2\"",
          "3,5",
          "38,1",
          "8,3",
          "PH2",
          "Rosca Total",
          "Fosfato",
          "Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t3-aguja-1.jpg",
      "/products/tel/tel-dry-t3-aguja-2.jpg",
      "/products/tel/tel-dry-t3-aguja-3.jpg",
      "/products/tel/tel-dry-t3-aguja-4.jpg",
      "/products/tel/tel-dry-t3-aguja-5.jpg",
      "/products/tel/tel-dry-t3-aguja-6.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Trompeta",
          "TRATAMIENTO SUPERFICIAL",
          "Fosfato",
          "COLOR",
          "Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t3-mecha",
    "name": "Autoperforante TEL DRY T3 punta mecha",
    "description": "Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t3-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 X 1 5/8\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Cincado/Fosfato"
      },
      {
        "label": "Color",
        "value": "Plateado/Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 1 5/8\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T3 Mecha",
          "6 X 1 5/8\"",
          "3,5",
          "41,2",
          "8,3",
          "PH2",
          "Rosca Total",
          "Cincado/Fosfato",
          "Plateado/Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t3-mecha-1.jpg",
      "/products/tel/tel-dry-t3-mecha-2.jpg",
      "/products/tel/tel-dry-t3-mecha-3.jpg",
      "/products/tel/tel-dry-t3-mecha-4.jpg",
      "/products/tel/tel-dry-t3-mecha-5.jpg",
      "/products/tel/tel-dry-t3-mecha-6.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Trompeta",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado / Fosfato",
          "COLOR",
          "Plateado / Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-dry-t4-aguja",
    "name": "Autoperforante TEL DRY T4 punta aguja",
    "description": "Esta línea de tornillos se utiliza en revestimientos fijando placas de yeso o de maderas a perfiles metálicos de espesores hasta 0.90mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz). Normas IRAM 5484/5246/5337/5338",
    "price": 16900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-dry-t4-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "6 x 2\" · 6 x 2 1/4\""
      },
      {
        "label": "Inserto",
        "value": "PH2"
      },
      {
        "label": "Trat. Sup.",
        "value": "Fosfato"
      },
      {
        "label": "Color",
        "value": "Negro"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 x 2\"",
      "6 x 2 1/4\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Línea",
        "Diam x Long",
        "Diam (mm)",
        "Long. (mm)",
        "Cab. (mm)",
        "Inserto",
        "Long. Rosca",
        "Trat. Sup.",
        "Color"
      ],
      "rows": [
        [
          "TEL DRY T4 Aguja",
          "6 x 2\"",
          "3,5",
          "50,8",
          "8,3",
          "PH2",
          "Rosca Total",
          "Fosfato",
          "Negro"
        ],
        [
          "TEL DRY T4 Aguja",
          "6 x 2 1/4\"",
          "3,5",
          "57,1",
          "8,3",
          "PH2",
          "Rosca Total",
          "Fosfato",
          "Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-dry-t4-aguja-1.jpg",
      "/products/tel/tel-dry-t4-aguja-2.jpg",
      "/products/tel/tel-dry-t4-aguja-3.jpg",
      "/products/tel/tel-dry-t4-aguja-4.jpg",
      "/products/tel/tel-dry-t4-aguja-5.jpg",
      "/products/tel/tel-dry-t4-aguja-6.jpg"
    ],
    "uses": [
      "Placa de yeso + Perfil",
      "Steel Framing - Drywall"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Trompeta",
          "TRATAMIENTO SUPERFICIAL",
          "Fosfato",
          "COLOR",
          "Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-fix-tx",
    "name": "Autoperforante TEL FIX TX",
    "description": "Línea especial para Wood framing para unión de postes y vigas de madera semiduras. Fresa bajo cabeza que permite la instalación al ras, punta aguja que facilita la penetración y el perforado, y hélice fresadora para uso en espesores pesados.",
    "price": 26900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×250",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-fix-tx.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "10 X 2\" · 10 X 2 1/2\" · 10 X 3\" · 10 X 3 1/2\" · 10 X 3 3/4\" · 10 X 4\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "Tipo Torx 25"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "10 X 2\"",
      "10 X 2 1/2\"",
      "10 X 3\"",
      "10 X 3 1/2\"",
      "10 X 3 3/4\"",
      "10 X 4\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "10 X 2\"",
          "5,2",
          "50,8",
          "10",
          "Tipo Torx 25",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2 1/2\"",
          "5,2",
          "63,5",
          "10",
          "Tipo Torx 25",
          "Rosca Total",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 3\"",
          "5,2",
          "76,2",
          "10",
          "Tipo Torx 25",
          "Rosca Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 3 1/2\"",
          "5,2",
          "88,9",
          "10",
          "Tipo Torx 25",
          "Rosca Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 3 3/4\"",
          "5,2",
          "95,3",
          "10",
          "Tipo Torx 25",
          "Rosca Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 4\"",
          "5,2",
          "101,6",
          "10",
          "Tipo Torx 25",
          "Rosca Parcial",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-fix-tx-1.jpg",
      "/products/tel/tel-fix-tx-2.jpg",
      "/products/tel/tel-fix-tx-3.jpg",
      "/products/tel/tel-fix-tx-4.jpg",
      "/products/tel/tel-fix-tx-5.jpg",
      "/products/tel/tel-fix-tx-6.jpg"
    ],
    "uses": [
      "Madera + Madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "TORX T25",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-fix",
    "name": "Autoperforante TEL FIX",
    "description": "Recomendados para la fabricación de muebles, stands, escenarios, aberturas, viviendas industrializadas, herrajes, construcciones modulares. Eficaces tanto en multilaminados como en maderas semiduras.",
    "price": 19900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-fix.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "41 medidas (ver tabla)"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5486"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 1/2\"",
      "6 X 5/8\"",
      "6 X 3/4\"",
      "6 x 1\"",
      "6 X 1 1/4\"",
      "6 X 1 3/8\"",
      "6 x 1 1/2\"",
      "6 X 1 5/8\"",
      "6 X 1 3/4\"",
      "6 x 2\"",
      "6 x 2 1/4\"",
      "8 X 5/8\"",
      "8 x 3/4\"",
      "8 X 1\"",
      "8 X 1 1/4\"",
      "8 X 1 3/8\"",
      "8 X 1 1/2\"",
      "8 X 1 3/4\"",
      "8 X 2\"",
      "8 X 2 1/4\"",
      "8 X 2 1/2\"",
      "8 X 3\"",
      "10 X 7/8\"",
      "10 X 1\"",
      "10 X 1 1/4\"",
      "10 X 1 1/2\"",
      "10 X 1 3/4\"",
      "10 X 2\"",
      "10 X 2 1/4\"",
      "10 X 2 1/2\"",
      "10 X 3\"",
      "10 X 3 1/2\"",
      "10 X 3 3/4\"",
      "10 X 4\"",
      "12 X 1 1/2\"",
      "12 X 2\"",
      "12 X 2 1/2\"",
      "12 X 3\"",
      "12 X 3 1/2\"",
      "12 X 4\"",
      "12 X 5\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Color"
      ],
      "rows": [
        [
          "6 X 1/2\"",
          "3,8",
          "12,7",
          "7",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 5/8\"",
          "3,8",
          "15,9",
          "7",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 3/4\"",
          "3,8",
          "19",
          "7",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 1\"",
          "3,8",
          "25,4",
          "8",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 1 1/4\"",
          "3,8",
          "31,8",
          "8",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 1 3/8\"",
          "3,8",
          "34,9",
          "8",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 1 1/2\"",
          "3,8",
          "38,1",
          "8",
          "PH2",
          "Rosca Total",
          "Plateado/Amarillo/Negro"
        ],
        [
          "6 X 1 5/8\"",
          "3,8",
          "41,3",
          "8",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "6 X 1 3/4\"",
          "3,8",
          "44,5",
          "8",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "6 X 2\"",
          "3,8",
          "50,8",
          "8",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "6 X 2 1/4\"",
          "3,8",
          "57,2",
          "8",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "8 x 5/8\"",
          "4,5",
          "15,9",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 x 3/4\"",
          "4,5",
          "19",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 1\"",
          "4,5",
          "25,4",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 1 1/4\"",
          "4,5",
          "31,8",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 1 3/8\"",
          "4,5",
          "34,9",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 1 1/2\"",
          "4,5",
          "38,1",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 1 3/4\"",
          "4,5",
          "44,5",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 2\"",
          "4,5",
          "50,8",
          "8,5",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "8 X 2 1/4\"",
          "4,5",
          "57,2",
          "8,5",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "8 X 2 1/2\"",
          "4,5",
          "63,5",
          "8,5",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "8 X 3",
          "4,5",
          "76,2",
          "8,5",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 7/8\"",
          "5,2",
          "22,2",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 1\"",
          "5,2",
          "25,4",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 1 1/4\"",
          "5,2",
          "31,8",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 1 1/2\"",
          "5,2",
          "38,1",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 1 3/4\"",
          "5,2",
          "44,5",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 2\"",
          "5,2",
          "50,8",
          "10",
          "PH2",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "10 X 2 1/4\"",
          "5,2",
          "57,2",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 2 1/2\"",
          "5,2",
          "63,5",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 3\"",
          "5,2",
          "76,2",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 3 1/2\"",
          "5,2",
          "88,9",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 3 3/4\"",
          "5,2",
          "95,3",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "10 X 4\"",
          "5,2",
          "101,6",
          "10",
          "PH2",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "12 X 1 1/2\"",
          "5,6",
          "38,1",
          "12",
          "PH3",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "12 X 2\"",
          "5,6",
          "50,8",
          "12",
          "PH3",
          "Rosca Total",
          "Amarillo/Negro"
        ],
        [
          "12 X 2 1/2\"",
          "5,6",
          "63,5",
          "12",
          "PH3",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "12 X 3\"",
          "5,6",
          "76,2",
          "12",
          "PH3",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "12 X 3 1/2\"",
          "5,6",
          "88,9",
          "12",
          "PH3",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "12 X 4\"",
          "5,6",
          "101,6",
          "12",
          "PH3",
          "Rosca Parcial",
          "Amarillo/Negro"
        ],
        [
          "12 X 5\"",
          "5,6",
          "127",
          "12",
          "PH3",
          "Rosca Parcial",
          "Amarillo/Negro"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-fix-1.jpg",
      "/products/tel/tel-fix-2.jpg",
      "/products/tel/tel-fix-3.jpg",
      "/products/tel/tel-fix-4.jpg",
      "/products/tel/tel-fix-5.jpg",
      "/products/tel/tel-fix-6.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Madera + Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Fresada",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado Fosfato",
          "COLOR",
          "Plateado Amarillo Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-helix",
    "name": "Autoperforante TEL HELIX",
    "description": "Línea especial para Wood framing para unión de postes y vigas de madera semiduras. Fresa bajo cabeza que permite la instalación al ras, punta calada tipo P17 que facilita la penetración y perforado, y hélice fresadora para uso en espesores pesados.",
    "price": 26900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×250",
    "stock": 100,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-helix.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 medidas (ver tabla)"
      },
      {
        "label": "Ranura / Hexagono",
        "value": "TORX T30"
      },
      {
        "label": "Rosca (Parcial/total)",
        "value": "Parcial"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "M 6,0 x 60",
      "M 6,0 x 80",
      "M 6,0 x 100",
      "M 6,0 x 120",
      "M 6,0 x 140",
      "M 6,0 x 160",
      "M 6,0 x 180",
      "M 6,0 x 200"
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Rosca (Parcial/total)",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "M 6,0 x 60",
          "6",
          "60",
          "12",
          "TORX T30",
          "30",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 80",
          "6",
          "80",
          "12",
          "TORX T30",
          "40",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 100",
          "6",
          "100",
          "12",
          "TORX T30",
          "50",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 120",
          "6",
          "120",
          "12",
          "TORX T30",
          "60",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 140",
          "6",
          "140",
          "12",
          "TORX T30",
          "75",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 160",
          "6",
          "160",
          "12",
          "TORX T30",
          "75",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 180",
          "6",
          "180",
          "12",
          "TORX T30",
          "75",
          "Parcial",
          "Cincado",
          "Plateado"
        ],
        [
          "M 6,0 x 200",
          "6",
          "200",
          "12",
          "TORX T30",
          "75",
          "Parcial",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-helix-1.jpg",
      "/products/tel/tel-helix-2.jpg",
      "/products/tel/tel-helix-3.jpg",
      "/products/tel/tel-helix-4.jpg",
      "/products/tel/tel-helix-5.jpg"
    ],
    "uses": [
      "Madera + Madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Calada Tipo 17",
          "CABEZA",
          "TORX T30",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-1-2",
    "name": "Autoperforante TEL HEX Tipo 1",
    "description": "Se Utilizan para vincular perfiles normalizados de chapa, en espesores desde 1mm. hasta 6mm. También se utilizan para fijar coberturas (techos) en combinación con arandela vulcanizada.",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-1-2.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "15 medidas (ver tabla)"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 x 1/2\"",
      "8 x 3/4\"",
      "8 X 1\"",
      "8 X 1 1/2\"",
      "10 X 3/4\"",
      "10 X 1\"",
      "12 X 3/4\"",
      "12 X 1\"",
      "12 X 1 1/2\"",
      "12 X 2\"",
      "14 X 1\"",
      "14 X 1 1/2\"",
      "14 X 2\"",
      "14 X 2 1/2\"",
      "14 X 3\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud bajo cabeza",
        "Cabeza (Pulgadas)",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Paso (hilos x pulg / mm)"
      ],
      "rows": [
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "1/4\"",
          "8,8",
          "1/4\"",
          "Rosca Total",
          "18"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "1/4\"",
          "8,8",
          "1/4\"",
          "Rosca Total",
          "18"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "1/4\"",
          "8,8",
          "1/4\"",
          "Rosca Total",
          "18"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "1/4\"",
          "8,8",
          "1/4\"",
          "Rosca Total",
          "18"
        ],
        [
          "10 X 3/4\"",
          "4,8",
          "19",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "16"
        ],
        [
          "10 X 1\"",
          "4,8",
          "25",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "16"
        ],
        [
          "12 X 3/4\"",
          "5,5",
          "19",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "14"
        ],
        [
          "12 X 1\"",
          "5,5",
          "25,4",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "14"
        ],
        [
          "12 X 1 1/2\"",
          "5,5",
          "38,1",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "14"
        ],
        [
          "12 X 2\"",
          "5,5",
          "50,8",
          "5/16\"",
          "12",
          "5/16\"",
          "Rosca Total",
          "14"
        ],
        [
          "14 X 1\"",
          "6,3",
          "25,4",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14"
        ],
        [
          "14 X 1 1/2\"",
          "6,3",
          "38,1",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Parcial",
          "14"
        ],
        [
          "14 X 2\"",
          "6,3",
          "50,8",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14"
        ],
        [
          "14 X 2 1/2\"",
          "6,3",
          "63,5",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-1-2-1.jpg",
      "/products/tel/tel-hex-tipo-1-2-2.jpg",
      "/products/tel/tel-hex-tipo-1-2-3.jpg",
      "/products/tel/tel-hex-tipo-1-2-4.jpg",
      "/products/tel/tel-hex-tipo-1-2-5.jpg",
      "/products/tel/tel-hex-tipo-1-2-6.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Steel Framing - Estructuras Metálicas",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "HEX Tipo 1",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-1-c-arandela-vulcanizada",
    "name": "Autoperforante TEL HEX Tipo 1 C/Arandela Vulcanizada",
    "description": "Se utilizan para vincular perfiles normalizados de chapa, en espesores desde 1mm. hasta 6mm. Los tornillos TEL son fabricados en un entorno bajo sistema de calidad certificado según normas ISO-9001- ISO 14001 y la norma ISO TS 16949 (automotriz).",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "14 X 1\" · 14 X 1 1/2\" · 14 X 2\" · 14 X 2 1/2\" · 14 X 3\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "3/8\""
      },
      {
        "label": "Paso (hilos x pulg / mm)",
        "value": "14 hilos x pulgada"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "14 X 1\"",
      "14 X 1 1/2\"",
      "14 X 2\"",
      "14 X 2 1/2\"",
      "14 X 3\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud bajo cabeza",
        "Cabeza (Pulgadas)",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Paso (hilos x pulg / mm)"
      ],
      "rows": [
        [
          "14 X 1\"",
          "6,3",
          "25,4",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14 hilos x pulgada"
        ],
        [
          "14 X 1 1/2\"",
          "6,3",
          "38,1",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14 hilos x pulgada"
        ],
        [
          "14 X 2\"",
          "6,3",
          "50,8",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Total",
          "14 hilos x pulgada"
        ],
        [
          "14 X 2 1/2\"",
          "6,3",
          "63,5",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Parcial",
          "14 hilos x pulgada"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "3/8\"",
          "13,3",
          "3/8\"",
          "Rosca Parcial",
          "14 hilos x pulgada"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-1.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-2.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-3.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-4.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-5.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-6.jpg",
      "/products/tel/tel-hex-tipo-1-c-arandela-vulcanizada-7.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Techos con estructuras metálicas",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "HEX Tipo 1",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-2-madera-aguja-p17",
    "name": "Autoperforante TEL HEX Tipo 2 madera punta aguja P17",
    "description": "Vinculación de chapa a madera blanda/semi dura. También se fabrica con revestimiento inorgánico negro/gris. Recomendados para fijación de cubiertas, techos y paredes. Poseen bajo cabeza la conformación adecuada para impermeabilizar mediante el uso de una arandela de PVC, de dimensiones y características específicas.",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-2-madera-aguja-p17.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "7 medidas (ver tabla)"
      },
      {
        "label": "Ranura/Hexágono",
        "value": "3/8\""
      },
      {
        "label": "Rosca",
        "value": "Madera"
      },
      {
        "label": "Punta",
        "value": "Calada"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5349"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "14 X 1\"",
      "14 X 1 1/2\"",
      "14 X 2\"",
      "14 X 2 1/2\"",
      "14 X 3\"",
      "14 X 4\"",
      "14 X 5\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Long. bajo cabeza",
        "Cabeza (Pulg.)",
        "Cabeza (mm)",
        "Ranura/Hexágono",
        "Long. Rosca",
        "Rosca",
        "Punta"
      ],
      "rows": [
        [
          "14 X 1\"",
          "6,3",
          "25,4",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total",
          "Madera",
          "Calada"
        ],
        [
          "14 X 1 1/2\"",
          "6,3",
          "38,1",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total",
          "Madera",
          "Calada"
        ],
        [
          "14 X 2\"",
          "6,3",
          "50,8",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total",
          "Madera",
          "Calada"
        ],
        [
          "14 X 2 1/2\"",
          "6,3",
          "63,5",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Parcial",
          "Madera",
          "Calada"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Parcial",
          "Madera",
          "Calada"
        ],
        [
          "14 X 4\"",
          "6,3",
          "101,6",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Parcial",
          "Madera",
          "Calada"
        ],
        [
          "14 X 5\"",
          "6,3",
          "127",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Parcial",
          "Madera",
          "Calada"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-1.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-2.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-3.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-4.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-5.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-6.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-p17-7.jpg"
    ],
    "uses": [
      "Chapa + Madera",
      "Techos con estructuras de Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "Calada",
          "CABEZA",
          "HEX Tipo 2",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "Magni",
          "COLOR",
          "Plateado",
          "Negro"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-2-madera-aguja",
    "name": "Autoperforante TEL HEX Tipo 2 madera punta aguja",
    "description": "Vinculación de chapa a madera blanda / semi dura. Recomendados para fijación de cubiertas, techos y paredes. Poseen bajo cabeza la conformación adecuada para impermeabilizar mediante el uso de una arandela de PVC, de dimensiones y características específicas.",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-2-madera-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "12 X 1 1/2\" · 12 X 2\" · 12 X 2 1/2\" · 12 X 3\""
      },
      {
        "label": "Ranura/Hexágono",
        "value": "5/16\""
      },
      {
        "label": "Rosca",
        "value": "Madera"
      },
      {
        "label": "Punta",
        "value": "Aguja"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "12 X 1 1/2\"",
      "12 X 2\"",
      "12 X 2 1/2\"",
      "12 X 3\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Long. bajo cabeza",
        "Cabeza (Pulg.)",
        "Cabeza (mm)",
        "Ranura/Hexágono",
        "Long. Rosca",
        "Rosca",
        "Punta"
      ],
      "rows": [
        [
          "12 X 1 1/2\"",
          "5,5",
          "38,1",
          "5/16\"",
          "7,93",
          "5/16\"",
          "Rosca Total/Rosca Parcial",
          "Madera",
          "Aguja"
        ],
        [
          "12 X 2\"",
          "5,5",
          "50,8",
          "5/16\"",
          "7,93",
          "5/16\"",
          "Rosca Total/Rosca Parcial",
          "Madera",
          "Aguja"
        ],
        [
          "12 X 2 1/2\"",
          "5,5",
          "63,5",
          "5/16\"",
          "7,93",
          "5/16\"",
          "Rosca Total/Rosca Parcial",
          "Madera",
          "Aguja"
        ],
        [
          "12 X 3\"",
          "5,5",
          "76,2",
          "5/16\"",
          "7,93",
          "5/16\"",
          "Rosca Parcial",
          "Madera",
          "Aguja"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-2-madera-aguja-1.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-2.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-3.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-4.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-5.jpg",
      "/products/tel/tel-hex-tipo-2-madera-aguja-6.jpg"
    ],
    "uses": [
      "Chapa + Madera",
      "Techos con estructuras de Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "HEX Tipo 2",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-2-madera-mecha",
    "name": "Autoperforante TEL HEX Tipo 2 madera punta mecha",
    "description": "Vinculación de chapa a madera dura. Recomendados para fijación de cubiertas, techos y paredes. Poseen bajo cabeza la conformación adecuada para impermeabilizar mediante el uso de una arandela de PVC, de dimensiones y características específicas.",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-2-madera-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "14 X 1 1/2\" · 14 X 2\" · 14 X 2 1/2\" · 14 X 3\" · 14 X 4\""
      },
      {
        "label": "Ranura/Hexágono",
        "value": "3/8\""
      },
      {
        "label": "Rosca",
        "value": "Madera"
      },
      {
        "label": "Paso (hilos x pulg/mm)",
        "value": "10 hilos x pulgada"
      },
      {
        "label": "Punta",
        "value": "Mecha"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "14 X 1 1/2\"",
      "14 X 2\"",
      "14 X 2 1/2\"",
      "14 X 3\"",
      "14 X 4\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Long. bajo cabeza",
        "Cabeza (Pulg.)",
        "Cabeza (mm)",
        "Ranura/Hexágono",
        "Long. Rosca",
        "Rosca",
        "Paso (hilos x pulg/mm)",
        "Punta"
      ],
      "rows": [
        [
          "14 X 1 1/2\"",
          "6,3",
          "38,1",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total",
          "Madera",
          "10 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 2\"",
          "6,3",
          "50,8",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total",
          "Madera",
          "10 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 2 1/2\"",
          "6,3",
          "63,5",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total/Rosca Parcial",
          "Madera",
          "10 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Parcial",
          "Madera",
          "10 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 4\"",
          "6,3",
          "101,6",
          "3/8\"",
          "9,53",
          "3/8\"",
          "Rosca Total/Rosca Parcial",
          "Madera",
          "10 hilos x pulgada",
          "Mecha"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-2-madera-mecha-1.jpg",
      "/products/tel/tel-hex-tipo-2-madera-mecha-2.jpg",
      "/products/tel/tel-hex-tipo-2-madera-mecha-3.jpg",
      "/products/tel/tel-hex-tipo-2-madera-mecha-4.jpg",
      "/products/tel/tel-hex-tipo-2-madera-mecha-5.jpg"
    ],
    "uses": [
      "Chapa + Madera",
      "Techos con estructuras de Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "HEX Tipo 2",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-2-max",
    "name": "Autoperforante TEL HEX Tipo 2 MAX",
    "description": "Permite vincular chapas/perfiles pudiendo realizar perforaciones hasta 16 mm.",
    "price": 32900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×100",
    "stock": 100,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-2-max.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "14 X 1 1/2\" MAX · 14 X 5\" MAX · 14 X 6\" MAX · 14 X 7\" MAX"
      },
      {
        "label": "Ranura/Hexágono",
        "value": "3/8\""
      },
      {
        "label": "Rosca",
        "value": "Chapa"
      },
      {
        "label": "Paso (hilos x pulg/mm)",
        "value": "14 hilos x pulgada"
      },
      {
        "label": "Punta",
        "value": "Mecha"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "14 X 1 1/2\" MAX",
      "14 X 5\" MAX",
      "14 X 6\" MAX",
      "14 X 7\" MAX"
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Long. bajo cabeza",
        "Diámetro de Cabeza (mm) máximo",
        "Ranura/Hexágono",
        "Long. Rosca",
        "Rosca",
        "Paso (hilos x pulg/mm)",
        "Punta"
      ],
      "rows": [
        [
          "14 X 1 1/2\" MAX",
          "6,3",
          "38,1",
          "9 1/2",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 5\" MAX",
          "6,3",
          "127",
          "9 1/2",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 6\" MAX",
          "6,3",
          "152,4",
          "9 1/2",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14 hilos x pulgada",
          "Mecha"
        ],
        [
          "14 X 7\" MAX",
          "6,3",
          "177,8",
          "9 1/2",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14 hilos x pulgada",
          "Mecha"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-2-max-1.jpg",
      "/products/tel/tel-hex-tipo-2-max-2.jpg",
      "/products/tel/tel-hex-tipo-2-max-3.jpg",
      "/products/tel/tel-hex-tipo-2-max-4.jpg",
      "/products/tel/tel-hex-tipo-2-max-5.jpg",
      "/products/tel/tel-hex-tipo-2-max-6.jpg"
    ],
    "uses": [
      "Estructuras Metálicas",
      "Perfil + Perfil",
      "Perfil + Planchuela",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha MAX",
          "CABEZA",
          "HEX Tipo 2",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-hex-tipo-2",
    "name": "Autoperforante TEL HEX Tipo 2",
    "description": "Vinculación de chapa a perfil estructural. Recomendados para fijación de cubiertas metálicas, techos y paredes. Poseen bajo cabeza la conformación adecuada para impermeabilizar mediante el uso de una arandela de PVC, de dimensiones y características específicas.",
    "price": 24900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": true,
    "bulky": false,
    "image_url": "/products/tel/tel-hex-tipo-2.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "17 medidas (ver tabla)"
      },
      {
        "label": "Punta",
        "value": "Mecha"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "10 X 3/4\"",
      "12 X 3/4\"",
      "12 X 7/8\"",
      "12 X 1\"",
      "12 X 1 1/2\"",
      "12 X 2\"",
      "14 X 3/4\"",
      "14 X 7/8\"",
      "14 X 1\"",
      "14 X 1 1/2\"",
      "14 X 2\"",
      "14 X 2 1/2\"",
      "14 X 3\"",
      "14 X 4\"",
      "14 X 5\"",
      "14 X 6\"",
      "14 X 7\""
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Long. bajo cabeza",
        "Diámetro de Cabeza (mm) máximo",
        "Ranura/Hexágono",
        "Long. Rosca",
        "Longitud de Rosca",
        "Paso (hilos x pulg/mm)",
        "Punta"
      ],
      "rows": [
        [
          "10 X 3/4\"",
          "4,8",
          "19",
          "14,25",
          "5/16\"",
          "Rosca Total",
          "Chapa",
          "16",
          "Mecha"
        ],
        [
          "12 X 3/4\"",
          "5,5",
          "19",
          "14,25",
          "5/16\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "12 X 1\"",
          "5,5",
          "25,4",
          "14,25",
          "5/16\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "12 X 1 1/2\"",
          "5,5",
          "38,1",
          "14,25",
          "5/16\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "12 X 2\"",
          "5,5",
          "50,8",
          "14,25",
          "5/16\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 3/4\"",
          "6,3",
          "19",
          "16,5",
          "3/8\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 1\"",
          "6,3",
          "25,4",
          "16,5",
          "3/8\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 1 1/2\"",
          "6,3",
          "38,1",
          "16,5",
          "3/8\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 2\"",
          "6,3",
          "50,8",
          "16,5",
          "3/8\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 2 1/2\"",
          "6,3",
          "63,5",
          "16,5",
          "3/8\"",
          "Rosca Total",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 3\"",
          "6,3",
          "76,2",
          "16,5",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 4\"",
          "6,3",
          "101,6",
          "16,5",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 5\"",
          "6,3",
          "127",
          "16,5",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 6\"",
          "6,3",
          "101,6",
          "16,5",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14",
          "Mecha"
        ],
        [
          "14 X 7\"",
          "6,3",
          "127",
          "16,5",
          "3/8\"",
          "Rosca Parcial",
          "Chapa",
          "14",
          "Mecha"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-hex-tipo-2-1.jpg",
      "/products/tel/tel-hex-tipo-2-2.jpg",
      "/products/tel/tel-hex-tipo-2-3.jpg",
      "/products/tel/tel-hex-tipo-2-4.jpg",
      "/products/tel/tel-hex-tipo-2-5.jpg",
      "/products/tel/tel-hex-tipo-2-6.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Techos con estructuras metálicas",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "HEX Tipo 2",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-parker",
    "name": "Autoperforante TEL PARKER",
    "description": "Fabricados en acero, son tornillos de propósito general. Recomendados, especialmente para carpintería de aluminio, estructuras metálicos, carrocerías, cartelería publicitaria, aberturas, etc. ROSCA AUTOATERRAJANTE",
    "price": 14900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-parker.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "38 medidas (ver tabla)"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5472"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "4 X 1/4\"",
      "4 X 3/8\"",
      "4 X 1/2\"",
      "4 X 5/8\"",
      "4 X 3/4\"",
      "4 X 1\"",
      "6 X 3/8\"",
      "6 X 1/2\"",
      "6 X 5/8\"",
      "6 X 3/4\"",
      "6 x 1\"",
      "6 X 1 1/4\"",
      "6 x 1 1/2\"",
      "7 X 1/2\"",
      "7 X 5/8\"",
      "7 X 3/4\"",
      "7 X 1\"",
      "7 X 1 1/4\"",
      "7 X 1 1/2\"",
      "7 X 1 3/4\"",
      "7 X 2\"",
      "7 X 2 1/4\"",
      "8 x 1/2\"",
      "8 X 5/8\"",
      "8 x 3/4\"",
      "8 X 1\"",
      "8 X 1 1/4\"",
      "8 X 1 1/2\"",
      "8 X 1 3/4\"",
      "8 X 2\"",
      "10 X 1\"",
      "10 X 1 1/2\"",
      "10 X 1 3/4\"",
      "10 X 2\"",
      "10 X 2 1/2\"",
      "12 X 1\"",
      "12 X 1 1/2\"",
      "12 X 2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Bajo Cabeza",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "4 X 1/4\"",
          "2,8",
          "6,3",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "4 X 3/8\"",
          "2,8",
          "9,5",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "4 X 1/2\"",
          "2,8",
          "12,7",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "4 X 5/8\"\"",
          "2,8",
          "15,9",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "4 X 3/4\"\"",
          "2,8",
          "19",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "4 X 1\"",
          "2,8",
          "25,4",
          "5,4",
          "PH1",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/8\"",
          "3,5",
          "9,5",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1/2\"",
          "3,5",
          "12,7",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 5/8\"",
          "3,5",
          "15,9",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/4\"",
          "3,5",
          "19",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1\"",
          "3,5",
          "25,4",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1 1/4\"",
          "3,5",
          "31,8",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1 1/2\"",
          "3,5",
          "38,1",
          "6,95",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 1/2\"",
          "3,9",
          "12,7",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 5/8\"",
          "3,9",
          "15,9",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 3/4\"",
          "3,9",
          "19",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 1\"",
          "3,9",
          "25,4",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 1 1/4\"",
          "3,9",
          "31,8",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 1 1/2\"",
          "3,9",
          "38",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 1 3/4\"",
          "3,9",
          "44,4",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 2\"",
          "3,9",
          "50,8",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 2 1/4\"",
          "3,9",
          "57,2",
          "7,5",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 5/8\"",
          "4,2",
          "15,9",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\"",
          "4,2",
          "31,8",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 3/4\"",
          "4,2",
          "44,4",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 2\"",
          "4,2",
          "50,8",
          "8,35",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1\"",
          "4,8",
          "25,4",
          "9,4",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "9,4",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 3/4\"",
          "4,8",
          "44,4",
          "9,4",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "9,4",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2 1/2\"",
          "4,8",
          "63,5",
          "9,4",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "12 X 1\"",
          "5,5",
          "25,4",
          "10,5",
          "PH3",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "12 X 1 1/2\"",
          "5,5",
          "38,1",
          "10,5",
          "PH3",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "12 X 2\"",
          "5,5",
          "50,8",
          "10,5",
          "PH3",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-parker-1.jpg",
      "/products/tel/tel-parker-2.jpg",
      "/products/tel/tel-parker-3.jpg",
      "/products/tel/tel-parker-4.jpg",
      "/products/tel/tel-parker-5.jpg",
      "/products/tel/tel-parker-6.jpg"
    ],
    "uses": [
      "Carpinterias Metálicas - Carpinterias de P.V.C.",
      "Metal + Metal",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Parker Autoaterrajante",
          "PUNTA",
          "Punta B",
          "CABEZA",
          "Fijadora",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-phil-aluminio",
    "name": "Autoperforante TEL PHIL ALUMINIO",
    "description": "Carpintería de aluminio, cielorrasos metálicos, carrocerías, zinguerías, aberturas, ductos de ventilación, cartelería publicitaria.",
    "price": 15900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-phil-aluminio.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "9 X 1 1/2\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "9 X 1 1/2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Bajo Cabeza",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "6 X 3/8\"",
          "3,5",
          "9,5",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1/2\"",
          "3,5",
          "12,7",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/4\"",
          "3,5",
          "19",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1\"",
          "3,5",
          "25,4",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 5/8\"",
          "4,2",
          "15,9",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "9 X 1 1/2\" Aluminio",
          "4,75",
          "38",
          "9,48",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 7/16\" Pan Framing",
          "3,5",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 7/16\" Pan Framing",
          "3,9",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1/2\" Fresada",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\" Fresada",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-phil-aluminio-1.jpg",
      "/products/tel/tel-phil-aluminio-2.jpg",
      "/products/tel/tel-phil-aluminio-3.jpg",
      "/products/tel/tel-phil-aluminio-4.jpg",
      "/products/tel/tel-phil-aluminio-5.jpg",
      "/products/tel/tel-phil-aluminio-6.jpg"
    ],
    "uses": [
      "Fijación en H°A°",
      "Fijaciones de aberturas a H° A°"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Wafer",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-phil-fijadora",
    "name": "Autoperforante TEL PHIL FIJADORA",
    "description": "Carpintería de aluminio, cielorrasos metálicos, carrocerías, zinguerías, aberturas, ductos de ventilación, cartelería publicitaria.",
    "price": 15900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-phil-fijadora.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "11 medidas (ver tabla)"
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 3/8\"",
      "6 X 1/2\"",
      "6 X 3/4\"",
      "6 x 1\"",
      "8 x 1/2\"",
      "8 X 5/8\"",
      "8 x 3/4\"",
      "8 X 1\"",
      "8 X 1 1/2\"",
      "10 X 1 1/2\"",
      "10 X 2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Bajo Cabeza",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "6 X 3/8\"",
          "3,5",
          "9,5",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1/2\"",
          "3,5",
          "12,7",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/4\"",
          "3,5",
          "19",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1\"",
          "3,5",
          "25,4",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 5/8\"",
          "4,2",
          "15,9",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "9 X 1 1/2\" Aluminio",
          "4,75",
          "38",
          "9,48",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 7/16\" Pan Framing",
          "3,5",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 7/16\" Pan Framing",
          "3,9",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1/2\" Fresada",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\" Fresada",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-phil-fijadora-1.jpg",
      "/products/tel/tel-phil-fijadora-2.jpg",
      "/products/tel/tel-phil-fijadora-3.jpg",
      "/products/tel/tel-phil-fijadora-4.jpg",
      "/products/tel/tel-phil-fijadora-5.jpg",
      "/products/tel/tel-phil-fijadora-6.jpg"
    ],
    "uses": [
      "Carpinterias Metálicas - Carpinterias de P.V.C.",
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Fijadora",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-phil-fresada",
    "name": "Autoperforante TEL PHIL FRESADA",
    "description": "Carpintería de aluminio, cielorrasos metálicos, carrocerías, zinguerías, aberturas, ductos de ventilación, cartelería publicitaria.",
    "price": 15900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-phil-fresada.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "8 x 1/2\" · 8 X 1 1/4\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "8 x 1/2\"",
      "8 X 1 1/4\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diametro x Longitud",
        "Diametro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "8 X 1/2\"",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\"",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-phil-fresada-1.jpg",
      "/products/tel/tel-phil-fresada-2.jpg",
      "/products/tel/tel-phil-fresada-3.jpg",
      "/products/tel/tel-phil-fresada-4.jpg",
      "/products/tel/tel-phil-fresada-5.jpg",
      "/products/tel/tel-phil-fresada-6.jpg",
      "/products/tel/tel-phil-fresada-7.jpg"
    ],
    "uses": [
      "Carpinterias Metálicas - Carpinterias de P.V.C.",
      "Chapa + Perfil",
      "Perfil + Perfil",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Fresada",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-phil-pan-framing-aguja",
    "name": "Autoperforante TEL PHIL PAN FRAMING punta aguja",
    "description": "Carpintería de aluminio, cielorrasos metálicos, carrocerías, zinguerías, aberturas, ductos de ventilación, cartelería publicitaria.",
    "price": 15900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-phil-pan-framing-aguja.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "#6 X 7/16\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5471"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "#6 X 7/16\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Bajo Cabeza",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "6 X 3/8\"",
          "3,5",
          "9,5",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1/2\"",
          "3,5",
          "12,7",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/4\"",
          "3,5",
          "19",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1\"",
          "3,5",
          "25,4",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 5/8\"",
          "4,2",
          "15,9",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "9 X 1 1/2\" Aluminio",
          "4,75",
          "38",
          "9,48",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 7/16\" Pan Framing",
          "3,5",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 7/16\" Pan Framing",
          "3,9",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1/2\" Fresada",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\" Fresada",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-phil-pan-framing-aguja-1.jpg",
      "/products/tel/tel-phil-pan-framing-aguja-2.jpg",
      "/products/tel/tel-phil-pan-framing-aguja-3.jpg",
      "/products/tel/tel-phil-pan-framing-aguja-4.jpg",
      "/products/tel/tel-phil-pan-framing-aguja-5.jpg",
      "/products/tel/tel-phil-pan-framing-aguja-6.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Fijaciones en Maderas",
      "Fijaciones en Tarugos",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Pan Framing",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-phil-pan-framing-mecha",
    "name": "Autoperforante TEL PHIL PAN FRAMING punta mecha",
    "description": "Carpintería de aluminio, cielorrasos metálicos, carrocerías, zinguerías, aberturas, ductos de ventilación, cartelería publicitaria.",
    "price": 15900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×1000",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-phil-pan-framing-mecha.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "7 X 7/16\""
      },
      {
        "label": "Ranura / Hexagono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Plateado"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Norma",
        "value": "IRAM 5484"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "7 X 7/16\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Bajo Cabeza",
        "Cabeza (mm)",
        "Ranura / Hexagono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "6 X 3/8\"",
          "3,5",
          "9,5",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1/2\"",
          "3,5",
          "12,7",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 3/4\"",
          "3,5",
          "19",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 1\"",
          "3,5",
          "25,4",
          "7",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 1/2\"",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 5/8\"",
          "4,2",
          "15,9",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 x 3/4 \"",
          "4,2",
          "19",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1\"",
          "4,2",
          "25,4",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/2\"",
          "4,2",
          "38,1",
          "8",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 1 1/2\"",
          "4,8",
          "38,1",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "10 X 2\"",
          "4,8",
          "50,8",
          "9",
          "PH2",
          "Rosca Total",
          "Fijadora",
          "Cincado",
          "Plateado"
        ],
        [
          "9 X 1 1/2\" Aluminio",
          "4,75",
          "38",
          "9,48",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Plateado"
        ],
        [
          "6 X 7/16\" Pan Framing",
          "3,5",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "7 X 7/16\" Pan Framing",
          "3,9",
          "11,1",
          "7",
          "PH2",
          "Rosca Total",
          "Pan Framing",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1/2\" Fresada",
          "4,2",
          "12,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ],
        [
          "8 X 1 1/4\" Fresada",
          "4,2",
          "31,7",
          "8",
          "PH2",
          "Rosca Total",
          "Fresada",
          "Cincado",
          "Plateado"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-phil-pan-framing-mecha-1.jpg",
      "/products/tel/tel-phil-pan-framing-mecha-2.jpg",
      "/products/tel/tel-phil-pan-framing-mecha-3.jpg",
      "/products/tel/tel-phil-pan-framing-mecha-4.jpg",
      "/products/tel/tel-phil-pan-framing-mecha-5.jpg",
      "/products/tel/tel-phil-pan-framing-mecha-6.jpg"
    ],
    "uses": [
      "Chapa + Perfil",
      "Estructuras Metálicas",
      "Industria",
      "Perfil + Perfil",
      "Tornillo para metal"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Chapa",
          "PUNTA",
          "Mecha",
          "CABEZA",
          "Pan Framing",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Plateado"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-wafer",
    "name": "Autoperforante TEL WAFER",
    "description": "Tornillo para madera con cabeza wafer, que por su diseño otorga terminaciones atractivas en carpintería.",
    "price": 19900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "en_sucursal",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-wafer.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "11 medidas (ver tabla)"
      },
      {
        "label": "Ranura / Hexágono",
        "value": "PH2"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Amarillo"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Mini Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "6 X 1/2\"",
      "6 X 5/8\"",
      "6 X 3/4\"",
      "6 x 1\"",
      "8 X 1\"",
      "8 X 1 1/2\"",
      "8 X 2\"",
      "10 X 1 1/2\"",
      "10 X 1 3/4\"",
      "10 X 2\"",
      "10 X 2 1/2\""
    ],
    "packagings": [
      "Estuche",
      "Mini Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud bajo cabeza",
        "Cabeza (mm)",
        "Ranura / Hexágono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "6 X 1/2\"",
          "3,8",
          "12,7",
          "8,8",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "6 X 5/8\"",
          "3,8",
          "15,9",
          "8,8",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "6 X 3/4\"",
          "3,8",
          "19",
          "8,8",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "6 X 1\"",
          "3,8",
          "25,4",
          "8,8",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "8 X 1\"",
          "4,5",
          "25,4",
          "11,1",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "8 X 1 1/2\"",
          "4,5",
          "38,1",
          "11,1",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "8 X 2\"",
          "4,5",
          "50,8",
          "11,1",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "10 X 1 1/2\"",
          "5",
          "38,1",
          "11,4",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "10 X 1 3/4\"",
          "5",
          "44,5",
          "11,4",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "10 X 2\"",
          "5",
          "50,8",
          "11,4",
          "PH2",
          "Rosca Total",
          "Wafer",
          "Cincado",
          "Amarillo"
        ],
        [
          "10 X 2 1/2\"",
          "5",
          "63,5",
          "11,4",
          "PH2",
          "Rosca Parcial",
          "Wafer",
          "Cincado",
          "Amarillo"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-wafer-1.jpg",
      "/products/tel/tel-wafer-2.jpg",
      "/products/tel/tel-wafer-3.jpg",
      "/products/tel/tel-wafer-4.jpg",
      "/products/tel/tel-wafer-5.jpg",
      "/products/tel/tel-wafer-6.jpg"
    ],
    "uses": [
      "Carpintería - Muebles - Estructuras de Madera",
      "Madera + Madera",
      "Tornillo para madera"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Madera",
          "PUNTA",
          "Aguja",
          "CABEZA",
          "Wafer",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Amarillo"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Mini Estuche",
          "Caja a granel"
        ]
      }
    ]
  },
  {
    "slug": "tel-wall",
    "name": "Autoperforante TEL WALL",
    "description": "Diseñados especialmente para fijar aberturas metálicas, de PVC y de madera sobre hormigón. Se requiere una previa perforación con broca.",
    "price": 19900,
    "category_slug": "tornillos-y-fijaciones",
    "brand": "TEL",
    "unit": "caja ×500",
    "stock": 100,
    "stock_status": "sin_stock",
    "featured": false,
    "bulky": false,
    "image_url": "/products/tel/tel-wall.jpg",
    "specs": [
      {
        "label": "Medidas disponibles",
        "value": "7.3 X 80 · 7.3 X 100 · 7.3 X 120 · 7.3 X 140"
      },
      {
        "label": "Diámetro",
        "value": "7,3"
      },
      {
        "label": "Ranura / Hexágono",
        "value": "T-30"
      },
      {
        "label": "Tratamiento superficial",
        "value": "Cincado"
      },
      {
        "label": "Color",
        "value": "Amarillo"
      },
      {
        "label": "Presentaciones",
        "value": "Estuche · Caja a granel"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (TEL)"
      }
    ],
    "active": true,
    "sizes": [
      "7.3 X 80",
      "7.3 X 100",
      "7.3 X 120",
      "7.3 X 140"
    ],
    "packagings": [
      "Estuche",
      "Caja a granel"
    ],
    "spec_table": {
      "headers": [
        "Diámetro x Longitud",
        "Diámetro",
        "Longitud Total",
        "Cabeza (mm)",
        "Ranura / Hexágono",
        "Longitud de Rosca",
        "Cabeza",
        "Tratamiento superficial",
        "Color"
      ],
      "rows": [
        [
          "7,3 X 80",
          "7,3",
          "80",
          "10,8",
          "T-30",
          "Rosca Total",
          "Torx",
          "Cincado",
          "Amarillo"
        ],
        [
          "7,3 X 100",
          "7,3",
          "100",
          "10,8",
          "T-30",
          "Rosca Parcial",
          "Torx",
          "Cincado",
          "Amarillo"
        ],
        [
          "7,3 X 120",
          "7,3",
          "120",
          "10,8",
          "T-30",
          "Rosca Parcial",
          "Torx",
          "Cincado",
          "Amarillo"
        ],
        [
          "7,3 X 140",
          "7,3",
          "140",
          "10,8",
          "T-30",
          "Rosca Parcial",
          "Torx",
          "Cincado",
          "Amarillo"
        ]
      ]
    },
    "gallery": [
      "/products/tel/tel-wall-1.jpg",
      "/products/tel/tel-wall-2.jpg",
      "/products/tel/tel-wall-3.jpg",
      "/products/tel/tel-wall-4.jpg",
      "/products/tel/tel-wall-5.jpg",
      "/products/tel/tel-wall-6.jpg"
    ],
    "uses": [
      "Fijación en H°A°",
      "Fijaciones de aberturas a H° A°"
    ],
    "full_info": [
      {
        "title": "Características",
        "items": [
          "ROSCA",
          "Especial",
          "PUNTA",
          "Punta C",
          "CABEZA",
          "Torx",
          "TRATAMIENTO SUPERFICIAL",
          "Cincado",
          "COLOR",
          "Amarillo"
        ]
      },
      {
        "title": "Presentacion",
        "items": [
          "Estuche",
          "Caja a granel"
        ]
      }
    ]
  }
];
