import { Container } from "@/components/ui/container";
import type { HomepageStat } from "@/types/content";

interface ProductStatsProps {
  stats: HomepageStat[];
}

export function ProductStats({ stats }: ProductStatsProps) {
  return (
    <section
      aria-label="Key machine specifications"
      className="border-b border-surface-200 bg-surface-100 text-fg"
    >
      <Container className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-5 py-8 text-center sm:px-8 sm:py-10"
          >
            <p className="font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium text-steel-300">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
