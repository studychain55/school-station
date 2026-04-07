import supabase from "../supabase";
import type { MinkouSchoolListItem } from "@/types";

const RANKING_SELECT = `
  id, source_id, slug, name, level, classification, gender,
  prefecture_id, city_id, address,
  star_rating, review_count,
  deviation_value_min, deviation_value_max,
  description, source_url,
  MinkouCourse(id, name, deviation_value, sort_order)
` as const;

export async function fetchKoukouRanking(
  params: {
    prefectureId?: number;
    cityId?: number;
    classification?: "PUBLIC" | "PRIVATE" | "NATIONAL";
    regionPrefectureIds?: number[];
    page?: number;
    perPage?: number;
  } = {}
): Promise<{ schools: MinkouSchoolListItem[]; totalCount: number }> {
  const { prefectureId, cityId, classification, regionPrefectureIds, page = 1, perPage = 50 } = params;
  const offset = (page - 1) * perPage;

  let query = supabase
    .from("MinkouSchool")
    .select(RANKING_SELECT, { count: "estimated" })
    .eq("level", "HIGH_SCHOOL")
    .eq("is_active", true)
    .not("deviation_value_max", "is", null)
    .order("deviation_value_max", { ascending: false })
    .order("deviation_value_min", { ascending: false, nullsFirst: false })
    .order("name", { ascending: true })
    .range(offset, offset + perPage - 1);

  if (prefectureId) query = query.eq("prefecture_id", prefectureId);
  if (cityId) query = query.eq("city_id", cityId);
  if (classification) query = query.eq("classification", classification);
  if (regionPrefectureIds && regionPrefectureIds.length > 0) {
    query = query.in("prefecture_id", regionPrefectureIds);
  }

  const { data, count, error } = await query;

  if (error) {
    console.error("fetchKoukouRanking error:", error.message);
    return { schools: [], totalCount: 0 };
  }

  return { schools: (data as MinkouSchoolListItem[]) || [], totalCount: count || 0 };
}
