/**
 * Passive Skill Tree mod의 305개 노드 JSON을
 * 우리 사이트가 사용할 TypeScript 데이터로 변환합니다.
 *
 * 사용:
 *   1. /tmp/skilltree/ 에 5클래스 × 61파일 = 305개 JSON이 있어야 함
 *   2. node scripts/build-skill-tree.mjs
 *   3. src/data/skill-tree-real.ts 가 생성됨
 */

import fs from 'node:fs';
import path from 'node:path';

const SOURCE_DIR = process.env.SKILLTREE_SOURCE || 'C:/Users/user/AppData/Local/Temp/skilltree';
const OUT_FILE = path.resolve('src/data/skill-tree-real.ts');

const CLASSES = ['alchemist', 'blacksmith', 'cook', 'enchanter', 'hunter'];

// ----- 보너스를 한국어 설명으로 변환 -----
function describeBonus(b) {
  const t = b.type?.replace('skilltree:', '') || '';
  const amount = b.amount;
  const chance = b.chance;
  const op = b.operation; // 0=ADD, 1=MULTIPLY_BASE, 2=MULTIPLY_TOTAL

  function pct(v) {
    if (typeof v !== 'number') return '';
    return (v >= 0 ? '+' : '') + Math.round(v * 1000) / 10 + '%';
  }
  function num(v) {
    if (typeof v !== 'number') return '';
    return (v >= 0 ? '+' : '') + v;
  }

  // 무기/장비 조건 추출
  let cond = '';
  const pcCond = b.player_condition?.item_condition;
  if (pcCond?.equipment_type) cond = ` (${pcCond.equipment_type} 장착 시)`;
  if (pcCond?.tag_id) cond = ` (${pcCond.tag_id.replace('skilltree:', '')})`;

  switch (t) {
    case 'attack_damage':
    case 'attribute':
      return `공격력 ${op === 0 ? num(amount) : pct(amount)}${cond}`;
    case 'attack_speed':
      return `공격 속도 ${pct(amount)}${cond}`;
    case 'crit_chance':
      return `치명타 확률 ${pct(amount)}${cond}`;
    case 'crit_damage':
      return `치명타 피해 ${pct(amount)}${cond}`;
    case 'damage_taken':
      return `받는 피해 ${pct(amount)}${cond}`;
    case 'item_durability_loss_avoidance':
      return `내구도 손실 회피 ${pct(chance)}${cond}`;
    case 'arrow_damage':
      return `화살 피해 ${pct(amount)}${cond}`;
    case 'arrow_speed':
      return `화살 속도 ${pct(amount)}${cond}`;
    case 'arrow_retrieval':
      return `발사한 화살 회수 ${pct(chance)}${cond}`;
    case 'evasion':
      return `회피율 ${pct(amount)}${cond}`;
    case 'movement_speed':
      return `이동 속도 ${pct(amount)}${cond}`;
    case 'jump_height':
      return `점프 높이 ${pct(amount)}${cond}`;
    case 'lifesteal':
      return `생명력 흡수 ${pct(amount)}${cond}`;
    case 'item_drop':
      return `아이템 드롭 ${pct(amount)}${cond}`;
    case 'experience':
      return `경험치 획득 ${pct(amount)}${cond}`;
    case 'enchantment_value':
      return `인챈트 값 ${pct(amount)}${cond}`;
    case 'enchantment_chance':
      return `인챈트 확률 ${pct(chance)}${cond}`;
    case 'craft_chance':
      return `제작 확률 ${pct(chance)}${cond}`;
    case 'free_enchantment':
      return `무료 인챈트 확률 ${pct(chance)}${cond}`;
    case 'cooking_speed':
      return `요리 속도 ${pct(amount)}${cond}`;
    case 'food_healing':
      return `음식 회복량 ${pct(amount)}${cond}`;
    case 'potion_amplifier':
      return `포션 증폭 ${num(amount)}${cond}`;
    case 'potion_duration':
      return `포션 지속시간 ${pct(amount)}${cond}`;
    case 'potion_healing':
      return `포션 회복 ${pct(amount)}${cond}`;
    case 'brewing_speed':
      return `양조 속도 ${pct(amount)}${cond}`;
    case 'brewing_chance':
      return `양조 시 추가 확률 ${pct(chance)}${cond}`;
    case 'block_break_speed':
      return `블록 파괴 속도 ${pct(amount)}${cond}`;
    case 'fortune':
      return `행운 ${num(amount)}${cond}`;
    case 'looting':
      return `약탈 ${num(amount)}${cond}`;
    case 'attribute_modifier':
      return `${b.attribute || '스탯'} ${op === 0 ? num(amount) : pct(amount)}`;
    case 'craft_bonus':
      return `제작 보너스${cond}`;
    case 'gem_drop':
      return `보석 드롭 확률 ${pct(chance)}${cond}`;
    default:
      return t.replace(/_/g, ' ') + (typeof amount === 'number' ? ' ' + pct(amount) : '');
  }
}

// ----- 노드 종류 결정 -----
// buttonSize 분포: 16=minor, 20=notable, 24=시작, 32=keystone
function getNodeType(skill) {
  if (skill.isStartingPoint) return 'start';
  const sz = skill.buttonSize || 16;
  if (sz >= 28) return 'keystone';
  if (sz >= 20) return 'notable';
  return 'minor';
}

