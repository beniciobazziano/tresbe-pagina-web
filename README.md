# Tresbe Distribuidora — Tienda online

Tienda online de insumos para construcción en seco (steel frame / wood frame), ferretería industrial y herramientas. Mar del Plata, Argentina.

**Stack**: Next.js (App Router) · TypeScript · Tailwind CSS v4 · Supabase · Mercado Pago · Stripe.

## Arrancar en desarrollo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. **Sin configurar nada ya funciona en modo demo**: catálogo de ejemplo, carrito completo y pedidos que se confirman por WhatsApp.

## Qué incluye

- **Home** con estética de arquitectura moderna y categorías del catálogo
- **Catálogo** con búsqueda, filtro por categoría y ficha técnica por producto
- **Carrito** persistente + **checkout** en 3 pasos (datos → entrega → pago)
- **Pagos**: Mercado Pago (principal), Stripe (tarjetas internacionales) y "coordinar por WhatsApp"
- **Flete a cotizar**: los productos voluminosos (perfiles, placas) con envío pasan a cotización por WhatsApp antes de pagar
- **Páginas educativas**: `/sistemas/steel-frame` y `/sistemas/wood-frame` con el muro capa por capa, ventajas y mitos
- **Panel admin** en `/admin`: pedidos con estados + CRUD de productos con fotos + cuentas de clientes
- **Portal "Ya soy cliente"**: cuentas B2B que creás desde el panel (usuario + contraseña) con **descuento %** y **notas de cuenta**; el descuento se aplica solo en el checkout y se revalida en el servidor
- Botón flotante de WhatsApp en todo el sitio

> Modo demo (sin Supabase): probá el portal con el usuario `obrador` y la contraseña `tresbe123` (cliente de ejemplo con 15% de descuento).

## Administración sin Supabase (modo local)

El panel `/admin` **funciona completo sin configurar nada**: se entra con el usuario y contraseña definidos en `.env.local` (`ADMIN_USERNAME` / `ADMIN_PASSWORD`) y los cambios —precios, productos, stock, clientes, pedidos— se guardan en la carpeta `data/` de este equipo (fuera de git). Al conectar Supabase, el panel pasa automáticamente a la base online; el usuario local sigue funcionando como acceso de respaldo.

**Semáforo de stock** en cada producto (punto arriba a la derecha): 🟢 en stock en sucursal · 🟡 stock en Argentina, no en sucursal (a pedido) · 🔴 sin stock en Argentina. Se cambia desde el panel en "Estado de stock".

## Conectar los servicios (en este orden)

### 1. Supabase (base de datos y panel admin)

1. En [supabase.com/dashboard](https://supabase.com/dashboard) abrí tu proyecto.
2. **SQL Editor** → pegá y ejecutá el contenido de [`supabase/schema.sql`](supabase/schema.sql).
3. **Project Settings → API**: copiá *Project URL* y *anon public key*.
4. Copiá `.env.example` como `.env.local` y completá `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. **Authentication → Users → Add user**: creá tu usuario admin (email + contraseña).
6. Reiniciá `npm run dev`, entrá a `/admin`, iniciá sesión y usá **"Importar catálogo inicial"** para cargar los productos de ejemplo (después los editás o borrás).

### 2. Mercado Pago

1. En [mercadopago.com.ar/developers/panel/app](https://www.mercadopago.com.ar/developers/panel/app) creá una aplicación (tipo *Checkout Pro*).
2. **Credenciales de producción** → copiá el **Access Token** a `MP_ACCESS_TOKEN` en `.env.local`.
3. Para probar sin plata real usá las *credenciales de prueba* y las tarjetas de test del panel.

### 3. Stripe (opcional)

1. En [dashboard.stripe.com](https://dashboard.stripe.com) → **Developers → API keys**.
2. Copiá la **Secret key** a `STRIPE_SECRET_KEY` en `.env.local`.

> Nota: verificá en tu cuenta de Stripe que ARS esté habilitado como moneda de cobro.

## Publicar en producción

La forma más simple es [Vercel](https://vercel.com): importás el repo, cargás las variables de entorno y listo. El dominio (ej. `somostresbe.com`) se apunta desde el panel de Vercel.

## Estructura

```
src/
  app/            páginas (App Router) + /api/checkout
  components/     UI compartida + carrito + panel admin
  lib/            catálogo (Supabase o datos de ejemplo), pedidos, marca
supabase/
  schema.sql      tablas, seguridad RLS y bucket de imágenes
```
