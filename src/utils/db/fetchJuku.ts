import supabase from "../supabase";
import type { JukuSchoolListItem, JukuSchool } from "@/types";

const LIST_SELECT = `
  id, brand_id, slug, name,
  prefecture_id, city_id, address,
  review_average_rating, total_review_count, is_active,
  JukuBrand(id, slug, name, logo_url),
  JukuSchoolYear(id, year),
  JukuSchoolCategory(id, category),
  JukuSchoolPurpose(id, purpose),
  JukuSchoolStation(station_name, walk_minutes)
` as const;

const DETAIL_SELECT = `
  id, brand_id, slug, name,
  prefecture_id, city_id, address, lat, lng,
  telephone, open_at, close_at, official_site_url, description,
  review_average_rating, total_review_count, is_active,
  JukuBrand(id, slug, name, logo_url, description, official_site_url, is_online),
  JukuSchoolYear(id, year),
  JukuSchoolCategory(id, category),
  JukuSchoolPurpose(id, purpose),
  JukuCourse(id, name, target_grade, monthly_fee_min, monthly_fee_max, enrollment_fee, annual_fee, description, sort_order),
  JukuReview(id, user_type, year_type, purpose, frequency, rating_total, rating_teacher, rating_curriculum, rating_access, rating_price, rating_support, body_total, body_teacher, body_curriculum, body_advantage, created_at),
  JukuImage(id, url, alt, sort_order),
  JukuSchoolStation(id, station_name, line_name, walk_minutes, sort_order),
  JukuRecommend(id, title, body, sort_order)
` as const;

export type FetchJukuParams = {
  prefectureId?: number;
  cityId?: number;
  stationName?: string;
  brandSlug?: string;
  purpose?: string;
  category?: string;
  year?: string;
  page?: number;
  perPage?: number;
};

export async function fetchJukuList(
  params: FetchJukuParams = {}
): Promise<{ schools: JukuSchoolListItem[]; totalCount: number }> {
  const { prefectureId, cityId, stationName, brandSlug, purpose, category, page = 1, perPage = 20 } = params;
  const offset = (page - 1) * perPage;

  // For station search: two-step query (station table → school IDs)
  let stationSchoolIds: number[] | null = null;
  if (stationName) {
    const { data: stRows } = await supabase
      .from("JukuSchoolStation")
      .select("school_id")
      .eq("station_name", stationName);
    stationSchoolIds = stRows?.map((r) => r.school_id) ?? [];
    if (stationSchoolIds.length === 0) return { schools: [], totalCount: 0 };
  }

  let query = supabase
    .from("JukuSchool")
    .select(LIST_SELECT, { count: "estimated" })
    .eq("is_active", true)
    .order("review_average_rating", { ascending: false, nullsFirst: false })
    .order("total_review_count", { ascending: false })
    .range(offset, offset + perPage - 1);

  if (prefectureId) query = query.eq("prefecture_id", prefectureId);
  if (cityId) query = query.eq("city_id", cityId);
  if (stationSchoolIds) query = query.in("id", stationSchoolIds);
  if (brandSlug) {
    // Get brand ID first
    const { data: brand } = await supabase.from("JukuBrand").select("id").eq("slug", brandSlug).single();
    if (brand) query = query.eq("brand_id", brand.id);
  }

  const { data, count, error } = await query;

  if (error) {
    console.error("fetchJukuList error:", error.message);
    return { schools: [], totalCount: 0 };
  }

  let schools = (data as unknown as JukuSchoolListItem[]) || [];

  // In-memory filters for nested relations (PostgREST limitation)
  if (purpose) {
    schools = schools.filter((s) => s.JukuSchoolPurpose.some((p) => p.purpose === purpose));
  }
  if (category) {
    schools = schools.filter((s) => s.JukuSchoolCategory.some((c) => c.category === category));
  }

  return { schools, totalCount: count || 0 };
}

export async function fetchJukuSchoolDetail(
  brandSlug: string,
  schoolSlug: string
): Promise<JukuSchool | null> {
  const { data, error } = await supabase
    .from("JukuSchool")
    .select(DETAIL_SELECT)
    .eq("slug", schoolSlug)
    .eq("is_active", true)
    .single();

  if (error || !data) {
    console.error("fetchJukuSchoolDetail error:", error?.message);
    return null;
  }

  const school = data as unknown as JukuSchool;
  if (school.JukuBrand.slug !== brandSlug) return null;

  return school;
}

export async function fetchJukuBrandWithSchools(
  brandSlug: string
): Promise<{ brand: import("@/types").JukuBrand; schools: JukuSchoolListItem[] } | null> {
  const { data: brand, error: brandError } = await supabase
    .from("JukuBrand")
    .select("id, slug, name, name_kana, description, logo_url, official_site_url, is_online, is_active, created_at")
    .eq("slug", brandSlug)
    .eq("is_active", true)
    .single();

  if (brandError || !brand) return null;

  const { data: schools, error: schoolError } = await supabase
    .from("JukuSchool")
    .select(LIST_SELECT)
    .eq("brand_id", brand.id)
    .eq("is_active", true)
    .order("total_review_count", { ascending: false });

  if (schoolError) {
    console.error("fetchJukuBrandWithSchools schools error:", schoolError.message);
    return { brand, schools: [] };
  }

  return { brand, schools: (schools as unknown as JukuSchoolListItem[]) || [] };
}

export async function fetchJukuRanking(
  params: { prefectureId?: number; page?: number; perPage?: number } = {}
): Promise<{ schools: JukuSchoolListItem[]; totalCount: number }> {
  const { prefectureId, page = 1, perPage = 30 } = params;
  const offset = (page - 1) * perPage;

  let query = supabase
    .from("JukuSchool")
    .select(LIST_SELECT, { count: "estimated" })
    .eq("is_active", true)
    .not("review_average_rating", "is", null)
    .order("review_average_rating", { ascending: false })
    .order("total_review_count", { ascending: false })
    .range(offset, offset + perPage - 1);

  if (prefectureId) query = query.eq("prefecture_id", prefectureId);

  const { data, count, error } = await query;

  if (error) {
    console.error("fetchJukuRanking error:", error.message);
    return { schools: [], totalCount: 0 };
  }

  return { schools: (data as unknown as JukuSchoolListItem[]) || [], totalCount: count || 0 };
}

export async function fetchRelatedSchools(
  brandId: number,
  excludeSchoolId: number,
  prefectureId: number | null,
  limit = 6
): Promise<JukuSchoolListItem[]> {
  // Same brand, same prefecture first; fallback to same brand
  let query = supabase
    .from("JukuSchool")
    .select(LIST_SELECT)
    .eq("brand_id", brandId)
    .eq("is_active", true)
    .neq("id", excludeSchoolId)
    .order("total_review_count", { ascending: false })
    .limit(limit);

  if (prefectureId) query = query.eq("prefecture_id", prefectureId);

  const { data } = await query;
  const schools = (data as unknown as JukuSchoolListItem[]) || [];

  // If no results from same prefecture, get from any prefecture
  if (schools.length === 0 && prefectureId) {
    const { data: fallback } = await supabase
      .from("JukuSchool")
      .select(LIST_SELECT)
      .eq("brand_id", brandId)
      .eq("is_active", true)
      .neq("id", excludeSchoolId)
      .order("total_review_count", { ascending: false })
      .limit(limit);
    return (fallback as unknown as JukuSchoolListItem[]) || [];
  }

  return schools;
}
