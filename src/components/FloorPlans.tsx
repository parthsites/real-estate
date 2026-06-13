"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { floorPlans } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { GoldBeam } from "./Decorative";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import FloatingSpecks from "./FloatingSpecks";

const planTypes = ["2 BHK", "3 BHK", "4 BHK"];

const layoutImages: Record<string, string> = {
  "2bhk-a": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  "2bhk-b": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
  "3bhk-a": "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
  "3bhk-b": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
  "4bhk": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
};

export default function FloorPlans() {
  const [activeType, setActiveType] = useState("2 BHK");
  const [activePlan, setActivePlan] = useState(floorPlans[0]);

  const filtered = floorPlans.filter((p) => p.type === activeType);
  const current = filtered.find((p) => p.id === activePlan.id) || filtered[0];

  return (
    <section id="plans" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-luxury-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${layoutImages[activePlan.id]})` }}
              />
              <div className="absolute inset-0 bg-luxury-black/10" />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold-light text-[10px] uppercase tracking-[0.1em] border border-luxury-gold/20">
                  {activePlan.name}
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.08}>
            <span className="section-label">Configurations</span>
            <h2 className="section-title mt-2 mb-3 text-white">
              Choose Your <span className="gold-gradient">Home</span>
            </h2>
            <p className="section-subtitle mb-5">
              2 BHK to 4 BHK penthouse. Every layout designed for modern family living.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {planTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => { const next = floorPlans.filter((p) => p.type === t); setActiveType(t); setActivePlan(next[0]); }}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300 ${
                    activeType === t
                      ? "bg-luxury-gold text-luxury-black"
                      : "bg-white/5 text-luxury-gray border border-white/10 hover:border-luxury-gold/30"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePlan(p)}
                  className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
                    activePlan.id === p.id
                      ? "text-luxury-gold-light border border-luxury-gold/30"
                      : "text-luxury-gray/50 border border-transparent"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div>
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="glass-card p-5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl text-white">{activePlan.name}</h3>
                      <p className="text-sm text-luxury-gray">{activePlan.config}</p>
                    </div>
                    <p className="text-luxury-gold-light text-base font-medium">{activePlan.price}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: "Carpet", value: activePlan.carpet },
                      { label: "Built-up", value: activePlan.builtup },
                      { label: "Bedrooms", value: `${activePlan.bedrooms}` },
                      { label: "Bathrooms", value: `${activePlan.bathrooms}` },
                    ].map((s) => (
                      <div key={s.label} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-luxury-gray">{s.label}</p>
                        <p className="text-sm text-white font-medium mt-0.5">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 mb-4">
                    {activePlan.dimensions.slice(0, 4).map((d) => (
                      <div key={d.room} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                        <span className="text-sm text-white">{d.room}</span>
                        <span className="text-xs text-luxury-gold-light font-mono">{d.size}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-luxury-gold-light mb-3">{activePlan.availability}</p>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-full bg-luxury-gold text-luxury-black text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                      Download Plan
                    </button>
                    <button className="flex-1 py-2.5 rounded-full border border-white/15 text-white text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:border-luxury-gold/40">
                      Get Price
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
