"use client";

import { motion } from "framer-motion";
import BackgroundOrbs from "./BackgroundOrbs";
import GoldenGeometry from "./GoldenGeometry";
import FloatingSpecks from "./FloatingSpecks";
import { GoldGrid } from "./GoldAccents";

const stats = [
  { label: "Luxury Towers", value: "3", suffix: "" },
  { label: "Premium Residences", value: "285", suffix: "+" },
  { label: "World-Class Amenities", value: "9", suffix: "" },
  { label: "Years of Excellence", value: "14", suffix: "+" },
];

export default function DecorativeSection() {
  return (
    <section className="relative h-[34rem] lg:h-[38rem] overflow-hidden bg-luxury-black">
      <GoldGrid />
      <BackgroundOrbs />
      <FloatingSpecks />

      {/* 3D canvas — full background, pendulum sweeps left-right */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full scale-125">
          <GoldenGeometry />
        </div>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-luxury-black/40 pointer-events-none z-10" />

      {/* Centered info */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.35em] text-luxury-gold/50 mb-6"
        >
          Serenity Heights at a Glance
        </motion.span>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="backdrop-blur-xl bg-luxury-black/50 border border-white/5 rounded-xl p-4 lg:p-5 min-w-[130px] lg:min-w-[160px] text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <motion.span
                  className="font-display text-3xl lg:text-5xl text-luxury-gold-light"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    textShadow: [
                      "0 0 8px rgba(201,168,76,0.2)",
                      "0 0 24px rgba(201,168,76,0.6)",
                      "0 0 8px rgba(201,168,76,0.2)",
                    ],
                  }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {s.value}
                </motion.span>
                <span className="text-sm text-luxury-gold/60">{s.suffix}</span>
              </div>
              <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display text-lg lg:text-xl text-white/50 text-center max-w-md"
        >
          Where every detail is <span className="text-luxury-gold-light">crafted for excellence</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"
        />
      </div>

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-luxury-gold/[0.04] to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
