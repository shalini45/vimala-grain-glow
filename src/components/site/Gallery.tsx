import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { images } from "@/lib/site-config";

export function Gallery() {
  const gallery = [
    { src: images.vfmShop, alt: "Vimala Flour Mill shop exterior" },
    { src: images.vfmInterior, alt: "Inside our flour mill with Vimal grinding machines" },
    { src: images.millInterior, alt: "Mill interior view" },
    { src: images.machine, alt: "Flour mill machines" },
    { src: images.wet, alt: "Wet grinding process" },
    { src: images.hero, alt: "Dry grinding process" },
    { src: images.sacks, alt: "Wheat flour and sacks" },
    { src: images.ragi, alt: "Ragi flour" },
    { src: images.healthMix, alt: "Health mix preparation" },
    { src: images.chilli, alt: "Chilli grinding" },
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Gallery" title="A glimpse inside our mill" />
        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <button
                onClick={() => setActive(i)}
                aria-label={`View larger image: ${img.alt}`}
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
                src={gallery[active].src}
                alt={gallery[active].alt}
                className="h-auto w-full rounded-[18px]"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
