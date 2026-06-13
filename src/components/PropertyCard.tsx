"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image?: string;
  isFeatured?: boolean;
  index?: number;
}

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7c3a5e?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
];

export default function PropertyCard({
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  isFeatured = false,
  index = 0,
}: PropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group cursor-none relative ${
        isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      data-cursor-hover
    >
      <div className="relative overflow-hidden rounded-2xl bg-luxury-charcoal h-full">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[index % images.length]})`,
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
          <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/20 transition-all duration-500" />

          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 rounded-full bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 text-luxury-gold-light text-xs uppercase tracking-wider font-medium">
              Featured
            </span>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 9l5-5 5 5M12 4v12" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl lg:text-2xl font-serif text-white mb-2">
            {title}
          </h3>
          <p className="text-luxury-gray text-sm mb-1 flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-luxury-gold-light"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
          <p className="text-luxury-gold-light text-lg lg:text-xl font-medium font-serif mt-2">
            {price}
          </p>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 left-6 right-6 glass-panel-strong px-6 py-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-luxury-gray">
              <span className="text-white font-medium">{beds}</span> Beds
            </span>
            <span className="text-luxury-gray">
              <span className="text-white font-medium">{baths}</span> Baths
            </span>
            <span className="text-luxury-gray">
              <span className="text-white font-medium">{sqft}</span> Sq Ft
            </span>
          </div>
          <button className="text-luxury-gold-light text-xs uppercase tracking-wider font-medium hover:underline underline-offset-4">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const properties = [
  {
    title: "Penthouse Horizon",
    location: "Dubai Marina, UAE",
    price: "$28,500,000",
    beds: 6,
    baths: 7,
    sqft: "8,200",
    isFeatured: true,
  },
  {
    title: "Villa Serenità",
    location: "Lake Como, Italy",
    price: "$18,200,000",
    beds: 5,
    baths: 6,
    sqft: "6,800",
  },
  {
    title: "Manhattan Tower Suite",
    location: "New York, USA",
    price: "$42,000,000",
    beds: 4,
    baths: 5,
    sqft: "5,400",
  },
  {
    title: "Château Mont Blanc",
    location: "Courchevel, France",
    price: "$35,800,000",
    beds: 8,
    baths: 9,
    sqft: "12,000",
    isFeatured: true,
  },
  {
    title: "Malibu Ocean Estate",
    location: "Malibu, California",
    price: "$55,000,000",
    beds: 7,
    baths: 8,
    sqft: "10,500",
  },
  {
    title: "Private Island Retreat",
    location: "Fiji, South Pacific",
    price: "$22,000,000",
    beds: 4,
    baths: 5,
    sqft: "4,200",
  },
];

export { properties };
