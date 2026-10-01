"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

import { useUiStore } from "@/store/ui-store";
import type { Product } from "@/types/content";

interface ProductPurchaseProps {
  product: Pick<
    Product,
    "id" | "slug" | "name" | "image" | "imageAlt" | "price"
  >;
  inStock: boolean;
  leadTime: string;
}

export function ProductPurchase({
  product,
  inStock,
  leadTime,
}: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useUiStore((state) => state.addToCart);

  return (
    <div className="mt-8 border-t border-surface-200 pt-7">
      <div className="flex items-center gap-3 text-xs font-medium tracking-normal">
        <span
          className={`size-2 rounded-full ${inStock ? "bg-warning" : "bg-signal-400"}`}
          aria-hidden="true"
        />
        <span className="text-fg">
          {inStock ? "Available to order" : "Made to order"}
        </span>
        <span className="text-steel-500">· {leadTime}</span>
      </div>
      <div className="mt-5 flex gap-3">
        <label className="sr-only" htmlFor="product-quantity">
          Quantity
        </label>
        <select
          id="product-quantity"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="h-[3.25rem] w-20 rounded-lg border border-surface-200 bg-surface-50 px-3 text-sm font-semibold text-fg outline-none focus:border-signal-400"
        >
          {[1, 2, 3, 4].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => addToCart(product, quantity)}
          className="button-base button-primary flex h-[3.25rem] flex-1 items-center justify-center gap-2"
        >
          <ShoppingBag className="size-4" aria-hidden="true" /> Add to cart
        </button>
      </div>
      <Link
        href="/contact"
        className="mt-3 flex h-[3.25rem] items-center justify-center gap-2 rounded-lg border border-surface-200 text-xs font-medium tracking-normal text-fg transition-colors hover:border-signal-500 hover:bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
      >
        Request a formal quote{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
