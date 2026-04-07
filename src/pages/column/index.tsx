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
      title: "高校から大学受験を見据えた学習計画の立て方",
      description: "高1・高2・高3の各時期にやるべきことを詳しく解説。推薦入試・総合型選抜・一般入試に対応した効果的な学習戦略を、段階的にご紹介します。",
      href: "/column/daigaku-juken/",
      date: "2026-04-07",
    },
    {
      title: "高校生活を充実させる方法｜勉強・部活・友達・行事の両立",
      description: "高校生活の4つの柱（勉強・部活・人間関係・学校行事）のバランスの取り方を解説。時間管理、部活と勉強の両立テクニック、修学旅行・体育祭・文化祭の取り組み方をご紹介。",
      href: "/column/koukou-seikatsu/",
      date: "2026-04-07",
    },
    {
      title: "高校入試の種類と対策｜推薦・一般・特色選抜の違い",
      description: "高校入試の3つの主要な種類（推薦入試・一般入試・特色選抜）について、出願資格、対策方法、面接のポイント、出願スケジュールを詳しく解説。",
      href: "/column/kokosei-nyushi/",
      date: "2026-04-07",
    },
    {
      title: "高校生の効率的な勉強法｜定期テスト・大学受験対策",
      description: "高校生向けの効率的な勉強法を詳しく解説。勉強時間の目安、定期テスト対策、科目別の学習方法、大学受験ロードマップ、スマートフォン対策など。",
      href: "/column/kokosei-study/",
      date: "2026-04-07",
    },
    {
      title: "高校受験にかかるお金の全まとめ｜費用の相場と節約術",
      description: "高校受験にかかる全費用を徹底解説。受験料、塾代、教材費から入学後の費用まで、費用の相場と節約術をご紹介します。",
      href: "/column/juken-kihu/",
      date: "2026-04-07",
    },
    {
      title: "高校受験の塾・予備校の選び方｜個別指導vs集団指導",
      description: "高校受験に向けた塾・予備校選びの完全ガイド。個別指導と集団指導の特徴、オンライン塾の活用、コスト比較、体験授業の活用法を解説します。",
      href: "/column/yobiko-choice/",
      date: "2026-04-07",
    },
    {
      title: "受験のストレスと上手に付き合う方法",
      description: "受験ストレスの対処法、睡眠・栄養の管理、メンタルトレーニング、親とのコミュニケーションなど、心身の健康を保ちながら受験に臨むための完全ガイド。",
      href: "/column/juken-stress/",
      date: "2026-04-07",
    },
    {
      title: "スポーツ推薦で高校に入る方法とポイント",
      description: "スポーツ推薦入試の手続き、必要な準備、成功の秘訣、入学後の両立方法を詳しく解説。スポーツ推薦で志望校に合格するための完全ガイド。",
      href: "/column/koko-sports/",
      date: "2026-04-07",
    },
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
      title: "学校見学・体験入学の活用ガイド｜志望校選びに役立てよう",
      description: "学校見学・体験入学を最大限に活用するための完全ガイド。見学のコツ、質問するべき項目、志望校比較方法など、効果的な学校選びのための情報。",
      href: "/column/taiken-nyugaku/",
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
    {
      title: "中学受験の基礎知識｜いつから準備する？費用・日程・学校選びを解説",
      description: "中学受験とは何か、いつから準備すべきか、費用の内訳、志望校の選び方など、中学受験の基礎知識をわかりやすく解説します。",
      href: "/column/chugaku-entrance/",
      date: "2026-04-07",
    },
    {
      title: "高校受験に向けた効果的な勉強法｜教科別攻略と時間管理のコツ",
      description: "高校受験合格に必要な勉強量、教科別の効果的な勉強法、スケジュール管理のコツ、モチベーション維持方法をわかりやすく解説します。",
      href: "/column/study-methods/",
      date: "2026-04-07",
    },
    {
      title: "特色選抜・推薦入試完全ガイド｜受験資格と対策",
      description: "特色選抜・推薦入試の完全ガイド。学校推薦と自己推薦の違い、内申点要件、面接対策、自己PR作成法など、推薦入試で合格するための全知識。",
      href: "/column/tokkoku-guide/",
      date: "2026-04-07",
    },
    {
      title: "高校の部活選び｜入学前に知っておくべきこと",
      description: "高校の部活選びの完全ガイド。部活と勉強の両立方法、主要部活の特徴、顧問の選び方、大学受験への影響など、充実した高校生活のためのポイント。",
      href: "/column/bukatsu-choise/",
      date: "2026-04-07",
    },
    {
      title: "高校生のバイトと勉強の両立｜受験に影響しない働き方",
      description: "高校生がバイトと勉強を両立させるための実践的なガイド。時間管理、バイト先選び、受験期の対策など、受験に影響しない効果的な働き方。",
      href: "/column/kokosei-baito/",
      date: "2026-04-07",
    },
    {
      title: "通信制高校と定時制高校の違い｜どちらを選ぶべきか徹底比較",
      description: "通信制高校と定時制高校の仕組みや違いを徹底比較。学費・卒業要件・進学実績・向いている人の特徴を解説し、どちらを選ぶべきか判断できるガイドを提供。",
      href: "/column/tsushinsei-koukou/",
      date: "2026-04-07",
    },
    {
      title: "高校の学校説明会・オープンキャンパスを最大限活用する方法",
      description: "高校受験を控えた中学生向けに、学校説明会とオープンキャンパスの違い、参加前の準備、当日の確認ポイント、複数校を比較するコツを解説。",
      href: "/column/koukou-setsumeikai/",
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
