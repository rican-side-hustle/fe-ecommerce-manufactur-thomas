"use client";

import { useState } from "react";
import Image from "next/image";
import { Crosshair, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import type { MachineHotspot } from "@/types/content";

interface MachineAnatomyProps {
  hotspots: MachineHotspot[];
  image: string;
  imageAlt: string;
}

export function MachineAnatomy({
  hotspots,
  image,
  imageAlt,
}: MachineAnatomyProps) {
  const [activeId, setActiveId] = useState(hotspots[0]?.id ?? "");
  const active = hotspots.find((hotspot) => hotspot.id === activeId);

  return (
    <section className="border-b border-surface-200 bg-surface-50 py-20 text-fg sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-normal text-signal-600">
              Machine anatomy
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              Engineered from the inside out.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-steel-300 lg:justify-self-end">
            Select a hotspot to inspect the systems that turn a compact
            footprint into controlled industrial reduction.
          </p>
        </div>
        <div className="relative mt-12 min-h-[34rem] overflow-hidden border border-surface-200 bg-surface-100 sm:min-h-[45rem]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              type="button"
              onClick={() => setActiveId(hotspot.id)}
              aria-label={`Inspect ${hotspot.label}`}
              aria-pressed={activeId === hotspot.id}
              className={`absolute z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 ${activeId === hotspot.id ? "border-signal-500 bg-signal-500 text-ink-950" : "border-ink-900/20 bg-white/85 text-fg"}`}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              {activeId === hotspot.id ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Crosshair className="size-4" aria-hidden="true" />
              )}
            </button>
          ))}
          <AnimatePresence mode="wait">
            {active && (
              <motion.aside
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute bottom-4 left-4 right-4 z-20 max-w-md border border-surface-200 bg-white/95 p-6 text-fg backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto"
                aria-live="polite"
              >
                <p className="text-xs font-medium tracking-normal text-signal-600">
                  System / {active.id}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium normal-case">
                  {active.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel-300">
                  {active.description}
                </p>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
