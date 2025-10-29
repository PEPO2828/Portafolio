import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portafolio/', // Base URL for GitHub Pages
  root: 'src', // Your source code is in the 'src' directory
  build: {
    outDir: '../docs', // Output to the 'docs' directory
    emptyOutDir: true, // Clear the 'docs' directory before building
  },
})