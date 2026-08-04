import { useEffect, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { PHONE } from "@/lib/site-config";
import { LogoMark } from "./Logo";
import { CartButton } from "./CartDrawer";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#why", id: "why", label: "Why Us" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
  { href: "#products", id: "products", label: "Shop" },
  { href: "#location", id: "location", label: "Visit" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/70 shadow-[var(--shadow-premium)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <LogoMark className="h-12 w-12 shrink-0 rounded-full bg-white/90 shadow-[var(--shadow-soft)] ring-1 ring-white/70 transition-transform duration-500 hover:scale-105 sm:h-14 sm:w-14" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={cn(
                "truncate font-[Playfair_Display] text-xl font-extrabold tracking-tight transition-colors duration-500 sm:text-[1.7rem]",
                scrolled ? "text-primary" : "text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]",
              )}
            >
              Vimala Flour Mill
            </span>
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]",
                scrolled
                  ? "text-muted-foreground"
                  : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]",
              )}
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
              aria-current={active === l.id ? "page" : undefined}
              className={cn(
                "relative text-[15px] font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                active === l.id ? "after:scale-x-100" : "after:scale-x-0",
                scrolled
                  ? active === l.id
                    ? "text-primary"
                    : "text-foreground/75 hover:text-primary"
                  : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
          <CartButton scrolled={scrolled} />
          <a href={`tel:${PHONE}`}>
            <Button className="glass-cta rounded-full bg-transparent text-[oklch(0.2_0.04_55)] px-6 font-semibold hover:bg-transparent">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <CartButton scrolled={scrolled} />
          <Sheet open={open} onOpenChange={setOpen}>
            <button
              className={cn(
                "rounded-full p-2 transition-colors",
                scrolled ? "text-foreground" : "text-white",
              )}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
            <SheetContent side="right" className="flex flex-col">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="mt-10 flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.id ? "page" : undefined}
                    className={cn(
                      "border-b border-border/50 py-4 text-[15px] font-medium transition-colors hover:text-primary",
                      active === l.id ? "text-primary" : "text-foreground/85",
                    )}
                  >
                    {l.label}
                  </a>
                ))}
                <a href={`tel:${PHONE}`} className="mt-5" onClick={() => setOpen(false)}>
                  <Button className="glass-cta w-full rounded-full bg-transparent text-[oklch(0.2_0.04_55)] font-semibold hover:bg-transparent">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
