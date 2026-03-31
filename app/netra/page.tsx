"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Zap,
  Globe,
  Target,
  Server,
} from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQSection } from "@/components/marketing/faq-section";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { Badge } from "@/components/marketing/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { productSchema } from "@/lib/seo";
import { SITE_CONFIG, CTA_URLS, PRODUCTS } from "@/lib/constants";
import { NETRA_FEATURES, NETRA_USE_CASES, SUPPORTED_DOCUMENTS } from "@/data/features";
import { CodeTabs } from "./code-tabs";


const DEMO_CURL = `curl -X POST https://api.anumiti.com/v1/extract \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@invoice.pdf" \\
  -F "document_type=gst_invoice" \\
  -F "language=auto"`;

const DEMO_RESPONSE = `{
  "status": "success",
  "document_type": "gst_invoice",
  "language_detected": "hi-en",
  "confidence": 0.97,
  "processing_time_ms": 84,
  "data": {
    "gstin_seller": "27AABCU9603R1ZM",
    "gstin_buyer": "07AAACN1234L1Z5",
    "invoice_number": "INV-2026-00142",
    "invoice_date": "2026-03-28",
    "total_amount": 14750.00,
    "cgst": 1327.50,
    "sgst": 1327.50,
    "line_items": [
      {
        "description": "Cloud Hosting - Monthly",
        "hsn_code": "998315",
        "quantity": 1,
        "rate": 12095.00,
        "amount": 12095.00
      }
    ]
  }
}`;

