"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, Eye } from "lucide-react";
import { NAV_ITEMS, CTA_URLS, SITE_CONFIG } from "@/lib/constants";
import { CTAButton } from "@/components/marketing/cta-button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {SITE_CONFIG.name}
          </span>
          <span
            className={`text-xs font-medium ${
              scrolled ? "text-gray-400" : "text-white/60"
            }`}
          >
            {SITE_CONFIG.nameHindi}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-navy"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                        >
                          {child.href === "/kavach" ? (
                            <Shield className="mt-0.5 h-5 w-5 text-indigo" />
                          ) : (
                            <Eye className="mt-0.5 h-5 w-5 text-saffron" />
                          )}
                          <div>
                            <div className="text-sm font-semibold text-navy">
                              {child.label}
                            </div>
                            <div className="text-xs text-gray-500">
                              {child.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CTA_URLS.login}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-navy" : "text-white/80 hover:text-white"
            }`}
          >
            Login
          </a>
          <CTAButton href={CTA_URLS.signup} variant="primary" size="sm">
            Start Free
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) =>
              "children" in item ? (
                <div key={item.label} className="space-y-2">
                  <span className="text-xs font-semibold uppercase text-gray-400">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg py-2 pl-4 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-700"
                >
                  {item.label}
                </Link>
              )
            )}
            <hr className="my-2 border-gray-200" />
            <a
              href={CTA_URLS.login}
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Login
            </a>
            <CTAButton href={CTA_URLS.signup} variant="primary" size="md" className="mt-2 w-full">
              Start Free
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}
