"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Eye, Shield, Zap, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function BrandEvolution() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Build a Brand That Learns, Adapts, and{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Dominates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In markets that change by the minute, static brands die. We create intelligent brand strategies 
              that evolve with your market while maintaining authentic core values.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Link href="/get-started">
                Evolve Your Brand Strategy
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The New Brand Reality */}
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
              Yesterday's Brand Strategy Won't Win Tomorrow's Market
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Markets shift in days. Competitors emerge from nowhere. Customer expectations evolve constantly. 
              Is your brand built to adapt?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "Market Velocity",
                  description: "Trends that took years now happen in weeks",
                  icon: <TrendingUp className="text-electric-violet mb-4" size={32} />,
                },
                {
                  title: "Competitor Emergence",
                  description: "Disruption comes from unexpected places",
                  icon: <Target className="text-electric-violet mb-4" size={32} />,
                },
                {
                  title: "Customer Evolution",
                  description: "Expectations change faster than strategies",
                  icon: <Eye className="text-electric-violet mb-4" size={32} />,
                },
                {
                  title: "Channel Proliferation",
                  description: "New platforms require new approaches",
                  icon: <Zap className="text-electric-violet mb-4" size={32} />,
                },
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-6 text-center"
                >
                  {challenge.icon}
                  <h4 className="text-lg font-semibold text-white mb-2">{challenge.title}</h4>
                  <p className="text-gray-400 text-sm">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Evolutionary Approach */}
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
              Intelligence-Driven Brand Evolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build brands on timeless foundations while giving them the intelligence to 
              adapt and thrive in any market condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                phase: "Foundation Phase",
                title: "Establish Your Unshakeable Core",
                description: "Some things should never change. We identify and strengthen the core elements that make your brand unique and valuable.",
                items: [
                  "Core values and mission crystallization",
                  "Unique value proposition development",
                  "Brand archetype identification",
                  "Positioning strategy framework",
                  "Brand narrative architecture",
                ],
                icon: <Shield className="text-electric-violet" size={32} />,
              },
              {
                phase: "Intelligence Phase",
                title: "Build Your Market Intelligence System",
                description: "Deploy AI-powered monitoring that keeps you ahead of every market shift, competitor move, and customer expectation.",
                items: [
                  "Real-time competitor analysis",
                  "Market trend prediction",
                  "Customer sentiment monitoring",
                  "Cultural moment detection",
                  "Opportunity identification engine",
                ],
                icon: <Brain className="text-electric-violet" size={32} />,
              },
              {
                phase: "Adaptation Phase",
                title: "Dynamic Response Without Losing Identity",
                description: "Adjust your messaging, positioning, and tactics in real-time while maintaining brand consistency and authenticity.",
                items: [
                  "Dynamic messaging matrices",
                  "Contextual brand voice adaptation",
                  "Channel-specific optimization",
                  "Trend response protocols",
                  "Crisis adaptation playbooks",
                ],
                icon: <Target className="text-electric-violet" size={32} />,
              },
              {
                phase: "Amplification Phase",
                title: "Scale Your Brand Impact Exponentially",
                description: "Use AI to amplify your brand presence across every channel while maintaining perfect consistency.",
                items: [
                  "AI-powered creative generation",
                  "Multi-channel brand orchestration",
                  "Influencer and partnership optimization",
                  "Community activation strategies",
                  "Viral moment engineering",
                ],
                icon: <Zap className="text-electric-violet" size={32} />,
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{phase.icon}</div>
                  <div>
                    <span className="text-electric-violet text-sm font-semibold">{phase.phase}</span>
                    <h3 className="text-2xl font-semibold text-white mt-1">{phase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
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

      {/* Deliverables & Components */}
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
              Your Complete Brand Evolution System
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Brand Strategy Framework",
                items: [
                  "Brand positioning document",
                  "Messaging architecture",
                  "Visual identity system",
                  "Brand voice guidelines",
                  "Competitive differentiation strategy",
                ],
              },
              {
                title: "AI-Powered Brand Intelligence",
                items: [
                  "Brand health monitoring dashboard",
                  "Competitor tracking system",
                  "Sentiment analysis platform",
                  "Trend prediction algorithms",
                  "Crisis detection alerts",
                ],
              },
              {
                title: "Brand Management Infrastructure",
                items: [
                  "Brand asset management system",
                  "AI content generation templates",
                  "Approval workflow automation",
                  "Consistency checking tools",
                  "Performance measurement framework",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className="text-electric-violet mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
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
              Brand Evolution That Drives Business Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent brands don't just survive—they dominate their markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { stat: "3x", description: "Improvement in brand recall" },
              { stat: "67%", description: "Increase in share of voice" },
              { stat: "45%", description: "Reduction in creative costs" },
              { stat: "2.5x", description: "Faster market response time" },
            ].map((outcome, index) => (
              <motion.div
                key={outcome.description}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {outcome.stat}
                </div>
                <p className="text-gray-400 text-sm">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Evolution Strategies by Scenario
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                scenario: "Navigating Market Disruption",
                description: "When new competitors or technologies threaten your position, evolve strategically to maintain leadership.",
                strategies: [
                  "Rapid positioning pivots",
                  "Competitive counter-strategies",
                  "Innovation communication",
                  "Market education campaigns",
                ],
                icon: <Shield className="text-electric-violet" size={32} />,
              },
              {
                scenario: "Scaling Brand Impact",
                description: "Amplify your brand presence to match your growth ambitions without losing authenticity.",
                strategies: [
                  "Multi-market expansion",
                  "Audience segment development",
                  "Channel diversification",
                  "Partnership amplification",
                ],
                icon: <TrendingUp className="text-electric-violet" size={32} />,
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.scenario}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.scenario}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.strategies.map((strategy, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>{strategy}</span>
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
              Your Brand's Evolution Starts Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              In fast-moving markets, standing still means falling behind. 
              Let's build a brand that evolves ahead of the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/get-started">
                  Start Your Brand Evolution
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources/guides">Get Competitor Intelligence Report</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}