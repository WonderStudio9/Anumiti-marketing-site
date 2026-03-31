"use client";

import { useState } from "react";
import { Calculator, AlertTriangle, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/marketing/cta-button";
import { CTA_URLS } from "@/lib/constants";

type RevenueRange = "" | "<1Cr" | "1-10Cr" | "10-50Cr" | "50-250Cr" | "250Cr+";
type BreachType = "" | "data-breach" | "consent-violation" | "child-data" | "repeated-offense" | "failure-to-comply";
type Industry = "" | "technology" | "finance" | "healthcare" | "education" | "e-commerce" | "legal" | "other";

interface PenaltyResult {
  minPenalty: number;
  maxPenalty: number;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  breakdown: string[];
  recommendations: string[];
}

const REVENUE_LABELS: Record<Exclude<RevenueRange, "">, string> = {
  "<1Cr": "Less than ₹1 Crore",
  "1-10Cr": "₹1 - 10 Crore",
  "10-50Cr": "₹10 - 50 Crore",
  "50-250Cr": "₹50 - 250 Crore",
  "250Cr+": "₹250 Crore+",
};

const BREACH_LABELS: Record<Exclude<BreachType, "">, string> = {
  "data-breach": "Data Breach",
  "consent-violation": "Consent Violation",
  "child-data": "Child Data Violation",
  "repeated-offense": "Repeated Offense",
  "failure-to-comply": "Failure to Comply with DPB",
};

const INDUSTRY_LABELS: Record<Exclude<Industry, "">, string> = {
  technology: "Technology",
  finance: "Finance",
  healthcare: "Healthcare",
  education: "Education",
  "e-commerce": "E-commerce",
  legal: "Legal",
  other: "Other",
};

function formatCrore(amount: number): string {
  if (amount >= 100) {
    return `₹${amount} Crore`;
  }
  return `₹${amount.toFixed(1)} Crore`;
}

function calculatePenalty(
  revenue: Exclude<RevenueRange, "">,
  dataSubjects: number,
  breachType: Exclude<BreachType, "">,
  industry: Exclude<Industry, "">
): PenaltyResult {
  // Base max penalties per DPDP Act
  const maxPenalties: Record<Exclude<BreachType, "">, number> = {
    "data-breach": 250,
    "consent-violation": 50,
    "child-data": 200,
    "repeated-offense": 250,
    "failure-to-comply": 50,
  };

  const maxCap = maxPenalties[breachType];

  // Revenue multiplier
  const revenueMultipliers: Record<Exclude<RevenueRange, "">, number> = {
    "<1Cr": 0.02,
    "1-10Cr": 0.08,
    "10-50Cr": 0.2,
    "50-250Cr": 0.45,
    "250Cr+": 0.75,
  };
  const revMultiplier = revenueMultipliers[revenue];

  // Data subjects scale factor
  let subjectFactor = 1;
  if (dataSubjects > 1000000) subjectFactor = 1.5;
  else if (dataSubjects > 100000) subjectFactor = 1.3;
  else if (dataSubjects > 10000) subjectFactor = 1.15;
  else if (dataSubjects > 1000) subjectFactor = 1.05;

  // Industry sensitivity
  const industryMultipliers: Record<Exclude<Industry, "">, number> = {
    finance: 1.4,
    healthcare: 1.35,
    technology: 1.1,
    education: 1.2,
    "e-commerce": 1.15,
    legal: 1.1,
    other: 1.0,
  };
  const indMultiplier = industryMultipliers[industry];

  // Repeated offense multiplier
  const repeatMultiplier = breachType === "repeated-offense" ? 2.0 : 1.0;

  const estimatedMax = Math.min(
    maxCap,
    maxCap * revMultiplier * subjectFactor * indMultiplier * repeatMultiplier
  );
  const estimatedMin = Math.max(0.5, estimatedMax * 0.25);

  // Risk level
  let riskLevel: PenaltyResult["riskLevel"] = "Low";
  if (estimatedMax >= 150) riskLevel = "Critical";
  else if (estimatedMax >= 50) riskLevel = "High";
  else if (estimatedMax >= 10) riskLevel = "Medium";

  // Breakdown
  const breakdown: string[] = [
    `Base maximum penalty for ${BREACH_LABELS[breachType]}: ${formatCrore(maxCap)}`,
    `Revenue-based adjustment (${REVENUE_LABELS[revenue]}): ${(revMultiplier * 100).toFixed(0)}% of cap`,
    `Data subjects impact (${dataSubjects.toLocaleString("en-IN")} subjects): ${subjectFactor}x factor`,
    `Industry sensitivity (${INDUSTRY_LABELS[industry]}): ${indMultiplier}x factor`,
  ];
  if (breachType === "repeated-offense") {
    breakdown.push("Repeated offense multiplier: 2x applied");
  }

  // Recommendations
  const recommendations: string[] = [];
  if (riskLevel === "Critical" || riskLevel === "High") {
    recommendations.push(
      "Immediately conduct a Data Protection Impact Assessment (DPIA) and implement remediation measures."
    );
    recommendations.push(
      "Engage a certified Data Protection Officer (DPO) to lead compliance efforts."
    );
    recommendations.push(
      "Deploy automated consent management to demonstrate DPDP compliance readiness."
    );
  } else if (riskLevel === "Medium") {
    recommendations.push(
      "Review and update your data processing policies to align with DPDP requirements."
    );
    recommendations.push(
      "Implement automated consent tracking and data subject rights management."
    );
    recommendations.push(
      "Schedule regular compliance audits to identify gaps before enforcement."
    );
  } else {
    recommendations.push(
      "Maintain documentation of data processing activities and consent records."
    );
    recommendations.push(
      "Set up proactive monitoring for regulatory changes and deadlines."
    );
  }

  return {
    minPenalty: Math.round(estimatedMin * 10) / 10,
    maxPenalty: Math.round(estimatedMax * 10) / 10,
    riskLevel,
    breakdown,
    recommendations,
  };
}

const riskColors: Record<PenaltyResult["riskLevel"], string> = {
  Low: "bg-green-100 text-green-800 border-green-300",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
  High: "bg-orange-100 text-orange-800 border-orange-300",
  Critical: "bg-red-100 text-red-800 border-red-300",
};

export function PenaltyCalculator() {
  const [revenue, setRevenue] = useState<RevenueRange>("");
  const [dataSubjects, setDataSubjects] = useState("");
  const [breachType, setBreachType] = useState<BreachType>("");
  const [industry, setIndustry] = useState<Industry>("");
  const [result, setResult] = useState<PenaltyResult | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const isFormValid = revenue && dataSubjects && breachType && industry && Number(dataSubjects) > 0;

  function handleCalculate() {
    if (!isFormValid) return;
    const r = calculatePenalty(
      revenue as Exclude<RevenueRange, "">,
      Number(dataSubjects),
      breachType as Exclude<BreachType, "">,
      industry as Exclude<Industry, "">
    );
    setResult(r);
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setEmailSubmitted(true);
  }

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Revenue */}
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-700">
            Company Annual Revenue
          </label>
          <select
            value={revenue}
            onChange={(e) => setRevenue(e.target.value as RevenueRange)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          >
            <option value="">Select revenue range</option>
            {(Object.keys(REVENUE_LABELS) as Exclude<RevenueRange, "">[]).map((k) => (
              <option key={k} value={k}>{REVENUE_LABELS[k]}</option>
            ))}
          </select>
        </div>

        {/* Data Subjects */}
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-700">
            Number of Data Subjects Affected
          </label>
          <input
            type="number"
            min="1"
            value={dataSubjects}
            onChange={(e) => setDataSubjects(e.target.value)}
            placeholder="e.g. 50000"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </div>

        {/* Breach Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-700">
            Breach Type
          </label>
          <select
            value={breachType}
            onChange={(e) => setBreachType(e.target.value as BreachType)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          >
            <option value="">Select breach type</option>
            {(Object.keys(BREACH_LABELS) as Exclude<BreachType, "">[]).map((k) => (
              <option key={k} value={k}>{BREACH_LABELS[k]}</option>
            ))}
          </select>
        </div>

        {/* Industry */}
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-700">
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value as Industry)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          >
            <option value="">Select industry</option>
            {(Object.keys(INDUSTRY_LABELS) as Exclude<Industry, "">[]).map((k) => (
              <option key={k} value={k}>{INDUSTRY_LABELS[k]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        disabled={!isFormValid}
        className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-navy transition-all duration-200 hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Calculator className="h-5 w-5" />
        Calculate Penalty Estimate
      </button>

      {/* Results */}
      {result && (
        <div className="animate-fade-in space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-navy">Estimated Penalty Range</h3>
              <p className="mt-1 text-2xl font-extrabold text-navy-700">
                {formatCrore(result.minPenalty)} &ndash; {formatCrore(result.maxPenalty)}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold ${riskColors[result.riskLevel]}`}
            >
              {result.riskLevel === "Critical" || result.riskLevel === "High" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <ShieldCheck className="h-4 w-4" />
              )}
              {result.riskLevel} Risk
            </span>
          </div>

          {/* Breakdown */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Penalty Breakdown
            </h4>
            <ul className="space-y-2">
              {result.breakdown.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Recommendations
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Email Capture */}
          <div className="rounded-lg border border-teal-200 bg-teal-50 p-5">
            {emailSubmitted ? (
              <div className="flex items-center gap-3 text-teal-700">
                <ShieldCheck className="h-5 w-5" />
                <p className="font-medium">
                  Thank you! We&apos;ll send your detailed compliance report shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <p className="font-semibold text-navy-700">Get a Detailed Compliance Report</p>
                </div>
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-teal-400"
                  >
                    Send Report
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="pt-2 text-center">
            <CTAButton href={CTA_URLS.kavachTrial} variant="kavach" size="md">
              Start KAVACH Free Trial &rarr;
            </CTAButton>
          </div>
        </div>
      )}
    </div>
  );
}
