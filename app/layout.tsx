import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import LayoutWrapper from "@/components/layout-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amplify Marketing - AI-Powered Marketing Transformation",
  description: "Where Marketing Strategy Meets AI Intelligence. Transform your growth trajectory with AI-powered customer journey intelligence, funnel optimization, and hyper-personalization.",
  keywords: "AI marketing, marketing automation, customer journey, funnel optimization, personalization, SEO, content marketing",
  authors: [{ name: "Amplify Marketing" }],
  openGraph: {
    title: "Amplify Marketing - AI-Powered Marketing Transformation",
    description: "Transform your marketing with AI. Achieve 30-50% higher conversions through intelligent optimization and personalization.",
    type: "website",
    locale: "en_US",
    siteName: "Amplify Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplify Marketing - AI-Powered Marketing Transformation",
    description: "Transform your marketing with AI. Achieve 30-50% higher conversions through intelligent optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-midnight-black text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <LayoutWrapper>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
