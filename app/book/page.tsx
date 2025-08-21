"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock, Video, CheckCircle, ArrowRight, MessageSquare, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";

// You'll need to replace this with your actual Calendly URL
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-account/15min";

export default function BookPage() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Animated Waves */}
      <HeroSection
        title={
          <>
            Book Your{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              Free SaaS Roadmap Call
            </span>
          </>
        }
        subtitle="Let's discuss how SaaS Magic can transform your business. A relaxed, 15-minute conversation about your goals and opportunities."
      >
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="mr-2 text-electric-violet" size={16} />
                15 minutes
              </div>
              <div className="flex items-center">
                <Video className="mr-2 text-electric-violet" size={16} />
                Video call
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 text-electric-violet" size={16} />
                Book instantly
              </div>
            </div>
      </HeroSection>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Booking Widget */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-darker rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Select a Time That Works for You</h2>
                
                {/* Calendly Inline Widget */}
                <div className="calendly-inline-widget" 
                     data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a0f2e&text_color=ffffff&primary_color=8b5cf6`}
                     style={{ minWidth: '320px', height: '630px' }}>
                  {!isCalendlyLoaded && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-violet mx-auto mb-4"></div>
                        <p className="text-gray-400">Loading calendar...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Fallback Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">Having trouble viewing the calendar?</p>
                  <a 
                    href={CALENDLY_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-electric-violet hover:text-primary-purple transition-colors text-sm"
                  >
                    Open calendar in new window →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-6">
              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <MessageSquare className="mr-2 text-electric-violet" size={20} />
                  What We'll Discuss
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Your current marketing challenges and goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>How AI can specifically help your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Our approach and success stories</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Next steps and timeline</span>
                  </li>
                </ul>
              </motion.div>

              {/* No Pressure */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="mr-2 text-electric-violet" size={20} />
                  No Pressure, Just Value
                </h3>
                <p className="text-gray-300 mb-4">
                  This isn't a sales call. It's a conversation about your business and how AI 
                  can help you grow. If we're not the right fit, we'll point you in the right direction.
                </p>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>✓ No obligation to proceed</p>
                  <p>✓ Honest recommendations</p>
                  <p>✓ Actionable insights you can use</p>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Zap className="mr-2 text-electric-violet" size={20} />
                  Why Companies Choose Us
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-electric-violet">2,847%</div>
                    <p className="text-sm text-gray-400">Average ROI improvement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-electric-violet">150+</div>
                    <p className="text-sm text-gray-400">Companies transformed</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-electric-violet">30-50%</div>
                    <p className="text-sm text-gray-400">Higher conversion rates</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "What should I prepare for the call?",
                  answer: "Nothing specific is required, but it helps to think about your current marketing challenges and growth goals. We'll guide the conversation."
                },
                {
                  question: "Who will I be speaking with?",
                  answer: "You'll speak with one of our AI marketing strategists who has experience helping businesses in your industry."
                },
                {
                  question: "What if I need to reschedule?",
                  answer: "No problem! You'll receive a confirmation email with a link to reschedule at any time."
                },
                {
                  question: "Is this really free?",
                  answer: "Yes, completely free with no strings attached. We believe in providing value first."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to Get in Touch Another Way?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help however works best for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/get-started">
                  Fill Out a Form Instead
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="mailto:stupefy@saasmagic.ai">
                  Email Us Directly
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}