"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Speck {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  opacity: number;
}

function generateSpecks(): Speck[] {
  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 8,
    driftX: (Math.random() - 0.5) * 60,
    driftY: -Math.random() * 80 - 30,
    opacity: Math.random() * 0.4 + 0.15,
  }));
}

export default function FloatingSpecks({ className = "" }: { className?: string }) {
  const [specks, setSpecks] = useState<Speck[]>([]);

  useEffect(() => {
    setSpecks(generateSpecks());
  }, []);

  if (specks.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {specks.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-luxury-gold-light"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: 0,
            boxShadow: "0 0 8px rgba(223,192,106,0.4), 0 0 16px rgba(201,168,76,0.2)",
          }}
          animate={{
            y: [0, s.driftY],
            x: [0, s.driftX],
            opacity: [0, s.opacity, s.opacity * 0.6, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
