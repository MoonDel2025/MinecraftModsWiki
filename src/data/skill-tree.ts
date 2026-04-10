/**
 * 스킬 트리 빌더 데이터
 * Cisco's RPG의 Passive Skill Tree를 단순화한 시뮬레이터용 데이터
 *
 * 실제 게임의 588개 노드를 모두 구현하지는 않고,
 * 6개 시작 클래스 + 각 클래스별 핵심 노드 6~8개로 구성한 MVP 버전입니다.
 */

export type NodeType = 'minor' | 'notable' | 'keystone';

export interface SkillNode {
  id: string;
  name: string;
  desc: string;
  type: NodeType;
  /** SVG 좌표 */
  x: number;
  y: number;
  /** 연결된 노드 id (양방향) */
  links: string[];
  /** 시작 노드 여부 */
  isStart?: boolean;
  /** 클래스 색상 키 */
  classKey: 'warrior' | 'tank' | 'hunter' | 'mage' | 'assassin' | 'healer' | 'core';
}

/**
 * 클래스별 색상
 */
export const CLASS_COLORS: Record<string, string> = {
  warrior: '#FF6B35',  // 주황 (전사)
  tank: '#A0A4B0',     // 회색 (탱커)
  hunter: '#17DD62',   // 초록 (사냥꾼)
  mage: '#4AEDD9',     // 청록 (마법사)
  assassin: '#C882FF', // 보라 (암살자)
  healer: '#FCDB05',   // 노랑 (힐러)
  core: '#FFFFFF',     // 흰색 (중앙)
};

/**
 * 6각형 배치를 위한 좌표 계산
 * 중앙에서 6방향으로 클래스별 가지가 뻗어나감
 */
const CENTER = { x: 500, y: 500 };

// 6방향의 각도 (12시 방향부터 시계방향)
const angles = [
  -90,  // warrior (위)
  -30,  // tank (우상)
  30,   // hunter (우하)
  90,   // mage (아래)
  150,  // assassin (좌하)
  210,  // healer (좌상)
];

function pos(angleDeg: number, distance: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round(CENTER.x + Math.cos(rad) * distance),
    y: Math.round(CENTER.y + Math.sin(rad) * distance),
  };
}

/**
 * 한 클래스의 가지를 생성하는 헬퍼
 * - 시작 노드 (중앙에서 80px)
 * - 일반 노드 3개 (점점 멀어짐)
 * - 노터블 노드 1개
 * - 일반 노드 1개
 * - 키스톤 노드 1개 (가장 멀리)
 */
function createBranch(
  classKey: SkillNode['classKey'],
  branchAngle: number,
  nodes: { name: string; desc: string; type: NodeType; idSuffix: string }[]
): SkillNode[] {
  const result: SkillNode[] = [];
  const distances = [80, 140, 200, 260, 320, 380, 440];

  nodes.forEach((node, i) => {
    // 살짝 좌우로 흔들어 가지 느낌
    const wobble = i % 2 === 0 ? -8 : 8;
    const p = pos(branchAngle + wobble * 0.3, distances[i]);
    const id = `${classKey}-${node.idSuffix}`;
    const prev = i === 0 ? `core-${classKey}-start` : `${classKey}-${nodes[i - 1].idSuffix}`;
    result.push({
      id,
      name: node.name,
      desc: node.desc,
      type: node.type,
      x: p.x,
      y: p.y,
      links: [prev],
      classKey,
    });
  });

  return result;
}

// --- 노드 정의 ---

const startNodes: SkillNode[] = [
  // 중앙 코어 (모든 빌드의 시작점)
  {
    id: 'core',
    name: 'CORE',
    desc: '시작점입니다. 인접한 6개 클래스 중 하나를 선택하세요.',
    type: 'notable',
    x: CENTER.x,
    y: CENTER.y,
    links: [],
    isStart: true,
    classKey: 'core',
  },
];

// 각 클래스의 시작 노드 (코어와 연결)
const classStarts: SkillNode[] = (
  [
    { key: 'warrior', name: 'Warrior', desc: '근접 전투의 길', angleIdx: 0 },
    { key: 'tank', name: 'Tank', desc: '방어와 생존의 길', angleIdx: 1 },
    { key: 'hunter', name: 'Hunter', desc: '원거리 사냥의 길', angleIdx: 2 },
    { key: 'mage', name: 'Mage', desc: '원소 마법의 길', angleIdx: 3 },
    { key: 'assassin', name: 'Assassin', desc: '치명타와 회피의 길', angleIdx: 4 },
    { key: 'healer', name: 'Healer', desc: '회복과 버프의 길', angleIdx: 5 },
  ] as const
).map(c => {
  const p = pos(angles[c.angleIdx], 80);
  return {
    id: `core-${c.key}-start`,
    name: c.name,
    desc: c.desc + ' - 클래스 시작 노드',
    type: 'notable' as NodeType,
    x: p.x,
    y: p.y,
    links: ['core'],
    classKey: c.key,
  };
});

