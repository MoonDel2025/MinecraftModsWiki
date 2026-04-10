/**
 * 데이터 로딩 및 관계 연결 유틸리티
 * JSON 파일 기반의 모드팩/모드/가이드 데이터를 로드하고 관계를 연결합니다.
 */

// --- 타입 정의 ---

export interface Modpack {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  minecraftVersion: string;
  loader: string;
  tags: string[];
  difficulty: 'easy' | 'normal' | 'hard' | 'expert' | 'master';
  playStyle: string[];
  featured: boolean;
  coverImage: string;
  galleryImages: string[];
  includedMods: string[];
  tips: { title: string; content: string }[];
  faq: { question: string; answer: string }[];
  relatedModpacks: string[];
}

export interface Mod {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  tags: string[];
  availableInModpacks: string[];
  helpfulTips: string[];
  confusingPoints: string[];
  relatedMods: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  body: string;
  relatedModpacks: string[];
  relatedMods: string[];
}

/**
 * 유용한 정보 (블로그형 글)
 * - 모드 카테고리/장르별 추천, 비교, 해설 등
 */
export interface Info {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  publishedDate: string; // YYYY-MM-DD
  thumbnail?: string;
  body: string; // 마크다운
  relatedModpacks: string[];
  relatedMods: string[];
}

// --- 데이터 로더 ---

/**
 * 모드팩 표시 순서 (사이트 전반에서 사용)
 * 새 모드팩을 추가하면 원하는 위치에 id를 넣어주세요.
 * 여기에 없는 id는 자동으로 목록 끝에 알파벳순으로 추가됩니다.
 */
const MODPACK_ORDER: string[] = [
  'all-the-mods-10',
  'cobbleverse',
  'deceasedcraft',
  'better-mc-bmc4',
  'all-the-mons',
  'rlcraft',
  'prominence-2-hasturian-era',
  'cursed-walking',
  'nightfallcraft-casket-of-reveries',
  'atm10-sky',
  'ftb-stoneblock-4',
  'ciscos-fantasy-medieval-rpg-ultimate',
];

/** 모든 모드팩 JSON 파일을 로드합니다 (MODPACK_ORDER 순서) */
export function getAllModpacks(): Modpack[] {
  const files = import.meta.glob<Modpack>('../data/modpacks/*.json', { eager: true, import: 'default' });
  const all = Object.values(files);

  return all.sort((a, b) => {
    const ai = MODPACK_ORDER.indexOf(a.id);
    const bi = MODPACK_ORDER.indexOf(b.id);
    // 둘 다 ORDER에 있으면 ORDER 순서대로
    if (ai !== -1 && bi !== -1) return ai - bi;
    // ORDER에 있는 게 항상 먼저
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    // 둘 다 ORDER에 없으면 알파벳순
    return a.name.localeCompare(b.name);
  });
}

/** 모든 모드 JSON 파일을 로드합니다 */
export function getAllMods(): Mod[] {
  const files = import.meta.glob<Mod>('../data/mods/*.json', { eager: true, import: 'default' });
  return Object.values(files).sort((a, b) => a.name.localeCompare(b.name));
}

/** 모든 가이드 JSON 파일을 로드합니다 */
export function getAllGuides(): Guide[] {
  const files = import.meta.glob<Guide>('../data/guides/*.json', { eager: true, import: 'default' });
  return Object.values(files).sort((a, b) => a.title.localeCompare(b.title));
}

/** 모든 유용한 정보 글을 로드합니다 (최신순) */
export function getAllInfo(): Info[] {
  const files = import.meta.glob<Info>('../data/info/*.json', { eager: true, import: 'default' });
  return Object.values(files).sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );
}

// --- 개별 조회 ---

export function getModpackBySlug(slug: string): Modpack | undefined {
  return getAllModpacks().find(mp => mp.slug === slug);
}

export function getModBySlug(slug: string): Mod | undefined {
  return getAllMods().find(m => m.slug === slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return getAllGuides().find(g => g.slug === slug);
}

export function getInfoBySlug(slug: string): Info | undefined {
  return getAllInfo().find(i => i.slug === slug);
}

// --- 관계 조회 ---

/** 특정 모드팩에 포함된 모드 목록 */
export function getModsInModpack(modpackId: string): Mod[] {
  return getAllMods().filter(m => m.availableInModpacks.includes(modpackId));
}

/** 특정 모드가 포함된 모드팩 목록 */
export function getModpacksWithMod(modId: string): Modpack[] {
  return getAllModpacks().filter(mp => mp.includedMods.includes(modId));
}

/** 관련 모드팩 목록 (id 배열 → Modpack 배열) */
export function getRelatedModpacks(ids: string[]): Modpack[] {
  const all = getAllModpacks();
  return ids.map(id => all.find(mp => mp.id === id)).filter((mp): mp is Modpack => mp !== undefined);
}

/** 관련 모드 목록 (id 배열 → Mod 배열) */
export function getRelatedMods(ids: string[]): Mod[] {
  const all = getAllMods();
  return ids.map(id => all.find(m => m.id === id)).filter((m): m is Mod => m !== undefined);
}

/** 관련 가이드 (특정 모드팩 관련 가이드) */
export function getGuidesForModpack(modpackId: string): Guide[] {
  return getAllGuides().filter(g => g.relatedModpacks.includes(modpackId));
}

// --- 필터 & 검색 ---

/** 모든 고유 태그 추출 */
export function getAllTags(items: (Modpack | Mod)[]): string[] {
  const tags = new Set<string>();
  items.forEach(item => item.tags.forEach(tag => tags.add(tag)));
  return [...tags].sort();
}

/** 모든 고유 카테고리 추출 (모드용) */
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  getAllMods().forEach(m => categories.add(m.category));
  return [...categories].sort();
}

/** 난이도 라벨 변환 */
export function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    easy: '쉬움',
    normal: '보통',
    hard: '어려움',
    expert: '전문가',
    master: '마스터',
  };
  return labels[difficulty] || difficulty;
}

/** 추천 모드팩 */
export function getFeaturedModpacks(): Modpack[] {
  return getAllModpacks().filter(mp => mp.featured);
}
