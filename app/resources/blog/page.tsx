"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Construction, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function BlogPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title="SaaS Magic Blog"
        subtitle="Insights and strategies for building successful SaaS products."
      />

      {/* Under Construction Content */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              {/* Construction Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <Construction className="w-20 h-20 text-electric-sky mx-auto" />
              </motion.div>
              
              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-4">
                On Stu's ToDo List!
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 mb-8">
                Our blog is under construction. We're working on bringing you valuable content about SaaS development and growth strategies.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-8">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "35%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-primary-blue to-electric-sky h-2 rounded-full"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Link href="/resources">
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Resources
                  </Link>
                </Button>
                
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
                >
                  <Link href="/">
                    <Home className="mr-2" size={16} />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}