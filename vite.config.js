import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  assetsInclude: ['**/*.html']
})
