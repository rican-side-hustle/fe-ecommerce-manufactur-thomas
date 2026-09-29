"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type { Product, ProductShowcaseContent } from "@/types/content";

interface ProductShowcaseProps {
  product: Product;
  content: ProductShowcaseContent;
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function ProductShowcase({ product, content }: ProductShowcaseProps) {
  const addToCart = useUiStore((state) => state.addToCart);

  return (
    <section
      id="product-showcase"
      aria-labelledby="showcase-title"
      className="scroll-mt-20 border-b border-white/10 bg-[#ecece7] py-20 text-ink-950 sm:py-28"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
        >
          <motion.div variants={reveal} transition={{ duration: 0.6 }}>
            <p className="text-xs font-black uppercase tracking-industrial text-signal-500">
              {content.eyebrow}
            </p>
            <h2
              id="showcase-title"
              className="mt-4 max-w-4xl text-balance font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl"
            >
              {content.title}
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-base leading-7 text-black/65 lg:justify-self-end"
          >
            {content.description}
          </motion.p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid overflow-hidden border border-black/15 bg-white lg:grid-cols-[1.15fr_.85fr]"
        >
          <div className="relative min-h-[28rem] overflow-hidden bg-[#d9dbd5] sm:min-h-[38rem]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              {product.badge && <Badge>{product.badge}</Badge>}
              <Badge className="border-black/20 bg-white/80 text-ink-950">
                Twin shaft
              </Badge>
            </div>
            <p className="absolute bottom-5 left-5 border border-black/15 bg-white/90 px-3 py-2 text-[0.625rem] font-black uppercase tracking-industrial">
              Product render / dummy asset
            </p>
          </div>

          <div className="flex flex-col p-6 sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.625rem] font-black uppercase tracking-industrial text-signal-500">
                {product.category}
              </p>
              <p className="flex items-center gap-1 text-xs font-bold">
                <Star
                  className="size-3.5 fill-signal-500 text-signal-500"
                  aria-hidden="true"
                />
                {product.rating.toFixed(1)}
                <span className="text-black/45">({product.reviewCount})</span>
              </p>
            </div>

            <h3 className="mt-5 font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">
              {product.name}
            </h3>
            <p className="mt-5 text-sm leading-6 text-black/65">
              {product.description}
            </p>

            <dl
              id="specs"
              className="mt-7 scroll-mt-28 border-t border-black/15"
            >
              {product.specs.slice(0, 4).map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-2 gap-4 border-b border-black/15 py-3 text-xs"
                >
                  <dt className="text-black/50">{spec.label}</dt>
                  <dd className="font-black">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div
              id="applications"
              className="scroll-mt-28 border-b border-black/15 py-5"
            >
              <p className="text-[0.625rem] font-black uppercase tracking-industrial text-black/45">
                Typical materials
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <li
                    key={material}
                    className="inline-flex items-center gap-1.5 border border-black/15 px-2.5 py-1.5 text-[0.625rem] font-black uppercase tracking-wider"
                  >
                    <Check
                      className="size-3 text-signal-500"
                      aria-hidden="true"
                    />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-7">
              <p className="text-[0.625rem] font-bold uppercase tracking-wider text-black/45">
                Starting at
              </p>
              <p className="mt-1 text-3xl font-black">
                {formatCurrency(product.price)}
                <span className="ml-2 text-xs font-bold text-black/45">
                  CAD
                </span>
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <button
                  type="button"
                  onClick={() => addToCart()}
                  className="flex min-h-12 items-center justify-center gap-2 bg-signal-500 px-5 text-xs font-black uppercase tracking-industrial text-white transition-colors hover:bg-signal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" />
                  Add to cart
                </button>
                <Link
                  href={`/product/${product.slug}`}
                  className="flex min-h-12 items-center justify-center gap-2 border border-black/20 px-5 text-xs font-black uppercase tracking-industrial transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
                >
                  Full details
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        <div
          id="how-it-works"
          className="mt-8 scroll-mt-24 border-l border-t border-black/15 md:grid md:grid-cols-3"
        >
          {content.processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-h-56 border-b border-r border-black/15 p-6"
            >
              <span className="text-xs font-black tracking-industrial text-signal-500">
                {step.number}
              </span>
              <h3 className="mt-16 font-display text-2xl font-black uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/60">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
