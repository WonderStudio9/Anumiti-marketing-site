"use client";

import { motion } from "framer-motion";

interface FloatingOrbsProps {
  variant?: "hero" | "kavach" | "netra";
}

const orbConfigs = {
  hero: [
    { color: "rgba(0, 212, 170, 0.15)", size: 500, x: "10%", y: "20%", duration: 20 },
    { color: "rgba(26, 26, 108, 0.12)", size: 400, x: "70%", y: "60%", duration: 25 },
    { color: "rgba(232, 130, 12, 0.08)", size: 350, x: "50%", y: "10%", duration: 22 },
  ],
  kavach: [
    { color: "rgba(26, 26, 108, 0.15)", size: 500, x: "15%", y: "30%", duration: 20 },
    { color: "rgba(0, 212, 170, 0.1)", size: 350, x: "75%", y: "50%", duration: 25 },
  ],
  netra: [
    { color: "rgba(232, 130, 12, 0.15)", size: 500, x: "20%", y: "25%", duration: 20 },
    { color: "rgba(0, 212, 170, 0.1)", size: 350, x: "70%", y: "55%", duration: 25 },
  ],
};

export function FloatingOrbs({ variant = "hero" }: FloatingOrbsProps) {
  const orbs = orbConfigs[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: orb.color,
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
