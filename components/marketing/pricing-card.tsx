"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Badge } from "./badge";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
  product: "kavach" | "netra";
}

const glowColors = {
  kavach: "hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]",
  netra: "hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
};

export function PricingCard({ tier, product }: PricingCardProps) {
  const variant = product === "kavach" ? "kavach" : "netra";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-shadow duration-300 ${
        tier.popular
          ? "border-teal bg-white/70 backdrop-blur-xl shadow-xl"
          : "border-gray-200 bg-white"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0,210,187,0.4)",
                "0 0 0 8px rgba(0,210,187,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="rounded-full"
          >
            <Badge variant="teal">Most Popular</Badge>
          </motion.div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold bg-gradient-to-r from-navy via-indigo to-teal bg-clip-text text-transparent">
          {tier.price}
        </span>
        {tier.period && <span className="text-gray-500">{tier.period}</span>}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0.7 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
            className="flex items-start gap-3 text-sm text-gray-600"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <CTAButton
        href={tier.ctaHref}
        variant={tier.enterprise ? "secondary" : variant}
        size="md"
        className={`w-full transition-shadow duration-300 ${
          !tier.enterprise ? glowColors[product] : ""
        }`}
      >
        {tier.cta}
      </CTAButton>
    </motion.div>
  );
}
