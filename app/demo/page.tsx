"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function DemoPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Wave Background with{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Glassmorphism
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Beautiful animated waves with see-through glass content elements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Glass Cards Demo */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Glassmorphism Styles
            </h2>
            <p className="text-xl text-gray-300">See-through elements that blend with the waves</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 glass-hover"
            >
              <Sparkles className="text-electric-violet mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Basic Glass</h3>
              <p className="text-gray-300">
                Standard glass effect with subtle transparency and blur. 
                Perfect for content that needs to stand out while maintaining visual harmony.
              </p>
              <Button className="mt-4 bg-white/10 hover:bg-white/20 border border-white/20">
                Learn More
              </Button>
            </motion.div>

            {/* Purple Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-purple rounded-xl p-6 glass-hover"
            >
              <Brain className="text-electric-violet mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Purple Glass</h3>
              <p className="text-gray-300">
                Enhanced glass with purple gradient overlay. 
                Ideal for highlighting important features and CTAs.
              </p>
              <Button className="mt-4 bg-gradient-to-r from-primary-purple to-electric-violet hover:from-electric-violet hover:to-primary-purple">
                Get Started
              </Button>
            </motion.div>

            {/* Darker Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-darker rounded-xl p-6 glass-hover"
            >
              <Target className="text-electric-violet mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Darker Glass</h3>
              <p className="text-gray-300">
                More opaque glass for better text readability. 
                Great for sections with dense content or important information.
              </p>
              <Button variant="outline" className="mt-4 border-electric-violet/50 text-electric-violet hover:bg-electric-violet/10">
                Explore
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Glass Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-purple rounded-2xl p-12 text-center"
          >
            <Zap className="text-electric-violet mx-auto mb-6" size={48} />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Full-Width Glass Container
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Large glass containers create immersive sections while maintaining the 
              beautiful wave animation visibility in the background. The subtle transparency 
              and blur effects create depth and visual interest.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple"
              >
                Primary Action
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Secondary Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Wave Animation Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { color: "Primary Purple", hex: "#8B5CF6" },
              { color: "Deep Purple", hex: "#6D28D9" },
              { color: "Electric Violet", hex: "#A78BFA" },
              { color: "Accent Magenta", hex: "#D946EF" },
            ].map((item, index) => (
              <motion.div
                key={item.color}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-4 text-center"
              >
                <div 
                  className="w-full h-20 rounded-md mb-3"
                  style={{ backgroundColor: item.hex }}
                />
                <h4 className="text-white font-semibold text-sm">{item.color}</h4>
                <p className="text-gray-400 text-xs mt-1">{item.hex}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Beautiful Backgrounds, Clear Content
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              The wave animation creates movement and energy while glassmorphism 
              ensures your content remains readable and engaging.
            </p>
            <Link href="/">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple"
              >
                Back to Homepage
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}