import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  assetsInclude: ['**/*.JPG'],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router') || id.includes('@vueuse')) {
              return 'vendor-vue'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('plyr')) {
              return 'vendor-plyr'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
