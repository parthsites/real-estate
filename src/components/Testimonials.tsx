"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Axion Estates transformed our property search into an extraordinary journey. Their attention to detail and understanding of our vision was exceptional. They found us a home that exceeded every expectation.",
    author: "Victoria & James Harrington",
    role: "Penthouse Acquisition, Dubai",
    rating: 5,
  },
  {
    quote:
      "The level of discretion and professionalism is unmatched. When selling our family estate, we needed a partner who understood the nuances of ultra-high-net-worth transactions. Axion delivered beyond measure.",
    author: "Alexander Dubois",
    role: "Estate Sale, French Riviera",
    rating: 5,
  },
  {
    quote:
      "From the initial consultation to the final closing, every interaction was flawless. The virtual tour technology allowed us to evaluate properties across continents without leaving our home.",
    author: "The Chen Family",
    role: "Multiple Acquisitions, Asia Pacific",
    rating: 5,
  },
  {
    quote:
      "As an international investor, I require market intelligence that goes beyond the surface. Axion's analytical approach and global network have been instrumental in building my portfolio.",
    author: "Marcus Sterling",
    role: "Investment Portfolio, London",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Client Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            Trusted by <span className="gold-gradient">Discerning</span> Clients
          </h2>
          <p className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from those who have experienced the Axion difference.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <motion.div
                className="glass-panel p-8 lg:p-10 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#c9a84c"
                      stroke="#c9a84c"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-base lg:text-lg text-luxury-lightgray leading-relaxed mb-8 flex-1 font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="border-t border-luxury-glass-border pt-5">
                  <p className="text-white font-medium text-sm">
                    {t.author}
                  </p>
                  <p className="text-luxury-gold-light text-xs uppercase tracking-[0.15em] mt-1">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
