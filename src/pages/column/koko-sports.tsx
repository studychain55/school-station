import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function KokoSportsPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "スポーツ推薦で高校に入る方法とポイント" },
  ];

  const faqItems = [
    {
      question: "スポーツ推薦に必要な成績レベルはどのくらい？",
      answer: "高校によって異なりますが、一般的には評定平均3.0以上が目安です。ただし、その競技で著しい成績がある場合は、条件が緩和されることもあります。詳細は希望する高校の要項を確認してください。",
    },
    {
      question: "スポーツ推薦で入学後、後悔するケースはある？",
      answer: "勉強との両立が予想より大変、思った以上に厳しい練習、進路が制限されるなど、後悔するケースもあります。事前に在校生の話を聞き、学校の環境を理解することが重要です。",
    },
    {
      question: "スポーツ推薦で入学した場合、奨学金制度はありますか？",
      answer: "学校によっては、スポーツ推薦学生向けの奨学金制度を用意していることもあります。入学説明会で確認することをおすすめします。",
    },
    {
      question: "怪我でスポーツができなくなった場合はどうなる？",
      answer: "推薦取り消しのケースもあります。契約内容をしっかり確認し、怪我に対する対応を事前に学校に相談することが大切です。",
    },
    {
      question: "スポーツ推薦と学業の両立は本当に可能？",
      answer: "可能ですが、相当の努力が必要です。時間管理が重要で、効率的な勉強方法を身につけることが成功のカギになります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="スポーツ推薦で高校に入る方法とポイント｜入試対策ガイド | School Station"
        description="スポーツ推薦入試の手続き、必要な準備、成功の秘訣、入学後の両立方法を詳しく解説。スポーツ推薦で志望校に合格するための完全ガイド。"
        canonical="/column/koko-sports/"
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "スポーツ推薦で高校に入る方法とポイント｜入試対策ガイド",
              description: "スポーツ推薦入試の手続き、必要な準備、成功の秘訣、入学後の両立方法を詳しく解説。スポーツ推薦で志望校に合格するための完全ガイド。",
              datePublished: `${CURRENT_YEAR}-04-07`,
              author: {
                "@type": "Organization",
                name: "School Station",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: item.label,
                item: item.href ? `https://school-station.com${item.href}` : undefined,
              })),
            }),
          }}
        />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <BreadCrumb items={breadcrumbs} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            スポーツ推薦で高校に入る方法とポイント
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
            更新日: {CURRENT_YEAR}年4月7日 | 読了時間: 約9分
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: "#f5f5f5" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            スポーツ推薦は一つの進学方法
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            スポーツ推薦は、学業成績だけでなく、スポーツでの成績や適性を評価される入試方法です。
            本ガイドでは、スポーツ推薦での高校入学を目指す中学生向けに、必要な準備、手続き、成功のポイント、そして入学後の心構えを詳しく解説します。
          </Typography>
        </Paper>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            スポーツ推薦とは
          </Typography>
          <Paper sx={{ p: 3, border: "1px solid #e0e0e0", mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              スポーツ推薦入試の特徴
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary="学業成績より運動成績を重視" secondary="評定平均の基準は緩い傾向" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary="学校の推薦が必須" secondary="顧問の推薦なしでは出願できない" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary="合格確率が高い" secondary="一般入試より競争率が低い" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary="練習や試合に時間が必要" secondary="勉強との両立が必須" />
              </ListItem>
            </List>
          </Paper>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            スポーツ推薦の3つの取得方法
          </Typography>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Paper sx={{ p: 3, border: "2px solid #4caf50", borderLeft: "6px solid #4caf50" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                1. 部活動での実績
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                中学の部活動での大会成績や記録が最も重視されます。県大会出場、全国大会出場などの実績が有利です。
              </Typography>
              <Typography variant="caption" sx={{ color: "warning.main", fontWeight: 700 }}>
                最も一般的な方法
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #4caf50", borderLeft: "6px solid #4caf50" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                2. クラブ活動での実績
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                学校外のクラブチーム（野球、サッカー、テニスなど）での実績も評価されます。部活動がない競技はこちらが重要です。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #4caf50", borderLeft: "6px solid #4caf50" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                3. 個人種目での記録
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                陸上、水泳、テニスなど、個人種目の記録が選考基準になります。全国レベルの記録が求められることが多いです。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            スポーツ推薦に必要な準備
          </Typography>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Paper sx={{ p: 3, border: "1px solid #2196f3", borderLeft: "4px solid #2196f3" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                ステップ1: 志望校の選定（1年時から）
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                早期から志望校を決め、その学校の競技レベル、過去の推薦実績、必要な成績を確認しましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "1px solid #2196f3", borderLeft: "4px solid #2196f3" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                ステップ2: 実績作り（通年）
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                大会での成績が決定的です。定期的に練習を継続し、大会で最高のパフォーマンスを目指しましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "1px solid #2196f3", borderLeft: "4px solid #2196f3" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                ステップ3: 成績管理（通年）
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                最低限の学業成績は必要です。評定平均を3.0以上に保つことを目安にしましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "1px solid #2196f3", borderLeft: "4px solid #2196f3" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                ステップ4: 顧問との相談（3年時）
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                部活動顧問に「推薦をもらいたい」という意思を伝えます。顧問の推薦が得られれば、手続きは進みます。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "1px solid #2196f3", borderLeft: "4px solid #2196f3" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                ステップ5: 出願と面接対策（秋～冬）
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                出願書類を提出し、面接に向けた準備を開始します。スポーツへの姿勢、高校での目標を明確にしておくことが重要です。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            入学後の両立戦略
          </Typography>
          <Paper sx={{ p: 3, bgcolor: "#e3f2fd", border: "1px solid #bbdefb" }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="短時間での効率的な勉強"
                  secondary="1日2～3時間の集中力が必要。隙間時間を活用しよう。"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="予習復習の徹底"
                  secondary="授業中の理解度を高めることで、帰宅後の勉強時間を短縮できます。"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="定期テスト対策に注力"
                  secondary="各定期テストで安定した成績を取ることで、進級や大学進学の道が広がります。"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="先輩に相談する"
                  secondary="スポーツ推薦で入学した先輩から、両立の秘訣を学びましょう。"
                />
              </ListItem>
            </List>
          </Paper>
        </Box>

        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        <Paper sx={{ p: 4, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            高校を探す
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            スポーツが強く、学習環境も整った高校を検索しましょう。
          </Typography>
          <Link href="/all/">
            <Typography
              variant="button"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.5,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: 1,
                textDecoration: "none",
              }}
            >
              高校を検索する
            </Typography>
          </Link>
        </Paper>
      </Container>
    </>
  );
}
