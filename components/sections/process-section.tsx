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
      className="border-b border-surface-200 bg-surface-100 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              From scrap to sorted flake
            </p>
            <h2
              id="process-heading"
              className="mt-4 max-w-xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-4xl"
            >
              A material loop in three moves.
            </h2>
          </div>
          <div className="grid border-l border-t border-surface-200 sm:grid-cols-3 lg:self-end">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative min-h-72 border-b border-r border-surface-200 p-6"
              >
                <span className="text-xs font-medium tracking-normal text-signal-600">
                  {step.number}
                </span>
                <div className="mt-24">
                  <h3 className="font-display text-2xl font-medium text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel-300">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-6 z-10 hidden size-6 bg-surface-100 p-1 text-steel-500 sm:block"
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
