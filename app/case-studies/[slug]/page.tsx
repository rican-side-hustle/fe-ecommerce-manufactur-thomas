import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/api";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <article>
      <header className="relative isolate flex min-h-[72svh] items-end overflow-hidden border-b border-surface-200">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/20" />
        <Container className="pb-12 pt-28 sm:pb-16">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-normal text-steel-100/80 hover:text-steel-100"
          >
            <ArrowLeft className="size-3" aria-hidden="true" /> All stories
          </Link>
          <p className="mt-10 text-xs font-medium tracking-normal text-signal-300">
            {study.client}
          </p>
          <h1 className="mt-4 max-w-5xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-steel-100 sm:text-4xl lg:text-6xl">
            {study.title}
          </h1>
        </Container>
      </header>
      <section className="border-b border-surface-200 bg-surface-50 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="border-l-2 border-signal-400 pl-6">
            <p className="text-xs font-medium tracking-normal text-steel-500">
              Measured result
            </p>
            <p className="mt-3 font-display text-4xl font-medium leading-none text-fg">
              {study.result}
            </p>
          </div>
          <div>
            <p className="text-xl leading-8 text-fg sm:text-2xl sm:leading-9">
              {study.summary}
            </p>
            <div className="mt-10 space-y-6 text-base leading-8 text-steel-300">
              <p>
                The team needed a recycling process close enough to daily work
                that sorting and recovery would become routine, not a separate
                logistics project.
              </p>
              <p>
                A compact twin-shaft system gave operators a controlled way to
                reduce bulky scrap at the source. Material now takes less
                storage space and can be classified for internal trials or
                specialist recycling partners.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 border-b border-signal-400 pb-1 text-xs font-medium tracking-normal text-fg hover:text-signal-600"
            >
              Plan your material loop{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
