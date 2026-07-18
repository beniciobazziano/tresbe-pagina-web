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
  image_url: string | null;
  specs: ProductSpec[];
  active: boolean;
}

export type ShippingMethod = "envio" | "retiro" | "cotizacion";
export type PaymentMethod = "mercadopago" | "stripe" | "whatsapp";

export type OrderStatus =
  | "pendiente"
  | "pagado"
  | "a_cotizar"
  | "preparando"
  | "entregado"
  | "cancelado";

export interface OrderItem {
  product_id: string;
  name: string;
  unit_price: number;
  quantity: number;
}

export interface Order {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_method: ShippingMethod;
  shipping_address: string | null;
  payment_method: PaymentMethod;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  notes: string | null;
  /** Cuenta de cliente registrado que hizo el pedido (null = público) */
  customer_id: string | null;
  /** Descuento % de la cuenta aplicado al total */
  discount_pct: number;
}

/** Cuenta de cliente B2B: la crea el admin con usuario, contraseña y descuento */
export interface Customer {
  id: string;
  name: string;
  discount_pct: number;
  /** Notas de la cuenta que ve el cliente (condiciones, días de retiro, etc.) */
  notes: string | null;
}

export interface AdminCustomer extends Customer {
  username: string;
  active: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
