import { Award, ShieldCheck, Sparkles, Truck, Clock, Leaf, Star, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const POINTS = [
  {
    icon: Award,
    t: "10+ Years of Experience",
    d: "A decade of consistent service to families and businesses.",
  },
  {
    icon: ShieldCheck,
    t: "Hygienic Processing",
    d: "Clean equipment and careful handling at every stage.",
  },
  {
    icon: Sparkles,
    t: "Quality Grinding Machines",
    d: "Modern machinery for the perfect texture every time.",
  },
  {
    icon: Truck,
    t: "Home Delivery Available",
    d: "We deliver ground flour and batters to your doorstep.",
  },
  {
    icon: Clock,
    t: "Quick Turnaround",
    d: "Most orders ready the same day, depending on quantity.",
  },
  { icon: Leaf, t: "Affordable Pricing", d: "Honest, transparent rates with no hidden charges." },
  { icon: Star, t: "Customer Satisfaction", d: "Repeat customers are our biggest credential." },
  {
    icon: CheckCircle2,
    t: "Accurate to Your Spec",
    d: "Ground exactly as per your requirement — coarse or fine.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="The difference is in the grind" />
        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.t} className="h-full" delay={(i % 4) * 90}>
              <div className="card-premium h-full p-8">
                <span className="grid h-14 w-14 place-items-center rounded-[18px] bg-[image:var(--gradient-warm)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
