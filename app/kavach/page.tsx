"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  FileCheck,
  Settings,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQSection } from "@/components/marketing/faq-section";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { Badge } from "@/components/marketing/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { productSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS, PRODUCTS, daysUntilPhase3 } from "@/lib/constants";
import { KAVACH_FEATURES, KAVACH_USE_CASES } from "@/data/features";
import { KAVACH_PRICING } from "@/data/pricing";


export default function KavachPage() {
  const daysLeft = daysUntilPhase3();
  const pricingPreview = KAVACH_PRICING.slice(0, 3);

  return (
    <>
      <JsonLd
        data={productSchema({
          name: "KAVACH",
          description: PRODUCTS.kavach.tagline,
          url: `${SITE_CONFIG.url}/kavach`,
          category: "BusinessApplication",
          price: "0",
          priceCurrency: "INR",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo via-indigo to-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "KAVACH", href: "/kavach" }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="indigo">The Shield {PRODUCTS.kavach.nameHindi}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
              {PRODUCTS.kavach.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              Full DPDP Act compliance for every Indian business. Consent management in 22 languages,
              WhatsApp consent flows, AI model auditing, breach notification, and a path to Consent
              Manager registration — starting at {KAVACH_PRICING[0].price}.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_URLS.kavachTrial} variant="primary" size="lg">
                Start Free — 14 day trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton
                href={CTA_URLS.bookDemo}
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Book a Demo
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Problem / Consequence */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-balance text-3xl font-bold text-navy md:text-4xl">
            The fine for one breach is {"\u20B9"}250 crore. Your compliance budget is zero.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            The DPDP Act 2023 is now law. Full enforcement begins May 13, 2027 — that is{" "}
            <span className="font-bold text-indigo">{daysLeft} days away</span>. Every business
            that processes personal data of Indians must comply. Consent must be collected, stored,
            and auditable. Breaches must be reported in 72 hours. And global tools like OneTrust
            cannot even register as Consent Managers in India.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "\u20B9250 Cr", label: "Maximum fine per breach" },
              { value: "72 hrs", label: "Breach reporting deadline" },
              { value: "63M", label: "Indian businesses affected" },
              { value: "22", label: "Languages required for consent" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-indigo md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="gray" id="features">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What does KAVACH include?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for DPDP compliance and AI governance — built for India.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KAVACH_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              accentColor="indigo"
            />
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How do I deploy KAVACH?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From zero to DPDP-compliant in under 30 minutes. No consultants needed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "1",
              icon: Shield,
              title: "Install SDK",
              description:
                "Add the KAVACH SDK to your website or app. One script tag or npm package. Works with React, Next.js, Vue, or plain HTML.",
            },
            {
              step: "2",
              icon: Settings,
              title: "Configure Consent Flows",
              description:
                "Use the visual consent builder to create DPDP-compliant consent banners, WhatsApp flows, and privacy notices in 22 languages.",
            },
            {
              step: "3",
              icon: BarChart3,
              title: "Monitor Dashboard",
              description:
                "Track your compliance score in real time. Monitor consent rates, manage data subject requests, and generate audit reports.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo text-2xl font-bold text-white">
                {item.step}
              </div>
              <item.icon className="mx-auto mb-3 h-8 w-8 text-indigo" />
              <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="gray" id="pricing">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How much does KAVACH cost?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free. Scale as you grow. No surprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPreview.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-8 ${
                tier.popular
                  ? "border-indigo shadow-xl ring-2 ring-indigo"
                  : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="indigo">Most Popular</Badge>
                </div>
              )}
              <h3 className="text-lg font-semibold text-navy">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-navy">{tier.price}</span>
                <span className="text-sm text-gray-500">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton
                  href={tier.ctaHref}
                  variant={tier.popular ? "kavach" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  {tier.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo hover:underline"
          >
            View all plans including Business and Enterprise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How does KAVACH compare to alternatives?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built for India. Not adapted from GDPR tools.
          </p>
        </div>
        <ComparisonTable
          headers={["KAVACH", "OneTrust", "Privy"]}
          highlightColumn={0}
          rows={[
            { feature: "DPDP Act native support", values: [true, false, false] },
            { feature: "22 Indian languages", values: [true, false, false] },
            { feature: "WhatsApp consent flows", values: [true, false, false] },
            { feature: "Consent Manager registration path", values: [true, false, false] },
            { feature: "AI model governance", values: [true, false, false] },
            { feature: "DPIA generation", values: [true, true, false] },
            { feature: "Breach notification system", values: [true, true, false] },
            { feature: "Incorporated in India", values: [true, false, false] },
            { feature: "Starting price", values: ["Free", "$15,000/yr", "$299/mo"] },
            { feature: "Setup time", values: ["30 min", "Weeks", "Days"] },
          ]}
        />
      </Section>

      {/* Use Cases */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Who is KAVACH built for?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            DPDP compliance tailored to your industry.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KAVACH_USE_CASES.map((useCase) => (
            <Link
              key={useCase.href}
              href={useCase.href}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo/40 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                <useCase.icon className="h-6 w-6 text-indigo" />
              </div>
              <h3 className="text-lg font-semibold text-navy group-hover:text-indigo">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{useCase.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <FAQSection
          title="KAVACH — Frequently Asked Questions"
          faqs={[
            {
              question: "What is the DPDP Act and does my business need to comply?",
              answer:
                "The Digital Personal Data Protection Act 2023 is India's comprehensive privacy law. If your business collects, stores, or processes digital personal data of any individual in India, you must comply. This includes startups, MSMEs, e-commerce companies, SaaS platforms, CA firms, hospitals, and schools. Full enforcement begins May 13, 2027 with penalties up to \u20B9250 crore.",
            },
            {
              question: "How quickly can I get DPDP-compliant with KAVACH?",
              answer:
                "Most businesses are up and running in under 30 minutes. Add the KAVACH SDK to your website, configure consent flows using the visual builder, and you have a live, DPDP-compliant consent management system. No legal consultants required for basic compliance.",
            },
            {
              question: "Why can't I just use OneTrust or a GDPR tool for DPDP compliance?",
              answer:
                "GDPR and DPDP are different laws with different requirements. OneTrust and similar tools are built for GDPR and adapted for other regulations. They do not support WhatsApp consent (critical for Indian MSMEs), all 22 scheduled Indian languages, or the Consent Manager registration process. Additionally, foreign companies cannot register as Consent Managers under the DPDP Act.",
            },
            {
              question: "What is a Consent Manager and do I need to register?",
              answer:
                "A Consent Manager is a DPDP-registered entity that helps individuals manage their consent across businesses. Not every business needs to register as one, but if you want to offer consent management as a service, registration opens November 2026. KAVACH Business and Enterprise plans include the registration path and support.",
            },
            {
              question: "Does KAVACH support WhatsApp-based consent collection?",
              answer:
                "Yes. KAVACH is the only compliance platform that supports WhatsApp consent flows natively. This is critical for India where 63 million MSMEs and hundreds of millions of consumers communicate primarily through WhatsApp. Consent collected via WhatsApp is stored with full audit trails.",
            },
            {
              question: "How does KAVACH handle AI model governance?",
              answer:
                "KAVACH includes AI model auditing tools that track whether training data has proper consent, assess algorithmic bias, and generate governance reports. This is essential for companies building or deploying AI models on Indian user data, as the DPDP Act places specific obligations on automated decision-making.",
            },
            {
              question: "What happens if there is a data breach?",
              answer:
                "KAVACH includes an automated breach notification system. When a breach is detected, it triggers a workflow that helps you comply with the DPDP Act's 72-hour breach reporting requirement. It generates the notification to the Data Protection Board, notifies affected data principals, and creates an incident log.",
            },
            {
              question: "Is there a free plan and what does it include?",
              answer:
                "Yes. KAVACH Free is completely free forever and includes consent management for up to 100 data subjects in 1 language (English), a basic consent builder, compliance dashboard, and email support. No credit card required. Upgrade to Starter at \u20B92,999/month when you need more languages and WhatsApp flows.",
            },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <Section background="indigo">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            DPDP enforcement in {daysLeft} days. Start protecting your business now.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Free to start. No credit card. Deploy in under 30 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={CTA_URLS.kavachTrial} variant="primary" size="lg">
              Start Free — 14 day trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton
              href={CTA_URLS.bookDemo}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
