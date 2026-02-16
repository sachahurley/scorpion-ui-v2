import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-css',
      writeBundle() {
        // Ensure dist directory exists
        const distDir = resolve(__dirname, 'dist')
        if (!existsSync(distDir)) {
          mkdirSync(distDir, { recursive: true })
        }
        // Copy CSS file to dist
        copyFileSync(
          resolve(__dirname, 'src/styles/tokens.css'),
          resolve(__dirname, 'dist/styles.css')
        )
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ScorpionUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
