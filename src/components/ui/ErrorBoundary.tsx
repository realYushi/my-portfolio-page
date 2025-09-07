import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} retry={this.retry} />;
      }

      return <DefaultErrorFallback error={this.state.error!} retry={this.retry} />;
    }

    return this.props.children;
  }
}

// Default fallback component
const DefaultErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ error, retry }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-destructive/20">
    <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
    <h3 className="text-lg font-semibold text-foreground mb-2">Something went wrong</h3>
    <p className="text-sm text-muted-foreground mb-6 text-center max-w-md">
      {error.message || "An unexpected error occurred. Please try refreshing the page."}
    </p>
    <Button 
      onClick={retry}
      variant="outline"
      className="flex items-center gap-2"
    >
      <RefreshCw className="w-4 h-4" />
      Try Again
    </Button>
  </div>
);

// Lightweight fallback for non-critical components
export const LightweightErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ retry }) => (
  <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg">
    <Button 
      onClick={retry}
      variant="ghost"
      size="sm"
      className="text-muted-foreground hover:text-foreground"
    >
      <RefreshCw className="w-4 h-4 mr-2" />
      Reload
    </Button>
  </div>
);

export default ErrorBoundary;