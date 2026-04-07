import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HensachiGuidePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "偏差値の見方・使い方を徹底解説" },
  ];

  const faqItems = [
    {
      question: "偏差値50とはどういう意味ですか？",
      answer: "偏差値50は、受験者全体の平均値を示しています。つまり、偏差値50の学校は、平均的な学力の受験者が合格する難易度であることを意味します。",
    },
    {
      question: "自分の偏差値と志望校の偏差値の差はどのくらいが目安ですか？",
      answer: "一般的には、自分の偏差値より5～10程度高い学校を目標校、同程度を実力相応校、5～10低い学校を安全校として設定することが推奨されています。",
    },
    {
      question: "偏差値だけで学校を選ぶべきですか？",
      answer: "いいえ。偏差値は学力レベルの参考にはなりますが、学校の教育方針、部活動、施設、大学進学実績、立地など、他の要素も同等に重要です。総合的に判断してください。",
    },
    {
      question: "偏差値は変動しますか？",
      answer: "はい。受験者の学力分布が変わると偏差値も変動します。同じ学校でも年によって偏差値が変わることもあります。",
    },
    {
      question: "模試の偏差値と入試本番で同じ結果が出ますか？",
      answer: "必ずしも同じではありません。模試は予測値の一つですが、本番での得点は試験当日のコンディションや出題範囲の得意・不得意に左右されます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="偏差値の見方・使い方を徹底解説 | School Station"
        description="偏差値とは何か、どのように計算されるのか、そして受験戦略にどう活かすのかを徹底解説。偏差値の基礎知識から応用まで、受験生に必要な情報をまとめました。"
        canonical="/column/hensachi-guide/"
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "偏差値の見方・使い方を徹底解説",
            "description": "偏差値とは何か、どのように計算されるのか、そして受験戦略にどう活かすのかを徹底解説。",
            "datePublished": `${CURRENT_YEAR}-04-07`,
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
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
            mb: 4,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            偏差値の見方・使い方を徹底解説
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            偏差値とは何か、どのように活用すべきか、初心者からわかりやすく解説します
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="偏差値とは" id="what-is-hensachi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            <strong>偏差値</strong>は、学校の学力レベルを数値化した統計的な指標です。受験生の学力分布に基づいて計算され、自分の学力が受験者全体の中でどの位置にあるかを示しています。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            School Stationでは、全国の高校を偏差値順にランキングしており、志望校選びの重要な参考資料として活用できます。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="偏差値の計算方法" id="how-to-calculate">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            偏差値は、以下の計算式で求められます：
          </Typography>
          <Paper sx={{ p: 2, bgcolor: "#F5F5F5", mb: 2, border: "1px solid #BDBDBD" }}>
            <Typography variant="body2" sx={{ fontFamily: "monospace", textAlign: "center", fontSize: "0.9rem", fontWeight: 600 }}>
              偏差値 = (受験者の得点 - 平均得点) ÷ 標準偏差 × 10 + 50
            </Typography>
          </Paper>

          <SubSection title="計算式の各要素">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>受験者の得点</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    その試験での自分の得点
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>平均得点</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全受験者の平均点。偏差値50になる基準値
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>標準偏差</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    得点のばらつきを示す指標。大きいほどばらつきが大きい
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="偏差値の見方" id="how-to-read">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            偏差値は50を中心として分布します。以下の表を参考に、自分の偏差値を解釈してください：
          </Typography>

          <Paper sx={{ overflowX: "auto", mb: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#0D47A1" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>偏差値範囲</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>評価</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>説明</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>70以上</TableCell>
                  <TableCell sx={{ color: "#1565C0", fontWeight: 600 }}>最難関</TableCell>
                  <TableCell>受験者の上位2%。極めて難易度の高い学校</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>65～70</TableCell>
                  <TableCell sx={{ color: "#0D47A1", fontWeight: 600 }}>難関</TableCell>
                  <TableCell>受験者の上位7%程度。難易度の高い学校</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>60～65</TableCell>
                  <TableCell sx={{ color: "#388E3C", fontWeight: 600 }}>上位</TableCell>
                  <TableCell>受験者の上位15%程度。難易度は標準より上</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>55～60</TableCell>
                  <TableCell sx={{ color: "#F57F17", fontWeight: 600 }}>標準上</TableCell>
                  <TableCell>受験者の上位30%程度。標準より若干上</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>45～55</TableCell>
                  <TableCell sx={{ color: "#FF6F00", fontWeight: 600 }}>標準</TableCell>
                  <TableCell>受験者の中央付近。平均的な難易度</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>40～45</TableCell>
                  <TableCell sx={{ color: "#C62828", fontWeight: 600 }}>標準下</TableCell>
                  <TableCell>受験者の下位30%程度。標準より若干下</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontSize: "0.9rem" }}>
            ※ 表の範囲はあくまで目安です。実際の偏差値分布はテストの難易度によって変動します。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="偏差値の活用方法" id="how-to-use">
          <SubSection title="1. 学力レベルの把握">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              自分の偏差値と志望校の偏差値を比較することで、受験の難易度が客観的に判断できます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="自分の偏差値より高い学校"
                  secondary="努力によって合格の可能性がある目標校"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="自分の偏差値と同程度"
                  secondary="合格可能性が高い実力相応校"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="自分の偏差値より低い学校"
                  secondary="ほぼ確実に合格できる安全校"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. 受験戦略の立案">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              <strong>3段階志望法</strong>を参考に、複数の志望校を設定することが一般的です。
            </Typography>
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB" }}>
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#2E7D32", mb: 0.5 }}>目標校（チャレンジ校）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242", mb: 0.5 }}>
                      自分の偏差値より5～10程度高い学校
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      努力次第で合格が目指せる目標。私立併願校として活用すると効果的です。
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ my: 1.5 }} />
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#F57F17", mb: 0.5 }}>実力相応校</Typography>
                    <Typography variant="body2" sx={{ color: "#424242", mb: 0.5 }}>
                      自分の偏差値と同程度（±0～5）の学校
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      合格可能性が高く、本命校として位置付けることが多い。
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ my: 1.5 }} />
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#C62828", mb: 0.5 }}>安全校</Typography>
                    <Typography variant="body2" sx={{ color: "#424242", mb: 0.5 }}>
                      自分の偏差値より5～10程度低い学校
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      ほぼ確実に合格できる学校。進学実績を考慮して選択。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="3. 併願校の選択">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              公立高校の受験時、私立高校を併願する場合は偏差値を参考に複数校を選ぶことが重要です。目標校、実力相応校、安全校の3段階で私立併願校を設定することで、合格確保と上位校への挑戦のバランスが取れます。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="偏差値活用時の注意点" id="cautions">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            偏差値は非常に有用な指標ですが、学力レベルの一面を表しているに過ぎません。以下の点に注意してください：
          </Typography>
          <List>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校の全てを表さない</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値は学力レベルの指標であり、教育方針、部活動の充実度、施設、生活環境など、学校生活全体を表しません。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>年度による変動</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  同じ学校でも年によって偏差値が変わります。複数年の数据を参考にすることが重要です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#F57F17" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>モチベーションの維持</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値に一喜一憂せず、自分の目標に向けて継続的に学習することが最も重要です。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1565C0" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#1565C0" }}>
                次の記事: 志望校の選び方
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ mb: 3 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#0D47A1" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" component="h3" sx={{ mb: 1.5, fontSize: "1.1rem", fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
