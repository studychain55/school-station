import type { GetServerSideProps } from "next";
import JukuListPage from "@/features/juku/pages/JukuListPage";
import { fetchJukuList } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuListPageProps } from "@/types";

export const getServerSideProps: GetServerSideProps<JukuListPageProps> = async ({ params, query, res }) => {
  const stationName = decodeURIComponent((params?.station as string) || "");
  if (!stationName) return { notFound: true };

  const page = Math.max(1, parseInt(String(query.page || "1"), 10));
  const perPage = 20;

  const { schools, totalCount } = await fetchJukuList({ stationName, page, perPage });
  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: `${stationName}駅 近くの塾一覧【2026年版】`,
      description: `${stationName}駅周辺の塾・予備校一覧。徒歩圏内の個別指導・集団授業・オンライン塾を比較して最適な塾を見つけよう。`,
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "塾を探す", href: "/juku/" },
        { label: `${stationName}駅` },
      ],
      stationName,
      currentPage: page,
      perPage,
    },
  };
};

export default JukuListPage;
