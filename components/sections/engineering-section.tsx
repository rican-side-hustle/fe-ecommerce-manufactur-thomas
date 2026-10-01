import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { EngineeringFeature } from "@/types/content";

interface EngineeringSectionProps {
  features: EngineeringFeature[];
  image: string;
}

export function EngineeringSection({
  features,
  image,
}: EngineeringSectionProps) {
  return (
    <section className="border-b border-ink-800 bg-ink-900 py-20 text-steel-100 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-xs font-medium tracking-normal text-signal-300">
            Engineering
          </p>
          <h2 className="mt-5 max-w-5xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Engineered for controlled destruction.
          </h2>
        </Reveal>
        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-ink-700 bg-ink-950 lg:grid-cols-[.9fr_1.1fr]">
          <div className="divide-y divide-ink-700">
            {features.map((feature, index) => (
              <Reveal
                key={feature.number}
                delay={index * 0.08}
                className="grid min-h-48 grid-cols-[3rem_1fr] gap-4 p-6 sm:p-8"
              >
                <span className="text-xs font-medium tracking-normal text-signal-300">
                  {feature.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-steel-100/70">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="relative min-h-[32rem] overflow-hidden bg-surface-100">
            <Image
              src={image}
              alt="Close technical rendering of the SHREDX modular cutting system"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
