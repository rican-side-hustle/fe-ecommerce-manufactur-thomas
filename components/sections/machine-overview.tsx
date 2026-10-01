import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Product } from "@/types/content";

interface MachineOverviewProps {
  product: Product;
}

export function MachineOverview({ product }: MachineOverviewProps) {
  return (
    <section className="overflow-hidden border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Meet the machine
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              Small footprint. Serious power.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-steel-300">
              {product.description}
            </p>
            <ul className="mt-8 space-y-3">
              {product.specs.slice(0, 3).map((spec) => (
                <li
                  key={spec.label}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="flex size-5 items-center justify-center bg-signal-500 text-ink-950">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {spec.label}: {spec.value}
                </li>
              ))}
            </ul>
            <Link
              href="/machines/shredx-m20"
              className="button-base button-primary mt-9 inline-flex min-h-12 items-center gap-2"
            >
              Explore the machine{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal
            delay={0.12}
            className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-surface-100"
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
