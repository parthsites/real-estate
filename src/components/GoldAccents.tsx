"use client";

import { motion } from "framer-motion";

export function GoldSectionTop() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/60 to-transparent blur-[2px]"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function GoldBottomGlow() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-luxury-gold/5 to-transparent pointer-events-none" />
  );
}

export function GoldGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="goldGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#goldGrid)" />
      </svg>
    </div>
  );
}

export function GoldDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="goldDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.5" fill="rgba(201,168,76,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#goldDots)" />
      </svg>
    </div>
  );
}
