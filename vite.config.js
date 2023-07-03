import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':  path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@styles': path.resolve('./src/css'),
      '@images': path.resolve('./src/assests/img'),
    },
  },
})
