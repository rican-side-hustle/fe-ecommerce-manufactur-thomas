import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  applications,
  blogPosts,
  caseStudies,
  faqs,
  products,
  resources,
} from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Search" };

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? [
        ...products
          .filter((item) =>
            `${item.name} ${item.description} ${item.materials.join(" ")}`
              .toLowerCase()
              .includes(query),
          )
          .map((item) => ({
            type: "Product",
            title: item.name,
            description: item.description,
            href:
              item.slug === "shredx-m20"
                ? "/machines/shredx-m20"
                : `/products/${item.slug}`,
          })),
        ...applications
          .filter((item) =>
            `${item.name} ${item.description}`.toLowerCase().includes(query),
          )
          .map((item) => ({
            type: "Application",
            title: `${item.name} shredding`,
            description: item.description,
            href: `/applications/${item.slug}`,
          })),
        ...resources
          .filter((item) =>
            `${item.title} ${item.description}`.toLowerCase().includes(query),
          )
          .map((item) => ({
            type: "Resource",
            title: item.title,
            description: item.description,
            href: item.href,
          })),
        ...caseStudies
          .filter((item) =>
            `${item.title} ${item.summary}`.toLowerCase().includes(query),
          )
          .map((item) => ({
            type: "Case Study",
            title: item.title,
            description: item.summary,
            href: `/case-studies/${item.slug}`,
          })),
        ...blogPosts
          .filter((item) =>
            `${item.title} ${item.excerpt}`.toLowerCase().includes(query),
          )
          .map((item) => ({
            type: "Article",
            title: item.title,
            description: item.excerpt,
            href: `/blog/${item.slug}`,
          })),
        ...faqs
          .filter((item) =>
            `${item.question} ${item.answer}`.toLowerCase().includes(query),
          )
          .map((item) => ({
            type: "FAQ",
            title: item.question,
            description: item.answer,
            href: "/faq",
          })),
      ]
    : [];

  return (
    <section className="min-h-[70svh] bg-surface-50 py-16 text-fg sm:py-24">
      <Container>
        <p className="text-xs font-medium tracking-normal text-signal-600">
          Site search
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.035em] sm:text-4xl">
          Find machines, materials, and answers.
        </h1>
        <form action="/search" className="relative mt-10 max-w-3xl">
          <label htmlFor="site-search" className="sr-only">
            Search SHREDX
          </label>
          <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-steel-500" />
          <input
            id="site-search"
            name="q"
            defaultValue={q}
            placeholder="Try “plastic”, “blade”, or “maintenance”"
            className="h-16 w-full border border-surface-200 bg-surface-100 pl-14 pr-32 text-base outline-none focus:border-signal-500"
          />
          <button
            type="submit"
            className="button-base button-primary absolute bottom-2 right-2 top-2"
          >
            Search
          </button>
        </form>
        {query && (
          <p className="mt-8 text-xs font-medium tracking-normal text-steel-500">
            {results.length} results for “{q}”
          </p>
        )}
        <div className="mt-6 border-t border-surface-200">
          {results.map((result, index) => (
            <Link
              key={`${result.type}-${result.title}-${index}`}
              href={result.href}
              className="group grid gap-3 border-b border-surface-200 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-center"
            >
              <span className="text-xs font-medium tracking-normal text-signal-600">
                {result.type}
              </span>
              <div>
                <h2 className="font-display text-2xl font-medium normal-case">
                  {result.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-steel-500">
                  {result.description}
                </p>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        {!query && (
          <div className="mt-10 border border-surface-200 bg-surface-100 p-8">
            <h2 className="font-display text-2xl font-medium normal-case">
              Popular searches
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "SHREDX M20",
                "Plastic",
                "Blade",
                "Maintenance",
                "Warranty",
              ].map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="border border-surface-200 px-4 py-2 text-xs font-medium tracking-normal hover:border-signal-500"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
