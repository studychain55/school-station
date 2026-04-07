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
