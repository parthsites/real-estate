"use client";

import { motion } from "framer-motion";
import { milestones, mediaMentions, developer } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { scrollToSection } from "@/lib/smoothScroll";
import { GoldCornerAccent, GoldBeam } from "./Decorative";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import FloatingSpecks from "./FloatingSpecks";

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          <AnimatedSection direction="left">
            <span className="section-label">About</span>
            <h2 className="section-title mt-2 mb-3 text-white">
              Trust Built Over <span className="gold-gradient">14 Years</span>
            </h2>
            <p className="section-subtitle mb-5">{developer.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: "Experience", value: developer.experience },
                { label: "Projects", value: `${developer.delivered}+` },
                { label: "Families", value: "2,000+" },
                { label: "Awards", value: `${developer.awards.length}` },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <p className="text-2xl font-display text-luxury-gold-light">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-luxury-gray mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button onClick={() => scrollToSection("contact")} className="btn-primary" data-cursor-hover>Contact Us</button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline" data-cursor-hover>WhatsApp</a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.08}>
            <div className="relative glass-card p-5 mb-4">
              <GoldCornerAccent className="absolute top-0 right-0" />
              <h3 className="text-sm uppercase tracking-[0.15em] text-luxury-gray mb-4">Our Journey</h3>
              <div className="space-y-4">
                {milestones.slice(0, 4).map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-right min-w-[40px]">
                      <span className="text-luxury-gold-light text-sm font-display">{m.year}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-luxury-gold/20 relative shrink-0">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-luxury-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{m.label}</p>
                      <p className="text-xs text-luxury-gray">{m.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative glass-card p-5">
              <GoldCornerAccent className="absolute bottom-0 left-0 rotate-180" />
              <div className="grid grid-cols-2 gap-3">
                {mediaMentions.map((m) => (
                  <div key={m.headline} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-luxury-gold-light">{m.source}</p>
                    <p className="text-xs text-white mt-0.5 leading-tight">{m.headline}</p>
                  </div>
                ))}
                <div className="col-span-2 p-3 rounded-lg bg-luxury-gold/5 border border-luxury-gold/15 text-center">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-luxury-gold-light">RERA</p>
                  <p className="text-sm font-mono text-white">P51800012345</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="text-xs text-luxury-gray/70">Construction: Phase 1 Complete</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span className="text-xs text-luxury-gray/70">Possession: Tower A Dec 2026</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span className="text-xs text-luxury-gray/70">RERA: P51800012345</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
