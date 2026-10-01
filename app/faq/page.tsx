import type { Metadata } from "next";

import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { PageShell } from "@/components/ui/page-shell";
import { faqs } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  const items = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));
  return (
    <>
      <PageShell
        eyebrow="Support"
        title="Questions before material meets machine."
        description="Product, technical, maintenance, shipping, and warranty answers for planning a SHREDX installation."
      />
      <section className="bg-surface-50 py-20 text-fg sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              All questions
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-steel-300">
              These are realistic dummy answers for UI review. Commercial and
              engineering terms will replace them before launch.
            </p>
          </div>
          <Accordion items={items} />
        </Container>
      </section>
    </>
  );
}
