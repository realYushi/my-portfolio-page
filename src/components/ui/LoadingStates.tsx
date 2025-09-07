import { memo } from "react";

// Skeleton components for different layouts
export const CardSkeleton = memo(() => (
  <div className="card-enhanced animate-pulse">
    <div className="p-6">
      <div className="w-16 h-16 bg-muted/50 rounded-2xl mx-auto mb-6" />
      <div className="space-y-3">
        <div className="h-6 bg-muted/50 rounded mx-auto w-3/4" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-full" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-2/3" />
      </div>
    </div>
  </div>
));

CardSkeleton.displayName = "CardSkeleton";

export const SectionSkeleton = memo(({ cards = 3 }: { cards?: number }) => (
  <section className="section-padding">
    <div className="section-container">
      {/* Title skeleton */}
      <div className="text-center mb-16">
        <div className="h-12 bg-muted/50 rounded mx-auto w-64 mb-6 animate-pulse" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-96 mb-2 animate-pulse" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-80 animate-pulse" />
      </div>
      
      {/* Cards skeleton */}
      <div className="section-grid-3">
        {Array.from({ length: cards }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
));

SectionSkeleton.displayName = "SectionSkeleton";

export const HeroSkeleton = memo(() => (
  <section className="hero-section relative w-full overflow-hidden">
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-muted/10 via-muted/20 to-background/50 animate-pulse" />
    <div className="relative section-container py-12 sm:py-20 lg:py-32 z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          {/* Name skeleton */}
          <div className="h-16 bg-muted/50 rounded w-80 animate-pulse" />
          
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-8 bg-muted/30 rounded w-full animate-pulse" />
            <div className="h-8 bg-muted/30 rounded w-3/4 animate-pulse" />
          </div>
          
          {/* Location skeleton */}
          <div className="h-12 bg-muted/30 rounded-full w-64 animate-pulse" />
          
          {/* Description skeleton */}
          <div className="space-y-3 p-6 bg-muted/20 rounded-xl animate-pulse">
            <div className="h-4 bg-muted/40 rounded w-full" />
            <div className="h-4 bg-muted/40 rounded w-5/6" />
            <div className="h-4 bg-muted/40 rounded w-4/6" />
          </div>
          
          {/* Buttons skeleton */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="h-12 bg-primary/20 rounded w-32 animate-pulse" />
              <div className="h-12 bg-muted/30 rounded w-32 animate-pulse" />
            </div>
            <div className="flex gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="w-12 h-12 bg-muted/30 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Image skeleton */}
        <div className="h-72 sm:h-96 lg:h-[32rem] bg-muted/30 rounded-3xl animate-pulse" />
      </div>
    </div>
  </section>
));

HeroSkeleton.displayName = "HeroSkeleton";

export const ContactSkeleton = memo(() => (
  <section className="bg-gradient-to-b from-background to-muted/10 border-t border-border section-padding-small">
    <div className="section-container max-w-5xl">
      <div className="text-center mb-16">
        <div className="h-12 bg-muted/50 rounded mx-auto w-64 mb-6 animate-pulse" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-96 mb-12 animate-pulse" />
        
        <div className="flex justify-center gap-4">
          <div className="h-12 bg-primary/20 rounded w-32 animate-pulse" />
          <div className="h-12 bg-muted/30 rounded w-32 animate-pulse" />
        </div>
      </div>
      
      {/* Social links skeleton */}
      <div className="flex justify-center gap-12 mb-20">
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-muted/30 rounded mb-4 animate-pulse" />
            <div className="h-4 bg-muted/30 rounded w-16 animate-pulse" />
          </div>
        ))}
      </div>
      
      {/* Footer skeleton */}
      <div className="text-center pt-12 border-t border-border/50">
        <div className="h-6 bg-muted/30 rounded mx-auto w-48 mb-6 animate-pulse" />
        <div className="h-4 bg-muted/30 rounded mx-auto w-32 animate-pulse" />
      </div>
    </div>
  </section>
));

ContactSkeleton.displayName = "ContactSkeleton";