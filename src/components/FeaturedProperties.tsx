"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import PropertyCard, { properties } from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Curated Collection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            Featured{" "}
            <span className="gold-gradient">Properties</span>
          </h2>
          <p className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A hand-selected portfolio of the world&apos;s most remarkable
            residences, each chosen for its architectural significance and
            exceptional quality.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.title}
              {...property}
              index={index}
            />
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-luxury-gold-light hover:text-white transition-all duration-300 group"
            data-cursor-hover
          >
            View All Properties
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
