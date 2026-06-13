"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "$12.8B", label: "Portfolio Value", sub: "Global asset portfolio under management" },
  { value: "3,200+", label: "Properties Sold", sub: "Premium transactions completed" },
  { value: "45", label: "Countries", sub: "Active market presence worldwide" },
  { value: "98.7%", label: "Client Satisfaction", sub: "Average satisfaction rating" },
];

export default function MarketStats() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal/80 to-luxury-black" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Market Intelligence
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            By the <span className="gold-gradient">Numbers</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <motion.div
                className="relative glass-panel-strong p-8 lg:p-10 text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] gold-gradient-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-3xl lg:text-5xl font-serif gold-gradient mb-3">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-white font-medium mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-luxury-gray leading-relaxed max-w-[180px] mx-auto">
                  {stat.sub}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12">
          <div className="glass-panel p-8 rounded-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-luxury-gold-light text-sm uppercase tracking-[0.2em] font-medium mb-1">
                  Market Report 2026
                </p>
                <p className="text-luxury-gray text-sm">
                  Download our comprehensive global luxury real estate market analysis.
                </p>
              </div>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full gold-gradient-bg text-luxury-black text-sm uppercase tracking-[0.15em] font-semibold hover:opacity-90 transition-opacity shrink-0"
                whileHover={{ scale: 1.02 }}
                data-cursor-hover
              >
                Download Report
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
