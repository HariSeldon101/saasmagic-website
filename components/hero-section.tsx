"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AnimatedWaves } from "./animated-waves";

interface HeroSectionProps {
  title?: ReactNode;
  subtitle?: string;
  tagline?: string;
  children?: ReactNode;
  className?: string;
  minHeight?: string;
  centerContent?: boolean;
}

export function HeroSection({ 
  title, 
  subtitle,
  tagline, 
  children, 
  className = "",
  minHeight = "min-h-[70vh]",
  centerContent = true
}: HeroSectionProps) {
  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden pt-20 ${className}`}>
      {/* Background gradient with animated waves - used by ALL pages */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/40 -z-10">
        <AnimatedWaves />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={centerContent ? "text-center max-w-5xl mx-auto" : "max-w-5xl mx-auto"}
        >
          {title && (
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              {title}
            </h1>
          )}
          {tagline && (
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">
              {tagline}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}