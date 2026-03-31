export interface ComparisonData {
  slug: string;
  title: string;
  description: string;
  headers: string[];
  rows: { feature: string; values: (boolean | string)[] }[];
  highlightColumn: number;
  faqs: { question: string; answer: string }[];
}

export const comparisons: ComparisonData[] = [
  {
    slug: "anumiti-vs-onetrust",
    title: "Anumiti KAVACH vs OneTrust: DPDP Compliance for Indian Businesses",
    description:
      "Compare Anumiti KAVACH and OneTrust for DPDP Act compliance. See how a purpose-built Indian solution compares to a global privacy platform on pricing, Indian language support, Consent Manager integration, and local compliance expertise.",
    headers: ["Anumiti KAVACH", "OneTrust"],
    highlightColumn: 0,
    rows: [
      { feature: "Built for DPDP Act 2023", values: [true, "Partial"] },
      { feature: "Indian language support (22 languages)", values: [true, false] },
      { feature: "Consent Manager framework integration", values: [true, false] },
      { feature: "DPDP penalty risk scoring", values: [true, false] },
      { feature: "Indian document processing (NETRA)", values: [true, false] },
      { feature: "GDPR compliance", values: [true, true] },
      { feature: "CCPA compliance", values: ["Roadmap", true] },
      { feature: "Cookie consent management", values: [true, true] },
      { feature: "Data subject request automation", values: [true, true] },
      { feature: "Pricing transparency", values: ["Public pricing", "Custom quotes only"] },
      { feature: "Free tier available", values: [true, false] },
      { feature: "India-based support", values: [true, "Limited"] },
      { feature: "Setup time", values: ["< 1 day", "Weeks to months"] },
      { feature: "API-first architecture", values: [true, true] },
      { feature: "SOC 2 certified", values: [true, true] },
    ],
    faqs: [
      {
        question: "Is Anumiti KAVACH a replacement for OneTrust?",
        answer:
          "For Indian DPDP compliance, KAVACH is purpose-built and offers deeper coverage including Indian language support, Consent Manager integration, and local document processing. If you need global multi-regulation coverage (GDPR + CCPA + LGPD), OneTrust offers broader reach, though at a significantly higher cost.",
      },
      {
        question: "Can I use both Anumiti KAVACH and OneTrust?",
        answer:
          "Yes. Some multinational companies use OneTrust for global privacy operations and Anumiti KAVACH specifically for Indian DPDP compliance, taking advantage of KAVACH's deeper India-specific features and lower cost.",
      },
      {
        question: "How does pricing compare between KAVACH and OneTrust?",
        answer:
          "Anumiti KAVACH offers transparent public pricing starting with a free tier. OneTrust typically requires custom enterprise quotes and is priced significantly higher, often in the six-figure USD range for enterprise deployments.",
      },
    ],
  },
  {
    slug: "netra-vs-textract",
    title: "Anumiti NETRA vs AWS Textract: Indian Document Intelligence",
    description:
      "Compare Anumiti NETRA and AWS Textract for Indian document processing. See how NETRA's 22-language support, Indian document specialization, and compliance features compare to Textract's general-purpose OCR.",
    headers: ["Anumiti NETRA", "AWS Textract"],
    highlightColumn: 0,
    rows: [
      { feature: "Indian language support", values: ["22 languages", "Limited Hindi/English"] },
      { feature: "Indian document templates (Aadhaar, PAN, GST)", values: [true, false] },
      { feature: "Handwritten Indian script recognition", values: [true, "Limited"] },
      { feature: "PII detection and redaction", values: [true, false] },
      { feature: "DPDP-compliant data processing", values: [true, false] },
      { feature: "Structured data extraction", values: [true, true] },
      { feature: "Table extraction", values: [true, true] },
      { feature: "Form extraction", values: [true, true] },
      { feature: "Invoice processing", values: ["Indian + Global", "Global formats"] },
      { feature: "Data residency in India", values: [true, "Mumbai region only"] },
      { feature: "Pay-per-page pricing", values: [true, true] },
      { feature: "Free tier", values: ["1,000 pages/month", "1,000 pages/month"] },
      { feature: "Custom model training", values: [true, false] },
    ],
    faqs: [
      {
        question: "Is NETRA more accurate than Textract for Indian documents?",
        answer:
          "For Indian documents — especially those in regional languages, with mixed scripts, or in Indian government formats (Aadhaar, PAN, GST invoices) — NETRA significantly outperforms Textract. Our benchmarks show 15-25% higher accuracy on Indian language documents.",
      },
      {
        question: "Can NETRA process documents that Textract cannot?",
        answer:
          "Yes. NETRA handles handwritten text in Indian scripts (Devanagari, Tamil, Telugu, Bengali, etc.), Indian government identity documents, and multi-script documents that Textract struggles with. NETRA also provides built-in PII redaction.",
      },
      {
        question: "Does NETRA work with AWS infrastructure?",
        answer:
          "Yes. NETRA is a cloud-agnostic API that works with any infrastructure. You can call NETRA from AWS Lambda, ECS, or any other compute service just as you would call Textract.",
      },
    ],
  },
  {
    slug: "netra-vs-document-ai",
    title: "Anumiti NETRA vs Google Document AI: Processing Indian Documents",
    description:
      "Compare Anumiti NETRA and Google Document AI for Indian document processing. Evaluate Indian language accuracy, document templates, PII handling, and India-specific compliance features.",
    headers: ["Anumiti NETRA", "Google Document AI"],
    highlightColumn: 0,
    rows: [
      { feature: "Indian language support", values: ["22 languages", "~10 Indian languages"] },
      { feature: "Indian document templates", values: [true, "Limited"] },
      { feature: "Handwritten Indian script OCR", values: [true, "Partial"] },
      { feature: "PII detection and auto-redaction", values: [true, "Via DLP API (separate)"] },
      { feature: "DPDP-compliant processing", values: [true, false] },
      { feature: "Custom document processors", values: [true, true] },
      { feature: "Pre-trained document parsers", values: ["Indian + Global", "Global focus"] },
      { feature: "Batch processing", values: [true, true] },
      { feature: "Human-in-the-loop review", values: [true, true] },
      { feature: "Data residency in India", values: [true, "Mumbai region"] },
      { feature: "Transparent per-page pricing", values: [true, true] },
      { feature: "Integrated compliance layer", values: [true, false] },
    ],
    faqs: [
      {
        question: "How does NETRA compare to Google Document AI for Hindi documents?",
        answer:
          "NETRA was trained on millions of Indian documents across all 22 scheduled languages. For Hindi specifically, NETRA achieves higher accuracy on handwritten text, mixed-script documents, and government forms compared to Google Document AI's more general-purpose models.",
      },
      {
        question: "Does NETRA require Google Cloud Platform?",
        answer:
          "No. NETRA is a standalone API that works with any cloud provider or on-premise infrastructure. You do not need a GCP account to use NETRA.",
      },
      {
        question: "Can NETRA handle the same document types as Document AI?",
        answer:
          "Yes, and more. NETRA handles all common document types (invoices, receipts, forms, contracts) plus Indian-specific documents like Aadhaar cards, PAN cards, GST returns, stamp papers, and court documents in regional languages.",
      },
    ],
  },
  {
    slug: "netra-vs-sarvam-vision",
    title: "Anumiti NETRA vs Sarvam AI Vision: Indian Language Document Processing",
    description:
      "Compare Anumiti NETRA and Sarvam AI's vision capabilities for Indian language document processing. Both are built for India — see how they differ in document intelligence, compliance, and enterprise readiness.",
    headers: ["Anumiti NETRA", "Sarvam AI Vision"],
    highlightColumn: 0,
    rows: [
      { feature: "Indian language support", values: ["22 languages", "10+ languages"] },
      { feature: "Document-specific intelligence", values: [true, "General vision"] },
      { feature: "Structured data extraction", values: [true, "Limited"] },
      { feature: "Indian document templates", values: [true, false] },
      { feature: "PII detection and redaction", values: [true, false] },
      { feature: "DPDP compliance built-in", values: [true, false] },
      { feature: "Table extraction", values: [true, "Limited"] },
      { feature: "Handwritten text recognition", values: [true, true] },
      { feature: "Batch processing API", values: [true, "Limited"] },
      { feature: "Enterprise SLA", values: [true, "Varies"] },
      { feature: "API-first architecture", values: [true, true] },
      { feature: "On-premise deployment", values: ["Enterprise plan", "Contact sales"] },
    ],
    faqs: [
      {
        question: "How is NETRA different from Sarvam AI?",
        answer:
          "Sarvam AI focuses on general-purpose Indian language AI including speech, translation, and vision. NETRA is purpose-built for document intelligence — extracting structured data from Indian documents with built-in compliance features. They serve different use cases.",
      },
      {
        question: "Can I use both NETRA and Sarvam AI together?",
        answer:
          "Yes. Some organizations use Sarvam AI for speech and translation use cases while using NETRA specifically for document processing, data extraction, and compliance-sensitive workflows.",
      },
      {
        question: "Which is better for enterprise document workflows?",
        answer:
          "NETRA is designed for enterprise document workflows with features like structured extraction, batch processing, SLA guarantees, and built-in DPDP compliance. Sarvam AI Vision is more suited for general computer vision tasks involving Indian languages.",
      },
    ],
  },
  {
    slug: "kavach-vs-privy",
    title: "Anumiti KAVACH vs Privy: Data Privacy Compliance in India",
    description:
      "Compare Anumiti KAVACH and Privy for data privacy compliance. Evaluate DPDP Act coverage, consent management, Indian language support, and compliance automation features.",
    headers: ["Anumiti KAVACH", "Privy"],
    highlightColumn: 0,
    rows: [
      { feature: "DPDP Act 2023 compliance", values: [true, true] },
      { feature: "Indian language consent notices", values: ["22 languages", "Limited"] },
      { feature: "Consent Manager registration support", values: [true, false] },
      { feature: "Automated compliance scoring", values: [true, "Partial"] },
      { feature: "Data principal rights automation", values: [true, true] },
      { feature: "Breach notification workflow", values: [true, "Partial"] },
      { feature: "Document intelligence (NETRA)", values: [true, false] },
      { feature: "GDPR dual compliance", values: [true, "Partial"] },
      { feature: "API-first architecture", values: [true, "Limited"] },
      { feature: "Free tier", values: [true, "Limited"] },
      { feature: "Transparent pricing", values: [true, true] },
      { feature: "SOC 2 certified", values: [true, "In progress"] },
    ],
    faqs: [
      {
        question: "How is KAVACH different from Privy?",
        answer:
          "KAVACH offers deeper DPDP-specific features including 22-language consent notices, Consent Manager integration, and integrated document intelligence via NETRA. KAVACH is also API-first, making it easier to embed compliance into existing applications.",
      },
      {
        question: "Is KAVACH better for startups or enterprises?",
        answer:
          "KAVACH serves both. Startups benefit from the free tier and quick setup. Enterprises benefit from the API-first architecture, advanced compliance scoring, and ability to integrate NETRA document intelligence into compliance workflows.",
      },
      {
        question: "Can I migrate from Privy to KAVACH?",
        answer:
          "Yes. KAVACH provides migration support including data export compatibility and consent record portability. Contact our team for a migration assessment.",
      },
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
