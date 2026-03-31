export interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-03-28",
    version: "2.4.0",
    title: "KAVACH: Consent Manager Integration & Hindi Notice Templates",
    changes: [
      "Added Consent Manager registration workflow support — connect registered CMs to your KAVACH dashboard",
      "New Hindi consent notice templates aligned with MeitY model notices",
      "Consent withdrawal API now supports batch operations for bulk requests",
      "Improved breach detection sensitivity with 40% fewer false positives",
      "Added export for Data Protection Board notification format",
    ],
  },
  {
    date: "2026-03-15",
    version: "2.3.1",
    title: "NETRA: Tamil and Telugu Accuracy Improvements",
    changes: [
      "15% accuracy improvement on Tamil handwritten document extraction",
      "12% accuracy improvement on Telugu printed invoice processing",
      "Fixed edge case where multi-page PDFs with mixed scripts would timeout",
      "Added support for Karnataka stamp paper format recognition",
      "Improved table extraction for invoices with merged cells",
    ],
  },
  {
    date: "2026-03-01",
    version: "2.3.0",
    title: "NETRA: Batch Processing API & New Document Types",
    changes: [
      "Launched batch processing API — submit up to 1,000 documents per batch request",
      "Added pre-trained extractors for Indian court orders and legal notices",
      "New webhook support for async processing completion notifications",
      "Reduced average processing latency by 30% across all document types",
      "Added confidence scoring at the field level (not just document level)",
    ],
  },
  {
    date: "2026-02-15",
    version: "2.2.0",
    title: "KAVACH: DPDP Compliance Scoring Dashboard",
    changes: [
      "New compliance score dashboard — see your DPDP readiness at a glance (0-100 score)",
      "Automated gap analysis against all DPDP Act 2023 requirements",
      "Added data principal rights request tracking with SLA monitoring",
      "New audit log export in formats accepted by the Data Protection Board",
      "Improved privacy notice versioning — track changes over time",
    ],
  },
  {
    date: "2026-02-01",
    version: "2.1.0",
    title: "NETRA: PII Auto-Redaction & Aadhaar Masking",
    changes: [
      "Automatic PII detection and redaction across all extracted documents",
      "Aadhaar number masking compliant with UIDAI guidelines (show last 4 digits only)",
      "Added PAN card number detection and optional masking",
      "New redaction preview API — see what will be redacted before committing",
      "Support for custom PII patterns (define your own sensitive fields)",
    ],
  },
  {
    date: "2026-01-15",
    version: "2.0.0",
    title: "Anumiti 2.0: Unified Platform Launch",
    changes: [
      "Unified KAVACH and NETRA under a single API key and dashboard",
      "New pricing tiers with generous free tier (1,000 pages/month for NETRA, 500 consent records for KAVACH)",
      "Completely redesigned API documentation with interactive examples",
      "Added Python and Node.js SDKs for both products",
      "SOC 2 Type II certification achieved",
      "99.95% uptime SLA for enterprise plans",
    ],
  },
  {
    date: "2025-12-01",
    version: "1.5.0",
    title: "KAVACH: Multi-language Consent Notices",
    changes: [
      "Consent notice generation in 8 Indian languages (Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam)",
      "Added consent notice A/B testing support",
      "New consent analytics dashboard — track opt-in rates by language and region",
      "Improved consent record storage with 7-year retention",
    ],
  },
  {
    date: "2025-11-01",
    version: "1.4.0",
    title: "NETRA: GST Invoice Processing & Validation",
    changes: [
      "Pre-trained GST invoice extractor — extract line items, tax details, and GSTIN automatically",
      "GSTIN format validation and checksum verification",
      "HSN code extraction and cross-referencing",
      "Support for both B2B and B2C invoice formats",
      "Added bulk invoice upload via ZIP file",
    ],
  },
  {
    date: "2025-10-01",
    version: "1.3.0",
    title: "KAVACH: Breach Detection & Notification Workflows",
    changes: [
      "Real-time breach detection monitoring across connected data stores",
      "Automated Data Protection Board notification draft generation",
      "Data principal notification workflow with multi-language templates",
      "Breach severity scoring and impact assessment",
    ],
  },
  {
    date: "2025-09-01",
    version: "1.2.0",
    title: "NETRA: Handwritten Document Support",
    changes: [
      "Handwritten text recognition for Devanagari, Tamil, and Telugu scripts",
      "Mixed print-handwritten document handling",
      "Improved accuracy on low-quality scans and mobile camera captures",
      "Added document quality scoring to flag poor captures before processing",
    ],
  },
  {
    date: "2025-08-01",
    version: "1.1.0",
    title: "KAVACH: Data Principal Rights Portal",
    changes: [
      "Self-service data principal rights portal — embed in your website",
      "Automated access request fulfillment with data aggregation",
      "Correction and erasure request workflows with approval chains",
      "Grievance tracking with SLA monitoring and escalation",
    ],
  },
  {
    date: "2025-07-01",
    version: "1.0.0",
    title: "Anumiti: Initial Launch",
    changes: [
      "KAVACH: Consent builder with 22 Indian language support",
      "KAVACH: DPDP compliance dashboard with real-time scoring",
      "KAVACH: WhatsApp consent flow integration",
      "NETRA: Document extraction API with 50+ Indian document types",
      "NETRA: GSTIN verification endpoint",
      "NETRA: PAN validation endpoint",
      "Node.js and Python SDKs published",
      "Free tier for both products — no credit card required",
    ],
  },
];
