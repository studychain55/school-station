import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import dynamic from "next/dynamic";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2, JUKU_PURPOSES, JUKU_CATEGORIES, POPULAR_PREFECTURES } from "@/utils/juku/config";
import prefectures from "@/data/prefectures";

const JukuSearchBox = dynamic(() => import("@/components/juku/JukuSearchBox"), { ssr: false });

const FAQ_ITEMS = [
  {
    q: "塾の選び方を教えてください",
    a: "目的（中学受験・高校受験・大学受験）、授業スタイル（個別・集団・オンライン）、通いやすさ（立地・アクセス）の3点を軸に選ぶと失敗しにくいです。",
  },
  {
    q: "個別指導と集団授業はどちらが良いですか？",
    a: "個別指導は自分のペースで進められ苦手克服に向いています。集団授業は切磋琢磨できる環境と費用面でのメリットがあります。お子さんの性格や目標に合わせて選びましょう。",
  },
  {
    q: "塾の費用相場はどのくらいですか？",
    a: "個別指導は月2〜5万円、集団授業は月1〜3万円が一般的な目安です。入塾金（0〜3万円）や教材費が別途かかる場合があります。",
  },
  {
    q: "体験授業は無料で受けられますか？",
    a: "多くの塾では無料体験授業を実施しています。実際の授業の雰囲気や講師との相性を確かめるために、複数の塾の体験授業を受けることをおすすめします。",
  },
];

