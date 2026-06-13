"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    size: "col-span-1 row-span-1",
    title: "Infinity Edge",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    size: "col-span-1 row-span-2",
    title: "Modern Classic",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18f6bae30?w=600&q=80",
    size: "col-span-1 row-span-1",
    title: "Golden Hour",
  },
  {
    src: "https://images.unsplash.com/photo-1600597274343-5e0b0b4f2ae0?w=600&q=80",
    size: "col-span-1 row-span-1",
    title: "Coastal Living",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    size: "col-span-1 row-span-1",
    title: "Urban Sanctuary",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    size: "col-span-2 row-span-1",
    title: "Grand Entrance",
  },
];

export default function LifestyleGallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal/30 to-luxury-black" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Curated Gallery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            The Art of <span className="gold-gradient">Living</span>
          </h2>
          <p className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A visual journey through extraordinary spaces and the lifestyles
            they inspire.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={img.title} delay={i * 0.08} className={img.size}>
              <motion.div
                className="relative h-full rounded-xl overflow-hidden group cursor-none"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                data-cursor-hover
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <p className="text-white font-serif text-lg">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-luxury-gold-light hover:text-white transition-all duration-300 group"
            data-cursor-hover
          >
            View Full Gallery
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
