import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="bg-surface-50">
      <header className="border-b border-surface-200 py-16 sm:py-24">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-normal text-steel-300 hover:text-fg"
          >
            <ArrowLeft className="size-3" aria-hidden="true" /> Journal
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="text-xs font-medium tracking-normal text-signal-600">
                {post.category} · {post.readingTime}
              </p>
              <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-fg sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-300">
                {post.excerpt}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </header>
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-7 text-base leading-8 text-steel-300">
          <p className="text-xl leading-9 text-fg">
            Material recovery starts by defining what the next process actually
            needs. A shredder does not create one universal output; cutter
            geometry, screen size, shaft speed, and feedstock all shape the
            result.
          </p>
          <h2 className="pt-6 font-display text-3xl font-medium text-fg">
            Start with the next step
          </h2>
          <p>
            If the material is moving into an extruder, clean and consistent
            flake matters more than raw throughput. If the goal is transport or
            storage, a larger first-pass shred can reduce volume with less
            energy and fewer fines.
          </p>
          <p>
            Run representative samples before committing to a cutter
            configuration. Mixed polymers, embedded fasteners, moisture, and
            part wall thickness can all change machine behavior.
          </p>
          <div className="border-l-2 border-signal-400 bg-surface-100 p-6 text-lg leading-8 text-fg">
            The best shred size is not the smallest one. It is the size that
            makes the next operation reliable.
          </div>
          <h2 className="pt-6 font-display text-3xl font-medium text-fg">
            Design for repeatability
          </h2>
          <p>
            Document feed preparation, batch mass, processing time, and output
            distribution. A simple repeatable procedure turns shredding from an
            ad-hoc waste task into a measurable production process.
          </p>
        </div>
      </Container>
    </article>
  );
}
