import { Calculator } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FAQSection } from "@/components/marketing/faq-section";
import { PenaltyCalculator } from "@/components/tools/penalty-calculator";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "DPDP Penalty Calculator — Estimate Your Risk | Anumiti",
  description:
    "Free DPDP Act 2023 penalty calculator. Estimate potential fines based on violation type, company size, and aggravating factors. Penalties range from Rs 10,000 to Rs 250 crore.",
  path: "/tools/dpdp-penalty-calculator",
});

const faqs = [
  {
    question: "How are DPDP penalties calculated?",
    answer:
      "DPDP penalties are determined by the Data Protection Board of India based on the nature and gravity of the non-compliance, the duration, whether it is a repeat offense, the type and volume of data affected, and the actions taken by the fiduciary to mitigate the breach.",
  },
  {
    question: "What is the maximum penalty under the DPDP Act?",
    answer:
      "The maximum penalty is Rs 250 crore (approximately USD 30 million) for failure to implement reasonable security safeguards that leads to a personal data breach.",
  },
  {
    question: "Can individuals be penalized under the DPDP Act?",
    answer:
      "Yes. Data principals who provide false information or file frivolous complaints can face penalties up to Rs 10,000.",
  },
  {
    question: "Is this calculator legally binding?",
    answer:
      "No. This calculator provides estimates for educational and planning purposes only. Actual penalties are determined solely by the Data Protection Board of India based on the specific facts of each case.",
  },
];

export default function DPDPPenaltyCalculatorPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "DPDP Penalty Calculator", href: "/tools/dpdp-penalty-calculator" },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              DPDP Penalty Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Estimate potential penalties under the Digital Personal Data Protection Act
            2023. Select the violation type and aggravating factors to understand your risk
            exposure.
          </p>

          {/* Interactive Calculator */}
          <div className="mt-10">
            <PenaltyCalculator />
          </div>

          {/* Penalty overview */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy">
              What are the penalty tiers under the DPDP Act?
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  violation: "Failure to implement security safeguards leading to breach",
                  penalty: "Up to Rs 250 crore",
                },
                {
                  violation: "Failure to notify Board and data principals of breach",
                  penalty: "Up to Rs 200 crore",
                },
                {
                  violation: "Non-compliance with children's data obligations",
                  penalty: "Up to Rs 200 crore",
                },
                {
                  violation: "Failure to fulfill general data fiduciary obligations",
                  penalty: "Up to Rs 150 crore",
                },
                {
                  violation: "Data principal providing false information / frivolous complaints",
                  penalty: "Up to Rs 10,000",
                },
              ].map((item) => (
                <div
                  key={item.violation}
                  className="flex items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <span className="text-sm text-gray-700">{item.violation}</span>
                  <span className="shrink-0 text-sm font-semibold text-red-600">
                    {item.penalty}
                  </span>
                </div>
              ))}
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
