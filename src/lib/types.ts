export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  /** Nombre del icono de lucide-react usado en las tarjetas de categoría */
  icon: string;
  position: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

/** Una opción de "tipo" dentro de un producto (ver Product.variants) */
export interface ProductVariant {
  label: string;
  description?: string;
  specs?: ProductSpec[];
  image_url?: string;
}

/**
 * Semáforo de stock:
 * - "sin_stock":    sin stock en Argentina (punto rojo)
 * - "en_argentina": hay stock en el país pero no en la sucursal (punto amarillo)
 * - "en_sucursal":  disponible en la sucursal (punto verde)
 */
export type StockStatus = "sin_stock" | "en_argentina" | "en_sucursal";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  /** Precio en pesos argentinos (ARS), IVA incluido */
  price: number;
  category_slug: string;
  brand: string | null;
  /** Unidad de venta: "unidad", "caja x1000", "m2", "rollo", etc. */
  unit: string;
  stock: number;
  stock_status: StockStatus;
  featured: boolean;
  /** Voluminoso: no se envía con tarifa plana, el flete se cotiza aparte */
  bulky: boolean;
  /**
   * Línea que Tresbe distribuye (reventa). Todo el catálogo se vende al
   * público; solo estos productos ve un cliente de distribuidora en su
   * sección. Si viene sin definir se resuelve por marca (lib/distributor).
   */
  distributor?: boolean;
  image_url: string | null;
  specs: ProductSpec[];
  /** Medidas en las que se ofrece (el cliente elige una al pedir) */
  sizes?: string[];
  /**
   * Foto propia por medida (ej. cada tamaño del envase es una foto
   * distinta). Clave = el string exacto de `sizes`. Si una medida no
   * tiene entrada acá, se muestra la foto general (image_url/gallery).
   */
  size_images?: Record<string, string>;
  /** Presentaciones de empaque disponibles (estuche, granel, etc.) */
  packagings?: string[];
  /**
   * Colores en los que se ofrece (ej. una silicona en varios colores).
   * Un solo producto por "tipo"; el color es una opción más, igual que
   * la medida o el empaque.
   */
  colors?: string[];
  /**
   * Foto propia por color. Clave = el string exacto de `colors`. Si un
   * color no tiene entrada acá, se muestra la foto general
   * (image_url/gallery) — pasa seguido cuando el fabricante no tiene
   * una foto distinta por color.
   */
  color_images?: Record<string, string>;
  /**
   * Variantes de "tipo" dentro de un mismo producto (ej. los distintos
   * químicos de un anclaje, cada uno con su propio uso). A diferencia
   * de medida/color/empaque (que son solo texto), acá cada opción trae
   * su propia descripción y ficha técnica: al elegir una, reemplazan a
   * `description`/`specs` del producto en la ficha.
   */
  variants?: ProductVariant[];
  /** Ficha técnica completa del fabricante: una fila por medida */
  spec_table?: { headers: string[]; rows: string[][] };
  /** Fotos adicionales del fabricante (además de image_url) */
  gallery?: string[];
  /** Usos y aplicaciones recomendadas (etiquetas del fabricante) */
  uses?: string[];
  /** Contenido ampliado del fabricante para el botón "Ver más" */
  full_info?: { title: string; items: string[] }[];
  /** Peso real de una unidad, en kg (para cotizar el envío) */
  weight_kg?: number;
  /** Medidas de una unidad embalada, en cm (para cotizar el envío) */
  length_cm?: number;
  width_cm?: number;
  height_cm?: number;
  /**
   * Orden de exhibición dentro de su marca (menor = primero). Ingco:
   * 1 COSLI, 2 máquinas a batería y combos de máquina, 3 combos de
   * baterías, 4 baterías, 5 máquinas a cable, 6 bolsos y cartucheras,
   * 7 herramientas manuales.
   */
  sort_group?: number;
  active: boolean;
}

export type ShippingMethod = "envio" | "retiro" | "cotizacion";
export type PaymentMethod = "mercadopago" | "stripe" | "whatsapp";

export type OrderStatus =
  | "pendiente"
  | "pagado"
  | "a_cotizar"
  | "preparando"
  | "enviado"
  | "entregado"
  | "cancelado";

export interface OrderItem {
  product_id: string;
  name: string;
  unit_price: number;
  quantity: number;
  /** Código del producto (slug), útil en la nota de pedido */
  code?: string;
  unit?: string;
  /** Medida, color, tipo y presentación elegidos al pedir */
  size?: string;
  color?: string;
  variant?: string;
  packaging?: string;
}

/**
 * Origen del pedido:
 * - "tienda": compra del público por el checkout de la web
 * - "distribuidora": nota de pedido cargada por un cliente registrado
 */
export type OrderType = "tienda" | "distribuidora";

/** Datos de seguimiento del envío (los carga Bynet al despachar) */
export interface OrderTracking {
  carrier: string | null;
  code: string | null;
  url: string | null;
}

export interface Order {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_method: ShippingMethod;
  shipping_address: string | null;
  /** Código postal de destino usado para cotizar el envío */
  shipping_postal_code?: string | null;
  /** Costo del envío cotizado con la transportista (0 = retiro o a cotizar) */
  shipping_cost?: number;
  payment_method: PaymentMethod;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  notes: string | null;
  /** Cuenta de cliente registrado que hizo el pedido (null = público) */
  customer_id: string | null;
  /** Descuento % de la cuenta aplicado al total */
  discount_pct: number;
  /** Tienda (público) o nota de pedido de distribuidora */
  order_type?: OrderType;
  /** Número correlativo de nota de pedido (solo distribuidora) */
  order_number?: string | null;
  /** Última modificación (estado, seguimiento); si falta vale created_at */
  updated_at?: string;
  /** Seguimiento del envío informado por Bynet */
  tracking?: OrderTracking | null;
}

/**
 * Rentabilidades del cliente: % de ganancia que aplica sobre su costo
 * para calcular su precio de venta. La clave es el nombre de la marca;
 * "__general" es el valor por defecto para lo que no tenga marca propia.
 */
export type Markups = Record<string, number>;

export const GENERAL_MARKUP_KEY = "__general";

/**
 * Tipo de cuenta:
 * - "publico": compra para consumo, ve todo el catálogo como cualquiera
 * - "distribuidora": revende, además ve la sección de productos que
 *   Tresbe distribuye
 */
export type CustomerType = "publico" | "distribuidora";

/**
 * Cuenta de cliente. La crea el admin (cuentas B2B con descuento) o la
 * abre la propia persona desde /cliente/registro (público, sin descuento).
 */
export interface Customer {
  id: string;
  name: string;
  discount_pct: number;
  /** Público (ve todo) o distribuidora (además ve la sección de reventa) */
  customer_type?: CustomerType;
  /** Notas de la cuenta que ve el cliente (condiciones, días de retiro, etc.) */
  notes: string | null;
  /** Rentabilidades por marca que configura el propio cliente */
  markups?: Markups;
  email?: string | null;
  phone?: string | null;
  /** CUIT de la cuenta B2B (lo usa Bynet para emparejar el cliente) */
  cuit?: string | null;
  /** Código postal de entrega: precarga y cotiza el envío en el checkout */
  postal_code?: string | null;
  /** La abrió la persona desde la web (no la cargó el admin) */
  self_registered?: boolean;
}

export interface AdminCustomer extends Customer {
  username: string;
  active: boolean;
  customer_type: CustomerType;
}

/** Opciones elegidas al pedir: medida, color, tipo y presentación de empaque */
export interface CartOptions {
  size?: string;
  color?: string;
  variant?: string;
  packaging?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  options?: CartOptions;
}
