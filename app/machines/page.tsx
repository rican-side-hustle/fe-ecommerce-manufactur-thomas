import type { Metadata } from "next";

import { ProductCatalog } from "@/components/sections/product-catalog";
import { PageShell } from "@/components/ui/page-shell";
import { products } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Industrial Shredding Machines" };

export default function MachinesPage() {
  const machines = products.filter(
    (product) =>
      product.category.toLowerCase().includes("machine") ||
      product.category.toLowerCase().includes("shredder"),
  );

  return (
    <PageShell
      eyebrow="Machine collection"
      title="Industrial shredding machines."
      description="Compact and configurable double-shaft systems designed for demanding material-processing applications."
    >
      <div className="mt-12">
        <ProductCatalog products={machines} />
      </div>
    </PageShell>
  );
}
