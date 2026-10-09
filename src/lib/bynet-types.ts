/**
 * Tipos del protocolo Bynet Connect (ver bynet-erp/docs/bynet-connect.md).
 * Es el formato que la tienda expone bajo /api/bynet; no depende de cómo
 * guarde los datos la tienda.
 */

export const BYNET_CAPABILITIES = [
  "orders.read",
  "orders.write",
  "order_notes.read",
  "catalog.write",
  "catalog.read",
  "customers.read",
] as const;

export type BynetCapability = (typeof BYNET_CAPABILITIES)[number];

export type BynetOrderStatus =
  | "pending"
  | "paid"
  | "preparing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export const BYNET_ORDER_STATUSES: readonly BynetOrderStatus[] = [
  "pending",
  "paid",
  "preparing",
  "shipped",
  "delivered",
  "cancelled",
  "refunded",
];

export type BynetPaymentStatus = "pending" | "paid" | "refunded";

export interface BynetCustomerRef {
  name: string;
  email: string | null;
  phone: string | null;
  cuit: string | null;
  /** Id de la cuenta en la tienda (null si compró sin cuenta) */
  externalId: string | null;
}

export interface BynetOrderItem {
  /** Código del producto (= slug en la tienda) */
  sku: string;
  name: string;
  qty: number;
  /** Con IVA incluido, como lo ve el cliente */
  unitPrice: number;
  total: number;
}

export interface BynetTracking {
  carrier: string | null;
  code: string | null;
  url: string | null;
}

export interface BynetOrder {
  id: string;
  number: string;
  date: string;
  status: BynetOrderStatus;
  paymentStatus: BynetPaymentStatus;
  paymentMethod: string;
  customer: BynetCustomerRef;
  shipping: {
    method: "envio" | "retiro";
    address: string | null;
    city: string | null;
    zone: string | null;
    /** Extra respecto del protocolo: código postal de destino */
    postalCode: string | null;
    cost: number;
  };
  items: BynetOrderItem[];
  subtotal: number;
  discount: number;
  total: number;
  notes: string | null;
  /** Extra: seguimiento ya cargado (si Bynet lo informó antes) */
  tracking: BynetTracking | null;
  updatedAt: string;
}

export interface BynetOrderNoteItem {
  sku: string;
  name: string;
  qty: number;
  note: string | null;
}

export interface BynetOrderNote {
  id: string;
  number: string;
  date: string;
  customer: BynetCustomerRef;
  items: BynetOrderNoteItem[];
  delivery: "retira" | "envio" | "a_definir";
  address: string | null;
  requestedDate: string | null;
  notes: string | null;
  /** Extras: estado en la tienda y total estimado con IVA */
  status: BynetOrderStatus;
  total: number;
  updatedAt: string;
}

/** Producto tal como lo manda Bynet en PUT /catalog (todo opcional salvo sku) */
export interface BynetProductInput {
  sku: string;
  name?: string;
  brand?: string | null;
  category?: string | null;
  description?: string | null;
  unit?: string | null;
  /** Con IVA incluido */
  price?: number | null;
  stock?: number | null;
  visible?: boolean;
  featured?: boolean;
  /** data URLs base64 (fotos nuevas) o URLs públicas ya existentes */
  images?: string[];
}

/** Producto tal como lo devuelve GET /catalog (imágenes como URL pública) */
export interface BynetProduct {
  sku: string;
  name: string;
  brand: string | null;
  category: string;
  description: string;
  unit: string;
  price: number;
  stock: number;
  visible: boolean;
  featured: boolean;
  images: string[];
}

export interface BynetCustomer {
  externalId: string;
  name: string;
  email: string | null;
  phone: string | null;
  cuit: string | null;
  address: string | null;
  city: string | null;
  /** Extras: código postal, tipo de cuenta y descuento % de la tienda */
  postalCode: string | null;
  type: "publico" | "distribuidora";
  discountPct: number;
}
