import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-signal-400/40 bg-signal-400/10 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-industrial text-signal-300",
        className,
      )}
      {...props}
    />
  );
}
