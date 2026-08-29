import { Container, Typography, Box, Button, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
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
    "description": "高校偶差値ランキングの総合情報サイト",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "偶差値ランキングはどのように作成されていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "School Stationの偶差値ランキングは、各高校の入試難易度・合格ボーダーラインを基に作成しています　2026年度版では全国の公立・私立・国立高校を網羅し、最新の入試データを反映しています。"
        }
      },
      {
        "@type": "Question",
        "name": "偶差値はどのように活用すればよいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "偶差値は志望校選びの参考指標の一つです。自分の模試偶差値と学校の偶差値を比較し、安全校・チャレンジ校のバランスを取りながら受験校を決定するのが一般的です。偶差値だけでなく、学校の教育方钉・進学実績・通学距離なども合わせて検討しましょう。"
        }
      },
      {
        "@type": "Question",
        "name": "公立と私立の偶差値は比較できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "公立と私立の偶差値は同じ基準で比較可能です。ただし、公立高校は都道府県ごとに入試制度が異なるため、受験を検討している地域の入試制度も確認することをおすすめします。"
        }
      },
      {
        "@type": "Question",
        "name": "中学受験と高校受験、どちらを選ぶべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "どちらが適切かはお子様の状況や志望進路によって異なります。中高一貫校への進学を希望する場合は中学受験、地元の公立高校や特定の私立高校を目指す場合は高校受験が一般的です。早めに進路の方向性を決め、学習計画を立てることが重要です。"
        }
      },
      {
        "@type": "Question",
        "name": "偶差値が高い学校に合格するにはどうすればよいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "目標校の偶差値より高い模試偶差値を安定して取れるよう、計画的な学習が必要です。中学3年生の春から対策を始めるのが理想的で、苦手科目の克服と得意科目の強化を並行して進めましょう。定期テストで高い内申点を維持することも重要です。"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="School Station | 高校偶差値ランキング　2026年度版】"
        description="全国の高校偶差値ランキングを都道府県別・地方別・分類別に掲載。School Stationで志望校選びに役立つ偶差値情報をチェック。"
        canonical="/"
        breadcrumbs={[{ label: "ホーム" }]}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      {/* Hero */}
      <Box sx={{ position: "relative", width: "100%", height: "clamp(280px, 40vw, 440px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80"
          alt="高校"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, fontWeight: "bold", mb: 1, lineHeight: 1.2 }}>
            高校選びのすべてが、ここに
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "0.875rem", md: "1rem" }, opacity: 0.85, mb: 2.5 }}>
            全国5,000校以上の偶差値・進学実績・特色を無料で比較
          </Typography>
          {/* Primary CTA button */}
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                bgcolor: "#FF6F00",
                color: "white",
                fontWeight: 700,
                fontSize: { xs: 14, sm: 16 },
                px: 4,
                py: 1.5,
                borderRadius: 3,
                mb: 2.5,
                boxShadow: "0 4px 14px rgba(255,111,0,0.45)",
                "&:hover": { bgcolor: "#E65100" },
                transition: "background-color 0.2s",
                cursor: "pointer",
              }}
            >
              全国偶差値ランキングを無料で見る →
            </Box>
          </Link>
          {/* 都道府県クイックナビ */}
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {[
              { label: "東京", slug: "tokyo" },
              { label: "神奈川", slug: "kanagawa" },
              { label: "大阪", slug: "osaka" },
              { label: "愛知", slug: "aichi" },
              { label: "福岡", slug: "fukuoka" },
              { label: "全国ランキング", slug: null },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.slug ? `/rankings/koukou/p-${item.slug}/` : "/rankings/koukou/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    px: 1.5,
                    py: 0.6,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.35)" },
                    transition: "background-color 0.2s",
                  }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        {/* Value Props */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: 2, mb: 4 }}>
          {[
            { num: "5,000校以上", label: "掲載高校数" },
            { num: "47都道府県", label: "対応エリア" },
            { num: "2026年版", label: "最新データ" },
            { num: "無料", label: "利用料金" },
          ].map((stat) => (
            <Box key={stat.label} sx={{ textAlign: "center", p: 2, bgcolor: "#F5F9FF", borderRadius: 2, border: "1px solid #E8F0FE" }}>
              <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 700, color: "#1e782d", lineHeight: 1.2 }}>
                {stat.num}
              </Typography>
              <Typography sx={{ fontSize: 12, color: "#757575", mt: 0.5 }}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Hero Button Section */}
        <Box sx={{ textAlign: "center", py: 2, mb: 3 }}>
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
                  "&:hover": { borderColor: "#1e782d", bgcolor: "#F5F9FF", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", fontSize: { xs: 14, sm: 15 } }}>
                  {pref.title}
                </Typography>
                <Typography variant="caption" sx={{ color: "#757575" }}>
                  偶差値ランキング
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

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: "1.3rem", color: "#1e782d", fontWeight: 700 }}>
            よくある質問
          </Typography>
          {[
            {
              question: "偶差値ランキングはどのように作成されていますか？",
              answer: "School Stationの偶差値ランキングは、各高校の入試難易度・合格ボーダーラインを基に作成しています　2026年度版では全国の公立・私立・国立高校を網羅し、最新の入試データを反映しています。"
            },
            {
              question: "偶差値はどのように活用すればよいですか？",
              answer: "偶差値は志望校選びの参考指標の一つです。自分の模試偶差値と学校の偶差値を比較し、安全校・チャレンジ校のバランスを取りながら受験校を決定するのが一般的です。偶差値だけでなく、学校の教育方针・進学実績・通学距離なども合わせて検討しましょう。"
            },
            {
              question: "公立と私立の偶差値は比較できますか？",
              answer: "公立と私立の偶差値は同じ基準で比較可能です。ただし、公立高校は都道府県ごとに入試制度が異なるため、受験を検討している地域の入試制度も確認することをおすすめします。"
            },
            {
              question: "中学受験と高校受験、どちらを選ぶべきですか？",
              answer: "どちらが適切かはお子様の状況や志望進路によって異なります。中高一貫校への進学を希望する場合は中学受験、地元の公立高校や特定の私立高校を目指す場合は高校受験が一般的です。早めに進路の方向性を決め、学習計画を立てることが重要です。"
            },
            {
              question: "偶差値が高い学校に合格するにはどうすればよいですか？",
              answer: "目標校の偶差値より高い模試偶差値を安定して取れるよう、計画的な学習が必要です。中学3年生の春から対策を始めるのが理想的で、苦手科目の克服と得意科目の強化を並行して進めましょう。定期テストで高い内申点を維持することも重要です。"
            },
          ].map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1, border: "1px solid #E0E0E0", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F5F9FF", "&:hover": { bgcolor: "#EEF5FF" } }}>
                <Typography sx={{ fontWeight: 600, color: "#1e782d" }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#fff", color: "#424242", lineHeight: 1.8 }}>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* SEO Info Section */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E0E0E0" }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
            高校偶差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            School Stationは、全国の高校の偶差値情報を網羅的に掲載する総合情報サイトです　2026年度版の最新偶差値データに基づいて、都道府県別・地方別・学校分類別（公立・私立・国立）にランキングを提供しています。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            志望校選びの参考資料として、客観的な偶差値データを活用し、進学先の決定をサポートします。当サイトの情報は教育機関や学習塩での教育支援ツールとしても活用されています。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            各ページでは、特定地域や学校分類の詳細なランキング、偶差値分布、学校情報などを検索・閲覧できます。進学希望者はもちろん、保護者や教育関係者の方にも活用いただけるコンテンツを目指しています。
          </Typography>
        </Box>
      </Container>
    </>
  );
}
