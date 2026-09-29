import type { Metadata } from "next";

import { BlogPreview } from "@/components/sections/blog-preview";
import { PageShell } from "@/components/ui/page-shell";
import { blogPosts } from "@/lib/dummy-data";

export const metadata: Metadata = { title: "Journal" };

export default function BlogPage() {
  return (
    <>
      <PageShell
        eyebrow="The journal"
        title="Shredding, sorting, and closing material loops."
        description="Practical process guides, cutter engineering notes, and field reports for teams turning workshop waste back into useful stock."
      />
      <BlogPreview posts={blogPosts} title="Latest from the workshop." />
    </>
  );
}
