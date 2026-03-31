import { Globe, FileText, Shield, Eye, Code, Search, CreditCard, ArrowRight } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CTAButton } from "@/components/marketing/cta-button";
import { Badge } from "@/components/marketing/badge";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "API Playground — Try NETRA & KAVACH APIs Live | Anumiti",
  description:
    "Try Anumiti NETRA and KAVACH APIs interactively. Upload sample Indian documents, test OCR extraction, PII redaction, and compliance endpoints. No API key required for sample documents.",
  path: "/playground",
});

const endpoints = [
  {
    icon: FileText,
    name: "NETRA: Extract Document",
    method: "POST",
    path: "/v1/netra/extract",
    description: "Extract structured data from an Indian document image or PDF.",
    product: "netra" as const,
  },
  {
    icon: Eye,
    name: "NETRA: Detect PII",
    method: "POST",
    path: "/v1/netra/pii/detect",
    description: "Detect personal identifiable information in extracted text.",
    product: "netra" as const,
  },
  {
    icon: Shield,
    name: "NETRA: Redact PII",
    method: "POST",
    path: "/v1/netra/pii/redact",
    description: "Automatically redact PII from a document and return the cleaned output.",
    product: "netra" as const,
  },
  {
    icon: Search,
    name: "NETRA: GSTIN Verification",
    method: "GET",
    path: "/v1/netra/verify/gstin/{gstin}",
    description: "Verify GSTIN against the GST Network.",
    product: "netra" as const,
  },
  {
    icon: Code,
    name: "KAVACH: Record Consent",
    method: "POST",
    path: "/v1/kavach/consent/record",
    description: "Record a data principal's consent for specified processing purposes.",
    product: "kavach" as const,
  },
  {
    icon: CreditCard,
    name: "KAVACH: Check Compliance",
    method: "GET",
    path: "/v1/kavach/compliance/score",
    description: "Get your current DPDP compliance score and gap analysis.",
    product: "kavach" as const,
  },
];

const sampleDocuments = [
  { name: "GST Invoice (Hindi)", type: "Invoice", language: "Hindi" },
  { name: "Aadhaar Card (Redacted)", type: "Identity", language: "English + Hindi" },
  { name: "PAN Card", type: "Identity", language: "English" },
  { name: "Property Agreement (Tamil)", type: "Legal", language: "Tamil" },
  { name: "Court Order (Telugu)", type: "Legal", language: "Telugu" },
  { name: "Bank Statement (English)", type: "Financial", language: "English" },
];

export default function PlaygroundPage() {
  return (
    <>
      <div className="pt-28" />
      <Section background="white">
        <Breadcrumbs items={[{ name: "API Playground", href: "/playground" }]} />

        <div className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-8 w-8 text-teal" />
            <h1 className="text-4xl font-bold text-navy">API Playground</h1>
          </div>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Try Anumiti APIs live. Upload sample Indian documents, test extraction
            and redaction endpoints, and explore compliance APIs — no API key
            required for sample documents.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Endpoint selector */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-navy">Endpoints</h2>
            <div className="space-y-2">
              {endpoints.map((ep) => (
                <button
                  key={ep.path}
                  disabled
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 text-left transition-all hover:border-gray-300 hover:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={ep.product === "netra" ? "saffron" : "indigo"}
                    >
                      {ep.method}
                    </Badge>
                    <span className="text-xs font-mono text-gray-500">
                      {ep.path}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-navy">{ep.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {ep.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Request / Response panels */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sample documents */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy">
                Sample Documents
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {sampleDocuments.map((doc) => (
                  <div
                    key={doc.name}
                    className="rounded-lg border border-gray-200 bg-white p-3 opacity-60"
                  >
                    <FileText className="h-5 w-5 text-gray-400" />
                    <p className="mt-1 text-sm font-medium text-navy">
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {doc.type} &middot; {doc.language}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Request panel */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-navy">Request</h2>
              <div className="rounded-lg border border-gray-200 bg-gray-900 p-4 font-mono text-sm text-gray-300">
                <div className="text-gray-500">
                  {`// Select an endpoint and document above`}
                </div>
                <div className="mt-2">
                  <span className="text-green-400">POST</span>{" "}
                  <span className="text-blue-300">
                    https://api.anumiti.com/v1/netra/extract
                  </span>
                </div>
                <div className="mt-2 text-gray-500">
                  {`{`}
                  <br />
                  {`  "document": "sample_gst_invoice.pdf",`}
                  <br />
                  {`  "language": "hi",`}
                  <br />
                  {`  "extract_tables": true`}
                  <br />
                  {`}`}
                </div>
              </div>
            </div>

            {/* Response panel */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-navy">Response</h2>
              <div className="rounded-lg border border-gray-200 bg-gray-900 p-4 font-mono text-sm text-gray-300">
                <div className="text-gray-500">
                  {`// Interactive responses coming soon`}
                </div>
                <div className="mt-2 text-gray-500">
                  {`{`}
                  <br />
                  {`  "status": "success",`}
                  <br />
                  {`  "data": {`}
                  <br />
                  {`    "gstin": "29ABCDE1234F1Z5",`}
                  <br />
                  {`    "invoice_number": "INV-2026-001",`}
                  <br />
                  {`    "total": 11800.00,`}
                  <br />
                  {`    "line_items": [...],`}
                  <br />
                  {`    "confidence": 0.97`}
                  <br />
                  {`  }`}
                  <br />
                  {`}`}
                </div>
              </div>
            </div>

            {/* Coming soon notice */}
            <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <Globe className="mx-auto h-10 w-10 text-gray-400" />
              <h3 className="mt-3 text-lg font-semibold text-gray-700">
                Interactive Playground Coming Soon
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Upload real documents, switch endpoints, and see live API
                responses. In the meantime, get an API key and try our endpoints
                directly.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <CTAButton href={CTA_URLS.netraApiKey} variant="netra" size="sm">
                  Get API Key <ArrowRight className="ml-1 h-4 w-4" />
                </CTAButton>
                <CTAButton href={CTA_URLS.docs} variant="secondary" size="sm">
                  Read API Docs
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
