# Notas para el programador — conectar stock y precios

Tienda online de Tresbe Distribuidora. Next.js (App Router) + TypeScript + Tailwind v4 + Supabase.
Se levanta con `npm install` y `npm run dev` (http://localhost:3000). Sin claves funciona en modo demo.
Las claves reales **no vienen incluidas**: copiá `.env.example` a `.env.local` y pedile los valores al dueño.

## Dónde viven el precio y el stock

Cada producto (`src/lib/types.ts`, interfaz `Product`) tiene:

| Campo | Qué es |
|---|---|
| `slug` | Identificador único del producto (en el Excel es la columna `codigo`). **Es el que hay que cruzar con el código del sistema.** |
| `price` | Precio de lista en ARS, IVA incluido. Si es `0` la web muestra "Consultar precio". |
| `stock` | Cantidad (entero). |
| `stock_status` | `en_sucursal` (verde) · `en_argentina` (amarillo, a pedido) · `sin_stock` (rojo). Es lo que ve el cliente (`StockDot`). |
| `active` | Si el producto se ve en la tienda. |

Hay dos almacenes, elegidos en `src/lib/catalog.ts`:
- **Sin Supabase configurado:** archivos locales en `data/` (`products.json`). Solo sirve para desarrollo.
- **Con Supabase configurado:** tabla `products` (`supabase/schema.sql`). Es el que debe usarse en producción.

## Tres formas de conectarlo (de menos a más trabajo)

1. **Excel (ya existe).** En `/admin` se exporta e importa el catálogo (`src/lib/excel.ts`, ruta `api/admin/products/import`). Columnas: `codigo, nombre, marca, categoria, precio, stock, estado_stock, ...`. Si el sistema puede exportar un Excel con ese formato, alcanza con importarlo. Se puede automatizar, pero la ruta exige sesión de admin.
2. **Sincronización directa a Supabase.** Un proceso (cron o script) que actualice `price`, `stock` y `stock_status` en la tabla `products`, buscando por `slug`. Usar la *service role key* solo del lado servidor, nunca la anon key ni en el navegador.
3. **Endpoint propio en la web.** Hoy no existe. Se puede crear algo como `POST /api/sync` protegido con un token, que reciba la lista de precios/stock del sistema y actualice la base.

## Cosas a tener en cuenta (importante)

- **Un solo precio y stock por producto.** Medida, color, tipo y presentación son opciones de texto (`sizes`, `colors`, `variants`, `packagings`): no tienen precio ni stock propios. Si el sistema maneja un código/precio/stock distinto por variante, hay que extender el modelo.
- **Equivalencia de códigos.** El `slug` es un código propio de la web, no el del sistema. Hace falta una tabla de equivalencias (código del sistema ↔ `slug`). Los productos cargados desde cero no tienen código del sistema asociado.
- **Muchos productos están en precio 0 y stock 0.** Telplast, Fischer, Adhesil, Rothoblaas/Holz y los productos nuevos de Dorking se cargaron sin precio ("Consultar precio"). Es donde más falta la conexión.
- **Regla de `stock_status`.** Hay que definir cómo se traduce el stock del sistema a verde/amarillo/rojo (por ejemplo, stock en sucursal > 0 → verde).
- **El stock no se descuenta al vender.** No encontré ningún punto donde el checkout o la nota de pedido modifique `stock`. Si hace falta descontar, hay que agregarlo.
- **Descuentos y rentabilidad.** Los descuentos por cliente y la rentabilidad por marca se calculan a partir de `price` (`src/lib/pricing.ts`, `discountedPrice` en `src/lib/site.ts`). `price` debe ser siempre la lista base.
- **El esquema de Supabase está desactualizado.** `supabase/schema.sql` no tiene las columnas `sizes`, `size_images`, `packagings`, `colors`, `color_images`, `variants`, `spec_table`, `gallery`, `uses`, `full_info` ni `sort_group`, que la web ya usa. Hay que agregarlas (`alter table ... add column`, tipo `jsonb`/`text[]`/`int`) antes de pasar a Supabase en producción; si no, se pierden los selectores y el orden de los productos, y "Importar catálogo inicial" falla.
- **El almacén local no sirve en Vercel.** El sistema de archivos ahí es efímero: en producción tiene que usarse Supabase.

## Archivos clave

- `src/lib/types.ts` — modelo de datos (`Product`, `Order`, etc.)
- `src/lib/catalog.ts` — lectura del catálogo (Supabase o local)
- `src/lib/admindb.ts` — escritura desde el panel de administración
- `src/lib/excel.ts` — exportar/importar catálogo en Excel
- `src/lib/data/*.ts` — catálogo inicial por marca (semilla)
- `supabase/schema.sql` — tablas y seguridad
- `src/app/api/checkout/route.ts` — checkout (relee los precios del catálogo en el servidor)
