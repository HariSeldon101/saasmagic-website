"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Scale, Shield, Users, AlertTriangle, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
              Terms of{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              These terms govern your use of our AI-powered marketing services and platform. 
              By using our services, you agree to these terms.
            </p>
            <p className="text-gray-400">
              <strong>Last updated:</strong> January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
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
              Clear, Fair Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in transparent, straightforward terms that protect both parties and enable great partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Scale className="text-electric-violet" size={32} />,
                title: "Fair & Balanced",
                description: "Our terms are designed to be fair to both parties and support successful partnerships."
              },
              {
                icon: <Shield className="text-electric-violet" size={32} />,
                title: "Your Protection",
                description: "Clear guidelines on intellectual property, data ownership, and service guarantees."
              },
              {
                icon: <Users className="text-electric-violet" size={32} />,
                title: "Mutual Success",
                description: "Terms structured to align our interests with your business success."
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

      {/* Main Terms Content */}
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
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="text-electric-violet mr-3" size={32} />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By accessing or using Amplify Marketing's services, website, or platform ("Services"), 
                    you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                    you may not use our Services.
                  </p>
                  <p>
                    These Terms apply to all users of our Services, including clients, website visitors, 
                    and anyone accessing our content or platform.
                  </p>
                </div>
              </div>

              {/* Description of Services */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="text-electric-violet mr-3" size={32} />
                  Our Services
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Amplify Marketing provides AI-powered marketing services including:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>AI marketing strategy development and implementation</li>
                    <li>Customer journey intelligence and optimization</li>
                    <li>Marketing automation and personalization</li>
                    <li>Performance analytics and reporting</li>
                    <li>Consulting and advisory services</li>
                    <li>Educational content and resources</li>
                  </ul>
                  <p>
                    Services are provided subject to availability and may be modified, suspended, 
                    or discontinued at our discretion with appropriate notice.
                  </p>
                </div>
              </div>

              {/* Account Registration */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Account Registration and Eligibility</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Eligibility:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>You must be at least 18 years old</li>
                    <li>You must have the authority to bind your organization</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You must comply with all applicable laws and regulations</li>
                  </ul>
                  
                  <p><strong>Account Security:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>You are responsible for maintaining account security</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                    <li>You are liable for all activities under your account</li>
                    <li>We may suspend or terminate accounts that violate these Terms</li>
                  </ul>
                </div>
              </div>

              {/* Client Obligations */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Client Obligations</h2>
                <div className="space-y-4 text-gray-300">
                  <p>As a client, you agree to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Provide accurate and complete information about your business</li>
                    <li>Grant necessary access to marketing platforms and data</li>
                    <li>Respond promptly to requests for feedback and approvals</li>
                    <li>Comply with all applicable laws and industry regulations</li>
                    <li>Maintain appropriate licenses for any provided assets</li>
                    <li>Pay invoices according to agreed terms</li>
                    <li>Use our services only for lawful business purposes</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Your Content:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>You retain ownership of all content you provide</li>
                    <li>You grant us license to use your content for service delivery</li>
                    <li>You represent that you have rights to all provided content</li>
                  </ul>
                  
                  <p><strong>Our Work Product:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>You own strategies and customized materials created for you</li>
                    <li>We retain ownership of our methodologies and tools</li>
                    <li>You receive usage rights to AI models trained on your data</li>
                    <li>Pre-existing IP and general methodologies remain ours</li>
                  </ul>
                  
                  <p><strong>Platform and Technology:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>All platform technology and software remain our property</li>
                    <li>You receive limited license to use our platform during service term</li>
                    <li>Reverse engineering or copying our technology is prohibited</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Payment and Billing</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Payment Terms:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Fees are as specified in your service agreement</li>
                    <li>Payments are due within 30 days of invoice date</li>
                    <li>Late payments may incur interest charges (1.5% per month)</li>
                    <li>All fees are non-refundable except as specifically provided</li>
                  </ul>
                  
                  <p><strong>Fee Changes:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>We may change fees with 60 days' written notice</li>
                    <li>Fee increases apply to renewal terms, not current contracts</li>
                    <li>You may terminate before fee increases take effect</li>
                  </ul>
                  
                  <p><strong>Taxes:</strong></p>
                  <p className="ml-4">
                    Fees are exclusive of taxes. You are responsible for all applicable taxes, 
                    duties, and assessments except taxes on our net income.
                  </p>
                </div>
              </div>

              {/* Service Level and Warranties */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Service Level and Warranties</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Service Standards:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>We will provide services with professional skill and care</li>
                    <li>Services will substantially conform to agreed specifications</li>
                    <li>We maintain 99.5% platform uptime (excluding scheduled maintenance)</li>
                    <li>Response times as specified in service level agreements</li>
                  </ul>
                  
                  <p><strong>Performance Disclaimers:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Marketing results depend on many factors beyond our control</li>
                    <li>We do not guarantee specific business outcomes or ROI</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>AI recommendations are predictions, not certainties</li>
                  </ul>
                </div>
              </div>

              {/* Data and Confidentiality */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Data and Confidentiality</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Data Ownership:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>You retain ownership of all your business data</li>
                    <li>We may use aggregated, anonymized data for service improvement</li>
                    <li>You can request data return or deletion upon service termination</li>
                  </ul>
                  
                  <p><strong>Confidentiality:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Both parties will protect confidential information</li>
                    <li>Confidentiality survives termination of these Terms</li>
                    <li>Standard exceptions apply (public information, legal requirements)</li>
                  </ul>
                  
                  <p><strong>Privacy:</strong></p>
                  <p className="ml-4">
                    Our data practices are governed by our Privacy Policy, which is incorporated by reference into these Terms.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Termination by You:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>30 days' written notice for ongoing services</li>
                    <li>Immediate termination for material breach by us</li>
                    <li>Fees paid for incomplete periods are non-refundable</li>
                  </ul>
                  
                  <p><strong>Termination by Us:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>30 days' notice for convenience</li>
                    <li>Immediate termination for breach, non-payment, or legal requirements</li>
                    <li>Immediate termination for misuse of services or platform</li>
                  </ul>
                  
                  <p><strong>Effect of Termination:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>All rights and licenses terminate immediately</li>
                    <li>Outstanding invoices become due immediately</li>
                    <li>We will return or delete your data as requested</li>
                    <li>Confidentiality obligations continue indefinitely</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="text-electric-violet mr-3" size={32} />
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Liability Cap:</strong></p>
                  <p>
                    Our total liability for any claims arising from these Terms or our services 
                    will not exceed the total fees paid by you in the 12 months preceding the claim.
                  </p>
                  
                  <p><strong>Excluded Damages:</strong></p>
                  <p>
                    Neither party will be liable for indirect, incidental, special, consequential, 
                    or punitive damages, including lost profits, even if advised of their possibility.
                  </p>
                  
                  <p><strong>Exceptions:</strong></p>
                  <p>
                    Liability limitations do not apply to: (a) either party's indemnification obligations, 
                    (b) violations of intellectual property rights, or (c) breaches of confidentiality.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Indemnification</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Your Indemnification:</strong></p>
                  <p>
                    You will defend, indemnify, and hold us harmless from claims arising from: 
                    (a) your content or materials, (b) your use of our services, 
                    (c) your violation of laws or third-party rights, or (d) your breach of these Terms.
                  </p>
                  
                  <p><strong>Our Indemnification:</strong></p>
                  <p>
                    We will defend, indemnify, and hold you harmless from claims that our services 
                    infringe third-party intellectual property rights, subject to your compliance 
                    with these Terms and our direction of the defense.
                  </p>
                </div>
              </div>

              {/* General Provisions */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">General Provisions</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Governing Law:</strong></p>
                  <p>
                    These Terms are governed by the laws of Delaware, without regard to conflict of law principles.
                  </p>
                  
                  <p><strong>Dispute Resolution:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Good faith negotiations for 30 days before formal proceedings</li>
                    <li>Binding arbitration for disputes over $25,000</li>
                    <li>Courts of Delaware for injunctive relief and disputes under $25,000</li>
                  </ul>
                  
                  <p><strong>Modifications:</strong></p>
                  <p>
                    We may modify these Terms with 30 days' notice. Continued use constitutes acceptance. 
                    Individual service agreements may have different modification terms.
                  </p>
                  
                  <p><strong>Entire Agreement:</strong></p>
                  <p>
                    These Terms, together with your service agreement and privacy policy, 
                    constitute the entire agreement between us regarding our services.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 rounded-xl p-6 border border-electric-violet/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="text-electric-violet mr-3" size={24} />
                  Questions About These Terms?
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>If you have questions about these Terms of Service:</p>
                  <p><strong>Email:</strong> <a href="mailto:stupefy@saasmagic.ai" className="text-electric-violet hover:underline">stupefy@saasmagic.ai</a></p>
                  <p><strong>Mail:</strong></p>
                  <div className="ml-4">
                    <p>SaaS Magic</p>
                    <p>Legal Department</p>
                    <p>London, UK</p>
                    <p>+44 7979 651110</p>
                  </div>
                  <p className="pt-2">
                    <strong>Response Time:</strong> We respond to legal inquiries within 5 business days.
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Now that you understand our terms, let's discuss how we can amplify your marketing with AI.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}