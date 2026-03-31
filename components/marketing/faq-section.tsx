"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium text-navy-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  return (
    <div>
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="mb-8 text-2xl font-bold text-navy-900 md:text-3xl">{title}</h2>
      <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white px-6">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
