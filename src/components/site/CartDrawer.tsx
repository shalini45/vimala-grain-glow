import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";
import { Checkout } from "./Checkout";
import { cn } from "@/lib/utils";

export function CartButton({ scrolled }: { scrolled?: boolean }) {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
        className={cn(
          "relative grid h-10 w-10 place-items-center rounded-full transition-colors",
          scrolled ? "text-foreground hover:bg-primary/10" : "text-white hover:bg-white/15",
        )}
      >
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground shadow-[var(--shadow-soft)]">
            {itemCount}
          </span>
        )}
      </button>
      <CartDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}

function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { lines, increase, decrease, remove, subtotal, deliveryCharge, total } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const items = lines
    .map((line) => ({ line, product: products.find((p) => p.id === line.productId) }))
    .filter(
      (x): x is { line: typeof x.line; product: NonNullable<typeof x.product> } => !!x.product,
    );

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-[Playfair_Display] text-2xl">Your Cart</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
              <ShoppingCart className="h-10 w-10 opacity-40" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-1 space-y-4 overflow-y-auto pr-1">
              {items.map(({ line, product }) => (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-[14px] border border-border/60 p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[10px]">
                    <ProductVisual product={product} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{product.name}</p>
                      <button
                        aria-label={`Remove ${product.name}`}
                        onClick={() => remove(product.id)}
                        className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ₹{product.price} / {product.unit}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border/70">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => decrease(product.id)}
                          className="grid h-7 w-7 place-items-center rounded-full text-foreground/70 hover:bg-primary/10 hover:text-primary"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => increase(product.id)}
                          className="grid h-7 w-7 place-items-center rounded-full text-foreground/70 hover:bg-primary/10 hover:text-primary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        ₹{product.price * line.qty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-4 space-y-2 border-t border-border/60 pt-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Delivery</span>
                <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-foreground">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <Button
                onClick={() => {
                  onOpenChange(false);
                  setCheckoutOpen(true);
                }}
                className="mt-3 h-11 w-full rounded-full bg-[image:var(--gradient-warm)] text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
      <Checkout open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
}
