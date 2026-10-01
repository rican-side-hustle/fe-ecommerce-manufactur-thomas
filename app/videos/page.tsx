import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";

import { PageShell } from "@/components/ui/page-shell";
import { videos } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Videos" };

export default function VideosPage() {
  return (
    <PageShell
      eyebrow="Video library"
      title="See the machine, process, and maintenance in motion."
      description="Dummy video cards demonstrate the intended media-library UI without connecting a real player or video backend."
    >
      <div className="mt-10 flex flex-wrap gap-2">
        {[
          "All",
          "Machine Demo",
          "How It Works",
          "Maintenance",
          "Applications",
          "Engineering",
        ].map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`border px-4 py-2 text-[0.625rem] font-medium uppercase tracking-wider ${index === 0 ? "border-signal-400 bg-signal-400 text-ink-950" : "border-surface-200 text-steel-300"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group border border-surface-200 bg-surface-100"
          >
            <button
              type="button"
              aria-label={`Play ${video.title}`}
              className="relative block aspect-video w-full overflow-hidden bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
            >
              <Image
                src={video.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink-950/20" />
              <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-signal-500 text-ink-950">
                <Play className="ml-1 size-5 fill-current" aria-hidden="true" />
              </span>
              <span className="absolute bottom-3 right-3 bg-ink-950/80 px-2 py-1 text-xs font-medium text-steel-100">
                {video.duration}
              </span>
            </button>
            <div className="p-5">
              <p className="text-xs font-medium tracking-normal text-signal-600">
                {video.category}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium text-fg">
                {video.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
