"use client";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/lib/api";

export const productQueryKeys = {
  all: ["products"] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productQueryKeys.all,
    queryFn: getProducts,
  });
}
