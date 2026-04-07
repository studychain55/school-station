import type { GetServerSideProps } from "next";
import { Container, Typography, Box, Divider } from "@mui/material";
import Head from "next/head";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription, generateFAQItems } from "@/utils/seo/generateRankingMetadata";
import { getPrefectureBySlug } from "@/data/prefectures";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import SEO from "@/components/UI/SEO";
import FAQ from "@/components/UI/FAQ";
import BreadCrumb from "@/components/UI/BreadCrumb";
import supabase from "@/utils/supabase";
import type { RankingPageProps } from "@/types";

type CityRankingPageProps = RankingPageProps & {
  cityTitle: string;
};

export default function CityRanking(props: CityRankingPageProps) {
  const { schools, totalCount, title, description, breadcrumbs, prefectureTitle, prefectureSlug, cityTitle, cityId, currentPage, perPage } = props;

  const faqItems = generateFAQItems({
    schools,
    totalCount,
    prefectureTitle: `${prefectureTitle}${cityTitle}`,
    topSchools: schools.slice(0, 7),
  });

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`/rankings/koukou/p-${prefectureSlug}/c-${cityId}/`}
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
        <KoukouRankingPage {...props} canonical={`/rankings/koukou/p-${prefectureSlug}/c-${cityId}/`} />

        <Divider sx={{ my: 4 }} />

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        {/* Enhanced SEO Text Section */}
        <Box sx={{ mb: 4, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
            {prefectureTitle}{cityTitle}の高校偏差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            {prefectureTitle}{cityTitle}の高校を偏差値順にランキング。School Station では{totalCount}校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            {prefectureTitle}{cityTitle}は{prefectureTitle}の地域の中でも教育水準が高く、進学校が多く所在しています。偏差値が高いほど入試難易度が高い傾向にあります。{prefectureTitle}{cityTitle}の中でも偏差値トップの高校は入試競争が激しくなるため、志願倍率や入試結果も合わせてご確認ください。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            学校選びの際には、偏差値だけでなく、教育方針、部活動、施設、アクセス、学科別の偏差値など、多角的な観点から情報を検討することをお勧めします。{prefectureTitle}{cityTitle}内での学校選択は、自分の学力と志望に合わせた最適な選択が重要です。
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CityRankingPageProps> = async ({ params, res, query }) => {
  const prefSlug = (params?.prefecture as string).replace("p-", "");
  const citySlug = params?.city as string;
  const pref = getPrefectureBySlug(prefSlug);
  if (!pref) return { notFound: true };

  // Get city by ID from slug
  const cityId = Number(citySlug);
  if (!cityId) return { notFound: true };

  // Fetch city name
  const { data: cityData } = await supabase
    .from("City")
    .select("name")
    .eq("id", cityId)
    .single();

  const cityTitle = cityData?.name || `市区町村${cityId}`;

  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ prefectureId: pref.id, cityId, page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ prefectureTitle: pref.title, cityTitle, totalCount, topSchools: schools }),
      description: generateRankingDescription({ prefectureTitle: pref.title, cityTitle, totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: pref.title, href: `/rankings/koukou/p-${pref.slug}/` },
        { label: cityTitle },
      ],
      prefectureTitle: pref.title,
      prefectureSlug: pref.slug,
      cityTitle,
      cityId,
      currentPage: page,
      perPage,
    },
  };
};
