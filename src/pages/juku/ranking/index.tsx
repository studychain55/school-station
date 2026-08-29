import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import JukuCard from "@/components/juku/JukuCard";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2 } from "@/utils/juku/config";
import { fetchJukuRanking } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import prefectures from "@/data/prefectures";
import type { JukuSchoolListItem } from "@/types";

type Props = {
  schools: JukuSchoolListItem[];
  totalCount: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  const { schools, totalCount } = await fetchJukuRanking({ perPage: 30 });
  setConditionalCacheHeaders(res, totalCount);
  return { props: { schools, totalCount } };
};

export default function JukuRankingPage({ schools, totalCount }: Props) {
  return (
    <>
      <Head>
        <title>塾ランキング 全国版【2026年】| School Station</title>
        <meta
          name="description"
          content="全国の塾・予備校を口コミ評価でランキング。個別指導・集団授業・オンライン塾を比較して最適な塾を見つけよう。都道府県別ランキングも充実。"
        />
        <link rel="canonical" href="https://school-station.jp/juku/ranking/" />
        <meta property="og:title" content="塾ランキング 全国版【2026年】| School Station" />
        <meta property="og:type" content="website" />
      </Head>

      {/* ヘッダー */}
      <Box sx={{ bgcolor: JUKU_RED, color: "#fff", py: { xs: 4, sm: 5 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 0.75, mb: 1.5, fontSize: 13, flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontSize: 13 }}>ホーム</Link>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>›</span>
            <Link href="/juku/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontSize: 13 }}>塾を探す</Link>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>›</span>
            <span style={{ color: "#fff", fontSize: 13 }}>ランキング</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <EmojiEventsIcon sx={{ fontSize: 32, color: "#FFD700" }} />
            <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              塾ランキング 全国版
            </Typography>
          </Box>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
            口コミ評価に基づいた全国の塾・予備校ランキング（<Box component="span" sx={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>{totalCount.toLocaleString()}件</Box>掲載）
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          {/* メインランキング */}
          <Grid size={{ xs: 12, md: 8 }}>
            {schools.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 10, bgcolor: "#fff", borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Typography sx={{ fontSize: 48, mb: 2 }}>📚</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#374151", mb: 1 }}>
                  現在掲載準備中です
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#6B7280" }}>
                  順次データを追加していきます。
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {schools.map((school, i) => (
                  <JukuCard key={school.id} school={school} rank={i + 1} />
                ))}
              </Box>
            )}
          </Grid>

          {/* サイドバー：都道府県別 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2, position: "sticky", top: 80 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#111827", mb: 2, pb: 1.5, borderBottom: `2px solid ${JUKU_RED}` }}>
                都道府県別ランキング
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, maxHeight: 400, overflowY: "auto" }}>
                {prefectures.map((pref) => (
                  <Link key={pref.slug} href={`/juku/ranking/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        fontSize: 13,
                        color: "#374151",
                        fontWeight: 500,
                        transition: "all 0.12s",
                        "&:hover": { bgcolor: JUKU_RED_BG, color: JUKU_RED },
                      }}
                    >
                      {pref.title}の塾ランキング
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