// ----- 아이콘 이름 단순화 -----
function simplifyIcon(iconTexture) {
  if (!iconTexture) return 'unknown';
  const m = iconTexture.match(/icons\/([^/]+)\.png$/);
  return m ? m[1] : 'unknown';
}

// ----- 노드 이름 생성 (아이콘 + 보너스 기반) -----
function getNodeName(skill, bonusDescs) {
  if (skill.isStartingPoint) {
    const cls = skill.id.match(/skilltree:([a-z]+)/)?.[1] || 'class';
    return cls.charAt(0).toUpperCase() + cls.slice(1);
  }
  const icon = simplifyIcon(skill.iconTexture);
  // 일반 노드는 아이콘 이름을 한글화한 것으로
  return icon.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ----- 메인 -----
const allSkills = [];

for (const cls of CLASSES) {
  for (let i = 1; i <= 61; i++) {
    const file = path.join(SOURCE_DIR, `${cls}_${i}.json`);
    if (!fs.existsSync(file)) continue;
    const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));

    const id = raw.id.replace('skilltree:', '');
    const bonusDescs = (raw.bonuses || []).map(describeBonus).filter(Boolean);

    allSkills.push({
      id,
      classKey: cls,
      name: getNodeName(raw, bonusDescs),
      icon: simplifyIcon(raw.iconTexture),
      type: getNodeType(raw),
      bonuses: bonusDescs,
      x: raw.positionX,
      y: raw.positionY,
      size: raw.buttonSize,
      isStart: raw.isStartingPoint || false,
      directLinks: (raw.directConnections || []).map(c => c.replace('skilltree:', '')),
      longLinks: (raw.longConnections || []).map(c => c.replace('skilltree:', '')),
    });
  }
}

console.log(`총 ${allSkills.length}개 노드 로드`);
console.log(`시작 노드: ${allSkills.filter(s => s.isStart).length}`);
console.log(`키스톤: ${allSkills.filter(s => s.type === 'keystone').length}`);
console.log(`노터블: ${allSkills.filter(s => s.type === 'notable').length}`);
console.log(`마이너: ${allSkills.filter(s => s.type === 'minor').length}`);

// 좌표 범위 계산
const xs = allSkills.map(s => s.x);
const ys = allSkills.map(s => s.y);
const xMin = Math.min(...xs), xMax = Math.max(...xs);
const yMin = Math.min(...ys), yMax = Math.max(...ys);
console.log(`X 범위: ${xMin.toFixed(1)} ~ ${xMax.toFixed(1)}`);
console.log(`Y 범위: ${yMin.toFixed(1)} ~ ${yMax.toFixed(1)}`);

// TypeScript 출력
const tsContent = `/**
 * Passive Skill Tree 실제 노드 데이터
 * Daripher의 Passive Skill Tree mod에서 자동 추출
 *
 * 빌드 스크립트: scripts/build-skill-tree.mjs
 * 출처: https://github.com/Daripher/Passive-Skill-Tree
 *
 * 5개 클래스 × 61개 노드 = 총 ${allSkills.length}개
 */

export type RealNodeType = 'start' | 'minor' | 'notable' | 'keystone';
export type ClassKey = 'alchemist' | 'blacksmith' | 'cook' | 'enchanter' | 'hunter';

export interface RealSkillNode {
  id: string;
  classKey: ClassKey;
  name: string;
  icon: string;
  type: RealNodeType;
  bonuses: string[];
  /** 원본 좌표 (-300 ~ +300 정도) */
  x: number;
  y: number;
  /** 원본 버튼 크기 */
  size: number;
  isStart: boolean;
  /** 직접 연결 (양방향) */
  directLinks: string[];
  /** 장거리 연결 (양방향) */
  longLinks: string[];
}

export const CLASS_INFO: Record<ClassKey, { name: string; nameKo: string; color: string; emoji: string }> = {
  alchemist:  { name: 'Alchemist',  nameKo: '연금술사', color: '#C882FF', emoji: '🧪' },
  blacksmith: { name: 'Blacksmith', nameKo: '대장장이', color: '#A0A4B0', emoji: '⚒️' },
  cook:       { name: 'Cook',       nameKo: '요리사',   color: '#FCDB05', emoji: '🍳' },
  enchanter:  { name: 'Enchanter',  nameKo: '인챈터',   color: '#4AEDD9', emoji: '✨' },
  hunter:     { name: 'Hunter',     nameKo: '사냥꾼',   color: '#17DD62', emoji: '🏹' },
};

/** 좌표 범위 (자동 계산) */
export const COORD_BOUNDS = {
  xMin: ${xMin},
  xMax: ${xMax},
  yMin: ${yMin},
  yMax: ${yMax},
};

export const REAL_SKILLS: RealSkillNode[] = ${JSON.stringify(allSkills, null, 2)};
`;

fs.writeFileSync(OUT_FILE, tsContent, 'utf-8');
console.log(`✓ 출력: ${OUT_FILE} (${(tsContent.length / 1024).toFixed(1)} KB)`);
