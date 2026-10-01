"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { CartDrawer } from "@/components/ui/cart-drawer";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type { NavigationItem } from "@/types/content";

interface NavbarProps {
  items: NavigationItem[];
}

function BrandMark() {
  return (
    <Link
      href="/"
      aria-label="ShredX Industrial home"
      className="group inline-flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
    >
      <span className="grid size-9 grid-cols-2 gap-0.5 rounded-lg bg-signal-500 p-2">
        <span className="rounded-sm bg-fg" />
        <span className="rounded-sm bg-fg" />
        <span className="rounded-sm bg-fg" />
        <span className="bg-transparent" />
      </span>
      <span className="font-display text-base font-semibold leading-none tracking-[-0.03em] text-steel-100">
        ShredX
        <span className="block text-[0.625rem] font-medium tracking-[0.08em] text-steel-100/60">
          Industrial
        </span>
      </span>
    </Link>
  );
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const {
    isMobileNavOpen,
    isCartOpen,
    cartCount,
    toggleMobileNav,
    closeMobileNav,
    openCart,
    closeCart,
  } = useUiStore();
  const hasOverlay = isMobileNavOpen || isCartOpen;

  useEffect(() => {
    closeMobileNav();
  }, [pathname, closeMobileNav]);

  useEffect(() => {
    if (!hasOverlay) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileNav();
        closeCart();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeCart, closeMobileNav, hasOverlay]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-800 bg-ink-900/95 shadow-[0_8px_24px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="bg-surface-100 text-fg">
          <Container className="flex min-h-9 items-center justify-center gap-5 py-1 text-center text-xs font-medium tracking-normal sm:justify-between">
            <Link href="/machines/shredx-m20" className="hover:underline">
              Introducing the new SHREDX M20 → Explore the machine
            </Link>
            <Link
              href="/contact"
              className="hidden items-center gap-1 border-b border-transparent hover:border-fg sm:flex"
            >
              Questions? Contact us
              <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </Container>
        </div>
        <div>
          <Container className="flex h-20 items-center justify-between gap-4 xl:gap-7">
            <BrandMark />

            <nav aria-label="Primary navigation" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {items.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <li key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-11 items-center gap-1.5 px-2 text-sm font-medium text-steel-100 transition-colors hover:text-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400",
                          isActive && "text-signal-300",
                        )}
                      >
                        {item.label}
                        {item.children && (
                          <ChevronDown
                            className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                            aria-hidden="true"
                          />
                        )}
                      </Link>

                      {item.children && (
                        <div className="invisible absolute left-0 top-full w-[31rem] translate-y-2 rounded-xl border border-surface-200 bg-surface-100 p-2 opacity-0 shadow-2xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="border border-surface-200 bg-surface-50 p-3">
                            <p className="px-3 pb-3 pt-1 text-xs font-medium tracking-normal text-steel-500">
                              Explore ShredX
                            </p>
                            <ul>
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="group/link flex items-center justify-between gap-5 border-t border-surface-200 px-3 py-4 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
                                  >
                                    <span>
                                      <span className="block text-sm font-semibold tracking-normal text-fg">
                                        {child.label}
                                      </span>
                                      <span className="mt-1 block text-xs leading-5 text-steel-300">
                                        {child.description}
                                      </span>
                                    </span>
                                    <ArrowRight
                                      className="size-4 shrink-0 text-signal-400 transition-transform group-hover/link:translate-x-1"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/search" aria-label="Search" className="icon-button">
                <Search className="size-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart with ${cartCount} items`}
                className="icon-button relative"
              >
                <ShoppingBag className="size-4" aria-hidden="true" />
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-warning text-xs font-bold text-ink-950">
                  {cartCount}
                </span>
              </button>
              <Link
                href="/contact"
                className="button-base button-primary hidden min-h-11 items-center justify-center xl:flex"
              >
                Contact Sales
              </Link>
              <button
                type="button"
                onClick={toggleMobileNav}
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
                className="icon-button xl:hidden"
              >
                {isMobileNavOpen ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Menu className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </Container>
        </div>

        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-x-0 top-full max-h-[calc(100svh-7.25rem)] overflow-y-auto border-b border-surface-200 bg-surface-50 xl:hidden"
            >
              <Container className="py-5">
                <ul className="divide-y divide-surface-200 border-y border-surface-200">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileNav}
                        className="flex items-center justify-between py-5 font-display text-2xl font-medium tracking-tight text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
                      >
                        {item.label}
                        <ArrowRight
                          className="size-5 text-signal-400"
                          aria-hidden="true"
                        />
                      </Link>
                      {item.children && (
                        <ul className="-mt-2 grid gap-1 pb-4 sm:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block border-l border-surface-200 py-2 pl-4 text-xs font-medium tracking-normal text-steel-300 hover:border-signal-400 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  onClick={closeMobileNav}
                  className="button-base button-primary mt-6 flex w-full"
                >
                  Contact Sales{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <div className="h-[7.25rem]" aria-hidden="true" />

      <CartDrawer />
    </>
  );
}
