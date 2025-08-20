"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Brain, Target, Zap, Shield, BarChart3, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function HyperPersonalization() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Marketing That Knows Every{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Customer Personally
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop sending the same message to everyone. Deliver perfectly personalized experiences 
              to millions of customers simultaneously with AI-powered personalization.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">
                See Personalization in Action
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Personalization Imperative */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Generic Marketing is Dead
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              91% of consumers expect personalized experiences. Those who don't deliver are losing 67% of potential revenue.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  challenge: "Surface-Level Tactics",
                  description: "First-name tokens aren't personalization",
                  icon: <Users className="text-red-400 mb-4" size={32} />,
                },
                {
                  challenge: "Data Silos",
                  description: "Fragmented customer views create generic experiences",
                  icon: <BarChart3 className="text-red-400 mb-4" size={32} />,
                },
                {
                  challenge: "Manual Limitations",
                  description: "Human bandwidth can't scale 1-to-1 marketing",
                  icon: <Target className="text-red-400 mb-4" size={32} />,
                },
                {
                  challenge: "Privacy Concerns",
                  description: "Heavy-handed tactics erode trust",
                  icon: <Shield className="text-red-400 mb-4" size={32} />,
                },
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.challenge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-6 text-center"
                >
                  {challenge.icon}
                  <h4 className="text-lg font-semibold text-white mb-2">{challenge.challenge}</h4>
                  <p className="text-gray-400 text-sm">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* True Hyper-Personalization */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Individual Experiences at Infinite Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create personalization systems that understand each customer's unique context, preferences, 
              and journey—then deliver exactly what they need, when they need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                layer: "Data Unification Layer",
                title: "Single Customer View Across Everything",
                description: "Break down silos to create a complete, real-time picture of every customer.",
                items: [
                  "Cross-channel data integration",
                  "Behavioral data synthesis",
                  "Transaction history unification",
                  "Preference and interest mapping",
                  "Real-time profile updates",
                ],
                icon: <BarChart3 className="text-electric-violet" size={32} />,
              },
              {
                layer: "AI-Powered Segmentation",
                title: "Segments of One",
                description: "Move beyond basic demographics to micro-segments that capture individual nuance.",
                items: [
                  "Predictive behavioral clustering",
                  "Psychographic profiling",
                  "Intent-based segmentation",
                  "Lifecycle stage modeling",
                  "Dynamic segment evolution",
                ],
                icon: <Brain className="text-electric-violet" size={32} />,
              },
              {
                layer: "Dynamic Content Generation",
                title: "Content That Adapts to Each Person",
                description: "Generate and deliver unique content combinations for every individual interaction.",
                items: [
                  "AI-powered content creation",
                  "Dynamic creative optimization",
                  "Personalized product recommendations",
                  "Individual offer generation",
                  "Context-aware messaging",
                ],
                icon: <Zap className="text-electric-violet" size={32} />,
              },
              {
                layer: "Omnichannel Orchestration",
                title: "Consistent Personalization Everywhere",
                description: "Deliver seamless experiences across every channel and touchpoint.",
                items: [
                  "Cross-channel journey orchestration",
                  "Real-time experience optimization",
                  "Channel preference adaptation",
                  "Timing and frequency optimization",
                  "Device and platform coordination",
                ],
                icon: <Globe className="text-electric-violet" size={32} />,
              },
            ].map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{layer.icon}</div>
                  <div>
                    <span className="text-electric-violet text-sm font-semibold">{layer.layer}</span>
                    <h3 className="text-2xl font-semibold text-white mt-1">{layer.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Components */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Complete Personalization Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Enterprise-Grade Personalization Platform",
                items: [
                  "Customer Data Platform (CDP) implementation",
                  "AI/ML model deployment",
                  "Real-time decisioning engine",
                  "Content management system integration",
                  "Marketing automation configuration",
                  "Analytics and measurement setup",
                ],
                icon: <Brain className="text-electric-violet mb-4" size={24} />,
              },
              {
                title: "Activation Across Channels",
                items: [
                  "Email personalization campaigns",
                  "Website experience optimization",
                  "App personalization strategies",
                  "Ad targeting and retargeting",
                  "Social media personalization",
                  "SMS and push notification optimization",
                ],
                icon: <Globe className="text-electric-violet mb-4" size={24} />,
              },
              {
                title: "Personalization With Trust",
                items: [
                  "Privacy-first data strategies",
                  "GDPR/CCPA compliance frameworks",
                  "Consent management platforms",
                  "Data governance protocols",
                  "Transparency and control features",
                  "Security and encryption standards",
                ],
                icon: <Shield className="text-electric-violet mb-4" size={24} />,
              },
            ].map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30"
              >
                {component.icon}
                <h3 className="text-xl font-semibold text-white mb-4">{component.title}</h3>
                <ul className="space-y-2">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <CheckCircle className="text-electric-violet mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Personalization That Drives Revenue
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real personalization delivers dramatic improvements across every business metric.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "47%", label: "Increase in customer lifetime value" },
              { number: "34%", label: "Improvement in conversion rates" },
              { number: "56%", label: "Boost in email engagement" },
              { number: "71%", label: "Reduction in cart abandonment" },
            ].map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {outcome.number}
                </div>
                <p className="text-gray-400 text-sm">{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Personalization for Every Business Model
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                industry: "Retail & E-commerce",
                features: [
                  "Individual product recommendations",
                  "Personalized pricing strategies",
                  "Customized shopping experiences",
                  "Predictive inventory alerts",
                  "Loyalty program personalization",
                ],
                icon: <Heart className="text-electric-violet" size={32} />,
              },
              {
                industry: "Media & Entertainment",
                features: [
                  "Content recommendation engines",
                  "Personalized playlists and feeds",
                  "Viewing preference optimization",
                  "Engagement-based content delivery",
                  "Subscription retention strategies",
                ],
                icon: <Globe className="text-electric-violet" size={32} />,
              },
              {
                industry: "Financial Services",
                features: [
                  "Personalized financial advice",
                  "Product recommendation engines",
                  "Risk-based communications",
                  "Life event triggered offers",
                  "Fraud prevention personalization",
                ],
                icon: <Shield className="text-electric-violet" size={32} />,
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Start Delivering Individual Experiences
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every generic message is a missed opportunity. Transform your marketing with true personalization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Activate Hyper-Personalization
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources/guides">Calculate Personalization ROI</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}