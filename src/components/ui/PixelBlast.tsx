"use client";

import React, { useRef, useEffect, useState } from 'react';

interface PixelBlastProps {
  variant?: 'circle' | 'square' | 'triangle';
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

export const PixelBlast = ({
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
  className = ''
}: PixelBlastProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple pixel pattern implementation
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const baseSize = pixelSize * patternScale;
      const spacing = baseSize * patternDensity;
      
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const size = baseSize * (1 + (Math.random() - 0.5) * pixelSizeJitter);
          const alpha = transparent ? 0.3 : 0.6;
          
          ctx.fillStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
          
          if (variant === 'circle') {
            ctx.beginPath();
            ctx.arc(x + spacing/2, y + spacing/2, size/2, 0, 2 * Math.PI);
            ctx.fill();
          } else {
            ctx.fillRect(x + spacing/2 - size/2, y + spacing/2 - size/2, size, size);
          }
        }
      }
    };

    drawPattern();
    
    // Simple animation loop
    let animationId: number;
    const animate = () => {
      drawPattern();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, [dimensions, variant, pixelSize, color, patternScale, patternDensity, pixelSizeJitter, transparent]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ 
        opacity: transparent ? 0.3 : 0.6,
        mixBlendMode: 'overlay'
      }}
    />
  );
};