import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { CHANGELOG } from "@/data/changelog";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata = generatePageMetadata({
  title: "Changelog — Product Updates & Releases | Anumiti",
  description:
    "Stay up to date with the latest Anumiti product updates. New features, improvements, and fixes for KAVACH (DPDP compliance) and NETRA (document intelligence).",
  path: "/changelog",
});

function getProductFromTitle(title: string): "kavach" | "netra" | "platform" {
  if (title.toLowerCase().includes("kavach")) return "kavach";
  if (title.toLowerCase().includes("netra")) return "netra";
  return "platform";
}

const productBadgeMap: Record<
  string,
  { label: string; variant: "indigo" | "saffron" | "teal" }
> = {
  kavach: { label: "KAVACH", variant: "indigo" },
  netra: { label: "NETRA", variant: "saffron" },
  platform: { label: "Platform", variant: "teal" },
};

export default function ChangelogPage() {
  return (
    <>
      <div className="py-24 md:py-32">
        <Section background="white">
          <Breadcrumbs items={[{ name: "Changelog", href: "/changelog" }]} />

          <ScrollReveal>
            <div className="mt-8 mb-12">
              <h1 className="text-4xl font-bold text-navy">Changelog</h1>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                What&apos;s new in Anumiti. Product updates, new features, and
                improvements for KAVACH and NETRA.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl">
            {/* Timeline */}
            <div className="relative border-l-2 border-gray-200 pl-8">
              {CHANGELOG.map((entry, index) => {
                const product = getProductFromTitle(entry.title);
                const badge = productBadgeMap[product];
                return (
                  <ScrollReveal key={entry.version} delay={index * 0.08}>
                    <div className="relative mb-12 last:mb-0">
                      {/* Timeline dot */}
                      <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-teal bg-white" />

                      {/* Date and version */}
                      <div className="mb-2 flex items-center gap-3">
                        <time className="text-sm font-medium text-gray-500">
                          {new Date(entry.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <Badge variant="gray">v{entry.version}</Badge>
                        <Badge variant={badge.variant}>{badge.label}</Badge>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-semibold text-navy">
                        {entry.title}
                      </h2>

                      {/* Changes */}
                      <ul className="mt-3 space-y-2">
                        {entry.changes.map((change) => (
                          <li
                            key={change}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
