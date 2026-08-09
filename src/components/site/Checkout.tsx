import { useState } from "react";
import { MessageCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/products";
import { WHATSAPP } from "@/lib/site-config";
import { isValidIndianPhone } from "@/lib/validation";
import { openWhatsApp } from "@/lib/whatsapp";

interface CheckoutForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  area: string;
  landmark: string;
  pin: string;
  instructions: string;
}

const EMPTY_FORM: CheckoutForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  area: "",
  landmark: "",
  pin: "",
  instructions: "",
};

export function Checkout({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { lines, subtotal, deliveryCharge, total, clear } = useCart();
  const [form, setForm] = useState<CheckoutForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);
  const [waBlocked, setWaBlocked] = useState(false);

  const items = lines
    .map((line) => ({ line, product: products.find((p) => p.id === line.productId) }))
    .filter(
      (x): x is { line: typeof x.line; product: NonNullable<typeof x.product> } => !!x.product,
    );

  const upd =
    (k: keyof CheckoutForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function buildMessage() {
    const lineItems = items
      .map(({ line, product }) => `• ${product.name} × ${line.qty} — ₹${product.price * line.qty}`)
      .join("\n");

    return [
      "*New Order — Vimala Flour Mill*",
      "",
      "*Items:*",
      lineItems,
      "",
      `Subtotal: ₹${subtotal}`,
      `Delivery: ${deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}`,
      `*Total: ₹${total}*`,
      "",
      "*Customer Details:*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Address: ${form.address}`,
      form.area ? `Area: ${form.area}` : null,
      form.landmark ? `Landmark: ${form.landmark}` : null,
      `PIN Code: ${form.pin}`,
      form.instructions ? `Delivery Instructions: ${form.instructions}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function placeOrder() {
    if (submitting) return;
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.pin.trim()) {
      toast.error("Please fill in your name, phone, address and PIN code.");
      return;
    }
    if (!isValidIndianPhone(form.phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    setSubmitting(true);

    const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage())}`;
    const opened = openWhatsApp(link);
    setWaLink(link);
    setWaBlocked(!opened);
    setSubmitting(false);

    if (opened) {
      toast.success("Opening WhatsApp — send the message to confirm your order.");
    } else {
      toast.error("WhatsApp didn't open automatically. Use the link below to send your order.");
    }
  }

  function confirmSentAndClose() {
    clear();
    setForm(EMPTY_FORM);
    setWaLink(null);
    setWaBlocked(false);
    onOpenChange(false);
  }

  const awaitingConfirmation = waLink !== null;

  function handleOpenChange(v: boolean) {
    if (!v) {
      // Closing without explicit confirmation must not silently discard the order.
      setWaLink(null);
      setWaBlocked(false);
    }
    onOpenChange(v);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-lg overflow-y-auto rounded-[18px] p-0">
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="font-[Playfair_Display] text-2xl">
              {awaitingConfirmation ? "Confirm on WhatsApp" : "Checkout"}
            </DialogTitle>
          </DialogHeader>

          {items.length > 0 && (
            <div className="mt-5 space-y-1.5 rounded-[14px] bg-muted/40 p-4 text-sm">
              {items.map(({ line, product }) => (
                <div key={product.id} className="flex justify-between text-foreground/80">
                  <span>
                    {product.name} × {line.qty}
                  </span>
                  <span>₹{product.price * line.qty}</span>
                </div>
              ))}
              <div className="mt-2 flex justify-between border-t border-border/60 pt-2 text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Delivery</span>
                <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-foreground">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          )}

          {awaitingConfirmation ? (
            <div className="mt-6 grid gap-4">
              {waBlocked ? (
                <p className="text-sm text-destructive">
                  WhatsApp didn't open automatically (this can happen in some mobile browsers). Tap
                  the button below to send your order — your cart is kept safe until you do.
                </p>
              ) : (
                <p className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  We opened WhatsApp with your order pre-filled. Send that message to confirm — your
                  cart stays saved here until you tell us it's sent.
                </p>
              )}

              <a href={waLink ?? "#"} target="_blank" rel="noreferrer">
                <Button
                  type="button"
                  className="h-12 w-full rounded-full text-base font-semibold text-white"
                  style={{ background: "var(--whatsapp)" }}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {waBlocked ? "Open WhatsApp to send order" : "Reopen WhatsApp"}
                </Button>
              </a>

              <Button
                type="button"
                variant="outline"
                className="h-11 w-full rounded-full font-semibold"
                onClick={confirmSentAndClose}
              >
                I've sent my order — done
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                placeOrder();
              }}
              className="mt-6 grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name *">
                  <Input
                    value={form.name}
                    onChange={upd("name")}
                    placeholder="Your full name"
                    required
                  />
                </Field>
                <Field label="Phone *">
                  <Input
                    value={form.phone}
                    onChange={upd("phone")}
                    placeholder="+91 ..."
                    type="tel"
                    inputMode="tel"
                    required
                  />
                </Field>
              </div>
              <Field label="Email">
                <Input
                  value={form.email}
                  onChange={upd("email")}
                  placeholder="you@example.com"
                  type="email"
                />
              </Field>
              <Field label="Address *">
                <Textarea
                  value={form.address}
                  onChange={upd("address")}
                  placeholder="House / flat no., street"
                  rows={2}
                  required
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Area">
                  <Input value={form.area} onChange={upd("area")} placeholder="e.g. N.S. Layout" />
                </Field>
                <Field label="Landmark">
                  <Input
                    value={form.landmark}
                    onChange={upd("landmark")}
                    placeholder="Nearby landmark"
                  />
                </Field>
              </div>
              <Field label="PIN Code *">
                <Input
                  value={form.pin}
                  onChange={upd("pin")}
                  placeholder="560043"
                  inputMode="numeric"
                  maxLength={6}
                  required
                />
              </Field>
              <Field label="Delivery Instructions">
                <Textarea
                  value={form.instructions}
                  onChange={upd("instructions")}
                  placeholder="Any special instructions for delivery…"
                  rows={2}
                />
              </Field>

              <p className="text-xs text-muted-foreground">
                No online payment yet — pay on delivery/pickup. Confirm your order on WhatsApp
                below.
              </p>

              <Button
                type="submit"
                disabled={submitting || items.length === 0}
                className="h-12 w-full rounded-full text-base font-semibold text-white disabled:opacity-60"
                style={{ background: "var(--whatsapp)" }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {submitting ? "Opening WhatsApp…" : "Place Order via WhatsApp"}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
