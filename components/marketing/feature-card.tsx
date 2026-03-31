import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor?: "teal" | "indigo" | "saffron";
}

const accentClasses = {
  teal: "bg-teal-50 text-teal",
  indigo: "bg-indigo-50 text-indigo",
  saffron: "bg-saffron-50 text-saffron",
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accentColor = "teal",
}: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${accentClasses[accentColor]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
