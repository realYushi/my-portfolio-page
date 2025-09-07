import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { logPerformanceMetrics } from "./utils/performance";

const App = () => {
  // Log performance metrics after the app loads (development only)
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => logPerformanceMetrics(), 100);
    }, { once: true, passive: true });

    // Improve back/forward cache compatibility
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was restored from bfcache
        console.log('Page restored from back/forward cache');
      }
    }, { passive: true });

    // Clean up any blocking resources before page is cached
    window.addEventListener('pagehide', () => {
      // Cancel any ongoing animations or timers
      // This helps with bfcache eligibility
    }, { passive: true });
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;