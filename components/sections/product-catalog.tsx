"use client";

import { useId, useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";

import { ProductCard } from "@/components/sections/product-carousel";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/content";

export function ProductCatalog({ products }: { products: Product[] }) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [sort, setSort] = useState("featured");
  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];
  const hasFilters = Boolean(
    query || category !== "All" || availability !== "All",
  );

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesQuery =
        `${product.name} ${product.description} ${product.materials.join(" ")}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
      const madeToOrder =
        product.availability === "Made to order" || !product.inStock;
      return (
        matchesQuery &&
        (category === "All" || product.category === category) &&
        (availability === "All" ||
          (availability === "In stock" ? !madeToOrder : madeToOrder))
      );
    });
    return result.sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [availability, category, products, query, sort]);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setAvailability("All");
  }

  return (
    <LayoutGroup id={id}>
      <div>
        <div className="rounded-2xl border border-surface-200 bg-surface-100 p-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)] sm:p-4">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Product categories"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={cn(
                  "relative isolate flex min-h-11 items-center gap-2 rounded-xl px-4 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500",
                  category === item
                    ? "text-steel-100"
                    : "text-steel-300 hover:bg-surface-50 hover:text-fg",
                )}
              >
                {category === item && (
                  <motion.span
                    layoutId="category-indicator"
                    className="absolute inset-0 -z-10 rounded-xl bg-ink-950"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 36,
                      duration: reduceMotion ? 0 : undefined,
                    }}
                  />
                )}
                {item === "All" ? "All products" : item}
                <span
                  className={cn(
                    "text-[10px]",
                    category === item ? "text-steel-100/60" : "text-steel-500",
                  )}
                >
                  {item === "All"
                    ? products.length
                    : products.filter((product) => product.category === item)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-3 border-t border-surface-200 pt-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
            <label className="relative sm:col-span-2 lg:col-span-1">
              <span className="sr-only">Search products</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-steel-500"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find your next machine or part"
                className="h-12 w-full rounded-xl border border-transparent bg-surface-50 pl-11 pr-11 text-sm outline-none placeholder:text-steel-500 focus:border-signal-500/40 focus:ring-2 focus:ring-signal-500/10"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-1 top-1 flex size-10 items-center justify-center rounded-lg text-steel-500 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </label>
            <label className="flex items-center gap-2 rounded-xl border border-surface-200 px-4 focus-within:ring-2 focus-within:ring-signal-500/40">
              <SlidersHorizontal
                className="size-4 shrink-0 text-steel-500"
                aria-hidden="true"
              />
              <span className="sr-only">Availability</span>
              <select
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
                className="h-12 w-full min-w-0 bg-transparent text-xs outline-none"
              >
                <option value="All">All availability</option>
                <option>In stock</option>
                <option>Made to order</option>
              </select>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-surface-200 px-4 focus-within:ring-2 focus-within:ring-signal-500/40">
              <span className="shrink-0 text-xs text-steel-500">Sort by</span>
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 w-full min-w-0 bg-transparent text-xs outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex min-h-20 items-center justify-between gap-4 px-1">
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="text-xs text-steel-500"
          >
            <span className="font-semibold text-fg">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {category !== "All" && ` in ${category}`}
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
            >
              Reset filters <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : (
            <span className="text-xs text-steel-500">
              Designed to work. Built to last.
            </span>
          )}
        </div>
        <motion.div
          layout={!reduceMotion}
          className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                layout={!reduceMotion}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
                transition={{
                  opacity: { duration: reduceMotion ? 0 : 0.22 },
                  y: {
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.22),
                  },
                  layout: { type: "spring", stiffness: 300, damping: 32 },
                  scale: { duration: 0.2 },
                }}
                className="min-w-0"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="rounded-3xl border border-dashed border-surface-200 bg-surface-100 px-6 py-20 text-center"
          >
            <Search
              className="mx-auto size-7 text-steel-500"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <h2 className="mt-5 text-2xl font-medium tracking-tight">
              Let’s find a better match.
            </h2>
            <p className="mt-3 text-sm text-steel-500">
              Try another search or explore the full collection.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="button-base button-primary mt-6 min-h-11"
            >
              View all products
            </button>
          </motion.div>
        )}
        <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl border border-surface-200 bg-surface-100 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-medium tracking-tight">
              Find the right fit for your workflow.
            </p>
            <p className="mt-1 text-sm text-steel-300">
              Our team can help with machines, materials, and configurations.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-medium text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
          >
            Talk to a specialist{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </LayoutGroup>
  );
}
