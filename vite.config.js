import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      chunkSizeWarningLimit: 1000, // Increase this limit to 1000kB or any desired size
   },
});
