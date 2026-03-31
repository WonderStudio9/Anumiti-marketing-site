"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, Circle, Save, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/marketing/badge";
import { CTAButton } from "@/components/marketing/cta-button";
import { CTA_URLS } from "@/lib/constants";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
}

interface ChecklistCategory {
  id: string;
  name: string;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    id: "data-mapping",
    name: "Data Mapping",
    items: [
      { id: "dm-1", title: "Inventory of personal data collected", description: "Document all categories of personal data your organization collects, including employee and customer data.", priority: "high" },
      { id: "dm-2", title: "Data flow diagrams", description: "Map how personal data moves within and outside your organization, including third-party transfers.", priority: "high" },
      { id: "dm-3", title: "Data storage locations identified", description: "Identify all physical and digital locations where personal data is stored, including cloud services.", priority: "medium" },
      { id: "dm-4", title: "Data retention periods defined", description: "Establish and document retention periods for each category of personal data collected.", priority: "medium" },
      { id: "dm-5", title: "Cross-border data transfer assessment", description: "Assess and document any transfers of personal data outside India and applicable safeguards.", priority: "high" },
    ],
  },
  {
    id: "consent-management",
    name: "Consent Management",
    items: [
      { id: "cm-1", title: "Consent collection mechanism implemented", description: "Deploy a clear, affirmative consent mechanism for all data collection points.", priority: "high" },
      { id: "cm-2", title: "Consent notices in clear language", description: "Ensure consent notices are written in plain, understandable language (not legalese).", priority: "high" },
      { id: "cm-3", title: "Multi-language consent support", description: "Provide consent notices in all 22 scheduled Indian languages as required by DPDP.", priority: "medium" },
      { id: "cm-4", title: "Granular consent options", description: "Allow users to provide separate consent for each purpose of data processing.", priority: "high" },
      { id: "cm-5", title: "Consent withdrawal mechanism", description: "Implement an easy-to-use mechanism for data subjects to withdraw consent.", priority: "high" },
      { id: "cm-6", title: "Consent audit trail", description: "Maintain timestamped records of when and how consent was obtained from each data subject.", priority: "medium" },
    ],
  },
  {
    id: "data-subject-rights",
    name: "Data Subject Rights",
    items: [
      { id: "dsr-1", title: "Right to access implemented", description: "Enable data subjects to request and receive a summary of their personal data being processed.", priority: "high" },
      { id: "dsr-2", title: "Right to correction implemented", description: "Allow data subjects to request correction or completion of inaccurate personal data.", priority: "high" },
      { id: "dsr-3", title: "Right to erasure implemented", description: "Provide a mechanism for data subjects to request deletion of their personal data.", priority: "high" },
      { id: "dsr-4", title: "Grievance redressal mechanism", description: "Establish a process for data subjects to raise and resolve grievances regarding data processing.", priority: "medium" },
      { id: "dsr-5", title: "Response timelines defined", description: "Define and adhere to response timelines for data subject requests as per DPDP Act.", priority: "medium" },
    ],
  },
  {
    id: "security-measures",
    name: "Security Measures",
    items: [
      { id: "sm-1", title: "Encryption at rest and in transit", description: "Implement strong encryption for personal data both at rest and during transmission.", priority: "high" },
      { id: "sm-2", title: "Access control policies", description: "Define and enforce role-based access controls for systems containing personal data.", priority: "high" },
      { id: "sm-3", title: "Regular security assessments", description: "Conduct periodic vulnerability assessments and penetration testing of data systems.", priority: "medium" },
      { id: "sm-4", title: "Data anonymization / pseudonymization", description: "Implement techniques to de-identify personal data where full identification is not required.", priority: "medium" },
      { id: "sm-5", title: "Employee security training", description: "Provide regular data protection and security awareness training to all employees.", priority: "medium" },
      { id: "sm-6", title: "Third-party security assessment", description: "Evaluate and monitor the security practices of all third-party data processors.", priority: "high" },
    ],
  },
  {
    id: "dpia",
    name: "Data Protection Impact Assessment",
    items: [
      { id: "dpia-1", title: "DPIA process established", description: "Define a formal process for conducting DPIAs for high-risk data processing activities.", priority: "high" },
      { id: "dpia-2", title: "High-risk processing identified", description: "Identify all processing activities that pose a high risk to data subjects' rights.", priority: "high" },
      { id: "dpia-3", title: "Mitigation measures documented", description: "Document risk mitigation measures for each identified high-risk processing activity.", priority: "medium" },
      { id: "dpia-4", title: "Regular DPIA reviews scheduled", description: "Schedule periodic reviews of DPIAs to account for changes in processing or risk profile.", priority: "low" },
    ],
  },
  {
    id: "breach-management",
    name: "Breach Management",
    items: [
      { id: "bm-1", title: "Breach detection mechanisms", description: "Implement monitoring and alerting systems to detect personal data breaches promptly.", priority: "high" },
      { id: "bm-2", title: "Breach notification process", description: "Establish a process to notify the Data Protection Board within the prescribed timeframe.", priority: "high" },
      { id: "bm-3", title: "Data subject notification plan", description: "Define how and when affected data subjects will be notified in the event of a breach.", priority: "medium" },
      { id: "bm-4", title: "Incident response team", description: "Designate and train a team responsible for managing data breach incidents.", priority: "medium" },
    ],
  },
  {
    id: "documentation",
    name: "Documentation & Governance",
    items: [
      { id: "doc-1", title: "Privacy policy published", description: "Publish a comprehensive, DPDP-compliant privacy policy on your website.", priority: "high" },
      { id: "doc-2", title: "Data Processing Agreements (DPAs)", description: "Execute DPAs with all third-party processors handling personal data on your behalf.", priority: "high" },
      { id: "doc-3", title: "Records of processing activities", description: "Maintain up-to-date records of all personal data processing activities.", priority: "medium" },
      { id: "doc-4", title: "Data Protection Officer appointed", description: "Appoint a DPO if required based on the volume and sensitivity of data processed.", priority: "medium" },
      { id: "doc-5", title: "Compliance training records", description: "Maintain records of all compliance training provided to employees.", priority: "low" },
    ],
  },
];

