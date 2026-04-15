import type { GetServerSideProps } from "next";
import JukuListPage from "@/features/juku/pages/JukuListPage";
import { fetchJukuList } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuListPageProps } from "@/types";
import supabase from "@/utils/supabase";

type CityRow = { id: number; name: string; prefecture_id: number };

async function fetchCity(citySlug: string): Promise<CityRow | null> {
  const { data, error } = await supabase
    .from("City")
    .select("id, name, prefecture_id")
    .eq("slug", citySlug)
    .single();
  if (error || !data) return null;
  return data as CityRow;
}

export const getServerSideProps: GetServerSideProps<JukuListPageProps> = async ({ params, query, res }) => {
  const citySlug = (params?.city as string)?.replace(/^c-/, "");
  const city = await fetchCity(citySlug);
  if (!city) return { notFound: true };

  const page = Math.max(1, parseInt(String(query.page || "1"), 10));
  const perPage = 20;

  const { schools, totalCount } = await fetchJukuList({ cityId: city.id, page, perPage });
  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: `${city.name}の塾一覧【2026年版】`,
      description: `${city.name}の塾・予備校一覧。個別指導・集団授業・オンライン塾を比較して最適な塾を見つけよう。`,
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "塾を探す", href: "/juku/" },
        { label: city.name },
      ],
      cityTitle: city.name,
      currentPage: page,
      perPage,
    },
  };
};

export default JukuListPage;
