import type { Metadata } from "next";

import { ProductCatalog } from "@/components/sections/product-catalog";
import { PageShell } from "@/components/ui/page-shell";
import { products } from "@/lib/dummy-data";

export const metadata: Metadata = {
  title: "Products & Parts",
  description:
    "Browse SHREDX machines, accessories, replacement parts, and maintenance consumables.",
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="The SHREDX collection"
      title="Everything your next idea needs."
      description="Purpose-built machines. Precision parts. Explore the tools that take your workshop further."
    >
      <div className="mt-12">
        <ProductCatalog products={products} />
      </div>
    </PageShell>
  );
}
