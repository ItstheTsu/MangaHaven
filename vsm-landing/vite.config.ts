import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos: funciona em qualquer subcaminho (ex.: GitHub Pages /MangaHaven/)
  base: './',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Permite `@use 'abstracts' as *;` em qualquer módulo SCSS
        loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))],
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: false,
  },
})
