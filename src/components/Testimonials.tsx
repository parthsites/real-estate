"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import { GoldBeam } from "./Decorative";
import FloatingSpecks from "./FloatingSpecks";

export default function Testimonials() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-8">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-2 mb-3 text-white">
            What Our <span className="gold-gradient">Residents</span> Say
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from families who chose Serenity Heights as their home.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="glass-card p-5 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  {t.verified && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] uppercase tracking-[0.08em] border border-emerald-500/20">
                      Verified
                    </span>
                  )}
                </div>

                <blockquote className="text-sm text-luxury-gray leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-2.5 pt-3 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-cover bg-center bg-luxury-surface" style={{ backgroundImage: `url(${t.image})` }} />
                  <div>
                    <p className="text-sm text-white font-medium">{t.name}</p>
                    <p className="text-xs text-luxury-gold-light uppercase tracking-[0.08em]">{t.project}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
