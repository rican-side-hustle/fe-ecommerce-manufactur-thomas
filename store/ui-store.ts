import { create } from "zustand";

interface UiState {
  isMobileNavOpen: boolean;
  isCartOpen: boolean;
  cartCount: number;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (quantity?: number) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileNavOpen: false,
  isCartOpen: false,
  cartCount: 0,
  toggleMobileNav: () =>
    set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  openCart: () => set({ isCartOpen: true, isMobileNavOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  addToCart: (quantity = 1) =>
    set((state) => ({
      cartCount: state.cartCount + quantity,
      isCartOpen: true,
      isMobileNavOpen: false,
    })),
}));
