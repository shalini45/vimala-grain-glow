import { cn } from "@/lib/utils";
import logoFM from "@/assets/logoFM.png";

/**
 * Reusable brand mark for Vimala Flour Mill.
 * Pure SVG (no external image) so it can be swapped/edited in one place —
 * scales cleanly for navbar, footer, favicon-style contexts, print/packaging.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("h-12 w-12", className)}
      role="img"
      aria-label="Vimala Flour Mill emblem"
    >
      <defs>
        <linearGradient id="vfm-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.13 85)" />
          <stop offset="55%" stopColor="oklch(0.72 0.15 68)" />
          <stop offset="100%" stopColor="oklch(0.55 0.13 55)" />
        </linearGradient>
        <linearGradient id="vfm-cream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.99 0.01 85)" />
          <stop offset="100%" stopColor="oklch(0.95 0.02 82)" />
        </linearGradient>
        <linearGradient id="vfm-stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.6 0.12 58)" />
          <stop offset="100%" stopColor="oklch(0.4 0.09 50)" />
        </linearGradient>
      </defs>

      {/* outer ring */}
      <circle
        cx="60"
        cy="60"
        r="57"
        fill="url(#vfm-cream)"
        stroke="url(#vfm-ring)"
        strokeWidth="3.5"
      />
      <circle
        cx="60"
        cy="60"
        r="49.5"
        fill="none"
        stroke="oklch(0.72 0.15 68 / 0.55)"
        strokeWidth="1"
      />

      {/* mill grindstone */}
      <g>
        <circle cx="60" cy="66" r="24" fill="url(#vfm-stone)" />
        <circle
          cx="60"
          cy="66"
          r="24"
          fill="none"
          stroke="oklch(0.3 0.05 55)"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <circle
          cx="60"
          cy="66"
          r="16.5"
          fill="none"
          stroke="oklch(0.92 0.03 82)"
          strokeWidth="1.4"
          opacity="0.75"
        />
        <circle
          cx="60"
          cy="66"
          r="8.5"
          fill="oklch(0.86 0.13 85)"
          stroke="oklch(0.5 0.12 60)"
          strokeWidth="1.2"
        />
        <circle cx="60" cy="66" r="3.2" fill="oklch(0.4 0.09 50)" />
        {/* radial grind grooves */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 60 + Math.cos(angle) * 9;
          const y1 = 66 + Math.sin(angle) * 9;
          const x2 = 60 + Math.cos(angle) * 23.5;
          const y2 = 66 + Math.sin(angle) * 23.5;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="oklch(0.92 0.03 82 / 0.5)"
              strokeWidth="1"
            />
          );
        })}
        {/* handle */}
        <rect x="57.5" y="38" width="5" height="12" rx="2" fill="oklch(0.4 0.09 50)" />
      </g>

      {/* wheat stalks flanking the stone, like a laurel */}
      <g fill="none" stroke="oklch(0.55 0.13 55)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M28 95 C 24 78, 30 60, 40 46" />
        <path d="M92 95 C 96 78, 90 60, 80 46" />
      </g>
      <g fill="oklch(0.78 0.14 65)" stroke="oklch(0.5 0.12 58)" strokeWidth="0.6">
        {[
          [30, 88],
          [26, 80],
          [32, 73],
          [27, 65],
          [34, 58],
          [30, 50],
          [38, 48],
        ].map(([x, y], i) => (
          <ellipse
            key={`l-${i}`}
            cx={x}
            cy={y}
            rx="4.4"
            ry="2.4"
            transform={`rotate(${-35 + i * 4} ${x} ${y})`}
          />
        ))}
        {[
          [90, 88],
          [94, 80],
          [88, 73],
          [93, 65],
          [86, 58],
          [90, 50],
          [82, 48],
        ].map(([x, y], i) => (
          <ellipse
            key={`r-${i}`}
            cx={x}
            cy={y}
            rx="4.4"
            ry="2.4"
            transform={`rotate(${35 - i * 4} ${x} ${y})`}
          />
        ))}
      </g>

      {/* base ribbon */}
      <path
        d="M20 96 Q60 108 100 96"
        fill="none"
        stroke="url(#vfm-ring)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("flex min-w-0 items-center gap-3", className)}>
      <img
        src={logoFM}
        alt="Vimala Flour Mill logo"
        className={cn("h-12 w-12 shrink-0 object-contain", markClassName)}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "truncate font-[Playfair_Display] text-xl font-extrabold tracking-tight sm:text-[1.7rem]",
            tone === "dark" ? "text-primary" : "text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]",
          )}
        >
          Vimala Flour Mill
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]",
            tone === "dark"
              ? "text-muted-foreground"
              : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]",
          )}
        >
          Bangalore · Since 2014
        </span>
      </span>
    </div>
  );
}
