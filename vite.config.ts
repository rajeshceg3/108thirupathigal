/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // ⚡ Bolt Optimization: Split vendor chunks
        // Segregating stable dependencies (react, react-dom) from volatile app code
        // improves browser caching efficiency.
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    modulePreload: {
      // ⚡ Bolt Optimization: Disable module preload polyfill
      // Modern browsers support module preloading natively.
      // Removing this polyfill saves ~2kB of bundle size and improves initial load time.
      polyfill: false,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
})
