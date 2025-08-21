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
  title: "SaaS Magic - From Idea to Launch in 8 Weeks",
  description: "One Agency. Complete Journey. Zero Friction. SaaS Magic is your single partner for strategy, development, branding, and launch – powered by AI to deliver 40% faster.",
  keywords: "SaaS development, AI development, SaaS agency, product development, SaaS strategy, startup development, MVP development, SaaS launch",
  authors: [{ name: "SaaS Magic" }],
  openGraph: {
    title: "SaaS Magic - From Idea to Launch in 8 Weeks",
    description: "Stop juggling multiple agencies. One dedicated team for everything. Launch 40% faster with AI-powered development.",
    type: "website",
    locale: "en_US",
    siteName: "SaaS Magic",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Magic - From Idea to Launch in 8 Weeks",
    description: "Stop juggling multiple agencies. One dedicated team for everything. Launch 40% faster with AI-powered development.",
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
