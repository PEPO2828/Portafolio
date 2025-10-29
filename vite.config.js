import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Your source code is in the 'src' directory
  build: {
    outDir: '../docs', // Output to the 'docs' directory
    emptyOutDir: true, // Clear the 'docs' directory before building
  },
})