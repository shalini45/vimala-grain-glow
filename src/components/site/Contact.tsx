import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import { BUSINESS_NAME, WEB3FORMS_ACCESS_KEY, WET_SERVICES, DRY_SERVICES } from "@/lib/site-config";
import { isValidIndianPhone, isValidEmail } from "@/lib/validation";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  // Honeypot: hidden from people, often filled by bots. A filled value means we drop the submit.
  const [botField, setBotField] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const upd =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (botField) return;
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    if (!isValidIndianPhone(form.phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (form.email.trim() && !isValidEmail(form.email)) {
      toast.error("Please enter a valid email address, or leave it blank.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${form.name} — ${BUSINESS_NAME} website`,
          from_name: `${BUSINESS_NAME} website`,
          // Lets the owner hit "Reply" and reach the customer, when they gave an email.
          replyto: form.email.trim() || undefined,
          Name: form.name.trim(),
          Phone: form.phone.trim(),
          Email: form.email.trim() || "—",
          Service: form.service || "—",
          Message: form.message.trim() || "—",
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");
      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      toast.success("Thank you — your enquiry has been sent. We'll get back to you shortly.");
    } catch {
      toast.error("Sorry, your enquiry couldn't be sent. Please try again, or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Send us an enquiry"
          subtitle="Fill the form and we'll get back to you — usually within a few hours during business hours."
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
          <Field label="Email (optional)">
            <Input
              value={form.email}
              onChange={upd("email")}
              placeholder="you@example.com"
              type="email"
              inputMode="email"
              maxLength={120}
            />
          </Field>
          <Field label="Service Required">
            <select
              value={form.service}
              onChange={upd("service")}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
            >
              <option value="">Select a service (optional)</option>
              <optgroup label="Wet Grinding">
                {WET_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Dry Grinding">
                {DRY_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </optgroup>
              <option value="Online order / delivery">Online order / delivery</option>
              <option value="Other">Other</option>
            </select>
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
          {/* Honeypot — kept out of the layout and out of the tab order, invisible to real users. */}
          <input
            type="text"
            name="botcheck"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
            <p className="text-xs text-muted-foreground">
              {sent
                ? "Enquiry sent — we've received your details by email."
                : "Your enquiry is sent to us by email. We'll reply by phone or email."}
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="glass-cta rounded-full bg-transparent text-[oklch(0.2_0.04_55)] px-8 font-semibold hover:bg-transparent disabled:opacity-60"
            >
              <Send className="mr-2 h-4 w-4" /> {submitting ? "Sending…" : "Send Enquiry"}
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
