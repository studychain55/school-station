import type { GetServerSideProps } from "next";
import JukuListPage from "@/features/juku/pages/JukuListPage";
import { fetchJukuList } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import prefectures from "@/data/prefectures";
import type { JukuListPageProps } from "@/types";

export const getServerSideProps: GetServerSideProps<JukuListPageProps> = async ({ params, query, res }) => {
  const slug = (params?.prefecture as string)?.replace(/^p-/, "");
  const pref = prefectures.find((p) => p.slug === slug);
  if (!pref) return { notFound: true };

  const page = Math.max(1, parseInt(String(query.page || "1"), 10));
  const perPage = 20;
  const purpose = query.purpose as string | undefined;
  const category = query.category as string | undefined;

  const { schools, totalCount } = await fetchJukuList({
    prefectureId: pref.id,
    purpose,
    category,
    page,
    perPage,
  });
  setConditionalCacheHeaders(res, totalCount);

  const purposeLabel = purpose ? `・${purpose}` : "";
  const categoryLabel = category ? `（${category}）` : "";

  return {
    props: {
      schools,
      totalCount,
      title: `${pref.title}の塾一覧${purposeLabel}${categoryLabel}【2026年版】`,
      description: `${pref.title}の塾・予備校一覧。個別指導・集団授業・オンライン塾を比較。口コミ・料金・アクセスをチェックして最適な塾を見つけよう。`,
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "塾を探す", href: "/juku/" },
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
