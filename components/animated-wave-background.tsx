"use client";

import { useEffect, useRef } from "react";

export default function AnimatedWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Wave settings from LinkedIn Profile Enhancer
    const waves = [
      {
        amplitude: 200,
        wavelength: 0.008,
        frequency: 0.015,
        offset: -100,
        colors: [
          { r: 139, g: 92, b: 246, a: 0.95 }, // primary-purple
          { r: 109, g: 40, b: 217, a: 0.75 }  // deep-purple
        ]
      },
      {
        amplitude: 250,
        wavelength: 0.006,
        frequency: 0.01,
        offset: 0,
        colors: [
          { r: 109, g: 40, b: 217, a: 0.85 }, // deep-purple
          { r: 167, g: 139, b: 250, a: 0.65 } // electric-violet
        ]
      },
      {
        amplitude: 160,
        wavelength: 0.01,
        frequency: 0.018,
        offset: 100,
        colors: [
          { r: 217, g: 70, b: 239, a: 0.75 }, // accent-magenta
          { r: 139, g: 92, b: 246, a: 0.55 }  // primary-purple
        ]
      }
    ];

    const drawWave = (wave: typeof waves[0], index: number) => {
      if (!ctx || !canvas) return;

      const points: { x: number; y: number }[] = [];
      
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = 
          canvas.height / 2 +
          wave.offset +
          wave.amplitude * Math.sin(x * wave.wavelength + time * wave.frequency) +
          wave.amplitude * 0.5 * Math.sin(x * wave.wavelength * 2 + time * wave.frequency * 0.5) +
          Math.sin(x * 0.003 + time * 0.01) * 50;

        points.push({ x, y });
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      // Create gradient using wave colors
      const gradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
      gradient.addColorStop(0, `rgba(${wave.colors[0].r}, ${wave.colors[0].g}, ${wave.colors[0].b}, ${wave.colors[0].a})`);
      gradient.addColorStop(1, `rgba(${wave.colors[1].r}, ${wave.colors[1].g}, ${wave.colors[1].b}, ${wave.colors[1].a})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with dark background
      ctx.fillStyle = "#0F0A1F"; // midnight-black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle gradient overlay
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "rgba(26, 15, 46, 0.8)"); // dark-space
      bgGradient.addColorStop(0.5, "rgba(15, 10, 31, 0.9)"); // midnight-black
      bgGradient.addColorStop(1, "rgba(109, 40, 217, 0.1)"); // deep-purple
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves with index
      waves.forEach((wave, index) => {
        drawWave(wave, index);
      });

      time += 0.5; // Slower time increment for smoother animation
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: "linear-gradient(to bottom, #0F0A1F, #1A0F2E)",
      }}
    />
  );
}