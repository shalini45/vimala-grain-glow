import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
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
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { BackToTop } from "@/components/site/BackToTop";
import { Divider } from "@/components/site/Reveal";
import { CartProvider } from "@/hooks/use-cart";
import { PHONE } from "@/lib/site-config";

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

function Index() {
  return (
    <CartProvider>
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
        <Products />
        <Testimonials />
        <Faq />
        <Location />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </CartProvider>
  );
}
