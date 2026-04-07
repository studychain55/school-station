import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function NationalRanking(props: RankingPageProps) {
  return <KoukouRankingPage {...props} canonical="/rankings/koukou/national/" />;
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ res, query }) => {
  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ classification: "NATIONAL", page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ classificationLabel: "国立", totalCount, topSchools: schools }),
      description: generateRankingDescription({ classificationLabel: "国立", totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: "国立高校" },
      ],
      classificationLabel: "国立",
      currentPage: page,
      perPage,
    },
  };
};
