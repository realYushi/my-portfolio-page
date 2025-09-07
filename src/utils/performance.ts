// Simple performance monitoring utilities

export interface PerformanceMetrics {
  navigationStart: number;
  domContentLoaded: number;
  loadComplete: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
}

/**
 * Get basic performance metrics
 */
export const getPerformanceMetrics = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = window.performance.timing;
  const metrics: PerformanceMetrics = {
    navigationStart: navigation.navigationStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
    loadComplete: navigation.loadEventEnd - navigation.navigationStart,
  };

  // Get paint metrics if available
  try {
    const paintEntries = window.performance.getEntriesByType('paint');
    paintEntries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        metrics.firstContentfulPaint = entry.startTime;
      }
    });

    // LCP from PerformanceObserver (if available)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          metrics.largestContentfulPaint = lastEntry.startTime;
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported
      }
    }
  } catch (error) {
    console.warn('Performance metrics not fully available:', error);
  }

  return metrics;
};

/**
 * Log performance metrics to console (development only)
 */
export const logPerformanceMetrics = (): void => {
  if (import.meta.env.DEV) {
    const metrics = getPerformanceMetrics();
    if (metrics) {
      console.group('📊 Performance Metrics');
      console.log('DOM Content Loaded:', `${metrics.domContentLoaded}ms`);
      console.log('Load Complete:', `${metrics.loadComplete}ms`);
      if (metrics.firstContentfulPaint) {
        console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
      }
      if (metrics.largestContentfulPaint) {
        console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      }
      console.groupEnd();
    }
  }
};

/**
 * Simple component render time measurement
 */
export const measureComponentRender = (componentName: string) => {
  if (!import.meta.env.DEV) return { start: () => {}, end: () => {} };
  
  let startTime = 0;
  
  return {
    start: () => {
      startTime = performance.now();
    },
    end: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      if (duration > 16.67) { // Longer than 1 frame at 60fps
        console.warn(`⚠️ ${componentName} render took ${duration.toFixed(2)}ms`);
      }
    }
  };
};