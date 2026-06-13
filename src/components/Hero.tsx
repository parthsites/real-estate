"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundOrbs from "./BackgroundOrbs";
import { GoldSectionTop, GoldGrid } from "./GoldAccents";
import FloatingSpecks from "./FloatingSpecks";

const scenes = [
  {
    id: "exterior",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
    overlay: "from-black/70 via-black/30 to-transparent",
    title: "Serenity Heights",
    subtitle: "Premium Living. Pune.",
    description: "A landmark address in the heart of Baner-Balewadi",
  },
  {
    id: "lobby",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
    overlay: "from-black/60 via-black/20 to-transparent",
    title: "Where Design Meets Lifestyle",
    subtitle: "Grand Arrival",
    description: "Step into a world of refined elegance",
  },
  {
    id: "interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
    overlay: "from-black/60 via-black/20 to-transparent",
    title: "Crafted for Modern Families",
    subtitle: "Thoughtful Interiors",
    description: "Spaces designed around how you live",
  },
  {
    id: "amenities",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
    overlay: "from-black/60 via-black/20 to-transparent",
    title: "A Community Designed Around You",
    subtitle: "World-Class Amenities",
    description: "Every detail crafted for your well-being",
  },
  {
    id: "rooftop",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=85",
    overlay: "from-black/70 via-black/30 to-transparent",
    title: "Future-Ready Living",
    subtitle: "The View From Above",
    description: "Where your story begins",
  },
];

export default function Hero() {
  const [activeScene, setActiveScene] = useState(0);
  const [prevScene, setPrevScene] = useState<number | null>(null);
  const touchX = useRef(0);

  const goToScene = (index: number) => {
    const next = (index + scenes.length) % scenes.length;
    if (next === activeScene) return;
    setPrevScene(activeScene);
    setActiveScene(next);
  };

  const next = () => goToScene(activeScene + 1);
  const prev = () => goToScene(activeScene - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => {
        const next = (prev + 1) % scenes.length;
        setPrevScene(prev);
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="overview"
      className="relative h-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <GoldSectionTop />
      <div className="absolute inset-0 bg-luxury-black">
        <GoldGrid />
        <BackgroundOrbs />
        <FloatingSpecks />

        {/* Current scene */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${scenes[activeScene].image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${scenes[activeScene].overlay}`} />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex items-center px-6 lg:px-16">
            <div className="max-w-md">
              <span className="text-luxury-gold-light text-xs uppercase tracking-[0.3em] font-medium inline-block mb-2">
                {scenes[activeScene].subtitle}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-3 text-white">
                {scenes[activeScene].title}
              </h2>
              <p className="text-luxury-gray text-base max-w-sm leading-relaxed">
                {scenes[activeScene].description}
              </p>
            </div>
          </div>
        </div>

        {/* Previous scene crossfading out */}
        {prevScene !== null && prevScene !== activeScene && (
          <motion.div
            key={`prev-${prevScene}`}
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => setPrevScene(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-black" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${scenes[prevScene].image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${scenes[prevScene].overlay}`} />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        )}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-500 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 group-hover:text-luxury-gold-light transition-colors">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-500 flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 group-hover:text-luxury-gold-light transition-colors">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {scenes.map((_, i) => (
            <button
              key={i}
              onClick={() => goToScene(i)}
              className={`relative cursor-pointer ${
                i === activeScene ? "w-8" : "w-5"
              }`}
              style={{ height: "32px" }}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`absolute top-1/2 left-0 -translate-y-1/2 h-[2px] rounded-full transition-all duration-500 w-full ${
                  i === activeScene
                    ? "bg-luxury-gold"
                    : i < activeScene
                    ? "bg-luxury-gold/25"
                    : "bg-white/8"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
