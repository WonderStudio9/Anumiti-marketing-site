import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { comparisons } from "@/data/comparisons";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata = generatePageMetadata({
  title: "Product Comparisons — Anumiti vs Alternatives",
  description:
    "See how Anumiti KAVACH and NETRA compare to OneTrust, AWS Textract, Google Document AI, Sarvam AI, and Privy. Feature-by-feature comparisons for DPDP compliance and Indian document intelligence.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <>
      <div className="py-24 md:py-32">
        <Section background="white">
          <Breadcrumbs items={[{ name: "Compare", href: "/compare" }]} />

          <ScrollReveal>
            <div className="mt-8 mb-12">
              <h1 className="text-4xl font-bold text-navy">Product Comparisons</h1>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Honest, feature-by-feature comparisons of Anumiti products against
                alternatives. We highlight where we excel and where others may be a
                better fit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {comparisons.map((comp, index) => {
              const isKavach = comp.slug.startsWith("kavach") || comp.slug.startsWith("anumiti");
              return (
                <ScrollReveal key={comp.slug} delay={index * 0.08}>
                  <article className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                    <Badge variant={isKavach ? "indigo" : "saffron"}>
                      {comp.headers[0]} vs {comp.headers[1]}
                    </Badge>
                    <Link href={`/compare/${comp.slug}`}>
                      <h2 className="mt-3 text-lg font-semibold text-navy transition-colors group-hover:text-teal">
                        {comp.title}
                      </h2>
                    </Link>
                    <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                      {comp.description}
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      {comp.rows.length} features compared
                    </div>
                    <Link
                      href={`/compare/${comp.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline"
                    >
                      View comparison <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Section>
      </div>
    </>
  );
}
