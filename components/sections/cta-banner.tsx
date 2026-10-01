import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { CtaBannerContent } from "@/types/content";

interface CtaBannerProps {
  content: CtaBannerContent;
}

export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-900 bg-ink-900 py-20 text-steel-100 sm:py-28">
      <div
        className="absolute -right-40 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-signal-400/20"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="relative z-10 max-w-5xl">
          <p className="text-xs font-medium tracking-normal text-signal-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-steel-100/70 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={content.cta.href} className={buttonStyles("primary")}>
              {content.cta.label}{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className={cn(buttonStyles("secondary"))}>
              Talk to sales
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
