"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-10 lg:py-14">
      <div className="w-32 lg:w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
      <motion.div
        className="absolute w-4 h-4 rounded-full border-2 border-luxury-gold/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
          boxShadow: [
            "0 0 8px rgba(201,168,76,0.2)",
            "0 0 24px rgba(201,168,76,0.6)",
            "0 0 8px rgba(201,168,76,0.2)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function GoldCornerAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-luxury-gold/30">
        <path d="M40 1H1V40" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 6H6V40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </div>
  );
}

export function GoldBeam({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute -inset-40 bg-gradient-to-r from-transparent via-luxury-gold/8 to-transparent skew-y-12"
        animate={{
          x: ["-60%", "160%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
      />
      <motion.div
        className="absolute -inset-40 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent -skew-y-12"
        animate={{
          x: ["-60%", "160%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
