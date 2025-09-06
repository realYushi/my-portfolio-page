import React, { useEffect, useRef } from 'react';

type PixelBlastProps = {
  variant?: 'square' | 'circle' | 'triangle' | 'diamond';
  pixelSize?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = 'circle',
  pixelSize = 6,
  color = '#B19EEF',
  className,
  style
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simple CSS-based animation
    const div = document.createElement('div');
    div.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, ${color}20, ${color}10);
      pointer-events: none;
    `;

    // Create animated particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${color};
        border-radius: ${variant === 'circle' ? '50%' : '0%'};
        opacity: ${Math.random() * 0.5 + 0.3};
        animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      div.appendChild(particle);
    }

    container.appendChild(div);

    return () => {
      if (div.parentNode) div.parentNode.removeChild(div);
    };
  }, [color, variant]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden ${className ?? ''}`}
      style={style}
      aria-label="PixelBlast animated background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/30 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelBlast;