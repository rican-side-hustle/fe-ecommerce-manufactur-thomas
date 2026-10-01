import type {
  Application,
  BlogPost,
  CaseStudy,
  CtaBannerContent,
  EngineeringFeature,
  FaqItem,
  FeatureBlock,
  HeroContent,
  HomepageStat,
  HowItWorksStep,
  MachineHotspot,
  MaterialCard,
  NavigationItem,
  PartnerLogo,
  Product,
  ProductConfiguration,
  ProductShowcaseContent,
  ResourceItem,
  SpecComparison,
  Testimonial,
  TrustBadge,
  VideoItem,
  WhyFeature,
} from "@/types/content";

export const navigation: NavigationItem[] = [
  {
    label: "Machines",
    href: "/machines",
    children: [
      {
        label: "SHREDX M20",
        description: "Compact double-shaft industrial shredder.",
        href: "/machines/shredx-m20",
      },
      {
        label: "Machine comparison",
        description: "Compare drive, chamber, and throughput.",
        href: "/machines",
      },
    ],
  },
  { label: "Products", href: "/products" },
  {
    label: "Applications",
    href: "/applications",
    children: [
      {
        label: "Plastic",
        description: "Parts, sprues, sheet, and rigid polymers.",
        href: "/applications/plastic",
      },
      {
        label: "E-Waste",
        description: "Controlled size reduction for recovery.",
        href: "/applications/e-waste",
      },
      {
        label: "All applications",
        description: "Find a configuration by material.",
        href: "/applications",
      },
    ],
  },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/resources" },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About SHREDX",
        description: "Engineering better material recovery.",
        href: "/about",
      },
      {
        label: "Contact Sales",
        description: "Discuss materials and configuration.",
        href: "/contact",
      },
    ],
  },
];

