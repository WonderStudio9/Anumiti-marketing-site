import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "kavach" | "netra";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal text-navy hover:bg-teal-400 focus-visible:ring-teal",
  secondary:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  kavach:
    "bg-indigo text-white hover:bg-indigo-600 focus-visible:ring-indigo",
  netra:
    "bg-saffron text-white hover:bg-saffron-600 focus-visible:ring-saffron",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external ?? href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
