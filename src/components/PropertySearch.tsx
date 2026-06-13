"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const propertyTypes = [
  "All Properties",
  "Penthouse",
  "Villa",
  "Estate",
  "Private Island",
  "Château",
  "Mansion",
];

export default function PropertySearch() {
  const [activeType, setActiveType] = useState("All Properties");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal/30 to-luxury-black" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Find Your Sanctuary
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            Search <span className="gold-gradient">Properties</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-panel-strong p-6 lg:p-8 mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
              {[
                { label: "Location", value: "Any" },
                { label: "Price Range", value: "Any" },
                { label: "Property Type", value: "Any" },
                { label: "Bedrooms", value: "Any" },
              ].map((field) => (
                <div key={field.label} className="group">
                  <p className="text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                    {field.label}
                  </p>
                  <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-luxury-glass-border bg-luxury-glass text-sm text-white hover:border-luxury-gold/30 transition-all duration-300">
                    {field.value}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-luxury-gray"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                className="w-full sm:w-auto px-10 py-3.5 rounded-full gold-gradient-bg text-luxury-black text-sm uppercase tracking-[0.2em] font-semibold hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                data-cursor-hover
              >
                Search Properties
              </motion.button>
              <button className="text-sm text-luxury-gray hover:text-white transition-colors uppercase tracking-[0.15em]">
                Reset Filters
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-3 mb-8">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  activeType === type
                    ? "bg-luxury-gold text-luxury-black"
                    : "glass-panel text-luxury-gray hover:text-white hover:border-luxury-gold/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="text-center">
          <p className="text-luxury-gray text-sm">
            Currently showcasing{" "}
            <span className="text-white font-medium">348</span> luxury
            properties worldwide
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
