import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dynamic98.github.io',
  publicDir: './assets',
  build: {
    format: 'directory'
  }
});
