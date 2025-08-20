"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "Customer Journey Intelligence", href: "/services/customer-journey-intelligence" },
        { label: "Funnel Transformation", href: "/services/funnel-transformation" },
        { label: "Brand Evolution", href: "/services/brand-evolution" },
        { label: "AI SEO & Content", href: "/services/ai-seo-content" },
        { label: "Hyper-Personalization", href: "/services/hyper-personalization" },
        { label: "SaaS Growth Acceleration", href: "/services/saas-growth-acceleration" },
      ],
    },
    { label: "Success Stories", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
              Amplify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
                
                {/* Dropdown for Services */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-dark-space/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 p-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-electric-violet/50 text-electric-violet hover:bg-electric-violet/10 hover:border-electric-violet font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              <Link href="/book">Book a Call</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-space/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="py-2">
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block text-sm text-gray-400 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-electric-violet/50 text-electric-violet hover:bg-electric-violet/10 hover:border-electric-violet font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-purple to-deep-purple hover:from-deep-purple hover:to-primary-purple text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}