"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Copy, Check, Mail, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/marketing/cta-button";
import { CTA_URLS } from "@/lib/constants";

const INDUSTRIES = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "E-commerce",
  "Legal",
  "Hospitality",
  "Manufacturing",
  "Other",
] as const;

const DATA_TYPES = [
  { id: "name", label: "Name", category: "basic" },
  { id: "email", label: "Email Address", category: "basic" },
  { id: "phone", label: "Phone Number", category: "basic" },
  { id: "address", label: "Physical Address", category: "basic" },
  { id: "aadhaar", label: "Aadhaar Number", category: "sensitive" },
  { id: "pan", label: "PAN Number", category: "sensitive" },
  { id: "financial", label: "Financial Data", category: "sensitive" },
  { id: "health", label: "Health Data", category: "sensitive" },
  { id: "biometric", label: "Biometric Data", category: "sensitive" },
  { id: "location", label: "Location Data", category: "tracking" },
  { id: "browsing", label: "Browsing Behavior", category: "tracking" },
] as const;

const PURPOSES = [
  { id: "service-delivery", label: "Service Delivery" },
  { id: "marketing", label: "Marketing Communications" },
  { id: "analytics", label: "Analytics & Insights" },
  { id: "legal-compliance", label: "Legal Compliance" },
  { id: "third-party-sharing", label: "Third-party Sharing" },
  { id: "ai-ml-training", label: "AI/ML Model Training" },
] as const;

function generateNotice(
  companyName: string,
  industry: string,
  website: string,
  dataTypes: string[],
  purposes: string[]
): string {
  const dataLabels = dataTypes.map(
    (dt) => DATA_TYPES.find((d) => d.id === dt)?.label ?? dt
  );
  const purposeLabels = purposes.map(
    (p) => PURPOSES.find((pp) => pp.id === p)?.label ?? p
  );

  const hasSensitive = dataTypes.some((dt) =>
    DATA_TYPES.find((d) => d.id === dt && d.category === "sensitive")
  );

  const hasChildren = industry === "Education";

  let notice = `CONSENT NOTICE
${companyName}
${website ? `(${website})` : ""}

Under the Digital Personal Data Protection Act, 2023

Dear User,

${companyName} ("we", "us", or "our") values your privacy and is committed to protecting your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the rules framed thereunder.

1. DATA WE COLLECT
We collect the following categories of personal data:
${dataLabels.map((label) => `   - ${label}`).join("\n")}

2. PURPOSE OF DATA PROCESSING
Your personal data is processed for the following purposes:
${purposeLabels.map((label) => `   - ${label}`).join("\n")}

3. YOUR RIGHTS AS A DATA PRINCIPAL
Under the DPDP Act, you have the right to:
   - Access a summary of your personal data being processed
   - Request correction or completion of inaccurate data
   - Request erasure of your personal data
   - Withdraw your consent at any time
   - File a grievance with our Grievance Officer or the Data Protection Board of India

4. CONSENT
By clicking "I Agree" or continuing to use our services, you provide your free, specific, informed, unconditional, and unambiguous consent for ${companyName} to collect, store, and process your personal data for the purposes stated above.

You may withdraw your consent at any time by contacting us. Upon withdrawal, we will cease processing your data, subject to any legal obligations requiring retention.

5. DATA RETENTION
We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.

6. DATA SECURITY
We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.`;

  if (hasSensitive) {
    notice += `

7. SENSITIVE PERSONAL DATA
We process certain categories of sensitive personal data (such as ${dataLabels
      .filter((_, i) =>
        DATA_TYPES.find((d) => d.id === dataTypes[i] && d.category === "sensitive")
      )
      .join(", ")}). This data is subject to enhanced security measures and will only be processed with your explicit consent and for the specific purposes outlined above.`;
  }

  if (hasChildren) {
    notice += `

${hasSensitive ? "8" : "7"}. CHILDREN'S DATA
As an organization in the ${industry} sector, we may process data of minors. We obtain verifiable parental consent before processing any personal data of children below 18 years of age, as required by the DPDP Act. We do not engage in tracking, behavioral monitoring, or targeted advertising directed at children.`;
  }

  notice += `

GRIEVANCE OFFICER
For any questions, concerns, or requests regarding your personal data, please contact our Grievance Officer at:
[Grievance Officer Name]
[Email Address]
[Contact Number]

This consent notice was generated to align with the Digital Personal Data Protection Act, 2023. For the most current version, please visit our website.

Last updated: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`;

  return notice;
}

