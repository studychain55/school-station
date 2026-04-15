import type { GetServerSideProps } from "next";
import JukuListPage from "@/features/juku/pages/JukuListPage";
import { fetchJukuRanking } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import prefectures from "@/data/prefectures";
import type { JukuListPageProps } from "@/types";

export const getServerSideProps: GetServerSideProps<JukuListPageProps> = async ({ params, query, res }) => {
  const slug = params?.prefecture as string;
  const pref = prefectures.find((p) => p.slug === slug);
  if (!pref) return { notFound: true };

  const page = Math.max(1, parseInt(String(query.page || "1"), 10));
  const perPage = 20;

  const { schools, totalCount } = await fetchJukuRanking({ prefectureId: pref.id, page, perPage });
  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: `${pref.title}の塾ランキング【2026年版】`,
      description: `${pref.title}の塾・予備校を口コミ評価でランキング。個別指導・集団授業・オンライン塾を比較して最適な塾を見つけよう。`,
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "塾を探す", href: "/juku/" },
        { label: "ランキング", href: "/juku/ranking/" },
        { label: pref.title },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      currentPage: page,
      perPage,
    },
  };
};

export default JukuListPage;
