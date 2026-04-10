// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 커스텀 도메인 (루트로 서빙)
  site: 'https://minecraftmodwiki.com',
  base: '/',
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
