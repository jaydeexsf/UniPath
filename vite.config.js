import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace `your-repo-name` with the actual name of your GitHub repository
export default defineConfig({
  base: '/UniPath',
  plugins: [react()],
});
