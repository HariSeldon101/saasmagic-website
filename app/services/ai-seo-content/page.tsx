"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Mic, Globe, Bot, Zap, BarChart3, FileText, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/page-wrapper";

export default function AISeOContent() {
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
              Rank Everywhere{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Humans and AI Search
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The search landscape has exploded beyond Google. Dominate traditional search, AI assistants, 
              and voice queries with SEO that's built for the future.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">
                Get Your AI SEO Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Search Revolution */}
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
              Search Has Changed. Has Your SEO?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              47% of searches now happen outside traditional search engines. If you're only optimizing for Google, 
              you're invisible to half your audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  platform: "AI Assistants",
                  examples: "ChatGPT, Claude, Perplexity",
                  percentage: "32% of queries",
                  icon: <Bot className="text-electric-violet mb-4" size={40} />,
                },
                {
                  platform: "Voice Search",
                  examples: "Alexa, Siri, Google Assistant",
                  percentage: "27% of queries",
                  icon: <Mic className="text-electric-violet mb-4" size={40} />,
                },
                {
                  platform: "Social Platforms",
                  examples: "TikTok, Instagram, YouTube",
                  percentage: "41% of Gen Z searches",
                  icon: <Globe className="text-electric-violet mb-4" size={40} />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-purple rounded-xl p-6 text-center"
                >
                  {stat.icon}
                  <h4 className="text-xl font-semibold text-white mb-2">{stat.platform}</h4>
                  <p className="text-gray-400 text-sm mb-2">{stat.examples}</p>
                  <div className="text-2xl font-bold text-electric-violet">{stat.percentage}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Omni-Search Strategy */}
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
              One Strategy. Everywhere Visibility.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We optimize for every platform where your customers search, ensuring you're the answer 
              no matter how they ask.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                strategy: "Traditional SEO Excellence",
                title: "Dominate Traditional Search",
                description: "Master the fundamentals while leveraging AI to outpace competitors in Google and Bing.",
                items: [
                  "Technical SEO perfection",
                  "AI-powered keyword research",
                  "Semantic content optimization",
                  "Authority building at scale",
                  "Core Web Vitals optimization",
                ],
                icon: <Search className="text-electric-violet" size={32} />,
              },
              {
                strategy: "Answer Engine Optimization (AEO)",
                title: "Become the AI's Preferred Source",
                description: "Optimize content to be cited by ChatGPT, Perplexity, and other AI assistants when they answer questions.",
                items: [
                  "Structured data implementation",
                  "Q&A content formatting",
                  "Fact-based content optimization",
                  "Entity relationship mapping",
                  "AI citation optimization",
                ],
                icon: <Bot className="text-electric-violet" size={32} />,
              },
              {
                strategy: "Voice Search Optimization",
                title: "Win Conversational Queries",
                description: "Capture voice searches with content optimized for natural language and conversational intent.",
                items: [
                  "Conversational keyword targeting",
                  "Featured snippet optimization",
                  "Local voice search optimization",
                  "FAQ schema implementation",
                  "Natural language processing",
                ],
                icon: <Mic className="text-electric-violet" size={32} />,
              },
              {
                strategy: "Content Velocity Engine",
                title: "Scale Quality Content with AI",
                description: "Produce exceptional content at unprecedented scale without sacrificing quality or authenticity.",
                items: [
                  "AI-assisted content creation",
                  "Topic cluster development",
                  "Content gap analysis",
                  "Automated content optimization",
                  "Multi-format content generation",
                ],
                icon: <Zap className="text-electric-violet" size={32} />,
              },
            ].map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{strategy.icon}</div>
                  <div>
                    <span className="text-electric-violet text-sm font-semibold">{strategy.strategy}</span>
                    <h3 className="text-2xl font-semibold text-white mt-1">{strategy.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.items.map((item, i) => (
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

      {/* Service Components */}
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
              Comprehensive SEO & Content Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Technical SEO Excellence",
                items: [
                  "Complete technical audit and optimization",
                  "Site architecture enhancement",
                  "Page speed optimization",
                  "Mobile-first implementation",
                  "Structured data deployment",
                  "Crawlability and indexation fixes",
                ],
                icon: <Search className="text-electric-violet mb-4" size={24} />,
              },
              {
                title: "Strategic Content Development",
                items: [
                  "AI-powered content strategy",
                  "20-50 optimized pieces monthly",
                  "Topic authority building",
                  "Content refresh and optimization",
                  "Multi-format content creation",
                  "Editorial calendar management",
                ],
                icon: <FileText className="text-electric-violet mb-4" size={24} />,
              },
              {
                title: "Authority Building at Scale",
                items: [
                  "High-authority link acquisition",
                  "Digital PR campaigns",
                  "Brand mention optimization",
                  "Partnership content programs",
                  "HARO and journalist outreach",
                  "Competitor link gap analysis",
                ],
                icon: <Link2 className="text-electric-violet mb-4" size={24} />,
              },
              {
                title: "Multi-Platform Visibility Tracking",
                items: [
                  "Traditional SERP monitoring",
                  "AI search visibility tracking",
                  "Voice search performance",
                  "Social search analytics",
                  "Competitor benchmarking",
                  "ROI and conversion tracking",
                ],
                icon: <BarChart3 className="text-electric-violet mb-4" size={24} />,
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
                <h3 className="text-lg font-semibold text-white mb-4">{component.title}</h3>
                <ul className="space-y-2">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <CheckCircle className="text-electric-violet mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
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
              SEO Performance That Transforms Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our omni-search approach delivers visibility and traffic from every search platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { metric: "200-2,400%", label: "Increase in organic traffic" },
              { metric: "Top 3", label: "Rankings for target keywords" },
              { metric: "85%", label: "Of content ranking in AI responses" },
              { metric: "50+", label: "High-authority links monthly" },
            ].map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-400 text-sm">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              SEO Strategies for Every Industry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                industry: "E-commerce SEO",
                features: [
                  "Product page optimization at scale",
                  "Category page authority building",
                  "Shopping feed optimization",
                  "Review schema implementation",
                ],
              },
              {
                industry: "B2B & SaaS SEO",
                features: [
                  "Solution page optimization",
                  "Comparison content development",
                  "Technical documentation SEO",
                  "Thought leadership content",
                ],
              },
              {
                industry: "Local SEO Dominance",
                features: [
                  "Google Business Profile optimization",
                  "Local citation building",
                  "Geo-targeted content creation",
                  "Review generation and management",
                ],
              },
            ].map((application, index) => (
              <motion.div
                key={application.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 glass-hover"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{application.industry}</h3>
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
              Claim Your Search Territory
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day you're not optimizing for AI search is visibility lost to competitors. 
              Let's change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Get Your Omni-Search Audit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources/guides">Download AI SEO Playbook</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}