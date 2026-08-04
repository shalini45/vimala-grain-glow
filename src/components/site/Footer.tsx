import { PHONE, ADDRESS, MAPS_URL, waLink } from "@/lib/site-config";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.24_0.04_55)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12 shrink-0 rounded-full bg-white/90 shadow-[var(--shadow-soft)]" />
            <span className="font-[Playfair_Display] text-xl font-bold">Vimala Flour Mill</span>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">
            Fresh, hygienic wet & dry grinding in Bangalore. Serving our neighbourhood for over a
            decade.
          </p>
        </div>
        <FooterCol
          title="Quick Links"
          items={[
            { l: "About", h: "#about" },
            { l: "Services", h: "#services" },
            { l: "Gallery", h: "#gallery" },
            { l: "Visit Us", h: "#location" },
            { l: "Contact", h: "#contact" },
          ]}
        />
        <FooterCol
          title="Services"
          items={[
            { l: "Wet Grinding", h: "#services" },
            { l: "Dry Grinding", h: "#services" },
            { l: "Idli & Dosa Batter", h: "#services" },
            { l: "Health Mix", h: "#services" },
            { l: "Bulk Orders", h: "#contact" },
          ]}
        />
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>{ADDRESS}</li>
            <li>
              <a href={`tel:${PHONE}`} className="hover:text-white">
                +91 94809 75441
              </a>
            </li>
            <li>
              <a
                href={waLink("Hi Vimala Flour Mill!")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-white">
                Google Maps
              </a>
            </li>
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
          <li key={i.l}>
            <a href={i.h} className="hover:text-white">
              {i.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
