import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "navy" | "indigo" | "saffron";
}

const bgClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  navy: "bg-navy text-white",
  indigo: "bg-indigo text-white",
  saffron: "bg-saffron text-white",
};

export function Section({ children, className = "", id, background = "white" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
