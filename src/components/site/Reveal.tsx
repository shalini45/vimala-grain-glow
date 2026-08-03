import type { ReactNode } from "react";
import { useOnEnterView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useOnEnterView<HTMLDivElement>(() => {
    ref.current?.classList.add("is-visible");
  });

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="section-divider" />
    </div>
  );
}
