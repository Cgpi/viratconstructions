import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(circle at 20% 30%, oklch(0.78 0.14 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.12 260 / 0.5), transparent 50%)"
      }} />
      <div className="container-px relative mx-auto max-w-7xl py-24 md:py-32">
        {eyebrow && <span className="eyebrow text-gold">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
