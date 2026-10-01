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
      className="scroll-mt-20 border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28"
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
            <p className="text-xs font-medium tracking-normal text-signal-600">
              {content.eyebrow}
            </p>
            <h2
              id="showcase-title"
              className="mt-4 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl"
            >
              {content.title}
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-base leading-7 text-steel-300 lg:justify-self-end"
          >
            {content.description}
          </motion.p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid overflow-hidden border border-surface-200 bg-surface-100 lg:grid-cols-[1.15fr_.85fr]"
        >
          <div className="relative min-h-[28rem] overflow-hidden bg-surface-100 sm:min-h-[38rem]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              {product.badge && <Badge>{product.badge}</Badge>}
              <Badge className="border-surface-200 bg-surface-100/80 text-fg">
                Twin shaft
              </Badge>
            </div>
            <p className="absolute bottom-5 left-5 border border-surface-200 bg-surface-100/90 px-3 py-2 text-xs font-medium tracking-normal">
              Product render / dummy asset
            </p>
          </div>

          <div className="flex flex-col p-6 sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium tracking-normal text-signal-600">
                {product.category}
              </p>
              <p className="flex items-center gap-1 text-xs font-medium">
                <Star
                  className="size-3.5 fill-signal-500 text-signal-600"
                  aria-hidden="true"
                />
                {product.rating.toFixed(1)}
                <span className="text-steel-500">({product.reviewCount})</span>
              </p>
            </div>

            <h3 className="mt-5 font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              {product.name}
            </h3>
            <p className="mt-5 text-sm leading-6 text-steel-300">
              {product.description}
            </p>

            <dl
              id="specs"
              className="mt-7 scroll-mt-28 border-t border-surface-200"
            >
              {product.specs.slice(0, 4).map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-2 gap-4 border-b border-surface-200 py-3 text-xs"
                >
                  <dt className="text-steel-500">{spec.label}</dt>
                  <dd className="font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div
              id="applications"
              className="scroll-mt-28 border-b border-surface-200 py-5"
            >
              <p className="text-xs font-medium tracking-normal text-steel-500">
                Typical materials
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <li
                    key={material}
                    className="inline-flex items-center gap-1.5 border border-surface-200 px-2.5 py-1.5 text-xs font-medium tracking-normal"
                  >
                    <Check
                      className="size-3 text-signal-600"
                      aria-hidden="true"
                    />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-7">
              <p className="text-xs font-medium tracking-normal text-steel-500">
                Starting at
              </p>
              <p className="mt-1 text-3xl font-semibold">
                {formatCurrency(product.price)}
                <span className="ml-2 text-xs font-medium text-steel-500">
                  CAD
                </span>
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="button-base button-primary flex min-h-12 items-center justify-center gap-2"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" />
                  Add to cart
                </button>
                <Link
                  href={`/product/${product.slug}`}
                  className="button-base button-secondary flex min-h-12 items-center justify-center gap-2"
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
          className="mt-8 scroll-mt-24 border-l border-t border-surface-200 md:grid md:grid-cols-3"
        >
          {content.processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-h-56 border-b border-r border-surface-200 p-6"
            >
              <span className="text-xs font-medium tracking-normal text-signal-600">
                {step.number}
              </span>
              <h3 className="mt-16 font-display text-2xl font-medium normal-case">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-steel-300">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
