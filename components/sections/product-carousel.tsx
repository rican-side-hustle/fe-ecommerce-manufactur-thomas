"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type { Product } from "@/types/content";

interface ProductCarouselProps {
  products: Product[];
  title: string;
  eyebrow?: string;
  description?: string;
}

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useUiStore((state) => state.addToCart);

  return (
    <article className="group flex h-full min-w-0 flex-col border border-white/10 bg-ink-900">
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-[6/5] overflow-hidden bg-[#e6e7e2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 368px, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge && <Badge>{product.badge}</Badge>}
          {!product.inStock && (
            <Badge className="border-white/30 bg-black/50 text-white">
              Preorder
            </Badge>
          )}
        </div>
        <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center border border-black/15 bg-white/90 text-ink-950 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-signal-300">
            {product.category}
          </p>
          <p className="flex items-center gap-1 text-xs text-steel-300">
            <Star
              className="size-3 fill-signal-400 text-signal-400"
              aria-hidden="true"
            />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-steel-500">({product.reviewCount})</span>
          </p>
        </div>
        <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none text-white">
          <Link
            href={`/product/${product.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-steel-300">
          {product.description}
        </p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-[0.625rem] uppercase tracking-wider text-steel-500">
              From
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              {formatCurrency(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => addToCart()}
            className="flex min-h-11 items-center gap-2 bg-signal-400 px-4 text-[0.625rem] font-black uppercase tracking-[0.14em] text-ink-950 transition-colors hover:bg-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            <ShoppingBag className="size-3.5" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductCarousel({
  products,
  title,
  eyebrow = "Shop machines",
  description,
}: ProductCarouselProps) {
  return (
    <section
      id="featured-products"
      aria-labelledby="products-heading"
      className="border-b border-white/10 bg-ink-950 py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-industrial text-signal-300">
              {eyebrow}
            </p>
            <h2
              id="products-heading"
              className="mt-4 max-w-3xl text-balance font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-sm leading-6 text-steel-300 sm:text-base">
                {description}
              </p>
            )}
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-industrial text-white hover:text-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
          >
            Compare all
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[86vw] snap-start sm:min-w-[23rem] lg:min-w-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
