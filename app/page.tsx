"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Target, 
  DollarSign,
  Clock,
  Code2,
  ChartBar,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            From Inspiration to Launch in{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              8 Weeks or Less
            </span>
          </>
        }
        tagline="One Agency. Complete Journey. Zero Friction."
        subtitle="Stop juggling multiple agencies. SaaS Magic is your single partner for strategy, development, branding, and launch – powered by AI to deliver quality product, faster and cheaper."
      >
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <Link href="/get-started">
              Get Your Free SaaS Roadmap
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
          >
            <Link href="#how-it-works">See How We Work</Link>
          </Button>
        </div>
      </HeroSection>


      {/* Problem Section */}
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
              The <span className="whitespace-nowrap">Multi-Agency</span> Nightmare Is Real
            </h2>
            <p className="text-xl text-gray-300">
              Building a SaaS product shouldn't feel like herding cats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without SaaS Magic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/30"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Without SaaS Magic:</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✗</span>
                  3-5 different agencies to manage
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✗</span>
                  Constant miscommunication between teams
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✗</span>
                  6+ months from idea to launch
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✗</span>
                  Budget overruns from scope creep
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 mt-1">✗</span>
                  Inconsistent brand and user experience
                </li>
              </ul>
            </motion.div>

            {/* With SaaS Magic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-900/30"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-6">With SaaS Magic:</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✅</span>
                  One dedicated team for everything
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✅</span>
                  Seamless collaboration under one roof
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✅</span>
                  <span className="whitespace-nowrap">8-week</span> <span className="whitespace-nowrap">idea-to-launch</span> timeline
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✅</span>
                  Fixed milestones, predictable costs
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✅</span>
                  Unified vision from concept to scale
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="#how-it-works"
              className="inline-flex items-center text-electric-violet hover:text-primary-purple transition-colors text-lg font-semibold"
            >
              See Our Process
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Journey to SaaS Success
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Week 1-2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 mr-6">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 1-2: Discovery & Strategy</h3>
                  <p className="text-gray-300 mb-4">
                    We dive deep into your vision and validate your path to market
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Market research & competitive analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300"><span className="whitespace-nowrap">Product-market</span> fit validation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Technical architecture planning</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300"><span className="whitespace-nowrap">Go-to-market</span> strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Week 3-8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 mr-6">
                  <Code2 className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 3-6: Design & Development</h3>
                  <p className="text-gray-300 mb-4">
                    Your product comes to life with AI-accelerated development
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">User experience (UX) design & prototyping</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300"><span className="whitespace-nowrap">Full-stack</span> development with AI acceleration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Brand identity & visual system</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Quality assurance & testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Week 9-12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 mr-6">
                  <Rocket className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 7-8: Launch & Growth</h3>
                  <p className="text-gray-300 mb-4">
                    Go to market with confidence and momentum
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Marketing website & content creation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Launch campaign execution</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Growth hacking implementation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">Performance tracking setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Link href="/get-started">
                Start Your Journey Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
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
              The SaaS Magic Advantage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI-Powered Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 inline-block mb-4">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4"><span className="whitespace-nowrap">AI-Powered</span> Speed</h3>
              <p className="text-gray-300">
                We use cutting-edge AI tools and specialized development platforms to deliver in weeks what traditionally takes months. Every line of code, every design, and every piece of content is accelerated by AI while maintaining human creativity and quality.
              </p>
            </motion.div>

            {/* True Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 inline-block mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">True Integration</h3>
              <p className="text-gray-300">
                No more playing telephone tennis between your dev shop and marketing agency. Our developers, designers, and marketers sit in the same (virtual) room, share the same vision, and work toward the same goals.
              </p>
            </motion.div>

            {/* Predictable ROI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-purple to-electric-violet rounded-lg p-3 inline-block mb-4">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictable ROI</h3>
              <p className="text-gray-300">
                Fixed project phases with clear deliverables. Performance-based growth programs. No surprises, no scope creep, just results you can measure.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <img src="/prince2-logo.svg" alt="Prince2 Certified" className="h-8 brightness-200 mr-2" />
                <span className="text-sm text-electric-violet">Prince2 Certified Project Management</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Social Proof Section */}
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
              Built for Ambitious SaaS Companies
            </h2>
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {[
              {
                quote: "Finally, an agency that actually gets SaaS. They took us from wireframes to revenue in 8 weeks.",
                author: "Sarah Chen",
                role: "Founder & CEO",
              },
              {
                quote: "The difference is night and day. One team, one vision, and our product launched ahead of schedule.",
                author: "Michael Torres",
                role: "CTO",
              },
              {
                quote: "Their AI-first approach cut our development time in half without sacrificing quality.",
                author: "Jennifer Park",
                role: "Head of Product",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="mb-4">
                  <div className="text-4xl text-electric-violet/50">"</div>
                </div>
                <p className="text-gray-300 italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Previews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "FinTech Platform",
                result: "0 to 10,000 users in 90 days",
                icon: <ChartBar className="text-electric-violet" size={24} />,
              },
              {
                title: "B2B SaaS Tool",
                result: "$2M ARR in Year 1",
                icon: <TrendingUp className="text-electric-violet" size={24} />,
              },
              {
                title: "AI Startup",
                result: "Acquired 18 months after launch",
                icon: <Rocket className="text-electric-violet" size={24} />,
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-purple/10 to-electric-violet/10 backdrop-blur-sm rounded-xl p-6 border border-electric-violet/30 hover:border-electric-violet/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  {caseStudy.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{caseStudy.title}</h3>
                </div>
                <p className="text-electric-violet font-bold">{caseStudy.result}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-electric-violet hover:text-primary-purple transition-colors text-lg font-semibold"
            >
              Read Full Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's map out your path to SaaS success – no obligations, no BS, just strategic insights.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Link href="/get-started">
                Get Your Free SaaS Roadmap
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            
            <p className="text-gray-400 text-sm mt-6">
              30-minute strategy call • Custom recommendations • Investment breakdown
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}