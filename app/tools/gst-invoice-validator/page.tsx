import { FileText } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "GST Invoice Validator — Check Invoice Compliance | Anumiti",
  description:
    "Free GST invoice validator. Upload an invoice to check GSTIN format, mandatory fields, HSN codes, tax calculations, and compliance with GST rules. Powered by Anumiti NETRA.",
  path: "/tools/gst-invoice-validator",
});

const faqs = [
  {
    question: "What does the GST Invoice Validator check?",
    answer:
      "The validator checks GSTIN format validity, mandatory invoice fields (supplier name, address, GSTIN, invoice number, date, HSN/SAC codes, taxable value, tax amounts), correct tax rate application, and mathematical accuracy of tax calculations.",
  },
  {
    question: "Can I validate invoices in regional languages?",
    answer:
      "Yes. Powered by Anumiti NETRA, the validator can process invoices in all 22 scheduled Indian languages, including Hindi, Tamil, Telugu, Bengali, Marathi, and more.",
  },
  {
    question: "How accurate is the validation?",
    answer:
      "The validator checks structural and format compliance with high accuracy. For tax rate verification, it references current GST rate schedules. However, it should be used as a screening tool and does not replace a professional tax audit.",
  },
];

export default function GSTInvoiceValidatorPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "GST Invoice Validator", href: "/tools/gst-invoice-validator" },
          ]}
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-saffron-600" />
            <h1 className="text-3xl font-bold text-navy md:text-4xl">
              GST Invoice Validator
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Upload a GST invoice to instantly validate GSTIN format, mandatory fields,
            HSN codes, and tax calculations. Supports all Indian languages.
          </p>

          {/* Validator placeholder */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              Upload and Validate Coming Soon
            </h2>
            <p className="mt-2 text-gray-500">
              Drag and drop a GST invoice image or PDF to validate against GST rules.
              Supports scanned documents in 22 Indian languages.
            </p>
            <div className="mt-6">
              <CTAButton href={CTA_URLS.netraApiKey} size="sm">
                Try NETRA API for Invoice Processing
              </CTAButton>
            </div>
          </div>

          {/* Validation checks */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy">
              What fields does the validator check?
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Supplier GSTIN format and checksum",
                "Buyer GSTIN (if B2B)",
                "Invoice number and date",
                "Place of supply",
                "HSN / SAC codes",
                "Taxable value per line item",
                "CGST / SGST / IGST calculation",
                "Total invoice amount accuracy",
              ].map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-teal" />
                  {check}
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
