"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20 -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is fundamental to our relationship. This policy explains how we collect, 
              use, and protect your information when you use our services.
            </p>
            <p className="text-gray-400">
              <strong>Last updated:</strong> January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
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
              Our Privacy Commitment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe privacy is a right, not a privilege. Here's how we protect yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Shield className="text-electric-violet" size={32} />,
                title: "Data Protection",
                description: "Your data is encrypted, secure, and never sold to third parties."
              },
              {
                icon: <Eye className="text-electric-violet" size={32} />,
                title: "Transparency",
                description: "We're clear about what we collect and how we use your information."
              },
              {
                icon: <Users className="text-electric-violet" size={32} />,
                title: "Your Control",
                description: "You can access, modify, or delete your data at any time."
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Privacy Content */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-12">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="text-electric-violet mr-3" size={32} />
                  Information We Collect
                </h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Information You Provide</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Company information (name, website, industry)</li>
                      <li>Business details (revenue, team size, marketing challenges)</li>
                      <li>Communications with our team</li>
                      <li>Payment and billing information</li>
                      <li>Feedback, reviews, and survey responses</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Information We Collect Automatically</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Website usage data (pages visited, time spent, interactions)</li>
                      <li>Device information (browser, operating system, screen resolution)</li>
                      <li>IP address and location data</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Marketing campaign performance data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lock className="text-electric-violet mr-3" size={32} />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>To Provide Our Services:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Conduct AI marketing assessments and strategy sessions</li>
                    <li>Develop and implement marketing campaigns</li>
                    <li>Provide customer support and account management</li>
                    <li>Process payments and manage billing</li>
                  </ul>
                  
                  <p><strong>To Improve Our Services:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Analyze website usage and optimize user experience</li>
                    <li>Develop new features and services</li>
                    <li>Train our AI models (with anonymized data only)</li>
                    <li>Conduct research and analytics</li>
                  </ul>
                  
                  <p><strong>To Communicate With You:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Send service updates and important notifications</li>
                    <li>Provide marketing insights and educational content</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Send promotional emails (with your consent)</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Information Sharing</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>We do not sell your personal information.</strong> We may share your information only in these specific circumstances:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Service Providers:</strong> Trusted partners who help us deliver services (email platforms, analytics tools, payment processors)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of business assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We implement industry-standard security measures to protect your information:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>AES-256 encryption for data at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication for team access</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>Regular employee security training</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Object:</strong> Object to certain types of data processing</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:stupefy@saasmagic.ai?subject=Please%20tell%20me%20more%20about%20SaaS%20Magic" className="text-electric-violet hover:underline">
                      stupefy@saasmagic.ai
                    </a>
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website performance and user behavior</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Measure the effectiveness of our marketing campaigns</li>
                  </ul>
                  <p>
                    You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We retain your information for as long as necessary to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Provide ongoing services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our services and prevent fraud</li>
                  </ul>
                  <p>
                    We typically retain customer data for 7 years after the end of our business relationship, 
                    unless a longer retention period is required by law.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">International Data Transfers</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Standard Contractual Clauses approved by regulatory authorities</li>
                    <li>Adequacy decisions by relevant data protection authorities</li>
                    <li>Your explicit consent when required</li>
                  </ul>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our services are not intended for individuals under 18 years of age. 
                    We do not knowingly collect personal information from children under 18. 
                    If we become aware that we have collected such information, we will delete it promptly.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Changes to This Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                    We will notify you of significant changes by:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Displaying prominent notices on our platform</li>
                  </ul>
                  <p>Your continued use of our services after changes take effect constitutes acceptance of the updated policy.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 rounded-xl p-6 border border-electric-violet/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="text-electric-violet mr-3" size={24} />
                  Contact Us About Privacy
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>If you have questions about this Privacy Policy or our privacy practices:</p>
                  <p><strong>Email:</strong> <a href="mailto:stupefy@saasmagic.ai?subject=Please%20tell%20me%20more%20about%20SaaS%20Magic" className="text-electric-violet hover:underline">stupefy@saasmagic.ai</a></p>
                  <p><strong>Mail:</strong></p>
                  <div className="ml-4">
                    <p>SaaS Magic</p>
                    <p>Privacy Officer</p>
                    <p>London, UK</p>
                    <p>+44 7979 651110</p>
                  </div>
                  <p className="pt-2">
                    <strong>Response Time:</strong> We respond to privacy inquiries within 30 days.
                  </p>
                </div>
              </div>
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience our commitment to privacy firsthand. Schedule your complimentary AI marketing assessment today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Link href="/get-started">
                Schedule Your Assessment
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}