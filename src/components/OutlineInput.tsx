"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface OutlineInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const OutlineInput = ({ 
  label, 
  error, 
  className,
  ...props 
}: OutlineInputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
        </label>
      )}
      <Input
        className={cn(
          'rounded-lg border-gray-300 dark:border-gray-700 bg-background/80 backdrop-blur-sm',
          'focus:border-purple-500 focus:ring-2 focus:ring-purple-500',
          'min-h-11 px-4 py-3 text-base',
          'transition-all duration-200',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};