import type { GetServerSideProps } from "next";
import { Container, Typography, Box, Divider } from "@mui/material";
import Link from "next/link";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function PrivateRanking(props: RankingPageProps) {
  return (
    <>
      <KoukouRankingPage {...props} canonical="/rankings/koukou/private/" />

      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <Divider sx={{ my: 4 }} />

        {/* Column Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 700 }}>
            高校受験・偏差値に関するコラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {[
              { href: "/column/hensachi-guide/", title: "偏差値の見方・使い方を徹底解説" },
              { href: "/column/koko-choice/", title: "志望校の選び方｜受験校を決める5つの基準" },
              { href: "/column/nyushi-schedule/", title: "高校受験スケジュール完全ガイド" },
              { href: "/column/kouritsu-vs-shiritsu/", title: "公立vs私立｜高校選びの徹底比較" },
              { href: "/column/naishin-up/", title: "内申点の上げ方｜今すぐできる具体的な方法" },
              { href: "/column/study-methods/", title: "高校受験に向けた効果的な勉強法" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Box sx={{ p: 1.5, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, fontSize: 13, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1", borderLeftColor: "#E65100" }, transition: "all 0.15s" }}>
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

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ res, query }) => {
  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ classification: "PRIVATE", page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ classificationLabel: "私立", totalCount, topSchools: schools }),
      description: generateRankingDescription({ classificationLabel: "私立", totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: "私立高校" },
      ],
      classificationLabel: "私立",
      currentPage: page,
      perPage,
    },
  };
};
