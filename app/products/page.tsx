import type { Metadata } from "next";

import { ProductCard } from "@/components/sections/product-carousel";
import { PageShell } from "@/components/ui/page-shell";
import { products } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Machines & Parts" };

const filters = ["All", "Machines", "Cutters", "Service parts"];

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Machines & parts"
      title="A compact system with an industrial appetite."
      description="Choose a complete twin-shaft shredder, then configure cutters and service parts around the material stream you need to process."
    >
      <div
        className="mt-12 flex flex-wrap gap-2 border-y border-white/10 py-4"
        aria-label="Product filters"
      >
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`border px-4 py-2 text-[0.625rem] font-bold uppercase tracking-wider transition-colors ${index === 0 ? "border-signal-400 bg-signal-400 text-ink-950" : "border-white/15 text-steel-300 hover:border-white/40 hover:text-white"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
