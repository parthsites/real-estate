"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { towers } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { GoldBeam } from "./Decorative";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import FloatingSpecks from "./FloatingSpecks";

const projectImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
];

export default function ProjectShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-10 max-w-2xl">
          <span className="section-label">Project Overview</span>
          <h2 className="section-title mt-2 mb-3 text-white">
            Three Iconic <span className="gold-gradient">Towers</span>
          </h2>
          <p className="section-subtitle">
            285 premium residences across three distinct towers in Baner-Balewadi, Pune. Each designed for a unique living experience.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {towers.map((tower, i) => (
            <AnimatedSection key={tower.id} delay={i * 0.08}>
              <div
                className="group relative overflow-hidden rounded-xl bg-luxury-surface border border-white/5 cursor-none"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                data-cursor-hover
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-luxury-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${projectImages[i]})` }}
                    animate={{ scale: hovered === i ? 1.06 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/85 via-luxury-black/15 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-medium ${
                        tower.status === "available"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                          : "bg-luxury-gold/20 text-luxury-gold-light border border-luxury-gold/20"
                      }`}
                    >
                      {tower.status === "available" ? "Ready" : "Launching"}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold-light mb-0.5">
                      Tower {tower.id}
                    </p>
                    <h3 className="font-display text-xl text-white mb-0.5">{tower.name}</h3>
                    <p className="text-sm text-luxury-gray">{tower.configs.join(" | ")}</p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-luxury-gray">Floors</p>
                      <p className="text-base text-white font-medium">{tower.floors}</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-luxury-gray">Units</p>
                      <p className="text-base text-white font-medium">{tower.units}</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-luxury-gray">From</p>
                      <p className="text-base text-luxury-gold-light font-medium">{tower.startingPrice}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-luxury-gray/70">{tower.area}</span>
                    <span className="text-luxury-gray/50">{tower.possession}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-full bg-luxury-gold text-luxury-black text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                      Brochure
                    </button>
                    <button className="flex-1 py-2.5 rounded-full border border-white/15 text-white text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:border-luxury-gold/40">
                      Site Visit
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="text-xs uppercase tracking-[0.15em] text-luxury-gold-light font-medium">
              RERA: P51800012345
            </span>
            <span className="w-[1px] h-4 bg-white/10" />
            <span className="text-sm text-luxury-gray">Dec 2026 possession</span>
            <span className="w-[1px] h-4 bg-white/10" />
            <span className="text-sm text-luxury-gray">500+ families</span>
            <span className="w-[1px] h-4 bg-white/10" />
            <span className="text-sm text-luxury-gray">CREDAI Award 2023</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
