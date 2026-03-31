"use client";

import {
  MessageSquare,
  Cookie,
  Megaphone,
  UserCheck,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function KavachD2CPage() {
  return (
    <VerticalLanding
      product="kavach"
      vertical="D2C Brands"
      heroTitle="Your WhatsApp blasts and retargeting ads need consent under the DPDP Act"
      heroSubtitle="D2C brands collect customer data across WhatsApp, websites, apps, and ad platforms. The DPDP Act requires explicit consent for each channel and purpose. KAVACH gives you compliant consent flows for WhatsApp marketing, cookie tracking, targeted ads, and customer data rights — without slowing your growth."
      painPoints={[
        {
          title: "WhatsApp marketing without consent",
          description:
            "Most D2C brands blast promotional messages on WhatsApp without DPDP-compliant consent. A single customer complaint to the Data Protection Board could trigger an inquiry.",
        },
        {
          title: "Cookie tracking without proper consent banners",
          description:
            "Your Shopify or custom storefront uses analytics, retargeting, and conversion pixels — all of which track personal data. A generic cookie popup does not meet DPDP requirements.",
        },
        {
          title: "Targeted ads using customer data without purpose limitation",
          description:
            "Uploading customer lists to Meta or Google for lookalike audiences requires consent for that specific purpose. Most D2C brands consent customers only for order fulfillment.",
        },
      ]}
      features={[
        {
          title: "WhatsApp Consent Flows",
          description:
            "Collect DPDP-compliant consent through WhatsApp before sending promotional messages. Automated opt-in, opt-out, and renewal flows with full audit trails.",
          icon: MessageSquare,
        },
        {
          title: "Cookie Consent Banner",
          description:
            "Deploy a DPDP-compliant cookie consent banner on your storefront. Granular purpose selection, regional language support, and automatic pixel blocking until consent is given.",
          icon: Cookie,
        },
        {
          title: "Ad Compliance",
          description:
            "Track which customers have consented to data use for advertising. Ensure lookalike audience uploads and retargeting pixels only use data with valid ad-purpose consent.",
          icon: Megaphone,
        },
        {
          title: "Customer Data Rights",
          description:
            "Let customers access, correct, or delete their data through a self-service portal. Automated DSAR workflows ensure you meet statutory timelines without manual effort.",
          icon: UserCheck,
        },
      ]}
      useCases={[
        {
          scenario:
            "A D2C skincare brand sends promotional WhatsApp messages to 50,000 customers who only consented to order updates.",
          outcome:
            "KAVACH identifies that promotional messaging requires separate consent. The brand sends a consent request via WhatsApp first, converting 72% of customers to opt-in for marketing messages — fully compliant.",
        },
        {
          scenario:
            "A fashion brand uploads its entire customer email list to Meta Ads for lookalike audience targeting.",
          outcome:
            "KAVACH flags that only 40% of customers have consented to data use for advertising. The brand segments the list and uploads only consented customers, avoiding a DPDP violation.",
        },
        {
          scenario:
            "A customer requests deletion of all their data from a D2C food delivery brand after a bad experience.",
          outcome:
            "KAVACH processes the deletion request across the brand's CRM, email platform, WhatsApp list, and ad platforms — generating proof of compliance within the statutory deadline.",
        },
        {
          scenario:
            "A D2C electronics brand wants to run a festive season campaign in Hindi, Tamil, and Bengali on WhatsApp.",
          outcome:
            "KAVACH provides consent flows and privacy notices in all three languages, ensuring customers in each region receive consent requests in their preferred language.",
        },
      ]}
      stats={[
        { value: "\u20B9250Cr", label: "Maximum fine per breach" },
        { value: "800M+", label: "WhatsApp users in India" },
        { value: "22", label: "Languages for consent" },
        { value: "<30min", label: "Storefront integration time" },
      ]}
      faqs={[
        {
          question: "Does the DPDP Act apply to D2C brands selling online?",
          answer:
            "Yes. Any D2C brand that collects personal data from Indian customers — names, phone numbers, email addresses, browsing data, purchase history — is a data fiduciary under the DPDP Act. This applies whether you sell through your own website, Shopify, Amazon, or WhatsApp Commerce.",
        },
        {
          question: "Is WhatsApp marketing legal under the DPDP Act?",
          answer:
            "WhatsApp marketing is legal as long as you have explicit consent from each recipient for the specific purpose of receiving promotional messages. Order confirmation consent does not cover marketing messages. KAVACH helps you collect and manage separate consent for each WhatsApp communication purpose.",
        },
        {
          question: "Do I need a cookie consent banner for my Shopify store?",
          answer:
            "Yes. If your store uses analytics (Google Analytics, Meta Pixel, etc.), retargeting pixels, or any tracking that processes personal data of Indian users, you need a DPDP-compliant cookie consent banner. KAVACH provides a drop-in banner that integrates with Shopify and custom storefronts.",
        },
        {
          question: "Can I upload customer lists to Meta Ads for lookalike audiences?",
          answer:
            "Only if your customers have consented to their data being used for advertising purposes. Order fulfillment consent does not cover ad targeting. KAVACH tracks consent by purpose, so you can easily segment customers who have opted in to ad-related data use.",
        },
        {
          question: "How does KAVACH handle multi-language consent for regional customers?",
          answer:
            "KAVACH supports all 22 scheduled Indian languages. Consent flows, privacy notices, and data rights portals are automatically served in the customer's preferred language, ensuring informed consent across all regions.",
        },
        {
          question: "What happens if a customer withdraws consent for marketing?",
          answer:
            "KAVACH automatically updates the consent status across all connected platforms — WhatsApp, email, CRM, and ad platforms. The customer is removed from marketing lists immediately, and a compliance record is generated.",
        },
      ]}
      cta={{
        text: "Start Free — 14 day trial",
        href: CTA_URLS.kavachTrial,
      }}
    />
  );
}
