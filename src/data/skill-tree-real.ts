/**
 * Passive Skill Tree 실제 노드 데이터
 * Daripher의 Passive Skill Tree mod에서 자동 추출
 *
 * 빌드 스크립트: scripts/build-skill-tree.mjs
 * 출처: https://github.com/Daripher/Passive-Skill-Tree
 *
 * 5개 클래스 × 61개 노드 = 총 305개
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
  xMin: -124.70306,
  xMax: 124.70306,
  yMin: -144,
  yMax: 144.00398,
};

export const REAL_SKILLS: RealSkillNode[] = [
  {
    "id": "alchemist_1",
    "classKey": "alchemist",
    "name": "Alchemist",
    "icon": "potion_yellow_big",
    "type": "start",
    "bonuses": [],
    "x": 0,
    "y": 0,
    "size": 24,
    "isStart": true,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "alchemist_2",
    "classKey": "alchemist",
    "name": "Potion Green Small",
    "icon": "potion_green_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 31.175764,
    "y": 18.001993,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_1"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_3",
    "classKey": "alchemist",
    "name": "Heart Cyan",
    "icon": "heart_cyan",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": -31.175764,
    "y": 17.999002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_1"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_4",
    "classKey": "alchemist",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +5%"
    ],
    "x": 4.4087286e-15,
    "y": -36,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_1"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_5",
    "classKey": "alchemist",
    "name": "Potion Black Small",
    "icon": "potion_black_small",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": 0,
    "y": 36.000996,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_2"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_6",
    "classKey": "alchemist",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": -31.175764,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_3"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_7",
    "classKey": "alchemist",
    "name": "Potion Indigo Small",
    "icon": "potion_indigo_small",
    "type": "minor",
    "bonuses": [
      "damage +3%"
    ],
    "x": 31.177488,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_4"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_8",
    "classKey": "alchemist",
    "name": "Potion Black Small",
    "icon": "potion_black_small",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": -31.175764,
    "y": 54,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_5"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_9",
    "classKey": "alchemist",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": -31.175764,
    "y": -54.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_6"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_10",
    "classKey": "alchemist",
    "name": "Potion Indigo Small",
    "icon": "potion_indigo_small",
    "type": "minor",
    "bonuses": [
      "damage +6%"
    ],
    "x": 62.354977,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_7"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_11",
    "classKey": "alchemist",
    "name": "Potion Black Small",
    "icon": "potion_black_small",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": 0,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_8"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_12",
    "classKey": "alchemist",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": -62.35153,
    "y": -36.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_9"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_13",
    "classKey": "alchemist",
    "name": "Potion Indigo Small",
    "icon": "potion_indigo_small",
    "type": "minor",
    "bonuses": [
      "damage +9%"
    ],
    "x": 62.354977,
    "y": -36.001995,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_10"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_14",
    "classKey": "alchemist",
    "name": "Potion Green Big",
    "icon": "potion_green_big",
    "type": "notable",
    "bonuses": [
      "lethal poison"
    ],
    "x": 31.175764,
    "y": 90.00398,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_11"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_15",
    "classKey": "alchemist",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "notable",
    "bonuses": [
      "healing +2%"
    ],
    "x": -93.52729,
    "y": -18.002996,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_12"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_16",
    "classKey": "alchemist",
    "name": "Potion Indigo",
    "icon": "potion_indigo",
    "type": "notable",
    "bonuses": [
      "self splash immune"
    ],
    "x": 62.354977,
    "y": -72.002,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_13"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_17",
    "classKey": "alchemist",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +7.5%"
    ],
    "x": 8.817457e-15,
    "y": -72,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_4"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_18",
    "classKey": "alchemist",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +10%"
    ],
    "x": 1.3226186e-14,
    "y": -108,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_17"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_19",
    "classKey": "alchemist",
    "name": "Potion Double",
    "icon": "potion_double",
    "type": "keystone",
    "bonuses": [
      "projectile duplication",
      "damage -20%"
    ],
    "x": 1.7634914e-14,
    "y": -144,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_18"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_20",
    "classKey": "alchemist",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": -62.35153,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_27"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_21",
    "classKey": "alchemist",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 31.175764,
    "y": -53.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_17"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_22",
    "classKey": "alchemist",
    "name": "Potion Gray Small",
    "icon": "potion_gray_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 31.175764,
    "y": 54.00299,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_26"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_23",
    "classKey": "alchemist",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": -93.52729,
    "y": 17.997007,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_20"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_24",
    "classKey": "alchemist",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 31.175764,
    "y": -89.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_21"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_25",
    "classKey": "alchemist",
    "name": "Potion Gray Small",
    "icon": "potion_gray_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 62.353252,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_22"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_26",
    "classKey": "alchemist",
    "name": "Potion Green Small",
    "icon": "potion_green_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 62.35153,
    "y": 36.003986,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_2"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_27",
    "classKey": "alchemist",
    "name": "Heart Cyan",
    "icon": "heart_cyan",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": -62.35153,
    "y": 35.998005,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_3"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_28",
    "classKey": "alchemist",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": -124.70306,
    "y": 35.99601,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_23"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_29",
    "classKey": "alchemist",
    "name": "Potion Green Small",
    "icon": "potion_green_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 93.52729,
    "y": 54.00598,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_26"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_30",
    "classKey": "alchemist",
    "name": "Heart Cyan",
    "icon": "heart_cyan",
    "type": "minor",
    "bonuses": [
      "effect duration"
    ],
    "x": -93.52729,
    "y": 53.99701,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_27"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_31",
    "classKey": "alchemist",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 31.175764,
    "y": -125.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_24"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_32",
    "classKey": "alchemist",
    "name": "Potion Green Big",
    "icon": "potion_green_big",
    "type": "keystone",
    "bonuses": [
      "can poison anyone"
    ],
    "x": 124.70306,
    "y": 72.00797,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_29"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_33",
    "classKey": "alchemist",
    "name": "Potion Cyan Big",
    "icon": "potion_cyan_big",
    "type": "keystone",
    "bonuses": [
      "effect duration",
      "item usage speed"
    ],
    "x": -124.70306,
    "y": 71.99601,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_30"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_34",
    "classKey": "alchemist",
    "name": "Potion Gray Small",
    "icon": "potion_gray_small",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 93.53074,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_25"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_35",
    "classKey": "alchemist",
    "name": "Potion Red",
    "icon": "potion_red",
    "type": "notable",
    "bonuses": [
      "공격력 +2"
    ],
    "x": -124.703,
    "y": -0.004,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_28"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_36",
    "classKey": "alchemist",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "notable",
    "bonuses": [
      "projectile speed"
    ],
    "x": 62.35153,
    "y": -107.99602,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_31"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_37",
    "classKey": "alchemist",
    "name": "Potion Black Big",
    "icon": "potion_black_big",
    "type": "notable",
    "bonuses": [
      "effect duration"
    ],
    "x": 62.354973,
    "y": 107.99999,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "alchemist_34"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_38",
    "classKey": "alchemist",
    "name": "Potion Green",
    "icon": "potion_green",
    "type": "minor",
    "bonuses": [
      "damage +5%"
    ],
    "x": 93.52729,
    "y": 18.005981,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_29"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_39",
    "classKey": "alchemist",
    "name": "Potion White Small",
    "icon": "potion_white_small",
    "type": "minor",
    "bonuses": [
      "공격력 +4%"
    ],
    "x": -62.351524,
    "y": 71.999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_30"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_40",
    "classKey": "alchemist",
    "name": "Torch",
    "icon": "torch",
    "type": "minor",
    "bonuses": [
      "damage +3%"
    ],
    "x": -31.175764,
    "y": -90.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_18"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_41",
    "classKey": "alchemist",
    "name": "Potion Green",
    "icon": "potion_green",
    "type": "minor",
    "bonuses": [
      "damage +10%"
    ],
    "x": 93.52729,
    "y": -17.994019,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_38"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_42",
    "classKey": "alchemist",
    "name": "Potion White Small",
    "icon": "potion_white_small",
    "type": "minor",
    "bonuses": [
      "공격력 +5%"
    ],
    "x": -31.17576,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_39"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_43",
    "classKey": "alchemist",
    "name": "Torch",
    "icon": "torch",
    "type": "minor",
    "bonuses": [
      "damage +5%"
    ],
    "x": -62.35153,
    "y": -72.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_40"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_44",
    "classKey": "alchemist",
    "name": "Potion Green",
    "icon": "potion_green",
    "type": "minor",
    "bonuses": [
      "damage +15%"
    ],
    "x": 93.52729,
    "y": -53.99402,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_41",
      "alchemist_60"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_45",
    "classKey": "alchemist",
    "name": "Potion White Small",
    "icon": "potion_white_small",
    "type": "minor",
    "bonuses": [
      "공격력 +6%"
    ],
    "x": 0.0000038146973,
    "y": 108.00298,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_42",
      "alchemist_61"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_46",
    "classKey": "alchemist",
    "name": "Torch",
    "icon": "torch",
    "type": "minor",
    "bonuses": [
      "damage +7%"
    ],
    "x": -93.52729,
    "y": -54.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_43",
      "alchemist_59"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_47",
    "classKey": "alchemist",
    "name": "Potion Red",
    "icon": "potion_red",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -93.52729,
    "y": 89.998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_33"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_48",
    "classKey": "alchemist",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "projectile duplication"
    ],
    "x": -31.175764,
    "y": -126.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_19"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_49",
    "classKey": "alchemist",
    "name": "Potion Gray",
    "icon": "potion_gray",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 124.70306,
    "y": 36.007973,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_32"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_50",
    "classKey": "alchemist",
    "name": "Potion Red",
    "icon": "potion_red",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -62.351524,
    "y": 107.99999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_47"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_51",
    "classKey": "alchemist",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "projectile duplication"
    ],
    "x": -62.35153,
    "y": -108.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_48"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_52",
    "classKey": "alchemist",
    "name": "Potion Black",
    "icon": "potion_black",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 124.70306,
    "y": 0.007972717,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_49"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_53",
    "classKey": "alchemist",
    "name": "Potion Red",
    "icon": "potion_red",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -31.17576,
    "y": 126.00198,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_50"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_54",
    "classKey": "alchemist",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "projectile duplication"
    ],
    "x": -93.52729,
    "y": -90.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_51"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_55",
    "classKey": "alchemist",
    "name": "Potion Brown",
    "icon": "potion_brown",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": 124.70306,
    "y": -35.992027,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "alchemist_52"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_56",
    "classKey": "alchemist",
    "name": "Potion Red Big",
    "icon": "potion_red_big",
    "type": "keystone",
    "bonuses": [
      "healing +1000%"
    ],
    "x": 0.0000038146973,
    "y": 144.00398,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_53"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_57",
    "classKey": "alchemist",
    "name": "Potion Double",
    "icon": "potion_double",
    "type": "keystone",
    "bonuses": [
      "projectile duplication",
      "damage -15%"
    ],
    "x": -124.70306,
    "y": -72.004,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_54"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_58",
    "classKey": "alchemist",
    "name": "Potion Black Big",
    "icon": "potion_black_big",
    "type": "keystone",
    "bonuses": [
      "damage +10%"
    ],
    "x": 124.70306,
    "y": -71.99203,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "alchemist_55"
    ],
    "longLinks": []
  },
  {
    "id": "alchemist_59",
    "classKey": "alchemist",
    "name": "Torch",
    "icon": "torch",
    "type": "notable",
    "bonuses": [
      "damage +15%"
    ],
    "x": -124.70306,
    "y": -36.003998,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "alchemist_60",
    "classKey": "alchemist",
    "name": "Potion Green Big",
    "icon": "potion_green_big",
    "type": "notable",
    "bonuses": [
      "damage +70%"
    ],
    "x": 93.525566,
    "y": -89.99103,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "alchemist_61",
    "classKey": "alchemist",
    "name": "Potion White",
    "icon": "potion_white",
    "type": "notable",
    "bonuses": [
      "inflict effect"
    ],
    "x": 31.175768,
    "y": 126.00199,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "blacksmith_1",
    "classKey": "blacksmith",
    "name": "Blacksmith",
    "icon": "void",
    "type": "start",
    "bonuses": [],
    "x": 0,
    "y": 0,
    "size": 24,
    "isStart": true,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "blacksmith_2",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": 18.001993,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_1"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_3",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "받는 피해 -2% (shield 장착 시)"
    ],
    "x": -31.175764,
    "y": 17.999002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_1"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_4",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 4.4087286e-15,
    "y": -36,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_1"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_5",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0,
    "y": 36.000996,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_2"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_6",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_3"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_7",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.177488,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_4"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_8",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": 54,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_5"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_9",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -54.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_6"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_10",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.354977,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_7"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_11",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_8"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_12",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -36.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_9"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_13",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.354977,
    "y": -36.001995,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_10"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_14",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 31.175764,
    "y": 90.00398,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_11"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_15",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -93.52729,
    "y": -18.002996,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_12"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_16",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.354977,
    "y": -72.002,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_13"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_17",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 8.817457e-15,
    "y": -72,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_4"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_18",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 1.3226186e-14,
    "y": -108,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_17"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_19",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 1.7634914e-14,
    "y": -144,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_18"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_20",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_27"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_21",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -53.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_17"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_22",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": 54.00299,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_26"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_23",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": 17.997007,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_20"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_24",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -89.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_21"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_25",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.353252,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_22"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_26",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.35153,
    "y": 36.003986,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_2"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_27",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "받는 피해 -2% (shield 장착 시)"
    ],
    "x": -62.35153,
    "y": 35.998005,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_3"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_28",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -124.70306,
    "y": 35.99601,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_23"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_29",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": 54.00598,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_26"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_30",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "받는 피해 -2% (shield 장착 시)"
    ],
    "x": -93.52729,
    "y": 53.99701,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_27"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_31",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -125.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_24"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_32",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 124.70306,
    "y": 72.00797,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_29"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_33",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [
      "공격력 +1 (shield 장착 시)",
      "공격력 -5% (shield 장착 시)"
    ],
    "x": -124.70306,
    "y": 71.99601,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_30"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_34",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.53074,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_25"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_35",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -124.703,
    "y": -0.004,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_28"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_36",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.35153,
    "y": -107.99602,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_31"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_37",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.354973,
    "y": 107.99999,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "blacksmith_34"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_38",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": 18.005981,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_29"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_39",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.351524,
    "y": 71.999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_30"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_40",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -90.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_18"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_41",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": -17.994019,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_38"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_42",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.17576,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_39"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_43",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -72.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_40"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_44",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": -53.99402,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_41",
      "blacksmith_60"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_45",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0.0000038146973,
    "y": 108.00298,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_42",
      "blacksmith_61"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_46",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": -54.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_43",
      "blacksmith_59"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_47",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": 89.998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_33"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_48",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -126.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_19"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_49",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": 36.007973,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_32"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_50",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.351524,
    "y": 107.99999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_47"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_51",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -108.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_48"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_52",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": 0.007972717,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_49"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_53",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.17576,
    "y": 126.00198,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_50"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_54",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": -90.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_51"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_55",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": -35.992027,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "blacksmith_52"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_56",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 0.0000038146973,
    "y": 144.00398,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_53"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_57",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": -124.70306,
    "y": -72.004,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_54"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_58",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 124.70306,
    "y": -71.99203,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "blacksmith_55"
    ],
    "longLinks": []
  },
  {
    "id": "blacksmith_59",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -124.70306,
    "y": -36.003998,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "blacksmith_60",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 93.525566,
    "y": -89.99103,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "blacksmith_61",
    "classKey": "blacksmith",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 31.175768,
    "y": 126.00199,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "cook_1",
    "classKey": "cook",
    "name": "Cook",
    "icon": "meal",
    "type": "start",
    "bonuses": [],
    "x": 0,
    "y": 0,
    "size": 24,
    "isStart": true,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "cook_2",
    "classKey": "cook",
    "name": "Glove Iron",
    "icon": "glove_iron",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": 31.175764,
    "y": 18.001993,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_1"
    ],
    "longLinks": []
  },
  {
    "id": "cook_3",
    "classKey": "cook",
    "name": "Cookie",
    "icon": "cookie",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": -31.175764,
    "y": 17.999002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_1"
    ],
    "longLinks": []
  },
  {
    "id": "cook_4",
    "classKey": "cook",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +1"
    ],
    "x": 4.4087286e-15,
    "y": -36,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_1"
    ],
    "longLinks": []
  },
  {
    "id": "cook_5",
    "classKey": "cook",
    "name": "Sword Bronze",
    "icon": "sword_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +3%"
    ],
    "x": 0,
    "y": 36.000996,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_2"
    ],
    "longLinks": []
  },
  {
    "id": "cook_6",
    "classKey": "cook",
    "name": "Fishing Rod Gold",
    "icon": "fishing_rod_gold",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -31.175764,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_3"
    ],
    "longLinks": []
  },
  {
    "id": "cook_7",
    "classKey": "cook",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": 31.177488,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_4"
    ],
    "longLinks": []
  },
  {
    "id": "cook_8",
    "classKey": "cook",
    "name": "Sword Bronze",
    "icon": "sword_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +3%"
    ],
    "x": -31.175764,
    "y": 54,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_5"
    ],
    "longLinks": []
  },
  {
    "id": "cook_9",
    "classKey": "cook",
    "name": "Fishing Rod Gold",
    "icon": "fishing_rod_gold",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -31.175764,
    "y": -54.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_6"
    ],
    "longLinks": []
  },
  {
    "id": "cook_10",
    "classKey": "cook",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": 62.354977,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_7"
    ],
    "longLinks": []
  },
  {
    "id": "cook_11",
    "classKey": "cook",
    "name": "Sword Bronze",
    "icon": "sword_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +3%"
    ],
    "x": 0,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_8"
    ],
    "longLinks": []
  },
  {
    "id": "cook_12",
    "classKey": "cook",
    "name": "Fishing Rod Gold",
    "icon": "fishing_rod_gold",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -62.35153,
    "y": -36.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_9"
    ],
    "longLinks": []
  },
  {
    "id": "cook_13",
    "classKey": "cook",
    "name": "Heart Red",
    "icon": "heart_red",
    "type": "minor",
    "bonuses": [
      "incoming healing"
    ],
    "x": 62.354977,
    "y": -36.001995,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_10"
    ],
    "longLinks": []
  },
  {
    "id": "cook_14",
    "classKey": "cook",
    "name": "Chili Pepper Red",
    "icon": "chili_pepper_red",
    "type": "notable",
    "bonuses": [
      "inflict effect"
    ],
    "x": 31.175764,
    "y": 90.00398,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_11"
    ],
    "longLinks": []
  },
  {
    "id": "cook_15",
    "classKey": "cook",
    "name": "Fishing Rod Emerald",
    "icon": "fishing_rod_emerald",
    "type": "notable",
    "bonuses": [
      "공격력 +1"
    ],
    "x": -93.52729,
    "y": -18.002996,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_12"
    ],
    "longLinks": []
  },
  {
    "id": "cook_16",
    "classKey": "cook",
    "name": "Heart Violet",
    "icon": "heart_violet",
    "type": "notable",
    "bonuses": [
      "healing +100%"
    ],
    "x": 62.354977,
    "y": -72.002,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_13"
    ],
    "longLinks": []
  },
  {
    "id": "cook_17",
    "classKey": "cook",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": 8.817457e-15,
    "y": -72,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_4"
    ],
    "longLinks": []
  },
  {
    "id": "cook_18",
    "classKey": "cook",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "minor",
    "bonuses": [
      "공격력 +3"
    ],
    "x": 1.3226186e-14,
    "y": -108,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_17"
    ],
    "longLinks": []
  },
  {
    "id": "cook_19",
    "classKey": "cook",
    "name": "Cross Red",
    "icon": "cross_red",
    "type": "keystone",
    "bonuses": [
      "공격력 +10"
    ],
    "x": 1.7634914e-14,
    "y": -144,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_18"
    ],
    "longLinks": []
  },
  {
    "id": "cook_20",
    "classKey": "cook",
    "name": "Fishing Rod Emerald",
    "icon": "fishing_rod_emerald",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -62.35153,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "cook_21",
    "classKey": "cook",
    "name": "Sword Gold",
    "icon": "sword_gold",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": 31.175764,
    "y": -53.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_17"
    ],
    "longLinks": []
  },
  {
    "id": "cook_22",
    "classKey": "cook",
    "name": "Sword Iron",
    "icon": "sword_iron",
    "type": "minor",
    "bonuses": [
      "damage +2%"
    ],
    "x": 31.175764,
    "y": 54.00299,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_26"
    ],
    "longLinks": []
  },
  {
    "id": "cook_23",
    "classKey": "cook",
    "name": "Fishing Rod Emerald",
    "icon": "fishing_rod_emerald",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -93.52729,
    "y": 17.997007,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_20"
    ],
    "longLinks": []
  },
  {
    "id": "cook_24",
    "classKey": "cook",
    "name": "Sword Gold",
    "icon": "sword_gold",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": 31.175764,
    "y": -89.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_21"
    ],
    "longLinks": []
  },
  {
    "id": "cook_25",
    "classKey": "cook",
    "name": "Sword Iron",
    "icon": "sword_iron",
    "type": "minor",
    "bonuses": [
      "damage +2%"
    ],
    "x": 62.353252,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_22"
    ],
    "longLinks": []
  },
  {
    "id": "cook_26",
    "classKey": "cook",
    "name": "Glove Iron",
    "icon": "glove_iron",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": 62.35153,
    "y": 36.003986,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_2"
    ],
    "longLinks": []
  },
  {
    "id": "cook_27",
    "classKey": "cook",
    "name": "Cookie",
    "icon": "cookie",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": -62.35153,
    "y": 35.998005,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_3",
      "cook_20"
    ],
    "longLinks": []
  },
  {
    "id": "cook_28",
    "classKey": "cook",
    "name": "Fishing Rod Emerald",
    "icon": "fishing_rod_emerald",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -124.70306,
    "y": 35.99601,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_23"
    ],
    "longLinks": []
  },
  {
    "id": "cook_29",
    "classKey": "cook",
    "name": "Glove Iron",
    "icon": "glove_iron",
    "type": "minor",
    "bonuses": [
      "공격력 +2"
    ],
    "x": 93.52729,
    "y": 54.00598,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_26"
    ],
    "longLinks": []
  },
  {
    "id": "cook_30",
    "classKey": "cook",
    "name": "Cookie",
    "icon": "cookie",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": -93.52729,
    "y": 53.99701,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_27"
    ],
    "longLinks": []
  },
  {
    "id": "cook_31",
    "classKey": "cook",
    "name": "Sword Gold",
    "icon": "sword_gold",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": 31.175764,
    "y": -125.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_24"
    ],
    "longLinks": []
  },
  {
    "id": "cook_32",
    "classKey": "cook",
    "name": "Glove Iron",
    "icon": "glove_iron",
    "type": "keystone",
    "bonuses": [
      "공격력 +5",
      "공격력 -75%"
    ],
    "x": 124.70306,
    "y": 72.00797,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_29"
    ],
    "longLinks": []
  },
  {
    "id": "cook_33",
    "classKey": "cook",
    "name": "Cookie",
    "icon": "cookie",
    "type": "keystone",
    "bonuses": [
      "item use movement speed"
    ],
    "x": -124.70306,
    "y": 71.99601,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_30"
    ],
    "longLinks": []
  },
  {
    "id": "cook_34",
    "classKey": "cook",
    "name": "Sword Iron",
    "icon": "sword_iron",
    "type": "minor",
    "bonuses": [
      "damage +2%"
    ],
    "x": 93.53074,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_25"
    ],
    "longLinks": []
  },
  {
    "id": "cook_35",
    "classKey": "cook",
    "name": "Fishing Rod Emerald",
    "icon": "fishing_rod_emerald",
    "type": "notable",
    "bonuses": [
      "gained experience"
    ],
    "x": -124.703,
    "y": -0.004,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_28"
    ],
    "longLinks": []
  },
  {
    "id": "cook_36",
    "classKey": "cook",
    "name": "Sword Gold",
    "icon": "sword_gold",
    "type": "notable",
    "bonuses": [
      "healing +500%"
    ],
    "x": 62.35153,
    "y": -107.99602,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_31"
    ],
    "longLinks": []
  },
  {
    "id": "cook_37",
    "classKey": "cook",
    "name": "Pie",
    "icon": "pie",
    "type": "notable",
    "bonuses": [
      "damage +1%"
    ],
    "x": 62.354973,
    "y": 107.99999,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "cook_34"
    ],
    "longLinks": []
  },
  {
    "id": "cook_38",
    "classKey": "cook",
    "name": "Glove Emerald",
    "icon": "glove_emerald",
    "type": "minor",
    "bonuses": [
      "치명타 확률 "
    ],
    "x": 93.52729,
    "y": 18.005981,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_29"
    ],
    "longLinks": []
  },
  {
    "id": "cook_39",
    "classKey": "cook",
    "name": "Fishing Rod Steel",
    "icon": "fishing_rod_steel",
    "type": "minor",
    "bonuses": [
      "받는 피해 -5%"
    ],
    "x": -62.351524,
    "y": 71.999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_30"
    ],
    "longLinks": []
  },
  {
    "id": "cook_40",
    "classKey": "cook",
    "name": "Soup Yellow",
    "icon": "soup_yellow",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": -31.175764,
    "y": -90.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_18"
    ],
    "longLinks": []
  },
  {
    "id": "cook_41",
    "classKey": "cook",
    "name": "Glove Emerald",
    "icon": "glove_emerald",
    "type": "minor",
    "bonuses": [
      "치명타 확률 "
    ],
    "x": 93.52729,
    "y": -17.994019,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_38"
    ],
    "longLinks": []
  },
  {
    "id": "cook_42",
    "classKey": "cook",
    "name": "Fishing Rod Steel",
    "icon": "fishing_rod_steel",
    "type": "minor",
    "bonuses": [
      "받는 피해 -5%"
    ],
    "x": -31.17576,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_39"
    ],
    "longLinks": []
  },
  {
    "id": "cook_43",
    "classKey": "cook",
    "name": "Soup Yellow",
    "icon": "soup_yellow",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": -62.35153,
    "y": -72.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_40"
    ],
    "longLinks": []
  },
  {
    "id": "cook_44",
    "classKey": "cook",
    "name": "Glove Emerald",
    "icon": "glove_emerald",
    "type": "minor",
    "bonuses": [
      "치명타 확률 "
    ],
    "x": 93.52729,
    "y": -53.99402,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_41",
      "cook_60"
    ],
    "longLinks": []
  },
  {
    "id": "cook_45",
    "classKey": "cook",
    "name": "Fishing Rod Steel",
    "icon": "fishing_rod_steel",
    "type": "minor",
    "bonuses": [
      "받는 피해 -5%"
    ],
    "x": 0.0000038146973,
    "y": 108.00298,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_42",
      "cook_61"
    ],
    "longLinks": []
  },
  {
    "id": "cook_46",
    "classKey": "cook",
    "name": "Soup Yellow",
    "icon": "soup_yellow",
    "type": "minor",
    "bonuses": [
      "inflict effect"
    ],
    "x": -93.52729,
    "y": -54.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_43",
      "cook_59"
    ],
    "longLinks": []
  },
  {
    "id": "cook_47",
    "classKey": "cook",
    "name": "Apple Green",
    "icon": "apple_green",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -93.52729,
    "y": 89.998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_33"
    ],
    "longLinks": []
  },
  {
    "id": "cook_48",
    "classKey": "cook",
    "name": "Chicken Leg",
    "icon": "chicken_leg",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -31.175764,
    "y": -126.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_19"
    ],
    "longLinks": []
  },
  {
    "id": "cook_49",
    "classKey": "cook",
    "name": "Glove Bronze",
    "icon": "glove_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +4%"
    ],
    "x": 124.70306,
    "y": 36.007973,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_32"
    ],
    "longLinks": []
  },
  {
    "id": "cook_50",
    "classKey": "cook",
    "name": "Apple Green",
    "icon": "apple_green",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -62.351524,
    "y": 107.99999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_47"
    ],
    "longLinks": []
  },
  {
    "id": "cook_51",
    "classKey": "cook",
    "name": "Chicken Leg",
    "icon": "chicken_leg",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -62.35153,
    "y": -108.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_48"
    ],
    "longLinks": []
  },
  {
    "id": "cook_52",
    "classKey": "cook",
    "name": "Glove Bronze",
    "icon": "glove_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +5%"
    ],
    "x": 124.70306,
    "y": 0.007972717,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_49"
    ],
    "longLinks": []
  },
  {
    "id": "cook_53",
    "classKey": "cook",
    "name": "Apple Green",
    "icon": "apple_green",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -31.17576,
    "y": 126.00198,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_50"
    ],
    "longLinks": []
  },
  {
    "id": "cook_54",
    "classKey": "cook",
    "name": "Chicken Leg",
    "icon": "chicken_leg",
    "type": "minor",
    "bonuses": [
      "healing +100%"
    ],
    "x": -93.52729,
    "y": -90.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_51"
    ],
    "longLinks": []
  },
  {
    "id": "cook_55",
    "classKey": "cook",
    "name": "Glove Bronze",
    "icon": "glove_bronze",
    "type": "minor",
    "bonuses": [
      "공격력 +6%"
    ],
    "x": 124.70306,
    "y": -35.992027,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "cook_52"
    ],
    "longLinks": []
  },
  {
    "id": "cook_56",
    "classKey": "cook",
    "name": "Glove Gold",
    "icon": "glove_gold",
    "type": "keystone",
    "bonuses": [
      "item usage speed"
    ],
    "x": 0.0000038146973,
    "y": 144.00398,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_53"
    ],
    "longLinks": []
  },
  {
    "id": "cook_57",
    "classKey": "cook",
    "name": "Chicken",
    "icon": "chicken",
    "type": "keystone",
    "bonuses": [
      "inflict effect"
    ],
    "x": -124.70306,
    "y": -72.004,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_54"
    ],
    "longLinks": []
  },
  {
    "id": "cook_58",
    "classKey": "cook",
    "name": "Glove Steel",
    "icon": "glove_steel",
    "type": "keystone",
    "bonuses": [
      "공격력 +5"
    ],
    "x": 124.70306,
    "y": -71.99203,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "cook_55"
    ],
    "longLinks": []
  },
  {
    "id": "cook_59",
    "classKey": "cook",
    "name": "Soup Red",
    "icon": "soup_red",
    "type": "notable",
    "bonuses": [
      "incoming healing"
    ],
    "x": -124.70306,
    "y": -36.003998,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "cook_60",
    "classKey": "cook",
    "name": "Glove Diamond",
    "icon": "glove_diamond",
    "type": "notable",
    "bonuses": [
      "치명타 피해 +50%"
    ],
    "x": 93.525566,
    "y": -89.99103,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "cook_61",
    "classKey": "cook",
    "name": "Fishing Rod Diamond",
    "icon": "fishing_rod_diamond",
    "type": "notable",
    "bonuses": [
      "inflict effect"
    ],
    "x": 31.175768,
    "y": 126.00199,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "enchanter_1",
    "classKey": "enchanter",
    "name": "Enchanter",
    "icon": "void",
    "type": "start",
    "bonuses": [],
    "x": 0,
    "y": 0,
    "size": 24,
    "isStart": true,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "enchanter_2",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "무료 인챈트 확률 +2%"
    ],
    "x": 31.175764,
    "y": 18.001993,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_1"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_3",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": 17.999002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_1"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_4",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 4.4087286e-15,
    "y": -36,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_1"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_5",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0,
    "y": 36.000996,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_2"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_6",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_3"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_7",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.177488,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_4"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_8",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": 54,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_5"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_9",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -54.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_6"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_10",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.354977,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_7"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_11",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_8"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_12",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -36.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_9"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_13",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.354977,
    "y": -36.001995,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_10"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_14",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 31.175764,
    "y": 90.00398,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_11"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_15",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -93.52729,
    "y": -18.002996,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_12"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_16",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.354977,
    "y": -72.002,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_13"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_17",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 8.817457e-15,
    "y": -72,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_4"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_18",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 1.3226186e-14,
    "y": -108,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_17"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_19",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 1.7634914e-14,
    "y": -144,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_18"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_20",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_27"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_21",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -53.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_17"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_22",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": 54.00299,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_26"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_23",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": 17.997007,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_20"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_24",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -89.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_21"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_25",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 62.353252,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_22"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_26",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "무료 인챈트 확률 +3%"
    ],
    "x": 62.35153,
    "y": 36.003986,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_2"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_27",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": 35.998005,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_3"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_28",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -124.70306,
    "y": 35.99601,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_23"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_29",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [
      "무료 인챈트 확률 +5%"
    ],
    "x": 93.52729,
    "y": 54.00598,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_26"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_30",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": 53.99701,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_27"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_31",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 31.175764,
    "y": -125.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_24"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_32",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [
      "무료 인챈트 확률 +30%"
    ],
    "x": 124.70306,
    "y": 72.00797,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_29"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_33",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": -124.70306,
    "y": 71.99601,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_30"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_34",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.53074,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_25"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_35",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -124.703,
    "y": -0.004,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_28"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_36",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.35153,
    "y": -107.99602,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_31"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_37",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 62.354973,
    "y": 107.99999,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "enchanter_34"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_38",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": 18.005981,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_29"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_39",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.351524,
    "y": 71.999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_30"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_40",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -90.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_18"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_41",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": -17.994019,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_38"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_42",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.17576,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_39"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_43",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -72.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_40"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_44",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 93.52729,
    "y": -53.99402,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_41",
      "enchanter_60"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_45",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 0.0000038146973,
    "y": 108.00298,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_42",
      "enchanter_61"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_46",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": -54.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_43",
      "enchanter_59"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_47",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": 89.998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_33"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_48",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.175764,
    "y": -126.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_19"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_49",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": 36.007973,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_32"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_50",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.351524,
    "y": 107.99999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_47"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_51",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -62.35153,
    "y": -108.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_48"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_52",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": 0.007972717,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_49"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_53",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -31.17576,
    "y": 126.00198,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_50"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_54",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": -93.52729,
    "y": -90.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_51"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_55",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "minor",
    "bonuses": [],
    "x": 124.70306,
    "y": -35.992027,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "enchanter_52"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_56",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 0.0000038146973,
    "y": 144.00398,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_53"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_57",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": -124.70306,
    "y": -72.004,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_54"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_58",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "keystone",
    "bonuses": [],
    "x": 124.70306,
    "y": -71.99203,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "enchanter_55"
    ],
    "longLinks": []
  },
  {
    "id": "enchanter_59",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": -124.70306,
    "y": -36.003998,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "enchanter_60",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 93.525566,
    "y": -89.99103,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "enchanter_61",
    "classKey": "enchanter",
    "name": "Void",
    "icon": "void",
    "type": "notable",
    "bonuses": [],
    "x": 31.175768,
    "y": 126.00199,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "hunter_1",
    "classKey": "hunter",
    "name": "Hunter",
    "icon": "bow_gold",
    "type": "start",
    "bonuses": [],
    "x": 0,
    "y": 0,
    "size": 24,
    "isStart": true,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "hunter_2",
    "classKey": "hunter",
    "name": "Helmet Leather",
    "icon": "helmet_leather",
    "type": "minor",
    "bonuses": [
      "내구도 손실 회피 +5%"
    ],
    "x": 31.175764,
    "y": 18.001993,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_1"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_3",
    "classKey": "hunter",
    "name": "Bone",
    "icon": "bone",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -31.175764,
    "y": 17.999002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_1"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_4",
    "classKey": "hunter",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 4.4087286e-15,
    "y": -36,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_1"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_5",
    "classKey": "hunter",
    "name": "Chestplate Leather",
    "icon": "chestplate_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4 (armors/leather)"
    ],
    "x": 0,
    "y": 36.000996,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_2"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_6",
    "classKey": "hunter",
    "name": "Arrow Bronze",
    "icon": "arrow_bronze",
    "type": "minor",
    "bonuses": [
      "발사한 화살 회수 +5%"
    ],
    "x": -31.175764,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_3"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_7",
    "classKey": "hunter",
    "name": "Bow Emerald",
    "icon": "bow_emerald",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": 31.177488,
    "y": -18.000998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_4"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_8",
    "classKey": "hunter",
    "name": "Chestplate Leather",
    "icon": "chestplate_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4 (armors/leather)"
    ],
    "x": -31.175764,
    "y": 54,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_5"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_9",
    "classKey": "hunter",
    "name": "Arrow Bronze",
    "icon": "arrow_bronze",
    "type": "minor",
    "bonuses": [
      "발사한 화살 회수 +5%"
    ],
    "x": -31.175764,
    "y": -54.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_6"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_10",
    "classKey": "hunter",
    "name": "Bow Emerald",
    "icon": "bow_emerald",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": 62.354977,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_7"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_11",
    "classKey": "hunter",
    "name": "Chestplate Leather",
    "icon": "chestplate_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4 (armors/leather)"
    ],
    "x": 0,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_8"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_12",
    "classKey": "hunter",
    "name": "Arrow Bronze",
    "icon": "arrow_bronze",
    "type": "minor",
    "bonuses": [
      "발사한 화살 회수 +5%"
    ],
    "x": -62.35153,
    "y": -36.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_9"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_13",
    "classKey": "hunter",
    "name": "Bow Emerald",
    "icon": "bow_emerald",
    "type": "minor",
    "bonuses": [
      "item use movement speed"
    ],
    "x": 62.354977,
    "y": -36.001995,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_10"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_14",
    "classKey": "hunter",
    "name": "Chestplate Leather",
    "icon": "chestplate_leather",
    "type": "notable",
    "bonuses": [
      "공격력 +4 (armors/leather)"
    ],
    "x": 31.175764,
    "y": 90.00398,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_11"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_15",
    "classKey": "hunter",
    "name": "Arrow Bronze",
    "icon": "arrow_bronze",
    "type": "notable",
    "bonuses": [
      "발사한 화살 회수 +80%"
    ],
    "x": -93.52729,
    "y": -18.002996,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_12"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_16",
    "classKey": "hunter",
    "name": "Bow Emerald",
    "icon": "bow_emerald",
    "type": "notable",
    "bonuses": [
      "item use movement speed"
    ],
    "x": 62.354977,
    "y": -72.002,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_13"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_17",
    "classKey": "hunter",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 8.817457e-15,
    "y": -72,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_4"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_18",
    "classKey": "hunter",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "minor",
    "bonuses": [
      "projectile speed"
    ],
    "x": 1.3226186e-14,
    "y": -108,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_17"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_19",
    "classKey": "hunter",
    "name": "Arrow Emerald",
    "icon": "arrow_emerald",
    "type": "keystone",
    "bonuses": [
      "projectile speed",
      "damage -5%"
    ],
    "x": 1.7634914e-14,
    "y": -144,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_18"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_20",
    "classKey": "hunter",
    "name": "Eye Green",
    "icon": "eye_green",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -62.35153,
    "y": -0.0019950867,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_27"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_21",
    "classKey": "hunter",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "치명타 피해 +2%"
    ],
    "x": 31.175764,
    "y": -53.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_17"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_22",
    "classKey": "hunter",
    "name": "Boots Leather",
    "icon": "boots_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4% (armors/leather)"
    ],
    "x": 31.175764,
    "y": 54.00299,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_26"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_23",
    "classKey": "hunter",
    "name": "Eye Green",
    "icon": "eye_green",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -93.52729,
    "y": 17.997007,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_20"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_24",
    "classKey": "hunter",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "치명타 피해 +2%"
    ],
    "x": 31.175764,
    "y": -89.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_21"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_25",
    "classKey": "hunter",
    "name": "Boots Leather",
    "icon": "boots_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4% (armors/leather)"
    ],
    "x": 62.353252,
    "y": 72.00199,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_22"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_26",
    "classKey": "hunter",
    "name": "Helmet Leather",
    "icon": "helmet_leather",
    "type": "minor",
    "bonuses": [
      "내구도 손실 회피 +10%"
    ],
    "x": 62.35153,
    "y": 36.003986,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_2"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_27",
    "classKey": "hunter",
    "name": "Bone",
    "icon": "bone",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -62.35153,
    "y": 35.998005,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_3"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_28",
    "classKey": "hunter",
    "name": "Eye Green",
    "icon": "eye_green",
    "type": "minor",
    "bonuses": [
      "gained experience"
    ],
    "x": -124.70306,
    "y": 35.99601,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_23"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_29",
    "classKey": "hunter",
    "name": "Helmet Leather",
    "icon": "helmet_leather",
    "type": "minor",
    "bonuses": [
      "내구도 손실 회피 +15%"
    ],
    "x": 93.52729,
    "y": 54.00598,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_26"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_30",
    "classKey": "hunter",
    "name": "Bone",
    "icon": "bone",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -93.52729,
    "y": 53.99701,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_27"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_31",
    "classKey": "hunter",
    "name": "Arrow Diamond",
    "icon": "arrow_diamond",
    "type": "minor",
    "bonuses": [
      "치명타 피해 +2%"
    ],
    "x": 31.175764,
    "y": -125.99801,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_24"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_32",
    "classKey": "hunter",
    "name": "Helmet Leather",
    "icon": "helmet_leather",
    "type": "keystone",
    "bonuses": [
      "내구도 손실 회피 +60%"
    ],
    "x": 124.70306,
    "y": 72.00797,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_29"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_33",
    "classKey": "hunter",
    "name": "Skull",
    "icon": "skull",
    "type": "keystone",
    "bonuses": [
      "loot duplication"
    ],
    "x": -124.70306,
    "y": 71.99601,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_30"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_34",
    "classKey": "hunter",
    "name": "Boots Leather",
    "icon": "boots_leather",
    "type": "minor",
    "bonuses": [
      "공격력 +4% (armors/leather)"
    ],
    "x": 93.53074,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_25"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_35",
    "classKey": "hunter",
    "name": "Eye Green",
    "icon": "eye_green",
    "type": "notable",
    "bonuses": [
      "gained experience"
    ],
    "x": -124.703,
    "y": -0.004,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_28"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_36",
    "classKey": "hunter",
    "name": "Arrow Steel",
    "icon": "arrow_steel",
    "type": "notable",
    "bonuses": [
      "inflict effect"
    ],
    "x": 62.35153,
    "y": -107.99602,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_31"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_37",
    "classKey": "hunter",
    "name": "Boots Gold",
    "icon": "boots_gold",
    "type": "notable",
    "bonuses": [
      "공격력 +50%"
    ],
    "x": 62.354973,
    "y": 107.99999,
    "size": 20,
    "isStart": false,
    "directLinks": [
      "hunter_34"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_38",
    "classKey": "hunter",
    "name": "Chestplate Fur",
    "icon": "chestplate_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 93.52729,
    "y": 18.005981,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_29"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_39",
    "classKey": "hunter",
    "name": "Cross Green",
    "icon": "cross_green",
    "type": "minor",
    "bonuses": [
      "공격력 +10%"
    ],
    "x": -62.351524,
    "y": 71.999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_30"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_40",
    "classKey": "hunter",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +1%"
    ],
    "x": -31.175764,
    "y": -90.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_18"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_41",
    "classKey": "hunter",
    "name": "Chestplate Fur",
    "icon": "chestplate_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 93.52729,
    "y": -17.994019,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_38"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_42",
    "classKey": "hunter",
    "name": "Cross Green",
    "icon": "cross_green",
    "type": "minor",
    "bonuses": [
      "공격력 +10%"
    ],
    "x": -31.17576,
    "y": 90.00099,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_39"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_43",
    "classKey": "hunter",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +1%"
    ],
    "x": -62.35153,
    "y": -72.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_40"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_44",
    "classKey": "hunter",
    "name": "Chestplate Fur",
    "icon": "chestplate_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 93.52729,
    "y": -53.99402,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_41",
      "hunter_60"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_45",
    "classKey": "hunter",
    "name": "Cross Green",
    "icon": "cross_green",
    "type": "minor",
    "bonuses": [
      "공격력 +10%"
    ],
    "x": 0.0000038146973,
    "y": 108.00298,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_42",
      "hunter_61"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_46",
    "classKey": "hunter",
    "name": "Arrow",
    "icon": "arrow",
    "type": "minor",
    "bonuses": [
      "damage +1%"
    ],
    "x": -93.52729,
    "y": -54.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_43",
      "hunter_59"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_47",
    "classKey": "hunter",
    "name": "Treasure Chest",
    "icon": "treasure_chest",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -93.52729,
    "y": 89.998,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_33"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_48",
    "classKey": "hunter",
    "name": "Bow Diamond",
    "icon": "bow_diamond",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -31.175764,
    "y": -126.001,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_19"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_49",
    "classKey": "hunter",
    "name": "Chestplate Bronze Fur",
    "icon": "chestplate_bronze_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 124.70306,
    "y": 36.007973,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_32"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_50",
    "classKey": "hunter",
    "name": "Treasure Chest",
    "icon": "treasure_chest",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -62.351524,
    "y": 107.99999,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_47"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_51",
    "classKey": "hunter",
    "name": "Bow Diamond",
    "icon": "bow_diamond",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -62.35153,
    "y": -108.002,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_48"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_52",
    "classKey": "hunter",
    "name": "Chestplate Bronze Fur",
    "icon": "chestplate_bronze_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 124.70306,
    "y": 0.007972717,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_49"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_53",
    "classKey": "hunter",
    "name": "Treasure Chest",
    "icon": "treasure_chest",
    "type": "minor",
    "bonuses": [
      "loot duplication"
    ],
    "x": -31.17576,
    "y": 126.00198,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_50"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_54",
    "classKey": "hunter",
    "name": "Bow Diamond",
    "icon": "bow_diamond",
    "type": "minor",
    "bonuses": [
      "item usage speed"
    ],
    "x": -93.52729,
    "y": -90.003,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_51"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_55",
    "classKey": "hunter",
    "name": "Chestplate Bronze Fur",
    "icon": "chestplate_bronze_fur",
    "type": "minor",
    "bonuses": [
      "damage avoidance"
    ],
    "x": 124.70306,
    "y": -35.992027,
    "size": 16,
    "isStart": false,
    "directLinks": [
      "hunter_52"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_56",
    "classKey": "hunter",
    "name": "Treasure Chest Gold",
    "icon": "treasure_chest_gold",
    "type": "keystone",
    "bonuses": [
      "loot duplication"
    ],
    "x": 0.0000038146973,
    "y": 144.00398,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_53"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_57",
    "classKey": "hunter",
    "name": "Bow Diamond",
    "icon": "bow_diamond",
    "type": "keystone",
    "bonuses": [
      "item usage speed",
      "치명타 피해 -10%"
    ],
    "x": -124.70306,
    "y": -72.004,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_54"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_58",
    "classKey": "hunter",
    "name": "Boots Bronze",
    "icon": "boots_bronze",
    "type": "keystone",
    "bonuses": [
      "받는 피해 -95% (armors/leather)"
    ],
    "x": 124.70306,
    "y": -71.99203,
    "size": 32,
    "isStart": false,
    "directLinks": [
      "hunter_55"
    ],
    "longLinks": []
  },
  {
    "id": "hunter_59",
    "classKey": "hunter",
    "name": "Arrow",
    "icon": "arrow",
    "type": "notable",
    "bonuses": [
      "damage +1%"
    ],
    "x": -124.70306,
    "y": -36.003998,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "hunter_60",
    "classKey": "hunter",
    "name": "Chestplate Bronze Fur",
    "icon": "chestplate_bronze_fur",
    "type": "notable",
    "bonuses": [
      "받는 피해 -15% (armors/leather)"
    ],
    "x": 93.525566,
    "y": -89.99103,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  },
  {
    "id": "hunter_61",
    "classKey": "hunter",
    "name": "Cross Green",
    "icon": "cross_green",
    "type": "notable",
    "bonuses": [
      "공격력 +1"
    ],
    "x": 31.175768,
    "y": 126.00199,
    "size": 20,
    "isStart": false,
    "directLinks": [],
    "longLinks": []
  }
];
