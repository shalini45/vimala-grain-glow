import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const REVIEWS = [
  {
    n: "Lakshmi R.",
    l: "Kalyan Nagar",
    r: "I've been getting my ragi and wheat ground at Vimala for 5 years. Always fresh, always on time. Their home delivery is a lifesaver!",
  },
  {
    n: "Suresh M.",
    l: "HRBR Layout",
    r: "Best idli batter grinding in the area. Smooth, perfectly fermented, and they take care of cleanliness. Highly recommended.",
  },
  {
    n: "Priya N.",
    l: "Banaswadi",
    r: "Their custom health mix is amazing — I gave them my own recipe and they prepared it exactly the way I wanted. Lovely shop, friendly owner.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="What our customers say" />
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} className="h-full" delay={i * 110}>
              <figure className="card-premium h-full p-8">
                <div className="flex text-[oklch(0.78_0.14_75)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-[18px] w-[18px] fill-current" strokeWidth={1.5} />
                  ))}
                </div>
                <blockquote className="mt-5 text-[16px] leading-[1.8] text-foreground/80">
                  "{r.r}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-warm)] font-bold text-primary-foreground">
                    {r.n[0]}
                  </span>
                  <span className="min-w-0">
                    <div className="text-[15px] font-semibold">{r.n}</div>
                    <div className="text-xs text-muted-foreground">{r.l}</div>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
