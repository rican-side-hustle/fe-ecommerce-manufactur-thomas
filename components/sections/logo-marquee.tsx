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
          className="flex min-w-56 items-center justify-center border-r border-black/10 px-8 py-8 font-display text-sm font-black uppercase tracking-[0.14em] text-black/40 grayscale transition-colors hover:text-black sm:min-w-72 sm:py-10 sm:text-base"
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
      className="border-b border-black/10 bg-[#f7f6f2]"
    >
      <div className="border-b border-black/10 px-5 py-4 text-center sm:px-8">
        <h2
          id="customer-heading"
          className="text-[0.625rem] font-black uppercase tracking-[0.24em] text-black/45"
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
