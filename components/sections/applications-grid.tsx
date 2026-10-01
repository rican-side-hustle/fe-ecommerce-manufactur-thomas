import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Application } from "@/types/content";

interface ApplicationsGridProps {
  applications: Application[];
  compact?: boolean;
}

export function ApplicationsGrid({
  applications,
  compact = false,
}: ApplicationsGridProps) {
  return (
    <section
      id="applications"
      className="scroll-mt-28 border-b border-surface-200 bg-surface-100 py-20 text-fg sm:py-28"
    >
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Applications
            </p>
            <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              Built for real-world material processing.
            </h2>
          </div>
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-normal hover:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
          >
            All applications{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
        <div
          className={`mt-12 grid gap-5 sm:grid-cols-2 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}
        >
          {applications.map((application, index) => (
            <Reveal key={application.slug} delay={(index % 3) * 0.06}>
              <Link
                href={`/applications/${application.slug}`}
                className="group flex min-h-64 flex-col rounded-2xl border border-surface-200 bg-surface-100 p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-500"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-normal text-signal-600">
                    APP / {application.code}
                  </span>
                  <ArrowUpRight
                    className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="font-display text-3xl font-medium normal-case">
                    {application.name}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-steel-300 group-hover:text-fg/65">
                    {application.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
