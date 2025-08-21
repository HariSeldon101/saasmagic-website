"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Brain, Target, Users, BarChart3, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function CaseStudies() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Waves */}
      <HeroSection
        title={
          <>
            Real Results from{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              Ambitious SaaS Companies
            </span>
          </>
        }
        subtitle="See how we've helped companies go from idea to launch, from launch to scale, and from scale to exit."
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          <Link href="/get-started">
            Start Your Success Story
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </HeroSection>

      {/* Success Metrics Overview */}
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
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-amplified marketing strategies consistently deliver transformational results across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { metric: "2,847%", label: "Average ROI Improvement" },
              { metric: "$47M+", label: "Revenue Generated" },
              { metric: "3.2M+", label: "Qualified Leads" },
              { metric: "67%", label: "Cost Reduction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Transformation Stories
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Case Study 1 - E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Users className="text-electric-violet mr-3" size={32} />
                    <div>
                      <span className="text-electric-violet text-sm font-semibold">E-commerce • Fashion Retail</span>
                      <h3 className="text-2xl font-bold text-white">From 2% to 8.5% Conversion Rate</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A mid-sized fashion retailer struggling with low conversion rates and high cart abandonment. 
                    Their traditional email marketing was generating minimal revenue, and customer lifetime value was declining.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Implemented AI-powered customer journey mapping",
                        "Created hyper-personalized product recommendations",
                        "Developed predictive cart abandonment prevention",
                        "Automated cross-sell and upsell sequences",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6">Results After 6 Months:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { metric: "325%", label: "Conversion Rate Increase" },
                      { metric: "89%", label: "Reduction in Cart Abandonment" },
                      { metric: "156%", label: "Increase in AOV" },
                      { metric: "$2.1M", label: "Additional Annual Revenue" },
                    ].map((result, i) => (
                      <div key={i} className="bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-electric-violet">{result.metric}</div>
                        <div className="text-sm text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-electric-violet pl-4 italic text-gray-300">
                    "The AI-driven personalization completely transformed our customer experience. 
                    We're seeing customers we never thought would convert become our highest-value segments."
                  </blockquote>
                  <p className="text-sm text-gray-400 mt-2">— Sarah Chen, Head of Marketing</p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 - B2B SaaS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-electric-violet mr-3" size={32} />
                    <div>
                      <span className="text-electric-violet text-sm font-semibold">B2B SaaS • Marketing Technology</span>
                      <h3 className="text-2xl font-bold text-white">3x Pipeline Growth in 90 Days</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A growing SaaS company with great product-market fit but struggling to scale their marketing. 
                    Long sales cycles and difficulty identifying high-intent prospects were limiting growth.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Built AI-powered lead scoring and routing system",
                        "Created account-based marketing automation",
                        "Implemented predictive churn prevention",
                        "Developed intelligent content recommendation engine",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6">Results After 90 Days:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { metric: "312%", label: "Qualified Pipeline Increase" },
                      { metric: "47%", label: "Shorter Sales Cycle" },
                      { metric: "89%", label: "Lead Quality Improvement" },
                      { metric: "23%", label: "Higher Win Rate" },
                    ].map((result, i) => (
                      <div key={i} className="bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-electric-violet">{result.metric}</div>
                        <div className="text-sm text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-electric-violet pl-4 italic text-gray-300">
                    "Our sales team went from chasing unqualified leads to having strategic conversations 
                    with prospects who are already sold on the value. It's like having a crystal ball."
                  </blockquote>
                  <p className="text-sm text-gray-400 mt-2">— Marcus Rodriguez, VP of Sales</p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3 - Professional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Brain className="text-electric-violet mr-3" size={32} />
                    <div>
                      <span className="text-electric-violet text-sm font-semibold">Professional Services • Legal Tech</span>
                      <h3 className="text-2xl font-bold text-white">$12M Revenue Growth Year-over-Year</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A legal technology firm with excellent expertise but minimal digital presence. 
                    They relied heavily on referrals and struggled to demonstrate ROI from marketing investments.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Developed thought leadership content strategy with AI optimization",
                        "Created intelligent lead nurturing sequences",
                        "Implemented predictive customer lifetime value modeling",
                        "Built automated referral amplification system",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6">Results After 12 Months:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { metric: "847%", label: "Website Traffic Increase" },
                      { metric: "234%", label: "Lead Generation Growth" },
                      { metric: "67%", label: "Increase in Deal Size" },
                      { metric: "4,200%", label: "Marketing ROI" },
                    ].map((result, i) => (
                      <div key={i} className="bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-electric-violet">{result.metric}</div>
                        <div className="text-sm text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-electric-violet pl-4 italic text-gray-300">
                    "We went from being the best-kept secret in legal tech to the go-to authority. 
                    Our pipeline is full of inbound leads from Fortune 500 companies."
                  </blockquote>
                  <p className="text-sm text-gray-400 mt-2">— Jennifer Walsh, CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Success */}
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
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-amplified strategies deliver results across every sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Users className="text-electric-violet" size={32} />,
                industry: "E-commerce & Retail",
                clients: "47+ Clients",
                avgGrowth: "285% Revenue Growth",
                keyMetrics: ["325% avg conversion increase", "89% cart abandonment reduction", "156% AOV improvement"]
              },
              {
                icon: <BarChart3 className="text-electric-violet" size={32} />,
                industry: "B2B & SaaS",
                clients: "34+ Clients",
                avgGrowth: "312% Pipeline Growth",
                keyMetrics: ["312% qualified lead increase", "47% shorter sales cycles", "89% better lead quality"]
              },
              {
                icon: <Award className="text-electric-violet" size={32} />,
                industry: "Professional Services",
                clients: "23+ Clients",
                avgGrowth: "847% Traffic Growth",
                keyMetrics: ["234% lead generation growth", "67% deal size increase", "4,200% marketing ROI"]
              },
            ].map((sector, index) => (
              <motion.div
                key={sector.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30"
              >
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{sector.industry}</h3>
                <div className="text-electric-violet font-medium mb-1">{sector.clients}</div>
                <div className="text-2xl font-bold text-white mb-4">{sector.avgGrowth}</div>
                <ul className="space-y-2">
                  {sector.keyMetrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that have transformed their marketing with AI-amplified strategies. 
              Your transformation starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Schedule Your Strategy Call
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/about">Learn About Our Approach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}