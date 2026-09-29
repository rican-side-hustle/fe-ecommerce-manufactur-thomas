"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { HeroContent } from "@/types/content";

interface HeroProps {
  content: HeroContent;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero({ content }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const [titleBefore, titleAfter] = content.highlight
    ? content.title.split(content.highlight)
    : [content.title, ""];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen overflow-hidden border-b border-white/10"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-y-[14%] inset-x-0 -z-30"
        style={{ y: shouldReduceMotion ? 0 : imageY }}
      >
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] grayscale-[30%]"
        />
      </motion.div>
      <p className="sr-only">{content.imageAlt}</p>
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      <div className="absolute inset-y-0 left-[7%] -z-10 hidden w-px bg-white/10 xl:block" />
      <div className="absolute inset-y-0 right-[7%] -z-10 hidden w-px bg-white/10 xl:block" />

      <Container className="relative flex flex-1 items-center pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.16 }}
          className="max-w-5xl"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-signal-400" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal-300">
              {content.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={reveal}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl text-balance font-display text-[clamp(3.75rem,9.5vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.055em] text-white"
          >
            {content.highlight ? (
              <>
                {titleBefore}
                <span className="font-serif font-medium normal-case italic tracking-[-0.04em] text-signal-300">
                  {content.highlight}
                </span>
                {titleAfter}
              </>
            ) : (
              content.title
            )}
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 max-w-xl text-base leading-7 text-steel-300 sm:text-lg sm:leading-8"
          >
            {content.description}
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={content.primaryCta.href}
              className={cn(buttonStyles("primary"), "group")}
            >
              {content.primaryCta.label}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={content.secondaryCta.href}
              className={buttonStyles("secondary")}
            >
              {content.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.55 }}
          className="absolute bottom-8 right-5 hidden border-l border-signal-400 pl-5 sm:block lg:bottom-12 lg:right-12"
        >
          <p className="font-display text-4xl font-black text-white">
            {content.stat.value}
          </p>
          <p className="mt-1 text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300">
            {content.stat.label}
          </p>
        </motion.div>

        <Link
          href="#product-showcase"
          aria-label="Scroll to product showcase"
          className="absolute bottom-8 left-5 hidden items-center gap-3 text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 sm:flex lg:bottom-12 lg:left-12"
        >
          <span className="flex size-9 items-center justify-center border border-white/20 bg-black/20">
            <ArrowDown className="size-4" aria-hidden="true" />
          </span>
          Discover
        </Link>
      </Container>
    </section>
  );
}
