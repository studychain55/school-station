import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import { getRegionBySlug } from "@/data/regions";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function RegionRanking(props: RankingPageProps) {
  return <KoukouRankingPage {...props} canonical={`/rankings/koukou/region/${props.regionSlug}/`} />;
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ params, res, query }) => {
  const slug = params?.region as string;
  const region = getRegionBySlug(slug);
  if (!region) return { notFound: true };

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({
    regionPrefectureIds: region.prefectureIds,
    page,
    perPage,
  });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ regionTitle: region.title, totalCount, topSchools: schools }),
      description: generateRankingDescription({ regionTitle: region.title, totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: region.title },
      ],
      regionTitle: region.title,
      regionSlug: region.slug,
      currentPage: page,
      perPage,
    },
  };
};
