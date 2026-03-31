import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { FAQSection } from "@/components/marketing/faq-section";
import { CTAButton } from "@/components/marketing/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata, faqSchema } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";
import { getComparisonBySlug, getAllComparisonSlugs } from "@/data/comparisons";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const comp = getComparisonBySlug(params.slug);
  if (!comp) return {};
  return generatePageMetadata({
    title: `${comp.title} | Anumiti`,
    description: comp.description,
    path: `/compare/${params.slug}`,
  });
}

export default function ComparisonPage({ params }: Props) {
  const comp = getComparisonBySlug(params.slug);
  if (!comp) notFound();

  return (
    <>
      {comp.faqs.length > 0 && <JsonLd data={faqSchema(comp.faqs)} />}

      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Compare", href: "/compare" },
            { name: `${comp.headers[0]} vs ${comp.headers[1]}`, href: `/compare/${params.slug}` },
          ]}
        />

        <div className="mx-auto mt-8 max-w-4xl">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">
            {comp.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{comp.description}</p>

          {/* Comparison Table */}
          <div className="mt-10">
            <ComparisonTable
              headers={comp.headers}
              rows={comp.rows}
              highlightColumn={comp.highlightColumn}
            />
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-teal/20 bg-teal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-navy">
              Ready to see {comp.headers[0]} in action?
            </h2>
            <p className="mt-2 text-gray-600">
              Start a free trial and experience the difference for yourself.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <CTAButton href={CTA_URLS.signup} size="sm">
                Start Free Trial
              </CTAButton>
              <CTAButton href={CTA_URLS.bookDemo} variant="secondary" size="sm">
                Book a Demo
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      {comp.faqs.length > 0 && (
        <Section background="gray">
          <div className="mx-auto max-w-3xl">
            <FAQSection
              title={`${comp.headers[0]} vs ${comp.headers[1]} — FAQ`}
              faqs={comp.faqs}
            />
          </div>
        </Section>
      )}

      <Section background="white">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All Comparisons
          </Link>
        </div>
      </Section>
    </>
  );
}
