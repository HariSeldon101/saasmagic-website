"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Brain, Rocket, Target, Users, BarChart3, Clock, Calendar, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroSection } from "@/components/hero-section";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    industry: "",
    monthlyRevenue: "",
    currentChallenges: "",
    aiExperience: "",
    goalTimeframe: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-midnight-black to-deep-purple/20 -z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <CheckCircle className="text-green-400 mx-auto mb-4" size={64} />
            <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-6">
              We've received your information and will be in touch within 24 hours to schedule your 
              complimentary SaaS Strategy Assessment.
            </p>
            <p className="text-gray-400 mb-8">
              In the meantime, you'll receive an email with our exclusive "SaaS Success Blueprint" 
              with insights on how companies are successfully implementing AI in their marketing strategies.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section with Animated Waves */}
      <HeroSection
        title={
          <>
            Get Your Free{" "}
            <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              SaaS Roadmap
            </span>
          </>
        }
        subtitle="Schedule your complimentary strategy session and discover how we can take you from idea to launch in 8 weeks."
      />

      {/* What You'll Get Section */}
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
              What You'll Receive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your free SaaS roadmap session includes everything you need to understand how we can take you from idea to launch in 8 weeks or less.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Brain className="text-electric-violet" size={32} />,
                title: "Product-Market Fit Analysis",
                description: "Deep dive into your SaaS idea, target market validation, and competitive positioning strategy",
                duration: "Week 1-2 Discovery",
              },
              {
                icon: <Target className="text-electric-violet" size={32} />,
                title: "8-Week Launch Roadmap",
                description: "Your complete journey from concept to launch with fixed milestones and predictable costs",
                duration: "One team, one timeline",
              },
              {
                icon: <Rocket className="text-electric-violet" size={32} />,
                title: "Technical Architecture Plan",
                description: "Scalable tech stack design with AI-powered development to deliver 40% faster",
                duration: "Built for growth",
              },
              {
                icon: <BarChart3 className="text-electric-violet" size={32} />,
                title: "Go-to-Market Strategy",
                description: "Launch campaign, growth hacking tactics, and performance tracking from day one",
                duration: "Revenue-focused approach",
              },
              {
                icon: <Users className="text-electric-violet" size={32} />,
                title: "Single Team Advantage",
                description: "No more juggling agencies - one dedicated team for strategy, development, design, and launch",
                duration: "Zero friction process",
              },
              {
                icon: <Clock className="text-electric-violet" size={32} />,
                title: "Investment Breakdown",
                description: "Transparent pricing with fixed phases, clear deliverables, and measurable ROI targets",
                duration: "No surprises, no scope creep",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <p className="text-electric-violet text-sm font-medium">{benefit.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Schedule Your Strategy Session
                  </h2>
                  <p className="text-xl text-gray-300">
                    Complete the form to book your complimentary SaaS Strategy Assessment. 
                    We'll respond within 24 hours to schedule your session.
                  </p>
                </div>

                {/* Process Steps */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">What Happens Next:</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Form Submission",
                        description: "Complete the form with your business details and goals",
                        icon: <MessageSquare className="text-electric-violet" size={24} />,
                      },
                      {
                        step: "2",
                        title: "24-Hour Response",
                        description: "Our team reviews your information and schedules your session",
                        icon: <Calendar className="text-electric-violet" size={24} />,
                      },
                      {
                        step: "3",
                        title: "Strategy Session",
                        description: "60-minute deep dive into your SaaS opportunities",
                        icon: <Brain className="text-electric-violet" size={24} />,
                      },
                      {
                        step: "4",
                        title: "Custom Blueprint",
                        description: "Receive your personalized SaaS transformation roadmap",
                        icon: <Target className="text-electric-violet" size={24} />,
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-electric-violet rounded-full flex items-center justify-center text-black font-bold text-sm">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white flex items-center">
                            {step.icon}
                            <span className="ml-2">{step.title}</span>
                          </h4>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Prefer to Call?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone className="text-electric-violet mr-3" size={18} />
                      <span>+44 7979 651110</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="text-electric-violet mr-3" size={18} />
                      <span>stupefy@saasmagic.ai</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    Our team is available Monday-Friday, 9 AM - 6 PM GMT
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Company Name *</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Website</label>
                      <Input
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="acmecorp.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Industry *</label>
                      <Select onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="professional-services">Professional Services</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Monthly Revenue</label>
                      <Select onValueChange={(value) => handleInputChange("monthlyRevenue", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under $100K</SelectItem>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-plus">$5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Current Marketing Challenges *</label>
                    <Textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                      placeholder="What are your biggest marketing challenges right now?"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">AI Experience Level</label>
                    <Select onValueChange={(value) => handleInputChange("aiExperience", value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Just getting started with AI</SelectItem>
                        <SelectItem value="some-tools">Using some AI tools</SelectItem>
                        <SelectItem value="intermediate">Intermediate experience</SelectItem>
                        <SelectItem value="advanced">Advanced AI implementation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Timeline for Implementation</label>
                    <Select onValueChange={(value) => handleInputChange("goalTimeframe", value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Ready to start immediately</SelectItem>
                        <SelectItem value="next-month">Within next month</SelectItem>
                        <SelectItem value="next-quarter">Next quarter</SelectItem>
                        <SelectItem value="exploring">Just exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Additional Information</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                      placeholder="Tell us more about your SaaS vision, target users, or any specific features you're planning..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Schedule My SaaS Assessment
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to receive communications from Amplify Marketing. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}