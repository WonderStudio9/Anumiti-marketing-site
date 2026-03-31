import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Pricing — Simple, Transparent Plans",
  description:
    "KAVACH and NETRA pricing plans for every stage of your business. Start free, scale as you grow. No hidden fees. GST invoices included.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
