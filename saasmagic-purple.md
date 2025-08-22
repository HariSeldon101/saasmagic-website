# SaaS Magic Purple Theme - Complete Color Reference

This file contains all color values and styling from the SaaS Magic purple theme.
Created on: 2024-12-22

## Tailwind Custom Colors

```javascript
// Custom brand colors from tailwind.config.ts
"primary-purple": "#8B5CF6",      // Main purple brand color
"deep-purple": "#6D28D9",          // Darker purple for gradients
"electric-violet": "#A78BFA",      // Lighter purple/violet
"midnight-black": "#0F0A1F",       // Dark background
"dark-space": "#1A0F2E",           // Darker background variant
"cosmic-glow": "#E0D5FF",          // Light purple glow
"accent-magenta": "#D946EF",       // Magenta accent
```

## CSS Variables (HSL Values)

### Light Mode (Root)
```css
--primary: 262 83% 58%;           /* Purple primary */
--primary-foreground: 0 0% 100%;  /* White text on primary */
--secondary: 251 91% 95%;         /* Light purple background */
--secondary-foreground: 262 83% 58%;
--accent: 251 91% 95%;
--accent-foreground: 262 83% 58%;
--ring: 262 83% 58%;              /* Focus ring purple */
```

### Dark Mode
```css
--primary: 262 83% 58%;           /* Same purple primary */
--primary-foreground: 0 0% 100%;
--secondary: 249 50% 15%;
--secondary-foreground: 251 91% 95%;
--accent: 249 50% 15%;
--accent-foreground: 251 91% 95%;
--ring: 262 83% 58%;
```

## Animated Wave Background Colors

```javascript
// Wave 1
colors: [
  { r: 139, g: 92, b: 246, a: 0.475 }, // primary-purple
  { r: 109, g: 40, b: 217, a: 0.375 }  // deep-purple
]

// Wave 2
colors: [
  { r: 109, g: 40, b: 217, a: 0.425 }, // deep-purple
  { r: 167, g: 139, b: 250, a: 0.325 } // electric-violet
]

// Wave 3
colors: [
  { r: 217, g: 70, b: 239, a: 0.375 }, // accent-magenta
  { r: 139, g: 92, b: 246, a: 0.275 }  // primary-purple
]
```

## Common Gradient Classes

```css
/* Primary gradient */
bg-gradient-to-r from-primary-purple to-deep-purple
bg-gradient-to-r from-primary-purple to-electric-violet

/* Hover states */
hover:from-deep-purple hover:to-primary-purple
hover:shadow-purple-500/25

/* Background gradients */
bg-gradient-to-br from-primary-purple/10 to-electric-violet/10
bg-gradient-to-br from-dark-space/50 via-midnight-black/30 to-deep-purple/20
```

## Text Color Classes

```css
text-primary-purple
text-deep-purple
text-electric-violet
text-accent-magenta
bg-clip-text text-transparent (with gradients)
```

## Border Colors

```css
border-electric-violet/30
border-electric-violet/50
border-white/10
border-white/20
border-purple-900/30
```

## Glass Effects

```css
.glass-purple {
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.1) 0%,     /* primary-purple 10% */
    rgba(167, 139, 250, 0.05) 100%); /* electric-violet 5% */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.glass-hover:hover {
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
}
```

## Component-Specific Colors

### Navigation
- Logo: `text-primary-purple`
- Mobile menu button: `text-gray-300 hover:text-white`
- Links: `text-gray-300 hover:text-white`
- CTA button: `from-primary-purple to-deep-purple`

### Hero Section
- Gradient text: `from-primary-purple to-electric-violet`
- CTA buttons: `from-primary-purple to-deep-purple`
- Background overlay: `from-dark-space/50 via-midnight-black/30 to-deep-purple/20`

### Cards & Panels
- Background: `from-primary-purple/10 to-electric-violet/10`
- Icons: `text-electric-violet`
- Borders: `border-electric-violet/30`

### Footer
- Background: `bg-midnight-black`
- Gradient elements: `from-primary-purple to-electric-violet`
- Links: `text-gray-400 hover:text-white`

## Special Effects

### Shadow Colors
```css
shadow-purple-500/25
shadow-lg (with purple tint on hover)
```

### Canvas Background
```javascript
// Base color for animated background
ctx.fillStyle = "#0F0A1F"; // midnight-black
background: "linear-gradient(to bottom, #0F0A1F, #0F0A1F)"
```

## Color Usage Patterns

1. **Primary Actions**: `from-primary-purple to-deep-purple`
2. **Highlights**: `text-electric-violet`
3. **Subtle Backgrounds**: `primary-purple/10`, `electric-violet/10`
4. **Dark Backgrounds**: `midnight-black`, `dark-space`
5. **Accents**: `accent-magenta` (sparingly used)
6. **Text on Dark**: `text-white`, `text-gray-300`, `text-gray-400`

## Restoration Instructions

To restore these colors:

1. Replace the colors object in `tailwind.config.ts` with the custom colors above
2. Update CSS variables in `globals.css`
3. Restore wave colors in `animated-wave-background.tsx`
4. Ensure all gradient and color classes match the patterns listed above

## Notes

- The primary purple (#8B5CF6) is used consistently across all major CTAs
- Deep purple (#6D28D9) provides depth in gradients
- Electric violet (#A78BFA) is used for highlights and hover states
- The wave animation uses higher opacity values (0.475, 0.425, 0.375) for vibrant effect
- Glass effects use 10% opacity for backgrounds with purple tints