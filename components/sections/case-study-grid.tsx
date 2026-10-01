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
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Customer stories
          </p>
          <h2 className="mt-4 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-4xl">
            {title}
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-normal text-fg hover:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
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
            className="group relative min-h-[31rem] overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
          >
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-medium tracking-normal text-signal-300">
                  {study.client}
                </p>
                <p className="border border-white/25 bg-ink-950/50 px-3 py-2 text-xs font-medium tracking-normal text-steel-100 backdrop-blur">
                  {study.result}
                </p>
              </div>
              <h3 className="mt-4 max-w-xl font-display text-3xl font-medium leading-[1.12] text-steel-100 sm:text-4xl">
                {study.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-steel-100/80">
                {study.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <section className="border-b border-surface-200 bg-surface-50 py-20 sm:py-28">
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
