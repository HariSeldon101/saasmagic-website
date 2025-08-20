"use client";

import { useEffect, useState } from "react";

export default function SplineWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-electric-violet/10 to-midnight-black animate-pulse" />
    );
  }

  return (
    <div className="absolute inset-0">
      <iframe
        src="https://my.spline.design/lni5WS7hBHllBtyc/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
        allow="fullscreen"
      />
    </div>
  );
}