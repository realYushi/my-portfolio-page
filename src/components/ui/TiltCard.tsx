"use client";

import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [springs, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 280, friction: 20 }
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    
    api.start({
      x: (x - centerX) / 10,
      y: (y - centerY) / 10,
      rotateX,
      rotateY
    });
  };

  const handleMouseLeave = () => {
    api.start({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0
    });
  };

  return (
    <animated.div
      ref={ref}
      className={`transform-gpu transition-all duration-300 ${className}`}
      style={{
        transform: springs.rotateX.to((rx) => springs.rotateY.to((ry) => 
          `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${springs.x.to(x => x)}px, ${springs.y.to(y => y)}px, 0)`
        ))
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
};