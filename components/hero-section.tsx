"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  minHeight = "",
  centerContent = true
}: HeroSectionProps) {
  return (
    <section className={`relative flex items-center overflow-hidden py-24 lg:py-32 ${className}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space/50 via-midnight-black/30 to-deep-blue/20 -z-10" />
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={centerContent ? "text-center max-w-5xl mx-auto" : "max-w-5xl mx-auto"}
        >
          {title && (
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
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