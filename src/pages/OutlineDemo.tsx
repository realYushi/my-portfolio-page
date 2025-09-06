"use client";

import React from 'react';
import { OutlineCard } from '@/components/OutlineCard';
import { OutlineButton } from '@/components/OutlineButton';
import { OutlineInput } from '@/components/OutlineInput';
import { OutlineContainer } from '@/components/OutlineContainer';
import { OutlineGrid } from '@/components/OutlineGrid';
import { OutlineSection } from '@/components/OutlineSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OutlineDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <OutlineSection padding="xl">
        <OutlineContainer maxWidth="lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Outline Design System
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Adaptive theme with purple accents and WCAG AA compliance
            </p>
          </div>

          {/* Buttons Demo */}
          <OutlineSection padding="md" background="muted">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Buttons
            </h2>
            <OutlineGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">
              <div className="space-y-4">
                <OutlineButton size="lg" variant="primary">
                  Primary Button
                </OutlineButton>
                <OutlineButton size="md" variant="primary">
                  Medium Primary
                </OutlineButton>
                <OutlineButton size="sm" variant="primary">
                  Small Primary
                </OutlineButton>
              </div>
              
              <div className="space-y-4">
                <OutlineButton size="lg" variant="secondary">
                  Secondary Button
                </OutlineButton>
                <OutlineButton size="md" variant="secondary">
                  Medium Secondary
                </OutlineButton>
                <OutlineButton size="sm" variant="secondary">
                  Small Secondary
                </OutlineButton>
              </div>
              
              <div className="space-y-4">
                <OutlineButton size="lg" variant="ghost">
                  Ghost Button
                </OutlineButton>
                <OutlineButton size="md" variant="ghost">
                  Medium Ghost
                </OutlineButton>
                <OutlineButton size="sm" variant="ghost">
                  Small Ghost
                </OutlineButton>
              </div>
            </OutlineGrid>
          </OutlineSection>

          {/* Cards Demo */}
          <OutlineSection padding="md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Cards
            </h2>
            <OutlineGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">
              <OutlineCard shadow="sm">
                <CardHeader>
                  <CardTitle>Small Shadow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Card with small shadow and full border
                  </p>
                </CardContent>
              </OutlineCard>

              <OutlineCard shadow="md" border="partial">
                <CardHeader>
                  <CardTitle>Medium Shadow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Card with medium shadow and partial border
                  </p>
                </CardContent>
              </OutlineCard>

              <OutlineCard shadow="lg">
                <CardHeader>
                  <CardTitle>Large Shadow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Card with large shadow and full border
                  </p>
                </CardContent>
              </OutlineCard>
            </OutlineGrid>
          </OutlineSection>

          {/* Forms Demo */}
          <OutlineSection padding="md" background="muted">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Form Elements
            </h2>
            <div className="max-w-md mx-auto space-y-6">
              <OutlineInput
                label="Email Address"
                placeholder="Enter your email"
                type="email"
              />
              
              <OutlineInput
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              
              <OutlineInput
                label="With Error"
                placeholder="This field has an error"
                error="Please enter a valid value"
              />
            </div>
          </OutlineSection>

          {/* Accessibility Info */}
          <OutlineSection padding="md">
            <OutlineCard>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>✓ WCAG AA Compliant:</strong> All components meet minimum 4.5:1 contrast ratio
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>✓ Keyboard Navigation:</strong> Clear focus states and proper tab order
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>✓ Touch Targets:</strong> Minimum 44px touch targets for mobile devices
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>✓ Responsive Design:</strong> Optimized for mobile, tablet, and desktop
                </div>
              </CardContent>
            </OutlineCard>
          </OutlineSection>
        </OutlineContainer>
      </OutlineSection>
    </div>
  );
};

export default OutlineDemo;