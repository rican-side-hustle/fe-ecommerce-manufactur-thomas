import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MoveUpRight } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { HeroContent } from "@/types/content";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const [before, after] = content.highlight
    ? content.title.split(content.highlight)
    : [content.title, ""];

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-stage relative isolate overflow-hidden"
    >
      <div className="absolute inset-0">
        {content.videoSrc && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={content.videoPoster}
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover motion-reduce:hidden"
          >
            <source src={content.videoSrc} type="video/mp4" />
          </video>
        )}
        <Image
          src={content.backgroundImage}
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className={
            content.videoSrc
              ? "object-cover motion-safe:hidden"
              : "object-cover"
          }
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-100/85 via-surface-100/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10 flex min-h-[86svh] flex-col justify-end pb-16 pt-32 sm:min-h-[88svh] sm:pb-20">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white/75 px-4 py-2 text-xs font-semibold text-signal-600 shadow-sm backdrop-blur-md">
              <span
                className="size-1.5 rounded-full bg-signal-500"
                aria-hidden="true"
              />
              {content.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="text-balance font-display text-[clamp(3.4rem,6.3vw,6.5rem)] font-semibold leading-[0.97] tracking-[-0.065em] text-fg"
            >
              {before}
              {content.highlight && (
                <span className="text-signal-500">{content.highlight}</span>
              )}
              {after}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-base leading-8 text-steel-300 sm:text-lg">
              {content.description}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={content.primaryCta.href}
                className={buttonStyles("primary")}
              >
                {content.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={content.secondaryCta.href}
                className={buttonStyles("secondary")}
              >
                {content.secondaryCta.label}
                <MoveUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-steel-300">
            {["Compact by design", "Built to last", "Expert support"].map(
              (label) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Check
                    className="size-4 text-signal-500"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 right-6 z-10 hidden rounded-2xl border border-surface-200 bg-white/85 px-6 py-5 shadow-[0_12px_28px_-18px_rgba(30,42,54,0.25)] backdrop-blur-xl md:block">
        <p className="text-xs text-steel-300">Meet your next machine</p>
        <p className="mt-1 font-display text-lg font-semibold text-fg">
          SHREDX M20
        </p>
        <p className="mt-3 border-t border-surface-200 pt-3">
          <span className="font-display text-2xl font-semibold text-fg">
            {content.stat.value}
          </span>{" "}
          <span className="text-xs text-steel-300">{content.stat.label}</span>
        </p>
      </div>
    </section>
  );
}
