'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Unique Enterprise Ambient Wavefield Animation
 * - Harmonic fluid wave ribbons rendered in mathematical precision
 * - Soft reactive mouse field with smooth damping
 * - Luminous ambient light diffusion in brand palette (#158AE2, #052D5D, #00C2FF)
 * - Ultra-clean, 60fps, high-DPI retina display ready
 */
export default function HeroBackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with smooth easing interpolation
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 220,
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
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Wave configuration: 4 harmonic layers with distinct phases, frequencies, and opacities
    const waveLayers = [
      {
        baseY: 0.62,
        amplitude: 45,
        frequency: 0.0018,
        speed: 0.008,
        colorStart: 'rgba(21, 138, 226, 0.09)',
        colorEnd: 'rgba(5, 45, 93, 0.02)',
        strokeColor: 'rgba(21, 138, 226, 0.35)',
        lineWidth: 1.5,
      },
      {
        baseY: 0.68,
        amplitude: 55,
        frequency: 0.0014,
        speed: 0.006,
        colorStart: 'rgba(0, 194, 255, 0.07)',
        colorEnd: 'rgba(21, 138, 226, 0.01)',
        strokeColor: 'rgba(0, 194, 255, 0.28)',
        lineWidth: 1.2,
      },
      {
        baseY: 0.74,
        amplitude: 65,
        frequency: 0.0011,
        speed: -0.005,
        colorStart: 'rgba(5, 45, 93, 0.06)',
        colorEnd: 'rgba(21, 138, 226, 0.01)',
        strokeColor: 'rgba(5, 45, 93, 0.22)',
        lineWidth: 1.2,
      },
      {
        baseY: 0.82,
        amplitude: 50,
        frequency: 0.0016,
        speed: 0.007,
        colorStart: 'rgba(21, 138, 226, 0.05)',
        colorEnd: 'rgba(255, 255, 255, 0)',
        strokeColor: 'rgba(21, 138, 226, 0.18)',
        lineWidth: 1,
      },
    ];

    // Elegant architectural grid markers (+)
    const markerGrid = [];
    const markerSpacing = 120;
    const initMarkers = () => {
      markerGrid.length = 0;
      for (let x = 60; x < width; x += markerSpacing) {
        for (let y = 60; y < height; y += markerSpacing) {
          markerGrid.push({
            x,
            y,
            alpha: 0.15 + Math.random() * 0.15,
            pulseSpeed: 0.01 + Math.random() * 0.015,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    };
    initMarkers();

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Soft Ambient Radial Light Blurs (Atmospheric Depth)
      const ambientLight1 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.35,
        50,
        width * 0.8,
        height * 0.35,
        Math.min(width, height) * 0.65
      );
      ambientLight1.addColorStop(0, 'rgba(21, 138, 226, 0.07)');
      ambientLight1.addColorStop(0.5, 'rgba(0, 194, 255, 0.025)');
      ambientLight1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = ambientLight1;
      ctx.fillRect(0, 0, width, height);

      const ambientLight2 = ctx.createRadialGradient(
        width * 0.15,
        height * 0.75,
        30,
        width * 0.15,
        height * 0.75,
        Math.min(width, height) * 0.5
      );
      ambientLight2.addColorStop(0, 'rgba(5, 45, 93, 0.045)');
      ambientLight2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = ambientLight2;
      ctx.fillRect(0, 0, width, height);

      // 2. Architectural Coordinate Plus Markers
      ctx.lineWidth = 1;
      for (let i = 0; i < markerGrid.length; i++) {
        const m = markerGrid[i];
        const pulse = Math.sin(time * m.pulseSpeed + m.pulsePhase);
        const currentAlpha = Math.max(0.04, m.alpha + pulse * 0.08);

        // Distance from mouse for interactive glow
        const dx = m.x - mouse.x;
        const dy = m.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let hoverBoost = 0;
        if (dist < mouse.radius) {
          hoverBoost = (1 - dist / mouse.radius) * 0.45;
        }

        ctx.strokeStyle = `rgba(21, 138, 226, ${currentAlpha + hoverBoost})`;
        const size = 3.5;
        ctx.beginPath();
        ctx.moveTo(m.x - size, m.y);
        ctx.lineTo(m.x + size, m.y);
        ctx.moveTo(m.x, m.y - size);
        ctx.lineTo(m.x, m.y + size);
        ctx.stroke();
      }

      // 3. Mathematical Harmonic Wave Ribbons
      waveLayers.forEach((layer) => {
        const yCenter = height * layer.baseY;
        const step = 20;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, yCenter);

        for (let x = 0; x <= width + step; x += step) {
          // Complex harmonic wave formula
          const baseSin = Math.sin(x * layer.frequency + time * layer.speed);
          const secondaryCos = Math.cos(x * layer.frequency * 0.65 + time * layer.speed * 1.3);
          let y = yCenter + (baseSin * layer.amplitude) + (secondaryCos * (layer.amplitude * 0.35));

          // Mouse displacement field
          if (mouse.x > -500) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius);
              // Smooth upward elastic pull
              y -= Math.sin(force * Math.PI) * 28;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Gradient fill under the ribbon
        const fillGrad = ctx.createLinearGradient(0, yCenter - layer.amplitude, 0, height);
        fillGrad.addColorStop(0, layer.colorStart);
        fillGrad.addColorStop(1, layer.colorEnd);
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Stroke line on the top wave crest
        ctx.strokeStyle = layer.strokeColor;
        ctx.lineWidth = layer.lineWidth;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
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
