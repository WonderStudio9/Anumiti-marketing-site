"use client";

import { useState } from "react";
import { Play, Copy, Check, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/marketing/cta-button";
import { CTA_URLS } from "@/lib/constants";

interface Endpoint {
  id: string;
  name: string;
  method: string;
  path: string;
  curl: string;
  requestBody: object;
  sampleResponse: object;
}

const ENDPOINTS: Endpoint[] = [
  {
    id: "document-extraction",
    name: "Document Extraction",
    method: "POST",
    path: "/v1/documents/extract",
    curl: `curl -X POST https://api.anumiti.com/v1/documents/extract \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@invoice.pdf" \\
  -F "document_type=gst_invoice"`,
    requestBody: {
      file: "invoice.pdf",
      document_type: "gst_invoice",
      language: "auto",
      extract_tables: true,
    },
    sampleResponse: {
      id: "doc_9f8e7d6c5b4a",
      status: "completed",
      document_type: "gst_invoice",
      language_detected: "en",
      confidence: 0.992,
      data: {
        invoice_number: "INV-2026-001234",
        invoice_date: "2026-03-15",
        seller: {
          name: "TechCorp Solutions Pvt Ltd",
          gstin: "27AAPFU0939F1ZV",
          address: "Bandra Kurla Complex, Mumbai 400051",
        },
        buyer: {
          name: "Digital Services India Ltd",
          gstin: "07AABCD1234E1Z5",
          address: "Connaught Place, New Delhi 110001",
        },
        line_items: [
          { description: "Cloud Infrastructure Services", hsn: "998314", qty: 1, rate: 150000, amount: 150000 },
          { description: "Technical Support (Annual)", hsn: "998316", qty: 1, rate: 50000, amount: 50000 },
        ],
        tax: { cgst: 18000, sgst: 18000, igst: 0, total_tax: 36000 },
        total_amount: 236000,
      },
      processing_time_ms: 1240,
    },
  },
  {
    id: "gstin-verification",
    name: "GSTIN Verification",
    method: "GET",
    path: "/v1/gstin/{gstin}",
    curl: `curl -X GET "https://api.anumiti.com/v1/gstin/27AAPFU0939F1ZV" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    requestBody: {},
    sampleResponse: {
      gstin: "27AAPFU0939F1ZV",
      status: "Active",
      legal_name: "TECHCORP SOLUTIONS PRIVATE LIMITED",
      trade_name: "TechCorp Solutions",
      state: "Maharashtra",
      state_code: "27",
      registration_date: "2017-07-01",
      taxpayer_type: "Regular",
      constitution: "Private Limited Company",
      last_filing: {
        period: "Feb 2026",
        type: "GSTR-3B",
        status: "Filed",
        date: "2026-03-20",
      },
      hsn_summary: ["998314", "998316", "998319"],
      verified_at: "2026-03-31T10:30:00Z",
    },
  },
  {
    id: "pan-validation",
    name: "PAN Validation",
    method: "POST",
    path: "/v1/pan/validate",
    curl: `curl -X POST https://api.anumiti.com/v1/pan/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"pan": "ABCDE1234F", "name": "Rajesh Kumar"}'`,
    requestBody: {
      pan: "ABCDE1234F",
      name: "Rajesh Kumar",
    },
    sampleResponse: {
      pan: "ABCDE1234F",
      valid: true,
      name_on_card: "RAJESH KUMAR",
      name_match: true,
      name_match_score: 0.98,
      category: "Individual",
      status: "Active",
      aadhaar_linked: true,
      verified_at: "2026-03-31T10:30:00Z",
    },
  },
  {
    id: "document-classification",
    name: "Document Classification",
    method: "POST",
    path: "/v1/documents/classify",
    curl: `curl -X POST https://api.anumiti.com/v1/documents/classify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@document.pdf"`,
    requestBody: {
      file: "document.pdf",
    },
    sampleResponse: {
      id: "cls_3a2b1c0d9e8f",
      status: "completed",
      classifications: [
        { type: "gst_invoice", confidence: 0.94, label: "GST Tax Invoice" },
        { type: "purchase_order", confidence: 0.03, label: "Purchase Order" },
        { type: "delivery_challan", confidence: 0.02, label: "Delivery Challan" },
      ],
      primary_classification: "gst_invoice",
      language_detected: "hi",
      page_count: 2,
      processing_time_ms: 380,
    },
  },
];

type ViewMode = "json" | "table";

function flattenObject(obj: unknown, prefix = ""): Array<{ key: string; value: string }> {
  const rows: Array<{ key: string; value: string }> = [];
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const fullKey = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === "object") {
        rows.push(...flattenObject(v, fullKey));
      } else {
        rows.push({ key: fullKey, value: String(v) });
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      const fullKey = prefix ? `${prefix}[${i}]` : `[${i}]`;
      if (item && typeof item === "object") {
        rows.push(...flattenObject(item, fullKey));
      } else {
        rows.push({ key: fullKey, value: String(item) });
      }
    });
  }
  return rows;
}

