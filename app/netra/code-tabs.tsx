"use client";

import { useState } from "react";

const CODE_SAMPLES = {
  curl: `curl -X POST https://api.anumiti.com/v1/extract \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@invoice.pdf" \\
  -F "document_type=gst_invoice" \\
  -F "language=auto"`,
  node: `import { Netra } from "@anumiti/netra";

const netra = new Netra({ apiKey: "YOUR_API_KEY" });

const result = await netra.extract({
  file: fs.readFileSync("invoice.pdf"),
  documentType: "gst_invoice",
  language: "auto",
});

console.log(result.data.gstin);    // "27AABCU9603R1ZM"
console.log(result.data.total);     // 14750.00
console.log(result.confidence);     // 0.97`,
  python: `from anumiti import Netra

netra = Netra(api_key="YOUR_API_KEY")

result = netra.extract(
    file=open("invoice.pdf", "rb"),
    document_type="gst_invoice",
    language="auto",
)

print(result.data["gstin"])     # "27AABCU9603R1ZM"
print(result.data["total"])      # 14750.00
print(result.confidence)         # 0.97`,
} as const;

type CodeTab = keyof typeof CODE_SAMPLES;

export function CodeTabs() {
  const [activeTab, setActiveTab] = useState<CodeTab>("curl");

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex gap-1 rounded-t-lg bg-navy px-4 pt-4">
        {(Object.keys(CODE_SAMPLES) as CodeTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-t-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-gray-800 text-teal"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab === "curl" ? "cURL" : tab === "node" ? "Node.js" : "Python"}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-b-lg bg-navy px-6 pb-6">
        <pre className="text-sm leading-relaxed text-gray-300">
          <code>{CODE_SAMPLES[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}
