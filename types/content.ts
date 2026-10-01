export interface CallToAction {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  backgroundImage: string;
  videoSrc?: string;
  videoPoster?: string;
  imageAlt: string;
  stat: {
    value: string;
    label: string;
  };
}

export interface NavigationChild {
  label: string;
  description: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationChild[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  imageAlt: string;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  sku: string;
  leadTime: string;
  specs: ProductSpec[];
  materials: string[];
  compatibility?: string[];
  availability?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  summary: string;
  result: string;
  image: string;
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
}

export interface FeatureBlock {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: CallToAction;
  bullets: string[];
}

export interface TrustBadge {
  title: string;
  description: string;
  icon: "shipping" | "payment" | "support" | "warranty";
}

export interface PartnerLogo {
  name: string;
}

export interface MaterialCard {
  name: string;
  description: string;
  code: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: "feed" | "cut" | "output" | "reuse";
}

export interface SpecComparisonRow {
  label: string;
  values: string[];
}

export interface SpecComparison {
  columns: string[];
  rows: SpecComparisonRow[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface CtaBannerContent {
  eyebrow: string;
  title: string;
  description: string;
  cta: CallToAction;
}

export interface ProductConfigurationOption {
  id: string;
  label: string;
  priceDelta: number;
}

export interface ProductConfiguration {
  motor: ProductConfigurationOption[];
  blade: ProductConfigurationOption[];
  hopper: ProductConfigurationOption[];
  collection: ProductConfigurationOption[];
}

export interface MachineHotspot {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
}

export interface Application {
  slug: string;
  name: string;
  description: string;
  challenge: string;
  recommendedSetup: string;
  code: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: "Documentation" | "Article" | "Media";
  format: string;
  href: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category:
    | "Machine Demo"
    | "How It Works"
    | "Maintenance"
    | "Applications"
    | "Case Studies"
    | "Engineering";
  duration: string;
  image: string;
}

export interface FaqItem {
  id: string;
  category:
    | "General"
    | "Product"
    | "Technical"
    | "Shipping"
    | "Warranty"
    | "Maintenance"
    | "Orders";
  question: string;
  answer: string;
}

export interface HomepageStat {
  value: string;
  label: string;
}

export interface EngineeringFeature {
  number: string;
  title: string;
  description: string;
}

export interface WhyFeature {
  title: string;
  description: string;
}
