"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, PackageOpen, Plus, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { formatCurrency } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";

export function CartDrawer() {
  const {
    isCartOpen,
    cartItems,
    cartCount,
    closeCart,
    updateCartQuantity,
    removeFromCart,
  } = useUiStore();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] cursor-default bg-ink-950/75 backdrop-blur-sm"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-surface-200 bg-surface-100 shadow-2xl"
          >
            <div className="flex h-20 items-center justify-between border-b border-surface-200 px-6">
              <div>
                <p className="text-xs font-medium tracking-normal text-signal-600">
                  Your selection
                </p>
                <h2
                  id="cart-title"
                  className="font-display text-2xl font-medium text-fg"
                >
                  Cart ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex size-11 items-center justify-center rounded-full border border-surface-200 text-fg hover:border-signal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="flex size-16 items-center justify-center border border-surface-200 bg-surface-50 text-steel-500">
                  <PackageOpen className="size-7" aria-hidden="true" />
                </span>
                <p className="mt-6 font-display text-2xl font-medium text-fg">
                  Start a material loop
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-steel-300">
                  Explore machines, accessories, cutter sets, and service parts.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="mt-7 border-b border-signal-400 pb-1 text-xs font-medium tracking-normal text-signal-600"
                >
                  Explore products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-5">
                  {cartItems.map((item) => (
                    <article
                      key={item.key}
                      className="grid grid-cols-[5.5rem_1fr] gap-4 border border-surface-200 bg-surface-50 p-3"
                    >
                      <div className="relative aspect-square overflow-hidden bg-surface-100">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="truncate text-sm font-semibold text-fg">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-xs text-steel-500">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.key)}
                            aria-label={`Remove ${item.name}`}
                            className="text-steel-500 hover:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                          >
                            <Trash2 className="size-4" aria-hidden="true" />
                          </button>
                        </div>
                        {item.configuration &&
                          item.configuration.length > 0 && (
                            <p className="mt-2 line-clamp-2 text-xs leading-4 text-steel-500">
                              {item.configuration.join(" · ")}
                            </p>
                          )}
                        <div className="mt-3 inline-flex border border-surface-200">
                          <button
                            type="button"
                            onClick={() =>
                              updateCartQuantity(item.key, item.quantity - 1)
                            }
                            aria-label={`Decrease ${item.name} quantity`}
                            className="flex size-8 items-center justify-center text-fg hover:bg-surface-200"
                          >
                            <Minus className="size-3" aria-hidden="true" />
                          </button>
                          <span className="flex min-w-8 items-center justify-center border-x border-surface-200 text-xs font-medium text-fg">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateCartQuantity(item.key, item.quantity + 1)
                            }
                            aria-label={`Increase ${item.name} quantity`}
                            className="flex size-8 items-center justify-center text-fg hover:bg-surface-200"
                          >
                            <Plus className="size-3" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="border-t border-surface-200 p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-steel-300">Subtotal</span>
                    <strong className="text-xl text-fg">
                      {formatCurrency(subtotal)}
                    </strong>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-steel-500">
                    Freight, tax, and commissioning are calculated separately.
                  </p>
                  <div className="mt-4 grid gap-2">
                    <Link
                      href="/cart"
                      onClick={closeCart}
                      className="button-base button-primary flex min-h-12 items-center justify-center"
                    >
                      View cart
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeCart}
                      className="button-base button-secondary flex min-h-12 items-center justify-center"
                    >
                      Request quote
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
