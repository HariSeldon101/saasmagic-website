"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Rocket, Target, Users, BarChart3, Zap, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function SaaSGrowthAcceleration() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20 -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Drive Predictable Revenue Growth with{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Data-Driven SaaS Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In today's competitive SaaS landscape, traditional marketing approaches no longer deliver sustainable growth. 
              Our SaaS Growth Acceleration service helps you achieve the metrics that matter: 120%+ net revenue retention, 
              sub-16-month CAC payback, and 95%+ revenue forecasting accuracy.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Link href="/get-started">
                Schedule Growth Assessment
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              The SaaS Growth Challenge
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              SaaS companies today face unprecedented complexity in achieving profitable growth. 
              Rising CAC, retention challenges, and pricing mistakes are leaving revenue on the table.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rising CAC Threatens Unit Economics",
                  description: "Median customer acquisition costs now range from $200-$600, with enterprise segments exceeding $1,000",
                  icon: <TrendingUp className="text-red-400" size={24} />,
                },
                {
                  title: "Retention Determines Valuation",
                  description: "Companies with NRR above 120% command 21x EV/revenue vs 9x for those below",
                  icon: <Shield className="text-yellow-400" size={24} />,
                },
                {
                  title: "Product Adoption Crisis",
                  description: "Only 37.5% of users activate, leaving massive revenue potential unrealized",
                  icon: <Users className="text-orange-400" size={24} />,
                },
                {
                  title: "Pricing Mistakes Sacrifice Revenue",
                  description: "98% of SaaS businesses leave 11-17% of revenue on the table through poor pricing",
                  icon: <Target className="text-pink-400" size={24} />,
                },
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start mb-4">
                    {challenge.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{challenge.title}</h3>
                  </div>
                  <p className="text-gray-300">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Our Comprehensive SaaS Growth System
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              We implement a data-driven system that addresses every stage of your customer lifecycle
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Predictive Revenue Intelligence",
                  icon: <Brain className="text-electric-violet" size={32} />,
                  features: [
                    "AI-powered churn prediction with 85%+ accuracy",
                    "Identify at-risk accounts 60-90 days early",
                    "Behavioral lead scoring for 38% higher conversions",
                    "95%+ revenue forecasting accuracy",
                  ],
                },
                {
                  title: "Activation & Adoption Optimization",
                  icon: <Rocket className="text-electric-violet" size={32} />,
                  features: [
                    "Reduce time-to-value by 30-50%",
                    "Increase activation rates to 60%+",
                    "Drive feature adoption to 70%+ for 2x retention",
                    "Personalized adoption paths by segment",
                  ],
                },
                {
                  title: "Expansion Revenue Systems",
                  icon: <TrendingUp className="text-electric-violet" size={32} />,
                  features: [
                    "Build programs targeting 120%+ NRR",
                    "Usage-based upsell triggers",
                    "Hybrid pricing models that grow 38% faster",
                    "Systematic account expansion playbooks",
                  ],
                },
                {
                  title: "Strategic Pricing Optimization",
                  icon: <Target className="text-electric-violet" size={32} />,
                  features: [
                    "Comprehensive pricing analysis",
                    "Value-based pricing implementation",
                    "5% annual increases with minimal churn",
                    "Hybrid subscription/usage models",
                  ],
                },
              ].map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-8"
                >
                  <div className="flex items-center mb-4">
                    {approach.icon}
                    <h3 className="text-2xl font-semibold text-white ml-3">{approach.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {approach.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Your Growth Journey
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              A proven 6-month transformation roadmap
            </p>

            <div className="space-y-8">
              {[
                {
                  phase: "Month 1-2",
                  title: "Foundation & Analysis",
                  deliverables: [
                    "Complete SaaS metrics audit and benchmarking",
                    "Customer journey mapping and friction analysis",
                    "Churn cohort analysis and prediction model setup",
                    "Pricing strategy assessment and opportunity sizing",
                  ],
                },
                {
                  phase: "Month 3-4",
                  title: "System Implementation",
                  deliverables: [
                    "AI-powered churn prediction deployment",
                    "Activation funnel optimization and onboarding redesign",
                    "Expansion opportunity scoring and workflow automation",
                    "Pricing model refinement and testing framework",
                  ],
                },
                {
                  phase: "Month 5-6",
                  title: "Scale & Optimization",
                  deliverables: [
                    "Multi-channel expansion campaign launch",
                    "Advanced segmentation and personalization",
                    "Revenue operations dashboard and reporting",
                    "Team enablement and playbook development",
                  ],
                },
              ].map((timeline, index) => (
                <motion.div
                  key={timeline.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-8"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-electric-violet font-bold text-lg">
                      {timeline.phase}
                    </div>
                    <div className="flex-grow ml-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">{timeline.title}</h3>
                      <ul className="space-y-2">
                        {timeline.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
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
              Expected Outcomes
            </h2>
            <p className="text-xl text-gray-300">
              Our SaaS Growth Acceleration clients typically achieve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { metric: "25-40%", label: "Reduction in Customer Churn", subtext: "Through predictive intervention" },
              { metric: "34%", label: "MRR Increase", subtext: "From improved activation rates" },
              { metric: "120%+", label: "Net Revenue Retention", subtext: "For premium valuations" },
              { metric: "15-40%", label: "Revenue Growth", subtext: "From AI-powered optimization" },
              { metric: "2x", label: "LTV:CAC Improvement", subtext: "Within 12 months" },
              { metric: "11-17%", label: "Revenue Capture", subtext: "From pricing optimization" },
            ].map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-electric-violet mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-white mb-1">{result.label}</div>
                <div className="text-sm text-gray-400">{result.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Enterprise SaaS Platform</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Reduced churn by 31% using predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Increased activation rate from 35% to 62%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Achieved 127% NRR, up from 98%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Added $2.3M ARR in expansion revenue</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Mid-Market DevOps Tool</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Improved CAC payback from 24 to 14 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Increased feature adoption by 185%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Captured 14% additional revenue through pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Scaled from $8M to $15M ARR in 18 months</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Models */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Investment & Engagement Models
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Choose the program that fits your growth stage and goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Growth Acceleration Program",
                  duration: "6-month comprehensive",
                  features: [
                    "Full-stack implementation",
                    "Dedicated team of experts",
                    "All growth systems included",
                  ],
                  price: "Starting at $25,000/month",
                },
                {
                  title: "Retention Rescue Sprint",
                  duration: "90-day intensive",
                  features: [
                    "Churn reduction focus",
                    "Predictive analytics setup",
                    "Intervention playbooks",
                  ],
                  price: "Starting at $45,000 total",
                },
                {
                  title: "Revenue Expansion Accelerator",
                  duration: "4-month program",
                  features: [
                    "Upsell/cross-sell systems",
                    "Pricing strategy redesign",
                    "Expansion optimization",
                  ],
                  price: "Starting at $18,000/month",
                },
              ].map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-8 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-electric-violet mb-6">{model.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center justify-center">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-electric-violet">{model.price}</div>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                SaaS Metrics?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a SaaS Growth Assessment to receive a comprehensive metrics benchmarking report, 
              revenue opportunity analysis, and custom growth roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/get-started">
                  Schedule Growth Assessment
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                <Link href="/book">
                  Book a Call
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}