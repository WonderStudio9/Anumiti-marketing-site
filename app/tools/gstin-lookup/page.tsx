import { Search } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "GSTIN Lookup — Verify Business Registration | Anumiti",
  description:
    "Free GSTIN lookup tool. Verify any GST Identification Number to check business registration details, filing status, and compliance history. Powered by official government data.",
  path: "/tools/gstin-lookup",
});

const faqs = [
  {
    question: "What information does a GSTIN lookup return?",
    answer:
      "A GSTIN lookup returns the legal name of the business, trade name, registration date, type of registration (regular, composition, etc.), jurisdiction, principal place of business, and current filing status.",
  },
  {
    question: "How current is the GSTIN data?",
    answer:
      "Data is fetched from official government sources and reflects the most recent available information. Filing status may have a lag of a few days from the actual filing date.",
  },
  {
    question: "Can I verify a GSTIN before doing business with a vendor?",
    answer:
      "Yes, that is one of the primary use cases. Verifying a vendor's GSTIN helps confirm they are legitimately registered, their registration is active, and you can claim valid input tax credit on their invoices.",
  },
  {
    question: "What is the format of a GSTIN?",
    answer:
      "A GSTIN is a 15-character alphanumeric code. The first two digits represent the state code, the next 10 characters are the PAN of the taxpayer, the 13th character is the entity number, the 14th is 'Z' by default, and the 15th is a checksum digit.",
  },
];

export default function GSTINLookupPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "GSTIN Lookup", href: "/tools/gstin-lookup" },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-saffron-600" />
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              GSTIN Lookup
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Verify any GSTIN instantly. Check business registration details, filing
            status, and compliance history before engaging with vendors or partners.
          </p>

          {/* Lookup placeholder */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              GSTIN Search Coming Soon
            </h2>
            <p className="mt-2 text-gray-500">
              Enter a 15-digit GSTIN to instantly retrieve business details,
              registration type, and filing compliance status.
            </p>
            <div className="mt-6">
              <CTAButton href={CTA_URLS.netraApiKey} size="sm">
                Automate GSTIN Validation with NETRA API
              </CTAButton>
            </div>
          </div>

          {/* GSTIN Format explanation */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy">
              How is a GSTIN structured?
            </h2>
            <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Position</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Characters</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pos: "1-2", chars: "2 digits", meaning: "State code" },
                    { pos: "3-12", chars: "10 characters", meaning: "PAN of the taxpayer" },
                    { pos: "13", chars: "1 digit", meaning: "Entity number within a state" },
                    { pos: "14", chars: "1 character", meaning: "Default 'Z'" },
                    { pos: "15", chars: "1 character", meaning: "Checksum digit" },
                  ].map((row) => (
                    <tr key={row.pos} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-mono text-gray-700">{row.pos}</td>
                      <td className="px-4 py-3 text-gray-700">{row.chars}</td>
                      <td className="px-4 py-3 text-gray-700">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
