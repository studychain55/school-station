import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ColumnIndexPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム" },
  ];

  const articles = [
    {
      title: "偏差値の見方・使い方を徹底解説",
      description: "偏差値とは何か、どのように活用すべきか、初心者からの徹底解説。偏差値の計算方法、見方、そして受験戦略への活かし方を理解しましょう。",
      href: "/column/hensachi-guide/",
      date: "2026-04-07",
    },
    {
      title: "志望校の選び方｜受験校を決める5つの基準",
      description: "自分に最適な志望校を選ぶための5つの重要な基準。学力レベル、学科、教育方針、立地、大学進学実績など、総合的な判断基準をご紹介します。",
      href: "/column/koko-choice/",
      date: "2026-04-07",
    },
    {
      title: "高校受験のスケジュール｜中3の年間スケジュール解説",
      description: "中3が知っておくべき高校受験の年間スケジュール。春の基礎固めから冬の追い込みまで、各時期の勉強法と重要ポイントをまとめました。",
      href: "/column/nyushi-schedule/",
      date: "2026-04-07",
    },
    {
      title: "公立高校と私立高校の違い｜費用・教育内容を比較",
      description: "公立高校と私立高校の学費、教育内容、受験方法、校風の違いを徹底比較。あなたに合った学校選びをサポートします。",
      href: "/column/kouritsu-vs-shiritsu/",
      date: "2026-04-07",
    },
    {
      title: "内申点の上げ方｜中学生が今すぐできる具体的な方法",
      description: "内申点を上げるための具体的な方法を解説。定期テスト対策、授業態度、提出物管理など、すぐに実践できるポイントをご紹介します。",
      href: "/column/naishin-up/",
      date: "2026-04-07",
    },
    {
      title: "高校受験の面接対策｜よく出る質問と答え方を解説",
      description: "高校受験の面接対策を徹底解説。よく出る質問・回答例・本番での注意点など、合格につながる面接対策をすべてご紹介します。",
      href: "/column/mensetsu-guide/",
      date: "2026-04-07",
    },
  ];

  return (
    <>
      <SEO
        title="高校受験コラム | School Station"
        description="高校受験に役立つコラム記事を掲載。偏差値の見方、志望校選びのコツ、入試対策など、受験生に必要な情報をわかりやすく解説します。"
        canonical="/column/"
        breadcrumbs={breadcrumbs}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "高校受験コラム",
            "description": "高校受験に役立つコラム記事の一覧",
            "url": "https://school-station.com/column/",
            "hasPart": articles.map((article) => ({
              "@type": "Article",
              "headline": article.title,
              "description": article.description,
              "url": `https://school-station.com${article.href}`,
              "datePublished": article.date,
            })),
          })
        }} />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <BreadCrumb items={breadcrumbs} />

        {/* Hero */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5 },
            mb: 5,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校受験コラム
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            志望校選び、偏差値の活用方法、受験対策まで、受験生に役立つ情報をお届けします
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(1, 1fr)" }, gap: 3 }}>
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid #E0E0E0",
                  borderLeft: "4px solid #FF6F00",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    transform: "translateY(-4px)",
                    borderLeftColor: "#E65100",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                  <Typography variant="caption" sx={{ color: "#666", fontSize: "0.85rem" }}>
                    {new Date(article.date).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    fontWeight: 700,
                    color: "#0D47A1",
                    mb: 1.5,
                    lineHeight: 1.4,
                  }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6, mb: 2 }}>
                  {article.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#FF6F00", fontWeight: 600, fontSize: "0.95rem" }}>
                  詳しく読む
                  <ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />
                </Box>
              </Paper>
            </Link>
          ))}
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            全国の高校情報をチェック
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            全国の高校偏差値ランキングで、志望校を探しましょう。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="a"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#FF6F00",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { bgcolor: "#E65100", transform: "translateY(-1px)" },
                transition: "all 0.2s",
              }}
            >
              高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
