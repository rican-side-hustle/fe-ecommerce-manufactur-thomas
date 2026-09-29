import { blogPosts, caseStudies, products } from "@/lib/dummy-data";
import type { BlogPost, CaseStudy, Product } from "@/types/content";

// Replace these typed mock functions with REST or GraphQL requests when the CMS is connected.
export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(products);
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return Promise.resolve(products.find((product) => product.slug === slug));
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return Promise.resolve(caseStudies);
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | undefined> {
  return Promise.resolve(caseStudies.find((study) => study.slug === slug));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return Promise.resolve(blogPosts);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}
