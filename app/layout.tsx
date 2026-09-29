import type { Metadata, Viewport } from "next";

import "@/app/globals.css";

import { Providers } from "@/app/providers";
import { Footer, type FooterColumn } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { navigation } from "@/lib/dummy-data";

const footerColumns: FooterColumn[] = [
  {
    title: "Machines",
    links: [
      { label: "ShredX Mini DS-200", href: "/product/shredx-mini-ds200" },
      { label: "R4 Workcell", href: "/product/r4-workcell-shredder" },
      { label: "Parts & blades", href: "/products" },
    ],
  },
  {
    title: "Applications",
    links: [
      { label: "Plastic recycling", href: "/case-studies" },
      { label: "Education & R&D", href: "/case-studies" },
      { label: "Customer stories", href: "/case-studies" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Talk to engineering", href: "/contact" },
      { label: "Shipping & delivery", href: "/contact" },
      { label: "Journal", href: "/blog" },
    ],
  },
];

export const metadata: Metadata = {
  title: {
    default: "ShredX Industrial | Compact Double-Shaft Shredders",
    template: "%s | ShredX Industrial",
  },
  description:
    "Compact double-shaft industrial shredders for plastics, production scrap, material labs, and circular manufacturing.",
};

export const viewport: Viewport = {
  themeColor: "#070807",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-24 bg-signal-400 px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-950 focus:translate-y-0"
          >
            Skip to content
          </a>
          <Navbar items={navigation} />
          <main id="main-content">{children}</main>
          <Footer columns={footerColumns} />
        </Providers>
      </body>
    </html>
  );
}
