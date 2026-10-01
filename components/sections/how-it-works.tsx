import {
  ArrowRight,
  Box,
  PackageOpen,
  Recycle,
  Settings2,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { HowItWorksStep } from "@/types/content";

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

const icons: Record<HowItWorksStep["icon"], LucideIcon> = {
  feed: Box,
  cut: Settings2,
  output: PackageOpen,
  reuse: Recycle,
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28"
    >
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              How it works
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              Load. Tear. Collect.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-steel-300 lg:justify-self-end">
            A straightforward material path keeps operation understandable,
            serviceable, and easy to integrate into a real production workflow.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.slice(0, 3).map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                className="relative min-h-64 rounded-2xl border border-surface-200 bg-surface-100 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-normal text-signal-600">
                    {step.number}
                  </span>
                  <Icon
                    className="size-5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-3xl font-medium normal-case">
                    {step.title.replace(" material", "")}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-steel-300">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <ArrowRight
                    className="absolute -right-3 top-6 z-10 hidden size-6 bg-surface-50 p-1 md:block"
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
