import { ClipboardCheck } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FAQSection } from "@/components/marketing/faq-section";
import { ComplianceChecklist } from "@/components/tools/compliance-checklist";
import { generatePageMetadata } from "@/lib/seo";

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

          {/* Interactive Checklist */}
          <div className="mt-10">
            <ComplianceChecklist />
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
