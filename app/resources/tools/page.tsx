"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Download, ExternalLink, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function ToolsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Free{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              SaaS Tools
            </span>
          </>
        }
        subtitle="Essential calculators, templates, and resources to accelerate your SaaS journey."
      />

      {/* Tools Grid */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-electric-sky" size={32} />,
                title: "SaaS Metrics Calculator",
                description: "Calculate MRR, CAC, LTV, and other critical SaaS metrics instantly.",
                badge: "Most Popular",
                action: "Calculate Now"
              },
              {
                icon: <Zap className="text-electric-sky" size={32} />,
                title: "MVP Feature Prioritizer",
                description: "Score and prioritize features for your MVP using our proven framework.",
                badge: "AI-Powered",
                action: "Start Prioritizing"
              },
              {
                icon: <Star className="text-electric-sky" size={32} />,
                title: "Pricing Strategy Generator",
                description: "Generate optimal pricing tiers based on your market and competitors.",
                badge: null,
                action: "Generate Pricing"
              },
              {
                icon: <Wrench className="text-electric-sky" size={32} />,
                title: "Tech Stack Builder",
                description: "Get personalized tech stack recommendations for your SaaS.",
                badge: "New",
                action: "Build Stack"
              },
              {
                icon: <Download className="text-electric-sky" size={32} />,
                title: "Pitch Deck Template",
                description: "Professional pitch deck template used by funded startups.",
                badge: null,
                action: "Download Template"
              },
              {
                icon: <ExternalLink className="text-electric-sky" size={32} />,
                title: "Launch Checklist",
                description: "Comprehensive 127-point checklist for your SaaS launch.",
                badge: null,
                action: "Get Checklist"
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-sky/30 transition-all group"
              >
                {tool.badge && (
                  <span className="absolute top-4 right-4 bg-electric-sky/20 text-electric-sky px-2 py-1 rounded-full text-xs">
                    {tool.badge}
                  </span>
                )}
                
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-400 mb-6">{tool.description}</p>
                
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-blue/80 to-deep-blue/80 hover:from-primary-blue hover:to-deep-blue text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all"
                >
                  <Link href="/todo">
                    {tool.action}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Downloadable Templates & Resources
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-2xl p-8 border border-electric-sky/30">
                <div className="grid gap-4">
                  {[
                    { name: "Business Model Canvas", format: "PDF", size: "2.3 MB" },
                    { name: "Financial Model Template", format: "XLSX", size: "1.8 MB" },
                    { name: "User Persona Templates", format: "PDF", size: "892 KB" },
                    { name: "Customer Journey Map", format: "PDF", size: "1.2 MB" },
                    { name: "OKR Planning Template", format: "XLSX", size: "456 KB" },
                    { name: "Product Roadmap Template", format: "PDF", size: "1.5 MB" }
                  ].map((template) => (
                    <div
                      key={template.name}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <Download className="text-electric-sky" size={20} />
                        <div>
                          <p className="text-white font-medium">{template.name}</p>
                          <p className="text-gray-500 text-sm">
                            {template.format} • {template.size}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-electric-sky hover:text-white"
                      >
                        <Link href="/todo">
                          Download
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
                  >
                    <Link href="/todo">
                      <Download className="mr-2" size={20} />
                      Download All Templates (ZIP)
                    </Link>
                  </Button>
                  <p className="text-gray-500 text-sm mt-3">
                    No email required • Instant download
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              More Tools Coming Soon
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly building new tools to help you succeed. Have a suggestion? Let us know!
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/contact">
                Suggest a Tool
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}