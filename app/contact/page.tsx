import type { Metadata } from "next";
import { Clock3, Mail, Wrench } from "lucide-react";

import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Contact Sales & Request a Quote" };

const contactDetails = [
  { icon: Mail, title: "Email", value: "sales@shredx.com" },
  { icon: Clock3, title: "Response time", value: "Within 1–2 working days" },
  {
    icon: Wrench,
    title: "Bring us",
    value: "Material, volume, part size, location",
  },
];

export default function ContactPage() {
  return (
    <section className="industrial-grid border-b border-surface-200 bg-surface-50 py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Contact sales · Request a quote
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-4xl">
              Put SHREDX to work.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-steel-300">
              Tell us about the material and your target throughput. We’ll help
              identify the right machine, cutter width, screen, and practical
              next steps.
            </p>
            <dl className="mt-10 border-t border-surface-200">
              {contactDetails.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-surface-200 py-5"
                >
                  <Icon className="size-4 text-signal-600" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium tracking-normal text-steel-500">
                      {title}
                    </dt>
                    <dd className="mt-1 text-sm text-fg">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
