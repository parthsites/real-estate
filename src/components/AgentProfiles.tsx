"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const agents = [
  {
    name: "Isabella Rossi",
    role: "Chief Executive Officer",
    location: "Global",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    specialties: "Ultra-Luxury Estates, Private Islands",
    phone: "+1 (212) 555-0147",
  },
  {
    name: "Jonathan Blackwood",
    role: "Senior Vice President",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    specialties: "City Penthouses, Heritage Properties",
    phone: "+44 (20) 7499-8822",
  },
  {
    name: "Sophie Laurent",
    role: "Director of Luxury Sales",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    specialties: "Châteaux, Vineyard Estates",
    phone: "+33 (1) 4567-8901",
  },
  {
    name: "Michael Chang",
    role: "Managing Partner",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    specialties: "Asian Markets, Investment Portfolios",
    phone: "+852 2523-6789",
  },
];

export default function AgentProfiles() {
  return (
    <section id="agents" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
            Our Team
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
            Meet Your <span className="gold-gradient">Advisors</span>
          </h2>
          <p className="text-luxury-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Seasoned professionals dedicated to guiding you through every
            aspect of your luxury real estate journey.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {agents.map((agent, i) => (
            <AnimatedSection key={agent.name} delay={i * 0.1}>
              <motion.div
                className="group glass-panel overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${agent.image})` }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-luxury-gold-light text-xs uppercase tracking-[0.15em] mb-1">
                      {agent.role}
                    </p>
                    <h3 className="text-xl font-serif text-white">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-luxury-gray mt-1">
                      {agent.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-luxury-gray leading-relaxed">
                    <span className="text-luxury-gold-light uppercase tracking-[0.1em]">
                      Specialties:
                    </span>
                    <br />
                    {agent.specialties}
                  </p>
                  <p className="text-xs text-luxury-gray">{agent.phone}</p>
                  <motion.a
                    href="#"
                    className="inline-block text-xs uppercase tracking-[0.2em] text-luxury-gold-light hover:text-white transition-colors font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Schedule Meeting &rarr;
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
