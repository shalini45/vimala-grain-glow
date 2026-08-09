import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/site-config";

// Real review from the business's Google Maps listing — do not replace with invented quotes.
const FEATURED_REVIEW = {
  name: "Sajeesh Babu",
  when: "7 years ago",
  text: "This is a very good mill in the surrounding areas. They do all grains wet and dry, and coconut also. Mostly a crowdy place in weekends. Weekdays afternoons are suitable time to go there.",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-[oklch(0.78_0.14_75)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-[18px] w-[18px]"
          strokeWidth={1.5}
          style={{ fill: i < Math.round(rating) ? "currentColor" : "transparent" }}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[color:var(--cream)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="What our customers say" />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <Reveal className="h-full">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="card-premium flex h-full flex-col items-center justify-center gap-3 p-8 text-center transition-colors hover:border-primary/30"
            >
              <div className="font-[Playfair_Display] text-5xl font-bold text-foreground">
                {GOOGLE_RATING.toFixed(1)}
              </div>
              <Stars rating={GOOGLE_RATING} />
              <p className="text-[15px] text-muted-foreground">
                Based on {GOOGLE_REVIEW_COUNT} reviews on Google
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View all reviews on Google <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          </Reveal>
          <Reveal className="h-full" delay={110}>
            <figure className="card-premium h-full p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Google Review
              </span>
              <blockquote className="mt-5 text-[16px] leading-[1.8] text-foreground/80">
                "{FEATURED_REVIEW.text}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-warm)] font-bold text-primary-foreground">
                  {FEATURED_REVIEW.name[0]}
                </span>
                <span className="min-w-0">
                  <div className="text-[15px] font-semibold">{FEATURED_REVIEW.name}</div>
                  <div className="text-xs text-muted-foreground">{FEATURED_REVIEW.when}</div>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
