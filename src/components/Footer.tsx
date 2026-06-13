"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Explore: ["Properties", "Destinations", "Virtual Tours", "Market Reports"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Services: ["Buying", "Selling", "Consulting", "Investment"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative bg-luxury-charcoal border-t border-luxury-glass-border">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center">
                <span className="text-luxury-black font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-xl tracking-[0.15em] text-white">
                AXION
              </span>
            </a>
            <p className="text-luxury-gray text-sm leading-relaxed mb-6">
              Redefining luxury real estate across the world&apos;s most
              prestigious destinations. Extraordinary properties for
              extraordinary lives.
            </p>
            <div className="flex gap-4">
              {["IG", "LI", "X", "YT"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-luxury-glass-border flex items-center justify-center text-xs tracking-wider text-luxury-gray hover:border-luxury-gold/50 hover:text-luxury-gold-light transition-all duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold-light mb-6 font-medium">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-luxury-gray hover:text-white transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-luxury-glass-border flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luxury-gray/60 tracking-wider">
            &copy; {new Date().getFullYear()} AXION ESTATES. All rights
            reserved.
          </p>
          <p className="text-xs text-luxury-gray/40 tracking-wider">
            Luxury Real Estate. Extraordinary Living.
          </p>
        </div>
      </div>
    </footer>
  );
}
