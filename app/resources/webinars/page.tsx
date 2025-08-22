"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, Calendar, Clock, Users, PlayCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function WebinarsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Free{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              SaaS Webinars
            </span>
          </>
        }
        subtitle="Learn from expert-led sessions on building, launching, and scaling successful SaaS products."
      />

      {/* Upcoming Webinars */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Upcoming Webinars</h2>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "From Idea to MVP in 4 Weeks",
                  date: "February 15, 2025",
                  time: "2:00 PM EST",
                  duration: "60 min",
                  attendees: 247,
                  description: "Learn our proven framework for rapidly validating and building your MVP without breaking the bank.",
                  topics: ["Idea validation", "Tech stack selection", "MVP development", "Launch strategies"]
                },
                {
                  title: "AI-Powered SaaS: The Future is Now",
                  date: "February 22, 2025",
                  time: "3:00 PM EST",
                  duration: "45 min",
                  attendees: 189,
                  description: "Discover how to integrate AI into your SaaS product to deliver 10x more value to your customers.",
                  topics: ["AI integration", "LLM implementation", "Cost optimization", "Use case examples"]
                }
              ].map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-xl p-8 border border-electric-sky/30"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{webinar.title}</h3>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Live
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{webinar.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="mr-2" size={16} />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="mr-2" size={16} />
                      {webinar.time}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Video className="mr-2" size={16} />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="mr-2" size={16} />
                      {webinar.attendees} registered
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-white font-medium mb-2">What you'll learn:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {webinar.topics.map((topic, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-electric-sky rounded-full mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
                  >
                    <Link href="/todo">
                      <Bell className="mr-2" size={16} />
                      Register Now - Free
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Past Webinar Recordings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SaaS Pricing Strategies That Convert",
                  duration: "52 min",
                  views: "3.2K",
                  date: "January 28, 2025"
                },
                {
                  title: "Building a Sales Funnel That Converts",
                  duration: "48 min",
                  views: "2.8K",
                  date: "January 21, 2025"
                },
                {
                  title: "Customer Retention Secrets",
                  duration: "45 min",
                  views: "2.5K",
                  date: "January 14, 2025"
                },
                {
                  title: "Zero to $10K MRR Roadmap",
                  duration: "58 min",
                  views: "4.1K",
                  date: "January 7, 2025"
                },
                {
                  title: "Product-Market Fit Framework",
                  duration: "41 min",
                  views: "1.9K",
                  date: "December 21, 2024"
                },
                {
                  title: "SaaS Marketing on a Budget",
                  duration: "50 min",
                  views: "3.7K",
                  date: "December 14, 2024"
                }
              ].map((recording, index) => (
                <motion.div
                  key={recording.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric-sky/30 transition-all cursor-pointer group"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-primary-blue/20 to-electric-sky/20 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
                    <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {recording.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">{recording.title}</h3>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>{recording.views} views</span>
                      <span>{recording.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View All Recordings
              </Button>
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
            className="text-center max-w-3xl mx-auto"
          >
            <Video className="w-16 h-16 text-electric-sky mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about upcoming webinars and receive exclusive resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50"
              />
              <Button className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Join 5,000+ SaaS founders and builders
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}