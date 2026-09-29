import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonStyles(variant: ButtonVariant = "primary"): string {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border px-6 text-xs font-bold uppercase tracking-industrial transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "border-signal-400 bg-signal-400 text-ink-950 hover:border-signal-300 hover:bg-signal-300",
    variant === "secondary" &&
      "border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/10",
    variant === "ghost" &&
      "border-transparent bg-transparent text-white hover:border-white/20 hover:bg-white/5",
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles(variant), className)}
      {...props}
    />
  );
}