export function APIPlayground() {
  const [selectedId, setSelectedId] = useState(ENDPOINTS[0].id);
  const [hasRun, setHasRun] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("json");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const endpoint = ENDPOINTS.find((e) => e.id === selectedId)!;

  function handleRun() {
    setIsRunning(true);
    setHasRun(false);
    // Simulate network delay
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 800);
  }

  async function handleCopy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const responseJson = JSON.stringify(endpoint.sampleResponse, null, 2);
  const tableRows = flattenObject(endpoint.sampleResponse);

  return (
    <div className="space-y-6">
      {/* Endpoint Selector */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-navy-700">
            API Endpoint
          </label>
          <select
            value={selectedId}
            onChange={(e) => {
              setSelectedId(e.target.value);
              setHasRun(false);
            }}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-800 shadow-sm focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/20"
          >
            {ENDPOINTS.map((ep) => (
              <option key={ep.id} value={ep.id}>
                {ep.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="inline-flex items-center gap-2 rounded-lg bg-saffron px-6 py-3 font-semibold text-white transition-all hover:bg-saffron-600 disabled:opacity-70"
        >
          {isRunning ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Running...
            </>
          ) : (
            <>
              <Play className="h-5 w-5" />
              Run
            </>
          )}
        </button>
      </div>

      {/* Curl Command */}
      <div className="rounded-xl border border-gray-200 bg-navy-900 shadow-sm">
        <div className="flex items-center justify-between border-b border-navy-700 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="rounded bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white">
              {endpoint.method}
            </span>
            <span className="font-mono text-xs text-gray-400">{endpoint.path}</span>
          </div>
          <button
            onClick={() => handleCopy(endpoint.curl)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-teal-300">
          {endpoint.curl}
        </pre>
      </div>

      {/* Request Body (for POST endpoints) */}
      {endpoint.method === "POST" && Object.keys(endpoint.requestBody).length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Request Body
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-navy-600">
            {JSON.stringify(endpoint.requestBody, null, 2)}
          </pre>
        </div>
      )}

      {/* Response */}
      {hasRun && (
        <div className="animate-fade-in rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Response
              </span>
              <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
                200 OK
              </span>
            </div>
            {/* View Toggle */}
            <div className="flex overflow-hidden rounded-lg border border-gray-200">
              <button
                onClick={() => setViewMode("json")}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  viewMode === "json"
                    ? "bg-navy text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                JSON
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  viewMode === "table"
                    ? "bg-navy text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Table
              </button>
            </div>
          </div>

          {viewMode === "json" ? (
            <pre className="max-h-[500px] overflow-auto p-4 font-mono text-xs leading-relaxed text-navy-600">
              {responseJson}
            </pre>
          ) : (
            <div className="max-h-[500px] overflow-auto">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 font-semibold text-gray-500">Field</th>
                    <th className="px-4 py-2 font-semibold text-gray-500">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tableRows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-mono text-navy-600">{row.key}</td>
                      <td className="px-4 py-2 text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="rounded-xl border border-saffron-200 bg-gradient-to-r from-saffron-50 to-white p-6 text-center">
        <p className="mb-1 text-lg font-bold text-navy">Try with Real Documents</p>
        <p className="mb-4 text-sm text-gray-600">
          Get your free API key and start making live API calls in minutes. 100 free requests per month included.
        </p>
        <CTAButton href={CTA_URLS.netraApiKey} variant="netra" size="md">
          Get Free API Key <ArrowRight className="ml-1 inline h-4 w-4" />
        </CTAButton>
      </div>
    </div>
  );
}
