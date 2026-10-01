import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = { title: "About SHREDX" };

const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "25+", label: "Countries" },
  { value: "500+", label: "Machines deployed" },
  { value: "20+", label: "Industrial applications" },
];
const capabilities = [
  "Engineering",
  "Manufacturing",
  "R&D",
  "Material Processing",
  "After-Sales Support",
];

export default function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="Company"
        title="Engineering better material recovery."
        description="SHREDX is a fictional UI-stage manufacturer focused on compact, serviceable industrial reduction systems and the workflows around them."
      />
      <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium tracking-normal text-signal-600">
                Mission
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.12]">
                Make industrial material recovery practical at a smaller scale.
              </h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-muted">
                We design machinery around the realities of material handling:
                irregular parts, limited floor space, service access, operator
                safety, and the need for measurable output.
              </p>
              <ul className="mt-10 grid border-l border-t border-surface-200 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="border-b border-r border-surface-200 p-5 text-sm font-semibold tracking-normal"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 border-l border-t border-surface-200 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-r border-surface-200 p-6"
              >
                <p className="font-display text-4xl font-medium">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium tracking-normal text-steel-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
