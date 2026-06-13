"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const orbs = [
  { x: 20, y: 15, size: 800, color1: "#c9a84c", color2: "#a88a32", delay: 0, duration: 18, driftX: 12, driftY: -8 },
  { x: 70, y: 55, size: 650, color1: "#dfc06a", color2: "#c9a84c", delay: 3, duration: 22, driftX: -10, driftY: 10 },
  { x: 45, y: 75, size: 550, color1: "#f5d88a", color2: "#a88a32", delay: 6, duration: 20, driftX: 8, driftY: -6 },
  { x: 80, y: 20, size: 450, color1: "#e8c65a", color2: "#8a7230", delay: 2, duration: 16, driftX: -12, driftY: 8 },
  { x: 30, y: 50, size: 500, color1: "#d4b04c", color2: "#c9a84c", delay: 5, duration: 24, driftX: 6, driftY: -12 },
];

export default function BackgroundOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle at 30% 30%, ${orb.color1} 0%, ${orb.color2} 40%, transparent 70%)`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, orb.driftX, -orb.driftX * 0.6, orb.driftX * 0.8, 0],
            y: [0, -orb.driftY, orb.driftY * 0.7, -orb.driftY * 0.5, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.35, 0.55, 0.3, 0.5, 0.35],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
