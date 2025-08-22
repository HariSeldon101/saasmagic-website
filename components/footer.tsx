import Link from "next/link";
import { Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { MagicWandIcon } from "@/components/icons/magic-wand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Strategy & Research", href: "/todo" },
      { label: "Product Development", href: "/todo" },
      { label: "Brand & Design", href: "/todo" },
      { label: "Marketing & Growth", href: "/todo" },
    ],
    resources: [
      { label: "SaaS Playbook", href: "/resources/playbook" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Tools", href: "/resources/tools" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/#how-it-works" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-midnight-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <MagicWandIcon className="w-8 h-8 text-primary-purple" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                SaaS Magic
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              From Idea to Launch in 8 Weeks. One Agency. Complete Journey. Zero Friction.
            </p>
            <div className="text-gray-400 text-sm mb-6">
              <a href="mailto:stupefy@saasmagic.ai?subject=Please%20tell%20me%20more%20about%20SaaS%20Magic" className="hover:text-electric-violet transition-colors">
                stupefy@saasmagic.ai
              </a>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-electric-violet transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-electric-violet transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 py-8 bg-gradient-to-r from-primary-purple/10 to-electric-violet/10 rounded-lg border border-electric-violet/20 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Ready to accelerate your SaaS journey?
          </h3>
          <Link
            href="/get-started"
            className="inline-flex items-center text-electric-violet hover:text-white transition-colors font-semibold"
          >
            Get Your Free Roadmap
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SaaS Magic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-electric-violet transition-colors text-sm"
              >
                Cookies
              </Link>
              {/* Temporary demo link - discreet */}
              <Link
                href="/demo"
                className="text-gray-600 hover:text-gray-400 transition-colors text-xs opacity-50 hover:opacity-100"
                title="View wave animation demo"
              >
                •
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}