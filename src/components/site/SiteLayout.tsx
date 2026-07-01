import type { ReactNode } from "react";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-[var(--forest-deep)] text-[var(--cream)]">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,var(--leaf)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,var(--gold)_0%,transparent_45%)]" />
      <div className="container-x relative">
        <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-[var(--cream)]/75 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}