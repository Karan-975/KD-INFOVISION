'use client';

import React, { useEffect, useRef } from 'react';

/**
 * StripeFiberBurst - High-fidelity recreation of Stripe's radiant fiber stick burst animation
 * Styled to match KD Infovision's dark obsidian theme (#040612) with neon violet, lavender,
 * cyan, and electric blue glowing fibers and pulsating tip nodes.
 * 
 * Configured with:
 * 1. Wide horizontal flank spread to fully fill the remaining space on left and right.
 * 2. Capped vertical reach leaving proper breathing space below headings and subtitles.
 * 3. Origin circle/bead completely removed for a natural, seamless emission from the baseline.
 */
export default function StripeFiberBurst({
  height = 290,
  fiberCount = 210,
  className = '',
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let heightPx = 0;
    let dpr = 1;

    // Mouse tracking for interactive bending and glowing
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isHovered: false,
    };

    // Color definitions matching our theme (Violet, Lavender, Cyan, Electric Blue, Mint)
    const themeColors = [
      { r: 157, g: 168, b: 251, hex: '#9DA8FB' }, // Soft Lavender
      { r: 146, g: 102, b: 253, hex: '#9266FD' }, // Vivid Violet
      { r: 56,  g: 189, b: 248, hex: '#38BDF8' }, // Sky Blue
      { r: 6,   g: 182, b: 212, hex: '#06B6D4' }, // Cyan
      { r: 0,   g: 229, b: 255, hex: '#00E5FF' }, // Electric Cyan
      { r: 167, g: 139, b: 250, hex: '#A78BFA' }, // Light Violet
      { r: 52,  g: 211, b: 153, hex: '#34D399' }, // Emerald Accent
    ];

    // Initialize fibers
    class Fiber {
      constructor(index, total) {
        this.index = index;
        this.total = total;
        this.init();
      }

      init() {
        // Distribute angles in a smooth hemisphere radiating upwards (from 192° to 348°)
        const t = this.index / (this.total - 1); // 0 to 1
        
        // Radians: PI + 0.18 to 2*PI - 0.18
        const minAngle = Math.PI + 0.18;
        const maxAngle = Math.PI * 2 - 0.18;
        
        // Natural dome density distribution
        const centeredT = (t - 0.5) * 2; // -1 to 1
        const curvedT = Math.sign(centeredT) * Math.pow(Math.abs(centeredT), 0.95);
        this.baseAngle = (Math.PI * 1.5) + (curvedT * (maxAngle - minAngle) * 0.5);
        this.currentAngle = this.baseAngle;

        // Length envelope: dome/elliptical shape, longer near top, with organic variations
        const verticalFactor = Math.abs(Math.sin(this.baseAngle)); // 1 at top (270 deg), lower at sides
        this.domeEnvelope = 0.55 + 0.45 * Math.pow(verticalFactor, 0.75);
        
        // Organic length variation (exact earlier formula)
        const lengthRandom = 0.65 + Math.random() * 0.5;
        this.baseLengthFactor = this.domeEnvelope * lengthRandom;
        this.currentLength = 100;

        // Wave animation properties
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.6 + Math.random() * 0.8;
        this.swayAmp = 0.015 + Math.random() * 0.025; // radians of sway
        this.lengthAmp = 0.03 + Math.random() * 0.04;

        // Pulse properties
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.8 + Math.random() * 1.2;

        // Visual attributes
        this.colorObj = themeColors[this.index % themeColors.length];
        this.dotRadius = 1.6 + Math.random() * 1.8;
        this.lineWidth = 1.0 + Math.random() * 0.8;
        
        // Base opacity
        this.baseAlpha = 0.45 + Math.random() * 0.45;
      }

      update(time, originX, originY, maxRadius) {
        // 1. Natural organic harmonic oscillation (breathing sway and stretch)
        const wave = Math.sin(time * this.speed + this.phase);
        const lengthWave = Math.cos(time * this.speed * 0.85 + this.phase * 1.4);
        
        let targetAngle = this.baseAngle + wave * this.swayAmp;
        let targetLength = maxRadius * (this.baseLengthFactor + lengthWave * this.lengthAmp);

        // 2. Interactive Cursor deflection and attraction
        if (mouse.isHovered) {
          const tipX = originX + Math.cos(this.currentAngle) * this.currentLength;
          const tipY = originY + Math.sin(this.currentAngle) * this.currentLength;

          const dx = mouse.x - tipX;
          const dy = mouse.y - tipY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 180 * dpr;

          if (dist < influenceRadius) {
            const force = (1 - dist / influenceRadius);
            const angleToMouse = Math.atan2(mouse.y - originY, mouse.x - originX);
            const angleDiff = angleToMouse - this.baseAngle;
            
            targetAngle += angleDiff * force * 0.35;
            targetLength += force * (35 * dpr);
          }
        }

        // Smooth spring interpolation
        this.currentAngle += (targetAngle - this.currentAngle) * 0.12;
        this.currentLength += (targetLength - this.currentLength) * 0.12;

        // Pulse intensity for tip glow
        this.pulse = 0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulsePhase);
      }

      draw(ctx, originX, originY) {
        const tipX = originX + Math.cos(this.currentAngle) * this.currentLength;
        const tipY = originY + Math.sin(this.currentAngle) * this.currentLength;

        const { r, g, b } = this.colorObj;

        // Draw radiant stick / line with gradient
        const lineGrad = ctx.createLinearGradient(originX, originY, tipX, tipY);
        // Base is transparent deep violet to merge seamlessly into origin
        lineGrad.addColorStop(0, 'rgba(124, 58, 237, 0.05)');
        lineGrad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${this.baseAlpha * 0.35})`);
        lineGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${this.baseAlpha})`);

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(tipX, tipY);
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = this.lineWidth * dpr;
        ctx.stroke();

        // Draw Tip Node (Dot)
        const dotAlpha = Math.min(1, this.baseAlpha + this.pulse * 0.3);
        const tipRadius = (this.dotRadius + this.pulse * 0.8) * dpr;

        // Outer soft glow around dot
        const glowRadius = tipRadius * 3.5;
        const glowGrad = ctx.createRadialGradient(tipX, tipY, tipRadius * 0.5, tipX, tipY, glowRadius);
        glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${dotAlpha * 0.6})`);
        glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(tipX, tipY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Inner solid dot
        ctx.beginPath();
        ctx.arc(tipX, tipY, tipRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha})`;
        ctx.fill();

        // Core white-hot spark in center of dot
        ctx.beginPath();
        ctx.arc(tipX, tipY, tipRadius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha * 0.9})`;
        ctx.fill();
      }
    }

    // Create fiber collection
    let fibers = [];
    const initFibers = () => {
      fibers = [];
      for (let i = 0; i < fiberCount; i++) {
        fibers.push(new Fiber(i, fiberCount));
      }
    };
    initFibers();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      heightPx = height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = heightPx * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${heightPx}px`;

      // Update fiber base lengths on resize
      const maxRadius = Math.min(width * 0.50, heightPx * 0.90) * dpr;
      fibers.forEach(f => {
        f.currentLength = maxRadius * f.baseLengthFactor;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse event handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) * dpr;
      mouse.targetY = (e.clientY - rect.top) * dpr;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('mousemove', handleMouseMove);
      containerEl.addEventListener('mouseleave', handleMouseLeave);
    }

    // Pause when out of view
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // Main render loop
    let startTime = performance.now();

    const render = (now) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (now - startTime) * 0.001;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Origin point: bottom center of the canvas
      const originX = canvas.width / 2;
      const originY = canvas.height - 2 * dpr;
      const maxRadius = Math.min(canvas.width * 0.50, canvas.height * 0.90);

      // Soft ambient base glow where fibers emerge (no bright circular core bead/circle)
      const baseGlowRadius = 120 * dpr;
      const baseGlow = ctx.createRadialGradient(originX, originY, 0, originX, originY, baseGlowRadius);
      baseGlow.addColorStop(0, 'rgba(146, 102, 253, 0.28)');
      baseGlow.addColorStop(0.4, 'rgba(6, 182, 212, 0.14)');
      baseGlow.addColorStop(0.8, 'rgba(124, 58, 237, 0.04)');
      baseGlow.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(originX, originY, baseGlowRadius, Math.PI, Math.PI * 2);
      ctx.fillStyle = baseGlow;
      ctx.fill();

      // Use additive blend mode for luminous fiber optics
      ctx.globalCompositeOperation = 'screen';

      // Update and draw all fibers
      for (let i = 0; i < fibers.length; i++) {
        fibers[i].update(elapsed, originX, originY, maxRadius);
        fibers[i].draw(ctx, originX, originY);
      }

      // Reset composite operation (origin circle removed per request)
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
        containerEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [fiberCount, height]);

  return (
    <div
      ref={containerRef}
      className={`stripe-fiber-burst-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        pointerEvents: 'auto',
        cursor: 'crosshair',
        userSelect: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: `${height}px`,
        }}
      />
    </div>
  );
}
