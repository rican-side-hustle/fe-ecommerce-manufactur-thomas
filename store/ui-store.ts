import { create } from "zustand";

import type { Product } from "@/types/content";

export interface CartLine {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  price: number;
  quantity: number;
  configuration?: string[];
}

type CartProduct = Pick<
  Product,
  "id" | "slug" | "name" | "image" | "imageAlt" | "price"
>;

interface UiState {
  isMobileNavOpen: boolean;
  isCartOpen: boolean;
  cartItems: CartLine[];
  cartCount: number;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (
    product: CartProduct,
    quantity?: number,
    configuration?: string[],
  ) => void;
  updateCartQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
}

const getCartCount = (items: CartLine[]) =>
  items.reduce((total, item) => total + item.quantity, 0);

export const useUiStore = create<UiState>((set) => ({
  isMobileNavOpen: false,
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  toggleMobileNav: () =>
    set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  openCart: () => set({ isCartOpen: true, isMobileNavOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  addToCart: (product, quantity = 1, configuration = []) =>
    set((state) => {
      const key = `${product.id}:${configuration.join("|")}`;
      const existing = state.cartItems.find((item) => item.key === key);
      const cartItems = existing
        ? state.cartItems.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [
            ...state.cartItems,
            {
              key,
              productId: product.id,
              slug: product.slug,
              name: product.name,
              image: product.image,
              imageAlt: product.imageAlt,
              price: product.price,
              quantity,
              configuration,
            },
          ];

      return {
        cartItems,
        cartCount: getCartCount(cartItems),
        isCartOpen: true,
        isMobileNavOpen: false,
      };
    }),
  updateCartQuantity: (key, quantity) =>
    set((state) => {
      const cartItems =
        quantity <= 0
          ? state.cartItems.filter((item) => item.key !== key)
          : state.cartItems.map((item) =>
              item.key === key ? { ...item, quantity } : item,
            );
      return { cartItems, cartCount: getCartCount(cartItems) };
    }),
  removeFromCart: (key) =>
    set((state) => {
      const cartItems = state.cartItems.filter((item) => item.key !== key);
      return { cartItems, cartCount: getCartCount(cartItems) };
    }),
  clearCart: () => set({ cartItems: [], cartCount: 0 }),
}));
