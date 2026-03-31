export const SITE_CONFIG = {
  name: "Anumiti",
  nameHindi: "अनुमिति",
  url: "https://anumiti.com",
  appUrl: "https://app.anumiti.com",
  docsUrl: "https://docs.anumiti.com",
  description:
    "India's AI Infrastructure for Compliance & Document Intelligence",
  tagline: "The essential AI infrastructure for India.",
  philosophy: "We don't guess. We infer. We verify. We prove.",
} as const;

export const BRAND_COLORS = {
  navy: { hex: "#0A0F2C", label: "Deep Navy" },
  teal: { hex: "#00D4AA", label: "Electric Teal" },
  indigo: { hex: "#1A1A6C", label: "Deep Indigo" },
  saffron: { hex: "#E8820C", label: "Saffron-Amber" },
} as const;

export const PRODUCTS = {
  kavach: {
    name: "KAVACH",
    nameHindi: "कवच",
    meaning: "The Shield",
    tagline: "DPDP compliance that protects. AI governance that earns trust.",
    color: "indigo" as const,
    href: "/kavach",
    appHref: "https://app.anumiti.com/kavach",
  },
  netra: {
    name: "NETRA",
    nameHindi: "नेत्र",
    meaning: "The Eye",
    tagline: "Every Indian document. Every language. Verified truth.",
    color: "saffron" as const,
    href: "/netra",
    appHref: "https://app.anumiti.com/netra",
  },
} as const;

export const NAV_ITEMS = [
  {
    label: "Products",
    href: "#",
    children: [
      {
        label: "KAVACH कवच",
        description: "DPDP compliance & AI governance",
        href: "/kavach",
      },
      {
        label: "NETRA नेत्र",
        description: "Document intelligence API — 22 languages",
        href: "/netra",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Guides", href: "/guides" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "KAVACH", href: "/kavach" },
    { label: "NETRA", href: "/netra" },
    { label: "Pricing", href: "/pricing" },
    { label: "API Docs", href: "https://docs.anumiti.com" },
    { label: "Changelog", href: "/changelog" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/guides" },
    { label: "Free Tools", href: "/tools" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "API Playground", href: "/playground" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
    { label: "Press Kit", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "DPDP Notice", href: "/dpdp-notice" },
  ],
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://x.com/anumiti_ai",
  linkedin: "https://linkedin.com/company/anumiti",
  github: "https://github.com/anumiti",
  discord: "https://discord.gg/anumiti",
} as const;

export const CTA_URLS = {
  signup: "https://app.anumiti.com/signup",
  login: "https://app.anumiti.com/login",
  kavachTrial: "https://app.anumiti.com/signup?product=kavach",
  netraApiKey: "https://app.anumiti.com/signup?product=netra",
  bookDemo: "/contact",
  docs: "https://docs.anumiti.com",
} as const;

export const DPDP_DEADLINES = {
  phase2: new Date("2026-11-13"),
  phase3: new Date("2027-05-13"),
} as const;

export function daysUntilPhase2(): number {
  const now = new Date();
  const diff = DPDP_DEADLINES.phase2.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function daysUntilPhase3(): number {
  const now = new Date();
  const diff = DPDP_DEADLINES.phase3.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
