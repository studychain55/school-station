export type MinkouCourse = {
  id: number;
  name: string;
  deviation_value: number | null;
  sort_order: number | null;
};

export type MinkouSchoolListItem = {
  id: number;
  source_id: string | null;
  slug: string;
  name: string;
  level: string;
  classification: "PUBLIC" | "PRIVATE" | "NATIONAL";
  gender: string | null;
  prefecture_id: number;
  city_id: number | null;
  address: string | null;
  star_rating: number | null;
  review_count: number | null;
  deviation_value_min: number | null;
  deviation_value_max: number | null;
  description: string | null;
  source_url: string | null;
  MinkouCourse: MinkouCourse[];
};

export type RankingPageProps = {
  schools: MinkouSchoolListItem[];
  totalCount: number;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  prefectureTitle?: string;
  prefectureSlug?: string;
  cityTitle?: string;
  cityId?: number;
  classificationLabel?: string;
  regionTitle?: string;
  regionSlug?: string;
  currentPage: number;
  perPage: number;
};

export type Breadcrumb = {
  label: string;
  href?: string;
};

export type Prefecture = {
  id: number;
  title: string;
  title_kana: string;
  title_hira: string;
  title_alphabet: string;
  slug: string;
  type: "prefecture";
};

export type RegionDefinition = {
  slug: string;
  title: string;
  prefectureIds: number[];
};

// ─── 塾（Juku）型定義 ───────────────────────────────────────────

export type JukuBrand = {
  id: number;
  slug: string;
  name: string;
  name_kana: string | null;
  description: string | null;
  logo_url: string | null;
  official_site_url: string | null;
  is_online: boolean;
  is_active: boolean;
  created_at: string;
};

export type JukuSchoolStation = {
  id: number;
  station_name: string;
  line_name: string | null;
  walk_minutes: number | null;
  sort_order: number;
};

export type JukuSchoolYear = { id: number; year: string };
export type JukuSchoolCategory = { id: number; category: string };
export type JukuSchoolPurpose = { id: number; purpose: string };

export type JukuCourse = {
  id: number;
  name: string;
  target_grade: string | null;
  monthly_fee_min: number | null;
  monthly_fee_max: number | null;
  enrollment_fee: number | null;
  annual_fee: number | null;
  description: string | null;
  sort_order: number;
};

export type JukuReview = {
  id: number;
  user_type: string | null;
  year_type: string | null;
  purpose: string | null;
  frequency: string | null;
  rating_total: number | null;
  rating_teacher: number | null;
  rating_curriculum: number | null;
  rating_access: number | null;
  rating_price: number | null;
  rating_support: number | null;
  body_total: string | null;
  body_teacher: string | null;
  body_curriculum: string | null;
  body_advantage: string | null;
  is_active: boolean;
  created_at: string;
};

export type JukuImage = {
  id: number;
  url: string;
  alt: string | null;
  sort_order: number;
};

export type JukuRecommend = {
  id: number;
  title: string;
  body: string | null;
  sort_order: number;
};

export type JukuSchool = {
  id: number;
  brand_id: number;
  slug: string;
  name: string;
  prefecture_id: number | null;
  city_id: number | null;
  address: string | null;
  lat: number | null;
  lng: number | null;
  telephone: string | null;
  open_at: string | null;
  close_at: string | null;
  official_site_url: string | null;
  description: string | null;
  review_average_rating: number | null;
  total_review_count: number;
  is_active: boolean;
  JukuBrand: JukuBrand;
  JukuSchoolYear: JukuSchoolYear[];
  JukuSchoolCategory: JukuSchoolCategory[];
  JukuSchoolPurpose: JukuSchoolPurpose[];
  JukuCourse: JukuCourse[];
  JukuReview: JukuReview[];
  JukuImage: JukuImage[];
  JukuSchoolStation: JukuSchoolStation[];
  JukuRecommend: JukuRecommend[];
};

export type JukuSchoolListItem = Pick<
  JukuSchool,
  | "id" | "brand_id" | "slug" | "name"
  | "prefecture_id" | "city_id" | "address"
  | "review_average_rating" | "total_review_count"
  | "is_active"
> & {
  JukuBrand: Pick<JukuBrand, "id" | "slug" | "name" | "logo_url">;
  JukuSchoolYear: JukuSchoolYear[];
  JukuSchoolCategory: JukuSchoolCategory[];
  JukuSchoolPurpose: JukuSchoolPurpose[];
  JukuSchoolStation: Pick<JukuSchoolStation, "station_name" | "walk_minutes">[];
};

export type JukuListPageProps = {
  schools: JukuSchoolListItem[];
  totalCount: number;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  prefectureTitle?: string;
  prefectureSlug?: string;
  cityTitle?: string;
  stationName?: string;
  currentPage: number;
  perPage: number;
};
