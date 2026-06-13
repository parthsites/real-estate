"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { amenityList } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { scrollToSection } from "@/lib/smoothScroll";
import BackgroundOrbs from "./BackgroundOrbs";
import FloatingSpecks from "./FloatingSpecks";
import { GoldCornerAccent } from "./Decorative";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";

const amenityImages: Record<string, string> = {
  "Infinity Pool": "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=85",
  "Grand Clubhouse": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
  "Ultra-Modern Gym": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85",
  "Landscaped Gardens": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=85",
  "Kids Play Area": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
  "Rooftop Lounge": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=85",
  "Sports Facilities": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85",
  "Business Center": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85",
  "Temple": "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=800&q=85",
};

export default function Amenities() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setSelected(selected === name ? null : name);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section id="amenities" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-surface/30 to-luxury-black" />
      <BackgroundOrbs />
      <FloatingSpecks />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label">World-Class Amenities</span>
          <h2 className="section-title mt-3 mb-4">
            Designed for Your <span className="gold-gradient">Well-Being</span>
          </h2>
          <p className="section-subtitle mx-auto">
            9 premium amenities spread across 7 acres. Every space crafted to enrich your lifestyle.
          </p>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {amenityList.map((a) => (
            <motion.div
              key={a.name}
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-luxury-surface border border-white/5 h-[240px]"
              onMouseEnter={() => setSelected(a.name)}
              onMouseLeave={() => setSelected(null)}
              onClick={() => handleCardClick(a.name)}
              data-cursor-hover
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${amenityImages[a.name]})` }}
                animate={{ scale: selected === a.name ? 1.06 : 1 }}
                transition={{ duration: 0.5 }}
              />
              <div
                className={`absolute inset-0 transition-all duration-400 ${
                  selected === a.name
                    ? "bg-luxury-black/20"
                    : "bg-gradient-to-t from-luxury-black/85 via-luxury-black/30 to-luxury-black/10"
                }`}
              />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-xl text-white">{a.name}</h3>
                  <span className="text-xs text-luxury-gold-light/70">{a.size}</span>
                </div>
                <p
                  className={`text-sm text-luxury-gray/80 leading-relaxed transition-all duration-400 ${
                    selected === a.name ? "opacity-100 max-h-16" : "opacity-0 max-h-0"
                  }`}
                >
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="text-sm text-luxury-gray mb-5">
            9 premium amenities | 7 acres landscaped grounds | 24/7 security
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollToSection("contact")} className="btn-primary px-6 py-3" data-cursor-hover>
              Book a Tour
            </button>
            <button onClick={() => scrollToSection("contact")} className="btn-outline px-6 py-3" data-cursor-hover>
              Download Brochure
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
