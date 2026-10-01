import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/ui/newsletter-form";

interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns: FooterColumn[];
}

export function Footer({ columns }: FooterProps) {
  return (
    <footer className="bg-ink-900">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 border-b border-ink-700 pb-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex font-display text-3xl font-medium tracking-[-0.035em] text-steel-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
            >
              ShredX<span className="text-signal-400">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-steel-100/70">
              Compact double-shaft industrial shredders engineered for demanding
              material-processing applications.
            </p>
            <div className="mt-8 max-w-sm">
              <p className="text-xs font-medium tracking-normal text-steel-100/60">
                Get engineering notes & product updates
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-medium tracking-normal text-steel-100/60">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-steel-100/70 transition-colors hover:text-steel-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs font-medium tracking-normal text-steel-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SHREDX</p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 hover:text-steel-100"
            >
              Service <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="hover:text-steel-100">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-steel-100">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
