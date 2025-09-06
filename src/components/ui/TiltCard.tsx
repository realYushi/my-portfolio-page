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
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0)',
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
    const translateX = (x - centerX) / 10;
    const translateY = (y - centerY) / 10;
    
    api.start({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`
    });
  };

  const handleMouseLeave = () => {
    api.start({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0)'
    });
  };

  return (
    <animated.div
      ref={ref}
      className={`transform-gpu transition-all duration-300 ${className}`}
      style={springs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
};