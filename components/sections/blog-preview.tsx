import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { BlogPost } from "@/types/content";

interface BlogPreviewProps {
  posts: BlogPost[];
  title: string;
  contained?: boolean;
}

export function BlogPreview({
  posts,
  title,
  contained = true,
}: BlogPreviewProps) {
  const content = (
    <>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Field notes
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-4xl">
            {title}
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden items-center gap-2 text-xs font-medium tracking-normal text-fg hover:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 sm:flex"
        >
          All articles <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-2xl border border-surface-200 bg-surface-100"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="relative block aspect-[4/3] overflow-hidden bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-400"
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-medium tracking-normal">
                <span className="text-signal-600">{post.category}</span>
                <span className="text-steel-500">{post.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium leading-[1.02] text-fg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel-300">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  return (
    <section className="border-b border-surface-200 bg-surface-100 py-20 sm:py-28">
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
