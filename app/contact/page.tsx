"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MessageSquare, Calendar, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary-blue to-electric-sky bg-clip-text text-transparent">
              Amazing Together
            </span>
          </>
        }
        subtitle="Have a SaaS idea? Questions about our process? We're here to help turn your vision into reality."
      />

      {/* Contact Options */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    How can we help?
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-electric-sky/50 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="new-project">Start a new project</option>
                    <option value="consultation">Request consultation</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="support">Technical support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-sky/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white font-semibold py-3"
                >
                  Send Message
                  <Send className="ml-2" size={16} />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                We'd love to hear from you. Choose the method that works best for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-electric-sky mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:stupefy@saasmagic.ai"
                      className="text-gray-400 hover:text-electric-sky transition-colors"
                    >
                      stupefy@saasmagic.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="text-electric-sky mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Book a Call</h3>
                    <p className="text-gray-400 mb-2">Schedule a free consultation</p>
                    <Link
                      href="/book"
                      className="text-electric-sky hover:text-white transition-colors"
                    >
                      View available times →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="text-electric-sky mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Live Chat</h3>
                    <p className="text-gray-400">Available Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-electric-sky mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-400">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-xl border border-electric-sky/30">
                <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    href="/get-started"
                    className="block text-gray-300 hover:text-electric-sky transition-colors"
                  >
                    → Get a free SaaS roadmap
                  </Link>
                  <Link
                    href="/demo"
                    className="block text-gray-300 hover:text-electric-sky transition-colors"
                  >
                    → Watch a demo
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block text-gray-300 hover:text-electric-sky transition-colors"
                  >
                    → View our work
                  </Link>
                  <Link
                    href="/resources"
                    className="block text-gray-300 hover:text-electric-sky transition-colors"
                  >
                    → Browse resources
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What's the best way to reach you?",
                  a: "Email is best for detailed inquiries, while booking a call is perfect for discussing projects."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We offer a free 30-minute consultation to discuss your project and how we can help."
                },
                {
                  q: "What timezone are you in?",
                  a: "We operate primarily in EST but work with clients globally and adjust to your schedule."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-left"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}