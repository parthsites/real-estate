"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Global Portfolio",
    description: "Access to the world's most exclusive properties across 45+ countries with unparalleled market intelligence.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Concierge Service",
    description: "White-glove service from initial consultation through post-purchase, handling every detail with discretion.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M22 21c-2-4-6-6-10-6s-8 2-10 6" />
      </svg>
    ),
    title: "Elite Network",
    description: "Private access to off-market listings and exclusive pre-construction opportunities before public release.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
      </svg>
    ),
    title: "Investment Intelligence",
    description: "Data-driven market analysis and ROI forecasting to maximize your real estate investment potential.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Bespoke Experiences",
    description: "Curated property viewings with private aviation, luxury accommodations, and personalized itineraries.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Absolute Privacy",
    description: "Discretion and confidentiality guaranteed for high-profile clients requiring the utmost privacy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/50 to-luxury-black" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Why Axion
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            Designed for <span className="gold-gradient">Excellence</span>
          </h2>
          <p className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Every detail of our service is crafted to exceed the expectations of
            the world&apos;s most discerning clientele.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <motion.div
                className="group glass-panel p-8 h-full hover:border-luxury-gold/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold-light mb-6 group-hover:bg-luxury-gold/20 group-hover:scale-110 transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-serif text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-luxury-gray leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
