import { Check } from "lucide-react";
import { CTAButton } from "./cta-button";
import { Badge } from "./badge";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
  product: "kavach" | "netra";
}

export function PricingCard({ tier, product }: PricingCardProps) {
  const variant = product === "kavach" ? "kavach" : "netra";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 bg-white p-8 ${
        tier.popular ? "border-teal shadow-xl" : "border-gray-200"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="teal">Most Popular</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-navy">{tier.price}</span>
        {tier.period && <span className="text-gray-500">{tier.period}</span>}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {feature}
          </li>
        ))}
      </ul>

      <CTAButton
        href={tier.ctaHref}
        variant={tier.enterprise ? "secondary" : variant}
        size="md"
        className="w-full"
      >
        {tier.cta}
      </CTAButton>
    </div>
  );
}
