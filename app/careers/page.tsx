"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Rocket, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function CareersPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Join the{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              SaaS Magic
            </span>{" "}
            Team
          </>
        }
        subtitle="Help us transform ideas into extraordinary SaaS products. We're looking for talented individuals who share our passion for innovation."
      />

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Join SaaS Magic?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing how SaaS products are built and launched.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Rocket className="text-electric-sky" size={32} />,
                title: "Innovation First",
                description: "Work on cutting-edge AI and SaaS technologies"
              },
              {
                icon: <Users className="text-electric-sky" size={32} />,
                title: "Remote Culture",
                description: "Work from anywhere with flexible hours"
              },
              {
                icon: <Heart className="text-electric-sky" size={32} />,
                title: "Growth Mindset",
                description: "Continuous learning and development opportunities"
              },
              {
                icon: <Sparkles className="text-electric-sky" size={32} />,
                title: "Impact",
                description: "Help founders bring their visions to life"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Current Openings
            </h2>

            <div className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-xl p-12 border border-electric-sky/30 text-center">
              <Briefcase className="w-16 h-16 text-electric-sky mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                No Open Positions Right Now
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're not actively hiring at the moment, but we're always interested in connecting with talented individuals. 
                Feel free to send us your details and we'll reach out when the right opportunity arises.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
              >
                <Link href="/contact">
                  Send Your Resume
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            {/* Company Culture */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Our Culture & Values
              </h3>
              <div className="grid gap-4">
                {[
                  "🚀 Ship fast, iterate faster",
                  "💡 Innovation over convention",
                  "🤝 Collaboration without ego",
                  "📚 Always be learning",
                  "✨ Quality in every detail",
                  "🎯 Customer success is our success"
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <p className="text-gray-300">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}