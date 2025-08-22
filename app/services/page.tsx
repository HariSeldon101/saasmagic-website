"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Shield, Brain, Zap, Rocket } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

const services = [
  {
    title: "Customer Journey Intelligence",
    description: "See the future of every customer journey. Predict, personalize, and perfect every interaction with AI-powered journey intelligence that transforms how you understand and engage customers.",
    icon: <Target className="text-electric-violet" size={48} />,
    href: "/services/customer-journey-intelligence",
    benefits: [
      "34% average increase in conversion rates",
      "52% reduction in acquisition costs",
      "2.7x improvement in customer lifetime value",
    ],
  },
  {
    title: "Funnel Transformation Engine",
    description: "Turn your funnel into a revenue machine. Stop losing prospects in broken funnels with AI-powered optimization that transforms every stage to maximize conversions and accelerate revenue growth.",
    icon: <TrendingUp className="text-electric-violet" size={48} />,
    href: "/services/funnel-transformation",
    benefits: [
      "10-50x ROI on ad spend",
      "45% conversion rate increase",
      "73% improvement in lead quality",
    ],
  },
  {
    title: "Brand Evolution",
    description: "Build a brand that learns, adapts, and dominates. Create intelligent brand strategies that evolve with your market while maintaining authentic core values.",
    icon: <Shield className="text-electric-violet" size={48} />,
    href: "/services/brand-evolution",
    benefits: [
      "3x improvement in brand recall",
      "67% increase in share of voice",
      "2.5x faster market response",
    ],
  },
  {
    title: "AI SEO & Content Dominance",
    description: "Rank everywhere humans and AI search. Dominate Google, ChatGPT, and voice search with next-generation SEO that's built for the future of search.",
    icon: <Brain className="text-electric-violet" size={48} />,
    href: "/services/ai-seo-content",
    benefits: [
      "200-2,400% increase in organic traffic",
      "Top 3 rankings for target keywords",
      "85% of content ranking in AI responses",
    ],
  },
  {
    title: "Hyper-Personalization Suite",
    description: "Marketing that knows every customer personally. Deliver perfectly personalized experiences to millions simultaneously with AI-powered personalization at scale.",
    icon: <Zap className="text-electric-violet" size={48} />,
    href: "/services/hyper-personalization",
    benefits: [
      "47% increase in customer lifetime value",
      "34% improvement in conversion rates",
      "71% reduction in cart abandonment",
    ],
  },
  {
    title: "SaaS Growth Acceleration",
    description: "Transform your SaaS metrics with AI-powered revenue optimization. Achieve 120%+ net revenue retention, reduce churn by 25-40%, and capture 11-30% additional revenue through strategic optimization.",
    icon: <Rocket className="text-electric-violet" size={48} />,
    href: "/services/saas-growth-acceleration",
    benefits: [
      "25-40% reduction in customer churn",
      "120%+ net revenue retention",
      "11-30% additional revenue captured",
    ],
  },
];

export default function Services() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Waves */}
      <HeroSection
        title={
          <>
            AI-Amplified Marketing Services That{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              Drive Real Growth
            </span>
          </>
        }
        subtitle="Each service combines deep strategic thinking with advanced AI capabilities to deliver transformational results. Choose the perfect solution for your growth goals."
      />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-4">
                      <div className="mr-6">{service.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-electric-violet hover:text-primary-purple transition-colors mt-4"
                    >
                      Learn More About {service.title.split(" ").slice(0, 2).join(" ")}
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 rounded-xl p-6 border border-electric-violet/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Expected Results</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-green-400 mr-2 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss which services align best with your growth goals and create a custom strategy for your success.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Get Your Custom AI Strategy
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}