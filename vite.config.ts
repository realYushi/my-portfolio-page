import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";
import path from "path";

export default defineConfig(({ command }) => ({
  base: '/',
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
    // Enable maximum compression and optimization
    minify: 'esbuild' as const,
    target: 'es2022',
    // ESBuild optimization options
    esbuild: {
      drop: ['console', 'debugger'],
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
      legalComments: 'none',
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['lucide-react'],
          // Split heavy components
          'animation-vendor': ['ogl'],
        },
        // Optimize chunk names for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') : 'chunk';
          return `assets/${facadeModuleId || 'chunk'}-[hash].js`;
        },
      },
    },
    // Reduce inline limit to force compression
    assetsInlineLimit: 1024,
    // Enable source map for debugging but exclude from production
    sourcemap: false,
    // Optimize CSS
    cssMinify: true,
  },
}));
