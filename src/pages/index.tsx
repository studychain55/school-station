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
import { buildKoukouPrefectureRankingHref } from "@/utils/routes/koukou";
import GrowthNavigationHub from "@/components/GrowthNavigationHub";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "オンライン塾比較ステーション",
    "url": "https://school-station.com",
    "logo": "https://school-station.com/logo.png",
    "description": "オンライン塾を料金・特徴・口コミで比較できる総合情報サイト",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://school-station.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://school-station.com/juku/?q={search_term_string}",
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
        "name": "オンライン塾と通塾の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "オンライン塾は自宅からインターネット経由で授業を受けるため、通塾時間が不要でどこでも受講できます。費用も通塾型より安い傾向にあり、映像授業・個別指導・集団授業など多様なスタイルから選べます。",
        },
      },
      {
        "@type": "Question",
        "name": "オンライン塾の料金相場はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "月謝制のオンライン塾は月5,000円〜30,000円程度が一般的です。コマ単位（1コマ=60〜90分）では1,000円〜5,000円程度。映像授業型は比較的安く、個別指導型は高めの傾向があります。",
        },
      },
      {
        "@type": "Question",
        "name": "中学受験向けのオンライン塾はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、中学受験専門のオンライン塾も多数あります。算数・国語・理科・社会の4科目対応や、難関校受験に特化したカリキュラムを提供している塾があります。",
        },
      },
      {
        "@type": "Question",
        "name": "高校受験・大学受験向けのオンライン塾を選ぶポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "志望校のレベル・受験科目・授業スタイル（映像・個別・集団）・料金・講師の質・サポート体制（質問対応・進捗管理）の6点を比較検討することをおすすめします。",
        },
      },
      {
        "@type": "Question",
        "name": "偏差値ランキングはどのように作成されていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "当サイトの偏差値ランキングは、各高校の入試難易度・合格ボーダーラインを基に作成しています。2026年度版では全国の公立・私立・国立高校を網羅し、最新の入試データを反映しています。",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="オンライン塾比較ステーション | 料金・特徴・口コミで比較【2026年版】"
        description="オンライン塾を料金・特徴・口コミで徹底比較。中学受験・高校受験・大学受験対応の塾を一覧で検索。全国高校偏差値ランキングも掲載。"
        canonical="/"
        breadcrumbs={[{ label: "ホーム" }]}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      {/* ━━━━ Hero ━━━━ */}
      <Box sx={{ position: "relative", width: "100%", height: "clamp(360px, 48vw, 520px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80"
          alt="オンライン学習"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,24,44,0.82) 0%, rgba(14,116,144,0.58) 52%, rgba(255,255,255,0.08) 100%)" }} />
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
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.85rem" },
              fontWeight: 700,
              letterSpacing: 0,
              bgcolor: "#f59e0b",
              px: 2,
              py: 0.5,
              borderRadius: 1,
              mb: 2,
              display: "inline-block",
            }}
          >
            料金・特徴・口コミで比較
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
              fontWeight: 800,
              mb: 1.5,
              lineHeight: 1.25,
              textShadow: "0 1px 2px rgba(0,0,0,0.22)",
            }}
          >
            オンラインだから、<br />自分のペースで伸びられる。
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.85rem", md: "1rem" }, opacity: 0.85, mb: 3 }}>
            中学受験・高校受験・大学受験対応のオンライン塾を一括比較
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {[
              { label: "無料相談・問い合わせしやすい塾を探す", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" },
              { label: "資料請求できる塾を比較", href: "/juku/?purpose=%E5%A4%A7%E5%AD%A6%E5%8F%97%E9%A8%93" },
              { label: "無料体験ありの塾を見る", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" },
            ].map((btn) => (
              <Link key={btn.label} href={btn.href} style={{ textDecoration: "none" }}>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.8, sm: 1 },
                    borderRadius: 2,
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.85)",
                    color: "#0f172a",
                    fontSize: { xs: 13, sm: 14 },
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#ecfeff", transform: "translateY(-1px)" },
                    transition: "background-color 0.2s",
                  }}
                >
                  {btn.label}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>

        {/* ━━━━ オンライン塾を目的別に探す ━━━━ */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 0.5, fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 800, color: "#0f172a" }}>
            受験目的から探す
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", mb: 2 }}>志望する受験・学習目標に合ったオンライン塾を探せます</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }, gap: 2 }}>
            {[
              { label: "中学受験", sub: "小学生向け", href: "/juku/?purpose=%E4%B8%AD%E5%AD%A6%E5%8F%97%E9%A8%93", color: "#1565C0", bg: "#E3F2FD" },
              { label: "高校受験", sub: "中学生向け", href: "/juku/?purpose=%E9%AB%98%E6%A0%A1%E5%8F%97%E9%A8%93", color: "#2E7D32", bg: "#E8F5E9" },
              { label: "大学受験", sub: "高校生・浪人生向け", href: "/juku/?purpose=%E5%A4%A7%E5%AD%A6%E5%8F%97%E9%A8%93", color: "#6A1B9A", bg: "#F3E5F5" },
              { label: "個別指導", sub: "マンツーマン・少人数", href: "/juku/?category=%E5%80%8B%E5%88%A5%E6%8C%87%E5%B0%8E", color: "#C62828", bg: "#FFEBEE" },
              { label: "映像授業", sub: "自分のペースで学習", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3", color: "#b45309", bg: "#FFF3E0" },
              { label: "集団授業", sub: "切磋琢磨できる環境", href: "/juku/?category=%E9%9B%86%E5%9B%A3%E6%8E%88%E6%A5%AD", color: "#00695C", bg: "#E0F2F1" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    border: "1px solid #E0E0E0",
                    borderLeft: `4px solid ${item.color}`,
                    bgcolor: item.bg,
                    "&:hover": { boxShadow: "0 4px 16px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
                    transition: "all 0.2s",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: item.color, fontSize: { xs: 14, sm: 16 } }}>
                    {item.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#616161" }}>
                    {item.sub}
                  </Typography>
                </Paper>
              </Link>
            ))}
          </Box>
        </Box>

        {/* ━━━━ オンライン塾ランキング ━━━━ */}
        <Box sx={{ mb: 5 }}>
          {/* セクションヘッダー */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px 8px 0 0",
              overflow: "hidden",
              height: { xs: 140, sm: 180 },
              mb: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&h=400&fit=crop&q=70"
              alt="オンライン塾比較"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(198,40,40,0.88) 0%, rgba(255,111,0,0.75) 100%)" }} />
            <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", px: { xs: 2.5, sm: 3 } }}>
              <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 800, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)", mb: 0.5 }}>
                オンライン塾ランキング
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: { xs: 12, sm: 13 } }}>
                口コミ評価・料金・特徴を徹底比較した厳選35塾
              </Typography>
            </Box>
          </Box>
          {/* カードエリア */}
          <Box sx={{ bgcolor: "#fff7ed", border: "1px solid #fed7aa", borderTop: "none", borderRadius: "0 0 8px 8px", p: { xs: 2, sm: 2.5 } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" }, gap: 1.5, mb: 2 }}>
              {[
                { label: "総合ランキング", href: "/juku/ranking/", img: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=300&h=160&fit=crop&q=60", badge: "35塾" },
                { label: "大学受験", href: "/juku/ranking/daigaku/", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=160&fit=crop&q=60", badge: "難関大対策" },
                { label: "高校受験", href: "/juku/ranking/koukou/", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=160&fit=crop&q=60", badge: "中学生向け" },
                { label: "中学受験", href: "/juku/ranking/chugaku/", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=160&fit=crop&q=60", badge: "小学生向け" },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1.5px solid #fed7aa",
                      bgcolor: "#fff",
                      "&:hover": { borderColor: "#FF6F00", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(255,111,0,0.2)" },
                      transition: "all 0.15s",
                    }}
                  >
                    <Box sx={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.img} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
                      <Box sx={{ position: "absolute", bottom: 4, left: 6, bgcolor: "#FF6F00", color: "#fff", fontSize: 9, fontWeight: 700, px: 0.75, py: 0.2, borderRadius: 0.5 }}>
                        {item.badge}
                      </Box>
                    </Box>
                    <Box sx={{ px: 1.25, py: 1 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: { xs: 11, sm: 12 }, color: "#424242", lineHeight: 1.3 }}>{item.label}</Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Link href="/juku/ranking/" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontSize: 13, color: "#b45309", fontWeight: 700 }}>すべてのランキングを見る →</Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* ━━━━ エリア別に塾を探す ━━━━ */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 0.5, fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 800, color: "#0f172a" }}>
            エリアから塾を探す
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", mb: 2 }}>お近くの塾、または全国対応のオンライン塾を探せます</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {[
              { label: "東京の塾", href: "/juku/p-tokyo/" },
              { label: "大阪の塾", href: "/juku/p-osaka/" },
              { label: "神奈川の塾", href: "/juku/p-kanagawa/" },
              { label: "愛知の塾", href: "/juku/p-aichi/" },
              { label: "福岡の塾", href: "/juku/" },
              { label: "全国オンライン塾", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" },
            ].map((item) => (
              <Link key={item.href + item.label} href={item.href} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    border: "1px solid #E0E0E0",
                    "&:hover": { borderColor: "#0f766e", bgcolor: "#F5F9FF", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
                    transition: "all 0.2s",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, color: "#0f766e", fontSize: { xs: 13, sm: 14 } }}>
                    {item.label}
                  </Typography>
                </Paper>
              </Link>
            ))}
          </Box>
          <Box sx={{ textAlign: "right", mt: 1.5 }}>
            <Link href="/juku/" style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: 13, color: "#0f766e", fontWeight: 600 }}>塾を一覧で見る →</Typography>
            </Link>
          </Box>
        </Box>

        {/* ━━━━ 当サイトの特徴 ━━━━ */}
        <Box sx={{ my: 5, p: 3, bgcolor: "#F5F9FF", borderRadius: 2 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: "1.2rem", fontWeight: 700, color: "#0f766e" }}>
            オンライン塾比較ステーションの特徴
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: 2 }}>
            {[
              { num: "無料", label: "完全無料で比較" },
              { num: "多数掲載", label: "オンライン塾情報" },
              { num: "5,000校以上", label: "高校偏差値DB" },
              { num: "47都道府県", label: "全国対応" },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: "center", p: 2, bgcolor: "#fff", borderRadius: 1, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem" }, fontWeight: 700, color: "#0f766e", lineHeight: 1.2 }}>
                  {stat.num}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#757575", mt: 0.5 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ━━━━ 高校偏差値ランキング ━━━━ */}
        <Box sx={{ mb: 2, mt: 5, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ width: 4, height: 24, bgcolor: "#0f766e", borderRadius: 2 }} />
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 800, color: "#0f172a" }}>
            高校偏差値ランキング
          </Typography>
        </Box>

        {/* Hero Button Section */}
        <Box sx={{ textAlign: "center", py: 2, mb: 2 }}>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FF6F00",
                "&:hover": { bgcolor: "#b45309", transform: "translateY(-1px)" },
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
        <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1rem", fontWeight: 700, color: "#424242" }}>
          人気エリアのランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }, gap: 2, mb: 5 }}>
          {recommendPrefectures.map((pref) => (
            <Link key={pref.slug} href={buildKoukouPrefectureRankingHref(pref.slug)} style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  textAlign: "center",
                  border: "1px solid #E0E0E0",
                  "&:hover": { borderColor: "#0f766e", bgcolor: "#F5F9FF", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0f766e", fontSize: { xs: 14, sm: 15 } }}>
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
        <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1rem", fontWeight: 700, color: "#424242" }}>
          分類別ランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2, mb: 5 }}>
          {[
            { label: "公立高校", desc: "都道府県立・市立高校", href: "/rankings/koukou/public/", color: "#2E7D32", bg: "#E8F5E9" },
            { label: "私立高校", desc: "学校法人運営の高校", href: "/rankings/koukou/private/", color: "#C62828", bg: "#FFEBEE" },
            { label: "国立高校", desc: "国立大学附属の高校", href: "/rankings/koukou/national/", color: "#F57F17", bg: "#fff7ed" },
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

        {/* Column Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: "1.3rem", color: "#0f766e", fontWeight: 700 }}>
            最新コラム
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6, mb: 3 }}>
            志望校選びや偏差値の活用方法など、高校受験に役立つ情報をまとめたコラム記事。受験生に必要な知識をわかりやすく解説しています。
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2.5, mb: 3 }}>
            {[
              { href: "/column/hensachi-guide/", title: "偏差値の見方・使い方を徹底解説", desc: "偏差値とは何か、計算方法や見方を理解しましょう。" },
              { href: "/column/koko-choice/", title: "志望校の選び方｜受験校を決める5つの基準", desc: "学力レベルから教育方針まで、最適な志望校選びを解説。" },
              { href: "/column/nyushi-schedule/", title: "高校受験スケジュール完全ガイド", desc: "中学3年間の受験スケジュールと準備の進め方。" },
              { href: "/column/kouritsu-vs-shiritsu/", title: "公立vs私立｜高校選びの徹底比較", desc: "費用・環境・進学実績から最適な選択を。" },
              { href: "/column/naishin-up/", title: "内申点の上げ方｜今すぐできる具体的な方法", desc: "定期テスト対策や授業態度などのポイントをご紹介。" },
              { href: "/column/mensetsu-guide/", title: "高校受験の面接対策完全ガイド", desc: "よく聞かれる質問と答え方のコツを解説します。" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    border: "1px solid #E0E0E0",
                    borderLeft: "4px solid #FF6F00",
                    transition: "all 0.3s ease",
                    height: "100%",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transform: "translateY(-2px)",
                      borderLeftColor: "#b45309",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#0f766e", lineHeight: 1.4 }}>
                    {article.title}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#757575", lineHeight: 1.5 }}>
                    {article.desc}
                  </Typography>
                </Paper>
              </Link>
            ))}
          </Box>
        </Box>

        {/* Regions */}
        <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1rem", fontWeight: 700, color: "#424242" }}>
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
        <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1rem", fontWeight: 700, color: "#424242" }}>
          都道府県別ランキング
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }, gap: 1 }}>
          {prefectures.map((pref) => (
            <Link key={pref.slug} href={buildKoukouPrefectureRankingHref(pref.slug)} style={{ textDecoration: "none" }}>
              <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 12, minHeight: 36 }}>
                {pref.title}
              </Button>
            </Link>
          ))}
        </Box>

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: "1.3rem", color: "#0f766e", fontWeight: 700 }}>
            よくある質問
          </Typography>
          {[
            {
              question: "オンライン塾と通塾の違いは何ですか？",
              answer: "オンライン塾は自宅からインターネット経由で授業を受けるため、通塾時間が不要でどこでも受講できます。費用も通塾型より安い傾向にあり、映像授業・個別指導・集団授業など多様なスタイルから選べます。",
            },
            {
              question: "オンライン塾の料金相場はいくらですか？",
              answer: "月謝制のオンライン塾は月5,000円〜30,000円程度が一般的です。コマ単位（1コマ=60〜90分）では1,000円〜5,000円程度。映像授業型は比較的安く、個別指導型は高めの傾向があります。",
            },
            {
              question: "中学受験向けのオンライン塾はありますか？",
              answer: "はい、中学受験専門のオンライン塾も多数あります。算数・国語・理科・社会の4科目対応や、難関校受験に特化したカリキュラムを提供している塾があります。",
            },
            {
              question: "偏差値ランキングはどのように作成されていますか？",
              answer: "当サイトの偏差値ランキングは、各高校の入試難易度・合格ボーダーラインを基に作成しています。2026年度版では全国の公立・私立・国立高校を網羅し、最新の入試データを反映しています。",
            },
            {
              question: "偏差値はどのように活用すればよいですか？",
              answer: "偏差値は志望校選びの参考指標の一つです。自分の模試偏差値と学校の偏差値を比較し、安全校・チャレンジ校のバランスを取りながら受験校を決定するのが一般的です。偏差値だけでなく、学校の教育方針・進学実績・通学距離なども合わせて検討しましょう。",
            },
          ].map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1, border: "1px solid #E0E0E0", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F5F9FF", "&:hover": { bgcolor: "#EEF5FF" } }}>
                <Typography sx={{ fontWeight: 600, color: "#0f766e" }}>{faq.question}</Typography>
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
            オンライン塾比較ステーションについて
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            オンライン塾比較ステーションは、中学受験・高校受験・大学受験に対応したオンライン塾を料金・特徴・口コミで比較できる総合情報サイトです。映像授業・個別指導・集団授業など多様なスタイルのオンライン塾を掲載しており、受験目的や学年・予算に合わせた塾選びをサポートします。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            また、全国の高校偏差値ランキングも掲載。2026年度版の最新偏差値データに基づいて、都道府県別・地方別・学校分類別（公立・私立・国立）にランキングを提供しています。志望校選びの参考資料として、客観的な偏差値データを活用し、進学先の決定をサポートします。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            当サイトの情報は教育機関や学習塾での教育支援ツールとしても活用されています。進学希望者はもちろん、保護者や教育関係者の方にも活用いただけるコンテンツを目指しています。
          </Typography>
        </Box>
        <GrowthNavigationHub
          siteName="スクールステーション"
          categoryName="オンライン塾・学校"
          entityName="塾・学校"
          accent="#0f766e"
          searchHref="/juku/"
          compareHref="/juku/ranking/"
          guideHref="/column/"
          conversionHref="/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3"
          popularLinks={[{"label":"オンライン塾ランキング","href":"/juku/ranking/"},{"label":"大学受験向け","href":"/juku/ranking/daigaku/"},{"label":"高校受験向け","href":"/juku/?purpose=%E9%AB%98%E6%A0%A1%E5%8F%97%E9%A8%93"},{"label":"無料体験あり","href":"/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3"}]}
          areaLinks={[{"label":"東京","href":"/rankings/koukou/tokyo/"},{"label":"大阪","href":"/rankings/koukou/osaka/"},{"label":"神奈川","href":"/rankings/koukou/kanagawa/"},{"label":"愛知","href":"/rankings/koukou/aichi/"}]}
        />
      </Container>
    </>
  );
}
