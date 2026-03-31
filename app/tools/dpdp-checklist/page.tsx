import { ClipboardCheck } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "DPDP Compliance Checklist — Track Your Readiness | Anumiti",
  description:
    "Free interactive DPDP Act 2023 compliance checklist. Cover consent management, privacy notices, data principal rights, security safeguards, breach response, and Significant Data Fiduciary obligations.",
  path: "/tools/dpdp-checklist",
});

const faqs = [
  {
    question: "What does the DPDP compliance checklist cover?",
    answer:
      "The checklist covers all key DPDP Act requirements: data mapping, consent mechanisms, privacy notices, data principal rights workflows, security safeguards, breach notification procedures, vendor management, and Significant Data Fiduciary obligations.",
  },
  {
    question: "How long does it take to complete the DPDP checklist?",
    answer:
      "The initial assessment takes approximately 15-20 minutes. However, achieving full compliance across all items typically requires weeks to months of implementation work depending on your organization's size and data processing complexity.",
  },
  {
    question: "Is this checklist sufficient for DPDP compliance?",
    answer:
      "This checklist is a comprehensive starting point but should not replace professional legal advice. Each organization's compliance needs are unique based on their data processing activities, industry, and scale.",
  },
];

const checklistCategories = [
  {
    title: "Data Mapping & Inventory",
    items: [
      "Inventory all personal data collection points",
      "Document purposes for each data processing activity",
      "Map data flows including third-party sharing",
      "Identify data storage locations and retention periods",
    ],
  },
  {
    title: "Consent Management",
    items: [
      "Implement granular consent collection mechanism",
      "Ensure consent is as easy to withdraw as to give",
      "Record and maintain consent audit trails",
      "Support Consent Manager integration",
    ],
  },
  {
    title: "Privacy Notices",
    items: [
      "Draft DPDP-compliant privacy notices",
      "Provide notices in English and regional languages",
      "Display notices before or at point of collection",
      "Include all prescribed content requirements",
    ],
  },
  {
    title: "Data Principal Rights",
    items: [
      "Build access request workflow",
      "Implement correction and erasure mechanisms",
      "Establish grievance redressal process",
      "Support nomination rights",
    ],
  },
  {
    title: "Security & Breach Response",
    items: [
      "Implement reasonable security safeguards",
      "Create breach detection and response plan",
      "Establish Board notification process",
      "Build data principal breach notification workflow",
    ],
  },
  {
    title: "Governance (Significant Data Fiduciaries)",
    items: [
      "Appoint India-based Data Protection Officer",
      "Conduct Data Protection Impact Assessments",
      "Arrange periodic independent audits",
      "Implement algorithmic transparency measures",
    ],
  },
];

export default function DPDPChecklistPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "DPDP Compliance Checklist", href: "/tools/dpdp-checklist" },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              DPDP Compliance Checklist
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Track your organization&apos;s DPDP Act compliance readiness. This checklist
            covers all major requirements from consent management to breach response.
          </p>

          {/* Interactive checklist placeholder */}
          <div className="mt-10 space-y-8">
            {checklistCategories.map((category) => (
              <div key={category.title} className="rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-6 py-4">
                  <h2 className="text-lg font-semibold text-navy">
                    {category.title}
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  {category.items.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        disabled
                        className="mt-1 h-4 w-4 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-xl border border-teal/20 bg-teal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-navy">
              Automate your DPDP compliance
            </h2>
            <p className="mt-2 text-gray-600">
              KAVACH turns this checklist into automated workflows — consent
              management, rights handling, breach detection, and audit reports.
            </p>
            <div className="mt-4">
              <CTAButton href={CTA_URLS.kavachTrial} size="sm">
                Start Free Trial
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="mx-auto max-w-3xl">
          <FAQSection faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
