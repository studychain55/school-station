import { Container, Typography, Box, Button, Paper } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import SEO from "@/components/UI/SEO";
import prefectures, { recommendPrefectures } from "@/data/prefectures";
import { REGIONS } from "@/data/regions";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "School Station",
    "url": "https://school-station.com",
    "logo": "https://school-station.com/logo.png",
    "description": "高校偏差値ランキングの総合情報サイト",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://school-station.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://school-station.com/rankings/koukou/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEO
        title="School Station | 高校偏差値ランキング【2026年度版】"
        description="全国の高校偏差値ランキングを都道府県別・地方別・分類別に掲載。School Stationで志望校選びに役立つ偏差値情報をチェック。"
        canonical="/"
        breadcrumbs={[{ label: "ホーム" }]}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </Head>
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        {/* Hero */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 5, sm: 6 },
            mb: 4,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }, mb: 1.5 }}>
            高校偏差値ランキング
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", mb: 3, px: 2 }}>
            全国の高校偏差値を網羅的に掲載。志望校選びの参考に。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FF6F00",
                "&:hover": { bgcolor: "#E65100", transform: "translateY(-1px)" },
                px: 4,
                py: 1.2,
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 700,
                boxShadow: "0 4px 12px rgba(255,111,0,0.3)",
              }}
            >
              全国ランキングを見る
            </Button>
          </Link>
        </Box>

        {/* Quick Prefecture Links */}
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          人気エリアのランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }, gap: 2, mb: 5 }}>
          {recommendPrefectures.map((pref) => (
            <Link key={pref.slug} href={`/rankings/koukou/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  textAlign: "center",
                  border: "1px solid #E0E0E0",
                  "&:hover": { borderColor: "#1565C0", bgcolor: "#F5F9FF", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", fontSize: { xs: 14, sm: 15 } }}>
                  {pref.title}
                </Typography>
                <Typography variant="caption" sx={{ color: "#757575" }}>
                  偏差値ランキング
                </Typography>
              </Paper>
            </Link>
          ))}
        </Box>

        {/* Classification */}
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          分類別ランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2, mb: 5 }}>
          {[
            { label: "公立高校", desc: "都道府県立・市立高校", href: "/rankings/koukou/public/", color: "#2E7D32", bg: "#E8F5E9" },
            { label: "私立高校", desc: "学校法人運営の高校", href: "/rankings/koukou/private/", color: "#C62828", bg: "#FFEBEE" },
            { label: "国立高校", desc: "国立大学附属の高校", href: "/rankings/koukou/national/", color: "#F57F17", bg: "#FFF8E1" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  textAlign: "center",
                  border: "1px solid #E0E0E0",
                  borderLeft: `4px solid ${item.color}`,
                  "&:hover": { borderColor: item.color, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
                  transition: "all 0.2s",
                }}
              >
                <Typography sx={{ fontWeight: 700, color: item.color, fontSize: { xs: 15, sm: 16 } }}>
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ color: "#757575" }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Link>
          ))}
        </Box>

        {/* Regions */}
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          地方別ランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: 1.5, mb: 5 }}>
          {REGIONS.map((region) => (
            <Link key={region.slug} href={`/rankings/koukou/region/${region.slug}/`} style={{ textDecoration: "none" }}>
              <Button variant="outlined" fullWidth sx={{ fontSize: 13, py: 1 }}>
                {region.title}
              </Button>
            </Link>
          ))}
        </Box>

        {/* All Prefectures */}
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          都道府県別ランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }, gap: 1 }}>
          {prefectures.map((pref) => (
            <Link key={pref.slug} href={`/rankings/koukou/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
              <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 12, minHeight: 36 }}>
                {pref.title}
              </Button>
            </Link>
          ))}
        </Box>

        {/* SEO Info Section */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E0E0E0" }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
            高校偏差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            School Stationは、全国の高校の偏差値情報を網羅的に掲載する総合情報サイトです。2026年度版の最新偏差値データに基づいて、都道府県別・地方別・学校分類別（公立・私立・国立）にランキングを提供しています。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            志望校選びの参考資料として、客観的な偏差値データを活用し、進学先の決定をサポートします。当サイトの情報は教育機関や学習塾での教育支援ツールとしても活用されています。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            各ページでは、特定地域や学校分類の詳細なランキング、偏差値分布、学校情報などを検索・閲覧できます。進学希望者はもちろん、保護者や教育関係者の方にも活用いただけるコンテンツを目指しています。
          </Typography>
        </Box>
      </Container>
    </>
  );
}
