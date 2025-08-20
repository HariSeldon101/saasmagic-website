"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Video, Download, TrendingUp, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const featuredResources = [
    {
      category: "Guide",
      title: "The Complete Guide to AI Marketing Transformation",
      description: "Your roadmap to implementing AI across your marketing stack",
      readTime: "15 min read",
      link: "/resources/guides/ai-marketing-transformation",
      icon: <BookOpen className="text-electric-violet" size={24} />,
    },
    {
      category: "Whitepaper",
      title: "2025 State of AI in Marketing Report",
      description: "Industry insights and benchmarks from 500+ companies",
      readTime: "Download PDF",
      link: "/resources/guides/2025-ai-marketing-report",
      icon: <FileText className="text-electric-violet" size={24} />,
    },
    {
      category: "Video Series",
      title: "AI Marketing Mastery Course",
      description: "5-part video series on advanced AI marketing strategies",
      readTime: "2.5 hours",
      link: "/resources/guides/ai-mastery-course",
      icon: <Video className="text-electric-violet" size={24} />,
    },
  ];

  const blogPosts = [
    {
      date: "January 15, 2025",
      category: "AI Strategy",
      title: "How ChatGPT Search is Changing SEO Forever",
      excerpt: "The rise of AI search engines requires a fundamental shift in how we think about SEO and content strategy.",
      author: "Sarah Chen",
      readTime: "7 min read",
    },
    {
      date: "January 12, 2025",
      category: "Personalization",
      title: "Building Trust Through Hyper-Personalization",
      excerpt: "Learn how to deliver personalized experiences without crossing privacy boundaries.",
      author: "Michael Torres",
      readTime: "5 min read",
    },
    {
      date: "January 8, 2025",
      category: "Customer Journey",
      title: "The Hidden Touchpoints Killing Your Conversions",
      excerpt: "Discover the micro-moments in customer journeys that most brands miss.",
      author: "Emily Rodriguez",
      readTime: "6 min read",
    },
    {
      date: "January 5, 2025",
      category: "Funnel Optimization",
      title: "Why Your Funnel Leaks 68% of Revenue",
      excerpt: "Common funnel failures and how AI can plug the gaps automatically.",
      author: "David Kim",
      readTime: "8 min read",
    },
  ];

  const resourceCategories = [
    { name: "Guides & Playbooks", count: 24, icon: <BookOpen size={20} /> },
    { name: "Whitepapers", count: 12, icon: <FileText size={20} /> },
    { name: "Video Tutorials", count: 36, icon: <Video size={20} /> },
    { name: "Templates", count: 18, icon: <Download size={20} /> },
    { name: "Case Studies", count: 15, icon: <TrendingUp size={20} /> },
    { name: "Research Reports", count: 8, icon: <Brain size={20} /> },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-black via-primary-purple/10 to-dark-space -z-10" />
        
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Resources to{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Amplify Your Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Guides, templates, and insights to help you leverage AI for unprecedented marketing growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-300">Start with our most popular resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={resource.link}
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-violet/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    {resource.icon}
                    <span className="text-xs text-electric-violet uppercase tracking-wider">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex items-center text-electric-violet">
                    <span className="text-sm">{resource.readTime}</span>
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Browse by Category</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/resources/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 backdrop-blur-sm rounded-lg p-4 border border-electric-violet/30 hover:border-electric-violet/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-2 text-electric-violet">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-400">{category.count} resources</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest Insights</h2>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/resources/blog">
                  View All Posts
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <p className="text-xl text-gray-300">Fresh perspectives on AI marketing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="text-electric-violet">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  <Link href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-electric-violet transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link
                    href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-electric-violet text-sm flex items-center hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-dark-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Ahead of the AI Curve
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly insights on AI marketing trends, strategies, and tools delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-violet"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Join 12,000+ marketing leaders. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}