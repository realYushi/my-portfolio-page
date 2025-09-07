import { useState, useEffect, useRef, useCallback } from "react";

interface UseOptimizedScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  triggerOnce?: boolean;
}

export const useOptimizedScrollAnimation = (
  itemCount: number,
  options: UseOptimizedScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 150,
    triggerOnce = true,
  } = options;

  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const animationFrameId = useRef<number>();

  // Optimized stagger function using requestAnimationFrame
  const triggerStaggeredAnimation = useCallback(() => {
    if (hasTriggered && triggerOnce) return;
    
    let currentIndex = 0;
    
    const animate = () => {
      if (currentIndex < itemCount) {
        setVisibleItems(prev => {
          const newItems = [...prev];
          newItems[currentIndex] = true;
          return newItems;
        });
        
        currentIndex++;
        
        // Use setTimeout for stagger delay, but batch updates
        setTimeout(() => {
          animationFrameId.current = requestAnimationFrame(animate);
        }, staggerDelay);
      }
    };
    
    if (!hasTriggered) {
      setHasTriggered(true);
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [hasTriggered, itemCount, staggerDelay, triggerOnce]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || (hasTriggered && triggerOnce)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerStaggeredAnimation();
            
            // Disconnect observer if we only want to trigger once
            if (triggerOnce) {
              observer.disconnect();
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [threshold, rootMargin, triggerStaggeredAnimation, triggerOnce, hasTriggered]);

  const getItemClass = useCallback((index: number) => {
    return visibleItems[index] ? 'card-animate-visible' : 'card-animate-hidden';
  }, [visibleItems]);

  // Reset function for components that need to re-trigger
  const reset = useCallback(() => {
    setVisibleItems(new Array(itemCount).fill(false));
    setHasTriggered(false);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, [itemCount]);

  return {
    containerRef,
    getItemClass,
    visibleItems,
    hasTriggered,
    reset,
  };
};