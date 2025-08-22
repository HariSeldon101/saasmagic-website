"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, Heart, Target, Users, Shield, Zap, Award, TrendingUp, Rocket, Code2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/hero-section";

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Waves */}
      <HeroSection
        title={
          <>
            We're Building the Future of{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              SaaS, One Product at a Time
            </span>
          </>
        }
        subtitle="SaaS Magic brings together world-class developers, designers, and marketers who believe building great software shouldn't require managing a dozen different agencies."
      />

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
              Born from Frustration, Built for Innovation
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We've been in your shoes. As former SaaS founders and agency veterans, we've experienced the chaos of coordinating multiple agencies, the frustration of misaligned teams, and the delays that kill momentum.
              </p>
              <p>
                We founded SaaS Magic with a simple belief: <strong className="text-white">there has to be a better way.</strong>
              </p>
              <p>
                By bringing together elite talent across every discipline needed to build and launch a SaaS product, we've created something unique – a true one-stop shop that delivers faster, better, and more affordably than the traditional multi-agency approach.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything we do is guided by these fundamental values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Rocket className="text-electric-violet" size={32} />,
                title: "Speed Without Sacrifice",
                description: "Fast doesn't mean sloppy. We move quickly because we've eliminated inefficiency, not because we cut corners.",
              },
              {
                icon: <Shield className="text-electric-violet" size={32} />,
                title: "Transparency Always",
                description: "No black boxes, no surprise invoices, no mysterious delays. You'll always know exactly what we're doing and why.",
              },
              {
                icon: <Target className="text-electric-violet" size={32} />,
                title: "Your Success = Our Success",
                description: "We win when you win. That's why we offer performance-based pricing options and stay invested in your growth long after launch.",
              },
              {
                icon: <Brain className="text-electric-violet" size={32} />,
                title: "Innovation Through Integration",
                description: "The best ideas come from unexpected connections. By breaking down silos, we create solutions that specialized agencies simply can't.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet the Magicians
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse team of developers, designers, marketers, and strategists united by a passion for building exceptional SaaS products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Stu Holmes",
                role: "CEO & Founder",
                expertise: ["Growth Strategy", "B2B Marketing", "Team Leadership"],
                bio: "Former SaaS founder with 3 successful exits. Built and scaled multiple B2B platforms from 0 to $10M+ ARR.",
              },
              {
                name: "Tim Ames",
                role: "Project Lead",
                expertise: ["Project Management", "IT Delivery", "Process Optimization"],
                bio: "Led product development at two unicorn startups. Expert in AI-accelerated development and agile methodologies.",
              },
              {
                name: "Sam Blake",
                role: "Head of Client Success",
                expertise: ["Business Development", "Client Relations", "Strategic Partnerships"],
                bio: "Former VP of Customer Success at a leading SaaS company. Helped 100+ startups achieve product-market fit and scale.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-purple to-electric-violet rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-electric-violet font-medium">{member.role}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-electric-violet/20 text-electric-violet text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prince2 Certification Section */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-electric-violet/30">
              <div className="text-center mb-4">
                <img 
                  src="/prince2-logo.svg" 
                  alt="Prince2 Certified" 
                  className="w-full max-w-[400px] mx-auto brightness-150"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">
                  Prince2 Certified Excellence
                </h2>
                <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                  All our project managers are qualified Prince2 practitioners, bringing world-class project management methodology to every client engagement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold">Predictable Delivery</h4>
                        <p className="text-gray-400 text-sm">Fixed milestones, clear stages, and controlled progress ensure your project stays on track and on budget.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold">Risk Management</h4>
                        <p className="text-gray-400 text-sm">Proactive identification and mitigation of risks before they become issues, protecting your investment.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold">Quality Assurance</h4>
                        <p className="text-gray-400 text-sm">Built-in quality checks at every stage ensure deliverables meet the highest standards.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold">Clear Communication</h4>
                        <p className="text-gray-400 text-sm">Structured reporting and defined roles mean you always know exactly where your project stands.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
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
              How We're Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Code2 className="text-electric-violet" size={32} />,
                title: "AI-First, Human-Centered",
                description: "We leverage the latest AI tools to accelerate every aspect of development and marketing, from code generation to content creation. But AI is our co-pilot, not our pilot. Human creativity, strategy, and quality control drive everything we do.",
              },
              {
                icon: <Users className="text-electric-violet" size={32} />,
                title: "Truly Integrated Teams",
                description: "Our developers attend marketing meetings. Our marketers understand the product roadmap. Our designers code. This isn't just collaboration – it's true integration that eliminates the gaps between disciplines.",
              },
              {
                icon: <DollarSign className="text-electric-violet" size={32} />,
                title: "Data-Driven, Results-Obsessed",
                description: "Every decision is backed by data. Every campaign is measured. Every line of code is tested. We're not satisfied until you're seeing real, measurable growth in users, revenue, and market position.",
              },
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm border-electric-violet/30 h-full">
                  <CardHeader>
                    <div className="mb-4">{approach.icon}</div>
                    <CardTitle className="text-xl text-white">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{approach.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
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
              Our Collective Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <Award className="text-electric-violet" size={32} />, title: "15+ Years", subtitle: "Combined SaaS Experience" },
              { icon: <TrendingUp className="text-electric-violet" size={32} />, title: "50+ Products", subtitle: "Launched Successfully" },
              { icon: <Users className="text-electric-violet" size={32} />, title: "10+ Certifications", subtitle: "AI & Cloud Technologies" },
              { icon: <Brain className="text-electric-violet" size={32} />, title: "4 Time Zones", subtitle: "24/7 Coverage" },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="mb-3">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.subtitle}</p>
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
              Let's Create Something Extraordinary Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a solo founder with a vision or an enterprise ready to innovate, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Start a Conversation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/resources">Download Our SaaS Playbook</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}