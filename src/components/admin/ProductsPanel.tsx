"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Loader2,
  Package,
  Pencil,
  Plus,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { StockDot, STOCK_LABEL } from "@/components/StockDot";
import { BRANDS } from "@/lib/brands";
import { formatARS } from "@/lib/site";
import type { Category, Product, StockStatus } from "@/lib/types";

type Draft = Omit<Product, "id"> & { id?: string | null };

const emptyDraft = (categorySlug: string): Draft => ({
  id: null,
  slug: "",
  name: "",
  description: "",
  price: 0,
  category_slug: categorySlug,
  brand: null,
  unit: "unidad",
  stock: 0,
  stock_status: "en_sucursal",
  featured: false,
  bulky: false,
  image_url: null,
  specs: [],
  active: true,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ProductsPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/products", { cache: "no-store" });
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "No se pudo cargar el catálogo.");
    } else {
      setProducts(data.products);
      setCategories(data.categories);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function saveDraft() {
    if (!draft) return;
    if (!draft.name.trim() || draft.price <= 0 || !draft.category_slug) {
      setError("Completá al menos nombre, precio y categoría.");
      return;
    }
    setSaving(true);
    setError(null);
    const product = {
      ...draft,
      slug: draft.slug.trim() || slugify(draft.name),
      brand: draft.brand?.toString().trim() || null,
    };
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "No se pudo guardar.");
    } else {
      setDraft(null);
      await load();
    }
    setSaving(false);
  }

  async function removeProduct(product: Product) {
    if (!confirm(`¿Eliminar "${product.name}" del catálogo?`)) return;
    const res = await fetch(`/api/admin/products?id=${product.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) setError(data.error ?? "No se pudo eliminar.");
    else await load();
  }

  async function uploadImage(file: File) {
    if (!draft) return;
    setError(null);
    const dataBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve((reader.result as string).split(",")[1] ?? "");
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: draft.name || file.name,
        type: file.type,
        dataBase64,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "No se pudo subir la imagen.");
      return;
    }
    setDraft((d) => (d ? { ...d, image_url: data.url } : d));
  }

  const filtered = useMemo(() => {
    if (!filter.trim()) return products;
    const q = filter.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.brand ?? "").toLowerCase().includes(q)
    );
  }, [products, filter]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="size-6 animate-spin text-steel-500" />
      </div>
    );
  }

  const inputClass =
    "h-10 w-full rounded-lg border border-concrete-300 bg-white px-3 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar productos…"
          className="h-10 w-64 rounded-full border border-concrete-300 bg-white px-4 text-sm outline-none focus:border-steel-500"
        />
        <button
          type="button"
          onClick={() => setDraft(emptyDraft(categories[0]?.slug ?? ""))}
          className="flex h-10 items-center gap-2 rounded-full bg-steel-600 px-4 text-sm font-semibold text-white hover:bg-steel-700"
        >
          <Plus className="size-4" /> Nuevo producto
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>
      )}

      {/* Formulario alta/edición */}
      {draft && (
        <div className="mt-6 rounded-2xl border border-steel-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">
              {draft.id ? "Editar producto" : "Nuevo producto"}
            </h2>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setDraft(null)}
              className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-concrete-100"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium">Nombre *</span>
              <input
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Precio (ARS) *</span>
              <input
                type="number"
                min={0}
                value={draft.price || ""}
                onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
                className={inputClass}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Categoría *</span>
              <select
                value={draft.category_slug}
                onChange={(e) => setDraft({ ...draft, category_slug: e.target.value })}
                className={inputClass}
              >
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Marca</span>
              <select
                value={draft.brand ?? ""}
                onChange={(e) => setDraft({ ...draft, brand: e.target.value || null })}
                className={inputClass}
              >
                <option value="">Sin marca</option>
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Unidad de venta</span>
              <input
                value={draft.unit}
                onChange={(e) => setDraft({ ...draft, unit: e.target.value })}
                className={inputClass}
                placeholder="unidad, caja ×1000, rollo…"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Estado de stock</span>
              <select
                value={draft.stock_status}
                onChange={(e) =>
                  setDraft({ ...draft, stock_status: e.target.value as StockStatus })
                }
                className={inputClass}
              >
                <option value="en_sucursal">🟢 {STOCK_LABEL.en_sucursal}</option>
                <option value="en_argentina">🟡 {STOCK_LABEL.en_argentina}</option>
                <option value="sin_stock">🔴 {STOCK_LABEL.sin_stock}</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Stock (cantidad)</span>
              <input
                type="number"
                min={0}
                value={draft.stock}
                onChange={(e) => setDraft({ ...draft, stock: Number(e.target.value) })}
                className={inputClass}
              />
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-1">
              <span className="mb-1 block font-medium">Foto</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadImage(file);
                }}
                className="block w-full text-sm text-concrete-600 file:mr-3 file:h-10 file:rounded-full file:border-0 file:bg-steel-50 file:px-4 file:text-sm file:font-semibold file:text-steel-700 hover:file:bg-steel-100"
              />
              {draft.image_url && (
                <span className="mt-1 block truncate text-xs text-lime-700">
                  Imagen cargada ✓
                </span>
              )}
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium">Descripción</span>
              <textarea
                rows={3}
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                className="w-full rounded-lg border border-concrete-300 bg-white px-3 py-2 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
              />
            </label>
            <div className="flex flex-wrap gap-5 text-sm sm:col-span-2 lg:col-span-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={draft.featured}
                  onChange={(e) => setDraft({ ...draft, featured: e.target.checked })}
                  className="size-4 accent-steel-600"
                />
                Destacado en la home
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={draft.bulky}
                  onChange={(e) => setDraft({ ...draft, bulky: e.target.checked })}
                  className="size-4 accent-steel-600"
                />
                Voluminoso (flete a cotizar)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={draft.active}
                  onChange={(e) => setDraft({ ...draft, active: e.target.checked })}
                  className="size-4 accent-steel-600"
                />
                Visible en la tienda
              </label>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={saveDraft}
              disabled={saving}
              className="flex h-11 items-center gap-2 rounded-full bg-lime-500 px-6 text-sm font-semibold text-steel-950 hover:bg-lime-400 disabled:opacity-60"
            >
              {saving && <Loader2 className="size-4 animate-spin" />} Guardar
            </button>
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="flex h-11 items-center rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-700 hover:bg-concrete-100"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Listado */}
      {filtered.length === 0 && !draft ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-concrete-300 bg-white px-6 py-16 text-center">
          <Package className="size-10 text-concrete-400" />
          <h2 className="font-semibold">
            {products.length === 0
              ? "El catálogo está vacío"
              : "Sin resultados para el filtro"}
          </h2>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-concrete-100 overflow-hidden rounded-xl border border-concrete-200 bg-white">
          {filtered.map((product) => (
            <li key={product.id} className="flex items-center gap-4 p-4">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-concrete-100">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                ) : (
                  <Package className="absolute inset-0 m-auto size-5 text-concrete-400" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 truncate text-sm font-semibold">
                  <StockDot status={product.stock_status} size="sm" />
                  {product.featured && (
                    <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
                  )}
                  {product.name}
                  {!product.active && (
                    <span className="rounded-full bg-concrete-100 px-2 py-0.5 text-[10px] font-medium text-concrete-500">
                      oculto
                    </span>
                  )}
                </p>
                <p className="text-xs text-concrete-500">
                  {product.unit} · {STOCK_LABEL[product.stock_status]} · stock{" "}
                  {product.stock}
                  {product.bulky && " · voluminoso"}
                </p>
              </div>
              <p className="shrink-0 font-display font-bold text-steel-700">
                {formatARS(product.price)}
              </p>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label={`Editar ${product.name}`}
                  onClick={() => setDraft(product)}
                  className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-steel-50 hover:text-steel-700"
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Eliminar ${product.name}`}
                  onClick={() => removeProduct(product)}
                  className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
