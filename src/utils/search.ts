/**
 * 클라이언트 사이드 검색 유틸리티
 * 모드팩/모드/가이드를 통합 검색합니다.
 */

export interface SearchItem {
  type: 'modpack' | 'mod' | 'guide';
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  url: string;
}

/**
 * 간단한 텍스트 매칭 검색
 * 제목, 요약, 태그를 대상으로 검색합니다.
 */
export function searchItems(items: SearchItem[], query: string): SearchItem[] {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().trim().split(/\s+/);

  return items
    .map(item => {
      const searchText = [
        item.title,
        item.summary,
        ...item.tags,
      ].join(' ').toLowerCase();

      // 모든 검색어가 매칭되는 항목만 반환
      const matchCount = terms.filter(term => searchText.includes(term)).length;
      return { item, score: matchCount };
    })
    .filter(({ score }) => score === terms.length)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

/** 검색 인덱스 생성 (빌드 타임) */
export function buildSearchIndex(
  modpacks: { slug: string; name: string; summary: string; tags: string[] }[],
  mods: { slug: string; name: string; summary: string; tags: string[] }[],
  guides: { slug: string; title: string; summary: string; category: string }[],
): SearchItem[] {
  const items: SearchItem[] = [];

  modpacks.forEach(mp => {
    items.push({
      type: 'modpack',
      slug: mp.slug,
      title: mp.name,
      summary: mp.summary,
      tags: mp.tags,
      url: `/modpacks/${mp.slug}/`,
    });
  });

  mods.forEach(mod => {
    items.push({
      type: 'mod',
      slug: mod.slug,
      title: mod.name,
      summary: mod.summary,
      tags: mod.tags,
      url: `/mods/${mod.slug}/`,
    });
  });

  guides.forEach(guide => {
    items.push({
      type: 'guide',
      slug: guide.slug,
      title: guide.title,
      summary: guide.summary,
      tags: [guide.category],
      url: `/guides/${guide.slug}/`,
    });
  });

  return items;
}
