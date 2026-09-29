import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="border-b border-white/10 bg-ink-900 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
              From scrap to sorted flake
            </p>
            <h2
              id="process-heading"
              className="mt-4 max-w-xl text-balance font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-7xl"
            >
              A material loop in three moves.
            </h2>
          </div>
          <div className="grid border-l border-t border-white/10 sm:grid-cols-3 lg:self-end">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative min-h-72 border-b border-r border-white/10 p-6"
              >
                <span className="text-xs font-bold tracking-industrial text-signal-300">
                  {step.number}
                </span>
                <div className="mt-24">
                  <h3 className="font-display text-2xl font-black uppercase text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel-300">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-6 z-10 hidden size-6 bg-ink-900 p-1 text-steel-500 sm:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
