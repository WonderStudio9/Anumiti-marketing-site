"use client";

import { motion } from "framer-motion";

export function AnimatedBeam() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <motion.div
        className="absolute inset-y-0 w-32"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,170,0.6), transparent)",
        }}
        animate={{ x: ["-128px", "calc(100vw + 128px)"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />
    </div>
  );
}
