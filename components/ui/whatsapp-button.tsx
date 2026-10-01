"use client";

import { useUiStore } from "@/store/ui-store";

interface WhatsAppButtonProps {
  phone?: string;
}

export function WhatsAppButton({
  phone = "6280000000000",
}: WhatsAppButtonProps) {
  const isOverlayOpen = useUiStore(
    (state) => state.isCartOpen || state.isMobileNavOpen,
  );
  const number = phone.replace(/\D/g, "") || "6280000000000";
  const message = "Hi SHREDX, I'd like to speak with customer service.";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  if (isOverlayOpen) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact customer service on WhatsApp"
      title="Chat with customer service"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 inline-flex min-h-14 min-w-14 items-center justify-center gap-3 rounded-full bg-[#128c4a] px-4 text-white shadow-[0_4px_20px_rgba(18,140,74,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0e743d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-4 motion-reduce:transform-none sm:right-7 sm:px-5"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-7 shrink-0"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.49 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.6 5.96L.04 24l6.25-1.64a11.92 11.92 0 0 0 5.78 1.47h.01C18.66 23.83 24 18.48 24 11.9a11.84 11.84 0 0 0-3.48-8.42ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9a9.82 9.82 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.87-9.91 9.87Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </a>
  );
}
