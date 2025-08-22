"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cookie, Shield, Settings, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function CookiesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title="Cookie Policy"
        subtitle="We use cookies to enhance your experience. Here's how we handle your data with transparency and respect for your privacy."
      />

      {/* Cookie Information */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* What Are Cookies */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Cookie className="text-electric-sky mr-3" size={32} />
                <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Shield className="text-electric-sky" size={24} />,
                    title: "Essential Cookies",
                    description: "Required for the website to function properly. These cannot be disabled.",
                    examples: ["Session management", "Security tokens", "Load balancing"]
                  },
                  {
                    icon: <Settings className="text-electric-sky" size={24} />,
                    title: "Functional Cookies",
                    description: "Remember your preferences and personalize your experience.",
                    examples: ["Language preferences", "Region settings", "User interface choices"]
                  },
                  {
                    icon: <Info className="text-electric-sky" size={24} />,
                    title: "Analytics Cookies",
                    description: "Help us understand how visitors interact with our website.",
                    examples: ["Google Analytics", "Page view tracking", "User journey analysis"]
                  }
                ].map((category) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-start mb-3">
                      <div className="mr-3 mt-1">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                        <p className="text-gray-300 mb-3">{category.description}</p>
                        <ul className="space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-electric-sky rounded-full mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You have control over the cookies we use. You can manage your preferences through your 
                browser settings or by using our cookie management tool. Note that disabling certain 
                cookies may impact your experience on our website.
              </p>
              <div className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-xl p-6 border border-electric-sky/30">
                <h3 className="text-xl font-semibold text-white mb-3">Browser Cookie Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings. Here's how to 
                  manage cookies in popular browsers:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Chrome: Settings → Privacy and security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>• Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>• Edge: Settings → Privacy, search, and services → Cookies</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300">
                We may use services from third-party providers who may set their own cookies. These 
                include analytics services, advertising networks, and social media platforms. We do not 
                control these third-party cookies and recommend reviewing their respective privacy policies.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. The date of the last update will 
                be shown at the top of this page.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-blue/10 to-electric-sky/10 rounded-xl p-8 border border-electric-sky/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this policy, please don't hesitate 
                to contact us.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-primary-blue to-deep-blue hover:from-deep-blue hover:to-primary-blue text-white"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            {/* Last Updated */}
            <p className="text-center text-gray-500 text-sm mt-8">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}