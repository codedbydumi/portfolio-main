import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Safe performance optimizations (no CSS changes)
  build: {
    // Target modern browsers for better optimization
    target: 'es2020',
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor libraries
          vendor: ['react', 'react-dom'],
          
          // Router
          router: ['react-router-dom'],
          
          // Animation library (heavy)
          animations: ['framer-motion'],
          
          // UI utilities
          utils: ['clsx', 'tailwind-merge'],
          
          // Icons
          icons: ['lucide-react']
        }
      }
    },
    
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: mode === 'production',
        drop_debugger: true
      },
      format: {
        // Remove comments
        comments: false
      }
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    // Pre-bundle these dependencies
    include: [
      'react', 
      'react-dom', 
      'framer-motion',
      'react-router-dom',
      'lucide-react'
    ]
  }
}));