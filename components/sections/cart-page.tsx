"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";

export function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart, clearCart } =
    useUiStore();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-[70svh] bg-surface-50 py-16 text-fg sm:py-24">
      <Container>
        <p className="text-xs font-medium tracking-normal text-signal-600">
          Ecommerce UI
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-none tracking-[-0.035em] sm:text-4xl">
          Your cart.
        </h1>
        {cartItems.length === 0 ? (
          <div className="mt-12 flex min-h-80 flex-col items-center justify-center border border-surface-200 bg-surface-100 text-center">
            <ShoppingBag className="size-8 text-muted" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-medium normal-case">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-steel-500">
              Explore machines, accessories, and replacement parts.
            </p>
            <Link href="/products" className="button-base button-primary mt-6">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-start">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.key}
                  className="grid gap-5 border border-surface-200 bg-surface-100 p-4 sm:grid-cols-[9rem_1fr]"
                >
                  <div className="relative aspect-square bg-surface-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-medium normal-case">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-sm text-steel-500">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="self-start text-steel-500 hover:text-signal-600"
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                    {item.configuration && item.configuration.length > 0 && (
                      <p className="mt-3 text-xs leading-5 text-steel-500">
                        {item.configuration.join(" · ")}
                      </p>
                    )}
                    <div className="mt-auto flex items-end justify-between pt-5">
                      <div className="inline-flex border border-surface-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(item.key, item.quantity - 1)
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                          className="flex size-10 items-center justify-center"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="flex min-w-10 items-center justify-center border-x border-surface-200 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(item.key, item.quantity + 1)
                          }
                          aria-label={`Increase ${item.name} quantity`}
                          className="flex size-10 items-center justify-center"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <strong>
                        {formatCurrency(item.price * item.quantity)}
                      </strong>
                    </div>
                  </div>
                </article>
              ))}
              <button
                type="button"
                onClick={clearCart}
                className="text-xs font-medium tracking-normal text-steel-500 hover:text-signal-600"
              >
                Clear cart
              </button>
            </div>
            <aside className="border border-surface-200 bg-surface-100 p-6 lg:sticky lg:top-36">
              <h2 className="font-display text-2xl font-medium normal-case">
                Summary
              </h2>
              <div className="mt-6 flex justify-between border-y border-surface-200 py-5 text-sm">
                <span>Subtotal</span>
                <strong className="text-xl">{formatCurrency(subtotal)}</strong>
              </div>
              <p className="mt-4 text-xs leading-5 text-steel-500">
                This is a frontend-only cart. Tax, freight, installation, and
                payment are not processed.
              </p>
              <button
                type="button"
                className="button-base button-primary mt-6 flex min-h-12 w-full items-center justify-center"
              >
                Continue to checkout
              </button>
              <Link
                href="/contact"
                className="button-base button-secondary mt-2 flex min-h-12 items-center justify-center"
              >
                Request industrial quote
              </Link>
            </aside>
          </div>
        )}
      </Container>
    </section>
  );
}
