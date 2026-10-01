"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonStyles } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
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
  const madeToOrder =
    product.availability === "Made to order" || !product.inStock;

  return (
    <article className="product-card group flex h-full min-w-0 flex-col rounded-2xl border border-surface-200 bg-surface-100 p-2.5 shadow-[0_12px_32px_-28px_rgba(0,0,0,0.45)] sm:p-3">
      <Link
        href={`/product/${product.slug}`}
        className="relative isolate block aspect-[6/5] overflow-hidden rounded-[1rem] bg-surface-100 outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="product-card-image object-cover"
        />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
          {product.badge ? (
            <span className="rounded-full border border-surface-200 bg-surface-100/85 px-3 py-1.5 text-[11px] font-semibold text-fg backdrop-blur-md">
              {product.badge}
            </span>
          ) : (
            <span />
          )}
          <span className="flex items-center gap-1 rounded-full bg-surface-100/85 px-2.5 py-1.5 text-[11px] font-medium backdrop-blur-md">
            <Star
              className="size-3 fill-signal-500 text-signal-600"
              aria-hidden="true"
            />
            {product.rating.toFixed(1)}{" "}
            <span className="sr-only">out of 5 stars</span>
          </span>
        </div>
        <span className="product-card-discover absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-surface-100 px-4 py-2.5 text-xs font-medium shadow-sm">
          Explore <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4">
        <p className="text-[11px] font-medium tracking-normal text-steel-500">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.035em] text-fg sm:text-2xl">
          <Link
            href={`/product/${product.slug}`}
            className="outline-none transition-colors hover:text-signal-600 focus-visible:ring-2 focus-visible:ring-signal-500"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-steel-300">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec) => (
            <span
              key={spec.label}
              className="rounded-md bg-surface-50 px-2.5 py-1.5 text-[11px] text-steel-300"
              title={spec.label}
            >
              {spec.value}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-7">
          <div>
            <p className="mb-1 text-[11px] text-steel-500">From</p>
            <p className="text-xl font-semibold tracking-tight">
              {formatCurrency(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="button-base button-primary inline-flex min-h-11 items-center gap-2"
          >
            <Plus className="size-4" aria-hidden="true" /> Add to cart
          </button>
        </div>
        <p className="mt-5 flex items-center gap-2 border-t border-surface-200 pt-4 text-[11px] text-steel-500">
          <span
            className={cn(
              "size-1.5 rounded-full",
              madeToOrder ? "bg-warning" : "bg-signal-500",
            )}
            aria-hidden="true"
          />
          {madeToOrder ? "Made to order" : "Available to order"}
          <span aria-hidden="true">·</span>
          {product.leadTime}
        </p>
      </div>
    </article>
  );
}

export function ProductCarousel({
  products,
  title,
  eyebrow = "The collection",
  description,
}: ProductCarouselProps) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const [selection, setSelection] = useState({ index: 0, direction: 1 });
  const index = products.length ? selection.index % products.length : 0;
  const product = products[index];

  function select(next: number) {
    setSelection({
      index: (next + products.length) % products.length,
      direction: next > index ? 1 : -1,
    });
  }

  if (!product) return null;

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="overflow-hidden bg-surface-100 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-medium text-signal-600">
              <span className="h-px w-7 bg-signal-500" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-4 max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-fg sm:text-5xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-sm leading-7 text-steel-300 sm:text-base">
                {description}
              </p>
            )}
          </div>
          <Link
            href="/products"
            className="inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-medium transition-colors hover:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
          >
            Shop the collection{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured products"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget || products.length < 2)
              return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              select(index + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          className="mt-10 rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-4"
        >
          <div className="overflow-hidden rounded-[2rem] border border-surface-200 bg-surface-100">
            <AnimatePresence
              initial={false}
              mode="wait"
              custom={selection.direction}
            >
              <motion.div
                key={product.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${products.length}: ${product.name}`}
                custom={selection.direction}
                variants={{
                  enter: (direction: number) => ({
                    opacity: 0,
                    x: reduceMotion ? 0 : direction * 32,
                  }),
                  active: { opacity: 1, x: 0 },
                  exit: (direction: number) => ({
                    opacity: 0,
                    x: reduceMotion ? 0 : direction * -24,
                  }),
                }}
                initial="enter"
                animate="active"
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0 : 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid lg:grid-cols-[1.2fr_1fr]"
              >
                <motion.div
                  drag={products.length > 1 && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 60)
                      select(index + (info.offset.x < 0 ? 1 : -1));
                  }}
                  className="relative aspect-[6/5] touch-pan-y overflow-hidden lg:aspect-auto lg:min-h-[510px]"
                  style={{ cursor: products.length > 1 ? "grab" : undefined }}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    draggable={false}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="pointer-events-none select-none object-cover"
                  />
                  <span className="absolute left-6 top-6 rounded-full border border-surface-200 bg-surface-100/85 px-4 py-2 text-xs font-medium backdrop-blur-md">
                    {product.badge || product.category}
                  </span>
                  <span className="absolute bottom-6 left-6 text-xs font-medium text-fg/60">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(products.length).padStart(2, "0")}
                  </span>
                </motion.div>
                <div className="flex flex-col justify-center bg-surface-50 p-7 sm:p-10 xl:p-14">
                  <p className="text-[11px] font-medium tracking-normal text-steel-500">
                    {product.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.035em] sm:text-4xl xl:text-5xl">
                    {product.name}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-steel-300">
                    {product.description}
                  </p>
                  <dl className="mt-7 grid grid-cols-2 gap-5 border-y border-surface-200 py-5">
                    {product.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-[11px] text-steel-500">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-lg font-medium tracking-tight">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                    <div>
                      <p className="text-xs text-steel-500">Starting at</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                    <Link
                      href={`/product/${product.slug}`}
                      className={cn(buttonStyles(), "rounded-full")}
                    >
                      Explore product{" "}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {products.length > 1 && (
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Choose a featured product"
              >
                {products.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show ${item.name}`}
                    aria-pressed={itemIndex === index}
                    onClick={() => select(itemIndex)}
                    className={cn(
                      "relative flex min-h-14 items-center gap-3 rounded-xl border p-1.5 pr-3 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500",
                      itemIndex === index
                        ? "border-surface-200 bg-surface-50 text-fg"
                        : "border-transparent text-steel-500 hover:bg-surface-50",
                    )}
                  >
                    <span className="relative size-10 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                    <span className="hidden max-w-36 sm:block">
                      {item.name}
                    </span>
                    {itemIndex === index && (
                      <span className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-signal-500" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <p
                  className="mr-2 text-xs tabular-nums text-steel-500"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span className="text-fg">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  / {String(products.length).padStart(2, "0")}
                  <span className="sr-only">: {product.name}</span>
                </p>
                <button
                  type="button"
                  onClick={() => select(index - 1)}
                  aria-label="Previous product"
                  className="carousel-arrow"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => select(index + 1)}
                  aria-label="Next product"
                  className="carousel-arrow"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
