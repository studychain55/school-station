import type { RegionDefinition } from "@/types";

export const REGIONS: RegionDefinition[] = [
  { slug: "hokkaido", title: "北海道", prefectureIds: [1] },
  { slug: "tohoku", title: "東北地方", prefectureIds: [2, 3, 4, 5, 6, 7] },
  { slug: "kanto", title: "関東地方", prefectureIds: [8, 9, 10, 11, 12, 13, 14] },
  { slug: "hokuriku", title: "北陸地方", prefectureIds: [15, 16, 17, 18] },
  { slug: "chubu", title: "中部地方", prefectureIds: [19, 20, 21, 22, 23, 24] },
  { slug: "kansai", title: "近畿地方", prefectureIds: [25, 26, 27, 28, 29, 30] },
  { slug: "chugoku", title: "中国地方", prefectureIds: [31, 32, 33, 34, 35] },
  { slug: "shikoku", title: "四国地方", prefectureIds: [36, 37, 38, 39] },
  { slug: "kyushu", title: "九州・沖縄地方", prefectureIds: [40, 41, 42, 43, 44, 45, 46, 47] },
];

export function getRegionBySlug(slug: string): RegionDefinition | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
