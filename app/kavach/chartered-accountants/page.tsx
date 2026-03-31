"use client";

import {
  Users,
  ShieldCheck,
  MapPin,
  FileText,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function KavachCAPage() {
  return (
    <VerticalLanding
      product="kavach"
      vertical="Chartered Accountants"
      heroTitle="Your clients trust you with their most sensitive data. Are you DPDP-ready?"
      heroSubtitle="CA firms process PAN numbers, Aadhaar details, financial records, and tax filings daily. Under the DPDP Act, every piece of client data requires explicit consent, audit trails, and breach protocols. KAVACH makes your practice compliant without disrupting your workflow."
      painPoints={[
        {
          title: "Client PII handled without formal consent",
          description:
            "CA firms routinely collect PAN, Aadhaar, bank statements, and ITR data from clients — often via email or WhatsApp — with no formal consent record under DPDP.",
        },
        {
          title: "Paper-based or no consent management",
          description:
            "Engagement letters may cover professional obligations but do not meet DPDP consent requirements. Most firms have no digital consent system.",
        },
        {
          title: "No systematic compliance across the practice",
          description:
            "Individual partners and staff handle data differently. Without a firm-wide compliance framework, a breach by one employee exposes the entire practice.",
        },
      ]}
      features={[
        {
          title: "Client Consent Management",
          description:
            "Send DPDP-compliant consent requests to clients via email or WhatsApp. Collect, store, and manage consent for each data purpose — tax filing, audit, advisory — with full audit trails.",
          icon: Users,
        },
        {
          title: "Practice-Wide Compliance",
          description:
            "Roll out a single compliance framework across all partners, associates, and staff. Set data handling policies, monitor adherence, and generate firm-wide compliance reports.",
          icon: ShieldCheck,
        },
        {
          title: "Data Mapping for CA Firms",
          description:
            "Automatically map what client data you hold, where it is stored, who has access, and for what purpose. Essential for DPDP compliance and professional liability management.",
          icon: MapPin,
        },
        {
          title: "DSAR Automation",
          description:
            "When clients exercise their right to access, correct, or delete data, KAVACH automates the response workflow — ensuring you meet the statutory timeline without manual effort.",
          icon: FileText,
        },
      ]}
      useCases={[
        {
          scenario:
            "A CA firm receives client PAN and Aadhaar copies via WhatsApp for ITR filing. No consent record exists for storing this data digitally.",
          outcome:
            "KAVACH sends an automated WhatsApp consent request to the client before processing. The consent is recorded with purpose, timestamp, and expiry — fully DPDP-compliant.",
        },
        {
          scenario:
            "A client requests access to all personal data held by the CA firm under their DPDP rights.",
          outcome:
            "KAVACH's DSAR workflow identifies all data linked to the client across the firm, compiles a data access report, and delivers it within the statutory timeline.",
        },
        {
          scenario:
            "An associate leaves the firm and had access to hundreds of client files on their personal laptop.",
          outcome:
            "KAVACH's data mapping shows exactly which client data the associate accessed. The firm revokes access and generates a compliance report documenting the remediation.",
        },
        {
          scenario:
            "The firm wants to use client financial data for an internal benchmarking study.",
          outcome:
            "KAVACH flags that the original consent was for tax filing only. The firm collects fresh consent for the new purpose before proceeding, avoiding a DPDP violation.",
        },
      ]}
      stats={[
        { value: "3.5L+", label: "Practising CAs in India" },
        { value: "\u20B9250Cr", label: "Maximum DPDP fine" },
        { value: "22", label: "Languages for client consent" },
        { value: "<30min", label: "Setup time per firm" },
      ]}
      faqs={[
        {
          question: "Does the DPDP Act apply to chartered accountant firms?",
          answer:
            "Yes. Any CA firm that collects, stores, or processes digital personal data of clients in India is a data fiduciary under the DPDP Act. This includes PAN numbers, Aadhaar copies, bank statements, ITR data, and financial records. All such data requires explicit consent with clear purpose limitation.",
        },
        {
          question: "Is an engagement letter sufficient for DPDP consent?",
          answer:
            "No. A traditional engagement letter covers the professional scope of work but does not meet DPDP Act consent requirements. DPDP requires consent to be free, specific, informed, unconditional, and unambiguous — with clear itemisation of each data processing purpose. KAVACH generates compliant consent flows that supplement your engagement letters.",
        },
        {
          question: "How do I handle client data received via WhatsApp?",
          answer:
            "KAVACH supports WhatsApp-based consent flows. Before processing client data received via WhatsApp, you can send a DPDP consent request through the same channel. The client's response is recorded with a timestamp, purpose, and audit trail — making WhatsApp data handling compliant.",
        },
        {
          question: "What happens if a client asks me to delete their data?",
          answer:
            "Under the DPDP Act, clients (data principals) have the right to request erasure of their personal data. KAVACH automates this process — it identifies all client data across your firm, initiates deletion workflows, and generates proof of compliance for your records.",
        },
        {
          question: "Can KAVACH handle compliance for multi-partner CA firms?",
          answer:
            "Yes. KAVACH supports firm-wide deployment with role-based access. Each partner and associate can manage consent for their clients while the managing partner has a consolidated compliance dashboard for the entire firm.",
        },
        {
          question: "Do I need a separate consent for each tax filing year?",
          answer:
            "DPDP consent should specify the purpose and duration. KAVACH allows you to set consent validity periods and auto-triggers renewal requests when consent is about to expire — so you stay compliant across filing years without manual tracking.",
        },
      ]}
      cta={{
        text: "Start Free — 14 day trial",
        href: CTA_URLS.kavachTrial,
      }}
    />
  );
}
