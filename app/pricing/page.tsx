"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { PricingCard } from "@/components/marketing/pricing-card";
import { FAQSection } from "@/components/marketing/faq-section";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import {
  KAVACH_PRICING,
  NETRA_PRICING,
  BUNDLE_DISCOUNT,
  type PricingTier,
} from "@/data/pricing";
import { CTA_URLS } from "@/lib/constants";

// export const metadata is not allowed in "use client" — see layout.tsx for metadata

type Tab = "kavach" | "netra" | "bundle";

const TABS: { key: Tab; label: string }[] = [
  { key: "kavach", label: "KAVACH" },
  { key: "netra", label: "NETRA" },
  { key: "bundle", label: "Bundle" },
];

function bundledTiers(): { kavach: PricingTier[]; netra: PricingTier[] } {
  const discount = (tier: PricingTier): PricingTier => {
    if (tier.priceNumeric <= 0) return tier;
    const discounted = Math.round(tier.priceNumeric * (1 - BUNDLE_DISCOUNT));
    return {
      ...tier,
      price: `\u20B9${discounted.toLocaleString("en-IN")}`,
      priceNumeric: discounted,
    };
  };
  return {
    kavach: KAVACH_PRICING.map(discount),
    netra: NETRA_PRICING.map(discount),
  };
}

/* ---- Comparison data ---- */

const KAVACH_COMPARISON = {
  headers: ["Free", "Starter", "Growth", "Business", "Enterprise"],
  rows: [
    { feature: "Data subjects", values: ["100", "5,000", "50,000", "Unlimited", "Unlimited"] },
    { feature: "Languages", values: ["1", "5", "22", "22", "22"] },
    { feature: "Consent builder", values: [true, true, true, true, true] },
    { feature: "WhatsApp consent", values: [false, true, true, true, true] },
    { feature: "DPIA generator", values: [false, true, true, true, true] },
    { feature: "AI model auditing", values: [false, false, true, true, true] },
    { feature: "DSAR automation", values: [false, false, true, true, true] },
    { feature: "Breach notification", values: [false, false, true, true, true] },
    { feature: "SSO & RBAC", values: [false, false, false, true, true] },
    { feature: "Consent Manager path", values: [false, false, false, true, true] },
    { feature: "On-premise option", values: [false, false, false, false, true] },
    { feature: "Support", values: ["Email", "Priority email", "Slack", "Dedicated AM", "24/7 phone"] },
  ],
  highlightColumn: 2,
};

const NETRA_COMPARISON = {
  headers: ["Free", "Starter", "Growth", "Business", "Enterprise"],
  rows: [
    { feature: "Pages/month", values: ["100", "2,000", "20,000", "100,000", "Unlimited"] },
    { feature: "Verifications/month", values: ["50", "500", "5,000", "Unlimited", "Unlimited"] },
    { feature: "Document types", values: ["5", "All", "All", "All", "All + custom"] },
    { feature: "Languages", values: ["-", "22", "22", "22", "22"] },
    { feature: "Batch API", values: [false, "10 docs", "500 docs", true, true] },
    { feature: "Webhooks", values: [false, true, true, true, true] },
    { feature: "Priority processing", values: [false, false, true, true, true] },
    { feature: "Custom extraction", values: [false, false, true, true, true] },
    { feature: "Custom model training", values: [false, false, false, true, true] },
    { feature: "Dedicated queue", values: [false, false, false, true, true] },
    { feature: "On-premise option", values: [false, false, false, true, true] },
    { feature: "Support", values: ["Community", "Email", "Priority", "Dedicated AM", "24/7 phone"] },
  ],
  highlightColumn: 2,
};

