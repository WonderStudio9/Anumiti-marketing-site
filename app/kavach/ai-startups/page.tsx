"use client";

import {
  Brain,
  ShieldCheck,
  ScanSearch,
  FileBarChart,
} from "lucide-react";
import { VerticalLanding } from "@/components/marketing/vertical-landing";
import { CTA_URLS } from "@/lib/constants";


export default function KavachAIStartupsPage() {
  return (
    <VerticalLanding
      product="kavach"
      vertical="AI Startups"
      heroTitle="Your AI models need consent before they learn from Indian data"
      heroSubtitle="The DPDP Act places specific obligations on automated decision-making. KAVACH gives AI startups model auditing, training data consent tracking, bias detection, and governance reports — so you can ship fast without compliance risk."
      painPoints={[
        {
          title: "Training on personal data without consent",
          description:
            "AI models trained on Indian user data require explicit, auditable consent for each data purpose. Most startups have no system to track this at the training-data level.",
        },
        {
          title: "Algorithmic bias with no audit trail",
          description:
            "The DPDP Act requires fair and transparent automated decision-making. Without bias detection tooling, AI startups face penalties and reputational damage.",
        },
        {
          title: "No governance framework for AI models",
          description:
            "Investors and enterprise buyers increasingly demand AI governance documentation. Manual processes do not scale with rapid model iteration cycles.",
        },
      ]}
      features={[
        {
          title: "AI Model Auditing",
          description:
            "Automatically track which personal data enters your training pipelines. Generate audit-ready reports showing data lineage and consent status per model version.",
          icon: Brain,
        },
        {
          title: "Training Data Consent",
          description:
            "Map consent records to specific datasets used in training. Ensure every data point in your model has a valid, unexpired consent basis under the DPDP Act.",
          icon: ShieldCheck,
        },
        {
          title: "Bias Detection",
          description:
            "Run automated bias scans across demographic dimensions. Get flagged before deployment — not after a complaint to the Data Protection Board.",
          icon: ScanSearch,
        },
        {
          title: "Governance Reports",
          description:
            "Generate investor-ready AI governance reports, DPIA documents, and compliance certificates. Share with board members, customers, and regulators.",
          icon: FileBarChart,
        },
      ]}
      useCases={[
        {
          scenario:
            "An AI startup scrapes publicly available Indian data to train a recommendation engine and assumes public data does not need consent.",
          outcome:
            "KAVACH flags that publicly available data still requires consent under DPDP when used for profiling. The startup implements consent collection before launch, avoiding a potential fine.",
        },
        {
          scenario:
            "A Series A company needs to show AI governance documentation to close an enterprise deal with a regulated bank.",
          outcome:
            "KAVACH generates a complete AI governance report including model cards, data lineage, bias assessment, and DPDP compliance status — closing the deal in days instead of weeks.",
        },
        {
          scenario:
            "A generative AI company receives a data subject request to delete training data from a user who withdrew consent.",
          outcome:
            "KAVACH traces the data principal's data across all model versions, initiates the deletion workflow, and generates proof of compliance for the Data Protection Board.",
        },
        {
          scenario:
            "An ML team iterates rapidly across model versions and loses track of which datasets had valid consent at the time of training.",
          outcome:
            "KAVACH maintains a version-controlled consent ledger tied to each training run, so every model version has a clear compliance status.",
        },
      ]}
      stats={[
        { value: "\u20B9250Cr", label: "Maximum fine per breach" },
        { value: "72hrs", label: "Breach reporting deadline" },
        { value: "22", label: "Languages for consent" },
        { value: "<30min", label: "Time to deploy" },
      ]}
      faqs={[
        {
          question: "Does the DPDP Act apply to AI startups specifically?",
          answer:
            "Yes. The DPDP Act applies to any entity processing digital personal data of individuals in India. AI startups that collect, use, or process personal data for model training, inference, or automated decision-making are data fiduciaries under the Act and must comply with all consent, notice, and breach notification requirements.",
        },
        {
          question: "Do I need consent if my AI model uses publicly available data?",
          answer:
            "It depends on the purpose. Under the DPDP Act, even publicly available personal data requires consent when processed for purposes beyond the original context — such as profiling, recommendation, or automated decision-making. KAVACH helps you assess and document your consent basis for each data source.",
        },
        {
          question: "How does KAVACH handle consent for training data at scale?",
          answer:
            "KAVACH integrates with your data pipelines via API. It maintains a consent ledger that maps each data point to its consent record, purpose, and expiry. When you kick off a training run, KAVACH validates that all input data has active consent for the specified purpose.",
        },
        {
          question: "What is AI model auditing and why does it matter for DPDP?",
          answer:
            "AI model auditing tracks which personal data enters your models, how it is used, and whether the data principal consented to that specific use. The DPDP Act requires transparency in automated decision-making — model auditing provides the evidence trail.",
        },
        {
          question: "Can KAVACH help us respond to data subject deletion requests that affect training data?",
          answer:
            "Yes. KAVACH traces personal data across model versions and training datasets. When a data principal withdraws consent or requests deletion, KAVACH initiates a workflow to remove or re-train affected models and generates proof of compliance.",
        },
        {
          question: "How does bias detection relate to DPDP compliance?",
          answer:
            "The DPDP Act mandates fair processing and non-discriminatory automated decision-making. KAVACH's bias detection scans your models for demographic disparities and generates reports that demonstrate you are proactively addressing fairness — a key defence in any regulatory inquiry.",
        },
      ]}
      cta={{
        text: "Start Free — 14 day trial",
        href: CTA_URLS.kavachTrial,
      }}
    />
  );
}
