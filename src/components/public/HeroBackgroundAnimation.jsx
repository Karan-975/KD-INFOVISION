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

    // Particle nodes configuration with KD Infovision exact logo palette:
    // Dark Navy: #052D5D (rgb 5, 45, 93)
    // Bright Electric Blue: #158AE2 (rgb 21, 138, 226)
    const particleCount = Math.min(Math.floor((width * height) / 16000), 55);
    const particles = [];
    const maxDistance = 135;

    // Mouse tracking for interactive proximity line attraction
    const mouse = { x: null, y: null, radius: 150 };

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

    // Initialize particles alternating between Navy (#052D5D) and Electric Blue (#158AE2)
    for (let i = 0; i < particleCount; i++) {
      const isElectricBlue = Math.random() > 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.2 + 1.2,
        colorPrefix: isElectricBlue ? 'rgba(21, 138, 226, ' : 'rgba(5, 45, 93, ',
        baseAlpha: isElectricBlue ? Math.random() * 0.35 + 0.3 : Math.random() * 0.25 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw constellation particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off canvas bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse opacity
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.12;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Connect particles with hairline proximity filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(21, 138, 226, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connection to mouse cursor if within interactive radius
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(21, 138, 226, ${mAlpha})`;
            ctx.lineWidth = 1.4;
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
        background: '#FFFFFF',
      }}
    >
      {/* Ambient Glowing Orbs on White (Electric Blue #158AE2 + Navy #052D5D) */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 138, 226, 0.09) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(75px)',
          animation: 'floatOrb1 16s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5, 45, 93, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(85px)',
          animation: 'floatOrb2 20s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Tech Grid Overlay for crisp white canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(5, 45, 93, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(5, 45, 93, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.8,
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
