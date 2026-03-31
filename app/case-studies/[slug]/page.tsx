import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Layers } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { CTAButton } from "@/components/marketing/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata, articleSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS } from "@/lib/constants";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return generatePageMetadata({
    title: `${study.meta.title} | Anumiti`,
    description: study.meta.description,
    path: `/case-studies/${params.slug}`,
  });
}

const productBadge: Record<string, { label: string; variant: "indigo" | "saffron" | "teal" }> = {
  kavach: { label: "KAVACH", variant: "indigo" },
  netra: { label: "NETRA", variant: "saffron" },
  both: { label: "KAVACH + NETRA", variant: "teal" },
};

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const badge = productBadge[study.meta.product];
  const otherStudies = getAllCaseStudies()
    .filter((s) => s.slug !== params.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: study.meta.title,
          description: study.meta.description,
          url: `${SITE_CONFIG.url}/case-studies/${params.slug}`,
          datePublished: study.meta.date,
        })}
      />

      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Case Studies", href: "/case-studies" },
            { name: study.meta.company, href: `/case-studies/${params.slug}` },
          ]}
        />

        <article className="mx-auto mt-8 max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant={badge.variant}>{badge.label}</Badge>
              <Badge variant="gray">{study.meta.industry}</Badge>
            </div>
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              {study.meta.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{study.meta.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {study.meta.company}
              </span>
              <span className="flex items-center gap-1">
                <Layers className="h-4 w-4" />
                {study.meta.industry}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(study.meta.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </div>

          {/* Results summary */}
          <div className="mb-10 rounded-xl border border-teal/20 bg-teal-50 p-6">
            <h2 className="text-lg font-semibold text-navy">Key Results</h2>
            <ul className="mt-3 space-y-2">
              {study.meta.results.map((result) => (
                <li key={result} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-navy prose-lg max-w-none prose-headings:font-bold prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
            <div
              dangerouslySetInnerHTML={{
                __html: study.content
                  .replace(/^## (.*$)/gm, '<h2 id="$1">$1</h2>')
                  .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                  .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gm, "<p><strong>$1</strong>: $2</p>")
                  .replace(/^- (.*$)/gm, "<li>$1</li>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                  .replace(/^(?!<[hl]|<p|<li|<a|<str|<em|---)(.*\S.*)$/gm, "<p>$1</p>")
                  .replace(/---/g, "<hr />"),
              }}
            />
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-teal/20 bg-teal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-navy">
              Get similar results for your business
            </h2>
            <p className="mt-2 text-gray-600">
              See how Anumiti can transform your compliance and document workflows.
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
        </article>

        {/* Other case studies */}
        {otherStudies.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">More Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherStudies.map((s) => (
                <Link
                  key={s.slug}
                  href={`/case-studies/${s.slug}`}
                  className="rounded-lg border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <Badge variant={productBadge[s.meta.product].variant}>
                    {productBadge[s.meta.product].label}
                  </Badge>
                  <h3 className="mt-2 font-semibold text-navy line-clamp-2">
                    {s.meta.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    {s.meta.company} &middot; {s.meta.industry}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All Case Studies
          </Link>
        </div>
      </Section>
    </>
  );
}
