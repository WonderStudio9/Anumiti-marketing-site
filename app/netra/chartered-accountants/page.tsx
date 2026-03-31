"use client";

import {
  ScanLine,
  BadgeCheck,
  Calculator,
  Languages,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function NetraCAPage() {
  return (
    <VerticalLanding
      product="netra"
      vertical="Chartered Accountants"
      heroTitle="Stop typing GST invoices by hand. Let NETRA read them in seconds."
      heroSubtitle="CA firms process thousands of invoices, e-way bills, and GST returns every filing season. NETRA extracts structured data from any Indian tax document — handwritten, printed, or digital — in all 22 scheduled languages. Bulk OCR, GSTIN verification, and ITC calculation in one API."
      painPoints={[
        {
          title: "Manual GST invoice data entry",
          description:
            "Associates spend hours typing invoice data into Tally or GST portals. Errors in GSTIN, HSN codes, or amounts lead to mismatches and notices from the tax department.",
        },
        {
          title: "GSTIN validation errors",
          description:
            "Invalid or inactive GSTINs slip through manual checks, causing ITC rejections and reconciliation failures during GSTR-2A matching.",
        },
        {
          title: "Multi-language and multi-format documents",
          description:
            "Clients send invoices in Hindi, Tamil, Marathi, and other regional languages. Some are handwritten, some are thermal printouts, and many are blurry WhatsApp photos.",
        },
      ]}
      features={[
        {
          title: "Bulk Invoice OCR",
          description:
            "Upload hundreds of invoices at once. NETRA extracts GSTIN, invoice number, date, HSN/SAC codes, taxable value, CGST, SGST, IGST, and total — structured and ready for Tally or Excel.",
          icon: ScanLine,
        },
        {
          title: "GSTIN Verification",
          description:
            "Every extracted GSTIN is automatically validated against the GST portal. Active, cancelled, or suspended status is flagged before you file, preventing ITC claim rejections.",
          icon: BadgeCheck,
        },
        {
          title: "ITC Calculation",
          description:
            "NETRA calculates eligible Input Tax Credit from extracted invoice data, cross-references with GSTR-2A, and flags mismatches — reducing manual reconciliation work by hours.",
          icon: Calculator,
        },
        {
          title: "22-Language Support",
          description:
            "Process invoices and tax documents in all 22 scheduled Indian languages plus English. Handwritten, printed, thermal, and digital formats — all handled by NETRA's AI models.",
          icon: Languages,
        },
      ]}
      useCases={[
        {
          scenario:
            "A CA firm receives 500 purchase invoices from a manufacturing client in a mix of Hindi and English, including thermal printouts and handwritten bills.",
          outcome:
            "NETRA processes all 500 invoices in minutes, extracting structured data with 99%+ accuracy. The firm imports the data directly into Tally for GSTR-1 filing.",
        },
        {
          scenario:
            "During GSTR-2A reconciliation, a firm discovers mismatches in 80 invoices but cannot manually verify each GSTIN.",
          outcome:
            "NETRA batch-validates all 80 GSTINs and identifies 12 that are cancelled or suspended. The firm contacts the respective vendors before filing, avoiding ITC rejections.",
        },
        {
          scenario:
            "A CA handling multiple clients needs to calculate eligible ITC across 2,000 invoices for quarterly filing.",
          outcome:
            "NETRA extracts invoice data, calculates ITC per client, and generates a reconciliation report against GSTR-2A — saving the firm an estimated 40 hours of manual work.",
        },
        {
          scenario:
            "A small-town CA receives client invoices as blurry WhatsApp photos of handwritten purchase bills in Marathi.",
          outcome:
            "NETRA's OCR handles low-quality images and handwritten Marathi text. The extracted data is structured and accurate, ready for the firm's accounting software.",
        },
      ]}
      stats={[
        { value: "99%+", label: "Extraction accuracy" },
        { value: "500+", label: "Invoices per batch" },
        { value: "22", label: "Languages supported" },
        { value: "<3sec", label: "Per-invoice processing" },
      ]}
      faqs={[
        {
          question: "How accurate is NETRA for GST invoice extraction?",
          answer:
            "NETRA achieves 99%+ accuracy on standard printed invoices and 95%+ on handwritten documents. Accuracy varies with image quality — clear scans and photos yield the best results. All extracted data includes confidence scores so you can prioritise manual review where needed.",
        },
        {
          question: "Can NETRA read handwritten invoices and thermal printouts?",
          answer:
            "Yes. NETRA's AI models are trained on millions of Indian documents including handwritten bills, faded thermal printouts, and low-quality WhatsApp photos. While printed documents yield higher accuracy, NETRA handles the full range of document quality that CA firms encounter.",
        },
        {
          question: "Does NETRA validate GSTINs automatically?",
          answer:
            "Yes. Every GSTIN extracted from an invoice is automatically verified against the GST portal in real time. NETRA flags active, cancelled, suspended, and invalid GSTINs so you can catch issues before filing.",
        },
        {
          question: "Can I export NETRA data to Tally or Excel?",
          answer:
            "Yes. NETRA outputs structured data in JSON, CSV, and Excel formats. The CSV and Excel exports are formatted for direct import into Tally, Busy, and other popular accounting software used by CA firms in India.",
        },
        {
          question: "How does NETRA handle invoices in regional languages?",
          answer:
            "NETRA supports all 22 scheduled Indian languages plus English. It can process invoices where the header is in Hindi, line items are in English, and the address is in Marathi — all in a single document. Language detection is automatic.",
        },
        {
          question: "What is the pricing for CA firms processing bulk invoices?",
          answer:
            "NETRA offers volume-based pricing starting with a free tier. CA firms typically use the Professional plan which includes bulk processing, GSTIN verification, and priority support. Visit our pricing page for current rates.",
        },
      ]}
      cta={{
        text: "Get Free API Key",
        href: CTA_URLS.netraApiKey,
      }}
    />
  );
}
