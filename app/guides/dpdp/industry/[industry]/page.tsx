import { notFound } from "next/navigation";
import { Building2, FileText, Shield, ArrowRight, AlertCircle } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import { daysUntilPhase3 } from "@/lib/constants";
import type { Metadata } from "next";

interface Props {
  params: { industry: string };
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) return {};
  return generatePageMetadata({
    title: `DPDP Compliance for ${industry.name} — Complete Guide`,
    description: `How ${industry.name} companies in India must comply with the DPDP Act 2023. Key data types, obligations, document processing, and compliance solutions.`,
    path: `/guides/dpdp/industry/${params.industry}`,
  });
}

export default function IndustryDPDPGuidePage({ params }: Props) {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) notFound();

  const daysLeft = daysUntilPhase3();

  const productRec =
    industry.recommendedProduct === "both"
      ? "both KAVACH (compliance) and NETRA (document intelligence)"
      : industry.recommendedProduct === "kavach"
        ? "KAVACH for DPDP compliance"
        : "NETRA for document intelligence";

  const faqs = [
    {
      question: `Does the DPDP Act apply to ${industry.name} companies?`,
      answer: `Yes. Every ${industry.name} company in India that processes digital personal data must comply with the DPDP Act 2023. This includes processing of ${industry.keyDataTypes.slice(0, 3).join(", ")}, and more.`,
    },
    {
      question: `What personal data does the ${industry.name} industry typically process?`,
      answer: `${industry.name} companies commonly process: ${industry.keyDataTypes.join(", ")}. All of this falls under DPDP regulation.`,
    },
    {
      question: `What documents does the ${industry.name} sector handle?`,
      answer: `Key document types in ${industry.name}: ${industry.documentTypes.join(", ")}. NETRA can extract structured data from all of these in 22 Indian languages.`,
    },
    {
      question: `What are the main DPDP obligations for ${industry.name}?`,
      answer: `${industry.name} companies must: ${industry.dpdpObligations.join(". ")}. Failure to comply can result in fines up to ₹250 crore.`,
    },
    {
      question: `How can ${industry.name} companies automate DPDP compliance?`,
      answer: `Anumiti offers ${productRec} — purpose-built for Indian businesses. Start free and get compliant in under 30 minutes.`,
    },
  ];

  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: "DPDP by Industry", href: "/guides" },
            { name: industry.name, href: `/guides/dpdp/industry/${params.industry}` },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-teal font-medium">
            <Building2 className="h-4 w-4" />
            Industry Guide
          </div>
          <h1 className="mt-2 text-3xl font-bold text-navy md:text-4xl">
            DPDP Compliance for {industry.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{industry.description}</p>
          <p className="mt-2 text-sm text-saffron font-medium">
            {daysLeft} days until full DPDP enforcement (May 13, 2027)
          </p>

          {/* Key Data Types */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="data-types">
            What personal data does the {industry.name} industry process?
          </h2>
          <ul className="mt-4 space-y-2">
            {industry.keyDataTypes.map((dt) => (
              <li key={dt} className="flex items-start gap-3 text-gray-600">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                {dt}
              </li>
            ))}
          </ul>

          {/* DPDP Obligations */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="obligations">
            What are the DPDP obligations for {industry.name} companies?
          </h2>
          <ol className="mt-4 space-y-3">
            {industry.dpdpObligations.map((obligation, i) => (
              <li key={obligation} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-gray-600">{obligation}</span>
              </li>
            ))}
          </ol>

          {/* Document Types */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="documents">
            What documents does the {industry.name} sector handle?
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {industry.documentTypes.map((doc) => (
              <span
                key={doc}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                <FileText className="mr-1 inline h-3 w-3" />
                {doc}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            NETRA processes all these document types in 22 Indian languages with 94% accuracy.
          </p>

          {/* Recommended Solution */}
          <h2 className="mt-12 text-2xl font-bold text-navy" id="solution">
            How can {industry.name} companies automate DPDP compliance?
          </h2>
          <div className="mt-4 rounded-xl border-2 border-teal/20 bg-teal-50/30 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-teal" />
              <span className="font-semibold text-navy">Recommended: {productRec}</span>
            </div>
            <p className="text-sm text-gray-600">
              Anumiti is built for Indian businesses in {industry.name} and every other sector.
              Start free, get compliant in under 30 minutes, and scale as you grow.
            </p>
            <div className="mt-4 flex gap-3">
              {(industry.recommendedProduct === "kavach" ||
                industry.recommendedProduct === "both") && (
                <CTAButton href="/kavach" variant="kavach" size="sm">
                  Explore KAVACH
                  <ArrowRight className="ml-1 h-4 w-4" />
                </CTAButton>
              )}
              {(industry.recommendedProduct === "netra" ||
                industry.recommendedProduct === "both") && (
                <CTAButton href="/netra" variant="netra" size="sm">
                  Explore NETRA
                  <ArrowRight className="ml-1 h-4 w-4" />
                </CTAButton>
              )}
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
