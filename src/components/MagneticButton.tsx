"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setPosition({ x: distX * 0.15, y: distY * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-500 cursor-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold text-luxury-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-semibold gold-glow hover-gold-glow",
    secondary:
      "border border-luxury-gold/40 text-luxury-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold/10",
    ghost:
      "text-luxury-gold-light text-sm uppercase tracking-[0.15em] font-medium hover:text-luxury-white transition-colors",
  };

  const content = (
    <motion.span
      className="relative z-10 inline-block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.span>
  );

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-cursor-hover
    >
      {href ? (
        <a href={href} className="absolute inset-0 z-20">
          {content}
        </a>
      ) : (
        <button onClick={onClick} className="absolute inset-0 z-20">
          {content}
        </button>
      )}
    </div>
  );
}
