import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-surface-200 bg-surface-100 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)]",
        className,
      )}
      {...props}
    />
  );
}
