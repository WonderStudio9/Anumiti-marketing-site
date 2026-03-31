"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

const INQUIRY_TYPES = [
  { value: "", label: "Select inquiry type" },
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Support" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  inquiryType: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.inquiryType) errors.inquiryType = "Select an inquiry type.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setApiError(null);

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-12 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-teal" />
        <h3 className="text-xl font-bold text-navy">Thank you for reaching out!</h3>
        <p className="mt-2 text-sm text-gray-600">
          We have received your message and will get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-teal hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {apiError && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{apiError}</div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal ${
            errors.name ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal ${
            errors.email ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-navy">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal"
          placeholder="Your company name"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
          Phone <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal"
          placeholder="+91 98765 43210"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="mb-1 block text-sm font-medium text-navy">
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal ${
            errors.inquiryType ? "border-red-400" : "border-gray-300"
          }`}
        >
          {INQUIRY_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p className="mt-1 text-xs text-red-500">{errors.inquiryType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-teal ${
            errors.message ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="Tell us how we can help..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
