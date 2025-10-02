import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@notes': fileURLToPath(new URL('./src/database/notes', import.meta.url)),
      '@lore': fileURLToPath(new URL('./src/database/lore', import.meta.url)),
    },
  },
});
