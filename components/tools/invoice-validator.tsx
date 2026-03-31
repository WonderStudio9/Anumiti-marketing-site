"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, FileCheck, FileWarning, AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/marketing/cta-button";
import { Badge } from "@/components/marketing/badge";
import { CTA_URLS } from "@/lib/constants";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const ACCEPTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".pdf"];
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface ValidationResult {
  fileName: string;
  fileSize: number;
  fileType: string;
  formatValid: boolean;
  sizeValid: boolean;
  gstinDetected: string | null;
  gstinFormatValid: boolean | null;
}

function detectGSTINInFilename(filename: string): string | null {
  const match = filename.match(/[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/i);
  return match ? match[0].toUpperCase() : null;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function InvoiceValidator() {
  const [isDragging, setIsDragging] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    const formatValid = ACCEPTED_TYPES.includes(file.type) || ACCEPTED_EXTENSIONS.includes(ext);
    const sizeValid = file.size <= MAX_SIZE_BYTES;
    const gstinDetected = detectGSTINInFilename(file.name);
    const gstinFormatValid = gstinDetected
      ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gstinDetected)
      : null;

    setResult({
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type || ext,
      formatValid,
      sizeValid,
      gstinDetected,
      gstinFormatValid,
    });
  }, []);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  }

  function handleClick() {
    fileInputRef.current?.click();
  }

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-all ${
          isDragging
            ? "border-saffron bg-saffron-50"
            : "border-gray-300 bg-gray-50 hover:border-saffron-300 hover:bg-saffron-50/30"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Upload className={`mx-auto h-10 w-10 ${isDragging ? "text-saffron" : "text-gray-400"}`} />
        <p className="mt-4 text-sm font-semibold text-navy-700">
          Drag and drop your invoice here
        </p>
        <p className="mt-1 text-xs text-gray-500">
          or click to browse &middot; JPEG, PNG, PDF &middot; Max {MAX_SIZE_MB}MB
        </p>
      </div>

      {/* Validation Results */}
      {result && (
        <div className="animate-fade-in space-y-4">
          {/* File Info */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
              {result.formatValid && result.sizeValid ? (
                <FileCheck className="h-6 w-6 text-green-500" />
              ) : (
                <FileWarning className="h-6 w-6 text-red-500" />
              )}
              <div className="flex-1">
                <p className="text-sm font-bold text-navy-700">{result.fileName}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(result.fileSize)} &middot; {result.fileType}
                </p>
              </div>
              <Badge variant={result.formatValid && result.sizeValid ? "teal" : "saffron"}>
                {result.formatValid && result.sizeValid ? "Valid File" : "Issues Found"}
              </Badge>
            </div>

            <div className="divide-y divide-gray-50 p-6">
              {/* Format Check */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-navy-700">File Format</p>
                  <p className="text-xs text-gray-500">Accepted: JPEG, PNG, PDF</p>
                </div>
                {result.formatValid ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> Valid
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                    <XCircle className="h-4 w-4" /> Invalid
                  </span>
                )}
              </div>

              {/* Size Check */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-navy-700">File Size</p>
                  <p className="text-xs text-gray-500">Maximum: {MAX_SIZE_MB}MB</p>
                </div>
                {result.sizeValid ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> {formatFileSize(result.fileSize)}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                    <XCircle className="h-4 w-4" /> Too Large ({formatFileSize(result.fileSize)})
                  </span>
                )}
              </div>

              {/* GSTIN in filename */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-navy-700">GSTIN in Filename</p>
                  <p className="text-xs text-gray-500">Format check if detectable</p>
                </div>
                {result.gstinDetected ? (
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                      result.gstinFormatValid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {result.gstinFormatValid ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    <span className="font-mono text-xs">{result.gstinDetected}</span>
                  </span>
                ) : (
                  <span className="text-sm text-gray-400">Not detected</span>
                )}
              </div>

              {/* OCR placeholder fields */}
              <div className="py-3">
                <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-navy-700">Advanced Extraction Available with NETRA</p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-500">
                      <li>&bull; Invoice number, date, and due date extraction</li>
                      <li>&bull; Seller and buyer GSTIN verification</li>
                      <li>&bull; Line item extraction with HSN/SAC codes</li>
                      <li>&bull; Tax computation validation (CGST, SGST, IGST)</li>
                      <li>&bull; Total amount reconciliation</li>
                      <li>&bull; E-way bill cross-reference</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-saffron-200 bg-gradient-to-r from-saffron-50 to-white p-6 text-center">
            <p className="mb-4 text-sm text-navy-600">
              Extract every field from GST invoices with 99.2% accuracy using NETRA&apos;s Document Intelligence API.
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
