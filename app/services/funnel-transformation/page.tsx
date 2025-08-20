"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Funnel, Target, Zap, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function FunnelTransformation() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20 -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Turn Your Funnel Into a{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Revenue Machine
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop losing prospects in broken funnels. Our AI-powered optimization engine transforms 
              every stage of your funnel to maximize conversions and accelerate revenue growth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">
                Diagnose Your Funnel Performance
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Funnel Crisis */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Is Your Funnel Leaking Money?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Most businesses lose 68% of potential revenue through funnel inefficiencies they can't even see.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { percentage: "73%", description: "of visitors never see your best content" },
                { percentage: "67%", description: "of leads are lost to poor timing" },
                { percentage: "54%", description: "of conversions fail due to friction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-red-400 mb-2">{stat.percentage}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Transformation Process */}
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
              From Funnel to Revenue Engine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We rebuild your funnel with intelligence at every stage, creating a self-optimizing 
              system that improves with every interaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                stage: "Stage 1",
                title: "Funnel Architecture",
                subtitle: "Design for Maximum Flow",
                description: "We architect funnels that guide prospects naturally toward conversion, removing friction and amplifying motivation at every step.",
                items: [
                  "Customer psychology mapping",
                  "Friction point identification and removal",
                  "Conversion path optimization",
                  "Multi-channel funnel integration",
                ],
                icon: <Funnel className="text-electric-violet" size={32} />,
              },
              {
                stage: "Stage 2",
                title: "Intelligent Optimization",
                subtitle: "Let AI Find Your Perfect Formula",
                description: "Our AI tests thousands of variations simultaneously, finding the optimal combination of elements that drive conversions.",
                items: [
                  "Automated A/B and multivariate testing",
                  "Dynamic element optimization",
                  "Real-time performance adjustment",
                  "Predictive conversion modeling",
                ],
                icon: <Settings className="text-electric-violet" size={32} />,
              },
              {
                stage: "Stage 3",
                title: "Predictive Lead Scoring",
                subtitle: "Focus on Prospects Ready to Buy",
                description: "Know exactly which leads are most likely to convert and when they're ready to make a decision.",
                items: [
                  "Behavioral scoring algorithms",
                  "Intent signal detection",
                  "Engagement prediction modeling",
                  "Conversion probability calculation",
                ],
                icon: <Target className="text-electric-violet" size={32} />,
              },
              {
                stage: "Stage 4",
                title: "Dynamic Routing",
                subtitle: "Every Lead Gets the Perfect Path",
                description: "Automatically route prospects through personalized funnels based on their behavior, preferences, and likelihood to convert.",
                items: [
                  "Intelligent path selection",
                  "Personalized content delivery",
                  "Optimal timing orchestration",
                  "Channel preference matching",
                ],
                icon: <Zap className="text-electric-violet" size={32} />,
              },
            ].map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{stage.icon}</div>
                  <div>
                    <span className="text-electric-violet text-sm font-semibold">{stage.stage}</span>
                    <h3 className="text-2xl font-semibold text-white mt-1">{stage.title}</h3>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-electric-violet mb-2">{stage.subtitle}</h4>
                <p className="text-gray-300 mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.items.map((item, i) => (
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

      {/* Core Components */}
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
              Your Complete Funnel Transformation Toolkit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Landing Page Optimization",
                subtitle: "Pages That Convert on Contact",
                description: "Every landing page becomes a conversion machine with AI-driven optimization that adapts to visitor behavior.",
                items: [
                  "Dynamic headline testing",
                  "CTA optimization and placement",
                  "Social proof automation",
                  "Form field optimization",
                  "Load speed enhancement",
                ],
              },
              {
                title: "Lead Nurture Automation",
                subtitle: "Nurture Sequences That Close",
                description: "Build relationships that drive revenue with AI-powered nurture campaigns that adapt to each prospect's journey.",
                items: [
                  "Behavioral trigger campaigns",
                  "Dynamic content personalization",
                  "Optimal send time prediction",
                  "Engagement scoring and segmentation",
                  "Multi-channel orchestration",
                ],
              },
              {
                title: "Sales Enablement Integration",
                subtitle: "Seamless Handoff to Sales",
                description: "Ensure hot leads reach sales at the perfect moment with complete context and buying signals.",
                items: [
                  "Lead qualification automation",
                  "Sales alert and routing systems",
                  "Prospect intelligence briefings",
                  "Opportunity scoring models",
                  "Revenue attribution tracking",
                ],
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
                <h3 className="text-xl font-semibold text-white mb-2">{component.title}</h3>
                <h4 className="text-lg font-medium text-electric-violet mb-2">{component.subtitle}</h4>
                <p className="text-gray-300 mb-4">{component.description}</p>
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

      {/* Performance Metrics */}
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
              Transformation That Delivers Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our funnel transformations consistently deliver exceptional improvements across all key metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { metric: "10-50x", label: "ROI on ad spend" },
              { metric: "45%", label: "Average conversion rate increase" },
              { metric: "73%", label: "Improvement in lead quality" },
              { metric: "2.3x", label: "Faster sales cycle" },
            ].map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-400 text-sm">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              Funnel Excellence Across Industries
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                industry: "SaaS & Technology",
                features: [
                  "Free trial to paid conversion optimization",
                  "Product-led growth funnel design",
                  "Expansion revenue maximization",
                  "Churn prediction and prevention",
                ],
                icon: <BarChart3 className="text-electric-violet" size={32} />,
              },
              {
                industry: "Professional Services",
                features: [
                  "Consultation booking optimization",
                  "Proposal win rate improvement",
                  "Client onboarding automation",
                  "Referral funnel activation",
                ],
                icon: <TrendingUp className="text-electric-violet" size={32} />,
              },
            ].map((application, index) => (
              <motion.div
                key={application.industry}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{application.icon}</div>
                  <h3 className="text-2xl font-semibold text-white">{application.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {application.features.map((feature, i) => (
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
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Funnel?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day with a broken funnel costs you customers and revenue. Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Get Your Funnel Audit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources/guides">Calculate Your Funnel ROI</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}