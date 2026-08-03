import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ADDRESS, PHONE, MAPS_URL, waLink } from "@/lib/site-config";

export function Location() {
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
                <a href={`tel:${PHONE}`} className="hover:text-primary">
                  +91 94809 75441
                </a>
              </Info>
              <Info icon={MessageCircle} title="WhatsApp">
                <a
                  href={waLink("Hi, I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  +91 94809 75441
                </a>
              </Info>
              <Info icon={Clock} title="Business Hours">
                9:00 AM – 10:00 PM (All Days)
              </Info>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-block pt-2">
                <Button className="glass-cta rounded-full bg-transparent text-[oklch(0.2_0.04_55)] px-7 font-semibold hover:bg-transparent">
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

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-[var(--gradient-warm)] text-primary-foreground shadow-[var(--shadow-soft)]">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </div>
        <div className="mt-1.5 text-[16px] leading-relaxed text-foreground/90">{children}</div>
      </div>
    </div>
  );
}
