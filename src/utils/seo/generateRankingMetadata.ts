import type { MinkouSchoolListItem } from "@/types";

const CURRENT_YEAR = new Date().getFullYear();

type MetadataParams = {
  prefectureTitle?: string;
  cityTitle?: string;
  classificationLabel?: string;
  regionTitle?: string;
  totalCount: number;
  topSchools?: MinkouSchoolListItem[];
};

export function generateRankingTitle(params: MetadataParams): string {
  const { prefectureTitle, cityTitle, classificationLabel, regionTitle } = params;
  const parts: string[] = [];

  if (cityTitle) parts.push(cityTitle);
  else if (prefectureTitle) parts.push(prefectureTitle);
  else if (regionTitle) parts.push(regionTitle);

  if (classificationLabel) parts.push(classificationLabel);

  parts.push("高校偏差値ランキング");

  return `${parts.join(" ")}【${CURRENT_YEAR}年度版】| School Station`;
}

export function generateRankingDescription(params: MetadataParams): string {
  const { prefectureTitle, cityTitle, classificationLabel, regionTitle, totalCount, topSchools } = params;
  const area = cityTitle || prefectureTitle || regionTitle || "全国";
  const classLabel = classificationLabel ? `${classificationLabel}の` : "";

  let desc = `${area}の${classLabel}高校を偏差値順に掲載。全${totalCount}校の偏差値データを網羅。`;

  if (topSchools && topSchools.length > 0) {
    const top3 = topSchools.slice(0, 3).map((s) => s.name);
    desc += `トップは${top3.join("、")}。`;
  }

  desc += `${CURRENT_YEAR}年度の最新偏差値ランキングをSchool Stationでチェック。`;

  return desc;
}

export function generateFAQItems(params: MetadataParams & { schools: MinkouSchoolListItem[] }): { question: string; answer: string }[] {
  const { prefectureTitle, classificationLabel, regionTitle, totalCount, schools } = params;
  const area = prefectureTitle || regionTitle || "全国";
  const classLabel = classificationLabel || "";
  const items: { question: string; answer: string }[] = [];

  if (schools.length > 0) {
    const top = schools[0];
    items.push({
      question: `${area}で最も偏差値が高い${classLabel}高校はどこですか？`,
      answer: `${CURRENT_YEAR}年度のデータによると、${area}で最も偏差値が高い${classLabel}高校は${top.name}で、偏差値は${top.deviation_value_max}です。`,
    });
  }

  items.push({
    question: `${area}には${classLabel}高校が何校ありますか？`,
    answer: `${area}には偏差値データのある${classLabel}高校が${totalCount}校登録されています。School Stationでは全校の偏差値を一覧で確認できます。`,
  });

  if (schools.length >= 5) {
    const ranges: Record<string, number> = {};
    schools.forEach((s) => {
      const v = s.deviation_value_max!;
      if (v >= 70) ranges["70以上"] = (ranges["70以上"] || 0) + 1;
      else if (v >= 60) ranges["60-69"] = (ranges["60-69"] || 0) + 1;
      else if (v >= 50) ranges["50-59"] = (ranges["50-59"] || 0) + 1;
      else ranges["50未満"] = (ranges["50未満"] || 0) + 1;
    });
    const rangeText = Object.entries(ranges)
      .map(([k, v]) => `偏差値${k}が${v}校`)
      .join("、");
    items.push({
      question: `${area}の${classLabel}高校の偏差値分布はどうなっていますか？`,
      answer: `${area}の${classLabel}高校は、${rangeText}となっています。`,
    });
  }

  if (schools.length >= 7) {
    const top7 = schools.slice(0, 7).map((s) => `${s.name}(${s.deviation_value_max})`).join("、");
    items.push({
      question: `${area}の${classLabel}高校偏差値トップ7はどの学校ですか？`,
      answer: `${area}の${classLabel}高校偏差値トップ7は、${top7}です。`,
    });
  }

  return items;
}
