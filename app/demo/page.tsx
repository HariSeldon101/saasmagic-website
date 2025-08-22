"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Calendar, Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function DemoPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            See SaaS Magic in{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              Action
            </span>
          </>
        }
        subtitle="Book a personalized demo and discover how we can transform your SaaS idea into reality in just 8 weeks."
      />

      {/* Demo Options */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Demo Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you prefer a quick overview or a deep dive, we have the perfect demo format for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quick Demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-sky/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Play className="text-electric-sky mr-3" size={32} />
                <h3 className="text-2xl font-bold text-white">Quick Demo</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Perfect for busy founders who want a rapid overview of our capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <Clock className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>15-minute focused session</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>See our process in action</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Quick Q&A session</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Instant meeting link</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
              >
                <Link href="/book?type=quick">
                  Book Quick Demo
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </motion.div>

            {/* Deep Dive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 backdrop-blur-sm rounded-2xl p-8 border border-electric-sky/30 hover:border-electric-sky/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Sparkles className="text-electric-sky mr-3" size={32} />
                <h3 className="text-2xl font-bold text-white">Deep Dive Demo</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive walkthrough tailored to your specific SaaS vision and challenges.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <Clock className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>45-minute detailed session</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Personalized to your project</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Technical architecture discussion</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Custom roadmap preview</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
              >
                <Link href="/book?type=deep">
                  Book Deep Dive
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
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
              What to Expect in Your Demo
            </h2>

            <div className="grid gap-8">
              {[
                {
                  number: "01",
                  title: "Introduction & Discovery",
                  description: "We'll start by understanding your SaaS vision, target market, and current challenges."
                },
                {
                  number: "02",
                  title: "Process Walkthrough",
                  description: "See our proven 8-week methodology and how we've helped other SaaS founders succeed."
                },
                {
                  number: "03",
                  title: "Technology Showcase",
                  description: "Explore our AI-powered development tools and see how we deliver 40% faster."
                },
                {
                  number: "04",
                  title: "Custom Recommendations",
                  description: "Get initial insights on your project scope, timeline, and potential roadmap."
                },
                {
                  number: "05",
                  title: "Q&A Session",
                  description: "Ask anything about our process, team, pricing, or how we can help your specific situation."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-primary-blue to-electric-sky text-white text-2xl font-bold rounded-lg p-4 mr-6 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to See the Magic?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of founders who've transformed their SaaS dreams into reality with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/book">
                  Schedule Your Demo
                  <Calendar className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
              >
                <Link href="/get-started">
                  Get Free Roadmap Instead
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              No credit card required • 100% free consultation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}