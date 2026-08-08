import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://cumple-kpop.vercel.app/',
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
