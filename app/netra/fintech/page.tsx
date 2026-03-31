"use client";

import {
  CreditCard,
  FileSpreadsheet,
  Fingerprint,
  ScanLine,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function NetraFintechPage() {
  return (
    <VerticalLanding
      product="netra"
      vertical="Fintech Companies"
      heroTitle="Process KYC documents at scale without manual verification bottlenecks"
      heroSubtitle="Fintech companies process millions of PAN cards, Aadhaar copies, bank statements, and cheques for KYC, lending, and payments. NETRA extracts and verifies identity and financial data from any Indian document format — at API speed, with 99%+ accuracy."
      painPoints={[
        {
          title: "KYC verification bottleneck at scale",
          description:
            "Manual KYC document review creates onboarding delays, increases drop-off rates, and does not scale for digital lending or neobanking products with thousands of daily applications.",
        },
        {
          title: "Bank statement parsing across formats",
          description:
            "Indian banks issue statements in dozens of formats — PDFs, scanned copies, password-protected files. Extracting transaction data for underwriting requires format-specific parsers that break with every bank update.",
        },
        {
          title: "PAN and identity validation errors",
          description:
            "Incorrect PAN extraction or mismatched Aadhaar details lead to failed KYC, compliance flags, and rejected loan applications. Manual correction cycles are expensive and slow.",
        },
      ]}
      features={[
        {
          title: "PAN Verification API",
          description:
            "Extract PAN number, name, and date of birth from PAN card images. Cross-verify extracted data against the NSDL/UTI database in real time. Flag mismatches, duplicates, and invalid PANs before onboarding.",
          icon: CreditCard,
        },
        {
          title: "Bank Statement Extraction",
          description:
            "Parse bank statements from 100+ Indian banks. Extract transaction data, account details, and summary information from PDFs, scanned copies, and password-protected files — structured and ready for underwriting models.",
          icon: FileSpreadsheet,
        },
        {
          title: "Aadhaar (Masked) Processing",
          description:
            "Extract data from masked Aadhaar cards and Aadhaar letters in compliance with UIDAI guidelines. NETRA processes only masked Aadhaar, never stores biometric data, and provides extracted fields with confidence scores.",
          icon: Fingerprint,
        },
        {
          title: "Cheque OCR",
          description:
            "Extract account number, IFSC, bank name, payee, amount, and MICR code from cheque images. Support for all major Indian bank cheque formats including handwritten amounts.",
          icon: ScanLine,
        },
      ]}
      useCases={[
        {
          scenario:
            "A digital lending platform receives 5,000 loan applications daily, each with PAN card, Aadhaar, and bank statements. Manual KYC review takes 48 hours per application.",
          outcome:
            "NETRA processes all KYC documents in under 10 seconds per application. PAN is verified against NSDL in real time. Bank statements are parsed and fed directly into the underwriting model — reducing onboarding time from 48 hours to 5 minutes.",
        },
        {
          scenario:
            "A neobank needs to parse bank statements from 80 different Indian banks for account aggregation, but each bank has a different PDF format.",
          outcome:
            "NETRA's universal bank statement parser handles all formats automatically. Transaction data is extracted into a standardised schema regardless of the issuing bank, eliminating format-specific parsers.",
        },
        {
          scenario:
            "A payment company processes cheque images for NACH mandates and needs to extract IFSC codes and account numbers from handwritten cheques.",
          outcome:
            "NETRA's cheque OCR extracts all fields including handwritten amounts and payee names. IFSC codes are cross-validated against the RBI database, and flagged if the branch is closed or merged.",
        },
        {
          scenario:
            "A fintech startup's KYC flow has a 30% drop-off because users upload blurry PAN card photos that fail automated verification.",
          outcome:
            "NETRA's PAN extraction handles low-quality images including blurry, tilted, and partially obscured PAN cards. Drop-off rate drops to under 10% as more documents pass automated verification on the first attempt.",
        },
      ]}
      stats={[
        { value: "99%+", label: "PAN extraction accuracy" },
        { value: "100+", label: "Bank formats supported" },
        { value: "<2sec", label: "Per-document processing" },
        { value: "10M+", label: "Documents processed monthly" },
      ]}
      faqs={[
        {
          question: "How does NETRA handle PAN verification?",
          answer:
            "NETRA extracts PAN number, full name, date of birth, and father's name from PAN card images using specialised OCR models trained on Indian identity documents. The extracted PAN is then verified in real time against the NSDL/UTI database to confirm validity, active status, and name matching.",
        },
        {
          question: "Can NETRA parse bank statements from any Indian bank?",
          answer:
            "NETRA supports 100+ Indian banks including SBI, HDFC, ICICI, Axis, Kotak, and all major public sector, private sector, and cooperative banks. It handles PDF statements, scanned copies, and password-protected files. The output is a standardised transaction schema regardless of the source bank.",
        },
        {
          question: "Is NETRA compliant with UIDAI guidelines for Aadhaar processing?",
          answer:
            "Yes. NETRA processes only masked Aadhaar copies (last 4 digits visible). It never stores biometric data, full Aadhaar numbers, or demographic data beyond what is extracted for the specific purpose. All processing follows UIDAI regulations for virtual ID and masked Aadhaar handling.",
        },
        {
          question: "What is the accuracy for cheque OCR with handwritten amounts?",
          answer:
            "NETRA achieves 97%+ accuracy on printed cheque fields and 93%+ on handwritten amounts and payee names. Confidence scores are provided for each field so your application can route low-confidence extractions to manual review.",
        },
        {
          question: "How does NETRA integrate with existing fintech workflows?",
          answer:
            "NETRA provides a REST API with SDKs for Python, Node.js, and Java. Documents are uploaded via API, processed in under 2 seconds, and structured data is returned as JSON. Webhooks are supported for async processing. The API integrates with any KYC workflow, lending pipeline, or onboarding system.",
        },
        {
          question: "What are the uptime and scalability guarantees?",
          answer:
            "NETRA's API has a 99.9% uptime SLA. The infrastructure auto-scales to handle traffic spikes — whether you process 100 documents or 100,000 per day. Rate limits and dedicated instances are available for enterprise customers.",
        },
      ]}
      cta={{
        text: "Get Free API Key",
        href: CTA_URLS.netraApiKey,
      }}
    />
  );
}
