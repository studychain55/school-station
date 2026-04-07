import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import { getPrefectureBySlug } from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import supabase from "@/utils/supabase";
import type { RankingPageProps } from "@/types";

export default function CityRanking(props: RankingPageProps) {
  return <KoukouRankingPage {...props} canonical={`/rankings/koukou/p-${props.prefectureSlug}/c-${props.cityId}/`} />;
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ params, res, query }) => {
  const prefSlug = (params?.prefecture as string).replace("p-", "");
  const citySlug = params?.city as string;
  const pref = getPrefectureBySlug(prefSlug);
  if (!pref) return { notFound: true };

  // Get city by ID from slug
  const cityId = Number(citySlug);
  if (!cityId) return { notFound: true };

  // Fetch city name
  const { data: cityData } = await supabase
    .from("City")
    .select("name")
    .eq("id", cityId)
    .single();

  const cityTitle = cityData?.name || `市区町村${cityId}`;

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ prefectureId: pref.id, cityId, page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ prefectureTitle: pref.title, cityTitle, totalCount, topSchools: schools }),
      description: generateRankingDescription({ prefectureTitle: pref.title, cityTitle, totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: pref.title, href: `/rankings/koukou/p-${pref.slug}/` },
        { label: cityTitle },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      cityTitle,
      cityId,
      currentPage: page,
      perPage,
    },
  };
};
