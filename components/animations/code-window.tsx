"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CodeWindowProps {
  title?: string;
  language?: string;
  lines: { text: string; color?: string }[];
}

export function CodeWindow({ title = "terminal", lines }: CodeWindowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden rounded-xl border border-gray-800 bg-[#0D1117] shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6 }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500">{title}</span>
      </div>

      {/* Code content */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="whitespace-pre"
            style={{ color: line.color ?? "#E6EDF3" }}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
