import type { GetServerSideProps } from "next";
import { Container, Typography, Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription, generateFAQItems } from "@/utils/seo/generateRankingMetadata";
import { getRegionBySlug } from "@/data/regions";
import { getPrefectureById } from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import SEO from "@/components/UI/SEO";
import FAQ from "@/components/UI/FAQ";
import BreadCrumb from "@/components/UI/BreadCrumb";
import type { RankingPageProps } from "@/types";

type RegionRankingPageProps = RankingPageProps & {
  prefecturesInRegion: Array<{ id: number; title: string; slug: string }>;
};

export default function RegionRanking(props: RegionRankingPageProps) {
  const { schools, totalCount, title, description, breadcrumbs, regionTitle, regionSlug, currentPage, perPage, prefecturesInRegion } = props;

  const faqItems = generateFAQItems({
    schools,
    totalCount,
    topSchools: schools.slice(0, 7),
    regionTitle,
  });

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`/rankings/koukou/region/${regionSlug}/`}
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
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          })
        }} />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <BreadCrumb items={breadcrumbs} />

        {/* KoukouRankingPage is rendered with enhanced props */}
        <KoukouRankingPage {...props} canonical={`/rankings/koukou/region/${regionSlug}/`} />

        <Divider sx={{ my: 4 }} />

        {/* Prefecture Links Section */}
        {prefecturesInRegion.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.25rem", fontWeight: 600 }}>
              {regionTitle}内の都道府県別ランキング
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: 1 }}>
              {prefecturesInRegion.map((pref) => (
                <Link key={pref.id} href={`/rankings/koukou/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                  <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 13, py: 0.8 }}>
                    {pref.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        )}

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        {/* Enhanced SEO Text Section */}
        <Box sx={{ mb: 4, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
            {regionTitle}の高校偏差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            {regionTitle}地方の高校を偏差値順にランキング。School Station では{totalCount}校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            偏差値は学校の学力レベルを示す指標で、50を平均として上下に分布します。偏差値が高いほど入試難易度が高い傾向にあります。{regionTitle}内の都道府県ごとに偏差値の分布が異なるため、お住まいの県のランキングもご確認ください。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            学校選びの際には、偏差値だけでなく、教育方針、部活動、施設、アクセス、学科別の偏差値など、多角的な観点から情報を検討することをお勧めします。自分の学力と志望に合わせた最適な選択が重要です。
          </Typography>
        </Box>

        {/* Column Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 700 }}>
            高校受験・偏差値に関するコラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {[
              { href: "/column/koukou-math/", title: "高校数学の勉強法｜数学が苦手な人のための効率的な学習方法" },
              { href: "/column/koukou-school-select/", title: "高校の校則と学校選びのポイント｜制服・スマホ・アルバイトのルールを比較" },
              { href: "/column/koukou-tokutasei/", title: "高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法" },
              { href: "/column/koukou-english/", title: "高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策" },
              { href: "/column/hensachi-guide/", title: "偏差値の見方・使い方を徹底解説" },
              { href: "/column/koko-choice/", title: "志望校の選び方｜受験校を決める5つの基準" },
              { href: "/column/nyushi-schedule/", title: "高校受験スケジュール完全ガイド" },
              { href: "/column/kouritsu-vs-shiritsu/", title: "公立vs私立｜高校選びの徹底比較" },
              { href: "/column/naishin-up/", title: "内申点の上げ方｜今すぐできる具体的な方法" },
              { href: "/column/study-methods/", title: "高校受験に向けた効果的な勉強法" },
              { href: "/column/mensetsu-guide/", title: "高校受験の面接対策完全ガイド" },
              { href: "/column/chugaku-entrance/", title: "中学受験の基礎知識｜いつから準備する？" },
              { href: "/column/tokkoku-guide/", title: "推薦入試・特色選抜完全ガイド" },
              { href: "/column/bukatsu-choise/", title: "高校の部活選び｜入学前に知ること" },
              { href: "/column/taiken-nyugaku/", title: "学校見学・体験入学の活用ガイド｜志望校選びに役立てよう" },
              { href: "/column/kokosei-baito/", title: "高校生のバイトと勉強の両立｜受験に影響しない働き方" },
              { href: "/column/juken-stress/", title: "受験のストレスと上手に付き合う方法" },
              { href: "/column/koko-sports/", title: "スポーツ推薦で高校に入る方法とポイント" },
              { href: "/column/tsushinsei-koukou/", title: "通信制・定時制高校の違い｜選び方ガイド" },
              { href: "/column/koukou-setsumeikai/", title: "学校説明会・オープンキャンパス活用法" },
              { href: "/column/suisen-nyushi/", title: "高校の推薦入試対策完全ガイド" },
              { href: "/column/koukou-bukatsu/", title: "高校の部活動選び｜勉強との両立" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Box sx={{ p: 1.5, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, fontSize: 13, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1", borderLeftColor: "#E65100" }, transition: "all 0.15s" }}>
                  {article.title}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RegionRankingPageProps> = async ({ params, res, query }) => {
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

  // Get prefectures in this region
  const prefecturesInRegion = region.prefectureIds
    .map((id) => getPrefectureById(id))
    .filter((p) => p !== undefined)
    .map((p) => ({ id: p!.id, title: p!.title, slug: p!.slug }));

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
      prefecturesInRegion,
    },
  };
};
