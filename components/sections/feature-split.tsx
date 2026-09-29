import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { FeatureBlock } from "@/types/content";

interface FeatureSplitProps {
  feature: FeatureBlock;
  imagePosition?: "left" | "right";
}

export function FeatureSplit({
  feature,
  imagePosition = "left",
}: FeatureSplitProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-ink-900 py-5 sm:py-8">
      <Container>
        <div className="grid border border-white/10 bg-ink-950 lg:grid-cols-2">
          <div
            className={cn(
              "relative min-h-[24rem] overflow-hidden bg-[#e5e6e1] sm:min-h-[34rem]",
              imagePosition === "right" && "lg:order-2",
            )}
          >
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 border border-black/15 bg-white/90 px-3 py-2 text-[0.625rem] font-bold uppercase tracking-industrial text-ink-950">
              Engineered detail
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16 xl:p-20">
            <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
              {feature.eyebrow}
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl">
              {feature.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-steel-300">
              {feature.description}
            </p>
            <ul className="mt-8 space-y-4 border-y border-white/10 py-6">
              {feature.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-6 text-steel-100"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-signal-400 text-ink-950">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              href={feature.cta.href}
              className={cn(buttonStyles("secondary"), "mt-8 self-start")}
            >
              {feature.cta.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
