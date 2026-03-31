import {
  Calculator,
  ClipboardCheck,
  FileCheck,
  FileText,
  Search,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedBeam } from "@/components/animations/animated-beam";
import type { ReactNode } from "react";

export const metadata = generatePageMetadata({
  title: "Free DPDP Compliance & Business Tools — Anumiti",
  description:
    "Free tools for Indian businesses — DPDP Penalty Calculator, Compliance Checklist, Consent Notice Generator, GST Invoice Validator, GSTIN Lookup, Stamp Duty Calculator, and API Playground.",
  path: "/tools",
});

interface ToolCard {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

const tools: ToolCard[] = [
  {
    icon: <Calculator className="h-8 w-8 text-indigo-600" />,
    title: "DPDP Penalty Calculator",
    description:
      "Estimate potential penalties under the DPDP Act 2023 based on violation type, company size, and aggravating factors. Understand your risk exposure.",
    href: "/tools/dpdp-penalty-calculator",
    badge: "Popular",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-teal-600" />,
    title: "DPDP Compliance Checklist",
    description:
      "Interactive checklist covering all DPDP Act requirements — consent, notices, rights, security, breach response. Track your compliance progress.",
    href: "/tools/dpdp-checklist",
    badge: "Popular",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-indigo-600" />,
    title: "Consent Notice Generator",
    description:
      "Generate DPDP-compliant consent notices and privacy policies in multiple Indian languages. Customizable templates for your industry.",
    href: "/tools/consent-notice-generator",
  },
  {
    icon: <FileText className="h-8 w-8 text-saffron-600" />,
    title: "GST Invoice Validator",
    description:
      "Validate GST invoices against government standards. Check GSTIN format, invoice structure, HSN codes, and tax calculations instantly.",
    href: "/tools/gst-invoice-validator",
  },
  {
    icon: <Search className="h-8 w-8 text-saffron-600" />,
    title: "GSTIN Lookup",
    description:
      "Look up any GSTIN to verify business registration details, filing status, and compliance history. Powered by official government data.",
    href: "/tools/gstin-lookup",
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Stamp Duty Calculator",
    description:
      "Calculate stamp duty and registration charges for property transactions across Indian states. Updated with the latest rates.",
    href: "/tools/stamp-duty-calculator",
    badge: "Coming Soon",
  },
  {
    icon: <Globe className="h-8 w-8 text-teal-600" />,
    title: "API Playground",
    description:
      "Try Anumiti NETRA and KAVACH APIs interactively. Upload sample documents, test OCR, redaction, and compliance endpoints live.",
    href: "/playground",
  },
];

export default function ToolsPage() {
  return (
    <>
      <div className="py-24 md:py-32">
        <Section background="white">
          <Breadcrumbs items={[{ name: "Free Tools", href: "/tools" }]} />

          <ScrollReveal>
            <div className="mt-8 mb-12">
              <h1 className="text-4xl font-bold text-navy">
                Free Compliance & Business Tools
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Practical tools for Indian businesses. Calculate DPDP penalties, check
                compliance readiness, validate GST invoices, and explore our APIs — all free.
              </p>
            </div>
          </ScrollReveal>

          <AnimatedBeam />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <ScrollReveal key={tool.href} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                  <div className="mb-4 flex items-start justify-between">
                    {tool.icon}
                    {tool.badge && (
                      <Badge
                        variant={tool.badge === "Coming Soon" ? "gray" : "teal"}
                      >
                        {tool.badge}
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-navy">{tool.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {tool.description}
                  </p>
                  <div className="mt-5">
                    <CTAButton href={tool.href} variant="secondary" size="sm">
                      <span className="flex items-center gap-1">
                        {tool.badge === "Coming Soon" ? "Notify Me" : "Try Now"}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CTAButton>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
