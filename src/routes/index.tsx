import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, TrustStrip } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { Products } from "@/components/site/Products";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Divider } from "@/components/site/Reveal";
import {
  BUSINESS_NAME,
  PHONE,
  GEO,
  MAPS_URL,
  SITE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  WET_SERVICES,
  DRY_SERVICES,
} from "@/lib/site-config";
import { FAQS } from "@/lib/faqs";

const abs = (path: string) => `${SITE_URL}${path}`;

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": abs("/#business"),
  name: BUSINESS_NAME,
  url: abs("/"),
  image: abs("/og-image.jpg"),
  logo: abs("/favicon.png"),
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 46, 2nd Cross, 7th Main, N.S. Layout, Subbanna Palya",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560043",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAPS_URL,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
  areaServed: { "@type": "City", name: "Bangalore" },
  priceRange: "₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    reviewCount: GOOGLE_REVIEW_COUNT,
  },
  sameAs: [GOOGLE_REVIEWS_URL],
  description:
    "Flour mill in Bangalore offering wet & dry grinding services — wheat and ragi flour, idli and dosa batter, masalas and health mix — with home delivery.",
  makesOffer: [...WET_SERVICES, ...DRY_SERVICES].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
        content:
          "Trusted neighbourhood flour mill. Wet & dry grinding with home delivery in Bangalore.",
      },
      { property: "og:url", content: abs("/") },
      { property: "og:image", content: abs("/og-image.jpg") },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Bangalore" },
      { name: "geo.position", content: `${GEO.lat};${GEO.lng}` },
    ],
    links: [{ rel: "canonical", href: abs("/") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <Products />
      <Testimonials />
      <Faq />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
