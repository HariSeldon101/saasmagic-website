"use client";

import AnimatedWaveBackground from "@/components/animated-wave-background";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedWaveBackground />
      {children}
    </>
  );
}