export default function NetraPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "NETRA",
          description: PRODUCTS.netra.tagline,
          url: `${SITE_CONFIG.url}/netra`,
          category: "DeveloperApplication",
          price: "0",
          priceCurrency: "INR",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-saffron to-orange-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "NETRA", href: "/netra" }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="saffron">The Eye {PRODUCTS.netra.nameHindi}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
              {PRODUCTS.netra.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl">
              The document intelligence API built for India. Extract structured data from 50+ Indian
              document types in 22 languages. Sub-100ms latency. 94% accuracy. One API call.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_URLS.netraApiKey} variant="primary" size="lg">
                Get API Key — free tier
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton
                href={CTA_URLS.docs}
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Read the Docs
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* API Demo Mockup */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What does a NETRA API call look like?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One request. Structured JSON. Every field with a confidence score.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Request
            </h3>
            <div className="overflow-x-auto rounded-lg bg-navy p-6">
              <pre className="text-sm leading-relaxed text-teal">
                <code>{DEMO_CURL}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Response
            </h3>
            <div className="overflow-x-auto rounded-lg bg-navy p-6">
              <pre className="text-sm leading-relaxed text-gray-300">
                <code>{DEMO_RESPONSE}</code>
              </pre>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="gray" id="features">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What can NETRA do?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Document intelligence purpose-built for Indian documents, languages, and formats.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NETRA_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              accentColor="saffron"
            />
          ))}
        </div>
      </Section>

      {/* Supported Documents */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Which Indian documents does NETRA support?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            50+ document types and growing. Here are the most popular.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SUPPORTED_DOCUMENTS.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-saffron/40 hover:bg-saffron-50"
            >
              <FileCheck className="h-4 w-4 shrink-0 text-saffron" />
              {doc}
            </div>
          ))}
        </div>
      </Section>

      {/* Code Samples */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How do I integrate NETRA?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            SDKs for every stack. 5-minute integration.
          </p>
        </div>
        <CodeTabs />
      </Section>

      {/* Performance Stats */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How fast and accurate is NETRA?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built for production workloads. Not a demo.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { icon: Zap, value: "<100ms", label: "Processing latency" },
            { icon: Target, value: "94%", label: "Extraction accuracy" },
            { icon: Globe, value: "22", label: "Indian languages" },
            { icon: Server, value: "500", label: "Docs per batch request" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-saffron" />
              <div className="text-3xl font-bold text-navy md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            How does NETRA compare to alternatives?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Purpose-built for India. Not a global OCR adapted for Indic scripts.
          </p>
        </div>
        <ComparisonTable
          headers={["NETRA", "AWS Textract", "Google Document AI", "Sarvam Vision"]}
          highlightColumn={0}
          rows={[
            { feature: "22 Indian language support", values: [true, false, "Limited", "Limited"] },
            { feature: "Indian document types (50+)", values: [true, false, false, "Limited"] },
            { feature: "GSTIN verification built-in", values: [true, false, false, false] },
            { feature: "Sub-100ms latency", values: [true, false, false, true] },
            { feature: "Trust scoring per field", values: [true, false, true, false] },
            { feature: "Batch API (500 docs)", values: [true, true, true, false] },
            { feature: "Hindi-English mixed docs", values: [true, "Limited", "Limited", true] },
            { feature: "India data residency", values: [true, true, true, true] },
            { feature: "Free tier", values: ["100 pages/mo", false, "1,000 pages/mo", false] },
            { feature: "Starting price", values: ["\u20B92,999/mo", "Pay per page", "$300/mo", "Contact"] },
          ]}
        />
      </Section>

      {/* Use Cases */}
      <Section background="white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Who uses NETRA?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Document intelligence for every industry that processes Indian documents.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NETRA_USE_CASES.map((useCase) => (
            <Link
              key={useCase.href}
              href={useCase.href}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-saffron/40 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-saffron-50">
                <useCase.icon className="h-6 w-6 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-navy group-hover:text-saffron">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{useCase.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <FAQSection
          title="NETRA — Frequently Asked Questions"
          faqs={[
            {
              question: "What document types can NETRA extract data from?",
              answer:
                "NETRA supports 50+ Indian document types including GST invoices, e-invoices, PAN cards, Aadhaar cards (masked extraction only), bank statements, cheques, driving licenses, passports, voter IDs, court orders, legal contracts, employment letters, salary slips, ITR forms, MCA filings, property documents, insurance policies, medical records, educational certificates, and stamp papers.",
            },
            {
              question: "Which Indian languages does NETRA support?",
              answer:
                "NETRA supports all 22 scheduled languages of India: Hindi, Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Maithili, Santali, Kashmiri, Nepali, Sindhi, Konkani, Dogri, Manipuri, Bodo, and Sanskrit. It also handles Hindi-English and other mixed-language documents natively.",
            },
            {
              question: "How accurate is NETRA compared to AWS Textract for Indian documents?",
              answer:
                "NETRA achieves 94% extraction accuracy on Indian documents across all 22 languages. AWS Textract is optimized for English documents and struggles with Indic scripts, mixed-language documents, and India-specific formats like GST invoices. NETRA is purpose-built for these documents with specialized models for each type.",
            },
            {
              question: "How do I integrate NETRA into my application?",
              answer:
                "NETRA provides a RESTful API with SDKs for Node.js and Python. Integration takes about 5 minutes: get your API key, install the SDK, and make your first extraction call. The API returns structured JSON with field-level confidence scores. Full documentation is available at docs.anumiti.com.",
            },
            {
              question: "Does NETRA verify GSTIN numbers?",
              answer:
                "Yes. NETRA includes built-in GSTIN verification that checks extracted GSTIN numbers against the GST Network in real time. It validates the business name, registration status, filing compliance, and returns the latest filing date. This is included in all paid plans.",
            },
            {
              question: "What is the processing latency and can NETRA handle batch requests?",
              answer:
                "Single document processing completes in under 100 milliseconds. The batch API supports up to 500 documents in a single request with priority processing on Growth and higher plans. NETRA is designed for high-volume production workloads, not just demos.",
            },
            {
              question: "Is my data safe with NETRA?",
              answer:
                "NETRA processes all documents on Indian data centers. Documents are encrypted in transit (TLS 1.3) and at rest (AES-256). Processed documents are automatically deleted after extraction unless you opt into storage. NETRA is SOC 2 Type II compliant and DPDP Act compliant through KAVACH.",
            },
            {
              question: "Is there a free tier and what are the usage limits?",
              answer:
                "Yes. The NETRA Free tier includes 100 pages per month, 50 verifications per month, 5 document types, and JSON API responses. No credit card required. Upgrade to Starter at \u20B92,999/month for 2,000 pages, all document types, 22 languages, and batch API support.",
            },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-amber-900 via-saffron to-orange-700 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Process your first document in 5 minutes
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Free API key. 100 pages/month. No credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CTA_URLS.netraApiKey} variant="primary" size="lg">
                Get API Key — free tier
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton
                href={CTA_URLS.docs}
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Read the Docs
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
