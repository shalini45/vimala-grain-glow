import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const FAQS = [
  {
    q: "What items can be ground at Vimala Flour Mill?",
    a: "We grind wheat, ragi, rice, chola, multi-grain blends, millets, chilli, coriander, sambar masala, and prepare idli/dosa batter, chutney, and ginger-garlic paste. We also do custom flour blends and health mixes.",
  },
  {
    q: "Do you provide home delivery?",
    a: "Yes, we offer home delivery in and around our locality. Please call or WhatsApp us with your order and address.",
  },
  {
    q: "Can you prepare custom health mixes?",
    a: "Absolutely. Share your recipe or preferred ingredients and we will prepare it fresh for you.",
  },
  {
    q: "Do you accept bulk orders?",
    a: "Yes, we handle bulk grinding for households, restaurants, caterers and small businesses. Contact us with your requirement for pricing.",
  },
  {
    q: "How long does grinding take?",
    a: "Most orders are completed the same day. Bulk or special orders may take a little longer — we will confirm the time when you place the order.",
  },
  { q: "What are your business hours?", a: "We are open all days from 9:00 AM to 10:00 PM." },
  {
    q: "Do you offer both wet and dry grinding?",
    a: "Yes — wet grinding for batters/pastes and dry grinding for flours and masalas, all under one roof.",
  },
];

export function Faq() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <Accordion type="single" collapsible className="mt-14">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
              <AccordionTrigger className="py-6 text-left text-[17px] font-semibold transition-colors hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[16px] leading-[1.8] text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
