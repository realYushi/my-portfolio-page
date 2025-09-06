"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface OutlineSectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'accent';
}

export const OutlineSection = ({ 
  children, 
  className,
  padding = 'lg',
  background = 'default'
}: OutlineSectionProps) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    accent: 'bg-purple-50/50 dark:bg-purple-950/20'
  };

  return (
    <section className={cn(
      paddingClasses[padding],
      backgroundClasses[background],
      className
    )}>
      {children}
    </section>
  );
};