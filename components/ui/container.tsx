import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps<T extends ElementType = "div"> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
