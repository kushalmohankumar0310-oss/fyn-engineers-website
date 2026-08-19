import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aqua: resolve(__dirname, 'aqua-products.html'),
        energy: resolve(__dirname, 'energy-products.html')
      }
    }
  }
})
