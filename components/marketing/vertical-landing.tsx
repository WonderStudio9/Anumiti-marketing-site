"use client";

import { type LucideIcon, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQSection } from "@/components/marketing/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PRODUCTS } from "@/lib/constants";

interface VerticalLandingProps {
  product: "kavach" | "netra";
  vertical: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: { title: string; description: string }[];
  features: { title: string; description: string; icon: LucideIcon }[];
  useCases: { scenario: string; outcome: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  cta: { text: string; href: string };
}

export function VerticalLanding({
  product,
  vertical,
  heroTitle,
  heroSubtitle,
  painPoints,
  features,
  useCases,
  stats,
  faqs,
  cta,
}: VerticalLandingProps) {
  const productConfig = PRODUCTS[product];
  const isKavach = product === "kavach";
  const accentColor = isKavach ? "indigo" : "saffron";
  const heroGradient = isKavach
    ? "from-indigo via-indigo to-navy"
    : "from-saffron via-saffron to-navy";

  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${heroGradient} pt-32 pb-20 md:pt-40 md:pb-28`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: productConfig.name, href: productConfig.href },
              { name: vertical, href: `${productConfig.href}/${vertical.toLowerCase().replace(/\s+/g, "-")}` },
            ]}
          />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              {productConfig.name} {productConfig.nameHindi} for {vertical}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={cta.href} variant="primary" size="lg">
                {cta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton
                href="/contact"
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

      {/* Pain Points */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What challenges do {vertical.toLowerCase()} face today?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="gray" id="features">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How does {productConfig.name} solve this for {vertical.toLowerCase()}?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Purpose-built capabilities for your industry.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              accentColor={accentColor}
            />
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What does {productConfig.name} look like in practice?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc) => (
            <div
              key={uc.scenario}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Scenario
              </div>
              <p className="text-base font-medium text-navy">{uc.scenario}</p>
              <div className="my-4 border-t border-gray-100" />
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    isKavach ? "text-indigo" : "text-saffron"
                  }`}
                />
                <div>
                  <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Outcome
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {uc.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Bar */}
      <Section background={isKavach ? "indigo" : "saffron"}>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <FAQSection
          title={`${productConfig.name} for ${vertical} — Frequently Asked Questions`}
          faqs={faqs}
        />
      </Section>

      {/* CTA */}
      <Section background={isKavach ? "indigo" : "saffron"}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to get started with {productConfig.name} for {vertical.toLowerCase()}?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Free to start. No credit card required. Deploy in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={cta.href} variant="primary" size="lg">
              {cta.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton
              href="/contact"
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
