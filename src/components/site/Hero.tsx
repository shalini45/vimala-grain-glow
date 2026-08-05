import {
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  Star,
  ChevronDown,
  CheckCircle2,
  Wheat,
  Award,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, PHONE, MAPS_URL, waLink } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-24"
    >
      <img
        src={images.hero}
        alt="Fresh wheat grains and flour at Vimala Flour Mill Bangalore"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1600}
        height={1100}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
      <div className="absolute inset-0 -z-10 bg-black/25" />
      <div className="grain-overlay absolute inset-0 -z-10" />

      {/* Floating wheat illustration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
        <Wheat className="animate-float absolute right-[6%] top-[18%] h-40 w-40 text-[oklch(0.85_0.15_85)] opacity-25 sm:h-64 sm:w-64" />
        <Wheat className="animate-float-delayed absolute right-[22%] bottom-[14%] h-24 w-24 -rotate-12 text-[oklch(0.85_0.15_85)] opacity-15 sm:h-36 sm:w-36" />
        <Wheat className="animate-float-slower absolute left-[4%] bottom-[22%] h-20 w-20 rotate-12 text-[oklch(0.85_0.15_85)] opacity-10 sm:h-28 sm:w-28" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pt-16 pb-32 sm:px-8 lg:pt-24">
        <div className="max-w-3xl text-primary-foreground">
          <span className="hero-in hero-in-1 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted in Bangalore for 10+ years
          </span>

          <div className="hero-in hero-in-2 mt-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[oklch(0.85_0.15_85)] text-[oklch(0.85_0.15_85)]"
                />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">Rated by 5000+ Happy Customers</span>
          </div>

          <h1 className="hero-in hero-in-3 mt-7 text-[3rem] font-bold leading-[1.06] text-white drop-shadow-lg sm:text-7xl lg:text-[5.25rem]">
            <span className="text-gradient-warm">Fresh</span> &amp; Hygienic Flour{" "}
            <span className="text-gradient-warm">Grinding</span> Services in Bangalore
          </h1>
          <p className="hero-in hero-in-4 mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            For over 10 years, Vimala Flour Mill has been providing high-quality wet and dry
            grinding services with precision, hygiene, and customer satisfaction.
          </p>

          <div className="hero-in hero-in-5 mt-10 flex flex-wrap gap-4">
            <a href={`tel:${PHONE}`}>
              <Button
                size="lg"
                className="glass-cta h-14 rounded-full bg-transparent px-9 text-lg font-semibold text-[oklch(0.2_0.04_55)] hover:bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
            <a
              href={waLink(
                "Hi Vimala Flour Mill, I'd like to enquire about your grinding services.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="glass-cta-light h-14 rounded-full border border-white/50 !bg-[oklch(0.24_0.04_55/0.45)] px-9 text-lg font-semibold text-white hover:text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="glass-cta-light h-14 rounded-full border border-white/50 !bg-[oklch(0.24_0.04_55/0.45)] px-9 text-lg font-semibold text-white hover:text-white"
              >
                <MapPin className="mr-2 h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>

          <ul className="hero-in hero-in-6 mt-12 grid grid-cols-2 gap-3 text-sm text-white/95 sm:grid-cols-4">
            {["10+ Years Experience", "Hygienic Processing", "Home Delivery", "Fresh Grinding"].map(
              (t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[oklch(0.85_0.15_85)]" />
                  <span className="font-medium">{t}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-float"
        aria-label="Scroll"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { icon: Award, label: "10+ Years" },
    { icon: ShieldCheck, label: "Hygienic Process" },
    { icon: Truck, label: "Home Delivery" },
    { icon: Leaf, label: "Natural & Fresh" },
  ];
  return (
    <div className="border-y border-border/60 bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 sm:px-8 md:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-center gap-3 text-[15px] font-medium tracking-wide text-foreground/80"
          >
            <it.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}
