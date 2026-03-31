"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Subtle bottom border glow when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      )}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`text-xl font-bold tracking-tight ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {SITE_CONFIG.name}
          </motion.span>
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
                  className={`group relative flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-navy"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="w-72 rounded-xl border border-gray-200/80 bg-white/90 backdrop-blur-xl p-2 shadow-xl">
                        {item.children.map((child, index) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.05,
                            }}
                          >
                            <Link
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
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {/* Underline animation expanding from center */}
                <span
                  className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-navy" : "bg-white"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CTA_URLS.login}
            className={`group relative text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-navy" : "text-white/80 hover:text-white"
            }`}
          >
            Login
            <span
              className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full ${
                scrolled ? "bg-navy" : "bg-white"
              }`}
            />
          </a>
          <CTAButton
            href={CTA_URLS.signup}
            variant="primary"
            size="sm"
            className="shadow-[0_0_20px_rgba(0,210,187,0.15)] hover:shadow-[0_0_30px_rgba(0,210,187,0.3)] transition-shadow duration-300"
          >
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

      {/* Mobile Nav - Slide in from right */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 top-[72px] w-full border-t border-gray-200 bg-white/95 backdrop-blur-xl px-6 py-4 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, index) =>
                "children" in item ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="space-y-2"
                  >
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
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm font-medium text-gray-700"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
