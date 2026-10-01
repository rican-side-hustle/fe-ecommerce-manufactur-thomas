import {
  CreditCard,
  Headphones,
  PackageCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import type { TrustBadge } from "@/types/content";

interface TrustBadgesProps {
  badges: TrustBadge[];
}

const icons: Record<TrustBadge["icon"], LucideIcon> = {
  shipping: PackageCheck,
  payment: CreditCard,
  support: Headphones,
  warranty: ShieldCheck,
};

export function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <section
      aria-label="Purchase benefits"
      className="border-b border-surface-200 bg-surface-50 text-fg"
    >
      <Container className="grid divide-y divide-surface-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {badges.map((badge) => {
          const Icon = icons[badge.icon];
          return (
            <div
              key={badge.title}
              className="flex gap-4 px-1 py-7 sm:px-6 lg:px-7"
            >
              <Icon
                className="mt-0.5 size-5 shrink-0"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <div>
                <h2 className="text-xs font-medium tracking-normal">
                  {badge.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-steel-300">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
