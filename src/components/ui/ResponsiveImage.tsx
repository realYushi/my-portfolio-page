import { useState, useCallback, memo } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
  // Responsive image sources
  srcSet?: {
    webp?: string;
    avif?: string;
    fallback?: string;
  };
}

const ResponsiveImage = memo<ResponsiveImageProps>(({
  src,
  alt,
  className = "",
  sizes = "100vw",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  onLoad,
  onError,
  placeholder,
  srcSet
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    onError?.();
  }, [onError]);

  if (imageError) {
    return (
      <div className={`bg-muted/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-muted/40 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📸</span>
          </div>
          <p className="text-sm text-muted-foreground">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-muted/20 animate-pulse"
          style={placeholder ? { 
            backgroundImage: `url(${placeholder})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'blur(5px)'
          } : {}}
        />
      )}
      
      {/* Modern picture element for next-gen formats */}
      <picture>
        {/* AVIF - best compression */}
        {srcSet?.avif && (
          <source srcSet={srcSet.avif} type="image/avif" sizes={sizes} />
        )}
        
        {/* WebP - good compression with wide support */}
        {srcSet?.webp && (
          <source srcSet={srcSet.webp} type="image/webp" sizes={sizes} />
        )}
        
        {/* Fallback - original format */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
});

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;