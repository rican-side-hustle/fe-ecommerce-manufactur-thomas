import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";

import { MachineOverview } from "@/components/sections/machine-overview";
import { Container } from "@/components/ui/container";
import { applications, products } from "@/lib/dummy-data";

interface ApplicationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({
  params,
}: ApplicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const application = applications.find((item) => item.slug === slug);
  return {
    title: application ? `${application.name} Shredding` : "Application",
  };
}

export default async function ApplicationPage({
  params,
}: ApplicationPageProps) {
  const { slug } = await params;
  const application = applications.find((item) => item.slug === slug);
  if (!application) notFound();

  return (
    <>
      <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
        <Container>
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Application / {application.code}
          </p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-6xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-8xl">
            {application.name} shredding.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-300">
            {application.description}
          </p>
        </Container>
      </section>
      <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-3">
          <article>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Challenge
            </p>
            <p className="mt-5 text-xl leading-8">{application.challenge}</p>
          </article>
          <article>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Recommended setup
            </p>
            <p className="mt-5 text-xl font-semibold leading-8">
              {application.recommendedSetup}
            </p>
          </article>
          <article>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Suggested path
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Application sample testing",
                "Configuration review",
                "Freight and installation plan",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="size-4 text-signal-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-signal-500 pb-1 text-xs font-medium tracking-normal"
            >
              Request application review <ArrowUpRight className="size-4" />
            </Link>
          </article>
        </Container>
      </section>
      <MachineOverview product={products[0]} />
    </>
  );
}
