import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tiny-bunny/',
  resolve: {
    alias: [
      { find: 'entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url)) },
      { find: 'pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: 'shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
    ]
  }
})
