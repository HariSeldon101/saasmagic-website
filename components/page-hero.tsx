"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AnimatedWaves } from "./animated-waves";

interface PageHeroProps {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ title, subtitle, children, className = "" }: PageHeroProps) {
  return (
    <section className={`relative min-h-[70vh] flex items-center overflow-hidden ${className}`}>
      {/* Animated background - using the SAME AnimatedWaves as HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20">
        <AnimatedWaves />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}