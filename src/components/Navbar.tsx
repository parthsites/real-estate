"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/smoothScroll";

const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "Projects", id: "projects" },
  { label: "Floor Plans", id: "plans" },
  { label: "Amenities", id: "amenities" },
  { label: "Location", id: "location" },
  { label: "About", id: "about" },
  { label: "FAQs", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-luxury-black/85 backdrop-blur-2xl border-b border-white/5"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center overflow-hidden group-hover:bg-luxury-gold/20 transition-all duration-500">
                <span className="text-luxury-gold-light font-bold font-serif text-lg tracking-tight">S</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-luxury-gold/40" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-base tracking-[0.08em] text-white leading-none block">
                Serenity
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-luxury-gold-light font-medium leading-none block mt-0.5">
                Heights
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-[11px] tracking-[0.2em] uppercase text-luxury-gray/80 hover:text-luxury-gold-light transition-all duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold/60 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-2 px-6 py-2.5 rounded-full bg-luxury-gold text-luxury-black text-[10px] uppercase tracking-[0.2em] font-semibold hover:shadow-[0_0_25px_rgba(201,168,76,0.3)] transition-all duration-500"
              data-cursor-hover
            >
              Book Site Visit
            </button>
          </div>

          <div className="hidden sm:flex lg:hidden items-center gap-4">
            <a href="tel:+919876543210" className="text-xs text-luxury-gold-light tracking-wider">
              +91 98765 43210
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-luxury-lightgray transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-luxury-lightgray transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-luxury-lightgray transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-luxury-black/98 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
                  className="text-left text-sm tracking-[0.15em] uppercase text-luxury-gray/80 hover:text-luxury-gold-light transition-colors py-2"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="border-t border-white/5 pt-5 mt-2 space-y-3">
                <button
                  onClick={() => { scrollToSection("contact"); setMobileOpen(false); }}
                  className="block w-full text-center px-8 py-3.5 rounded-full bg-luxury-gold text-luxury-black text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Book Site Visit
                </button>
                <a
                  href="tel:+919876543210"
                  className="block text-center text-sm text-luxury-gold-light"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
