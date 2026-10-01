import Link from "next/link";
import { Download } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { ProductSpec } from "@/types/content";

interface SpecTableProps {
  specifications: ProductSpec[];
  title?: string;
}

export function SpecTable({
  specifications,
  title = "Technical specifications",
}: SpecTableProps) {
  return (
    <section
      id="specs"
      className="scroll-mt-28 border-b border-surface-200 bg-surface-100 py-20 text-fg sm:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Machine data
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            {title}
          </h2>
          <Link
            href="#"
            className="button-base button-secondary mt-8 inline-flex min-h-12 items-center gap-2"
          >
            <Download className="size-4" aria-hidden="true" /> Download
            technical datasheet
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="border-t border-surface-200">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 gap-5 border-b border-surface-200 py-5 text-sm sm:grid-cols-[1fr_1.2fr]"
              >
                <dt className="text-steel-500">{spec.label}</dt>
                <dd className="font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-5 text-steel-500">
            Specifications are realistic dummy values for UI review and will be
            replaced after engineering validation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
