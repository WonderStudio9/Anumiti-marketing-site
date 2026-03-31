"use client";

import { useState, useCallback } from "react";
import { Search, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/marketing/cta-button";
import { Badge } from "@/components/marketing/badge";
import { CTA_URLS } from "@/lib/constants";

const STATE_CODES: Record<string, string> = {
  "01": "Jammu & Kashmir", "02": "Himachal Pradesh", "03": "Punjab",
  "04": "Chandigarh", "05": "Uttarakhand", "06": "Haryana",
  "07": "Delhi", "08": "Rajasthan", "09": "Uttar Pradesh",
  "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh",
  "13": "Nagaland", "14": "Manipur", "15": "Mizoram",
  "16": "Tripura", "17": "Meghalaya", "18": "Assam",
  "19": "West Bengal", "20": "Jharkhand", "21": "Odisha",
  "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
  "26": "Dadra & Nagar Haveli", "27": "Maharashtra", "29": "Karnataka",
  "30": "Goa", "31": "Lakshadweep", "32": "Kerala",
  "33": "Tamil Nadu", "34": "Puducherry", "35": "Andaman & Nicobar",
  "36": "Telangana", "37": "Andhra Pradesh", "38": "Ladakh",
};

const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

interface ValidationState {
  lengthOk: boolean;
  formatOk: boolean;
  stateCodeOk: boolean;
}

function validateFormat(value: string): ValidationState {
  const upper = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return {
    lengthOk: upper.length === 15,
    formatOk: GSTIN_REGEX.test(upper),
    stateCodeOk: upper.length >= 2 ? !!STATE_CODES[upper.substring(0, 2)] : false,
  };
}

interface MockResult {
  gstin: string;
  companyName: string;
  tradeName: string;
  state: string;
  status: "Active" | "Cancelled";
  registrationDate: string;
  taxpayerType: string;
  constitution: string;
}

function generateMockResult(gstin: string): MockResult {
  const stateCode = gstin.substring(0, 2);
  return {
    gstin: gstin.toUpperCase(),
    companyName: "Sample Technologies Private Limited",
    tradeName: "Sample Tech",
    state: STATE_CODES[stateCode] || "Unknown",
    status: "Active",
    registrationDate: "15-07-2017",
    taxpayerType: "Regular",
    constitution: "Private Limited Company",
  };
}

export function GSTINLookup() {
  const [gstin, setGstin] = useState("");
  const [validation, setValidation] = useState<ValidationState | null>(null);
  const [result, setResult] = useState<MockResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 15);
    setGstin(val);
    setResult(null);
    setSearched(false);
    if (val.length > 0) {
      setValidation(validateFormat(val));
    } else {
      setValidation(null);
    }
  }, []);

  function handleSearch() {
    if (!validation?.formatOk) return;
    setResult(generateMockResult(gstin));
    setSearched(true);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  const isValid = validation?.formatOk ?? false;

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-navy-700">
          Enter GSTIN Number
        </label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={gstin}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 27AAPFU0939F1ZV"
              maxLength={15}
              className={`w-full rounded-lg border bg-white px-4 py-3 pr-10 font-mono text-sm tracking-wider shadow-sm transition-colors focus:outline-none focus:ring-2 ${
                gstin.length === 0
                  ? "border-gray-300 focus:border-teal focus:ring-teal/20"
                  : isValid
                  ? "border-green-400 focus:border-green-500 focus:ring-green-200"
                  : "border-red-300 focus:border-red-400 focus:ring-red-200"
              }`}
            />
            {gstin.length > 0 && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {isValid ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-400" />
                )}
              </div>
            )}
          </div>
          <button
            onClick={handleSearch}
            disabled={!isValid}
            className="inline-flex items-center gap-2 rounded-lg bg-saffron px-6 py-3 font-semibold text-white transition-all hover:bg-saffron-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Search className="h-5 w-5" />
            Lookup
          </button>
        </div>

        {/* Real-time validation hints */}
        {validation && gstin.length > 0 && (
          <div className="mt-3 space-y-1">
            <ValidationHint ok={validation.lengthOk} label={`Length: ${gstin.length}/15 characters`} />
            <ValidationHint ok={validation.stateCodeOk} label={`State code: ${gstin.substring(0, 2)}${validation.stateCodeOk ? ` (${STATE_CODES[gstin.substring(0, 2)]})` : " (invalid)"}`} />
            <ValidationHint ok={validation.formatOk} label="Format: 2-digit state + PAN + entity + Z + check" />
          </div>
        )}
      </div>

      {/* Mock Result */}
      {searched && result && (
        <div className="animate-fade-in space-y-4">
          {/* Notice */}
          <div className="flex items-start gap-3 rounded-lg border border-saffron-200 bg-saffron-50 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-saffron" />
            <div>
              <p className="text-sm font-semibold text-navy-700">Sample Data</p>
              <p className="mt-0.5 text-xs text-gray-600">
                This is a demonstration with mock data. For full GSTIN verification with real-time government data,
                get your free NETRA API key.
              </p>
            </div>
          </div>

          {/* Result Card */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-navy">{result.companyName}</h3>
                <Badge variant={result.status === "Active" ? "teal" : "saffron"}>
                  {result.status}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Trade Name: {result.tradeName}</p>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <ResultField label="GSTIN" value={result.gstin} mono />
              <ResultField label="State" value={result.state} />
              <ResultField label="Registration Date" value={result.registrationDate} />
              <ResultField label="Taxpayer Type" value={result.taxpayerType} />
              <ResultField label="Constitution" value={result.constitution} />
              <ResultField label="Status" value={result.status} />
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-saffron-200 bg-gradient-to-r from-saffron-50 to-white p-6 text-center">
            <p className="mb-4 text-sm text-navy-600">
              Verify any GSTIN in real-time with NETRA API. Get company details, filing status, HSN codes, and more.
            </p>
            <CTAButton href={CTA_URLS.netraApiKey} variant="netra" size="md">
              Get Free NETRA API Key <ArrowRight className="ml-1 inline h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      )}
    </div>
  );
}

function ValidationHint({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      {ok ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
      ) : (
        <XCircle className="h-3.5 w-3.5 text-gray-300" />
      )}
      <span className={ok ? "text-green-700" : "text-gray-400"}>{label}</span>
    </div>
  );
}

function ResultField({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-400">{label}</p>
      <p className={`mt-0.5 text-sm font-semibold text-navy-700 ${mono ? "font-mono tracking-wider" : ""}`}>
        {value}
      </p>
    </div>
  );
}
