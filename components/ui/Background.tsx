"use client";

import { useEffect, useRef } from "react";

/** Ambient gradient orbs + a lightweight drifting particle field. */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type P = { x: number; y: number; r: number; vx: number; vy: number; life: number; speed: number; col: string };
    const make = (): P => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      life: Math.random(),
      speed: Math.random() * 0.015 + 0.003,
      col: Math.random() > 0.5 ? "0,245,212" : "124,58,237",
    });
    const count = W < 768 ? 45 : 90;
    const particles = Array.from({ length: count }, make);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += p.speed;
        if (p.life >= 1 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          particles[i] = make();
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},${Math.sin(p.life * Math.PI) * 0.5})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    // Pause when tab is hidden to save battery
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" />
    </div>
  );
}
