"use client";

import { ArrowRight, Shield, Eye, FileCheck, AlertTriangle, Zap, Globe, Lock, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import { productSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS, PRODUCTS, daysUntilPhase3 } from "@/lib/constants";
import { HOMEPAGE_STATS } from "@/data/features";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { TypingEffect } from "@/components/animations/typing-effect";
import { DocumentFlow } from "@/components/animations/document-flow";
import { CodeWindow } from "@/components/animations/code-window";
import { AnimatedBeam } from "@/components/animations/animated-beam";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export default function HomePage() {
  const daysLeft = daysUntilPhase3();

  return (
    <>
      <JsonLd
        data={productSchema({
          name: "KAVACH",
          description: PRODUCTS.kavach.tagline,
          url: `${SITE_CONFIG.url}/kavach`,
          category: "BusinessApplication",
        })}
      />
      <JsonLd
        data={productSchema({
          name: "NETRA",
          description: PRODUCTS.netra.tagline,
          url: `${SITE_CONFIG.url}/netra`,
          category: "DeveloperApplication",
        })}
      />

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-[90vh] overflow-hidden bg-navy pt-32 pb-24 md:pt-40 md:pb-32">
        <FloatingOrbs variant="hero" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal shadow-[0_0_20px_rgba(0,212,170,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              India&apos;s AI Infrastructure
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Compliance &amp; Document Intelligence for{" "}
              <span className="gradient-text">
                <TypingEffect
                  words={[
                    "Every Indian Business",
                    "63 Million MSMEs",
                    "22 Indian Languages",
                    "Your Business",
                  ]}
                  className="gradient-text"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Your business processes thousands of documents and handles personal
              data daily. DPDP enforcement begins in{" "}
              <span className="font-semibold text-teal">{daysLeft} days</span>.
              Are you ready?
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                Try NETRA API
              </CTAButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span>No credit card</span>
              <span className="hidden sm:inline text-gray-600">&bull;</span>
              <span>Free tier</span>
              <span className="hidden sm:inline text-gray-600">&bull;</span>
              <span>22 languages</span>
              <span className="hidden sm:inline text-gray-600">&bull;</span>
              <span>&lt;100ms latency</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. ANIMATED BEAM DIVIDER ─── */}
      <AnimatedBeam />

      {/* ─── 3. DOCUMENT FLOW SHOWCASE ─── */}
      <section className="relative bg-white bg-[image:radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
                How does Anumiti process your documents?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From raw scan to structured, verified data — in under 100 milliseconds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DocumentFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. PRODUCTS SECTION ─── */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
                Two products. One platform.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Compliance and intelligence — the two pillars every Indian business needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* KAVACH Card */}
            <ScrollReveal direction="left" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(26,26,108,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-indigo/20 bg-white/80 p-8 backdrop-blur-sm transition-colors hover:border-indigo/40 md:p-10"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo/10">
                  <Shield className="h-7 w-7 text-indigo" />
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  KAVACH <span className="text-indigo">कवच</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo">The Shield</p>
                <p className="mt-3 text-gray-600">{PRODUCTS.kavach.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {[
                    "DPDP consent management in 22 languages",
                    "WhatsApp consent flows for MSMEs",
                    "AI model governance & auditing",
                    "DPIA generation & breach notification",
                    "Consent Manager registration path",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton href="/kavach" variant="kavach">
                    Explore KAVACH
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CTAButton>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* NETRA Card */}
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(232,130,12,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-saffron/20 bg-white/80 p-8 backdrop-blur-sm transition-colors hover:border-saffron/40 md:p-10"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-saffron/10">
                  <Eye className="h-7 w-7 text-saffron" />
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  NETRA <span className="text-saffron">नेत्र</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-saffron">The Eye</p>
                <p className="mt-3 text-gray-600">{PRODUCTS.netra.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {[
                    "OCR in 22 Indian languages — 94% accuracy",
                    "GST invoice extraction & GSTIN verification",
                    "PAN, Aadhaar, bank statement processing",
                    "Contract & court document analysis",
                    "Developer-first REST API with SDKs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton href="/netra" variant="netra">
                    Explore NETRA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CTAButton>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 5. CODE DEMO SECTION ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-saffron">
                  Developer Experience
                </p>
                <h2 className="text-3xl font-bold text-navy md:text-4xl">
                  One API call. Structured JSON. 22 languages.
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Send any Indian document to the NETRA API and get back structured,
                  verified JSON with trust scores for every field. Works with all 22
                  scheduled Indian languages out of the box.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    { icon: Zap, text: "Sub-100ms response times" },
                    { icon: Globe, text: "22 Indian languages natively supported" },
                    { icon: Lock, text: "Every field includes a trust score" },
                    { icon: BarChart3, text: "Batch API for 500 documents at once" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-gray-700">
                      <Icon className="h-5 w-5 shrink-0 text-teal" />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton href={CTA_URLS.netraApiKey} variant="netra" size="lg">
                    Get API Key
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CTAButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <CodeWindow
                title="NETRA API — Extract GST Invoice"
                lines={[
                  { text: "# Extract structured data from a GST invoice", color: "gray" },
                  { text: 'curl -X POST https://api.anumiti.com/v1/extract \\', color: "white" },
                  { text: '  -H "Authorization: Bearer YOUR_API_KEY" \\', color: "green" },
                  { text: '  -H "Content-Type: multipart/form-data" \\', color: "green" },
                  { text: '  -F "file=@invoice.pdf" \\', color: "cyan" },
                  { text: '  -F "type=gst_invoice"', color: "cyan" },
                  { text: "", color: "white" },
                  { text: "# Response (47ms)", color: "gray" },
                  { text: "{", color: "white" },
                  { text: '  "document_type": "gst_invoice",', color: "green" },
                  { text: '  "confidence": 0.97,', color: "yellow" },
                  { text: '  "fields": {', color: "white" },
                  { text: '    "gstin_seller": "29ABCDE1234F1Z5",', color: "green" },
                  { text: '    "invoice_number": "INV-2026-0042",', color: "green" },
                  { text: '    "total_amount": 18500.00,', color: "yellow" },
                  { text: '    "cgst": 1665.00,', color: "yellow" },
                  { text: '    "sgst": 1665.00,', color: "yellow" },
                  { text: '    "language_detected": "hi-en"', color: "green" },
                  { text: "  },", color: "white" },
                  { text: '  "trust_scores": { "gstin": 0.99, "amount": 0.96 }', color: "cyan" },
                  { text: "}", color: "white" },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 6. STATS SECTION ─── */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <FloatingOrbs variant="netra" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Built for India. Built for speed.
              </h2>
              <p className="mt-4 text-gray-400">
                Trusted performance benchmarks across every metric that matters.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOMEPAGE_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <AnimatedCounter value={stat.value} label={stat.label} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. SOCIAL PROOF ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400">
                Trusted by Indian businesses
              </p>
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                What our users are saying
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0}>
              <TestimonialCard
                quote="We were spending 40 hours a month manually processing GST invoices. NETRA does it in minutes with better accuracy."
                name="Rajesh Kumar"
                title="Managing Partner"
                company="Kumar & Associates, CAs"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <TestimonialCard
                quote="KAVACH made DPDP compliance feel achievable. We deployed consent flows in 22 languages in one afternoon."
                name="Priya Sharma"
                title="CTO"
                company="FinStack (Fintech)"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <TestimonialCard
                quote="The API is clean, fast, and handles Hindi-English mixed documents better than anything we tested."
                name="Arjun Nair"
                title="Lead Developer"
                company="LegalMind AI"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 8. DPDP URGENCY BANNER ─── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo to-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <AlertTriangle className="h-10 w-10 text-saffron" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  DPDP Full Enforcement
                </h2>
              </div>
              <p className="text-gray-300">
                May 13, 2027. Fines up to ₹250 crore per breach. Is your business compliant?
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-10 py-6 text-center backdrop-blur-sm">
                <AnimatedCounter value={String(daysLeft)} label="Days Remaining" />
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <CTAButton href="/tools/dpdp-penalty-calculator" variant="primary" size="md">
                Calculate Your Risk
              </CTAButton>
              <CTAButton
                href="/tools/dpdp-checklist"
                variant="secondary"
                size="md"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Free Checklist
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              faqs={[
                {
                  question: "What is the DPDP Act 2023 and who does it apply to?",
                  answer:
                    "The Digital Personal Data Protection Act 2023 (DPDP Act) is India's comprehensive data privacy law. It applies to every organization that processes digital personal data of individuals in India — from startups to large enterprises, including foreign companies serving Indian customers. Full enforcement begins May 13, 2027 with fines up to ₹250 crore.",
                },
                {
                  question: "How is Anumiti different from OneTrust or other global compliance tools?",
                  answer:
                    "Anumiti is built India-first. KAVACH supports all 22 Indian languages, WhatsApp consent flows (critical for MSMEs), and is designed around the specific requirements of the DPDP Act — not adapted from GDPR tools. OneTrust is excluded from India's Consent Manager registration as it's not incorporated in India. Anumiti starts at ₹2,999/month vs. OneTrust's enterprise pricing.",
                },
                {
                  question: "What documents can NETRA process?",
                  answer:
                    "NETRA processes 50+ Indian document types including GST invoices, e-invoices, PAN cards, Aadhaar (masked), bank statements, cheques, driving licenses, court orders, legal contracts, company filings, salary slips, ITR forms, and more — in all 22 scheduled Indian languages.",
                },
                {
                  question: "Is there a free tier?",
                  answer:
                    "Yes. KAVACH Free includes 100 data subjects and 1 language — enough to get started. NETRA Free includes 100 pages/month and 50 verifications. No credit card required for either.",
                },
                {
                  question: "How accurate is NETRA's document extraction?",
                  answer:
                    "NETRA achieves 94% extraction accuracy across Indian languages, with sub-100ms processing times. Every extracted field includes a trust score so you know exactly how reliable each data point is.",
                },
                {
                  question: "What is a Consent Manager under DPDP?",
                  answer:
                    "A Consent Manager is a registered entity under the DPDP Act that acts as a single point of contact between data principals (individuals) and data fiduciaries (businesses) for managing consent. Registration opens November 13, 2026. KAVACH Business and Enterprise plans include the Consent Manager registration path.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 10. FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <FloatingOrbs variant="hero" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Start protecting your business{" "}
              <span className="gradient-text">today</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
              Join the businesses across India using Anumiti to stay compliant and
              process documents with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <p className="mt-8 text-sm text-gray-400">
              No credit card required &bull; Free tier available &bull; Deploy in under 30 minutes
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
