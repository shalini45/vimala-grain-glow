import { Leaf, Flame, Soup, Wheat, Sprout, Circle, Sun } from "lucide-react";
import type { Product, ProductVisualIcon } from "@/lib/products";
import { cn } from "@/lib/utils";

const ICONS: Record<ProductVisualIcon, typeof Leaf> = {
  leaf: Leaf,
  flame: Flame,
  soup: Soup,
  wheat: Wheat,
  sprout: Sprout,
  circle: Circle,
  sun: Sun,
};

export function ProductVisual({ product, className }: { product: Product; className?: string }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={600}
        height={600}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }
  const Icon = ICONS[product.visualIcon ?? "wheat"];
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[image:var(--gradient-warm)]",
        className,
      )}
    >
      <Icon className="h-14 w-14 text-primary-foreground/90" strokeWidth={1.25} />
    </div>
  );
}
