import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { CaseStudy } from "@/types/content";

interface CaseStudyGridProps {
  studies: CaseStudy[];
  title?: string;
  contained?: boolean;
}

export function CaseStudyGrid({
  studies,
  title = "Material loops, running in the real world.",
  contained = true,
}: CaseStudyGridProps) {
  const content = (
    <>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
            Customer stories
          </p>
          <h2 className="mt-4 max-w-4xl text-balance font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl">
            {title}
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-industrial text-white hover:text-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
        >
          View all stories{" "}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {studies.map((study) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.slug}`}
            className="group relative min-h-[31rem] overflow-hidden border border-white/10 bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
          >
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-signal-300">
                  {study.client}
                </p>
                <p className="border border-white/20 bg-black/40 px-3 py-2 text-[0.625rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                  {study.result}
                </p>
              </div>
              <h3 className="mt-4 max-w-xl font-display text-3xl font-black uppercase leading-[0.96] text-white sm:text-4xl">
                {study.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-steel-300">
                {study.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <section className="border-b border-white/10 bg-ink-950 py-20 sm:py-28">
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
