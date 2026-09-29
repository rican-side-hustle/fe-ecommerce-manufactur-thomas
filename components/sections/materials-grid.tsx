import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { MaterialCard } from "@/types/content";

interface MaterialsGridProps {
  materials: MaterialCard[];
}

export function MaterialsGrid({ materials }: MaterialsGridProps) {
  return (
    <section className="border-b border-white/10 bg-[#ecece7] py-20 text-ink-950 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-industrial text-signal-500">
              What it handles
            </p>
            <h2 className="mt-4 text-balance font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl">
              Feed it the awkward stuff.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65 lg:justify-self-end">
            Low-speed torque gives the R-series the grip to process bulky,
            irregular scrap. Always test unknown materials and follow the
            machine-specific safety guide.
          </p>
        </div>
        <div className="mt-12 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <article
              key={material.code}
              className="group min-h-64 border-b border-r border-black/15 p-6 transition-colors hover:bg-signal-400 sm:min-h-72"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-black tracking-wider text-black/45">
                  MAT / {material.code}
                </span>
                <ArrowDownRight
                  className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-28 sm:mt-32">
                <h3 className="font-display text-2xl font-black uppercase leading-none">
                  {material.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60 group-hover:text-black/70">
                  {material.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
