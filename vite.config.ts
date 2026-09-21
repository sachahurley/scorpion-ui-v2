import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // This tells Vite where your site will live on GitHub Pages
  // It matches your repository name: /scorpion-design-system/
  base: '/scorpion-design-system/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
