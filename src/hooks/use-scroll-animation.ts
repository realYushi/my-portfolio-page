import { useState, useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export const useScrollAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px",
    staggerDelay = 100,
  } = options;

  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            
            // Trigger animations with stagger
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const newItems = [...prev];
                  newItems[i] = true;
                  return newItems;
                });
              }, i * staggerDelay);
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
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [itemCount, threshold, rootMargin, staggerDelay, hasTriggered]);

  const getItemClass = (index: number) => {
    return visibleItems[index] ? 'card-animate-visible' : 'card-animate-hidden';
  };

  return {
    containerRef,
    getItemClass,
    visibleItems,
  };
};