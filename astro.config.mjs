// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 프로젝트 사이트 URL
  site: 'https://moondel2025.github.io',
  base: '/MinecraftModsWiki/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory', // /modpacks/rlcraft/ 형태의 깔끔한 URL
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
