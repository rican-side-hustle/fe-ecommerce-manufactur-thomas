import type { PartnerLogo } from "@/types/content";

interface LogoMarqueeProps {
  logos: PartnerLogo[];
}

function LogoSet({
  logos,
  hidden = false,
}: {
  logos: PartnerLogo[];
  hidden?: boolean;
}) {
  return (
    <ul aria-hidden={hidden} className="flex min-w-max shrink-0 items-center">
      {logos.map((logo) => (
        <li
          key={`${hidden ? "duplicate-" : ""}${logo.name}`}
          className="flex min-w-56 items-center justify-center px-8 py-8 font-display text-sm font-medium tracking-normal text-muted grayscale transition-colors hover:text-fg sm:min-w-72 sm:py-10 sm:text-base"
        >
          {logo.name}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  return (
    <section
      aria-labelledby="customer-heading"
      className="border-b border-surface-200 bg-surface-50"
    >
      <div className="px-5 py-4 text-center sm:px-8">
        <h2
          id="customer-heading"
          className="text-xs font-medium tracking-normal text-steel-500"
        >
          Our customers
        </h2>
      </div>
      <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoSet logos={logos} />
          <LogoSet logos={logos} hidden />
        </div>
      </div>
    </section>
  );
}
