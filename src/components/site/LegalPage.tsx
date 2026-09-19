import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Shared layout for policy pages: solid header, readable prose column, footer. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header solid />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-40">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          Vimala Flour Mill
        </span>
        <h1 className="mt-4 text-[2.25rem] font-bold leading-tight sm:text-[2.75rem]">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-[image:var(--gradient-warm)] sm:mx-0" />
        <div className="legal-prose mt-10 space-y-5 text-[16px] leading-[1.85] text-foreground/85">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3 pt-4">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
