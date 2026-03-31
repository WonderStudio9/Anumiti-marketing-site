import { ArrowRight, Shield, Eye, FileCheck, AlertTriangle } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { StatsBar } from "@/components/marketing/stats-bar";
import { FAQSection } from "@/components/marketing/faq-section";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import { productSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS, PRODUCTS, daysUntilPhase3 } from "@/lib/constants";
import { HOMEPAGE_STATS } from "@/data/features";

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

      {/* Hero */}
      <section className="gradient-bg-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal">
              India&apos;s AI Infrastructure
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
              Compliance &amp; Document Intelligence for{" "}
              <span className="gradient-text">Every Indian Business</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              Your business processes thousands of documents and handles personal data daily.
              DPDP enforcement begins in {daysLeft} days. Are you ready?
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_URLS.kavachTrial} variant="primary" size="lg">
                Start Free with KAVACH
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton href={CTA_URLS.netraApiKey} variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Try NETRA API
              </CTAButton>
            </div>
          </div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Problem Statement */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-navy md:text-4xl">
            63 million Indian businesses face DPDP compliance. Every one processes documents.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The Digital Personal Data Protection Act is now law. Fines up to ₹250 crore per breach.
            And every Indian business — from CAs to fintechs — processes multilingual documents
            without proper extraction or verification.
          </p>
        </div>

        <StatsBar stats={HOMEPAGE_STATS} className="mt-16" />
      </Section>

      {/* Products Overview */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Two products. One platform.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Compliance and intelligence — the two pillars every Indian business needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* KAVACH Card */}
          <div className="rounded-2xl border-2 border-indigo/20 bg-white p-8 transition-all hover:border-indigo/40 hover:shadow-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
              <Shield className="h-6 w-6 text-indigo" />
            </div>
            <h3 className="text-2xl font-bold text-navy">
              KAVACH <span className="text-indigo">कवच</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-indigo">The Shield</p>
            <p className="mt-3 text-gray-600">{PRODUCTS.kavach.tagline}</p>
            <ul className="mt-6 space-y-2">
              {[
                "DPDP consent management in 22 languages",
                "WhatsApp consent flows for MSMEs",
                "AI model governance & auditing",
                "DPIA generation & breach notification",
                "Consent Manager registration path",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
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
          </div>

          {/* NETRA Card */}
          <div className="rounded-2xl border-2 border-saffron/20 bg-white p-8 transition-all hover:border-saffron/40 hover:shadow-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-saffron-50">
              <Eye className="h-6 w-6 text-saffron" />
            </div>
            <h3 className="text-2xl font-bold text-navy">
              NETRA <span className="text-saffron">नेत्र</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-saffron">The Eye</p>
            <p className="mt-3 text-gray-600">{PRODUCTS.netra.tagline}</p>
            <ul className="mt-6 space-y-2">
              {[
                "OCR in 22 Indian languages — 94% accuracy",
                "GST invoice extraction & GSTIN verification",
                "PAN, Aadhaar, bank statement processing",
                "Contract & court document analysis",
                "Developer-first REST API with SDKs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
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
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How does Anumiti work?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From signup to compliance in under 30 minutes. No consultants required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Sign Up Free",
              description:
                "Create your account. No credit card. Get instant access to KAVACH compliance dashboard or NETRA API key.",
            },
            {
              step: "2",
              title: "Integrate in Minutes",
              description:
                "KAVACH: Deploy consent flows on your website or WhatsApp. NETRA: One API call to process any Indian document.",
            },
            {
              step: "3",
              title: "Comply & Scale",
              description:
                "Monitor your compliance score. Process documents at scale. Upgrade as you grow. We handle the infrastructure.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-2xl font-bold text-navy">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Trusted by businesses across India
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="We were spending 40 hours a month manually processing GST invoices. NETRA does it in minutes with better accuracy."
            name="Rajesh Kumar"
            title="Managing Partner"
            company="Kumar & Associates, CAs"
          />
          <TestimonialCard
            quote="KAVACH made DPDP compliance feel achievable. We deployed consent flows in 22 languages in one afternoon."
            name="Priya Sharma"
            title="CTO"
            company="FinStack (Fintech)"
          />
          <TestimonialCard
            quote="The API is clean, fast, and handles Hindi-English mixed documents better than anything we tested."
            name="Arjun Nair"
            title="Lead Developer"
            company="LegalMind AI"
          />
        </div>
      </Section>

      {/* DPDP Urgency Banner */}
      <section className="bg-gradient-to-r from-indigo to-navy py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-10 w-10 text-saffron" />
              <div>
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  DPDP Full Enforcement: May 13, 2027
                </h2>
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-teal">{daysLeft} days remaining.</span>{" "}
                  Fines up to ₹250 crore per breach. Is your business compliant?
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CTAButton href="/tools/dpdp-penalty-calculator" variant="primary" size="md">
                Calculate Your Risk
              </CTAButton>
              <CTAButton href="/tools/dpdp-checklist" variant="secondary" size="md" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Free Checklist
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section background="white">
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
      </Section>

      {/* Final CTA */}
      <Section background="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Start protecting your business today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Free to start. No credit card. Deploy in under 30 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={CTA_URLS.kavachTrial} variant="primary" size="lg">
              Start Free with KAVACH
            </CTAButton>
            <CTAButton href={CTA_URLS.netraApiKey} variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Get NETRA API Key
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
