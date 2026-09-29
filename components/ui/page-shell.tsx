import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="industrial-grid min-h-[70svh] border-b border-white/10 py-20 sm:py-28">
      <Container>
        <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-steel-300 sm:text-lg">
          {description}
        </p>
        {children}
      </Container>
    </section>
  );
}