const PRICING_FAQS = [
  {
    question: "Can I switch between plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time. When you upgrade, the new plan takes effect immediately and you are billed a prorated amount. When you downgrade, the change takes effect at the end of your current billing cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Starter and Growth plans come with a 14-day free trial. No credit card required. Business and Enterprise plans offer a personalized demo and proof-of-concept engagement.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, UPI, net banking, and wire transfers for annual plans. All payments are processed securely via Razorpay.",
  },
  {
    question: "Do you provide GST-compliant invoices?",
    answer:
      "Yes. We issue 100% GST-compliant invoices for every payment. Our GSTIN is displayed on all invoices and you can download them from your billing dashboard at any time.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Monthly plans can be cancelled anytime with no refund for the current month. Annual plans come with a 30-day money-back guarantee. Enterprise contracts follow custom terms agreed during onboarding.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes. Switching to annual billing gives you 2 months free (approximately 17% off). Contact sales for custom pricing on multi-year commitments.",
  },
  {
    question: "What happens when I exceed my plan limits?",
    answer:
      "We never cut you off mid-operation. You will receive usage alerts at 80% and 100% of your limits. Beyond the limit, processing continues at overage rates (visible in your dashboard) until your next billing cycle or until you upgrade.",
  },
  {
    question: "How does the KAVACH + NETRA bundle discount work?",
    answer:
      "When you subscribe to both KAVACH and NETRA on paid plans, you receive a flat 20% discount on the combined price. The discount is applied automatically at checkout and shown on your invoice.",
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("kavach");
  const bundle = bundledTiers();

  const comparison = activeTab === "netra" ? NETRA_COMPARISON : KAVACH_COMPARISON;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        {/* Subtle gradient accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-teal/5 via-indigo-100/30 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
                Simple, transparent pricing
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                Start free. Scale as you grow. No hidden fees.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tab Toggle + Pricing Cards */}
      <Section background="gray" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mb-12 flex items-center justify-center">
            <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300"
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="absolute inset-0 rounded-lg bg-navy shadow"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeTab === tab.key
                        ? "text-white"
                        : "text-gray-600 hover:text-navy"
                    }`}
                  >
                    {tab.label}
                    {tab.key === "bundle" && (
                      <span className="ml-1.5 inline-flex items-center rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold text-navy">
                        -20%
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bundle banner */}
        <AnimatePresence>
          {activeTab === "bundle" && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 40 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-center gap-3 rounded-xl bg-teal-50 p-4 text-center">
                <Sparkles className="h-5 w-5 text-teal-700" />
                <p className="text-sm font-medium text-teal-800">
                  Get <strong>20% off</strong> when you subscribe to both KAVACH and NETRA together.
                  Discount applied automatically.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "bundle" ? (
              <div className="space-y-16">
                <div>
                  <h2 className="mb-6 text-center text-2xl font-bold text-navy">
                    KAVACH — Bundled Pricing
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {bundle.kavach.map((tier, i) => (
                      <ScrollReveal key={`kavach-${tier.name}`} delay={i * 0.08}>
                        <PricingCard tier={tier} product="kavach" />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="mb-6 text-center text-2xl font-bold text-navy">
                    NETRA — Bundled Pricing
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {bundle.netra.map((tier, i) => (
                      <ScrollReveal key={`netra-${tier.name}`} delay={i * 0.08}>
                        <PricingCard tier={tier} product="netra" />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {(activeTab === "kavach" ? KAVACH_PRICING : NETRA_PRICING).map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 0.08}>
                    <PricingCard tier={tier} product={activeTab} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Feature Comparison */}
      <Section background="white" id="comparison" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              How do the plans compare?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A detailed comparison of every feature across all {activeTab === "bundle" ? "KAVACH" : activeTab.toUpperCase()} plans.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <ComparisonTable
              headers={comparison.headers}
              rows={comparison.rows}
              highlightColumn={comparison.highlightColumn}
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ */}
      <Section background="gray" id="faq" className="py-24 md:py-32">
        <ScrollReveal>
          <FAQSection title="Billing & Pricing FAQ" faqs={PRICING_FAQS} />
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <FloatingOrbs variant="hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Free forever tier. No credit card required. Upgrade when you need to.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href={CTA_URLS.kavachTrial} variant="primary" size="lg">
                  Start Free with KAVACH
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
                <CTAButton
                  href={CTA_URLS.netraApiKey}
                  variant="secondary"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Get NETRA API Key
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
