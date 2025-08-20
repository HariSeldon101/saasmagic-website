"use client";

import { usePathname } from "next/navigation";
import AnimatedWaveBackground from "@/components/animated-wave-background";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Don't show wave background on homepage
  const showWaveBackground = pathname !== "/";
  
  return (
    <>
      {showWaveBackground && <AnimatedWaveBackground />}
      {children}
    </>
  );
}