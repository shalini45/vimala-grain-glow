import { Calendar, Star, Wheat } from "lucide-react";
import { Reveal } from "./Reveal";
import { StatCard } from "./AnimatedCounter";
import { images, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--cream)] via-background to-[var(--wheat)]/25" />
      <div className="mx-auto grid max-w-7xl gap-20 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-24">
        <Reveal className="relative">
          <div className="relative">
            <img
              src={images.about}
              alt="Vimala Flour Mill shop front in N.S. Layout, Bangalore"
              loading="lazy"
              width={1535}
              height={1024}
              className="w-full rounded-[18px] object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-primary/10" />
            <div className="absolute -bottom-8 -right-6 hidden rounded-[18px] bg-[image:var(--gradient-warm)] px-8 py-6 text-primary-foreground shadow-[var(--shadow-warm)] sm:block">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-[11px] uppercase tracking-[0.2em]">Years Serving Bangalore</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:pl-4">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              About Us
            </span>
            <h2 className="mt-4 max-w-md text-[2.25rem] font-bold leading-[1.18] text-foreground sm:text-[3rem]">
              A trusted neighbourhood flour mill
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-[17px] leading-[1.9] text-muted-foreground">
              Vimala Flour Mill is a trusted neighbourhood flour mill serving families and
              businesses across Bangalore. We specialise in both{" "}
              <strong className="text-foreground">wet and dry grinding</strong> services using
              careful processes and quality equipment.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-[17px] leading-[1.9] text-muted-foreground">
              From wheat and ragi to idli batter and freshly ground masalas, we carefully process
              every customer's ingredients to ensure freshness, consistency, and satisfaction —
              backed by free home delivery in the locality.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              <StatCard icon={Calendar} value={10} suffix="+" label="Years" />
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
                <div className="card-premium group h-full p-7 text-center transition-colors hover:border-primary/30 sm:text-left">
                  <div className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 p-4 text-primary ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--shadow-soft)] sm:mx-0">
                    <Star className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <div className="mt-5 font-[Playfair_Display] text-4xl font-bold text-foreground">
                    {GOOGLE_RATING.toFixed(1)}
                  </div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Google Rating &middot; {GOOGLE_REVIEW_COUNT} Reviews
                  </div>
                </div>
              </a>
              <StatCard icon={Wheat} value={20} suffix="+" label="Items Ground" delay={240} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
