"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
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
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-gold/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6 leading-[1.15]">
              Let&apos;s Discuss Your{" "}
              <span className="gold-gradient">Vision</span>
            </h2>
            <p className="text-luxury-gray text-base lg:text-lg leading-relaxed mb-8">
              Whether you are seeking your dream property or considering selling
              a prized asset, our team is ready to provide you with
              unparalleled expertise and discretion.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  title: "Call Us",
                  detail: "+1 (212) 555-0199",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  title: "Email Us",
                  detail: "concierge@axionestates.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: "Visit Us",
                  detail: "432 Park Avenue, New York, NY 10022",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-luxury-gold-light shrink-0 group-hover:border-luxury-gold/30 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-luxury-gray mb-1">
                      {info.title}
                    </p>
                    <p className="text-white text-sm">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel-strong p-12 lg:p-16 text-center"
              >
                <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a0a0a"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">
                  Thank You
                </h3>
                <p className="text-luxury-gray text-sm leading-relaxed">
                  Your inquiry has been received. A member of our concierge team
                  will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-panel-strong p-8 lg:p-12 space-y-5"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 lg:col-span-1">
                    <label className="block text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-luxury-glass border border-luxury-glass-border text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/50 focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="block text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-luxury-glass border border-luxury-glass-border text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/50 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 lg:col-span-1">
                    <label className="block text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-luxury-glass border border-luxury-glass-border text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/50 focus:outline-none transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="block text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                      Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-luxury-glass border border-luxury-glass-border text-white text-sm focus:border-luxury-gold/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select interest</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="consulting">Consultation</option>
                      <option value="investing">Investment Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-luxury-gray mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-luxury-glass border border-luxury-glass-border text-white text-sm placeholder:text-luxury-gray/40 focus:border-luxury-gold/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <MagneticButton variant="primary" className="w-full justify-center">
                  Send Inquiry
                </MagneticButton>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
