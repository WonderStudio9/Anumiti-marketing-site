import { notFound } from "next/navigation";
import { MapPin, Building2, AlertTriangle, ArrowRight } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { INDIAN_STATES, getStateBySlug } from "@/data/states";
import { daysUntilPhase3 } from "@/lib/constants";
import type { Metadata } from "next";

interface Props {
  params: { state: string };
}

export function generateStaticParams() {
  return INDIAN_STATES.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  return generatePageMetadata({
    title: `DPDP Compliance Guide for ${state.name}`,
    description: `Complete DPDP Act compliance guide for businesses in ${state.name}. Key industries affected, compliance obligations, and how to get compliant before the May 2027 deadline.`,
    path: `/guides/dpdp/state/${params.state}`,
  });
}

export default function StateDPDPGuidePage({ params }: Props) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const daysLeft = daysUntilPhase3();

  const faqs = [
    {
      question: `Does the DPDP Act apply to businesses in ${state.name}?`,
      answer: `Yes. The DPDP Act 2023 applies to every business in India that processes digital personal data, regardless of state. Businesses in ${state.name} across all industries — including ${state.keyIndustries.join(", ")} — must comply by May 13, 2027.`,
    },
    {
      question: `What are the penalties for DPDP non-compliance in ${state.name}?`,
      answer: `Penalties under DPDP are uniform across India. The maximum fine is ₹250 crore for a data breach. With ${state.registeredCompanies} registered companies in ${state.name}, enforcement will be significant.`,
    },
    {
      question: `How can businesses in ${state.name} start DPDP compliance?`,
      answer: `Start with a data audit to identify all personal data you process. Then implement consent management, set up data subject rights processes, and establish breach notification procedures. KAVACH by Anumiti can automate this entire process starting at ₹2,999/month.`,
    },
    {
      question: `What types of businesses in ${state.name} are most affected by DPDP?`,
      answer: `In ${state.name}, the most affected sectors include ${state.keyIndustries.join(", ")}. ${state.dpdpConcerns}. Any business handling customer, employee, or vendor personal data must comply.`,
    },
    {
      question: `Is there a Consent Manager available for businesses in ${state.name}?`,
      answer: `Consent Manager registration under DPDP opens November 13, 2026. KAVACH by Anumiti is designed to qualify for Consent Manager registration and will serve businesses across India, including ${state.name}.`,
    },
  ];

  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: "DPDP by State", href: "/guides" },
            { name: state.name, href: `/guides/dpdp/state/${params.state}` },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          {/* Hero */}
          <div className="flex items-center gap-2 text-sm text-teal font-medium">
            <MapPin className="h-4 w-4" />
            {state.type === "state" ? "State" : "Union Territory"}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-navy md:text-4xl">
            DPDP Compliance Guide for {state.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything businesses in {state.name} need to know about the Digital Personal Data
            Protection Act 2023. {state.registeredCompanies} registered companies must comply
            before May 13, 2027.
          </p>

          {/* Urgency */}
          <div className="mt-8 rounded-lg bg-saffron-50 border border-saffron-200 p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-saffron mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy">
                {daysLeft} days until DPDP full enforcement
              </p>
              <p className="text-sm text-gray-600">
                Businesses in {state.name} processing personal data must be compliant by May 13, 2027.
              </p>
            </div>
          </div>

          {/* Key Industries */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="key-industries">
            What are the key industries affected by DPDP in {state.name}?
          </h2>
          <p className="mt-3 text-gray-600">
            {state.name} has {state.registeredCompanies} registered companies across multiple
            sectors. The key industries that must prioritize DPDP compliance are:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {state.keyIndustries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <Building2 className="h-5 w-5 text-indigo" />
                <span className="font-medium text-navy">{industry}</span>
              </div>
            ))}
          </div>

          {/* DPDP Concerns */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="specific-concerns">
            What are the specific DPDP compliance concerns in {state.name}?
          </h2>
          <p className="mt-3 text-gray-600">{state.dpdpConcerns}.</p>

          {/* Compliance Steps */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="compliance-steps">
            How should businesses in {state.name} prepare for DPDP?
          </h2>
          <ol className="mt-4 space-y-4">
            {[
              { step: "Data Audit", desc: `Map all personal data your ${state.name}-based business collects, processes, and stores.` },
              { step: "Consent Management", desc: "Implement DPDP-compliant consent collection for all data processing activities." },
              { step: "Rights Framework", desc: "Set up processes for data subject access, correction, erasure, and portability requests." },
              { step: "Security Measures", desc: "Implement reasonable security safeguards to protect personal data." },
              { step: "Breach Protocol", desc: "Establish a 72-hour breach notification process to the Data Protection Board." },
              { step: "Documentation", desc: "Maintain records of all data processing activities and consent artifacts." },
            ].map((item, i) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-navy">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-indigo p-8 text-center text-white">
            <h2 className="text-2xl font-bold">
              Get DPDP compliant in {state.name} — in under 30 minutes
            </h2>
            <p className="mt-2 text-indigo-100">
              KAVACH automates consent management, DPIA generation, and compliance monitoring
              for businesses across India.
            </p>
            <div className="mt-6">
              <CTAButton href="/kavach" variant="primary" size="lg">
                Start Free with KAVACH
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <div className="mx-auto max-w-3xl">
          <FAQSection faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
