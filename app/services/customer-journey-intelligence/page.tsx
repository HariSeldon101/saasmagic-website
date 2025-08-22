"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Brain, Target, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";

export default function CustomerJourneyIntelligence() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <PageHero
        title={
          <>
            See the Future of Every{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              Customer Journey
            </span>
          </>
        }
        subtitle="Predict, personalize, and perfect every interaction with AI-powered journey intelligence that transforms how you understand and engage customers."
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          <Link href="/get-started">
            Map Your Revenue Journey
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </PageHero>

      {/* The Journey Revolution */}
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
              Modern Customers Don't Follow Linear Paths
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Today's customers interact with brands across 10+ touchpoints, jumping between channels, 
              devices, and decision stages. Traditional journey mapping can't keep up.
            </p>

            <div className="glass rounded-xl p-8 glass-hover">
              <h3 className="text-2xl font-semibold text-white mb-6">
                The Challenge with Traditional Journey Mapping
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span>Static maps that become outdated immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span>Can't predict customer behavior or prevent drop-offs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span>Missing critical micro-moments that influence decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span>No real-time optimization capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span>Siloed data creates incomplete pictures</span>
                </li>
              </ul>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Dynamic Journey Intelligence That Evolves With Your Customers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine advanced AI with strategic expertise to create living journey maps 
              that predict, adapt, and optimize in real-time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Data Unification",
                subtitle: "Uncover Your Complete Customer Story",
                description: "We begin by unifying all your customer data sources to create a single, comprehensive view of every interaction.",
                items: [
                  "Data audit and integration across all touchpoints",
                  "Historical journey analysis and pattern recognition",
                  "Behavioral cohort identification",
                  "Pain point and opportunity mapping",
                ],
                icon: <Brain className="text-electric-violet" size={32} />,
              },
              {
                phase: "Phase 2",
                title: "AI-Powered Journey Mapping",
                subtitle: "Build Intelligence Into Every Path",
                description: "Using machine learning, we create dynamic journey maps that adapt based on real-time behavior and predictive insights.",
                items: [
                  "Multi-path journey visualization",
                  "Predictive next-best-action modeling",
                  "Emotion and intent detection at each stage",
                  "Cross-channel journey orchestration",
                ],
                icon: <Target className="text-electric-violet" size={32} />,
              },
              {
                phase: "Phase 3",
                title: "Predictive Optimization",
                subtitle: "See Problems Before They Happen",
                description: "Our AI identifies potential drop-off points and optimization opportunities before they impact your revenue.",
                items: [
                  "Churn prediction and prevention",
                  "Conversion probability scoring",
                  "Journey bottleneck identification",
                  "Automated intervention triggers",
                ],
                icon: <TrendingUp className="text-electric-violet" size={32} />,
              },
              {
                phase: "Phase 4",
                title: "Real-Time Personalization",
                subtitle: "Deliver the Right Experience, Every Time",
                description: "Automatically adjust messaging, offers, and experiences based on where each customer is in their unique journey.",
                items: [
                  "Dynamic content personalization",
                  "Contextual offer optimization",
                  "Channel preference adaptation",
                  "Timing and frequency optimization",
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
                <h4 className="text-lg font-medium text-electric-violet mb-2">{phase.subtitle}</h4>
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

      {/* What's Included */}
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
              Your Complete Journey Intelligence Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Strategic Foundation",
                items: [
                  "Comprehensive journey audit and assessment",
                  "Customer persona development with AI insights",
                  "Journey strategy and optimization roadmap",
                  "Competitive journey benchmarking",
                ],
              },
              {
                title: "Technology Implementation",
                items: [
                  "AI-powered journey analytics platform setup",
                  "Real-time personalization engine deployment",
                  "Predictive scoring model development",
                  "Cross-channel orchestration system",
                ],
              },
              {
                title: "Ongoing Optimization",
                items: [
                  "Monthly journey performance reviews",
                  "Continuous AI model training and improvement",
                  "A/B testing and experimentation programs",
                  "Quarterly strategy adjustments",
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

      {/* Expected Outcomes */}
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
              Transform Your Customer Experience Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients typically see dramatic improvements across all journey KPIs within the first 90 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { metric: "34%", label: "Average increase in conversion rates" },
              { metric: "52%", label: "Reduction in customer acquisition costs" },
              { metric: "2.7x", label: "Improvement in customer lifetime value" },
              { metric: "41%", label: "Decrease in journey abandonment" },
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

      {/* Use Cases */}
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
              Journey Intelligence in Action
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                industry: "E-commerce & Retail",
                description: "Reduce cart abandonment, increase average order value, and create loyal customers with journeys that anticipate needs.",
                features: [
                  "Predictive product recommendations",
                  "Abandoned cart recovery optimization",
                  "Post-purchase engagement automation",
                  "Loyalty journey orchestration",
                ],
                icon: <Users className="text-electric-violet" size={32} />,
              },
              {
                industry: "B2B & SaaS",
                description: "Accelerate pipeline velocity and improve win rates with intelligence that guides prospects to success.",
                features: [
                  "Lead scoring and routing optimization",
                  "Account-based journey orchestration",
                  "Trial-to-paid conversion optimization",
                  "Expansion revenue identification",
                ],
                icon: <BarChart3 className="text-electric-violet" size={32} />,
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
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
              Your Journey Transformation Begins Here
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day without journey intelligence is revenue left on the table. 
              Let's map your path to exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/get-started">
                  Start Your Journey Transformation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources/guides">Download Journey Intelligence Guide</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}