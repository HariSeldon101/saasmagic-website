"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle, TrendingUp, Zap, Brain, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic import with no SSR to prevent hydration issues
const SplineBackground = dynamic(
  () => import("@/components/spline-background"),
  { 
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-electric-violet/10 to-midnight-black animate-pulse" />
    ),
  }
);

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-black via-primary-purple/10 to-dark-space">
          {/* Spline 3D Background */}
          <SplineBackground />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-black/60 via-transparent to-midnight-black/80 pointer-events-none" />
        </div>
        
        {/* Centered Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Where Marketing Strategy Meets{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              We amplify your marketing with AI, but lead with strategy and human insight. 
              Transform your growth trajectory with intelligence that understands your business.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Get Your AI Readiness Assessment
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
              >
                <Link href="/case-studies">Explore Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Challenge */}
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
              Your Competition is Already Using AI.{" "}
              <span className="text-electric-violet">But Are They Using It Right?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">The AI Tool Trap</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Agencies hand you tools and disappear
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Generic automation that sounds robotic
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Dashboards without strategic direction
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  AI for AI's sake, not business growth
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">The Human+AI Advantage</h3>
              <p className="text-gray-300">
                True transformation happens when AI amplifies human expertise, not replaces it. 
                We bridge the gap between cutting-edge technology and timeless marketing strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Measurable Transformation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5" size={16} />
                  30-50% increase in conversion rates
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5" size={16} />
                  60% reduction in acquisition costs
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5" size={16} />
                  10x faster campaign optimization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5" size={16} />
                  2-3x improvement in customer lifetime value
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
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
              AI-Amplified Marketing Services That Drive Real Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service combines deep strategic thinking with advanced AI capabilities to deliver transformational results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Customer Journey Intelligence",
                description: "Predict, personalize, and perfect every interaction with AI-powered journey intelligence.",
                icon: <Target className="text-electric-violet" size={32} />,
                href: "/services/customer-journey-intelligence",
              },
              {
                title: "Funnel Transformation",
                description: "Turn your funnel into a revenue machine with AI-powered optimization at every stage.",
                icon: <TrendingUp className="text-electric-violet" size={32} />,
                href: "/services/funnel-transformation",
              },
              {
                title: "Brand Evolution",
                description: "Build a brand that learns, adapts, and dominates with intelligent brand strategy.",
                icon: <Shield className="text-electric-violet" size={32} />,
                href: "/services/brand-evolution",
              },
              {
                title: "AI SEO & Content",
                description: "Dominate Google, ChatGPT, and voice search with next-generation SEO strategies.",
                icon: <Brain className="text-electric-violet" size={32} />,
                href: "/services/ai-seo-content",
              },
              {
                title: "Hyper-Personalization",
                description: "Deliver perfectly personalized experiences to millions simultaneously with AI.",
                icon: <Zap className="text-electric-violet" size={32} />,
                href: "/services/hyper-personalization",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-violet/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <div className="mt-4 text-electric-violet flex items-center">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach */}
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
              Strategy First, Intelligence Always
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Strategic Foundation",
                description: "We start with your business goals and market position, not the latest AI trend. Technology serves strategy, never the reverse.",
              },
              {
                title: "Transparent Intelligence",
                description: "You own your data, understand your metrics, and control your growth. No black boxes, no mysterious algorithms—just clear, actionable intelligence.",
              },
              {
                title: "Continuous Evolution",
                description: "Your AI learns and improves every day, and so does your marketing. We build systems that get smarter with every interaction.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 backdrop-blur-sm rounded-xl p-8 border border-electric-violet/30">
                  <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-300">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Results That Matter */}
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
              Transformations, Not Just Improvements
            </h2>
            <p className="text-xl text-gray-300">
              See how we've helped companies leverage AI to achieve extraordinary growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { metric: "2,847%", label: "Average ROI Improvement" },
              { metric: "$47M+", label: "Revenue Generated for Clients" },
              { metric: "3.2M+", label: "Leads Generated with AI" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-4">
                  {stat.metric}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Get Started */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how AI can amplify your growth with a personalized strategy session.
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}