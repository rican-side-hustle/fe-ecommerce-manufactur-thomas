import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonStyles(variant: ButtonVariant = "primary"): string {
  return cn(
    "button-base",
    variant === "primary" && "button-primary",
    variant === "secondary" && "button-secondary",
    variant === "ghost" && "button-ghost",
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
