-- Esquema de la tienda Tresbe Distribuidora
-- Ejecutar en el SQL Editor de Supabase (una sola vez).

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null default '',
  icon text not null default 'Package',
  position int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null default '',
  price numeric not null check (price >= 0),
  category_slug text not null references public.categories(slug) on update cascade,
  brand text,
  unit text not null default 'unidad',
  stock int not null default 0,
  stock_status text not null default 'en_sucursal'
    check (stock_status in ('sin_stock','en_argentina','en_sucursal')),
  featured boolean not null default false,
  bulky boolean not null default false,
  image_url text,
  specs jsonb not null default '[]',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  shipping_method text not null check (shipping_method in ('envio','retiro','cotizacion')),
  shipping_address text,
  payment_method text not null check (payment_method in ('mercadopago','stripe','whatsapp')),
  status text not null default 'pendiente'
    check (status in ('pendiente','pagado','a_cotizar','preparando','entregado','cancelado')),
  items jsonb not null default '[]',
  total numeric not null default 0,
  notes text,
  customer_id uuid,
  discount_pct numeric not null default 0,
  created_at timestamptz not null default now()
);

-- Cuentas de clientes B2B: las crea el admin con usuario, contraseña,
-- descuento y notas. La contraseña se guarda hasheada (bcrypt via pgcrypto).
create extension if not exists pgcrypto;

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password_hash text not null,
  name text not null,
  discount_pct numeric not null default 0 check (discount_pct >= 0 and discount_pct <= 90),
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Seguridad a nivel de fila
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.customers enable row level security;

-- Clientes: solo el admin ve y edita la tabla. El login del cliente pasa
-- por funciones SECURITY DEFINER que nunca exponen el hash.
create policy "clientes gestion admin" on public.customers
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create or replace function public.login_customer(p_username text, p_password text)
returns table (id uuid, name text, discount_pct numeric, notes text)
language sql security definer set search_path = public as $$
  select c.id, c.name, c.discount_pct, c.notes
  from customers c
  where c.username = lower(trim(p_username))
    and c.active
    and c.password_hash = crypt(p_password, c.password_hash);
$$;

create or replace function public.get_customer(p_id uuid)
returns table (id uuid, name text, discount_pct numeric, notes text)
language sql security definer set search_path = public as $$
  select c.id, c.name, c.discount_pct, c.notes
  from customers c
  where c.id = p_id and c.active;
$$;

-- Alta/edición de clientes desde el panel (hashea la contraseña).
-- p_password vacío en una edición = mantener la contraseña actual.
create or replace function public.admin_upsert_customer(
  p_id uuid,
  p_username text,
  p_password text,
  p_name text,
  p_discount numeric,
  p_notes text,
  p_active boolean
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  if auth.role() <> 'authenticated' then
    raise exception 'Solo el administrador puede gestionar clientes';
  end if;
  if p_id is null then
    if p_password is null or length(p_password) < 6 then
      raise exception 'La contraseña debe tener al menos 6 caracteres';
    end if;
    insert into customers (username, password_hash, name, discount_pct, notes, active)
    values (lower(trim(p_username)), crypt(p_password, gen_salt('bf')), p_name,
            coalesce(p_discount, 0), nullif(trim(coalesce(p_notes, '')), ''), coalesce(p_active, true))
    returning customers.id into v_id;
  else
    update customers set
      username = lower(trim(p_username)),
      name = p_name,
      discount_pct = coalesce(p_discount, discount_pct),
      notes = nullif(trim(coalesce(p_notes, '')), ''),
      active = coalesce(p_active, active),
      password_hash = case
        when p_password is not null and length(p_password) >= 6
          then crypt(p_password, gen_salt('bf'))
        else password_hash
      end
    where customers.id = p_id
    returning customers.id into v_id;
  end if;
  return v_id;
end $$;

-- Catálogo: lectura pública, escritura solo para usuarios autenticados (admin)
create policy "categorias lectura publica" on public.categories
  for select using (true);
create policy "categorias escritura admin" on public.categories
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "productos lectura publica" on public.products
  for select using (true);
create policy "productos escritura admin" on public.products
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- Pedidos: cualquiera puede crear (checkout), solo el admin puede ver y editar
create policy "pedidos alta publica" on public.orders
  for insert with check (true);
create policy "pedidos lectura admin" on public.orders
  for select using (auth.role() = 'authenticated');
create policy "pedidos edicion admin" on public.orders
  for update using (auth.role() = 'authenticated');

-- Bucket de imágenes de productos (lectura pública, subida solo admin)
insert into storage.buckets (id, name, public)
values ('productos', 'productos', true)
on conflict (id) do nothing;

create policy "imagenes lectura publica" on storage.objects
  for select using (bucket_id = 'productos');
create policy "imagenes subida admin" on storage.objects
  for insert with check (bucket_id = 'productos' and auth.role() = 'authenticated');
create policy "imagenes borrado admin" on storage.objects
  for delete using (bucket_id = 'productos' and auth.role() = 'authenticated');
