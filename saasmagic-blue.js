// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // Add your own content paths
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color - Electric Blue
        primary: {
          DEFAULT: '#2563EB',  // Electric Blue - Main brand color
          50: '#EBF2FE',
          100: '#D7E6FD',
          200: '#B0CCFB',
          300: '#88B3F9',
          400: '#5190F5',
          500: '#2563EB',  // Base
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E293B',  // Deep Slate
        },
        
        // Secondary Color - Indigo (for buttons)
        secondary: {
          DEFAULT: '#4F46E5',  // Indigo Button
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',  // Base
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        
        // Accent Colors
        accent: {
          sky: '#60A5FA',     // Sky Accent - for highlights
          purple: '#A855F7',  // Purple CTA - for special CTAs
          'purple-hover': '#9333EA',  // Darker purple for hover states
        },
        
        // Neutral Greys (Content)
        neutral: {
          DEFAULT: '#475569',  // Charcoal - primary text
          50: '#F8FAFC',
          100: '#F1F5F9',     // Cloud Grey - lightest backgrounds
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',     // Silver Grey - secondary text
          500: '#64748B',
          600: '#475569',     // Charcoal - base
          700: '#334155',
          800: '#1E293B',     // Deep Slate
          900: '#0F172A',
        },
        
        // Semantic Colors
        success: '#10B981',   // Green for success states
        warning: '#F59E0B',   // Amber for warnings
        error: '#EF4444',     // Red for errors
        info: '#60A5FA',      // Sky blue for info (same as accent.sky)
        
        // Background Colors
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F1F5F9',  // Cloud Grey
          tertiary: '#F8FAFC',
          dark: '#1E293B',       // Deep Slate for dark sections
        },
        
        // Text Colors
        text: {
          DEFAULT: '#475569',    // Charcoal
          primary: '#475569',    // Charcoal
          secondary: '#94A3B8',  // Silver Grey
          tertiary: '#CBD5E1',
          inverse: '#FFFFFF',
          dark: '#1E293B',       // Deep Slate
        },
        
        // Border Colors
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
          dark: '#CBD5E1',
        },
      },
      
      // Optional: Add custom gradients using your palette
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4F46E5 0%, #A855F7 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1E293B 0%, #2563EB 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #2563EB 0px, transparent 50%), radial-gradient(at 80% 0%, #A855F7 0px, transparent 50%), radial-gradient(at 40% 50%, #60A5FA 0px, transparent 50%)',
      },
      
      // Optional: Add box shadows with your brand colors
      boxShadow: {
        'primary': '0 10px 40px -10px rgba(37, 99, 235, 0.5)',
        'secondary': '0 10px 40px -10px rgba(79, 70, 229, 0.5)',
        'accent': '0 10px 40px -10px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
}

/* 
USAGE EXAMPLES:

1. PRIMARY BRAND COLOR (Electric Blue):
   - Logo: <div className="text-primary">
   - Backgrounds: <div className="bg-primary">
   - Borders: <div className="border-primary">
   - Hover: <button className="hover:bg-primary-600">

2. BUTTONS:
   - Primary CTA: <button className="bg-primary hover:bg-primary-600 text-white">
   - Secondary: <button className="bg-secondary hover:bg-secondary-700 text-white">
   - Special CTA: <button className="bg-accent-purple hover:bg-accent-purple-hover text-white">
   - Ghost: <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white">

3. TEXT:
   - Headings: <h1 className="text-text-dark"> or <h1 className="text-neutral-800">
   - Body: <p className="text-text-primary">
   - Secondary: <p className="text-text-secondary">
   - On dark bg: <p className="text-text-inverse">

4. BACKGROUNDS:
   - Main: <div className="bg-background">
   - Sections: <div className="bg-background-secondary">
   - Dark sections: <div className="bg-background-dark">
   - Cards: <div className="bg-white shadow-lg">

5. GRADIENTS:
   - Hero section: <div className="bg-gradient-primary">
   - Feature cards: <div className="bg-gradient-accent">
   - Background mesh: <div className="bg-gradient-mesh opacity-20">

6. COMPLETE COMPONENT EXAMPLES:

   Hero Button:
   <button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-primary transition-all duration-200 hover:scale-105">
     Get Started
   </button>

   Feature Card:
   <div className="bg-white border border-border rounded-xl p-6 hover:shadow-primary transition-shadow">
     <h3 className="text-text-dark text-xl font-bold mb-2">Feature Title</h3>
     <p className="text-text-secondary">Description text here...</p>
   </div>

   Navigation:
   <nav className="bg-background-dark">
     <a className="text-text-inverse hover:text-accent-sky transition-colors">Home</a>
   </nav>

   Alert/Badge:
   <span className="bg-accent-purple text-white px-3 py-1 rounded-full text-sm font-medium">
     NEW
   </span>
*/