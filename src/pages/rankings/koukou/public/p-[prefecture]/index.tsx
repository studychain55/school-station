import type { GetServerSideProps } from "next";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import { getPrefectureBySlug } from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function PublicPrefectureRanking(props: RankingPageProps) {
  return <KoukouRankingPage {...props} canonical={`/rankings/koukou/public/p-${props.prefectureSlug}/`} />;
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ params, res, query }) => {
  const slug = (params?.prefecture as string).replace("p-", "");
  const pref = getPrefectureBySlug(slug);
  if (!pref) return { notFound: true };

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ prefectureId: pref.id, classification: "PUBLIC", page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ prefectureTitle: pref.title, classificationLabel: "公立", totalCount, topSchools: schools }),
      description: generateRankingDescription({ prefectureTitle: pref.title, classificationLabel: "公立", totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: "公立高校", href: "/rankings/koukou/public/" },
        { label: pref.title },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      classificationLabel: "公立",
      currentPage: page,
      perPage,
    },
  };
};
