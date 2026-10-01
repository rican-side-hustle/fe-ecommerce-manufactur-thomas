import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";

import { Providers } from "@/app/providers";
import { Footer, type FooterColumn } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { navigation } from "@/lib/dummy-data";

const dmSans = localFont({
  src: "../public/fonts/dm-sans-variable.ttf",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

const spaceGrotesk = localFont({
  src: "../public/fonts/space-grotesk-variable.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const footerColumns: FooterColumn[] = [
  {
    title: "Machines",
    links: [
      { label: "SHREDX M20", href: "/machines/shredx-m20" },
      { label: "All machines", href: "/machines" },
      { label: "Accessories", href: "/products" },
      { label: "Replacement parts", href: "/products" },
    ],
  },
  {
    title: "Applications",
    links: [
      { label: "Plastic", href: "/applications/plastic" },
      { label: "Rubber", href: "/applications/rubber" },
      { label: "E-Waste", href: "/applications/e-waste" },
      { label: "All applications", href: "/applications" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical documentation", href: "/resources" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Videos", href: "/videos" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Technology", href: "/technology" },
      { label: "Contact sales", href: "/contact" },
      { label: "sales@shredx.com", href: "mailto:sales@shredx.com" },
      { label: "+62 XXX XXXX XXXX", href: "tel:+620000000000" },
    ],
  },
];

export const metadata: Metadata = {
  title: {
    default: "SHREDX | Compact Double-Shaft Industrial Shredders",
    template: "%s | SHREDX",
  },
  description:
    "SHREDX designs compact, configurable double-shaft industrial shredders for demanding material-processing applications.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-24 bg-signal-400 px-4 py-3 text-xs font-medium tracking-normal text-ink-950 focus:translate-y-0"
          >
            Skip to content
          </a>
          <Navbar items={navigation} />
          <main id="main-content">{children}</main>
          <Footer columns={footerColumns} />
          <WhatsAppButton phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER} />
        </Providers>
      </body>
    </html>
  );
}