export const homeHero: HeroContent = {
  eyebrow: "SHREDX M20 · Mini Double-Shaft Industrial Shredder",
  title: "Built Small. Shreds Big.",
  highlight: "Shreds Big.",
  description:
    "A compact double-shaft industrial shredder engineered to tear through demanding materials with controlled, consistent performance.",
  primaryCta: {
    label: "Explore SHREDX M20",
    href: "/machines/shredx-m20",
  },
  secondaryCta: { label: "Get a Quote", href: "/contact" },
  backgroundImage: "/images/r2-shredder-hero.svg",
  videoSrc: "/images/m20-hero-loop.mp4",
  videoPoster: "/images/m20-hero-poster.png",
  imageAlt:
    "Technical rendering of the SHREDX M20 mini double-shaft industrial shredder",
  stat: { value: "20 HP", label: "High-torque drive system" },
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
    slug: "shredx-m20",
    name: "SHREDX M20",
    category: "Industrial shredder",
    description:
      "Mini double-shaft industrial shredder for controlled size reduction of plastics, rubber, wood, packaging, e-waste, and production scrap.",
    price: 8900,
    rating: 4.9,
    reviewCount: 48,
    image: "/images/r2-compact.svg",
    imageAlt: "SHREDX M20 compact double-shaft industrial shredder",
    inStock: true,
    featured: true,
    badge: "New",
    sku: "SHX-M20-400",
    leadTime: "Ships in 6–8 weeks",
    availability: "In stock",
    specs: [
      { label: "Motor", value: "20 HP" },
      { label: "Shaft", value: "Double" },
      { label: "Cutting width", value: "400 mm" },
      { label: "Input opening", value: "500 × 400 mm" },
      { label: "Power", value: "220/380 V" },
      { label: "Machine weight", value: "850 kg" },
      { label: "Dimensions", value: "1200 × 800 × 1400 mm" },
    ],
    materials: [
      "Plastic",
      "Rubber",
      "Wood",
      "Packaging",
      "E-Waste",
      "Industrial scrap",
    ],
    compatibility: [
      "M20 collection bin",
      "M20 blade sets",
      "M20 safety hopper",
    ],
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
    sku: "SHX-R4-12",
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
    sku: "SHX-BLD-D2",
    leadTime: "Ships in 3–5 days",
    specs: [
      { label: "Material", value: "D2 tool steel" },
      { label: "Hardness", value: "58–60 HRC" },
      { label: "Geometry", value: "Reversible" },
      { label: "Compatibility", value: "M20 / R4" },
    ],
    materials: ["M20 shafts", "R4 shafts"],
    compatibility: ["SHREDX M20", "R4 Workcell"],
    availability: "In stock",
  },
  {
    id: "product-004",
    slug: "m20-collection-bin",
    name: "M20 Collection Bin",
    category: "Accessory",
    description:
      "Heavy-gauge rolling collection bin sized for the SHREDX M20 discharge area.",
    price: 420,
    rating: 4.8,
    reviewCount: 12,
    image: "/images/r2-compact.svg",
    imageAlt: "SHREDX M20 large collection bin accessory",
    inStock: true,
    sku: "SHX-M20-BIN",
    leadTime: "Ships in 5–7 days",
    specs: [
      { label: "Capacity", value: "140 L" },
      { label: "Material", value: "Powder-coated steel" },
    ],
    materials: ["Processed output"],
    compatibility: ["SHREDX M20"],
    availability: "In stock",
  },
  {
    id: "product-005",
    slug: "m20-safety-hopper",
    name: "M20 Extended Safety Hopper",
    category: "Accessory",
    description:
      "Extended guarded hopper for safer handling of bulky and irregular feedstock.",
    price: 780,
    rating: 4.9,
    reviewCount: 9,
    image: "/images/r2-shredder-hero.svg",
    imageAlt: "Extended guarded feed hopper for SHREDX M20",
    inStock: true,
    sku: "SHX-M20-HOP-X",
    leadTime: "Ships in 2–3 weeks",
    specs: [
      { label: "Opening", value: "700 × 600 mm" },
      { label: "Interlock", value: "Included" },
    ],
    materials: ["Bulky feedstock"],
    compatibility: ["SHREDX M20"],
    availability: "Made to order",
  },
  {
    id: "product-006",
    slug: "m20-heavy-duty-blade-set",
    name: "M20 Heavy-Duty Blade Set",
    category: "Replacement part",
    description:
      "High-impact cutter geometry for dense polymers, rubber, and difficult mixed streams.",
    price: 1290,
    rating: 5,
    reviewCount: 7,
    image: "/images/blade-kit.svg",
    imageAlt: "Heavy-duty hardened cutter set for SHREDX M20",
    inStock: true,
    sku: "SHX-M20-BLD-HD",
    leadTime: "Ships in 10–14 days",
    specs: [
      { label: "Material", value: "D2 tool steel" },
      { label: "Hardness", value: "58–60 HRC" },
    ],
    materials: ["Rubber", "Dense plastics", "E-Waste"],
    compatibility: ["SHREDX M20"],
    availability: "In stock",
  },
  {
    id: "product-007",
    slug: "m20-maintenance-kit",
    name: "M20 Maintenance Kit",
    category: "Consumable",
    description:
      "Routine service essentials for lubrication, fastener inspection, and cutter care.",
    price: 189,
    rating: 4.9,
    reviewCount: 21,
    image: "/images/blade-kit.svg",
    imageAlt: "SHREDX M20 maintenance and service kit",
    inStock: true,
    sku: "SHX-M20-SVC",
    leadTime: "Ships in 3–5 days",
    specs: [
      { label: "Service interval", value: "500 hours" },
      { label: "Use", value: "Preventive maintenance" },
    ],
    materials: ["Machine service"],
    compatibility: ["SHREDX M20"],
    availability: "In stock",
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
  columns: ["Standard", "SHREDX M20", "Pro"],
  rows: [
    {
      label: "Cutting chamber",
      values: ["300 × 250 mm", "500 × 400 mm", "700 × 600 mm"],
    },
    { label: "Rated drive", values: ["10 HP", "20 HP", "30 HP"] },
    { label: "Cutting width", values: ["280 mm", "400 mm", "600 mm"] },
    { label: "Machine weight", values: ["520 kg", "850 kg", "1,450 kg"] },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: "review-001",
    quote:
      "The M20 gave us an internal path for failed prints without adding another full-size production cell.",
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
    name: "Plastic",
    description: "Rigid parts, sprues, sheet, HDPE, PP",
    code: "01",
  },
  {
    name: "Rubber",
    description: "Offcuts, seals, flexible production waste",
    code: "02",
  },
  {
    name: "Wood",
    description: "Blocks, trims, light timber, composite offcuts",
    code: "03",
  },
  {
    name: "Packaging",
    description: "Dense cardboard, containers, protective stock",
    code: "04",
  },
  {
    name: "E-Waste",
    description: "Housings, cable channels, component shells",
    code: "05",
  },
  {
    name: "Industrial Scrap",
    description: "Mixed production pieces and rejected parts",
    code: "06",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-001",
    slug: "polyform-print-farm",
    title: "From failed prints to usable feedstock in one room",
    client: "Polyform Print Farm",
    summary:
      "An M20 beside the print floor lets the team process supports and failed parts before they leave the facility.",
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
  {
    id: "case-003",
    slug: "hdpe-production-waste",
    title: "Turning production waste into reusable material",
    client: "Meridian Plastics",
    summary:
      "A plastics manufacturer configured the M20 for HDPE runners and rejected molded parts.",
    result: "42 tonnes recovered annually",
    image: "/images/r4-workcell.svg",
    imageAlt:
      "Industrial SHREDX workcell configured for plastics manufacturing",
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
    title: "2-year warranty",
    description: "Machine coverage and stocked service parts.",
    icon: "warranty",
  },
  {
    title: "Flexible purchasing",
    description: "Online accessories and machine quotations.",
    icon: "payment",
  },
  {
    title: "Engineering support",
    description: "Application sizing and lifetime technical help.",
    icon: "support",
  },
];

export const homepageStats: HomepageStat[] = [
  { value: "2", label: "Shafts" },
  { value: "20 HP", label: "High-torque drive" },
  { value: "400 mm", label: "Cutting width" },
  { value: "Industrial", label: "Grade" },
];

export const machineHotspots: MachineHotspot[] = [
  {
    id: "hopper",
    label: "Hopper",
    description: "Reinforced guarded feed area sized for bulky material.",
    x: 48,
    y: 25,
  },
  {
    id: "shafts",
    label: "Double-shaft system",
    description:
      "Counter-rotating shafts maintain positive material engagement.",
    x: 47,
    y: 46,
  },
  {
    id: "blades",
    label: "Cutting blades",
    description: "Serviceable D2 tool-steel cutters in modular stacks.",
    x: 37,
    y: 51,
  },
  {
    id: "gearbox",
    label: "Gearbox",
    description: "Low-speed reduction multiplies torque under demanding loads.",
    x: 71,
    y: 52,
  },
  {
    id: "motor",
    label: "Motor",
    description: "Configurable 10, 20, or 30 HP industrial drive package.",
    x: 81,
    y: 60,
  },
  {
    id: "interlock",
    label: "Safety interlock",
    description: "Monitored access points stop the drive when opened.",
    x: 63,
    y: 34,
  },
  {
    id: "collection",
    label: "Collection area",
    description: "Clear discharge path accepts standard or large rolling bins.",
    x: 49,
    y: 77,
  },
];

export const productConfiguration: ProductConfiguration = {
  motor: [
    { id: "motor-10", label: "10 HP", priceDelta: -1200 },
    { id: "motor-20", label: "20 HP", priceDelta: 0 },
    { id: "motor-30", label: "30 HP", priceDelta: 1800 },
  ],
  blade: [
    { id: "blade-standard", label: "Standard", priceDelta: 0 },
    { id: "blade-heavy", label: "Heavy Duty", priceDelta: 950 },
  ],
  hopper: [
    { id: "hopper-standard", label: "Standard", priceDelta: 0 },
    { id: "hopper-extended", label: "Extended", priceDelta: 780 },
  ],
  collection: [
    { id: "collection-standard", label: "Standard", priceDelta: 0 },
    { id: "collection-large", label: "Large", priceDelta: 420 },
  ],
};

export const applications: Application[] = [
  {
    slug: "plastic",
    name: "Plastic",
    description: "Rigid polymer parts, sprues, sheet, and containers.",
    challenge: "Bulky parts consume storage and complicate material recovery.",
    recommendedSetup: "20 HP · Standard blade · Standard hopper",
    code: "01",
  },
  {
    slug: "rubber",
    name: "Rubber",
    description: "Flexible offcuts, seals, and production remnants.",
    challenge: "Elastic feedstock needs positive engagement and high torque.",
    recommendedSetup: "30 HP · Heavy Duty blade · Extended hopper",
    code: "02",
  },
  {
    slug: "wood",
    name: "Wood",
    description: "Blocks, trims, light timber, and composite offcuts.",
    challenge: "Irregular pieces bridge in small feed openings.",
    recommendedSetup: "20 HP · Heavy Duty blade · Extended hopper",
    code: "03",
  },
  {
    slug: "e-waste",
    name: "E-Waste",
    description: "Device housings, cable channels, and component shells.",
    challenge: "Mixed shapes require controlled low-speed reduction.",
    recommendedSetup: "30 HP · Heavy Duty blade · Large collection",
    code: "04",
  },
  {
    slug: "packaging",
    name: "Packaging",
    description: "Dense cardboard, containers, and protective stock.",
    challenge: "High-volume waste quickly occupies floor and container space.",
    recommendedSetup: "10 HP · Standard blade · Extended hopper",
    code: "05",
  },
  {
    slug: "industrial-scrap",
    name: "Industrial Scrap",
    description: "Rejected parts, mixed offcuts, and production remnants.",
    challenge:
      "Variable geometry demands a versatile serviceable cutter system.",
    recommendedSetup: "30 HP · Heavy Duty blade · Large collection",
    code: "06",
  },
];

export const engineeringFeatures: EngineeringFeature[] = [
  {
    number: "01",
    title: "Double-Shaft Design",
    description:
      "Counter-rotating shafts create consistent material engagement.",
  },
  {
    number: "02",
    title: "High-Torque Drive",
    description:
      "Low-speed reduction delivers force for demanding applications.",
  },
  {
    number: "03",
    title: "Modular Cutting System",
    description:
      "Serviceable cutter stacks support maintenance and customization.",
  },
];

export const whyFeatures: WhyFeature[] = [
  {
    title: "Compact",
    description: "Industrial capability without an oversized footprint.",
  },
  {
    title: "Serviceable",
    description: "Designed for easier maintenance and component replacement.",
  },
  {
    title: "Versatile",
    description: "Adaptable to different materials and applications.",
  },
  {
    title: "Built to Last",
    description: "Heavy-duty components designed for demanding environments.",
  },
];

export const resources: ResourceItem[] = [
  {
    id: "res-001",
    title: "SHREDX M20 Technical Datasheet",
    description:
      "Dimensions, power, performance, and installation requirements.",
    category: "Documentation",
    format: "PDF · 2.4 MB",
    href: "#",
  },
  {
    id: "res-002",
    title: "Installation Planning Guide",
    description: "Floor, electrical, clearance, and material-flow planning.",
    category: "Documentation",
    format: "PDF · 1.8 MB",
    href: "#",
  },
  {
    id: "res-003",
    title: "Choosing a Cutter Configuration",
    description:
      "Match blade geometry and drive torque to your material stream.",
    category: "Article",
    format: "8 min read",
    href: "/blog/choosing-the-right-shred-size",
  },
  {
    id: "res-004",
    title: "Preventive Maintenance Checklist",
    description: "A practical 500-hour inspection and service routine.",
    category: "Documentation",
    format: "PDF · 900 KB",
    href: "#",
  },
  {
    id: "res-005",
    title: "M20 Machine Walkthrough",
    description: "A guided overview of controls, safety, and service access.",
    category: "Media",
    format: "Video · 06:24",
    href: "/videos",
  },
];

export const videos: VideoItem[] = [
  {
    id: "vid-001",
    title: "SHREDX M20 Machine Demonstration",
    category: "Machine Demo",
    duration: "03:42",
    image: "/images/r2-shredder-hero.svg",
  },
  {
    id: "vid-002",
    title: "How Double-Shaft Shredding Works",
    category: "How It Works",
    duration: "05:18",
    image: "/images/blade-kit.svg",
  },
  {
    id: "vid-003",
    title: "500-Hour Preventive Maintenance",
    category: "Maintenance",
    duration: "08:10",
    image: "/images/r2-compact.svg",
  },
  {
    id: "vid-004",
    title: "Processing HDPE Production Waste",
    category: "Applications",
    duration: "04:56",
    image: "/images/r4-workcell.svg",
  },
  {
    id: "vid-005",
    title: "Inside the M20 Cutting Chamber",
    category: "Engineering",
    duration: "06:31",
    image: "/images/blade-kit.svg",
  },
  {
    id: "vid-006",
    title: "Meridian Plastics Material Loop",
    category: "Case Studies",
    duration: "07:08",
    image: "/images/r4-workcell.svg",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-001",
    category: "Product",
    question: "What materials can SHREDX M20 process?",
    answer:
      "The M20 is intended for rigid plastics, rubber, wood, packaging, selected e-waste housings, and similar solid production scrap. Application testing is recommended before purchase.",
  },
  {
    id: "faq-002",
    category: "Technical",
    question: "What particle size can it produce?",
    answer:
      "Output size depends on blade width, screen selection, material behavior, and the number of passes. The standard configuration targets controlled first-stage size reduction.",
  },
  {
    id: "faq-003",
    category: "Maintenance",
    question: "How often do blades need replacement?",
    answer:
      "Blade life varies by material and contamination. Cutters are reversible and designed for inspection during the 500-hour service interval.",
  },
  {
    id: "faq-004",
    category: "Technical",
    question: "Can the machine run continuously?",
    answer:
      "The M20 supports production workflows, but duty cycle and feed rate must match the selected motor and material stream.",
  },
  {
    id: "faq-005",
    category: "Technical",
    question: "What power supply is required?",
    answer:
      "Dummy configurations support 220/380 V industrial supply. Final electrical requirements depend on destination and selected drive package.",
  },
  {
    id: "faq-006",
    category: "Orders",
    question: "Can I purchase replacement blades?",
    answer:
      "Yes. Standard and heavy-duty blade sets, maintenance kits, and common service parts can be purchased separately.",
  },
  {
    id: "faq-007",
    category: "Shipping",
    question: "Do you provide installation?",
    answer:
      "Installation planning and remote commissioning are available. On-site support can be quoted by location.",
  },
  {
    id: "faq-008",
    category: "Shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes. Freight, duties, local electrical compliance, and commissioning requirements are quoted per destination.",
  },
  {
    id: "faq-009",
    category: "Warranty",
    question: "What warranty is included?",
    answer:
      "The UI concept presents a two-year machine warranty with lifetime technical support. Final commercial terms will replace this dummy policy.",
  },
];
