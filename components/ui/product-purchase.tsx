"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

import { useUiStore } from "@/store/ui-store";

interface ProductPurchaseProps {
  inStock: boolean;
  leadTime: string;
}

export function ProductPurchase({ inStock, leadTime }: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useUiStore((state) => state.addToCart);

  return (
    <div className="mt-8 border-t border-white/10 pt-7">
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
        <span
          className={`size-2 rounded-full ${inStock ? "bg-emerald-400" : "bg-signal-400"}`}
          aria-hidden="true"
        />
        <span className="text-white">
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
          className="h-[3.25rem] w-20 border border-white/20 bg-ink-950 px-3 text-sm font-bold text-white outline-none focus:border-signal-400"
        >
          {[1, 2, 3, 4].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => addToCart(quantity)}
          className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 bg-signal-400 px-5 text-xs font-black uppercase tracking-industrial text-ink-950 transition-colors hover:bg-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <ShoppingBag className="size-4" aria-hidden="true" /> Add to cart
        </button>
      </div>
      <Link
        href="/contact"
        className="mt-3 flex h-[3.25rem] items-center justify-center gap-2 border border-white/20 text-xs font-bold uppercase tracking-industrial text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
      >
        Request a formal quote{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
