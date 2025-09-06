"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface OutlineGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
}

export const OutlineGrid = ({ 
  children, 
  className,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md'
}: OutlineGridProps) => {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={cn(
      'grid',
      `grid-cols-${columns.mobile}`,
      `md:grid-cols-${columns.tablet}`,
      `lg:grid-cols-${columns.desktop}`,
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
};