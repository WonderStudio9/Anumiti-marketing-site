"use client";

import { motion } from "framer-motion";
import { FileText, Scan, Shield, Check, ArrowRight } from "lucide-react";

export function DocumentFlow() {
  const steps = [
    { icon: FileText, label: "Upload", sublabel: "Any Indian Document", color: "#E8820C" },
    { icon: Scan, label: "Extract", sublabel: "22 Languages • 94% Accuracy", color: "#00D4AA" },
    { icon: Shield, label: "Verify", sublabel: "GSTIN • PAN • Aadhaar", color: "#1A1A6C" },
    { icon: Check, label: "Comply", sublabel: "DPDP Ready • Audit Trail", color: "#00D4AA" },
  ];

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Connection line */}
      <div className="absolute top-16 left-[12%] right-[12%] hidden h-px bg-gradient-to-r from-saffron/30 via-teal/30 to-indigo/30 md:block" />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Icon circle */}
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl md:h-24 md:w-24"
              style={{ background: `${step.color}10`, border: `2px solid ${step.color}30` }}
              whileHover={{ scale: 1.08, boxShadow: `0 0 30px ${step.color}25` }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <step.icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: step.color }} />

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ border: `2px solid ${step.color}` }}
                animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              />
            </motion.div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-10 hidden translate-x-1/2 md:block">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4 text-gray-300" />
                </motion.div>
              </div>
            )}

            {/* Labels */}
            <h3 className="mt-4 text-sm font-bold text-navy">{step.label}</h3>
            <p className="mt-1 text-center text-xs text-gray-500">{step.sublabel}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated document cards floating around */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {["GST Invoice", "PAN Card", "Contract"].map((doc, i) => (
          <motion.div
            key={doc}
            className="absolute rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-lg"
            style={{
              left: `${20 + i * 30}%`,
              top: i % 2 === 0 ? "-10%" : "85%",
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            <FileText className="mr-1 inline h-3 w-3 text-saffron" />
            {doc}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
