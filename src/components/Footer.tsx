"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/smoothScroll";

const footerQuickLinks = [
  { label: "Overview", id: "overview" },
  { label: "Floor Plans", id: "plans" },
  { label: "Amenities", id: "amenities" },
  { label: "Location", id: "location" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-luxury-charcoal border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center">
                <span className="text-luxury-gold-light font-bold font-serif text-lg">S</span>
              </div>
              <div>
                <span className="font-display text-lg tracking-[0.08em] text-white leading-none block">
                  Serenity
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold-light font-medium leading-none block mt-0.5">
                  Heights
                </span>
              </div>
            </a>
            <p className="text-sm text-luxury-gray leading-relaxed mb-5 max-w-sm">
              A landmark luxury residential development by Apex Infra Developers in the
              heart of Baner-Balewadi, Pune. RERA approved premium residences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="text-sm text-luxury-gold-light hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:sales@serenityheights.com"
                className="text-sm text-luxury-gold-light hover:text-white transition-colors"
              >
                sales@serenityheights.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold-light mb-5 font-medium">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm text-luxury-gray hover:text-white transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold-light mb-5 font-medium">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Brochure", "Price List", "Payment Plan", "Site Visit", "FAQs", "Blog"].map((link) => (
                <li key={link}>
                  <span className="text-sm text-luxury-gray/40 cursor-default">{link}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold-light mb-5 font-medium">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["RERA Details", "Privacy Policy", "Terms of Use", "Disclaimer", "Sitemap"].map((link) => (
                <li key={link}>
                  <span className="text-sm text-luxury-gray/40 cursor-default">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-luxury-gray/50 tracking-wider">
            &copy; {new Date().getFullYear()} Apex Infra Developers. All rights reserved.
          </p>
          <p className="text-[10px] text-luxury-gray/40 tracking-wider">
            RERA: P51800012345 | Premium Living. Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}
