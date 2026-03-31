"use client";

import {
  ClipboardList,
  HeartPulse,
  FolderSearch,
  FileText,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function NetraInsurancePage() {
  return (
    <VerticalLanding
      product="netra"
      vertical="Insurance Companies"
      heroTitle="Process claims documents in minutes, not days"
      heroSubtitle="Insurance companies in India are drowning in paper — claims forms, hospital bills, discharge summaries, policy documents, and KYC records. NETRA extracts structured data from every Indian insurance document type, in every language, at API speed. Automate claims processing, reduce fraud, and settle faster."
      painPoints={[
        {
          title: "Claims document flood",
          description:
            "Every claim arrives with a stack of documents — hospital bills, discharge summaries, prescriptions, FIRs, and repair estimates. Manual review creates bottlenecks that delay settlements and frustrate policyholders.",
        },
        {
          title: "Medical record processing in multiple formats",
          description:
            "Hospital documents come in every format — handwritten prescriptions, typed discharge summaries, lab reports with mixed Hindi-English content. Extracting diagnosis, treatment, and cost data manually is slow and error-prone.",
        },
        {
          title: "Policy document analysis at renewal",
          description:
            "Analysing policy terms, exclusions, and coverage limits across thousands of active policies for underwriting, renewal, and compliance requires reading dense documents that vary by product, vintage, and insurer.",
        },
      ]}
      features={[
        {
          title: "Claims Automation",
          description:
            "Upload claims documents in bulk. NETRA extracts claimant details, incident information, amounts, supporting document data, and maps them to policy terms — cutting claims processing time from days to minutes.",
          icon: ClipboardList,
        },
        {
          title: "Medical Record Extraction",
          description:
            "Extract diagnosis codes (ICD-10), treatment details, medication lists, lab values, and billing amounts from discharge summaries, prescriptions, and hospital bills — including handwritten documents in regional languages.",
          icon: HeartPulse,
        },
        {
          title: "Document Classification",
          description:
            "Automatically classify incoming documents into categories — KYC, claims form, hospital bill, FIR, repair estimate, policy copy. Route each document to the correct processing workflow without manual sorting.",
          icon: FolderSearch,
        },
        {
          title: "Policy Parsing",
          description:
            "Extract coverage limits, exclusions, waiting periods, co-pay terms, and renewal conditions from policy documents. Compare terms across policy versions and flag deviations from standard templates.",
          icon: FileText,
        },
      ]}
      useCases={[
        {
          scenario:
            "A health insurer receives 2,000 claims per day, each with 5-10 supporting documents. Claims adjusters spend 45 minutes per claim on document review alone.",
          outcome:
            "NETRA processes all documents per claim in under 30 seconds. Structured data is fed into the claims adjudication system, reducing reviewer time from 45 minutes to 5 minutes per claim.",
        },
        {
          scenario:
            "A motor insurer needs to extract repair estimates, FIR details, and surveyor reports from claims that arrive as scanned PDFs and WhatsApp photos.",
          outcome:
            "NETRA handles all document formats including low-quality photos. Repair amounts, vehicle details, incident descriptions, and surveyor assessments are extracted and cross-referenced automatically.",
        },
        {
          scenario:
            "An insurer's underwriting team needs to review exclusion clauses across 10,000 active policies to assess exposure to a new regulatory change.",
          outcome:
            "NETRA parses all 10,000 policies, extracts exclusion clauses, and generates a structured report showing which policies are affected — a task that would take weeks manually, completed in hours.",
        },
        {
          scenario:
            "A claims team suspects duplicate claims based on similar hospital bills submitted from different policyholders.",
          outcome:
            "NETRA extracts and normalises hospital bill data, enabling the fraud detection system to identify duplicate invoices, inflated amounts, and suspicious patterns across claims.",
        },
      ]}
      stats={[
        { value: "99%+", label: "Document classification accuracy" },
        { value: "<30sec", label: "Full claims document processing" },
        { value: "22", label: "Languages supported" },
        { value: "50+", label: "Insurance document types" },
      ]}
      faqs={[
        {
          question: "How does NETRA automate claims processing?",
          answer:
            "NETRA accepts claims documents in bulk via API or batch upload. It classifies each document, extracts relevant fields (claimant details, amounts, dates, diagnosis), and returns structured data that feeds directly into your claims adjudication system. This eliminates the manual document review step and reduces processing time from days to minutes.",
        },
        {
          question: "Can NETRA read handwritten medical records and prescriptions?",
          answer:
            "Yes. NETRA's OCR models are specifically trained on Indian medical documents including handwritten prescriptions, discharge summaries, and lab reports. It handles mixed-language content (Hindi-English, Tamil-English) and supports all 22 scheduled Indian languages.",
        },
        {
          question: "How accurate is the document classification?",
          answer:
            "NETRA achieves 99%+ accuracy on standard insurance document types — claims forms, hospital bills, FIRs, repair estimates, KYC documents, and policy copies. For ambiguous documents, confidence scores are provided so you can route low-confidence classifications to manual review.",
        },
        {
          question: "Can NETRA help detect fraudulent claims?",
          answer:
            "NETRA extracts and normalises document data, making it possible for your fraud detection systems to identify patterns — duplicate invoices, inflated amounts, inconsistent dates, and similar documents across different claims. While NETRA itself is not a fraud detection tool, it provides the structured data layer that makes automated fraud detection possible.",
        },
        {
          question: "Does NETRA integrate with existing claims management systems?",
          answer:
            "Yes. NETRA provides a REST API that integrates with any claims management system — whether built in-house, from a vendor, or legacy. Structured extraction data is returned as JSON and can be mapped to your system's schema. Webhooks are supported for async processing workflows.",
        },
        {
          question: "What is the pricing for insurance companies processing high volumes?",
          answer:
            "NETRA offers volume-based pricing with significant discounts at scale. Insurance companies typically process thousands to millions of documents per month. Contact our sales team for enterprise pricing that includes dedicated infrastructure, custom SLAs, and priority support.",
        },
      ]}
      cta={{
        text: "Get Free API Key",
        href: CTA_URLS.netraApiKey,
      }}
    />
  );
}
