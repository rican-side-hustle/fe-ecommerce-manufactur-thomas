"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  PackageOpen,
  ShoppingBag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type { NavigationItem } from "@/types/content";

interface NavbarProps {
  items: NavigationItem[];
}

function BrandMark({ dark }: { dark: boolean }) {
  return (
    <Link
      href="/"
      aria-label="ShredX Industrial home"
      className="group inline-flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
    >
      <span className="grid size-9 grid-cols-2 gap-0.5 border border-signal-400 p-1.5 transition-transform duration-300 group-hover:rotate-45">
        <span className="bg-signal-400" />
        <span className="bg-signal-400" />
        <span className="bg-signal-400" />
        <span className="bg-transparent" />
      </span>
      <span
        className={cn(
          "font-display text-base font-black uppercase leading-none tracking-[-0.02em] transition-colors",
          dark ? "text-ink-950" : "text-white",
        )}
      >
        ShredX
        <span
          className={cn(
            "block text-[0.625rem] tracking-[0.27em] transition-colors",
            dark ? "text-ink-700" : "text-steel-300",
          )}
        >
          Industrial
        </span>
      </span>
    </Link>
  );
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
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
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !isMobileNavOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          isTransparent ? "border-white/10" : "border-black/10",
        )}
      >
        <div className="bg-signal-500 text-white">
          <Container className="flex min-h-9 items-center justify-center gap-5 py-1 text-center text-[0.625rem] font-black uppercase tracking-[0.16em] sm:justify-between">
            <p>New · ShredX Mini DS-200 now available for preorder</p>
            <Link
              href="/contact"
              className="hidden items-center gap-1 border-b border-white/60 hover:border-white sm:flex"
            >
              Questions? Contact us
              <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </Container>
        </div>
        <div
          className={cn(
            "transition-colors duration-300",
            isTransparent
              ? "bg-transparent"
              : "bg-[#f7f6f2]/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl",
          )}
        >
          <Container className="flex h-20 items-center justify-between gap-8">
            <BrandMark dark={!isTransparent} />

            <nav aria-label="Primary navigation" className="hidden lg:block">
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
                          "flex min-h-11 items-center gap-1.5 px-3 text-[0.6875rem] font-black uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400",
                          isTransparent
                            ? "text-white/80 hover:text-white"
                            : "text-ink-800 hover:text-black",
                          isActive && "text-signal-500",
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
                        <div className="invisible absolute left-0 top-full w-[31rem] translate-y-2 border border-white/10 bg-ink-900 p-2 opacity-0 shadow-2xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="border border-white/10 bg-ink-950 p-3">
                            <p className="px-3 pb-3 pt-1 text-[0.625rem] font-bold uppercase tracking-industrial text-steel-500">
                              Explore ShredX
                            </p>
                            <ul>
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="group/link flex items-center justify-between gap-5 border-t border-white/10 px-3 py-4 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
                                  >
                                    <span>
                                      <span className="block text-sm font-bold uppercase tracking-wide text-white">
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
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart with ${cartCount} items`}
                className={cn(
                  "relative flex size-11 items-center justify-center border transition-colors hover:border-signal-400 hover:text-signal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400",
                  isTransparent
                    ? "border-white/20 text-white"
                    : "border-black/15 text-ink-950",
                )}
              >
                <ShoppingBag className="size-4" aria-hidden="true" />
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center bg-signal-400 text-[0.625rem] font-black text-ink-950">
                  {cartCount}
                </span>
              </button>
              <button
                type="button"
                onClick={toggleMobileNav}
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
                className={cn(
                  "flex size-11 items-center justify-center border transition-colors hover:border-signal-400 hover:text-signal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 lg:hidden",
                  isTransparent
                    ? "border-white/20 text-white"
                    : "border-black/15 text-ink-950",
                )}
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
              className="absolute inset-x-0 top-full max-h-[calc(100svh-7.25rem)] overflow-y-auto border-b border-white/10 bg-ink-950 lg:hidden"
            >
              <Container className="py-5">
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileNav}
                        className="flex items-center justify-between py-5 font-display text-2xl font-black uppercase tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
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
                                className="block border-l border-white/15 py-2 pl-4 text-xs font-bold uppercase tracking-wider text-steel-300 hover:border-signal-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
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
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      {!isHome && <div className="h-[7.25rem]" aria-hidden="true" />}

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
              className="fixed inset-0 z-[60] cursor-default bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-white/10 bg-ink-900 shadow-2xl"
            >
              <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                <div>
                  <p className="text-[0.625rem] font-bold uppercase tracking-industrial text-signal-300">
                    Your selection
                  </p>
                  <h2
                    id="cart-title"
                    className="font-display text-2xl font-black uppercase text-white"
                  >
                    Cart ({cartCount})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="flex size-11 items-center justify-center border border-white/15 text-white hover:border-signal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="flex size-16 items-center justify-center border border-white/10 bg-ink-950 text-steel-500">
                  <PackageOpen className="size-7" aria-hidden="true" />
                </span>
                <p className="mt-6 font-display text-2xl font-black uppercase text-white">
                  {cartCount > 0
                    ? "Added to your cart"
                    : "Start a material loop"}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-steel-300">
                  {cartCount > 0
                    ? `${cartCount} item${cartCount === 1 ? "" : "s"} selected. Checkout will connect to the commerce backend in a later pass.`
                    : "Your cart is empty. Explore compact shredders, cutter sets, and service parts."}
                </p>
                <Link
                  href={cartCount > 0 ? "/contact" : "/products"}
                  onClick={closeCart}
                  className="mt-7 border-b border-signal-400 pb-1 text-xs font-bold uppercase tracking-industrial text-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                >
                  {cartCount > 0 ? "Request checkout" : "Explore products"}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
