import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    t: "Bring Your Ingredients",
    d: "Drop off your grains, pulses or spices at our mill — or share via home pickup.",
  },
  {
    n: "02",
    t: "Cleaning & Preparation",
    d: "We clean and prepare your ingredients for hygienic, accurate grinding.",
  },
  {
    n: "03",
    t: "Precision Grinding",
    d: "Ground with care on quality machines to your exact texture preference.",
  },
  {
    n: "04",
    t: "Pickup or Home Delivery",
    d: "Pick up fresh from our shop or get it delivered to your doorstep.",
  },
];

export function Process() {
  return (
    <section className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="How It Works" title="Simple, fresh, hassle-free" />
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="h-full" delay={i * 90}>
                <div className="card-premium relative h-full p-8 pt-9">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gradient-warm)] font-[Playfair_Display] text-lg font-bold text-primary-foreground shadow-[var(--shadow-soft)] ring-4 ring-[color:var(--cream)]">
                      {i + 1}
                    </span>
                    <div className="h-px flex-1 bg-border/70 lg:hidden" />
                  </div>
                  <div className="mt-5 font-[Playfair_Display] text-4xl font-bold text-gradient-warm">
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight
                      className="absolute -right-4 top-9 hidden text-primary/50 lg:block"
                      strokeWidth={1.75}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
