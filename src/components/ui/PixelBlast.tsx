"use client";

import React, { useEffect, useRef } from 'react';

interface PixelBlastProps {
  variant?: 'circle' | 'square' | 'diamond';
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  speed?: number;
  edgeFade?: number;
  transparent?: boolean;
  className?: string;
}

export const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = 'circle',
  pixelSize = 6,
  color = '#B19EEF',
  patternScale = 3,
  patternDensity = 1.2,
  pixelSizeJitter = 0.5,
  enableRipples = true,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid = true,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.6,
  edgeFade = 0.25,
  transparent = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas with transparency
      ctx.clearRect(0, 0, width, height);

      const baseSize = pixelSize;
      const scale = patternScale;
      const density = patternDensity;
      const jitter = pixelSizeJitter;

      for (let y = 0; y < height; y += baseSize * scale) {
        for (let x = 0; x < width; x += baseSize * scale) {
          if (Math.random() > density) continue;

          const sizeJitter = baseSize * (1 + (Math.random() - 0.5) * jitter);
          const currentSize = sizeJitter * scale;

          // Calculate distance from center for edge fade
          const centerX = width / 2;
          const centerY = height / 2;
          const distX = Math.abs(x - centerX) / centerX;
          const distY = Math.abs(y - centerY) / centerY;
          const maxDist = Math.max(distX, distY);
          const fade = Math.max(0, 1 - maxDist / edgeFade);

          if (fade <= 0) continue;

          // Liquid effect
          let liquidOffsetX = 0;
          let liquidOffsetY = 0;
          if (liquid) {
            const liquidTime = time * liquidWobbleSpeed;
            liquidOffsetX = Math.sin(x * liquidRadius + liquidTime) * liquidStrength * currentSize;
            liquidOffsetY = Math.cos(y * liquidRadius + liquidTime) * liquidStrength * currentSize;
          }

          // Ripple effect
          let rippleSize = 1;
          if (enableRipples) {
            const rippleTime = time * rippleSpeed;
            const rippleDist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            const ripple = Math.sin(rippleDist * rippleThickness - rippleTime) * rippleIntensityScale;
            rippleSize = 1 + Math.max(0, ripple);
          }

          const finalSize = currentSize * rippleSize * fade;

          ctx.fillStyle = color;
          ctx.globalAlpha = fade;

          const drawX = x + liquidOffsetX;
          const drawY = y + liquidOffsetY;

          switch (variant) {
            case 'circle':
              ctx.beginPath();
              ctx.arc(drawX, drawY, finalSize / 2, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 'square':
              ctx.fillRect(drawX - finalSize / 2, drawY - finalSize / 2, finalSize, finalSize);
              break;
            case 'diamond':
              ctx.save();
              ctx.translate(drawX, drawY);
              ctx.rotate(Math.PI / 4);
              ctx.fillRect(-finalSize / 2, -finalSize / 2, finalSize, finalSize);
              ctx.restore();
              break;
          }
        }
      }

      time += speed / 60;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [
    variant,
    pixelSize,
    color,
    patternScale,
    patternDensity,
    pixelSizeJitter,
    enableRipples,
    rippleSpeed,
    rippleThickness,
    rippleIntensityScale,
    liquid,
    liquidStrength,
    liquidRadius,
    liquidWobbleSpeed,
    speed,
    edgeFade,
    transparent,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default PixelBlast;