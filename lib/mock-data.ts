import type {
  BlogPost,
  CaseStudy,
  FeatureBlock,
  CtaBannerContent,
  HeroContent,
  HowItWorksStep,
  MaterialCard,
  NavigationItem,
  PartnerLogo,
  Product,
  ProductShowcaseContent,
  SpecComparison,
  Testimonial,
  TrustBadge,
} from "@/types/content";

export const navigation: NavigationItem[] = [
  { label: "Product", href: "/product/shredx-mini-ds200" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Specs", href: "/#specs" },
  { label: "Applications", href: "/#applications" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const homeHero: HeroContent = {
  eyebrow: "Industrial power. Compact footprint.",
  title: "Turn Waste Into Value.",
  highlight: "Waste",
  description:
    "ShredX Mini DS-200 brings low-speed, high-torque double-shaft shredding to production floors, recycling cells, and material labs.",
  primaryCta: {
    label: "Shop the shredder",
    href: "/product/shredx-mini-ds200",
  },
  secondaryCta: { label: "See it in action", href: "#product-showcase" },
  backgroundImage: "/images/r2-shredder-hero.svg",
  imageAlt:
    "Technical rendering of the ShredX Mini DS-200 double-shaft industrial shredder",
  stat: { value: "180 kg/h", label: "Peak material throughput" },
};

export const productShowcase: ProductShowcaseContent = {
  eyebrow: "The machine",
  title: "Industrial reduction, sized for your floor.",
  description:
    "A complete low-speed, high-torque system with guarded feeding, automatic reversing, and serviceable D2 cutters.",
  processSteps: [
    {
      number: "01",
      title: "Feed",
      description:
        "Load sorted solid material through the guarded steel hopper.",
    },
    {
      number: "02",
      title: "Tear",
      description:
        "Counter-rotating shafts grip and shear irregular parts under torque.",
    },
    {
      number: "03",
      title: "Recover",
      description:
        "Collect consistent output for sorting, storage, or reprocessing.",
    },
  ],
};

export const products: Product[] = [
  {
    id: "product-001",
    slug: "shredx-mini-ds200",
    name: "ShredX Mini DS-200",
    category: "Benchtop machine",
    description:
      "A complete twin-shaft system for recycling 3D prints, molded parts, packaging, and light production scrap.",
    price: 3490,
    rating: 4.9,
    reviewCount: 48,
    image: "/images/r2-compact.svg",
    imageAlt: "ShredX Mini DS-200 compact benchtop twin-shaft shredder",
    inStock: true,
    featured: true,
    badge: "Best seller",
    sku: "SHX-DS200-08",
    leadTime: "Ships in 2–3 weeks",
    specs: [
      { label: "Cutting chamber", value: "220 × 180 mm" },
      { label: "Drive", value: "2.2 kW geared" },
      { label: "Blade width", value: "8 mm" },
      { label: "Machine weight", value: "94 kg" },
    ],
    materials: ["PLA / PETG", "HDPE / PP", "Wood", "Aluminum cans"],
  },
  {
    id: "product-002",
    slug: "r4-workcell-shredder",
    name: "R4 Workcell Shredder",
    category: "Production machine",
    description:
      "More torque, a larger chamber, and integrated controls for continuous recycling workflows.",
    price: 6980,
    rating: 4.8,
    reviewCount: 26,
    image: "/images/r4-workcell.svg",
    imageAlt: "ShredX R4 industrial twin-shaft workcell shredder",
    inStock: true,
    badge: "High torque",
    sku: "RDX-R4-12",
    leadTime: "Ships in 4–5 weeks",
    specs: [
      { label: "Cutting chamber", value: "320 × 260 mm" },
      { label: "Drive", value: "4 kW geared" },
      { label: "Blade width", value: "12 mm" },
      { label: "Machine weight", value: "182 kg" },
    ],
    materials: [
      "Engineering plastics",
      "Light metals",
      "E-waste shells",
      "Wood",
    ],
  },
  {
    id: "product-003",
    slug: "d2-reversible-blade-set",
    name: "D2 Reversible Blade Set",
    category: "Service part",
    description:
      "Hardened, precision-ground cutters with reversible edges for twice the service interval.",
    price: 549,
    rating: 5,
    reviewCount: 19,
    image: "/images/blade-kit.svg",
    imageAlt: "Hardened D2 tool-steel shredder blade set",
    inStock: true,
    sku: "RDX-BLD-D2",
    leadTime: "Ships in 3–5 days",
    specs: [
      { label: "Material", value: "D2 tool steel" },
      { label: "Hardness", value: "58–60 HRC" },
      { label: "Geometry", value: "Reversible" },
      { label: "Compatibility", value: "R2 / R4" },
    ],
    materials: ["R2 shafts", "R4 shafts"],
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Feed material",
    description: "Load sorted solid material through the guarded hopper.",
    icon: "feed",
  },
  {
    number: "02",
    title: "Dual-shaft crushing",
    description:
      "Low-speed cutters pull in and tear irregular parts under torque.",
    icon: "cut",
  },
  {
    number: "03",
    title: "Controlled output",
    description: "A removable screen controls the size of recovered material.",
    icon: "output",
  },
  {
    number: "04",
    title: "Reuse or recycle",
    description: "Sort the output for storage, transport, or reprocessing.",
    icon: "reuse",
  },
];

export const specComparison: SpecComparison = {
  columns: ["Standard", "ShredX Mini DS-200", "Pro"],
  rows: [
    {
      label: "Cutting chamber",
      values: ["180 × 140 mm", "220 × 180 mm", "320 × 260 mm"],
    },
    { label: "Rated drive", values: ["1.5 kW", "2.2 kW", "4.0 kW"] },
    { label: "Peak throughput", values: ["90 kg/h", "180 kg/h", "320 kg/h"] },
    { label: "Blade width", values: ["10 mm", "8 mm", "12 mm"] },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: "review-001",
    quote:
      "The DS-200 gave us an internal path for failed prints without adding another full-size production cell.",
    author: "Mara Chen",
    role: "Operations Lead, Polyform",
    rating: 5,
  },
  {
    id: "review-002",
    quote:
      "The torque and automatic reverse cycle handle our mixed rigid-plastic stream reliably.",
    author: "Elias Ward",
    role: "Materials Engineer",
    rating: 5,
  },
];

export const ctaBanner: CtaBannerContent = {
  eyebrow: "Build a smaller material loop",
  title: "Ready to shred smarter?",
  description:
    "Tell us what you process and we’ll help configure the right cutter, screen, and drive.",
  cta: { label: "Request a quote", href: "/contact" },
};

export const featureBlocks: FeatureBlock[] = [
  {
    eyebrow: "The cutting system",
    title: "Two shafts. No easy way out.",
    description:
      "Counter-rotating cutters grab irregular parts from both sides, pulling material into the chamber instead of bouncing it across the hopper.",
    image: "/images/blade-kit.svg",
    imageAlt: "Close technical rendering of a hardened shredder cutter",
    cta: { label: "See the engineering", href: "/product/shredx-mini-ds200" },
    bullets: [
      "Hardened and reversible D2 tool-steel cutters",
      "Automatic reverse cycle clears overloads",
      "Tool-free screen changes tune output size",
    ],
  },
  {
    eyebrow: "A smaller material loop",
    title: "Keep useful material in motion.",
    description:
      "Reduce bulky scrap into consistent flakes that are easier to sort, store, transport, extrude, or send back into your production process.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Sorted plastic material ready to be recycled",
    cta: { label: "Explore applications", href: "/case-studies" },
    bullets: [
      "Recover failed prints and molding runners",
      "Reduce waste volume at the source",
      "Build closed-loop material experiments",
    ],
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "NORTHSTAR LABS" },
  { name: "POLYFORM" },
  { name: "MAKER COMMONS" },
  { name: "CIRCULAR / 01" },
  { name: "HATCH WORKS" },
  { name: "APPLIED MATTER" },
];

export const materials: MaterialCard[] = [
  {
    name: "Rigid plastics",
    description: "PLA, ABS, PETG, HDPE, PP",
    code: "01",
  },
  {
    name: "Light metals",
    description: "Cans, thin sheet, soft aluminum",
    code: "02",
  },
  {
    name: "Organic stock",
    description: "Wood, cork, dense cardboard",
    code: "03",
  },
  {
    name: "Production scrap",
    description: "Sprues, runners, shells, offcuts",
    code: "04",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-001",
    slug: "polyform-print-farm",
    title: "From failed prints to usable feedstock in one room",
    client: "Polyform Print Farm",
    summary:
      "An R2 beside the print floor lets the team process supports and failed parts before they leave the facility.",
    result: "71% less plastic sent off-site",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Additive manufacturing workshop with rows of machines",
  },
  {
    id: "case-002",
    slug: "circular-materials-lab",
    title: "A visible recycling loop for the next generation",
    client: "Circular Materials Lab",
    summary:
      "Students shred, classify, and reprocess common polymers in a safe, instrumented teaching workflow.",
    result: "14 material trials per semester",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Engineering students working together in a materials laboratory",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-001",
    slug: "choosing-the-right-shred-size",
    title: "Choosing the right shred size for your next process",
    excerpt:
      "How cutter width, screen geometry, and material behavior affect what comes out of the chamber.",
    category: "Process guide",
    publishedAt: "2026-08-18",
    readingTime: "7 min read",
    image: "/images/blade-kit.svg",
    imageAlt: "Technical rendering of a shredder cutting blade",
  },
  {
    id: "post-002",
    slug: "closing-the-loop-on-3d-print-waste",
    title: "Closing the loop on 3D print waste",
    excerpt:
      "A practical look at sorting, shredding, drying, and re-extruding common desktop printing polymers.",
    category: "Material loop",
    publishedAt: "2026-07-29",
    readingTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sorted plastic pieces prepared for recycling",
  },
  {
    id: "post-003",
    slug: "inside-a-twin-shaft-shredder",
    title: "Inside a twin-shaft shredder",
    excerpt:
      "Why low-speed, high-torque cutting handles irregular objects differently from a granulator or single shaft.",
    category: "Engineering notes",
    publishedAt: "2026-06-12",
    readingTime: "5 min read",
    image: "/images/r2-compact.svg",
    imageAlt: "ShredX compact twin-shaft shredder product rendering",
  },
];

export const trustBadges: TrustBadge[] = [
  {
    title: "Worldwide freight",
    description: "Tracked delivery to 40+ countries.",
    icon: "shipping",
  },
  {
    title: "Built to service",
    description: "Replaceable cutters and stocked parts.",
    icon: "warranty",
  },
  {
    title: "Secure checkout",
    description: "Card, bank transfer, and purchase order.",
    icon: "payment",
  },
  {
    title: "Real support",
    description: "Pre-sale sizing and lifetime technical help.",
    icon: "support",
  },
];
