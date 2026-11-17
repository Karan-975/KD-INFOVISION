'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Professional Enterprise Neural & Data Mesh Animation for Footer
 * - Subtle ambient constellation of interconnected data nodes
 * - Represents Data & AI Architecture in mathematical harmony
 * - Soft mouse reactive field with smooth damping
 * - Top horizon light beam sweep
 * - 60fps high-DPI retina display ready, zero CPU strain
 */
export default function FooterBackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with easing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes definition
    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    const particles = [];

    const colors = [
      { r: 45, g: 212, b: 191 },  // Teal #2DD4BF
      { r: 56, g: 189, b: 248 },  // Sky/Cyan #38BDF8
      { r: 129, g: 140, b: 248 }, // Indigo #818CF8
      { r: 255, g: 255, b: 255 }, // White
    ];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.25,
        alpha: 0.3,
        r: col.r,
        g: col.g,
        b: col.b,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Top Horizon Ambient Light Beam
      const beamX = (Math.sin(time * 0.4) * 0.35 + 0.5) * width;
      const beamGrad = ctx.createRadialGradient(beamX, 0, 0, beamX, 0, width * 0.45);
      beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      beamGrad.addColorStop(0.4, 'rgba(45, 212, 191, 0.05)');
      beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, Math.min(height, 220));

      // 2. Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance/gentle interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 0.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Pulse alpha
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.15;
        p.alpha = Math.max(0.1, Math.min(0.8, p.baseAlpha + pulse));

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha})`;
        ctx.fill();
      }

      // 3. Draw Connecting Lines between nearby nodes
      const maxConnectDist = 135;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
        maskImage: 'radial-gradient(ellipse 95% 85% at 50% 25%, black 40%, transparent 95%)',
        WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 25%, black 40%, transparent 95%)',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
