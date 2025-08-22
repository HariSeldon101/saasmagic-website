"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Download, ChevronRight, Star, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function PlaybookPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              SaaS Playbook
            </span>
          </>
        }
        subtitle="Your complete guide to building, launching, and scaling a successful SaaS product in record time."
      />

      {/* Playbook Overview */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Everything You Need to Build a Winning SaaS
                </h2>
                <p className="text-gray-300 mb-6">
                  Our comprehensive playbook distills years of experience building successful SaaS products 
                  into actionable frameworks, templates, and strategies you can implement immediately.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Star className="text-electric-sky mr-3 flex-shrink-0" size={20} />
                    <span>50+ proven templates and frameworks</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Star className="text-electric-sky mr-3 flex-shrink-0" size={20} />
                    <span>Real case studies from successful launches</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Star className="text-electric-sky mr-3 flex-shrink-0" size={20} />
                    <span>Step-by-step implementation guides</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Star className="text-electric-sky mr-3 flex-shrink-0" size={20} />
                    <span>Updated quarterly with latest strategies</span>
                  </div>
                </div>
                <Button
                  className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
                >
                  <Download className="mr-2" size={16} />
                  Download Free Sample
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue/20 to-electric-sky/20 rounded-2xl p-8 border border-electric-sky/30">
                  <BookOpen className="w-20 h-20 text-electric-sky mx-auto mb-6" />
                  <div className="text-center">
                    <p className="text-5xl font-bold text-white mb-2">200+</p>
                    <p className="text-gray-300">Pages of Actionable Content</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chapters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">What's Inside</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    chapter: "1",
                    title: "Idea Validation",
                    topics: ["Market research frameworks", "Customer interview templates", "MVP planning guides"]
                  },
                  {
                    chapter: "2",
                    title: "Product Strategy",
                    topics: ["Feature prioritization matrix", "Roadmap templates", "Technical architecture guides"]
                  },
                  {
                    chapter: "3",
                    title: "Development Sprint",
                    topics: ["8-week launch timeline", "Agile frameworks", "Quality assurance checklists"]
                  },
                  {
                    chapter: "4",
                    title: "Go-to-Market",
                    topics: ["Launch strategies", "Pricing models", "Marketing automation setup"]
                  },
                  {
                    chapter: "5",
                    title: "Growth & Scale",
                    topics: ["Customer acquisition funnels", "Retention strategies", "Team building guides"]
                  },
                  {
                    chapter: "6",
                    title: "Operations",
                    topics: ["SaaS metrics dashboard", "Financial models", "Investor pitch templates"]
                  }
                ].map((chapter) => (
                  <motion.div
                    key={chapter.chapter}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-sky/30 transition-all"
                  >
                    <div className="flex items-start mb-3">
                      <span className="text-3xl font-bold text-electric-sky mr-3">{chapter.chapter}</span>
                      <h4 className="text-xl font-semibold text-white flex-1">{chapter.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {chapter.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-400 text-sm">
                          <ChevronRight className="mr-2 text-electric-sky/50" size={14} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-2xl p-12 border border-electric-sky/30">
                <Zap className="w-16 h-16 text-electric-sky mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Get Your Free SaaS Playbook
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of founders who've used our playbook to launch successful SaaS products. 
                  Get instant access to all templates, frameworks, and guides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
                  >
                    <FileText className="mr-2" size={20} />
                    Get Full Playbook
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href="/get-started">
                      Start Your Journey
                      <ChevronRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}