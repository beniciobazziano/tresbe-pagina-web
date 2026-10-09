# Notas para el programador — conectar stock y precios

Tienda online de Tresbe Distribuidora. Next.js (App Router) + TypeScript + Tailwind v4 + Supabase.
Se levanta con `npm install` y `npm run dev` (http://localhost:3000). Sin claves funciona en modo demo.
Las claves reales **no vienen incluidas**: copiá `.env.example` a `.env.local` y pedile los valores al dueño.

## Lo primero: la web ya tiene una API para conectarse con Bynet

Existe un protocolo llamado **Bynet Connect**, ya implementado del lado de la web (`src/app/api/bynet/*`, adaptador en `src/lib/bynet-data.ts`, autenticación en `src/lib/bynet-auth.ts`). Todas las llamadas llevan `Authorization: Bearer <BYNET_API_KEY>`; la clave se define en `.env.local` (sin ella la API responde 503). Desde `/admin/configuracion` hay un panel para probar la conexión.

| Método | Ruta | Para qué |
|---|---|---|
| GET | `/api/bynet/ping` | Comprobar conexión y permisos |
| PUT | `/api/bynet/catalog` | **Publicar productos, precios, stock y fotos** |
| GET | `/api/bynet/catalog` | Catálogo actual de la tienda |
| GET | `/api/bynet/orders?since=&limit=` | Pedidos del checkout |
| POST | `/api/bynet/orders/<id>/status` | Cambiar estado y seguimiento de un pedido |
| GET | `/api/bynet/order-notes?since=` | Notas de pedido de distribuidora |
| GET | `/api/bynet/customers` | Cuentas de clientes |

`PUT /api/bynet/catalog` recibe `{ products: [{ sku, name, brand, category, description, unit, price, stock, visible, featured, images }], mode: "upsert" | "replace" }` (máximo 5.000 productos por llamada). Hace *upsert* por `sku` y solo pisa los campos que vienen en la llamada.

**Si el sistema que lleva el stock es Bynet:** el lado de la web ya está; falta la parte del lado de Bynet (llamar a estos endpoints con precios y stock) y configurar `BYNET_API_KEY`. **Si es otro sistema:** puede usar estos mismos endpoints desde su lado, o se puede escribir un conector nuevo.

## Dónde viven el precio y el stock

Cada producto (`src/lib/types.ts`, interfaz `Product`) tiene:

| Campo | Qué es |
|---|---|
| `slug` | Identificador único (en la API Bynet es el `sku`; en el Excel, la columna `codigo`). |
| `price` | Precio de lista en ARS, IVA incluido. Si es `0` la web muestra "Consultar precio". |
| `stock` | Cantidad (entero). |
| `stock_status` | `en_sucursal` (verde) · `en_argentina` (amarillo, a pedido) · `sin_stock` (rojo). Es lo que ve el cliente. |
| `active` | Si el producto se ve en la tienda. |

Hay dos almacenes, elegidos en `src/lib/catalog.ts`: archivos locales en `data/` (solo desarrollo) o la tabla `products` de Supabase (`supabase/schema.sql`), que es la que debe usarse en producción.

Alternativa más simple, sin programar: en `/admin` se exporta e importa el catálogo en Excel (`src/lib/excel.ts`).

## Cosas a tener en cuenta (importante)

- **El `sku` que manda Bynet tiene que ser el `slug` de la web.** El PUT crea un producto nuevo si el `sku` no existe, así que un código distinto genera un duplicado en vez de actualizar el existente. Hay que cargar en Bynet los códigos de la web, o armar una tabla de equivalencias.
- **El estado de stock se calcula solo:** si se envía `stock`, queda `en_sucursal` cuando es mayor que 0 y `sin_stock` cuando es 0. El estado amarillo (`en_argentina`, a pedido) no sale de la sincronización: solo se conserva si en la llamada no se manda `stock`, o se cambia a mano desde `/admin`.
- **Un solo precio y stock por producto.** Medida, color, tipo y presentación son opciones de texto (`sizes`, `colors`, `variants`, `packagings`): no tienen precio ni stock propios. Si el sistema maneja un código/precio/stock distinto por variante, hay que extender el modelo.
- **Muchos productos están en precio 0 y stock 0.** Telplast, Fischer, Adhesil, Rothoblaas/Holz y los productos nuevos de Dorking se cargaron sin precio ("Consultar precio"). Es donde más falta la conexión.
- **El stock no se descuenta al vender.** No encontré ningún punto donde el checkout o la nota de pedido modifique `stock`. Como Bynet puede traer los pedidos (`/api/bynet/orders`), el descuento puede hacerse del lado del sistema; si no, hay que agregarlo.
- **Descuentos y rentabilidad.** Los descuentos por cliente y la rentabilidad por marca se calculan a partir de `price` (`src/lib/pricing.ts`, `discountedPrice` en `src/lib/site.ts`). `price` debe ser siempre la lista base.
- **El esquema de Supabase está desactualizado.** `supabase/schema.sql` no tiene las columnas `sizes`, `size_images`, `packagings`, `colors`, `color_images`, `variants`, `spec_table`, `gallery`, `uses`, `full_info` ni `sort_group`, que la web ya usa. Hay que agregarlas (`alter table ... add column`, tipo `jsonb`/`text[]`/`int`) antes de pasar a Supabase en producción; si no, se pierden los selectores y el orden de los productos, y "Importar catálogo inicial" falla.
- **El almacén local no sirve en Vercel.** El sistema de archivos ahí es efímero: en producción tiene que usarse Supabase.

## Archivos clave

- `src/lib/types.ts` — modelo de datos (`Product`, `Order`, etc.)
- `src/lib/catalog.ts` — lectura del catálogo (Supabase o local)
- `src/lib/admindb.ts` — escritura desde el panel de administración
- `src/lib/bynet-data.ts`, `bynet-auth.ts`, `src/app/api/bynet/*` — API Bynet Connect
- `src/lib/excel.ts` — exportar/importar catálogo en Excel
- `src/lib/data/*.ts` — catálogo inicial por marca (semilla)
- `supabase/schema.sql` — tablas y seguridad
- `src/app/api/checkout/route.ts` — checkout (relee los precios del catálogo en el servidor)
