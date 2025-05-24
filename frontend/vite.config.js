// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api requests to Flask backend
      '/api': {
        target: 'http://localhost:5000', // Your Flask backend URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false,      // If your Flask backend is not HTTPS
      },
    },
  },
});
