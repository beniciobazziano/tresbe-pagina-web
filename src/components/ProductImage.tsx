import Image from "next/image";
import { CategoryIcon } from "./CategoryIcon";
import type { Product } from "@/lib/types";
import { seedCategories } from "@/lib/data/seed";

/**
 * Foto del producto, o placeholder con el icono de su categoría
 * sobre fondo de retícula cuando todavía no tiene imagen cargada.
 */
export function ProductImage({
  product,
  sizes,
  iconSize = "size-16",
}: {
  product: Product;
  sizes?: string;
  iconSize?: string;
}) {
  if (product.image_url) {
    return (
      <Image
        src={product.image_url}
        alt={product.name}
        fill
        sizes={sizes ?? "(min-width: 1024px) 25vw, 50vw"}
        className="object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-110"
      />
    );
  }

  const icon =
    seedCategories.find((c) => c.slug === product.category_slug)?.icon ??
    "Package";

  return (
    <div className="blueprint-grid-light absolute inset-0 flex items-center justify-center bg-concrete-100">
      <CategoryIcon name={icon} className={`${iconSize} text-steel-300`} />
    </div>
  );
}
