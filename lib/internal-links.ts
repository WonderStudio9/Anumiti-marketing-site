interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

const linkMap: Record<string, RelatedLink[]> = {
  "/kavach": [
    { title: "DPDP Act 2023 — Complete Guide", href: "/guides/dpdp-act-2023" },
    { title: "DPDP Penalty Calculator", href: "/tools/dpdp-penalty-calculator" },
    { title: "KAVACH vs OneTrust", href: "/compare/anumiti-vs-onetrust" },
    { title: "Consent Notice Generator", href: "/tools/consent-notice-generator" },
    { title: "Pricing", href: "/pricing" },
  ],
  "/netra": [
    { title: "GSTIN Lookup Tool", href: "/tools/gstin-lookup" },
    { title: "GST Invoice Validator", href: "/tools/gst-invoice-validator" },
    { title: "NETRA vs AWS Textract", href: "/compare/netra-vs-textract" },
    { title: "API Playground", href: "/playground" },
    { title: "Pricing", href: "/pricing" },
  ],
  "/pricing": [
    { title: "KAVACH Product Page", href: "/kavach" },
    { title: "NETRA Product Page", href: "/netra" },
    { title: "Contact Sales", href: "/contact" },
  ],
  "/guides/dpdp-act-2023": [
    { title: "DPDP Rules 2025", href: "/guides/dpdp-rules-2025" },
    { title: "DPDP vs GDPR", href: "/guides/dpdp-vs-gdpr" },
    { title: "DPDP Penalty Calculator", href: "/tools/dpdp-penalty-calculator" },
    { title: "DPDP Compliance Checklist", href: "/tools/dpdp-checklist" },
    { title: "KAVACH — DPDP Compliance Platform", href: "/kavach" },
  ],
  "/tools/dpdp-penalty-calculator": [
    { title: "DPDP Act 2023 Guide", href: "/guides/dpdp-act-2023" },
    { title: "DPDP Compliance Checklist", href: "/tools/dpdp-checklist" },
    { title: "KAVACH — Start Compliance", href: "/kavach" },
  ],
  "/tools/gstin-lookup": [
    { title: "NETRA — Document Intelligence API", href: "/netra" },
    { title: "GST Invoice Validator", href: "/tools/gst-invoice-validator" },
    { title: "NETRA for CA Firms", href: "/netra/chartered-accountants" },
  ],
};

export function getRelatedLinks(path: string, limit = 5): RelatedLink[] {
  return (linkMap[path] ?? []).slice(0, limit);
}
