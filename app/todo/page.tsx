"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Construction, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TodoPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-blue/20 -z-10" />
      
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
            <h1 className="text-3xl font-bold text-white mb-4">
              On Stu's ToDo List!
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 mb-8">
              This page is under construction. We're working hard to bring you something amazing. 
              Check back soon!
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mb-8">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "45%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-primary-blue to-electric-sky h-2 rounded-full"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2" size={16} />
                Go Back
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
    </div>
  );
}