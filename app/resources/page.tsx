import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Play, type LucideIcon } from "lucide-react";

import { PageShell } from "@/components/ui/page-shell";
import { resources } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Resources" };

const icons: Record<(typeof resources)[number]["category"], LucideIcon> = {
  Documentation: FileText,
  Article: ArrowUpRight,
  Media: Play,
};

export default function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resource hub"
      title="Technical information for better decisions."
      description="Documentation, material guides, maintenance procedures, and product media for planning and operating SHREDX systems."
    >
      <div className="mt-12 grid gap-px border border-surface-200 bg-surface-100/10 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => {
          const Icon = icons[resource.category];
          return (
            <Link
              key={resource.id}
              href={resource.href}
              className="group flex min-h-72 flex-col bg-surface-100 p-6 hover:bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
            >
              <div className="flex justify-between">
                <span className="text-xs font-medium tracking-normal text-signal-600">
                  {resource.category}
                </span>
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="mt-auto">
                <p className="text-xs text-steel-500">{resource.format}</p>
                <h2 className="mt-3 font-display text-2xl font-medium text-fg">
                  {resource.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-steel-300">
                  {resource.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}
