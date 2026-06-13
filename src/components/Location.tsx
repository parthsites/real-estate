"use client";

import { motion } from "framer-motion";
import { travelTimes } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { scrollToSection } from "@/lib/smoothScroll";
import { GoldSectionTop, GoldGrid } from "./GoldAccents";
import FloatingSpecks from "./FloatingSpecks";

const typeIcons: Record<string, string> = {
  IT: "🏢", Retail: "🛍️", Travel: "✈️", Mall: "🏬",
  Metro: "🚇", Healthcare: "🏥", Education: "🎓", Connectivity: "🛣️",
};

export default function Location() {
  return (
    <section id="location" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <FloatingSpecks />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatedSection direction="left">
            <span className="section-label">Location Advantage</span>
            <h2 className="section-title mt-2 mb-3 text-white">
              Prime Location, <span className="gold-gradient">Unmatched</span> Connectivity
            </h2>
            <p className="section-subtitle mb-6">
              Baner-Balewadi — the most sought-after address in Pune. Everything you need is minutes away.
            </p>

            <div className="glass-card p-5">
              <div className="space-y-2">
                {travelTimes.map((t, i) => (
                  <motion.div
                    key={t.destination}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.03, duration: 0.3 }}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-luxury-gold/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{typeIcons[t.type] || "📍"}</span>
                    <div>
                      <p className="text-sm text-white font-medium">{t.destination}</p>
                      <p className="text-xs text-luxury-gray">{t.distance}</p>
                    </div>
                  </div>
                  <span className="text-luxury-gold-light text-sm font-mono">{t.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

                  <div className="flex gap-3 mt-5">
              <button onClick={() => scrollToSection("contact")} className="btn-primary" data-cursor-hover>Site Visit</button>
              <button onClick={() => scrollToSection("contact")} className="btn-outline" data-cursor-hover>Location Map</button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-luxury-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80)" }}
              />
              <div className="absolute inset-0 bg-luxury-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxury-black/80 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-gold shadow-[0_0_12px_rgba(201,168,76,0.6)] animate-pulse shrink-0" />
                  <p className="text-xs text-luxury-gold-light font-medium tracking-wider">Serenity Heights</p>
                </div>
                <p className="text-sm text-white/90">Baner-Balewadi Road, Pune 411045</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[10px] text-luxury-gray/70">Baner High Street • 0.8 km</span>
                  <span className="w-[1px] h-2.5 bg-white/15" />
                  <span className="text-[10px] text-luxury-gray/70">Hinjewadi IT Park • 1.5 km</span>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-luxury-black/50 backdrop-blur-sm border border-white/10">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dfc06a" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[8px] text-luxury-gold-light tracking-wider">📍 PIN CODE: 411045</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
