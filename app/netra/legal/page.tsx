"use client";

import {
  FileSearch,
  Scale,
  AlertTriangle,
  Languages,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function NetraLegalPage() {
  return (
    <VerticalLanding
      product="netra"
      vertical="Legal Firms"
      heroTitle="Read contracts in 22 languages and extract clauses in seconds, not hours"
      heroSubtitle="Legal firms in India work with contracts in Hindi, Tamil, Marathi, and a dozen other languages. Court orders arrive as scanned PDFs. Regulatory filings span hundreds of pages. NETRA processes every Indian legal document — extracting clauses, scoring risks, and structuring data so your lawyers focus on strategy, not data entry."
      painPoints={[
        {
          title: "Multi-language contracts require manual review",
          description:
            "Contracts with regional government bodies, state courts, and local vendors are often in regional languages. Associates spend hours translating and reviewing clauses that NETRA can extract in seconds.",
        },
        {
          title: "Court documents in regional languages",
          description:
            "High court and district court orders in states like Tamil Nadu, Maharashtra, and Gujarat are issued in the local language. Extracting key dates, orders, and directives requires language-specific expertise.",
        },
        {
          title: "Clause extraction and risk assessment at scale",
          description:
            "Due diligence on large transactions requires reviewing hundreds of contracts for specific clauses — indemnity, termination, liability caps. Manual review is slow, expensive, and error-prone.",
        },
      ]}
      features={[
        {
          title: "Contract Analysis in 22 Languages",
          description:
            "Upload contracts in any Indian language. NETRA extracts parties, dates, obligations, payment terms, and key clauses — returning structured data regardless of the document language.",
          icon: FileSearch,
        },
        {
          title: "Court Order Parsing",
          description:
            "Process court orders, judgments, and notices from any Indian court. Extract case numbers, parties, dates, directives, penalties, and compliance deadlines from scanned PDFs in regional languages.",
          icon: Scale,
        },
        {
          title: "Clause Risk Scoring",
          description:
            "NETRA identifies and scores risk in contract clauses — flagging unusual indemnity terms, missing limitation of liability, one-sided termination rights, and non-standard penalty clauses.",
          icon: AlertTriangle,
        },
        {
          title: "Structured Field Extraction",
          description:
            "Extract specific fields from any legal document type — MOUs, lease agreements, employment contracts, regulatory filings. Define custom extraction templates for your firm's recurring document types.",
          icon: Languages,
        },
      ]}
      useCases={[
        {
          scenario:
            "A corporate law firm conducts due diligence on an acquisition involving 400 contracts — 60% in Hindi and regional languages.",
          outcome:
            "NETRA processes all 400 contracts, extracts key clauses (indemnity, termination, change of control), and flags risk areas. The due diligence timeline is cut from 3 weeks to 3 days.",
        },
        {
          scenario:
            "A litigation team receives a 50-page court order in Tamil from the Madras High Court and needs to extract compliance directives and deadlines.",
          outcome:
            "NETRA parses the Tamil court order, extracts all directives, deadlines, and penalty clauses, and returns structured data in English — ready for the team to action within minutes.",
        },
        {
          scenario:
            "A legal tech startup building a contract management platform needs to extract clauses from contracts in 10 different Indian languages.",
          outcome:
            "NETRA's API powers the extraction layer. Contracts in any language are processed through a single endpoint, returning standardised clause data — eliminating the need for language-specific parsers.",
        },
        {
          scenario:
            "A real estate firm reviews 200 lease agreements and needs to identify which ones have automatic renewal clauses and unfavourable rent escalation terms.",
          outcome:
            "NETRA extracts and classifies clauses across all 200 leases. The firm gets a summary table showing renewal terms and escalation rates, sorted by risk score.",
        },
      ]}
      stats={[
        { value: "22", label: "Languages supported" },
        { value: "99%+", label: "Field extraction accuracy" },
        { value: "<5sec", label: "Per-document processing" },
        { value: "50+", label: "Legal document types" },
      ]}
      faqs={[
        {
          question: "Can NETRA process court orders in regional Indian languages?",
          answer:
            "Yes. NETRA supports court orders and judgments in all 22 scheduled Indian languages. It handles scanned PDFs from district courts, high courts, and tribunals — extracting case details, directives, dates, and penalties regardless of the language.",
        },
        {
          question: "How does clause risk scoring work?",
          answer:
            "NETRA's AI models analyse contract clauses against a library of standard and non-standard terms. Each clause is scored based on deviation from market norms, one-sidedness, missing protections, and potential financial exposure. Risk scores range from low to critical with specific reasons for each flag.",
        },
        {
          question: "Can I define custom extraction templates for my firm's document types?",
          answer:
            "Yes. NETRA allows you to create custom extraction templates that specify which fields to extract from recurring document types. Once defined, the template is applied automatically — so your firm's standard lease review or due diligence extraction runs consistently every time.",
        },
        {
          question: "How does NETRA handle contracts with mixed-language content?",
          answer:
            "Indian legal documents often mix English with Hindi or regional languages within the same contract. NETRA detects language switches at the paragraph level and processes each section in its native language — returning unified structured output in English.",
        },
        {
          question: "Is NETRA suitable for legal tech platforms building contract intelligence products?",
          answer:
            "Yes. NETRA's API is designed for platform integration. Legal tech companies use NETRA as the extraction and analysis layer for contract management, CLM, and legal research products. Volume-based pricing and dedicated infrastructure are available for platform customers.",
        },
        {
          question: "What document formats does NETRA accept for legal documents?",
          answer:
            "NETRA accepts PDF (scanned and native), DOCX, images (JPEG, PNG, TIFF), and multi-page TIFFs. For court orders and older documents, scanned PDFs and photographs are fully supported — including low-quality scans from district court records.",
        },
      ]}
      cta={{
        text: "Get Free API Key",
        href: CTA_URLS.netraApiKey,
      }}
    />
  );
}
