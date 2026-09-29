import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ProductShowcase } from "@/components/sections/product-showcase";
import {
  homeHero,
  partnerLogos,
  productShowcase,
  products,
} from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <>
      <Hero content={homeHero} />
      <LogoMarquee logos={partnerLogos} />
      <ProductShowcase product={products[0]} content={productShowcase} />
    </>
  );
}
