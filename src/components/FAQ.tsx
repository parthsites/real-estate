"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { scrollToSection } from "@/lib/smoothScroll";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import { GoldBeam } from "./Decorative";
import FloatingSpecks from "./FloatingSpecks";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-8">
          <span className="section-label">FAQs</span>
          <h2 className="section-title mt-2 mb-3 text-white">
            Frequently Asked <span className="gold-gradient">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about Serenity Heights.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="border-b border-white/5 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-3 text-left transition-all duration-300"
                data-cursor-hover
              >
                <span className="text-base text-white font-medium pr-3">{faq.q}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className={`shrink-0 text-luxury-gold-light transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-luxury-gray leading-relaxed pb-3 pr-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-8">
          <p className="text-sm text-luxury-gray mb-3">Still have questions?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollToSection("contact")} className="btn-primary" data-cursor-hover>Contact Us</button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline" data-cursor-hover>WhatsApp</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
