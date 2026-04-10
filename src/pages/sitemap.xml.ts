/**
 * 동적 sitemap.xml 생성
 * 빌드 타임에 모든 페이지 URL을 자동으로 수집해 sitemap을 생성합니다.
 *
 * 새 모드팩/모드/가이드를 추가하면 자동 반영됩니다.
 */
import type { APIRoute } from 'astro';
import { getAllModpacks, getAllMods, getAllGuides, getAllInfo } from '../utils/data';

const SITE = 'https://minecraftmodwiki.com';

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = [
    // 메인 페이지
    { url: '/', changefreq: 'daily', priority: 1.0, lastmod: today },

    // 카테고리 인덱스
    { url: '/modpacks/', changefreq: 'daily', priority: 0.9, lastmod: today },
    { url: '/mods/', changefreq: 'daily', priority: 0.9, lastmod: today },
    { url: '/guides/', changefreq: 'weekly', priority: 0.8, lastmod: today },
    { url: '/info/', changefreq: 'weekly', priority: 0.8, lastmod: today },

    // 검색
    { url: '/search/', changefreq: 'monthly', priority: 0.3 },

    // 정적 페이지
    { url: '/about/', changefreq: 'monthly', priority: 0.5 },
    { url: '/contact/', changefreq: 'monthly', priority: 0.5 },
    { url: '/privacy/', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms/', changefreq: 'yearly', priority: 0.3 },
  ];

  // 모드팩 상세 페이지
  for (const mp of getAllModpacks()) {
    entries.push({
      url: `/modpacks/${mp.slug}/`,
      changefreq: 'weekly',
      priority: mp.featured ? 0.9 : 0.7,
      lastmod: today,
    });
  }

  // 모드 상세 페이지
  for (const mod of getAllMods()) {
    entries.push({
      url: `/mods/${mod.slug}/`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: today,
    });
  }

  // 가이드 상세 페이지
  for (const guide of getAllGuides()) {
    entries.push({
      url: `/guides/${guide.slug}/`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: today,
    });
  }

  // 유용한 정보 (블로그형 글)
  for (const article of getAllInfo()) {
    entries.push({
      url: `/info/${article.slug}/`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: article.publishedDate,
    });
  }

  // XML 생성
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    entry => `  <url>
    <loc>${SITE}${entry.url}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}${entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ''}${entry.priority !== undefined ? `\n    <priority>${entry.priority.toFixed(1)}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
