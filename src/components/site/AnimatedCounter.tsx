import { useState, type ElementType } from "react";
import { useOnEnterView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Reveal } from "./Reveal";

const COUNTER_OBSERVER_OPTIONS = { threshold: 0.3 };

export function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  const ref = useOnEnterView<HTMLSpanElement>(() => {
    if (reducedMotion) {
      setCount(target);
      return;
    }
    const duration = 1600;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, COUNTER_OBSERVER_OPTIONS);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay = 0,
}: {
  icon: ElementType;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-premium group h-full p-7 text-center sm:text-left">
        <div className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 p-4 text-primary ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--shadow-soft)] sm:mx-0">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </div>
        <div className="mt-5 font-[Playfair_Display] text-4xl font-bold text-foreground">
          <AnimatedCounter target={value} suffix={suffix} />
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </div>
      </div>
    </Reveal>
  );
}
