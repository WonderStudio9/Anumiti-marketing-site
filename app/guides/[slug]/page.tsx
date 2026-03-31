import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQSection } from "@/components/marketing/faq-section";
import { CTAButton } from "@/components/marketing/cta-button";
import { generatePageMetadata, articleSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS } from "@/lib/constants";
import { getGuideBySlug, getGuideSlugs, getAllGuides } from "@/lib/mdx";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return generatePageMetadata({
    title: `${guide.meta.title} — Anumiti`,
    description: guide.meta.description,
    path: `/guides/${params.slug}`,
  });
}

function getRelatedGuides(currentSlug: string, category: string, limit = 3) {
  return getAllGuides()
    .filter((g) => g.slug !== currentSlug)
    .filter((g) => g.meta.category === category)
    .slice(0, limit);
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = getRelatedGuides(params.slug, guide.meta.category);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: guide.meta.title,
          description: guide.meta.description,
          url: `${SITE_CONFIG.url}/guides/${params.slug}`,
          datePublished: guide.meta.lastUpdated,
          dateModified: guide.meta.lastUpdated,
        })}
      />

      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: guide.meta.title, href: `/guides/${params.slug}` },
          ]}
        />

        <article className="mx-auto mt-8 max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="indigo">{guide.meta.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              {guide.meta.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{guide.meta.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Last updated{" "}
                {new Date(guide.meta.lastUpdated).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {guide.readingTime}
              </span>
            </div>
          </div>

          {/* Table of Contents placeholder */}
          <div className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              In this guide
            </h2>
            <p className="text-sm text-gray-500">
              Navigate the sections below for a complete overview.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-navy prose-lg max-w-none prose-headings:font-bold prose-h2:text-navy-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
            <div
              dangerouslySetInnerHTML={{
                __html: guide.content
                  .replace(
                    /^## (.*$)/gm,
                    '<h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">$1</h2>'
                  )
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-navy-800 mt-6 mb-3">$1</h3>')
                  .replace(
                    /^\d+\. \*\*(.*?)\*\*: (.*$)/gm,
                    "<p><strong>$1</strong>: $2</p>"
                  )
                  .replace(/^- (.*$)/gm, "<li>$1</li>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(
                    /\[(.*?)\]\((.*?)\)/g,
                    '<a href="$2">$1</a>'
                  )
                  .replace(
                    /^(?!<[hl]|<p|<li|<a|<str|<em|---|\|)(.*\S.*)$/gm,
                    "<p>$1</p>"
                  )
                  .replace(/---/g, "<hr />"),
              }}
            />
          </div>

          {/* Keywords */}
          {guide.meta.keywords && (
            <div className="mt-8 flex flex-wrap gap-2">
              {guide.meta.keywords.map((kw) => (
                <Badge key={kw} variant="gray">
                  {kw}
                </Badge>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-teal/20 bg-teal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-navy">
              Ready to get compliant?
            </h2>
            <p className="mt-2 text-gray-600">
              Anumiti KAVACH automates DPDP compliance end-to-end.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <CTAButton href={CTA_URLS.kavachTrial} size="sm">
                Start Free Trial
              </CTAButton>
              <CTAButton href={CTA_URLS.bookDemo} variant="secondary" size="sm">
                Book a Demo
              </CTAButton>
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        {guide.meta.faqs && guide.meta.faqs.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <FAQSection faqs={guide.meta.faqs} />
          </div>
        )}

        {/* Related Guides */}
        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">
              Related Guides
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/guides/${r.slug}`}
                  className="rounded-lg border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <h3 className="font-semibold text-navy line-clamp-2">
                    {r.meta.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">{r.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All Guides
          </Link>
        </div>
      </Section>
    </>
  );
}
