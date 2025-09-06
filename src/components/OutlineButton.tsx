"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const OutlineButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: OutlineButtonProps) => {
  const baseClasses = "rounded-lg border bg-background/80 backdrop-blur-sm transition-all duration-200";
  
  const variantClasses = {
    primary: cn(
      'border-purple-500 text-purple-700 dark:text-purple-300',
      'hover:bg-purple-50 dark:hover:bg-purple-950/30',
      'focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
      'active:bg-purple-100 dark:active:bg-purple-900/50'
    ),
    secondary: cn(
      'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300',
      'hover:bg-gray-50 dark:hover:bg-gray-800/30',
      'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
      'active:bg-gray-100 dark:active:bg-gray-700/50'
    ),
    ghost: cn(
      'border-transparent text-gray-700 dark:text-gray-300',
      'hover:bg-gray-50 dark:hover:bg-gray-800/30',
      'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
    )
  };

  const sizeClasses = {
    sm: 'min-h-9 min-w-9 px-3 py-2 text-sm',
    md: 'min-h-11 min-w-11 px-4 py-3 text-base',
    lg: 'min-h-12 min-w-12 px-6 py-4 text-lg'
  };

  return (
    <Button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};