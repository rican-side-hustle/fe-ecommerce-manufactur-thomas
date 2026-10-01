import type { Metadata } from "next";

import { EngineeringSection } from "@/components/sections/engineering-section";
import { MachineAnatomy } from "@/components/sections/machine-anatomy";
import { MachineOverview } from "@/components/sections/machine-overview";
import { ProductConfigurator } from "@/components/sections/product-configurator";
import { SpecTable } from "@/components/sections/spec-table";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import {
  engineeringFeatures,
  faqs,
  machineHotspots,
  productConfiguration,
  products,
} from "@/lib/dummy-data";

export const metadata: Metadata = {
  title: "SHREDX M20",
  description:
    "Explore and configure the SHREDX M20 mini double-shaft industrial shredder.",
};

export default function ShredxM20Page() {
  const machine = products[0];
  const machineFaqs = faqs
    .slice(0, 6)
    .map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }));

  return (
    <>
      <MachineOverview product={machine} />
      <MachineAnatomy
        hotspots={machineHotspots}
        image={machine.image}
        imageAlt={machine.imageAlt}
      />
      <EngineeringSection
        features={engineeringFeatures}
        image="/images/blade-kit.svg"
      />
      <ProductConfigurator
        product={machine}
        configuration={productConfiguration}
      />
      <SpecTable
        specifications={machine.specs}
        title="SHREDX M20 specifications"
      />
      <section className="bg-surface-50 py-20 text-fg sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Product FAQ
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-none">
              Before you configure.
            </h2>
          </div>
          <Accordion items={machineFaqs} />
        </Container>
      </section>
    </>
  );
}
