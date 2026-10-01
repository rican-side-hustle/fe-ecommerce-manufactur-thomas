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
    <section className="industrial-grid min-h-[70svh] border-b border-surface-200 py-20 sm:py-28">
      <Container>
        <p className="text-xs font-medium tracking-normal text-signal-600">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-5xl lg:text-6xl">
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
