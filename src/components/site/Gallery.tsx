import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { images } from "@/lib/site-config";

const GALLERY = [
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

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Gallery" title="A glimpse inside our mill" />
        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <button
                onClick={() => setActive(i)}
                aria-label={`View larger image: ${img.alt}`}
                className="group relative block aspect-square w-full overflow-hidden rounded-[18px] border border-border/50 shadow-[var(--shadow-premium)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                    <ZoomIn className="h-3.5 w-3.5" /> View
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
            <DialogTitle className="sr-only">
              {active !== null ? GALLERY[active].alt : "Gallery image"}
            </DialogTitle>
            {active !== null && (
              <div className="relative">
                <img
                  src={GALLERY[active].src}
                  alt={GALLERY[active].alt}
                  className="max-h-[80vh] w-full rounded-[18px] object-contain"
                />
                <p className="mt-3 text-center text-sm text-white/90">{GALLERY[active].alt}</p>
                <button
                  aria-label="Previous image"
                  onClick={() =>
                    setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length))
                  }
                  className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next image"
                  onClick={() => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length))}
                  className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
