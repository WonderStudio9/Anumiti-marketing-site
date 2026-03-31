import Link from "next/link";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { getAllGuides } from "@/lib/mdx";

export const metadata = generatePageMetadata({
  title: "DPDP Compliance Guides & Resources — Anumiti",
  description:
    "Comprehensive guides on the Digital Personal Data Protection Act 2023, DPDP Rules 2025, consent management, GDPR comparisons, and Indian compliance requirements. Free, regularly updated.",
  path: "/guides",
});

const categoryColors: Record<string, "teal" | "indigo" | "saffron" | "gray"> = {
  DPDP: "indigo",
  Compliance: "teal",
  Comparison: "saffron",
  "Consent Manager": "teal",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs items={[{ name: "Guides", href: "/guides" }]} />

        <div className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-teal" />
            <h1 className="text-4xl font-bold text-navy">
              Compliance Guides & Resources
            </h1>
          </div>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Everything you need to understand and comply with India&apos;s Digital Personal
            Data Protection Act. Written by compliance experts, updated regularly.
          </p>
        </div>

        {guides.length === 0 ? (
          <p className="text-gray-500">Guides are coming soon. Check back shortly.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <Badge variant={categoryColors[guide.meta.category] ?? "gray"}>
                      {guide.meta.category}
                    </Badge>
                  </div>
                  <Link href={`/guides/${guide.slug}`}>
                    <h2 className="text-lg font-semibold text-navy transition-colors group-hover:text-teal">
                      {guide.meta.title}
                    </h2>
                  </Link>
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                    {guide.meta.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Updated{" "}
                      {new Date(guide.meta.lastUpdated).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readingTime}
                    </span>
                  </div>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline"
                  >
                    Read guide <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
