import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { MaterialCard } from "@/types/content";

interface MaterialsGridProps {
  materials: MaterialCard[];
}

const visualStyles = [
  "bg-[radial-gradient(circle_at_25%_25%,#ff6a1a_0_7%,transparent_8%),radial-gradient(circle_at_70%_65%,#14171a_0_12%,transparent_13%),#3a424a]",
  "bg-[repeating-radial-gradient(ellipse_at_center,#14171a_0_9px,#252b30_10px_17px,#3a424a_18px_27px)]",
  "bg-[repeating-linear-gradient(125deg,#b78c5a_0_12px,#d4ad78_13px_25px,#704d30_26px_29px)]",
  "bg-[repeating-linear-gradient(45deg,#c9aa73_0_14px,#e1c89a_15px_28px,#8d7048_29px_31px)]",
  "bg-[linear-gradient(135deg,#1f2428_0_35%,#ff6a1a_36%_39%,#3a424a_40%_70%,#14171a_71%)]",
  "bg-[repeating-linear-gradient(90deg,#2e353b_0_8px,#9aa5ae_9px_15px,#14171a_16px_22px)]",
];

export function MaterialsGrid({ materials }: MaterialsGridProps) {
  return (
    <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Materials
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              One machine. Countless materials.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-steel-300 lg:justify-self-end">
            Low-speed torque helps the M20 engage bulky, irregular feedstock.
            Application testing confirms the final cutter and drive
            configuration.
          </p>
        </Reveal>
        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {materials.map((material, index) => {
            const slug = material.name.toLowerCase().replaceAll(" ", "-");
            return (
              <Reveal
                key={material.code}
                delay={(index % 3) * 0.06}
                className="min-w-[78vw] snap-start sm:min-w-[21rem] lg:min-w-0"
              >
                <Link
                  href={`/applications/${slug}`}
                  className="group flex h-full min-h-[27rem] flex-col rounded-2xl border border-surface-200 bg-surface-100 p-4 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
                >
                  <div
                    className={`relative h-48 overflow-hidden rounded-xl ${visualStyles[index % visualStyles.length]}`}
                  >
                    <span className="absolute left-3 top-3 bg-surface-100/90 px-2 py-1 text-xs font-medium tracking-normal">
                      MAT / {material.code}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-2 pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-3xl font-medium normal-case">
                        {material.name}
                      </h3>
                      <ArrowUpRight
                        className="size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-steel-300">
                      {material.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
