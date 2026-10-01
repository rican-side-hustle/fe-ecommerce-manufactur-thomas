"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type {
  Product,
  ProductConfiguration,
  ProductConfigurationOption,
} from "@/types/content";

interface ProductConfiguratorProps {
  product: Product;
  configuration: ProductConfiguration;
}

type SelectionKey = keyof ProductConfiguration;
type Selections = Record<SelectionKey, string>;

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: ProductConfigurationOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="border-t border-surface-200 py-5">
      <legend className="mb-3 text-xs font-medium tracking-normal text-steel-500">
        {label}
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((option) => (
          <label
            key={option.id}
            className={`relative flex min-h-12 cursor-pointer items-center justify-between rounded-xl border px-3 text-xs font-medium transition-colors focus-within:ring-2 focus-within:ring-signal-400 ${value === option.id ? "border-signal-500 bg-signal-50 text-signal-700" : "border-surface-200 hover:border-signal-300"}`}
          >
            <input
              type="radio"
              name={label}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="sr-only"
            />
            {option.label}
            {value === option.id && (
              <Check className="size-3.5" aria-hidden="true" />
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ProductConfigurator({
  product,
  configuration,
}: ProductConfiguratorProps) {
  const [selections, setSelections] = useState<Selections>({
    motor: configuration.motor[1]?.id ?? configuration.motor[0]?.id ?? "",
    blade: configuration.blade[0]?.id ?? "",
    hopper: configuration.hopper[0]?.id ?? "",
    collection: configuration.collection[0]?.id ?? "",
  });
  const addToCart = useUiStore((state) => state.addToCart);

  const selectedOptions = useMemo(
    () =>
      (Object.keys(configuration) as SelectionKey[]).map((key) =>
        configuration[key].find((option) => option.id === selections[key]),
      ),
    [configuration, selections],
  );
  const total =
    product.price +
    selectedOptions.reduce((sum, option) => sum + (option?.priceDelta ?? 0), 0);

  const updateSelection = (key: SelectionKey, value: string) => {
    setSelections((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Configure your machine
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              Set up the M20 for your material.
            </h2>
            <div className="relative mt-8 aspect-[6/5] overflow-hidden bg-surface-100">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-surface-200 bg-surface-100 p-6 shadow-sm sm:p-9">
            <div className="flex items-start justify-between gap-6 border-b border-surface-200 pb-6">
              <div>
                <p className="text-xs font-medium tracking-normal text-signal-600">
                  Machine configuration
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium normal-case">
                  {product.name}
                </h3>
              </div>
              <motion.p
                key={total}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="shrink-0 text-xl font-semibold"
              >
                {formatCurrency(total)}
              </motion.p>
            </div>

            {(Object.keys(configuration) as SelectionKey[]).map((key) => (
              <OptionGroup
                key={key}
                label={key}
                options={configuration[key]}
                value={selections[key]}
                onChange={(value) => updateSelection(key, value)}
              />
            ))}

            <div className="border-t border-surface-200 pt-6">
              <p className="text-xs font-medium tracking-normal text-steel-500">
                Configuration summary
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {selectedOptions.map(
                  (option) =>
                    option && (
                      <li
                        key={option.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check
                          className="size-4 text-signal-600"
                          aria-hidden="true"
                        />
                        {option.label}
                      </li>
                    ),
                )}
              </ul>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      { ...product, price: total },
                      1,
                      selectedOptions.flatMap((option) =>
                        option ? [option.label] : [],
                      ),
                    )
                  }
                  className="button-base button-primary flex min-h-12 items-center justify-center gap-2"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" />{" "}
                  Configure machine
                </button>
                <Link
                  href="/contact"
                  className="button-base button-secondary flex min-h-12 items-center justify-center gap-2"
                >
                  Get a quote{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-4 text-xs leading-5 text-steel-500">
                UI-only pricing. Freight, installation, voltage, and application
                testing are quoted separately.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
