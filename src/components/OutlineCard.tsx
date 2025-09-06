"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface OutlineCardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg';
  border?: 'full' | 'partial';
}

export const OutlineCard = ({ 
  children, 
  className, 
  shadow = 'md', 
  border = 'full' 
}: OutlineCardProps) => {
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const borderClasses = {
    full: 'border',
    partial: 'border-t border-x'
  };

  return (
    <div
      className={cn(
        'rounded-lg bg-background/80 backdrop-blur-sm transition-all duration-200',
        'border-gray-300 dark:border-gray-700',
        'hover:border-purple-500 dark:hover:border-purple-400',
        'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        shadowClasses[shadow],
        borderClasses[border],
        className
      )}
      style={{
        minHeight: '44px',
        minWidth: '44px'
      }}
    >
      {children}
    </div>
  );
};