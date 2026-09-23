import { getPrefectureById } from "@/data/prefectures";

export function resolveKoukouPrefectureSlug(prefectureSlug?: string, prefectureId?: number) {
  if (prefectureSlug) return prefectureSlug;
  if (!prefectureId) return null;
  return getPrefectureById(prefectureId)?.slug ?? null;
}

export function normalizeKoukouSchoolId(value: string | string[] | number | null | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw == null) return null;

  const normalized = String(raw).trim().replace(/^\/+|\/+$/g, "").replace(/\.html?$/i, "");
  if (!/^\d+$/.test(normalized)) return null;

  const id = Number(normalized);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export function buildKoukouPrefectureRankingHref(prefectureSlug?: string | null) {
  return prefectureSlug ? `/rankings/koukou/pref/${prefectureSlug}/` : "/rankings/koukou/";
}

export function buildKoukouCityRankingHref(prefectureSlug?: string | null, cityId?: string | number | null) {
  return prefectureSlug && cityId
    ? `/rankings/koukou/pref/${prefectureSlug}/c/${cityId}/`
    : buildKoukouPrefectureRankingHref(prefectureSlug);
}

export function buildKoukouSchoolDetailHref(
  schoolId: string | number | null | undefined,
  prefectureSlug?: string,
  prefectureId?: number
) {
  const slug = resolveKoukouPrefectureSlug(prefectureSlug, prefectureId);
  const normalizedId = normalizeKoukouSchoolId(schoolId);
  return slug && normalizedId ? `/rankings/koukou/pref/${slug}/schools/${normalizedId}/` : null;
}
