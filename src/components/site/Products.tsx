import { useState } from "react";
import { Minus, Plus, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ProductVisual } from "./ProductVisual";
import { useCart } from "@/hooks/use-cart";
import { products, type Product } from "@/lib/products";
import { toast } from "sonner";

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  function handleAdd() {
    add(product.id, qty);
    toast.success(`Added ${qty} × ${product.name} to cart`);
    setQty(1);
  }

  return (
    <div className="card-premium flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <ProductVisual
          product={product}
          className="transition-transform duration-700 hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur ${
            product.available ? "bg-white/85 text-primary" : "bg-black/60 text-white"
          }`}
        >
          {product.available ? "In Stock" : "Sold Out"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="font-[Playfair_Display] text-2xl font-bold text-primary">
            ₹{product.price}
          </span>
          <span className="text-sm text-muted-foreground">/ {product.unit}</span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border/70 bg-muted/40">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-semibold tabular-nums">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(20, q + 1))}
              className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <Button
            type="button"
            disabled={!product.available}
            onClick={handleAdd}
            className="h-9 flex-1 rounded-full bg-[image:var(--gradient-warm)] text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] disabled:opacity-50"
          >
            <ShoppingCart className="mr-1.5 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Shop Our Mill"
          title="Fresh Products From Our Mill"
          subtitle="Stone-ground flours, batters and masalas — freshly prepared and delivered to your door."
        />
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-primary" /> Prices shown are indicative — final
          weight billed at pickup/delivery.
        </div>
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} className="h-full" delay={(i % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
