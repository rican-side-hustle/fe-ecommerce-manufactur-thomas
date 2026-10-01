import type { Metadata } from "next";

import { ApplicationsGrid } from "@/components/sections/applications-grid";
import { PageShell } from "@/components/ui/page-shell";
import { applications } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Applications" };

export default function ApplicationsPage() {
  return (
    <>
      <PageShell
        eyebrow="Material selector"
        title="What do you need to shred?"
        description="Start with the material stream. We’ll help map feedstock, volume, and output requirements to an M20 configuration."
      />
      <ApplicationsGrid applications={applications} />
    </>
  );
}