// 각 클래스 가지
const branches: SkillNode[] = [
  // ⚔️ Warrior
  ...createBranch('warrior', angles[0], [
    { idSuffix: 'str1', name: 'Strength I', desc: '+5 근력. 검/도끼 데미지 +5%', type: 'minor' },
    { idSuffix: 'str2', name: 'Strength II', desc: '+10 근력. 모든 근접 데미지 +8%', type: 'minor' },
    { idSuffix: 'cleave', name: 'Cleave Master', desc: '광역 공격 시 추가 데미지 +25%', type: 'notable' },
    { idSuffix: 'str3', name: 'Strength III', desc: '+15 근력. 무기 공격 속도 +5%', type: 'minor' },
    { idSuffix: 'rage', name: 'Berserker Rage', desc: '체력이 50% 이하일 때 데미지 +40%', type: 'notable' },
    { idSuffix: 'unstoppable', name: 'Unstoppable', desc: '⚡ 키스톤: 회피가 무효화되지만 받는 데미지 -50%', type: 'keystone' },
  ]),

  // 🛡️ Tank
  ...createBranch('tank', angles[1], [
    { idSuffix: 'hp1', name: 'Vitality I', desc: '+10 최대 체력', type: 'minor' },
    { idSuffix: 'hp2', name: 'Vitality II', desc: '+15 최대 체력', type: 'minor' },
    { idSuffix: 'iron', name: 'Iron Skin', desc: '받는 물리 데미지 -15%', type: 'notable' },
    { idSuffix: 'hp3', name: 'Vitality III', desc: '+20 최대 체력. 자연 회복 +20%', type: 'minor' },
    { idSuffix: 'shield', name: 'Shield Master', desc: '방패 막기 시 데미지 반사 30%', type: 'notable' },
    { idSuffix: 'fortress', name: 'Living Fortress', desc: '⚡ 키스톤: 이동 속도 -30%, 받는 모든 데미지 -40%', type: 'keystone' },
  ]),

  // 🏹 Hunter
  ...createBranch('hunter', angles[2], [
    { idSuffix: 'dex1', name: 'Dexterity I', desc: '+5 민첩. 활 데미지 +5%', type: 'minor' },
    { idSuffix: 'dex2', name: 'Dexterity II', desc: '+10 민첩. 이동 속도 +5%', type: 'minor' },
    { idSuffix: 'precision', name: 'Precision Shot', desc: '활 치명타 확률 +15%', type: 'notable' },
    { idSuffix: 'dex3', name: 'Dexterity III', desc: '+15 민첩. 발사 속도 +10%', type: 'minor' },
    { idSuffix: 'eagle', name: "Eagle Eye", desc: '활 사거리 +50%', type: 'notable' },
    { idSuffix: 'piercing', name: 'Piercing Arrows', desc: '⚡ 키스톤: 화살이 적을 관통하지만 데미지 -25%', type: 'keystone' },
  ]),

  // 🔮 Mage
  ...createBranch('mage', angles[3], [
    { idSuffix: 'int1', name: 'Intellect I', desc: '+5 지능. 마나 풀 +20', type: 'minor' },
    { idSuffix: 'int2', name: 'Intellect II', desc: '+10 지능. 주문 데미지 +8%', type: 'minor' },
    { idSuffix: 'fire', name: 'Pyromancy', desc: '화염 주문 데미지 +25%', type: 'notable' },
    { idSuffix: 'int3', name: 'Intellect III', desc: '+15 지능. 마나 회복 +20%', type: 'minor' },
    { idSuffix: 'elemental', name: 'Elementalist', desc: '모든 원소 데미지 +20%', type: 'notable' },
    { idSuffix: 'glasscannon', name: 'Glass Cannon', desc: '⚡ 키스톤: 최대 체력 -50%, 주문 데미지 +100%', type: 'keystone' },
  ]),

  // 🗡️ Assassin
  ...createBranch('assassin', angles[4], [
    { idSuffix: 'crit1', name: 'Crit Chance I', desc: '치명타 확률 +5%', type: 'minor' },
    { idSuffix: 'crit2', name: 'Crit Chance II', desc: '치명타 확률 +8%', type: 'minor' },
    { idSuffix: 'dodge', name: 'Evasion Master', desc: '회피율 +15%', type: 'notable' },
    { idSuffix: 'critdmg', name: 'Crit Damage', desc: '치명타 데미지 +50%', type: 'minor' },
    { idSuffix: 'backstab', name: 'Backstab', desc: '뒤에서 공격 시 데미지 +100%', type: 'notable' },
    { idSuffix: 'perfectstrike', name: 'Perfect Strike', desc: '⚡ 키스톤: 치명타 확률 0, 모든 공격이 치명타 데미지', type: 'keystone' },
  ]),

  // ✨ Healer
  ...createBranch('healer', angles[5], [
    { idSuffix: 'wis1', name: 'Wisdom I', desc: '+5 지혜. 포션 효과 +10%', type: 'minor' },
    { idSuffix: 'wis2', name: 'Wisdom II', desc: '+10 지혜. 자연 회복 +25%', type: 'minor' },
    { idSuffix: 'regen', name: 'Regeneration', desc: '초당 1HP 회복 (전투 중)', type: 'notable' },
    { idSuffix: 'wis3', name: 'Wisdom III', desc: '+15 지혜. 음식 회복량 +30%', type: 'minor' },
    { idSuffix: 'aura', name: 'Healing Aura', desc: '주변 4블록 내 아군 회복 (멀티)', type: 'notable' },
    { idSuffix: 'phoenix', name: 'Phoenix', desc: '⚡ 키스톤: 사망 시 1회 부활 (5분 쿨다운)', type: 'keystone' },
  ]),
];

// 코어와 클래스 시작 노드 연결
classStarts.forEach(cs => {
  startNodes[0].links.push(cs.id);
});

export const SKILL_NODES: SkillNode[] = [
  ...startNodes,
  ...classStarts,
  ...branches,
];

/** 노드 종류별 비용 */
export const NODE_COSTS: Record<NodeType, number> = {
  minor: 1,
  notable: 2,
  keystone: 3,
};

/** 시작 가용 포인트 */
export const TOTAL_POINTS = 25;
