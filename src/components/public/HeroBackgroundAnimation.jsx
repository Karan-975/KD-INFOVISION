'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroBackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles = [];
    const maxDistance = 125;

    // Mouse tracking for subtle interactive connection
    const mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parentElem = canvas.parentElement;
    parentElem.addEventListener('mousemove', handleMouseMove);
    parentElem.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.3 ? 'rgba(61, 155, 233, ' : 'rgba(94, 195, 245, ',
        baseAlpha: Math.random() * 0.4 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse opacity
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.15;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Connect particles with proximity lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(61, 155, 233, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Subtle connection to mouse cursor if within radius
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(94, 195, 245, ${mAlpha})`;
            ctx.lineWidth = 1.2;
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
      parentElem.removeEventListener('mousemove', handleMouseMove);
      parentElem.removeEventListener('mouseleave', handleMouseLeave);
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
      }}
    >
      {/* Dynamic Ambient Glowing Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61, 155, 233, 0.12) 0%, rgba(15, 35, 71, 0) 70%)',
          filter: 'blur(70px)',
          animation: 'floatOrb1 14s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(94, 195, 245, 0.10) 0%, rgba(15, 35, 71, 0) 70%)',
          filter: 'blur(80px)',
          animation: 'floatOrb2 18s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Data Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />

      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      <style jsx>{`
        @keyframes floatOrb1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, -40px) scale(1.1);
          }
          100% {
            transform: translate(-40px, 30px) scale(0.95);
          }
        }
        @keyframes floatOrb2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-70px, 50px) scale(1.08);
          }
          100% {
            transform: translate(50px, -30px) scale(0.92);
          }
        }
      `}</style>
    </div>
  );
}
