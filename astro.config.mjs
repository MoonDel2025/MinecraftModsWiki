// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcmodwiki.example.com', // 배포 시 실제 도메인으로 변경
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
