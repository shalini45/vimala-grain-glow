import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Wheat, Sparkles, Truck, ShieldCheck,
  Award, Leaf, ChevronDown, Menu, X, Send, Star, ArrowRight, CheckCircle2,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroImg from "@/assets/hero-wheat.jpg";
import millInterior from "@/assets/mill-interior.jpg";
import ragiImg from "@/assets/ragi-flour.jpg";
import wetImg from "@/assets/wet-grinding.jpg";
import chilliImg from "@/assets/chilli-powder.jpg";
import healthMixImg from "@/assets/health-mix.jpg";
import sacksImg from "@/assets/sacks.jpg";
import machineImg from "@/assets/machine.jpg";
import vfmShopAsset from "@/assets/vfm-shop.png.asset.json";
import vfmInteriorAsset from "@/assets/vfm-interior.png.asset.json";
import vfmLogoAsset from "@/assets/vfm-logo.png.asset.json";
const vfmShop = vfmShopAsset.url;
const vfmInterior = vfmInteriorAsset.url;
const vfmLogo = vfmLogoAsset.url;

const PHONE = "+919480975441";
const WHATSAPP = "919480975441";
const ADDRESS = "No. 46, 2nd Cross, 7th Main, N.S. Layout, Subbanna Palya, Bangalore - 560043";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Vimala Flour Mill, " + ADDRESS,
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vimala Flour Mill — Fresh Flour Grinding in Bangalore | Wet & Dry" },
      {
        name: "description",
        content:
          "Vimala Flour Mill in N.S. Layout, Bangalore offers hygienic wet & dry grinding — wheat, ragi, rice, idli/dosa batter, masalas & health mix. 10+ years. Home delivery available.",
      },
      { property: "og:title", content: "Vimala Flour Mill — Bangalore" },
      {
        property: "og:description",
        content: "Trusted neighbourhood flour mill. Wet & dry grinding with home delivery in Bangalore.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vimala Flour Mill",
          image: "/og-image.jpg",
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 46, 2nd Cross, 7th Main, N.S. Layout, Subbanna Palya",
            addressLocality: "Bangalore",
            postalCode: "560043",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-22:00",
          priceRange: "₹",
          description:
            "Flour mill in Bangalore offering wet & dry grinding services with home delivery.",
        }),
      },
    ],
  }),
  component: Index,
});

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* ---------------- Scroll reveal ---------------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="section-divider" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Divider />
      <Services />
      <WhyUs />
      <Divider />
      <Process />
      <Gallery />
      <Divider />
      <Testimonials />
      <Faq />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#location", label: "Visit" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 shadow-[var(--shadow-premium)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={vfmLogo}
            alt="Vimala Flour Mill logo"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 rounded-full bg-white/90 object-contain p-0.5 shadow-[var(--shadow-soft)] ring-1 ring-white/70 transition-transform duration-500 hover:scale-105 sm:h-14 sm:w-14"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={`truncate font-[Playfair_Display] text-xl font-extrabold tracking-tight transition-colors duration-500 sm:text-[1.7rem] ${
                scrolled
                  ? "text-primary"
                  : "text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]"
              }`}
            >
              Vimala Flour Mill
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px] ${
                scrolled ? "text-muted-foreground" : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]"
              }`}
            >
              Bangalore · Since 2014
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[15px] font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
                scrolled
                  ? "text-foreground/75 hover:text-primary"
                  : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${PHONE}`}>
            <Button className="glass-cta rounded-full bg-transparent px-6 font-semibold hover:bg-transparent">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </nav>
        <button
          className={`rounded-full p-2 transition-colors lg:hidden ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 text-[15px] font-medium text-foreground/85 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="mt-5">
              <Button className="glass-cta w-full rounded-full bg-transparent font-semibold hover:bg-transparent">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-20">
      <img
        src={heroImg}
        alt="Fresh wheat grains and flour at Vimala Flour Mill Bangalore"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1600}
        height={1100}
      />
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="grain-overlay absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-16 pb-28 sm:px-8 lg:pt-28">
        <div className="max-w-3xl animate-fade-up text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted in Bangalore for 10+ years
          </span>
          <h1 className="mt-7 text-[2.6rem] font-bold leading-[1.08] text-white drop-shadow sm:text-6xl lg:text-7xl">
            Fresh & Hygienic <span className="text-gradient-warm">Flour Grinding</span> Services in Bangalore
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            For over 10 years, Vimala Flour Mill has been providing high-quality
            wet and dry grinding services with precision, hygiene, and customer satisfaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${PHONE}`}>
              <Button size="lg" className="glass-cta rounded-full bg-transparent px-7 text-base font-semibold hover:bg-transparent">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
            <a href={waLink("Hi Vimala Flour Mill, I'd like to enquire about your grinding services.")} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="glass-cta-light rounded-full border-0 px-7 text-base font-semibold text-white hover:text-white">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="glass-cta-light rounded-full border-0 px-7 text-base font-semibold text-white hover:text-white">
                <MapPin className="mr-2 h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 text-sm text-white/95 sm:grid-cols-4">
            {[
              "10+ Years Experience",
              "Home Delivery Available",
              "Wet & Dry Grinding",
              "Quality Assured",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-[oklch(0.85_0.15_85)]" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-float" aria-label="Scroll">
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}

function TrustStrip() {
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
          <div key={it.label} className="flex items-center justify-center gap-3 text-[15px] font-medium tracking-wide text-foreground/80">
            <it.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section helpers ---------------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</span>
        <h2 className="mt-4 text-[2.1rem] font-bold text-foreground sm:text-[2.75rem]">{title}</h2>
        {subtitle && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
        <div className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-[var(--gradient-warm)]" />
      </div>
    </Reveal>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <img
            src={vfmShop}
            alt="Vimala Flour Mill shop front in N.S. Layout, Bangalore"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-[18px] object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="absolute -bottom-7 -right-4 hidden rounded-[18px] bg-[var(--gradient-warm)] px-7 py-5 text-primary-foreground shadow-[var(--shadow-warm)] sm:block">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-[11px] uppercase tracking-[0.2em]">Years Serving Bangalore</div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeader eyebrow="About Us" title="A trusted neighbourhood flour mill" />
          <p className="mt-8 text-[17px] leading-[1.85] text-muted-foreground">
            Vimala Flour Mill is a trusted neighbourhood flour mill serving families and
            businesses across Bangalore. We specialise in both <strong className="text-foreground">wet and dry grinding</strong>
            {" "}services using careful processes and quality equipment.
          </p>
          <p className="mt-5 text-[17px] leading-[1.85] text-muted-foreground">
            From wheat and ragi to idli batter and freshly ground masalas, we carefully
            process every customer's ingredients to ensure freshness, consistency, and
            satisfaction — backed by free home delivery in the locality.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {[
              { n: "10+", l: "Years" },
              { n: "5K+", l: "Happy Customers" },
              { n: "20+", l: "Items Ground" },
            ].map((s) => (
              <div key={s.l} className="card-premium p-6 text-center">
                <div className="font-[Playfair_Display] text-3xl font-bold text-primary">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const wet = [
    "Idli Batter Grinding",
    "Dosa Batter Grinding",
    "Ginger Garlic Paste",
    "Chutney Grinding",
    "Bulk Wet Grinding",
    "Custom Wet Grinding",
  ];
  const dry = [
    "Wheat Flour", "Ragi Flour", "Rice Flour", "Chola Flour",
    "Chilli Powder", "Coriander Powder", "Sambar Powder",
    "Health Mix Preparation", "Multi Grain Flour", "Millet Flour",
    "Ragi Cleaning Services", "Custom Flour Blends", "Bulk Grinding",
  ];

  return (
    <section id="services" className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Wet & Dry Grinding — Done Right"
          subtitle="From everyday flours to special batters and masalas, we grind to your exact requirement."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Wet */}
          <Reveal className="h-full">
          <div className="card-premium h-full overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img src={wetImg} alt="Wet grinding services" loading="lazy" width={900} height={900} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-7 text-primary-foreground">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur">Wet Grinding</span>
                <h3 className="mt-3 text-[1.7rem] font-bold text-white">Smooth, fresh batters</h3>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 p-8 sm:grid-cols-2">
              {wet.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[15px]">
                  <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.75} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>

          {/* Dry */}
          <Reveal className="h-full" delay={120}>
          <div className="card-premium h-full overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img src={ragiImg} alt="Dry grinding services" loading="lazy" width={900} height={900} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-7">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">Dry Grinding</span>
                <h3 className="mt-3 text-[1.7rem] font-bold text-white">Flours, masalas & mixes</h3>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 p-8 sm:grid-cols-2">
              {dry.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[15px]">
                  <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.75} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <a href={waLink("Hi, I'd like to know more about your grinding services.")} target="_blank" rel="noreferrer">
            <Button size="lg" className="glass-cta rounded-full bg-transparent px-8 text-base font-semibold hover:bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" /> Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const points = [
    { icon: Award, t: "10+ Years of Experience", d: "A decade of consistent service to families and businesses." },
    { icon: ShieldCheck, t: "Hygienic Processing", d: "Clean equipment and careful handling at every stage." },
    { icon: Sparkles, t: "Quality Grinding Machines", d: "Modern machinery for the perfect texture every time." },
    { icon: Truck, t: "Home Delivery Available", d: "We deliver ground flour and batters to your doorstep." },
    { icon: Clock, t: "Quick Turnaround", d: "Most orders ready the same day, depending on quantity." },
    { icon: Leaf, t: "Affordable Pricing", d: "Honest, transparent rates with no hidden charges." },
    { icon: Star, t: "Customer Satisfaction", d: "Repeat customers are our biggest credential." },
    { icon: CheckCircle2, t: "Accurate to Your Spec", d: "Ground exactly as per your requirement — coarse or fine." },
  ];
  return (
    <section id="why" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="The difference is in the grind" />
        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.t} className="h-full" delay={(i % 4) * 90}>
            <div className="card-premium h-full p-8">
              <span className="grid h-14 w-14 place-items-center rounded-[18px] bg-[var(--gradient-warm)] text-primary-foreground shadow-[var(--shadow-soft)]">
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

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Bring Your Ingredients", d: "Drop off your grains, pulses or spices at our mill — or share via home pickup." },
    { n: "02", t: "Cleaning & Preparation", d: "We clean and prepare your ingredients for hygienic, accurate grinding." },
    { n: "03", t: "Precision Grinding", d: "Ground with care on quality machines to your exact texture preference." },
    { n: "04", t: "Pickup or Home Delivery", d: "Pick up fresh from our shop or get it delivered to your doorstep." },
  ];
  return (
    <section className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="How It Works" title="Simple, fresh, hassle-free" />
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="h-full" delay={i * 90}>
            <div className="card-premium relative h-full p-8">
              <div className="font-[Playfair_Display] text-5xl font-bold text-gradient-warm">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-primary/40 lg:block" strokeWidth={1.75} />
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const images = [
    { src: vfmShop, alt: "Vimala Flour Mill shop exterior" },
    { src: vfmInterior, alt: "Inside our flour mill with Vimal grinding machines" },
    { src: millInterior, alt: "Mill interior view" },
    { src: machineImg, alt: "Flour mill machines" },
    { src: wetImg, alt: "Wet grinding process" },
    { src: heroImg, alt: "Dry grinding process" },
    { src: sacksImg, alt: "Wheat flour and sacks" },
    { src: ragiImg, alt: "Ragi flour" },
    { src: healthMixImg, alt: "Health mix preparation" },
    { src: chilliImg, alt: "Chilli grinding" },
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Gallery" title="A glimpse inside our mill" />
        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
            <button
              onClick={() => setActive(i)}
              className="group relative w-full overflow-hidden rounded-[18px] shadow-[var(--shadow-premium)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={600}
                height={600}
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
            </button>
            </Reveal>
          ))}
        </div>
        <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
            {active !== null && (
              <img
                src={images[active].src}
                alt={images[active].alt}
                className="h-auto w-full rounded-[18px]"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
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
  return (
    <section className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="What our customers say" />
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
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
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gradient-warm)] font-bold text-primary-foreground">
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

/* ---------------- FAQ ---------------- */
function Faq() {
  const faqs = [
    { q: "What items can be ground at Vimala Flour Mill?", a: "We grind wheat, ragi, rice, chola, multi-grain blends, millets, chilli, coriander, sambar masala, and prepare idli/dosa batter, chutney, and ginger-garlic paste. We also do custom flour blends and health mixes." },
    { q: "Do you provide home delivery?", a: "Yes, we offer home delivery in and around our locality. Please call or WhatsApp us with your order and address." },
    { q: "Can you prepare custom health mixes?", a: "Absolutely. Share your recipe or preferred ingredients and we will prepare it fresh for you." },
    { q: "Do you accept bulk orders?", a: "Yes, we handle bulk grinding for households, restaurants, caterers and small businesses. Contact us with your requirement for pricing." },
    { q: "How long does grinding take?", a: "Most orders are completed the same day. Bulk or special orders may take a little longer — we will confirm the time when you place the order." },
    { q: "What are your business hours?", a: "We are open all days from 9:00 AM to 10:00 PM." },
    { q: "Do you offer both wet and dry grinding?", a: "Yes — wet grinding for batters/pastes and dry grinding for flours and masalas, all under one roof." },
  ];
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <Accordion type="single" collapsible className="mt-14">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
              <AccordionTrigger className="py-6 text-left text-[17px] font-semibold transition-colors hover:text-primary hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-[16px] leading-[1.8] text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */
function Location() {
  return (
    <section id="location" className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Visit Us" title="Come to our mill in N.S. Layout" />
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
          <div className="card-premium h-full space-y-7 p-10">
            <Info icon={MapPin} title="Address">
              {ADDRESS}
            </Info>
            <Info icon={Phone} title="Phone">
              <a href={`tel:${PHONE}`} className="hover:text-primary">+91 94809 75441</a>
            </Info>
            <Info icon={MessageCircle} title="WhatsApp">
              <a href={waLink("Hi, I'd like to enquire about your services.")} target="_blank" rel="noreferrer" className="hover:text-primary">
                +91 94809 75441
              </a>
            </Info>
            <Info icon={Clock} title="Business Hours">
              9:00 AM – 10:00 PM (All Days)
            </Info>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-block pt-2">
              <Button className="glass-cta rounded-full bg-transparent px-7 font-semibold hover:bg-transparent">
                <MapPin className="mr-2 h-4 w-4" /> Get Directions
              </Button>
            </a>
          </div>
          </Reveal>
          <Reveal delay={120}>
          <div className="overflow-hidden rounded-[18px] border border-border/60 shadow-[var(--shadow-premium)]">
            <iframe
              title="Vimala Flour Mill on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Vimala Flour Mill, " + ADDRESS)}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-warm)] text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm text-foreground/90">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const msg = `*New Enquiry — Vimala Flour Mill*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service || "—"}%0A*Message:* ${form.message || "—"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to send your enquiry…");
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Send us an enquiry"
          subtitle="Fill the form and we'll get back on WhatsApp — usually within minutes during business hours."
        />
        <form onSubmit={send} className="mt-12 grid gap-5 rounded-3xl border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name *">
              <Input value={form.name} onChange={upd("name")} placeholder="Your full name" maxLength={80} required />
            </Field>
            <Field label="Phone Number *">
              <Input value={form.phone} onChange={upd("phone")} placeholder="+91 ..." inputMode="tel" maxLength={20} required />
            </Field>
          </div>
          <Field label="Service Required">
            <Input value={form.service} onChange={upd("service")} placeholder="e.g. Wheat flour grinding, Idli batter, Health mix…" maxLength={120} />
          </Field>
          <Field label="Message">
            <Textarea value={form.message} onChange={upd("message")} placeholder="Tell us what you need, quantity, delivery area…" rows={5} maxLength={1000} />
          </Field>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-xs text-muted-foreground">
              By submitting, your enquiry will open in WhatsApp at +91 94809 75441.
            </p>
            <Button type="submit" size="lg" className="rounded-full bg-[var(--gradient-warm)] shadow-[var(--shadow-soft)]">
              <Send className="mr-2 h-4 w-4" /> Send Enquiry
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
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.24_0.04_55)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-warm)]">
              <Wheat className="h-5 w-5" />
            </span>
            <span className="font-[Playfair_Display] text-lg font-bold">Vimala Flour Mill</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Fresh, hygienic wet & dry grinding in Bangalore. Serving our neighbourhood
            for over a decade.
          </p>
        </div>
        <FooterCol title="Quick Links" items={[
          { l: "About", h: "#about" }, { l: "Services", h: "#services" },
          { l: "Gallery", h: "#gallery" }, { l: "Visit Us", h: "#location" },
          { l: "Contact", h: "#contact" },
        ]} />
        <FooterCol title="Services" items={[
          { l: "Wet Grinding", h: "#services" },
          { l: "Dry Grinding", h: "#services" },
          { l: "Idli & Dosa Batter", h: "#services" },
          { l: "Health Mix", h: "#services" },
          { l: "Bulk Orders", h: "#contact" },
        ]} />
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>{ADDRESS}</li>
            <li><a href={`tel:${PHONE}`} className="hover:text-white">+91 94809 75441</a></li>
            <li><a href={waLink("Hi Vimala Flour Mill!")} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp us</a></li>
            <li><a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-white">Google Maps</a></li>
            <li>9 AM – 10 PM, All Days</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6">
          © {new Date().getFullYear()} Vimala Flour Mill · All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i.l}><a href={i.h} className="hover:text-white">{i.l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Vimala Flour Mill, I'd like to enquire.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-[var(--shadow-warm)] transition-transform hover:scale-110"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full opacity-30" style={{ background: "var(--whatsapp)" }} />
    </a>
  );
}
