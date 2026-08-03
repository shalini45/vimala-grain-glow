import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-[2.1rem] font-bold text-foreground sm:text-[2.75rem]">{title}</h2>
        {subtitle && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
        <div className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-[var(--gradient-warm)]" />
      </div>
    </Reveal>
  );
}
