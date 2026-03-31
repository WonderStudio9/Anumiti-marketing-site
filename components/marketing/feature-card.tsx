"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor?: "teal" | "indigo" | "saffron";
}

const accentClasses = {
  teal: "bg-teal-50 text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-emerald-400 group-hover:text-white",
  indigo: "bg-indigo-50 text-indigo group-hover:bg-gradient-to-br group-hover:from-indigo group-hover:to-violet-400 group-hover:text-white",
  saffron: "bg-saffron-50 text-saffron group-hover:bg-gradient-to-br group-hover:from-saffron group-hover:to-orange-400 group-hover:text-white",
};

const borderGradients = {
  teal: "hover:before:from-teal/40 hover:before:to-emerald-400/40",
  indigo: "hover:before:from-indigo/40 hover:before:to-violet-400/40",
  saffron: "hover:before:from-saffron/40 hover:before:to-orange-400/40",
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accentColor = "teal",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-br before:from-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:border-transparent hover:before:opacity-100 ${borderGradients[accentColor]} before:-z-10 before:content-['']`}
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${accentClasses[accentColor]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </motion.div>
  );
}