const STORAGE_KEY = "anumiti-dpdp-checklist";

const priorityBadge: Record<"high" | "medium" | "low", { label: string; variant: "saffron" | "indigo" | "gray" }> = {
  high: { label: "High", variant: "saffron" },
  medium: { label: "Medium", variant: "indigo" },
  low: { label: "Low", variant: "gray" },
};

export function ComplianceChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.checked) setChecked(parsed.checked);
        if (parsed.savedAt) setSavedAt(parsed.savedAt);
      }
    } catch {
      // ignore
    }
  }, []);

  const totalItems = CHECKLIST_DATA.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedItems = Object.values(checked).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const toggleItem = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  function categoryProgress(category: ChecklistCategory) {
    const done = category.items.filter((item) => checked[item.id]).length;
    return { done, total: category.items.length };
  }

  function handleSave() {
    const now = new Date().toLocaleString("en-IN");
    setSavedAt(now);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ checked, savedAt: now }));
    } catch {
      // ignore
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setEmailSubmitted(true);
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-navy">Overall Compliance Progress</h3>
          <span className="text-2xl font-extrabold text-teal">{progressPercent}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {completedItems} of {totalItems} items complete
          {savedAt && <span className="ml-3 text-gray-400">&middot; Last saved: {savedAt}</span>}
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {CHECKLIST_DATA.map((category) => {
          const { done, total } = categoryProgress(category);
          const catComplete = done === total;
          return (
            <div
              key={category.id}
              className="rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h4 className="text-base font-bold text-navy">{category.name}</h4>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    catComplete
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {done}/{total} complete
                </span>
              </div>

              {/* Items */}
              <ul className="divide-y divide-gray-50">
                {category.items.map((item) => {
                  const isDone = !!checked[item.id];
                  return (
                    <li key={item.id} className="group px-6 py-4">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="flex w-full items-start gap-3 text-left"
                      >
                        {isDone ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal transition-colors" />
                        ) : (
                          <Circle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300 transition-colors group-hover:text-teal-300" />
                        )}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-sm font-semibold transition-colors ${
                                isDone ? "text-gray-400 line-through" : "text-navy-700"
                              }`}
                            >
                              {item.title}
                            </span>
                            <Badge variant={priorityBadge[item.priority].variant}>
                              {priorityBadge[item.priority].label}
                            </Badge>
                          </div>
                          <p className={`mt-1 text-xs leading-relaxed ${isDone ? "text-gray-300" : "text-gray-500"}`}>
                            {item.description}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700"
        >
          <Save className="h-5 w-5" />
          Save Progress
        </button>
        {savedAt && (
          <span className="text-sm text-green-600">Progress saved to your browser</span>
        )}
      </div>

      {/* Email Capture */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        {emailSubmitted ? (
          <div className="flex items-center gap-3 text-indigo-700">
            <ShieldCheck className="h-5 w-5" />
            <p className="font-medium">
              Thank you! We&apos;ll keep you updated on your compliance journey.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-indigo-600" />
              <p className="font-semibold text-navy-700">
                Get Reminders and Updates on Your Compliance Journey
              </p>
            </div>
            <p className="mb-4 text-sm text-gray-600">
              Receive deadline reminders, regulatory updates, and compliance tips directly in your inbox.
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
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>

      {/* CTA */}
      <div className="text-center">
        <CTAButton href={CTA_URLS.kavachTrial} variant="kavach" size="md">
          Automate Compliance with KAVACH &rarr;
        </CTAButton>
      </div>
    </div>
  );
}
