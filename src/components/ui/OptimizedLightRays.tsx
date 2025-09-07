import { lazy, Suspense, memo } from "react";
import ErrorBoundary, { LightweightErrorFallback } from "./ErrorBoundary";
import type { RaysOrigin } from "./lightRays";

// Lazy load the heavy LightRays component
const LightRays = lazy(() => 
  import("./lightRays").then(module => ({
    default: module.default
  }))
);

interface OptimizedLightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  fadeDistance?: number;
  pulsating?: boolean;
  saturation?: number;
  className?: string;
}

// Loading fallback for LightRays
const LightRaysLoader = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/5 via-primary/10 to-background/50 animate-pulse" />
);

// Memoized component to prevent unnecessary re-renders
const OptimizedLightRaysComponent = memo<OptimizedLightRaysProps>(({
  raysOrigin = "top-center",
  raysColor = "#8839ef",
  raysSpeed = 1.2,
  lightSpread = 1.2,
  rayLength = 2.5,
  followMouse = true,
  mouseInfluence = 0.08,
  noiseAmount = 0.02,
  distortion = 0.015,
  fadeDistance = 3.0,
  pulsating = true,
  saturation = 0.8,
  className = "absolute inset-0 w-full h-full"
}) => {
  return (
    <ErrorBoundary 
      fallback={LightweightErrorFallback}
      onError={(error) => {
        console.warn("LightRays component failed to load:", error.message);
      }}
    >
      <Suspense fallback={<LightRaysLoader />}>
        <LightRays
          raysOrigin={raysOrigin}
          raysColor={raysColor}
          raysSpeed={raysSpeed}
          lightSpread={lightSpread}
          rayLength={rayLength}
          followMouse={followMouse}
          mouseInfluence={mouseInfluence}
          noiseAmount={noiseAmount}
          distortion={distortion}
          fadeDistance={fadeDistance}
          pulsating={pulsating}
          saturation={saturation}
          className={className}
        />
      </Suspense>
    </ErrorBoundary>
  );
});

OptimizedLightRaysComponent.displayName = "OptimizedLightRays";

export default OptimizedLightRaysComponent;