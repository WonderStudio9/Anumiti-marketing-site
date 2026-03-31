import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { getAllCaseStudies } from "@/lib/mdx";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata = generatePageMetadata({
  title: "Case Studies — Real Compliance & Document Intelligence Results | Anumiti",
  description:
    "See how Indian businesses use Anumiti KAVACH and NETRA to achieve DPDP compliance, automate document processing, and reduce manual work. Real results from fintech, legal, and accounting companies.",
  path: "/case-studies",
});

const productBadge: Record<string, { label: string; variant: "indigo" | "saffron" | "teal" }> = {
  kavach: { label: "KAVACH", variant: "indigo" },
  netra: { label: "NETRA", variant: "saffron" },
  both: { label: "KAVACH + NETRA", variant: "teal" },
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <div className="py-24 md:py-32">
        <Section background="white">
          <Breadcrumbs items={[{ name: "Case Studies", href: "/case-studies" }]} />

          <ScrollReveal>
            <div className="mt-8 mb-12">
              <h1 className="text-4xl font-bold text-navy">Case Studies</h1>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Real results from Indian businesses using Anumiti for DPDP compliance
                and document intelligence. See how companies like yours reduced
                compliance timelines, automated manual processes, and built trust.
              </p>
            </div>
          </ScrollReveal>

          {studies.length === 0 ? (
            <p className="text-gray-500">Case studies are coming soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {studies.map((study, index) => {
                const badge = productBadge[study.meta.product];
                return (
                  <ScrollReveal key={study.slug} delay={index * 0.08}>
                    <article className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Badge variant={badge.variant}>{badge.label}</Badge>
                          <Badge variant="gray">{study.meta.industry}</Badge>
                        </div>
                        <Link href={`/case-studies/${study.slug}`}>
                          <h2 className="text-lg font-semibold text-navy transition-colors group-hover:text-teal">
                            {study.meta.title}
                          </h2>
                        </Link>
                        <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                          {study.meta.description}
                        </p>

                        {/* Key results preview */}
                        <div className="mt-4 space-y-1">
                          {study.meta.results.slice(0, 2).map((result) => (
                            <div
                              key={result}
                              className="flex items-start gap-2 text-xs text-gray-500"
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                              {result}
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {study.meta.company} &middot; {study.meta.industry}
                        </div>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline"
                        >
                          Read case study <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </Section>
      </div>
    </>
  );
}
