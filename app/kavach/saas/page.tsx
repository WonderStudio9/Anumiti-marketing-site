"use client";

import {
  Code2,
  Plug,
  Palette,
  BadgeCheck,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function KavachSaaSPage() {
  return (
    <VerticalLanding
      product="kavach"
      vertical="SaaS Companies"
      heroTitle="Your SaaS product needs DPDP compliance baked into the code"
      heroSubtitle="SaaS companies processing Indian user data must embed consent management directly into their products. KAVACH provides an embeddable consent SDK, API-first consent infrastructure, white-label compliance, and a path to Consent Manager registration — so compliance ships with every feature."
      painPoints={[
        {
          title: "User data processing without embedded consent",
          description:
            "SaaS products collect user data through sign-ups, forms, analytics, and integrations. Without consent embedded at the product level, every feature that touches personal data is a compliance risk.",
        },
        {
          title: "B2B data handling creates shared liability",
          description:
            "When your SaaS processes data on behalf of business customers, both you and your customer are liable under DPDP. Without clear consent chains and data processing agreements, liability is undefined.",
        },
        {
          title: "No scalable compliance infrastructure",
          description:
            "Manual compliance processes break at scale. SaaS companies need programmable, API-driven consent management that integrates with CI/CD pipelines and product workflows.",
        },
      ]}
      features={[
        {
          title: "Embeddable Consent SDK",
          description:
            "Drop the KAVACH SDK into your SaaS product. Pre-built consent components for sign-up flows, data collection forms, and feature opt-ins — all DPDP-compliant out of the box.",
          icon: Code2,
        },
        {
          title: "API-First Consent",
          description:
            "Programmatic consent management via REST API. Collect, verify, update, and revoke consent from your backend. Ideal for headless products, mobile apps, and microservice architectures.",
          icon: Plug,
        },
        {
          title: "White-Label Compliance",
          description:
            "Offer DPDP compliance as a feature to your customers. White-label KAVACH consent flows with your branding — turning compliance into a competitive advantage for your SaaS product.",
          icon: Palette,
        },
        {
          title: "Consent Manager Registration Path",
          description:
            "SaaS companies that manage consent on behalf of others may need to register as Consent Managers under DPDP. KAVACH Enterprise includes the registration pathway and ongoing compliance support.",
          icon: BadgeCheck,
        },
      ]}
      useCases={[
        {
          scenario:
            "A B2B SaaS HR platform processes employee PII on behalf of 200 companies. The platform has no consent framework for employee data.",
          outcome:
            "KAVACH's SDK is embedded into the HR platform's onboarding flow. Each employee gives granular consent for specific data uses. Consent records are accessible to both the platform and the employer — clear liability chain.",
        },
        {
          scenario:
            "A SaaS analytics tool collects website visitor data for its customers. A visitor exercises their DPDP right to access data across all the tool's customers.",
          outcome:
            "KAVACH's API identifies all data linked to the visitor across customer accounts, compiles a cross-tenant data report, and processes the request within the statutory timeline.",
        },
        {
          scenario:
            "A SaaS CRM wants to offer DPDP compliance as a built-in feature to differentiate from competitors.",
          outcome:
            "KAVACH's white-label SDK is embedded into the CRM with custom branding. The CRM's customers get built-in consent management, privacy notices, and DSAR handling — no additional vendor required.",
        },
        {
          scenario:
            "A SaaS startup is scaling rapidly and needs consent management that works across multiple microservices and deployment environments.",
          outcome:
            "KAVACH's API-first architecture integrates with the startup's CI/CD pipeline. Consent checks are automated in each microservice, and compliance status is monitored in the central dashboard.",
        },
      ]}
      stats={[
        { value: "\u20B9250Cr", label: "Maximum fine per breach" },
        { value: "72hrs", label: "Breach reporting deadline" },
        { value: "1 line", label: "SDK integration" },
        { value: "99.9%", label: "API uptime SLA" },
      ]}
      faqs={[
        {
          question: "Does the DPDP Act apply to SaaS companies?",
          answer:
            "Yes. Any SaaS company that processes digital personal data of individuals in India — whether directly or on behalf of business customers — is covered by the DPDP Act. This includes B2B SaaS, B2C SaaS, and platform companies. Both data fiduciaries and data processors have obligations.",
        },
        {
          question: "Is a SaaS company a data fiduciary or data processor under DPDP?",
          answer:
            "It depends on your role. If you determine the purpose and means of data processing (e.g., your own analytics), you are a data fiduciary. If you process data on behalf of your customers (e.g., a CRM storing customer contacts), you may be a data processor. Many SaaS companies are both. KAVACH handles compliance for either role.",
        },
        {
          question: "How does the embeddable consent SDK work?",
          answer:
            "The KAVACH SDK is a lightweight JavaScript package that you install via npm or add as a script tag. It provides pre-built consent UI components — banners, modals, and inline forms — that are DPDP-compliant and customisable to match your product's design system. All consent data is stored with full audit trails.",
        },
        {
          question: "Can I use the KAVACH API without the SDK?",
          answer:
            "Yes. The KAVACH REST API provides full programmatic access to consent management — collect, verify, update, and revoke consent from any backend, mobile app, or microservice. The SDK is optional and built on top of the same API.",
        },
        {
          question: "What is a Consent Manager and should my SaaS register as one?",
          answer:
            "A Consent Manager under the DPDP Act is a registered entity that helps individuals manage their consent across multiple data fiduciaries. If your SaaS product manages consent on behalf of your customers' end users, you may need to register. KAVACH Enterprise includes the registration pathway and compliance support.",
        },
        {
          question: "How does KAVACH handle multi-tenant consent for B2B SaaS?",
          answer:
            "KAVACH supports multi-tenant architectures natively. Each of your business customers gets isolated consent management with their own dashboards, while you maintain a platform-level compliance overview. Consent records are scoped to each tenant but can be aggregated for platform-wide reporting.",
        },
      ]}
      cta={{
        text: "Start Free — 14 day trial",
        href: CTA_URLS.kavachTrial,
      }}
    />
  );
}
