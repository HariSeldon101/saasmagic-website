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

    const waves = [
      {
        amplitude: 75, // More random - increased from 50
        frequency: 0.015,
        speed: 0.0144, // 40% slower (was 0.024)
        color: "139, 92, 246", // primary-purple
        opacity: 0.4,
        yOffset: 0.25,
      },
      {
        amplitude: 45, // More random - increased from 35
        frequency: 0.018,
        speed: 0.0108, // 40% slower (was 0.018)
        color: "109, 40, 217", // deep-purple
        opacity: 0.3,
        yOffset: 0.35,
      },
      {
        amplitude: 90, // More random - increased from 60
        frequency: 0.012,
        speed: 0.018, // 40% slower (was 0.03)
        color: "167, 139, 250", // electric-violet
        opacity: 0.25,
        yOffset: 0.45,
      },
      {
        amplitude: 30, // More random - slightly increased from 25
        frequency: 0.02,
        speed: 0.0126, // 40% slower (was 0.021)
        color: "217, 70, 239", // accent-magenta
        opacity: 0.2,
        yOffset: 0.55,
      },
    ];

    const drawWave = (wave: typeof waves[0], timeOffset: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x <= canvas.width; x++) {
        const y =
          canvas.height * wave.yOffset +
          Math.sin(x * wave.frequency + timeOffset) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      // Create gradient for each wave
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `rgba(${wave.color}, 0)`);
      gradient.addColorStop(0.5, `rgba(${wave.color}, ${wave.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${wave.color}, ${wave.opacity})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
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

      // Draw waves
      waves.forEach((wave) => {
        drawWave(wave, time * wave.speed);
      });

      time += 1;
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