import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import { getPrefectureBySlug } from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function PrefectureRanking(props: RankingPageProps) {
  return <KoukouRankingPage {...props} canonical={`/rankings/koukou/p-${props.prefectureSlug}/`} />;
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ params, res, query }) => {
  const slug = params?.prefecture as string;
  const pref = getPrefectureBySlug(slug.replace("p-", ""));
  if (!pref) return { notFound: true };

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ prefectureId: pref.id, page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ prefectureTitle: pref.title, totalCount, topSchools: schools }),
      description: generateRankingDescription({ prefectureTitle: pref.title, totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: `${pref.title}` },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      currentPage: page,
      perPage,
    },
  };
};
