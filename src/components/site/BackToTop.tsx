import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/90 text-foreground shadow-[var(--shadow-premium)] backdrop-blur transition-transform hover:-translate-y-0.5 hover:scale-105"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
