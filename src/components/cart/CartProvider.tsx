"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem, CartOptions, Product } from "@/lib/types";

interface CartContextValue {
  items: CartItem[];
  /** true recién cuando se hidrató desde localStorage (evita parpadeos SSR) */
  ready: boolean;
  addItem: (product: Product, quantity?: number, options?: CartOptions) => void;
  removeItem: (lineId: string) => void;
  setQuantity: (lineId: string, quantity: number) => void;
  clear: () => void;
  count: number;
  total: number;
  /** true si algún producto del carrito es voluminoso (flete a cotizar) */
  hasBulky: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "tresbe-cart-v1";

/** Identifica un renglón: mismo producto con distinta medida, color, tipo o empaque va aparte */
export function lineId(productId: string, options?: CartOptions) {
  return [productId, options?.size ?? "", options?.color ?? "", options?.variant ?? "", options?.packaging ?? ""].join("|");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // carrito corrupto: se descarta
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback(
    (product: Product, quantity = 1, options?: CartOptions) => {
      const id = lineId(product.id, options);
      setItems((prev) => {
        const existing = prev.find((i) => lineId(i.product.id, i.options) === id);
        if (existing) {
          return prev.map((i) =>
            lineId(i.product.id, i.options) === id
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }
        return [...prev, { product, quantity, options }];
      });
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => lineId(i.product.id, i.options) !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => lineId(i.product.id, i.options) !== id)
        : prev.map((i) =>
            lineId(i.product.id, i.options) === id ? { ...i, quantity } : i
          )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((acc, i) => acc + i.quantity, 0);
    const total = items.reduce(
      (acc, i) => acc + i.product.price * i.quantity,
      0
    );
    const hasBulky = items.some((i) => i.product.bulky);
    return { items, ready, addItem, removeItem, setQuantity, clear, count, total, hasBulky };
  }, [items, ready, addItem, removeItem, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