export default function JukuTopPage() {
  return (
    <>
      <Head>
        <title>塾・予備校を探す | School Station</title>
        <meta
          name="description"
          content="全国の塾・予備校を検索。都道府県・目的・授業スタイルで絞り込み可能。個別指導・集団授業・オンライン塾の口コミ・料金を比較して最適な塾を見つけよう。"
        />
        <link rel="canonical" href="https://school-station.jp/juku/" />
        <meta property="og:title" content="塾・予備校を探す | School Station" />
        <meta property="og:description" content="全国の塾・予備校を地域・目的・スタイルで検索。口コミ・料金比較もできます。" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "School Station 塾検索",
              url: "https://school-station.jp/juku/",
              description: "全国の塾・予備校を検索できるサービス",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://school-station.jp/juku/p-{prefecture}/",
                "query-input": "required name=prefecture",
              },
            }),
          }}
        />
      </Head>

      {/* ヒーローセクション */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${JUKU_RED} 0%, #8E0000 100%)`,
          color: "#fff",
          py: { xs: 6, sm: 8 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            bgcolor: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ fontSize: 13, color: JUKU_RED_BG2, mb: 1, fontWeight: 600, letterSpacing: 2 }}>
            JUKU SEARCH
          </Typography>
          <Typography
            component="h1"
            sx={{ fontWeight: 800, fontSize: { xs: "1.75rem", sm: "2.5rem" }, mb: 1.5, lineHeight: 1.2 }}
          >
            全国の塾・予備校を
            <br />
            かんたん検索
          </Typography>
          <Typography sx={{ fontSize: { xs: 14, sm: 16 }, color: "rgba(255,255,255,0.85)", mb: 4, maxWidth: 480 }}>
            個別指導・集団授業・オンライン塾を都道府県・目的・スタイルで絞り込み。口コミ・料金を比較して最適な塾を見つけよう。
          </Typography>
          <JukuSearchBox />
        </Container>
      </Box>

      {/* 目的から探す */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", sm: "1.5rem" }, mb: 3, color: "#111827" }}>
            <TrendingUpIcon sx={{ mr: 1, color: JUKU_RED, verticalAlign: "middle" }} />
            目的から探す
          </Typography>
          <Grid container spacing={2}>
            {JUKU_PURPOSES.map((p) => (
              <Grid key={p.value} size={{ xs: 6, sm: 4, md: "auto" }} sx={{ flex: { md: 1 } }}>
                <Link href={`/juku/?purpose=${encodeURIComponent(p.value)}`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      bgcolor: JUKU_RED_BG,
                      border: `1px solid ${JUKU_RED_BG2}`,
                      borderRadius: 2,
                      p: { xs: 2, sm: 2.5 },
                      textAlign: "center",
                      transition: "all 0.15s",
                      "&:hover": { bgcolor: JUKU_RED_BG2, borderColor: JUKU_RED },
                    }}
                  >
                    <Typography sx={{ fontSize: 28, mb: 0.5 }}>{p.emoji}</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: 13, color: JUKU_RED }}>
                      {p.label}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 授業スタイルから探す */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#F9FAFB" }}>
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", sm: "1.5rem" }, mb: 3, color: "#111827" }}>
            <SchoolIcon sx={{ mr: 1, color: JUKU_RED, verticalAlign: "middle" }} />
            授業スタイルから探す
          </Typography>
          <Grid container spacing={2}>
            {JUKU_CATEGORIES.map((c) => (
              <Grid key={c.value} size={{ xs: 6, sm: 4, md: "auto" }} sx={{ flex: { md: 1 } }}>
                <Link href={`/juku/?category=${encodeURIComponent(c.value)}`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      border: "1px solid #E5E7EB",
                      borderRadius: 2,
                      p: { xs: 2, sm: 2.5 },
                      textAlign: "center",
                      transition: "all 0.15s",
                      "&:hover": { borderColor: JUKU_RED, bgcolor: JUKU_RED_BG },
                    }}
                  >
                    <Typography sx={{ fontSize: 28, mb: 0.5 }}>{c.emoji}</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#374151" }}>
                      {c.label}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 人気エリアから探す */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", sm: "1.5rem" }, mb: 3, color: "#111827" }}>
            <LocationOnIcon sx={{ mr: 1, color: JUKU_RED, verticalAlign: "middle" }} />
            人気エリアから探す
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 3 }}>
            {POPULAR_PREFECTURES.map((pref) => (
              <Grid key={pref.slug} size={{ xs: 6, sm: 3, md: 3 }}>
                <Link href={`/juku/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      bgcolor: JUKU_RED_BG,
                      border: `1px solid ${JUKU_RED_BG2}`,
                      borderRadius: 2,
                      py: 2,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: JUKU_RED,
                      transition: "all 0.15s",
                      "&:hover": { bgcolor: JUKU_RED, color: "#fff" },
                    }}
                  >
                    {pref.title}の塾
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* 全都道府県 */}
          <Box sx={{ bgcolor: "#F9FAFB", borderRadius: 2, p: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#6B7280", mb: 1.5 }}>
              全都道府県から探す
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {prefectures.map((pref) => (
                <Link key={pref.slug} href={`/juku/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      bgcolor: "#fff",
                      border: "1px solid #E5E7EB",
                      borderRadius: 1,
                      fontSize: 13,
                      color: "#374151",
                      fontWeight: 500,
                      transition: "all 0.12s",
                      "&:hover": { borderColor: JUKU_RED, color: JUKU_RED, bgcolor: JUKU_RED_BG },
                    }}
                  >
                    {pref.title}
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 特徴セクション */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: JUKU_RED, color: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ textAlign: "center" }}>
            {[
              { num: "9万+", label: "掲載塾数" },
              { num: "47", label: "都道府県対応" },
              { num: "無料", label: "完全無料" },
              { num: "口コミ", label: "リアルな評価" },
            ].map((item) => (
              <Grid key={item.label} size={{ xs: 6, sm: 3 }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.75rem", sm: "2.5rem" }, lineHeight: 1 }}>
                  {item.num}
                </Typography>
                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ランキングへのリンク */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: JUKU_RED_BG,
              border: `2px solid ${JUKU_RED_BG2}`,
              borderRadius: 3,
              p: { xs: 3, sm: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              alignItems: { sm: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.1rem", sm: "1.3rem" }, color: "#111827", mb: 0.5 }}>
                塾ランキングを見る
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#6B7280" }}>
                口コミ評価に基づいた全国・都道府県別のランキング
              </Typography>
            </Box>
            <Link href="/juku/ranking/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  bgcolor: JUKU_RED,
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: 15,
                  whiteSpace: "nowrap",
                  transition: "opacity 0.15s",
                  "&:hover": { opacity: 0.88 },
                }}
              >
                ランキングを見る →
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#F9FAFB" }}>
        <Container maxWidth="lg" sx={{ maxWidth: 720, mx: "auto" }}>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", sm: "1.5rem" }, mb: 3, color: "#111827", textAlign: "center" }}>
            よくある質問
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {FAQ_ITEMS.map((item, i) => (
              <Box key={i} sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
                <Box sx={{ display: "flex", gap: 1.5, p: 2, borderBottom: "1px solid #F3F4F6" }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 16, color: JUKU_RED, lineHeight: 1.3, minWidth: 20 }}>Q</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{item.q}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, p: 2 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 16, color: "#6B7280", lineHeight: 1.3, minWidth: 20 }}>A</Typography>
                  <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>{item.a}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </>
  );
}
