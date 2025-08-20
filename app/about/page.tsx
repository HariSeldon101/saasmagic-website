"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, Heart, Target, Users, Shield, Zap, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20 -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Where{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Human Strategy
              </span>
              {" "}Meets AI Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe the future of marketing isn't about replacing human insight with AI—it's about 
              amplifying human creativity and strategy with intelligent technology that understands your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">
                Partner With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

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
              Our Story: Born from Frustration
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We started Amplify Marketing because we were frustrated. Frustrated with agencies that treated AI 
                like a magic wand. Frustrated with consultants who gave you tools but no strategy. Frustrated 
                with the gap between AI's potential and its practical application in marketing.
              </p>
              <p>
                Our founders came from diverse backgrounds—marketing strategy, data science, and business operations—but 
                we shared a common vision: AI should amplify human expertise, not replace it. Marketing should be more 
                intelligent, more personal, and more effective, but never lose the human understanding that drives real growth.
              </p>
              <p>
                Today, we're proud to have helped over 200+ companies transform their marketing with AI that actually 
                understands their business goals, their customers, and their unique market position.
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
              Our Mission & Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything we do is guided by these fundamental principles that put your success first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Brain className="text-electric-violet" size={32} />,
                title: "Strategy First, Always",
                description: "AI serves strategy, never the reverse. We start with your business goals and market position, then apply technology to amplify your success.",
              },
              {
                icon: <Heart className="text-electric-violet" size={32} />,
                title: "Human-Centered AI",
                description: "Technology should enhance human creativity and insight, not replace it. Our AI solutions amplify your team's expertise and intuition.",
              },
              {
                icon: <Shield className="text-electric-violet" size={32} />,
                title: "Transparent Intelligence",
                description: "No black boxes. You understand exactly how our AI works, what decisions it's making, and why. You own your data and your results.",
              },
              {
                icon: <Target className="text-electric-violet" size={32} />,
                title: "Results-Obsessed",
                description: "Pretty dashboards don't pay the bills. We're obsessed with driving measurable business outcomes that impact your bottom line.",
              },
              {
                icon: <Users className="text-electric-violet" size={32} />,
                title: "Partnership Mindset",
                description: "We're not just a vendor—we're an extension of your team. Your success is our success, and we're invested in your long-term growth.",
              },
              {
                icon: <Zap className="text-electric-violet" size={32} />,
                title: "Continuous Innovation",
                description: "The AI landscape evolves daily, and so do we. We're constantly learning, adapting, and improving our methods to stay ahead.",
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
              Meet the Team Behind Your Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings decades of experience in marketing strategy, AI/ML, and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Founder",
                background: "Former VP Marketing at unicorn SaaS company",
                expertise: ["Growth Strategy", "B2B Marketing", "Team Leadership"],
                bio: "15+ years scaling marketing teams from Series A to IPO. Passionate about leveraging AI to unlock human potential in marketing.",
              },
              {
                name: "Dr. Marcus Rodriguez",
                role: "Chief AI Officer",
                background: "PhD in Machine Learning, ex-Google AI",
                expertise: ["Machine Learning", "Predictive Analytics", "AI Strategy"],
                bio: "Former lead scientist on Google's advertising AI team. Dedicated to making AI accessible and practical for marketers.",
              },
              {
                name: "Jennifer Walsh",
                role: "Head of Client Success",
                background: "Former McKinsey consultant, 12+ years agency experience",
                expertise: ["Client Strategy", "Process Optimization", "Results Delivery"],
                bio: "Expert at translating business objectives into actionable marketing strategies. Ensures every client achieves transformational results.",
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
                  <p className="text-sm text-gray-400">{member.background}</p>
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

      {/* Our Approach */}
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
              How We're Different
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just implement AI—we transform how you think about and execute marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-red-400 mr-3">✗</span>
                What Others Do
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>Hand you AI tools and disappear</li>
                <li>Focus on technology first, strategy second</li>
                <li>Use generic, one-size-fits-all approaches</li>
                <li>Create dependency on their platforms</li>
                <li>Measure vanity metrics instead of business outcomes</li>
                <li>Treat AI as a black box you can't understand</li>
                <li>Promise quick fixes and overnight transformations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="text-green-400 mr-3" size={24} />
                What We Do
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>Partner with you for long-term transformation</li>
                <li>Start with strategy, amplify with AI</li>
                <li>Create custom solutions for your unique situation</li>
                <li>Build systems you own and understand</li>
                <li>Focus obsessively on revenue and growth metrics</li>
                <li>Ensure full transparency in how AI makes decisions</li>
                <li>Commit to sustainable, compound growth over time</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
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
              Recognition & Milestones
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our work and results have been recognized by industry leaders and publications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <Award className="text-electric-violet" size={32} />, title: "MarTech Breakthrough Award", subtitle: "AI Marketing Platform 2024" },
              { icon: <TrendingUp className="text-electric-violet" size={32} />, title: "Inc. 5000", subtitle: "Fastest Growing Companies" },
              { icon: <Users className="text-electric-violet" size={32} />, title: "200+ Clients", subtitle: "Across 15 Industries" },
              { icon: <Brain className="text-electric-violet" size={32} />, title: "Featured in AI Weekly", subtitle: "Top AI Marketing Innovators" },
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that have transformed their marketing with human-centered AI. 
              Let's explore what's possible for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="/get-started">
                  Start the Conversation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/case-studies">See Our Client Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}