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
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="h-full" delay={i * 90}>
              <div className="card-premium relative h-full p-8">
                <div className="font-[Playfair_Display] text-5xl font-bold text-gradient-warm">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-primary/40 lg:block"
                    strokeWidth={1.75}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
