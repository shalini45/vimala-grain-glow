import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { BackToTop } from "./BackToTop";
import { CartProvider } from "@/hooks/use-cart";

/** Shared chrome + typography for standalone legal/policy pages (Privacy, Terms, Refund Policy). */
export function PolicyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto max-w-3xl px-5 pb-28 pt-36 sm:px-8 sm:pt-40">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <h1 className="mt-6 font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/85">
            {children}
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </CartProvider>
  );
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
