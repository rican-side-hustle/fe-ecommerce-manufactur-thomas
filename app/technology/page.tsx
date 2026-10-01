import type { Metadata } from "next";

import { EngineeringSection } from "@/components/sections/engineering-section";
import { MachineAnatomy } from "@/components/sections/machine-anatomy";
import { PageShell } from "@/components/ui/page-shell";
import {
  engineeringFeatures,
  machineHotspots,
  products,
} from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  const machine = products[0];
  return (
    <>
      <PageShell
        eyebrow="SHREDX engineering"
        title="Controlled destruction, engineered as a system."
        description="Explore the cutting chamber, drive system, safety architecture, and service strategy behind the SHREDX M20."
      />
      <MachineAnatomy
        hotspots={machineHotspots}
        image={machine.image}
        imageAlt={machine.imageAlt}
      />
      <EngineeringSection
        features={engineeringFeatures}
        image="/images/blade-kit.svg"
      />
    </>
  );
}
