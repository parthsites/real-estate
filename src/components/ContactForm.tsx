"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GoldSectionTop, GoldGrid, GoldBottomGlow } from "./GoldAccents";
import { GoldBeam } from "./Decorative";
import FloatingSpecks from "./FloatingSpecks";

const leadOptions = [
  { label: "Book Site Visit", icon: "📍", desc: "Visit our sample flat and experience the quality firsthand" },
  { label: "Download Brochure", icon: "📄", desc: "Get detailed project information and floor plans" },
  { label: "Get Price Sheet", icon: "💰", desc: "Receive the latest pricing and offers via email" },
  { label: "Schedule Callback", icon: "📞", desc: "Our sales team will call you at your convenience" },
  { label: "Talk to Sales", icon: "💬", desc: "Chat instantly with our sales team on WhatsApp" },
  { label: "Get Latest Offers", icon: "🎯", desc: "Subscribe to receive exclusive launch and festival offers" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-16 lg:py-20 overflow-hidden">
      <GoldSectionTop />
      <GoldGrid />
      <GoldBottomGlow />
      <FloatingSpecks />
      <GoldBeam />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-8">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mt-2 mb-3 text-white">
            Your Dream Home Is a{" "}
            <span className="gold-gradient">Call Away</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Take the first step towards owning your dream home.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {leadOptions.map((opt, i) => (
            <AnimatedSection key={opt.label} delay={i * 0.04}>
              <motion.a
                href="#"
                className="flex flex-col items-center text-center p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-luxury-gold/30 hover:bg-luxury-gold/5 transition-all duration-500 group"
                whileHover={{ y: -2 }}
                data-cursor-hover
              >
                <span className="text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                  {opt.icon}
                </span>
                <p className="text-xs uppercase tracking-[0.1em] text-white font-medium leading-tight">
                  {opt.label}
                </p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatedSection direction="left">
            <div className="glass-card p-6">
              <h3 className="font-display text-xl text-white mb-4">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dfc06a" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-white mb-2">Thank You!</h4>
                  <p className="text-sm text-luxury-gray">
                    Our team will contact you within 24 hours. For immediate assistance,
                    please call us at <span className="text-luxury-gold-light">+91 98765 43210</span>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gray mb-1">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/40 focus:outline-none transition-all duration-300"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gray mb-1">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/40 focus:outline-none transition-all duration-300"
                        placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gray mb-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/40 focus:outline-none transition-all duration-300"
                        placeholder="email@example.com" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gray mb-1">I am interested in *</label>
                    <select name="purpose" value={formData.purpose} onChange={handleChange} required
                      className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm focus:border-luxury-gold/40 focus:outline-none transition-all duration-300">
                      <option value="">Select purpose</option>
                      <option value="2bhk">2 BHK Apartment</option>
                      <option value="3bhk">3 BHK Apartment</option>
                      <option value="4bhk">4 BHK Penthouse</option>
                      <option value="site-visit">Book a Site Visit</option>
                      <option value="price">Get Price & Offers</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gray mb-1">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={2}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/40 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Any specific requirements?" />
                  </div>

                  <button type="submit" className="w-full py-3 rounded-full bg-luxury-gold text-luxury-black text-xs uppercase tracking-[0.2em] font-semibold hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all duration-500" data-cursor-hover>
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="text-sm uppercase tracking-[0.15em] text-luxury-gray mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { label: "Sales Gallery", value: "Baner-Balewadi Road, Pune 411045", icon: "📍" },
                    { label: "Phone", value: "+91 98765 43210", icon: "📞", href: "tel:+919876543210" },
                    { label: "WhatsApp", value: "+91 98765 43210", icon: "💬", href: "https://wa.me/919876543210" },
                    { label: "Email", value: "sales@serenityheights.com", icon: "✉️", href: "mailto:sales@serenityheights.com" },
                    { label: "Hours", value: "10 AM - 7 PM (Mon-Sat)", icon: "🕐" },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-2.5">
                      <span className="text-sm mt-0.5">{info.icon}</span>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-luxury-gray">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-white hover:text-luxury-gold-light transition-colors">{info.value}</a>
                        ) : (
                          <p className="text-sm text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-sm uppercase tracking-[0.15em] text-luxury-gray mb-3">Download Resources</h3>
                <div className="space-y-2">
                  {[
                    { label: "Project Brochure", size: "12 MB" },
                    { label: "Price List", size: "2 MB" },
                    { label: "Floor Plans", size: "8 MB" },
                    { label: "Payment Plan", size: "1 MB" },
                  ].map((r) => (
                    <motion.a key={r.label} href="#"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-luxury-gold/20 transition-all duration-300"
                      whileHover={{ x: 3 }} data-cursor-hover>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dfc06a" strokeWidth="1.5">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                        <span className="text-sm text-white">{r.label}</span>
                      </div>
                      <span className="text-xs text-luxury-gray">{r.size}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-4 bg-luxury-gold/5 border-luxury-gold/20">
                <p className="text-xs uppercase tracking-[0.15em] text-luxury-gold-light font-medium mb-1">RERA Registered</p>
                <p className="text-sm font-mono text-white mb-2">P51800012345</p>
                <p className="text-xs text-luxury-gray leading-relaxed">
                  Images for illustration. Verify details with sales team.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
