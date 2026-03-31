import {
  Shield,
  Eye,
  Languages,
  FileCheck,
  Lock,
  Bell,
  Bot,
  MessageSquare,
  ClipboardCheck,
  BarChart3,
  FileText,
  Scan,
  CheckCircle,
  Zap,
  Globe,
  Code,
  Building2,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const KAVACH_FEATURES: Feature[] = [
  {
    title: "Consent Management",
    description:
      "Build and deploy DPDP-compliant consent flows in 22 Indian languages. Collect, store, and manage consent artifacts with full audit trails.",
    icon: ClipboardCheck,
  },
  {
    title: "WhatsApp Consent Flows",
    description:
      "Collect consent from customers via WhatsApp — perfect for India's 63 million MSMEs who communicate primarily through WhatsApp.",
    icon: MessageSquare,
  },
  {
    title: "DPIA Generator",
    description:
      "Automated Data Protection Impact Assessments. Identify risks, document processing activities, and generate compliance reports.",
    icon: FileCheck,
  },
  {
    title: "AI Model Auditing",
    description:
      "Audit AI models for DPDP compliance. Track training data consent, assess bias, and generate governance reports.",
    icon: Bot,
  },
  {
    title: "Breach Notification System",
    description:
      "Automated breach detection and notification workflows. Comply with DPDP's 72-hour breach reporting requirement.",
    icon: Bell,
  },
  {
    title: "Data Subject Rights Portal",
    description:
      "Self-service portal for data principals to exercise their rights — access, correction, erasure, and portability.",
    icon: Lock,
  },
  {
    title: "22 Language Support",
    description:
      "Consent notices, privacy policies, and rights portals in all 22 scheduled languages of India.",
    icon: Languages,
  },
  {
    title: "Compliance Dashboard",
    description:
      "Real-time compliance score, audit trail visualization, and regulatory deadline tracking. Know your status at a glance.",
    icon: BarChart3,
  },
];

export const NETRA_FEATURES: Feature[] = [
  {
    title: "Multi-Language OCR",
    description:
      "Extract text from documents in 22 Indian languages with 94% accuracy. Hindi, Tamil, Bengali, Gujarati, and more.",
    icon: Languages,
  },
  {
    title: "Document Classification",
    description:
      "Automatically identify document types — GST invoices, PAN cards, Aadhaar, bank statements, contracts, court orders.",
    icon: Scan,
  },
  {
    title: "Field Extraction",
    description:
      "Extract structured data from any Indian document. GSTINs, PAN numbers, amounts, dates, addresses — all as clean JSON.",
    icon: FileText,
  },
  {
    title: "GSTIN Verification",
    description:
      "Verify GSTIN numbers against the GST Network in real-time. Validate business details, registration status, and filing compliance.",
    icon: CheckCircle,
  },
  {
    title: "Sub-Second Processing",
    description:
      "Process documents in under 100ms. Batch API handles 500 documents at once. Built for high-volume production workloads.",
    icon: Zap,
  },
  {
    title: "22 Language Support",
    description:
      "Native support for all 22 scheduled Indian languages. Not a wrapper — purpose-built for Indic scripts and mixed-language documents.",
    icon: Globe,
  },
  {
    title: "Developer-First API",
    description:
      "RESTful API with structured JSON responses. SDKs for Node.js and Python. Comprehensive docs. 5-minute integration.",
    icon: Code,
  },
  {
    title: "Trust Scoring",
    description:
      "Every extraction comes with a confidence score. Know exactly how trustworthy each extracted field is before processing.",
    icon: Scale,
  },
];

export const HOMEPAGE_STATS = [
  { value: "22", label: "Indian Languages" },
  { value: "94%", label: "Extraction Accuracy" },
  { value: "<100ms", label: "Processing Latency" },
  { value: "50+", label: "Document Types" },
] as const;

export const SUPPORTED_DOCUMENTS = [
  "GST Invoice",
  "E-Invoice",
  "PAN Card",
  "Aadhaar Card",
  "Bank Statement",
  "Cheque",
  "Driving License",
  "Passport",
  "Voter ID",
  "Court Order",
  "Legal Contract",
  "Employment Letter",
  "Salary Slip",
  "ITR Form",
  "Company Filing (MCA)",
  "Property Document",
  "Insurance Policy",
  "Medical Record",
  "Educational Certificate",
  "Stamp Paper",
] as const;

export const KAVACH_USE_CASES = [
  {
    icon: Building2,
    title: "AI Startups",
    description: "DPDP compliance for AI model training and deployment",
    href: "/kavach/ai-startups",
  },
  {
    icon: Scale,
    title: "Chartered Accountants",
    description: "Client data protection for tax practices",
    href: "/kavach/chartered-accountants",
  },
  {
    icon: MessageSquare,
    title: "D2C Brands",
    description: "WhatsApp consent and ad compliance",
    href: "/kavach/d2c-brands",
  },
  {
    icon: Code,
    title: "SaaS Companies",
    description: "Embeddable consent for your product",
    href: "/kavach/saas",
  },
] as const;

export const NETRA_USE_CASES = [
  {
    icon: Scale,
    title: "CA Firms",
    description: "Bulk GST invoice processing and GSTIN validation",
    href: "/netra/chartered-accountants",
  },
  {
    icon: Building2,
    title: "Fintechs",
    description: "KYC verification and bank statement parsing",
    href: "/netra/fintech",
  },
  {
    icon: FileText,
    title: "Legal Tech",
    description: "Multi-language contract and court document analysis",
    href: "/netra/legal",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Claims document processing and medical records",
    href: "/netra/insurance",
  },
] as const;
