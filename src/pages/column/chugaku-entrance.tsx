import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChugakuEntrancePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "中学受験の基礎知識" },
  ];

  const faqItems = [
    {
      question: "中学受験は全員が受験しますか？",
      answer: "いいえ。日本では公立中学に進学するのが一般的です。中学受験を選択するのは、本人の希望や家族の教育方針による個人的な選択肢となっています。",
    },
    {
      question: "中学受験にはどのくらいの費用がかかりますか？",
      answer: "塾代が最大の費用で、4年生からの3年間で200万～400万円程度が目安です。その他、受験料、教材費などを合わせると総費用は300万～500万円程度になる場合が多いです。",
    },
    {
      question: "いつから準備を始めるのが一般的ですか？",
      answer: "多くの受験生は4年生（10歳）から本格的な塾通いを開始します。遅くても5年生からは準備を始めることが推奨されています。",
    },
    {
      question: "志望校の選び方で大切なことは何ですか？",
      answer: "本人の学力レベルだけでなく、教育理念、校風、部活動、アクセス、大学進学実績など複数の要素を総合的に判断することが大切です。学校見学や説明会に参加して、実際の雰囲気を確認しましょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  const expenses = [
    {
      category: "塾代（4年生～6年生）",
      description: "月額10,000～30,000円程度",
      total: "200万～400万円（3年間）",
    },
    {
      category: "受験料",
      description: "1校あたり20,000～30,000円",
      total: "50,000～200,000円（複数校受験）",
    },
    {
      category: "教材費・参考書",
      description: "月額5,000～10,000円程度",
      total: "30万～50万円（3年間）",
    },
    {
      category: "模試受験料",
      description: "1回あたり5,000～8,000円",
      total: "20万～30万円（複数回受験）",
    },
    {
      category: "家庭教師・個別指導",
      description: "月額20,000～50,000円（任意）",
      total: "0～100万円（選択）",
    },
  ];

  return (
    <>
      <SEO
        title="中学受験の基礎知識｜いつから準備する？費用・日程・学校選びを解説 | School Station"
        description="中学受験とは何か、いつから準備すべきか、費用の内訳、志望校の選び方など、中学受験の基礎知識をわかりやすく解説します。"
        canonical="/column/chugaku-entrance/"
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
              headline: "中学受験の基礎知識｜いつから準備する？費用・日程・学校選びを解説",
              description: "中学受験とは何か、いつから準備すべきか、費用の内訳、志望校の選び方など、中学受験の基礎知識をわかりやすく解説します。",
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

        {/* Hero */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5 },
            mb: 4,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            中学受験の基礎知識
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            いつから準備する？費用・日程・学校選びを解説。中学受験を検討する家族必読のガイド
          </Typography>
        </Box>

        {/* Overview */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, bgcolor: "#F5F5F5", border: "1px solid #E0E0E0" }}>
          <Typography variant="h3" component="h2" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2, color: "#0D47A1" }}>
            中学受験とは
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            中学受験とは、私立中学校や公立の中高一貫校に進学するために行われる入学試験です。公立中学進学が一般的な日本において、自分たちの教育方針に合った学校を選択する家族によって選ばれています。中学受験を通じて、本人の適性に合った教育環境を得ることができます。
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* 準備開始時期 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            準備開始時期の目安
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
            <Paper sx={{ p: 3, border: "1px solid #E0E0E0", transition: "all 0.3s", "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" } }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#FF6F00" }}>
                3年生（9歳）
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                中学受験を検討し始める時期。学校見学や説明会に参加。塾の体験授業を受けるなど、情報収集を開始します。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, border: "1px solid #E0E0E0", transition: "all 0.3s", "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" } }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#FF6F00" }}>
                4年生（10歳）
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                本格的な塾通い開始の時期。多くの受験生がこの時期から2～3年間の受験準備を始めます。週2～3日程度の塾通いが一般的です。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, border: "1px solid #E0E0E0", transition: "all 0.3s", "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" } }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#FF6F00" }}>
                5年生以降（11歳）
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                最遅でも5年生からは本格的な受験対策が必要です。この時期から始める場合は、短期間の集中的な学習が求められます。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 費用の内訳 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            費用の内訳
          </Typography>

          <Typography variant="body2" sx={{ color: "#424242", mb: 3, lineHeight: 1.8 }}>
            中学受験に必要な費用は、塾代を中心に総額300万～500万円程度が目安です。以下は主な費用項目と相場をまとめたものです。
          </Typography>

          <TableContainer>
            <Table sx={{ border: "1px solid #E0E0E0" }}>
              <TableHead sx={{ bgcolor: "#F5F5F5" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#0D47A1" }}>費用項目</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#0D47A1" }}>説明</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#0D47A1", textAlign: "right" }}>総額</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenses.map((item, idx) => (
                  <TableRow key={idx} sx={{ "&:nth-of-type(odd)": { bgcolor: "#FAFAFA" } }}>
                    <TableCell sx={{ fontWeight: 600, color: "#424242" }}>{item.category}</TableCell>
                    <TableCell sx={{ color: "#666" }}>{item.description}</TableCell>
                    <TableCell sx={{ textAlign: "right", fontWeight: 600, color: "#FF6F00" }}>{item.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 志望校の選び方 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            志望校の選び方
          </Typography>

          <List sx={{ bgcolor: "#FAFAFA", p: 2, borderRadius: 1 }}>
            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  1. 学力レベル：偏差値で適切な学校を選定
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  本人の現在の学力を正確に把握し、最低3校（上位・中位・下位）の志望校を設定することが推奨されます。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  2. 教育理念・校風：本人の適性に合った環境
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  学校の教育方針やカリキュラム、校風が本人の性格や興味と合致しているか確認することが重要です。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  3. 部活動・課外活動：豊富な活動機会の確認
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  本人が興味のある部活動や課外活動が充実しているかを確認します。全人教育の観点から重要な要素です。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  4. アクセス・通学時間：現実的な判断
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  通学時間が長すぎないか確認します。中学入学後6年間通学することになるため、親子ともに無理のない範囲であることが大切です。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  5. 大学進学実績：進学先の質を確認
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  どのような大学に進学しているか、進学実績を確認します。学校の教育の質を測る重要な指標となります。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 受験スケジュール */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            中学受験の日程（目安）
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr" }, gap: 2 }}>
            <Paper sx={{ p: 3, bgcolor: "#E3F2FD", border: "1px solid #BBDEFB" }}>
              <Typography sx={{ fontWeight: 700, color: "#0D47A1", mb: 1 }}>
                4月～11月：塾での受験対策期間
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                本格的な学習期間。基礎学力の定着から応用問題まで、段階的に学習を進めます。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F3E5F5", border: "1px solid #E1BEE7" }}>
              <Typography sx={{ fontWeight: 700, color: "#7B1FA2", mb: 1 }}>
                11月～12月：願書提出・過去問演習
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                志望校の願書提出が開始。同時に過去問演習に本格的に取り組みます。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F1F8E9", border: "1px solid #DCEDC8" }}>
              <Typography sx={{ fontWeight: 700, color: "#558B2F", mb: 1 }}>
                1月中旬～2月初旬：入試本番
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                首都圏では1月中旬から、関西・その他地域では2月初旬から入試が本格化します。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
              <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                2月中旬～3月：合格発表
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                各校の合格発表。入学手続きを進め、4月からの新生活に向けて準備を開始します。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 関連記事 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            関連記事
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }, gap: 2 }}>
            <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  偏差値の見方・使い方を徹底解説
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値とは何か、受験戦略にどう活かすか
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値と総合的な判断で最適な学校を選ぶ
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  高校受験のスケジュール
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験本番に向けた計画立案と準備スケジュール
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Box>

        {/* ナビゲーション */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 5 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              sx={{
                p: 2.5,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <ArrowBackIcon sx={{ fontSize: "1.2rem", color: "#0D47A1" }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1" }}>
                  コラム一覧に戻る
                </Typography>
              </Box>
            </Paper>
          </Link>

          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Paper
              sx={{
                p: 2.5,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1" }}>
                  高校偏差値ランキング
                </Typography>
              </Box>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
