export interface Industry {
  slug: string;
  name: string;
  description: string;
  keyDataTypes: string[];
  dpdpObligations: string[];
  documentTypes: string[];
  recommendedProduct: "kavach" | "netra" | "both";
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Hospitals, clinics, diagnostic labs, pharma companies, and health-tech startups processing patient health data.",
    keyDataTypes: ["Patient medical records", "Health insurance data", "Prescription data", "Diagnostic reports", "Biometric data"],
    dpdpObligations: ["Explicit consent for health data processing", "Heightened security measures for sensitive data", "Data minimization in prescriptions", "Patient right to access and erasure", "Breach notification within 72 hours"],
    documentTypes: ["Medical records", "Insurance claims", "Prescriptions", "Lab reports", "Patient consent forms"],
    recommendedProduct: "both",
  },
  {
    slug: "fintech",
    name: "Fintech & Banking",
    description: "Banks, NBFCs, payment processors, lending platforms, and insurance companies handling financial personal data.",
    keyDataTypes: ["KYC data (PAN, Aadhaar)", "Bank statements", "Transaction history", "Credit scores", "Income proof"],
    dpdpObligations: ["KYC data consent management", "RBI compliance + DPDP alignment", "Financial data retention limits", "Customer data portability", "Breach reporting to DPB and RBI"],
    documentTypes: ["PAN cards", "Aadhaar", "Bank statements", "Cheques", "ITR forms", "Salary slips"],
    recommendedProduct: "both",
  },
  {
    slug: "edtech",
    name: "EdTech & Education",
    description: "Schools, universities, ed-tech platforms, and coaching institutes processing student and minor data.",
    keyDataTypes: ["Student records", "Minor personal data", "Parent/guardian data", "Learning analytics", "Assessment data"],
    dpdpObligations: ["Verifiable parental consent for minors", "No behavioral tracking of children", "No targeted advertising to minors", "Strict data minimization", "Enhanced security for minor data"],
    documentTypes: ["Student ID cards", "Mark sheets", "Transfer certificates", "Aadhaar (for scholarships)", "Birth certificates"],
    recommendedProduct: "kavach",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & D2C",
    description: "Online marketplaces, D2C brands, and retail platforms processing customer purchase and behavioral data.",
    keyDataTypes: ["Customer profiles", "Purchase history", "Delivery addresses", "Payment data", "Browsing behavior", "Cookie data"],
    dpdpObligations: ["Cookie consent management", "Marketing consent (WhatsApp, email, SMS)", "Data subject access requests", "Third-party data sharing disclosure", "Cross-border data transfer compliance"],
    documentTypes: ["GST invoices", "Shipping documents", "Return forms", "KYC for high-value purchases"],
    recommendedProduct: "kavach",
  },
  {
    slug: "legal",
    name: "Legal & Compliance",
    description: "Law firms, legal tech companies, compliance consultancies handling sensitive legal and personal case data.",
    keyDataTypes: ["Case files", "Client personal data", "Court records", "Witness information", "Legal opinions"],
    dpdpObligations: ["Client confidentiality + DPDP compliance", "Legal privilege considerations", "Cross-jurisdictional data handling", "Retention policies for case data", "Consent for non-litigation data use"],
    documentTypes: ["Court orders", "Contracts", "Affidavits", "Power of Attorney", "Legal notices", "Stamp papers"],
    recommendedProduct: "netra",
  },
  {
    slug: "insurance",
    name: "Insurance",
    description: "Life, health, motor, and general insurance companies processing policyholder claims and personal data.",
    keyDataTypes: ["Policy holder data", "Health records", "Claims documents", "Nominee information", "Agent data"],
    dpdpObligations: ["Consent for health data in underwriting", "Claims data privacy", "Nominee data handling", "Agent data management", "Third-party assessor data sharing"],
    documentTypes: ["Policy documents", "Claims forms", "Medical reports", "FIR copies", "Vehicle RC", "Hospital bills"],
    recommendedProduct: "both",
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    description: "Builders, brokers, property management firms, and prop-tech platforms handling buyer/tenant personal data.",
    keyDataTypes: ["Buyer/tenant KYC", "Property documents", "Financial records", "Aadhaar for verification", "Bank statements"],
    dpdpObligations: ["KYC consent for property transactions", "Document verification consent", "Third-party sharing (banks, registrars)", "Retention limits on transaction data", "RERA compliance + DPDP alignment"],
    documentTypes: ["Property deeds", "Sale agreements", "Stamp duty documents", "PAN", "Aadhaar", "Bank statements"],
    recommendedProduct: "both",
  },
  {
    slug: "hr-recruitment",
    name: "HR & Recruitment",
    description: "HR departments, staffing agencies, and HR-tech platforms processing employee and candidate personal data.",
    keyDataTypes: ["Employee records", "Resumes/CVs", "Background checks", "Payroll data", "Biometric attendance"],
    dpdpObligations: ["Employee data consent", "Background check consent", "Biometric data handling", "Exit data management", "Cross-border transfer for MNCs"],
    documentTypes: ["PAN cards", "Aadhaar", "Educational certificates", "Experience letters", "Salary slips", "Bank account details"],
    recommendedProduct: "both",
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    description: "Courier companies, fleet operators, warehouse management, and supply chain platforms processing shipment and driver data.",
    keyDataTypes: ["Consignee data", "Driver information", "GPS tracking", "Delivery addresses", "E-way bill data"],
    dpdpObligations: ["Consignee consent for tracking", "Driver data privacy", "GPS data handling", "Third-party logistics data sharing", "E-way bill data retention"],
    documentTypes: ["E-way bills", "GST invoices", "Delivery receipts", "Driver licenses", "Vehicle RC", "Consignment notes"],
    recommendedProduct: "netra",
  },
  {
    slug: "saas",
    name: "SaaS & Technology",
    description: "B2B and B2C SaaS companies, cloud providers, and tech platforms processing user data at scale.",
    keyDataTypes: ["User accounts", "Usage analytics", "Support tickets", "Payment data", "Integration data"],
    dpdpObligations: ["In-product consent flows", "Data processing agreements with customers", "Sub-processor management", "Data residency compliance", "Consent Manager integration for B2C"],
    documentTypes: ["Terms of service", "DPAs", "Security audit reports", "SOC 2 reports"],
    recommendedProduct: "kavach",
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    description: "OTT platforms, news media, advertising companies, and content creators processing audience data.",
    keyDataTypes: ["Viewer profiles", "Content preferences", "Ad targeting data", "Subscription data", "UGC metadata"],
    dpdpObligations: ["Content personalization consent", "Advertising data consent", "Children's content restrictions", "Cross-platform data sharing", "Right to opt-out of profiling"],
    documentTypes: ["Content licensing agreements", "Advertiser contracts", "Subscriber KYC"],
    recommendedProduct: "kavach",
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    description: "Government departments, PSUs, and public service platforms processing citizen data at massive scale.",
    keyDataTypes: ["Citizen records", "Aadhaar data", "Benefit scheme data", "Tax records", "Land records"],
    dpdpObligations: ["Sovereign data handling under DPDP", "Citizen consent for non-essential processing", "Data minimization in government schemes", "Right to information alignment", "Cross-department data sharing governance"],
    documentTypes: ["Aadhaar", "PAN", "Voter ID", "Land records", "Birth/death certificates", "Tax documents"],
    recommendedProduct: "both",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
