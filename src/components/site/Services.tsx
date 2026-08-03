import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { images, waLink } from "@/lib/site-config";

const WET_SERVICES = [
  "Idli Batter Grinding",
  "Dosa Batter Grinding",
  "Ginger Garlic Paste",
  "Chutney Grinding",
  "Bulk Wet Grinding",
  "Custom Wet Grinding",
];

const DRY_SERVICES = [
  "Wheat Flour",
  "Ragi Flour",
  "Rice Flour",
  "Chola Flour",
  "Chilli Powder",
  "Coriander Powder",
  "Sambar Powder",
  "Health Mix Preparation",
  "Multi Grain Flour",
  "Millet Flour",
  "Ragi Cleaning Services",
  "Custom Flour Blends",
  "Bulk Grinding",
];

export function Services() {
  return (
    <section id="services" className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Wet & Dry Grinding — Done Right"
          subtitle="From everyday flours to special batters and masalas, we grind to your exact requirement."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card-premium h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={images.wet}
                  alt="Wet grinding services"
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-7 text-primary-foreground">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                    Wet Grinding
                  </span>
                  <h3 className="mt-3 text-[1.7rem] font-bold text-white">Smooth, fresh batters</h3>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 p-8 sm:grid-cols-2">
                {WET_SERVICES.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[15px]">
                    <CheckCircle2
                      className="h-[18px] w-[18px] shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={120}>
            <div className="card-premium h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={images.ragi}
                  alt="Dry grinding services"
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-7">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Dry Grinding
                  </span>
                  <h3 className="mt-3 text-[1.7rem] font-bold text-white">
                    Flours, masalas & mixes
                  </h3>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 p-8 sm:grid-cols-2">
                {DRY_SERVICES.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[15px]">
                    <CheckCircle2
                      className="h-[18px] w-[18px] shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <a
            href={waLink("Hi, I'd like to know more about your grinding services.")}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              className="glass-cta rounded-full bg-transparent text-[oklch(0.2_0.04_55)] px-8 text-base font-semibold hover:bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
