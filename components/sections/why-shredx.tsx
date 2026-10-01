import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { WhyFeature } from "@/types/content";

interface WhyShredxProps {
  features: WhyFeature[];
}

export function WhyShredx({ features }: WhyShredxProps) {
  return (
    <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
      <Container>
        <Reveal>
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Why SHREDX
          </p>
          <h2 className="mt-5 max-w-5xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            Built for the material that shouldn&apos;t be there anymore.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.06}
              className="min-h-64 rounded-2xl border border-surface-200 bg-surface-100 p-6"
            >
              <span className="text-xs font-medium tracking-normal text-signal-600">
                0{index + 1}
              </span>
              <h3 className="mt-12 font-display text-2xl font-medium">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel-300">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
