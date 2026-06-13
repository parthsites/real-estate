"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-luxury-black flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border border-luxury-gold/30 animate-pulse" />
    </div>
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      containerRef.current.style.setProperty("--mouse-x", String(x));
      containerRef.current.style.setProperty("--mouse-y", String(y));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/20 to-luxury-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/30 via-transparent to-luxury-black/30 z-10" />

      <ThreeScene />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-luxury-gold-light text-sm lg:text-base uppercase tracking-[0.35em] mb-6 font-medium"
          >
            Premier Global Real Estate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] mb-8 text-shadow-premium"
          >
            <span className="block">Luxury Real Estate.</span>
            <span className="gold-gradient inline-block mt-2">
              Extraordinary Living.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Curating the world&apos;s finest properties for those who demand
            nothing less than exceptional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <MagneticButton variant="primary" href="#properties">
              Explore Properties
            </MagneticButton>
            <MagneticButton variant="secondary" href="#contact">
              Book Consultation
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gray/50">
              Scroll to explore
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold/50 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-luxury-black/60 to-transparent z-10" />
    </section>
  );
}
