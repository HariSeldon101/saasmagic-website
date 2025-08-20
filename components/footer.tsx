import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Customer Journey Intelligence", href: "/services/customer-journey-intelligence" },
      { label: "Funnel Transformation", href: "/services/funnel-transformation" },
      { label: "Brand Evolution", href: "/services/brand-evolution" },
      { label: "AI SEO & Content", href: "/services/ai-seo-content" },
      { label: "Hyper-Personalization", href: "/services/hyper-personalization" },
    ],
    resources: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Free Assessment", href: "/get-started" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-midnight-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-electric-violet bg-clip-text text-transparent">
                Amplify
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Where Marketing Strategy Meets AI Intelligence. Transform your growth trajectory with intelligence that understands your business.
            </p>
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
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-gray-400 hover:text-electric-violet transition-colors"
              >
                <Youtube size={20} />
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Amplify Marketing. All rights reserved.
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