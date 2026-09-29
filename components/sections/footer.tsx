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
    <footer className="bg-ink-950">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex font-display text-3xl font-black uppercase tracking-[-0.04em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
            >
              ShredX<span className="text-signal-400">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-steel-300">
              Compact twin-shaft shredders for workshops, material labs, print
              farms, and small production teams.
            </p>
            <div className="mt-8 max-w-sm">
              <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-500">
                Get engineering notes & product updates
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-500">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-steel-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
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
        <div className="flex flex-col gap-5 pt-7 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ShredX Industrial. UI concept.</p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              Service <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