export function ConsentGenerator() {
  const [step, setStep] = useState(1);

  // Step 1
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");

  // Step 2
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);

  // Step 3
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);

  // Output
  const [generatedNotice, setGeneratedNotice] = useState("");
  const [copied, setCopied] = useState(false);

  // Email
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const canProceedStep1 = companyName.trim().length > 0 && industry.length > 0;
  const canProceedStep2 = selectedDataTypes.length > 0;
  const canGenerate = selectedPurposes.length > 0;

  function toggleDataType(id: string) {
    setSelectedDataTypes((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }

  function togglePurpose(id: string) {
    setSelectedPurposes((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleGenerate() {
    const notice = generateNotice(companyName, industry, website, selectedDataTypes, selectedPurposes);
    setGeneratedNotice(notice);
    setStep(4);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generatedNotice);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = generatedNotice;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setEmailSubmitted(true);
  }

  const steps = [
    { num: 1, label: "Company Info" },
    { num: 2, label: "Data Collection" },
    { num: 3, label: "Processing Purpose" },
  ];

  return (
    <div className="space-y-8">
      {/* Step Indicators */}
      {step <= 3 && (
        <div className="flex items-center justify-center gap-2">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  step >= s.num
                    ? "bg-teal text-navy"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > s.num ? <Check className="h-4 w-4" /> : s.num}
              </div>
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  step >= s.num ? "text-navy-700" : "text-gray-400"
                }`}
              >
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div className={`mx-2 h-px w-8 ${step > s.num ? "bg-teal" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Company Info */}
      {step === 1 && (
        <div className="animate-fade-in space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-navy">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Technologies Pvt Ltd"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-700">
                Industry <span className="text-red-500">*</span>
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-700">Website URL</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-navy transition-all hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Data Collection */}
      {step === 2 && (
        <div className="animate-fade-in space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-navy">Data You Collect</h3>
          <p className="text-sm text-gray-500">Select all types of personal data your organization collects.</p>

          {(["basic", "sensitive", "tracking"] as const).map((category) => {
            const categoryLabel = { basic: "Basic Information", sensitive: "Sensitive Data", tracking: "Tracking & Behavioral" }[category];
            const items = DATA_TYPES.filter((d) => d.category === category);
            return (
              <div key={category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{categoryLabel}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {items.map((dt) => (
                    <label
                      key={dt.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all ${
                        selectedDataTypes.includes(dt.id)
                          ? "border-teal bg-teal-50 text-navy-700"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedDataTypes.includes(dt.id)}
                        onChange={() => toggleDataType(dt.id)}
                        className="h-4 w-4 rounded border-gray-300 text-teal accent-teal focus:ring-teal"
                      />
                      {dt.label}
                      {dt.category === "sensitive" && (
                        <span className="ml-auto rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-600">
                          Sensitive
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-navy transition-all hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Processing Purpose */}
      {step === 3 && (
        <div className="animate-fade-in space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-navy">Processing Purposes</h3>
          <p className="text-sm text-gray-500">Select all purposes for which you process personal data.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {PURPOSES.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all ${
                  selectedPurposes.includes(p.id)
                    ? "border-teal bg-teal-50 text-navy-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedPurposes.includes(p.id)}
                  onChange={() => togglePurpose(p.id)}
                  className="h-4 w-4 rounded border-gray-300 text-teal accent-teal focus:ring-teal"
                />
                {p.label}
              </label>
            ))}
          </div>
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-navy transition-all hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate Consent Notice
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Output */}
      {step === 4 && generatedNotice && (
        <div className="animate-fade-in space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h3 className="text-lg font-bold text-navy">Generated Consent Notice</h3>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            </div>
            <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap p-6 font-sans text-sm leading-relaxed text-navy-600">
              {generatedNotice}
            </pre>
          </div>

          {/* Email Capture */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
            {emailSubmitted ? (
              <div className="flex items-center gap-3 text-indigo-700">
                <ShieldCheck className="h-5 w-5" />
                <p className="font-medium">
                  Thank you! We&apos;ll send you the multi-language consent notice shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <p className="font-semibold text-navy-700">
                    Get This Notice in All 22 Indian Languages with KAVACH
                  </p>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  DPDP Act requires consent notices in the language preferred by the data subject. KAVACH auto-generates
                  compliant notices in all 22 scheduled languages.
                </p>
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
                  >
                    Get Multi-language
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setStep(1);
                setGeneratedNotice("");
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Start Over
            </button>
            <CTAButton href={CTA_URLS.kavachTrial} variant="kavach" size="md">
              Try KAVACH Free &rarr;
            </CTAButton>
          </div>
        </div>
      )}
    </div>
  );
}
