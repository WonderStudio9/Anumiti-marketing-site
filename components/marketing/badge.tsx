import { type ReactNode } from "react";

type BadgeVariant = "teal" | "indigo" | "saffron" | "gray";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  saffron: "bg-saffron-50 text-saffron-700 border-saffron-200",
  gray: "bg-gray-100 text-gray-700 border-gray-200",
};

export function Badge({ children, variant = "teal" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
