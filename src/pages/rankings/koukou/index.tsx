import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

type Props = RankingPageProps;

export default function KoukouRankingIndex(props: Props) {
  return <KoukouRankingPage {...props} canonical="/rankings/koukou/" />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res, query }) => {
  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ totalCount, topSchools: schools }),
      description: generateRankingDescription({ totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング" },
      ],
      currentPage: page,
      perPage,
    },
  };
};
