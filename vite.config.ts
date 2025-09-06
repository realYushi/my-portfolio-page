import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";
import path from "path";

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sleepy-octopus-chirp/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    dyadComponentTagger(), 
    react(),
    // Only add compression in build mode for GitHub Pages
    ...(command === 'build' ? [
      compression({
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false,
        threshold: 1024,
        compressionOptions: { level: 9 }
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br', 
        deleteOriginFile: false,
        threshold: 1024
      })
    ] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable compression and optimization
    minify: 'esbuild' as const,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    // Enable compression
    assetsInlineLimit: 4096,
  },
}));
