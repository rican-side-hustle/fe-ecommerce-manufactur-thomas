import { ApplicationsGrid } from "@/components/sections/applications-grid";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { MachineAnatomy } from "@/components/sections/machine-anatomy";
import { MachineOverview } from "@/components/sections/machine-overview";
import { MaterialsGrid } from "@/components/sections/materials-grid";
import { ProductConfigurator } from "@/components/sections/product-configurator";
import { ProductStats } from "@/components/sections/product-stats";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { SpecTable } from "@/components/sections/spec-table";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBadges } from "@/components/sections/trust-badges";
import { WhyShredx } from "@/components/sections/why-shredx";
import {
  applications,
  blogPosts,
  caseStudies,
  ctaBanner,
  engineeringFeatures,
  homepageStats,
  homeHero,
  howItWorksSteps,
  machineHotspots,
  materials,
  partnerLogos,
  productConfiguration,
  products,
  testimonials,
  trustBadges,
  whyFeatures,
} from "@/lib/dummy-data";

export default function HomePage() {
  const machine = products[0];

  return (
    <>
      <Hero content={homeHero} />
      <ProductStats stats={homepageStats} />
      <LogoMarquee logos={partnerLogos} />
      <ProductCarousel
        products={products.slice(0, 3)}
        eyebrow="Find your fit"
        title="Make room for more possibilities."
        description="Explore compact machines and the tools that keep your workshop moving."
      />
      <MachineOverview product={machine} />
      <MachineAnatomy
        hotspots={machineHotspots}
        image={machine.image}
        imageAlt={machine.imageAlt}
      />
      <MaterialsGrid materials={materials} />
      <HowItWorks steps={howItWorksSteps} />
      <EngineeringSection
        features={engineeringFeatures}
        image="/images/blade-kit.svg"
      />
      <ProductConfigurator
        product={machine}
        configuration={productConfiguration}
      />
      <ApplicationsGrid applications={applications} compact />
      <CaseStudyGrid studies={caseStudies} title="See SHREDX in action." />
      <SpecTable specifications={machine.specs} />
      <WhyShredx features={whyFeatures} />
      <Testimonials testimonials={testimonials} />
      <BlogPreview
        posts={blogPosts}
        title="Engineering notes and material guides."
      />
      <TrustBadges badges={trustBadges} />
      <CtaBanner content={ctaBanner} />
    </>
  );
}
