import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllPosts } from "@/lib/mdx";
import { getAllGuides } from "@/lib/mdx";
import { getAllCaseStudies } from "@/lib/mdx";
import { INDIAN_STATES } from "@/data/states";
import { INDUSTRIES } from "@/data/industries";
import { comparisons } from "@/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date().toISOString();

  // Static pages with proper lastModified
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/kavach`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/netra`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/playground`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Vertical landing pages
  const verticals: MetadataRoute.Sitemap = [
    "/kavach/ai-startups",
    "/kavach/chartered-accountants",
    "/kavach/d2c-brands",
    "/kavach/saas",
    "/netra/chartered-accountants",
    "/netra/fintech",
    "/netra/legal",
    "/netra/insurance",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Tools
  const tools: MetadataRoute.Sitemap = [
    "/tools/dpdp-penalty-calculator",
    "/tools/dpdp-checklist",
    "/tools/consent-notice-generator",
    "/tools/gst-invoice-validator",
    "/tools/gstin-lookup",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Guides
  const guides: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.meta.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Case studies
  const caseStudies: MetadataRoute.Sitemap = getAllCaseStudies().map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Comparison pages
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // State DPDP guides
  const statePages: MetadataRoute.Sitemap = INDIAN_STATES.map((state) => ({
    url: `${baseUrl}/guides/dpdp/state/${state.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Industry DPDP guides
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${baseUrl}/guides/dpdp/industry/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...verticals,
    ...tools,
    ...posts,
    ...guides,
    ...caseStudies,
    ...comparisonPages,
    ...statePages,
    ...industryPages,
  ];
}
