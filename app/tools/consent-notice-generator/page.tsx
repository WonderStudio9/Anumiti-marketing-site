import { FileCheck } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Consent Notice Generator — DPDP-Compliant Notices | Anumiti",
  description:
    "Generate DPDP Act-compliant consent notices and privacy policies in English and Indian languages. Customizable templates for e-commerce, SaaS, healthcare, fintech, and more.",
  path: "/tools/consent-notice-generator",
});

const faqs = [
  {
    question: "What must a DPDP consent notice include?",
    answer:
      "A DPDP consent notice must include the types of personal data collected, the specific purpose for each data type, how data principals can exercise their rights, grievance officer contact details, and information about data sharing with processors.",
  },
  {
    question: "In which languages must consent notices be provided?",
    answer:
      "Consent notices must be available in English and at least one of the 22 Scheduled Languages of India, depending on the languages spoken by your user base.",
  },
  {
    question: "Can I use this generator for my production privacy notices?",
    answer:
      "The generated notices are a strong starting point but should be reviewed by a legal professional familiar with your specific data processing activities before deployment.",
  },
];

export default function ConsentNoticeGeneratorPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "Consent Notice Generator", href: "/tools/consent-notice-generator" },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              Consent Notice Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Generate DPDP-compliant consent notices for your website, app, or service.
            Choose your industry, select the data types you collect, and get a ready-to-use
            notice in multiple Indian languages.
          </p>

          {/* Generator placeholder */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <FileCheck className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              Interactive Generator Coming Soon
            </h2>
            <p className="mt-2 text-gray-500">
              Select your industry, data types, and processing purposes to generate
              a customizable consent notice in English, Hindi, and other Indian languages.
            </p>
            <div className="mt-6">
              <CTAButton href={CTA_URLS.kavachTrial} size="sm">
                Generate Notices with KAVACH
              </CTAButton>
            </div>
          </div>

          {/* What makes a good consent notice */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy">
              What makes a DPDP-compliant consent notice?
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                A compliant consent notice under the DPDP Act must be clear, specific,
                and provided before or at the point of data collection. It must use plain
                language that a reasonable person can understand.
              </p>
              <p>
                Key elements include a clear description of data types being collected,
                the specific purpose for each type, information about how long data will
                be retained, how to exercise data principal rights, and contact details
                for the grievance officer.
              </p>
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
