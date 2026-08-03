import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import { WHATSAPP } from "@/lib/site-config";

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const upd =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setSubmitting(true);
    const msg = `*New Enquiry — Vimala Flour Mill*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service || "—"}%0A*Message:* ${form.message || "—"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to send your enquiry…");
    window.setTimeout(() => setSubmitting(false), 1000);
  }

  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Send us an enquiry"
          subtitle="Fill the form and we'll get back on WhatsApp — usually within minutes during business hours."
        />
        <form
          onSubmit={send}
          className="card-premium mt-16 grid gap-7 p-7 hover:translate-y-0 sm:p-12"
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <Field label="Name *">
              <Input
                value={form.name}
                onChange={upd("name")}
                placeholder="Your full name"
                maxLength={80}
                required
              />
            </Field>
            <Field label="Phone Number *">
              <Input
                value={form.phone}
                onChange={upd("phone")}
                placeholder="+91 ..."
                type="tel"
                inputMode="tel"
                maxLength={20}
                required
              />
            </Field>
          </div>
          <Field label="Service Required">
            <Input
              value={form.service}
              onChange={upd("service")}
              placeholder="e.g. Wheat flour grinding, Idli batter, Health mix…"
              maxLength={120}
            />
          </Field>
          <Field label="Message">
            <Textarea
              value={form.message}
              onChange={upd("message")}
              placeholder="Tell us what you need, quantity, delivery area…"
              rows={5}
              maxLength={1000}
            />
          </Field>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
            <p className="text-xs text-muted-foreground">
              By submitting, your enquiry will open in WhatsApp at +91 94809 75441.
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="glass-cta rounded-full bg-transparent text-[oklch(0.2_0.04_55)] px-8 font-semibold hover:bg-transparent disabled:opacity-60"
            >
              <Send className="mr-2 h-4 w-4" /> {submitting ? "Opening WhatsApp…" : "Send Enquiry"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
