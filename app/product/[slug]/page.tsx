import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ShieldCheck, Star } from "lucide-react";

import { ProductCarousel } from "@/components/sections/product-carousel";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ProductPurchase } from "@/components/ui/product-purchase";
import { getProductBySlug, getProducts } from "@/lib/api";
import { formatCurrency } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return {
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const products = await getProducts();

  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-white/10 bg-ink-950 py-7 sm:py-10">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-wider text-steel-500"
          >
            <Link href="/products" className="hover:text-white">
              Machines
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="text-steel-300">{product.name}</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-start">
            <div className="relative aspect-[6/5] overflow-hidden bg-[#e5e6e1]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 flex gap-2">
                {product.badge && <Badge>{product.badge}</Badge>}
              </div>
              <p className="absolute bottom-5 left-5 border border-black/15 bg-white/90 px-3 py-2 text-[0.625rem] font-bold uppercase tracking-industrial text-ink-950">
                Product render / UI demo
              </p>
            </div>
            <div className="lg:sticky lg:top-32 lg:py-4">
              <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
                {product.category}
              </p>
              <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-7xl">
                {product.name}
              </h1>
              <div className="mt-5 flex items-center gap-3 text-xs text-steel-300">
                <span className="flex items-center gap-1">
                  <Star
                    className="size-3.5 fill-signal-400 text-signal-400"
                    aria-hidden="true"
                  />{" "}
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-steel-500">
                  {product.reviewCount} verified reviews
                </span>
                <span className="text-steel-500">SKU {product.sku}</span>
              </div>
              <p className="mt-6 text-base leading-7 text-steel-300">
                {product.description}
              </p>
              <p className="mt-7 text-3xl font-bold text-white">
                {formatCurrency(product.price)}{" "}
                <span className="text-xs font-normal uppercase tracking-wider text-steel-500">
                  CAD
                </span>
              </p>
              <ProductPurchase
                inStock={product.inStock}
                leadTime={product.leadTime}
              />
              <div className="mt-6 flex gap-3 text-xs leading-5 text-steel-300">
                <ShieldCheck
                  className="size-5 shrink-0 text-signal-300"
                  aria-hidden="true"
                />
                <p>
                  Two-year machine warranty. Replaceable wear parts and lifetime
                  technical support.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-ink-900 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
              Technical specification
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl">
              Built around the material.
            </h2>
          </div>
          <dl className="border-t border-white/15">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 gap-5 border-b border-white/15 py-5 text-sm"
              >
                <dt className="text-steel-500">{spec.label}</dt>
                <dd className="font-bold text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-start-2">
            <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-500">
              Typical materials
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <li
                  key={material}
                  className="border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-wider text-steel-300"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <ProductCarousel
          products={relatedProducts}
          title="Complete the system."
          eyebrow="Related equipment"
        />
      )}
    </>
  );
}
