import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/bibek-portfolio",  // Correct base path for GitHub Pages
});
