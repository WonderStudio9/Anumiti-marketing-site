"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({ value, label, className = "" }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^([<>]?)(\d+(?:\.\d+)?)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const prefix = numericMatch[1] ?? "";
    const target = parseFloat(numericMatch[2] ?? "0");
    const suffix = value.replace(/^[<>]?\d+(?:\.\d+)?/, "");
    const isDecimal = value.includes(".");
    const steps = 40;
    const stepDuration = 30;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;

      if (current >= steps) {
        setDisplay(`${prefix}${isDecimal ? target.toFixed(0) : Math.round(target)}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${isDecimal ? val.toFixed(0) : Math.round(val)}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-navy-900 md:text-5xl">{display}</div>
      <div className="mt-2 text-sm text-gray-600">{label}</div>
    </div>
  );
}
