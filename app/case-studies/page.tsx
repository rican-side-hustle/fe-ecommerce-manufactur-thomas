import type { Metadata } from "next";

import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { PageShell } from "@/components/ui/page-shell";
import { caseStudies } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Customer Stories" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageShell
        eyebrow="Applications"
        title="Material recovery that fits where the work happens."
        description="From additive manufacturing labs to small production floors, see how teams use compact shredding to reduce waste volume and keep useful material moving."
      />
      <CaseStudyGrid
        studies={caseStudies}
        title="Small machine. Measurable change."
      />
    </>
  );
}
