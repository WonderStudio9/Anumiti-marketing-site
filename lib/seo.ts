import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageSEO): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const image = ogImage ?? `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

// --- Blog-specific metadata for AEO/GEO ---

interface BlogSEO {
  title: string;
  description: string;
  slug: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  tags?: string[];
  category?: string;
}

export function generateBlogMetadata({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  author,
  tags,
  category,
}: BlogSEO): Metadata {
  const url = `${SITE_CONFIG.url}/blog/${slug}`;
  const ogImage =
    image ?? `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: tags,
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "article",
      publishedTime: datePublished,
      modifiedTime: dateModified ?? datePublished,
      authors: author ? [author] : [SITE_CONFIG.name],
      section: category,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

// --- JSON-LD Schema Builders ---

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: "2024",
    sameAs: [
      "https://x.com/anumiti_ai",
      "https://linkedin.com/company/anumiti",
      "https://github.com/anumiti",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/hsn/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

interface ProductSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceCurrency?: string;
  price?: string;
  category?: string;
}

export function productSchema(product: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: product.category ?? "BusinessApplication",
    operatingSystem: "Web",
    offers: product.price
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.priceCurrency ?? "INR",
        }
      : undefined,
    image: product.image,
  };
}

interface FAQ {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  keywords?: string[];
}

export function articleSchema(article: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    author: {
      "@type": "Organization",
      name: article.author ?? SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    image: article.image,
    keywords: article.keywords?.join(", "),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article > div > p:first-of-type"],
    },
  };
}

interface HowToStep {
  name: string;
  text: string;
}

export function howToSchema(name: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
