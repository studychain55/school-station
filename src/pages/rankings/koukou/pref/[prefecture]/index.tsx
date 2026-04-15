import type { GetServerSideProps } from "next";
import { Container, Typography, Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription, generateFAQItems } from "@/utils/seo/generateRankingMetadata";
import { getPrefectureBySlug, getPrefectureById } from "@/data/prefectures";
import prefectures from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import SEO from "@/components/UI/SEO";
import FAQ from "@/components/UI/FAQ";
import BreadCrumb from "@/components/UI/BreadCrumb";
import type { RankingPageProps } from "@/types";
import Head from "next/head";

const ADJACENT_PREFECTURES: Record<number, number[]> = {
  1: [2], 2: [1, 3, 7], 3: [2, 4, 8], 4: [3, 5, 7, 8], 5: [2, 4, 6, 7],
  6: [5, 7, 15], 7: [2, 4, 5, 6, 8, 9, 20], 8: [3, 4, 7, 9, 11, 12],
  9: [8, 10, 11, 20, 22], 10: [9, 11, 20, 22], 11: [8, 9, 10, 12, 14, 19, 20],
  12: [8, 11, 13, 14], 13: [11, 12, 14, 19, 22], 14: [11, 12, 13, 19, 22, 23],
  15: [6, 16, 20], 16: [15, 17, 21], 17: [16, 18, 21, 27], 18: [17, 21, 25],
  19: [13, 14, 20, 22, 23], 20: [7, 9, 10, 11, 13, 14, 19, 22, 25],
  21: [16, 17, 18, 22, 23, 25, 26], 22: [13, 14, 19, 20, 21, 23, 24],
  23: [14, 19, 20, 21, 22, 24, 25, 26, 28], 24: [22, 23, 25, 29, 30],
  25: [18, 20, 21, 23, 26, 27, 28, 29], 26: [21, 25, 27, 28, 29],
  27: [17, 25, 26, 28, 30], 28: [25, 26, 27, 29, 30, 31, 34],
  29: [25, 26, 27, 28, 30], 30: [24, 27, 28, 29, 34, 36],
  31: [32, 33, 34, 35], 32: [31, 33, 34, 35], 33: [31, 32, 34, 35, 37],
  34: [28, 30, 31, 32, 33, 35, 37, 39], 35: [31, 32, 33, 34, 36, 38, 39],
  36: [30, 35, 37, 38, 39], 37: [33, 34, 35, 36, 38], 38: [35, 36, 37, 39, 40, 41, 43],
  39: [34, 35, 36, 37, 38], 40: [38, 41, 42, 43, 44, 45, 46],
  41: [40, 42, 43, 45], 42: [40, 41, 43], 43: [40, 41, 42, 44, 45, 46],
  44: [43, 45, 46], 45: [40, 43, 44, 46], 46: [40, 43, 44, 45, 47], 47: [46],
};

type PrefectureRankingPageProps = RankingPageProps & {
  adjacentPrefectures: Array<{ id: number; title: string; slug: string }>;
};

export default function PrefectureRanking(props: PrefectureRankingPageProps) {
  const { schools, totalCount, title, description, breadcrumbs, prefectureTitle, prefectureSlug, currentPage, perPage, adjacentPrefectures } = props;

  const faqItems = generateFAQItems({
    schools,
    totalCount,
    prefectureTitle,
    topSchools: schools.slice(0, 7),
  });

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`/rankings/koukou/p-${prefectureSlug}/`}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        schools={schools.slice(0, 10).map((s, i) => ({ name: s.name, position: i + 1 }))}
        isRankingPage={true}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer },
            })),
          })
        }} />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <BreadCrumb items={breadcrumbs} />
        <KoukouRankingPage {...props} canonical={`/rankings/koukou/p-${prefectureSlug}/`} />
        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 700 }}>
            高校受験・偏差値に関するコラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {[
              { href: "/column/koukou-seiseki/", title: "内申点の仕組みと上げ方" },
              { href: "/column/koukou-soudan/", title: "高校選びで失敗しない相談先ガイド" },
              { href: "/column/koukou-math/", title: "高校数学の勉強法" },
              { href: "/column/koukou-school-select/", title: "高校の校則と学校選びのポイント" },
              { href: "/column/koukou-english/", title: "高校の英語教育の変化" },
              { href: "/column/koukou-career/", title: "高校卒業後の進路選択" },
              { href: "/column/koukou-hensachi/", title: "偏差値の見方と志望校選びへの活用法" },
              { href: "/column/daigaku-juken/", title: "高校から大学受験を見据えた学習計画" },
              { href: "/column/kokosei-nyushi/", title: "高校入試の種類と対策" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Box sx={{ p: 1.5, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, fontSize: 13, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1" }, transition: "all 0.15s" }}>
                  {article.title}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {adjacentPrefectures.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.25rem", fontWeight: 600 }}>
              隣接都道府県のランキング
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: 1 }}>
              {adjacentPrefectures.map((adj) => (
                <Link key={adj.id} href={`/rankings/koukou/p-${adj.slug}/`} style={{ textDecoration: "none" }}>
                  <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 13, py: 0.8 }}>
                    {adj.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        <Box sx={{ mb: 4, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
            {prefectureTitle}の高校偏差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            {prefectureTitle}の高校を偏差値順にランキング。School Station では{totalCount}校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            偏差値は学校の学力レベルを示す指標で、50を平均として上下に分布します。偏差値が高いほど入試難易度が高い傾向にあります。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            学校選びの際には、偏差値だけでなく、教育方針、部活動、施設、アクセス、学科別の偏差値など、多角的な観点から情報を検討することをお勧めします。
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PrefectureRankingPageProps> = async ({ params, res, query }) => {
  const slug = params?.prefecture as string;
  const pref = getPrefectureBySlug(slug);
  if (!pref) return { notFound: true };

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ prefectureId: pref.id, page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  const adjacentPrefIds = ADJACENT_PREFECTURES[pref.id] || [];
  const adjacentPrefectures = adjacentPrefIds
    .map((id) => getPrefectureById(id))
    .filter((p): p is typeof prefectures[0] => !!p)
    .map((p) => ({ id: p.id, title: p.title, slug: p.slug }));

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ prefectureTitle: pref.title, totalCount, topSchools: schools }),
      description: generateRankingDescription({ prefectureTitle: pref.title, totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: pref.title },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      currentPage: page,
      perPage,
      adjacentPrefectures,
    },
  };
};
