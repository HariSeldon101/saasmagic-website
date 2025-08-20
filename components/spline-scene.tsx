"use client";

import Spline from "@splinetool/react-spline/next";

export default function SplineScene() {
  return (
    <Spline
      scene="https://prod.spline.design/lni5WS7hBHllBtyc/scene.splinecode"
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}