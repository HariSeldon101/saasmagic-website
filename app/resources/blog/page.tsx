"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI Strategy", "Personalization", "Customer Journey", "SEO & Content", "Case Studies"];

  const blogPosts = [
    {
      id: 1,
      date: "January 15, 2025",
      category: "AI Strategy",
      title: "How ChatGPT Search is Changing SEO Forever",
      excerpt: "The rise of AI search engines requires a fundamental shift in how we think about SEO and content strategy. Learn what's changing and how to adapt.",
      author: "Sarah Chen",
      authorRole: "Head of AI Strategy",
      readTime: "7 min read",
      featured: true,
      image: "/api/placeholder/800/400",
    },
    {
      id: 2,
      date: "January 12, 2025",
      category: "Personalization",
      title: "Building Trust Through Hyper-Personalization",
      excerpt: "Learn how to deliver personalized experiences without crossing privacy boundaries. A guide to ethical AI-driven personalization.",
      author: "Michael Torres",
      authorRole: "Personalization Expert",
      readTime: "5 min read",
    },
    {
      id: 3,
      date: "January 8, 2025",
      category: "Customer Journey",
      title: "The Hidden Touchpoints Killing Your Conversions",
      excerpt: "Discover the micro-moments in customer journeys that most brands miss and how to optimize them with AI.",
      author: "Emily Rodriguez",
      authorRole: "Journey Architect",
      readTime: "6 min read",
    },
    {
      id: 4,
      date: "January 5, 2025",
      category: "SEO & Content",
      title: "Why Your Funnel Leaks 68% of Revenue",
      excerpt: "Common funnel failures and how AI can plug the gaps automatically. Real data from 100+ funnel audits.",
      author: "David Kim",
      authorRole: "Conversion Specialist",
      readTime: "8 min read",
    },
    {
      id: 5,
      date: "January 2, 2025",
      category: "Case Studies",
      title: "How We Increased B2B Conversions by 340%",
      excerpt: "A detailed breakdown of our AI-driven transformation for a SaaS client, including strategies you can steal.",
      author: "Lisa Wang",
      authorRole: "Client Success Director",
      readTime: "10 min read",
    },
    {
      id: 6,
      date: "December 28, 2024",
      category: "AI Strategy",
      title: "The AI Marketing Stack Every Brand Needs in 2025",
      excerpt: "Essential AI tools and platforms for modern marketing teams, plus integration strategies that actually work.",
      author: "James Mitchell",
      authorRole: "Technology Director",
      readTime: "12 min read",
    },
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-black via-primary-purple/10 to-dark-space -z-10" />
        
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Amplify Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Insights, strategies, and stories from the frontlines of AI marketing transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-dark-space to-midnight-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-purple to-electric-violet text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find(post => post.featured) && (
        <section className="py-12 bg-gradient-to-b from-midnight-black to-dark-space">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Featured Post</h2>
              {filteredPosts
                .filter(post => post.featured)
                .map((post) => (
                  <Link
                    key={post.id}
                    href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 backdrop-blur-sm rounded-xl overflow-hidden border border-electric-violet/30 hover:border-electric-violet/50 transition-all duration-300"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <span className="text-electric-violet font-semibold">{post.category}</span>
                        <span className="text-gray-400 flex items-center">
                          <Calendar className="mr-1" size={14} />
                          {post.date}
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <Clock className="mr-1" size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="text-white font-semibold">{post.author}</p>
                            <p className="text-gray-400 text-sm">{post.authorRole}</p>
                          </div>
                        </div>
                        <span className="text-electric-violet flex items-center">
                          Read Article
                          <ArrowRight className="ml-2" size={20} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-dark-space to-midnight-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric-violet/50 transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Tag className="text-electric-violet" size={14} />
                      <span className="text-electric-violet">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      <Link 
                        href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:text-electric-violet transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">{post.excerpt}</p>
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                          <span className="flex items-center">
                            <Clock className="mr-1" size={14} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link
                          href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-electric-violet text-sm flex items-center hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="ml-1" size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              disabled
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                    page === 1
                      ? "bg-gradient-to-r from-primary-purple to-electric-violet text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Next
            </Button>
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
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-purple/20 to-electric-violet/20 backdrop-blur-sm rounded-2xl p-12 border border-electric-violet/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get our best content on AI marketing delivered weekly to your inbox.
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
              Join 12,000+ marketing leaders. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}