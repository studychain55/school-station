import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function KoritsuVsShiritsuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "公立私立比較" },
  ];

  const faqItems = [
    {
      question: "公立高校と私立高校では、どちらが難易度が高いですか？",
      answer:
        "難易度は学校によって異なります。一般的には、最難関私立高校（開成、灘など）は公立高校より難しい傾向にあります。ただし、公立の難関校（東京都立日比谷高校など）も非常に難易度が高いです。",
    },
    {
      question: "私立高校の奨学金制度にはどのような種類がありますか？",
      answer:
        "給付型奨学金（給付された資金を返済しない）、貸与型奨学金（返済義務がある）などがあります。学校や団体によって制度が異なるため、志望校に問い合わせることをお勧めします。",
    },
    {
      question: "公立高校の授業の進度は、私立高校より遅いですか？",
      answer:
        "一般的に、私立高校の方が授業の進度が速い傾向があります。特に進学校では、高2までに高3の内容を終わらせることもあります。公立高校は教育課程を厳密に守る傾向があります。",
    },
    {
      question: "公立高校の大学進学実績は、私立高校と比べてどうですか？",
      answer:
        "この点は、学校によって大きく異なります。有名国立大学への進学者数で比較すると、難関公立高校と難関私立高校は互角かそれ以上です。ただし、同じ偏差値レベルでは、私立高校の方が進学実績が高い傾向があります。",
    },
    {
      question: "私立高校に合格しやすい受験方式は？",
      answer:
        "推薦入試（指定校推薦、公募制推薦）は一般入試より合格しやすい傾向があります。ただし、学力試験がない分、在学中の成績が重要です。一般入試も受験時期により難易度が異なります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  const comparisonData = [
    {
      item: "学費（年間）",
      koritsu: "50～100万円程度",
      shiritsu: "70～150万円程度",
    },
    {
      item: "入学金",
      koritsu: "5,500円（都立の場合）",
      shiritsu: "20～50万円程度",
    },
    {
      item: "授業進度",
      koritsu: "標準的なペース",
      shiritsu: "速い傾向（特に進学校）",
    },
    {
      item: "受験方法",
      koritsu: "一般入試のみ",
      shiritsu: "推薦入試・一般入試など複数",
    },
    {
      item: "部活動",
      koritsu: "自主性重視、多様な選択肢",
      shiritsu: "強化部がある、選別的",
    },
    {
      item: "校則",
      koritsu: "比較的緩い傾向",
      shiritsu: "厳しい傾向（学校による）",
    },
    {
      item: "制服",
      koritsu: "制服なし、または簡素な場合も",
      shiritsu: "厳格に指定される",
    },
    {
      item: "施設設備",
      koritsu: "基本的な設備",
      shiritsu: "充実している傾向",
    },
  ];

  const meritData = [
    {
      title: "公立高校のメリット",
      items: [
        "学費が安い（年間50～100万円程度）",
        "多様な社会階層の生徒が集まる",
        "自由度が高く、自主性が育つ",
        "少数精鋭の教師が厳選されている傾向",
        "地域コミュニティとのつながりが強い",
        "大学進学実績の公開が詳細",
      ],
    },
    {
      title: "公立高校のデメリット",
      items: [
        "入試は学力試験のみ（一般入試）",
        "授業の進度が標準的で、進学対策が学校に依存",
        "施設や設備が充実していない傾向",
        "進学実績の差が大きい",
        "受験サポート体制が学校による",
        "落ちると浪人の可能性も",
      ],
    },
    {
      title: "私立高校のメリット",
      items: [
        "複数の受験方法（推薦、一般入試など）",
        "授業進度が速く、大学進学に有利",
        "進学サポート体制が充実している",
        "施設や設備が充実している傾向",
        "学校の教育方針が明確で、一貫性がある",
        "奨学金制度が充実している場合も",
      ],
    },
    {
      title: "私立高校のデメリット",
      items: [
        "学費が高い（年間70～150万円程度）",
        "校則が厳しい傾向",
        "制服が厳格に指定される",
        "受験方式が複雑で、選択肢が多い",
        "奨学金の競争が激しい",
        "学校によって格差が大きい",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="公立高校と私立高校の違い｜費用・教育内容を比較 | School Station"
        description="公立高校と私立高校の学費、教育内容、受験方法、校風の違いを徹底比較。あなたに合った学校選びをサポートします。"
        canonical="/column/kouritsu-vs-shiritsu/"
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
              headline: "公立高校と私立高校の違い｜費用・教育内容を比較",
              description: "公立高校と私立高校の違いを徹底比較。学費、教育内容、受験方法などを解説。",
              datePublished: `${CURRENT_YEAR}-04-07`,
              author: {
                "@type": "Organization",
                name: "School Station",
              },
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            公立高校と私立高校の違い
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            学費、教育内容、受験方法、校風を徹底比較。あなたに合った学校選びをサポートします
          </Typography>
        </Box>

        {/* 概要 */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, bgcolor: "#F5F5F5", border: "1px solid #E0E0E0" }}>
          <Typography variant="h3" component="h2" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2, color: "#1e782d" }}>
            公立高校と私立高校の基本的な違い
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            日本の高校には、公立高校と私立高校の2つの種類があります。運営主体、学費、教育方針など、多くの点で異なります。自分のライフプラン、家計の状況、教育方針への合致など、複数の観点から総合的に判断することが大切です。
          </Typography>
        </Paper>

        {/* 比較表 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            公立・私立の主要な違い
          </Typography>

          <TableContainer component={Paper} sx={{ mb: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#1e782d" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>項目</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>公立高校</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>私立高校</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonData.map((row, idx) => (
                  <TableRow key={idx} sx={{ backgroundColor: idx % 2 === 0 ? "#F5F5F5" : "#fff" }}>
                    <TableCell sx={{ fontWeight: 700, color: "#1e782d", fontSize: "0.95rem" }}>{row.item}</TableCell>
                    <TableCell sx={{ fontSize: "0.9rem", color: "#424242" }}>{row.koritsu}</TableCell>
                    <TableCell sx={{ fontSize: "0.9rem", color: "#424242" }}>{row.shiritsu}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* メリット・デメリット */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            メリット・デメリット比較
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
            {meritData.map((section, idx) => (
              <Paper key={idx} sx={{ p: 3, border: "1px solid #E0E0E0" }}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    mb: 2,
                    color: idx % 2 === 0 ? "#1e782d" : "#E65100",
                  }}
                >
                  {section.title}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                  {section.items.map((item, itemIdx) => (
                    <Typography key={itemIdx} component="li" variant="body2" sx={{ color: "#424242", mb: 1.5, fontSize: "0.9rem" }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* 学費詳細比較 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            学費の詳細比較
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
            <Paper sx={{ p: 3, bgcolor: "#e9f2ea", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#1e782d" }}>
                公立高校の学費
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>入学金</strong>：5,500円（都立の場合、県立は異なる）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>年間授業料</strong>：約118,800円（都立の場合）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>その他の費用</strong>：制服、教科書代など（約20～30万円）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>年間総額</strong>：約50～70万円
                </Typography>
              </Box>
              <Box sx={{ pt: 2, borderTop: "1px solid #bcd7c0", mt: 2 }}>
                <Typography variant="caption" sx={{ color: "#1e782d", fontWeight: 700 }}>
                  ※都道府県により異なります
                </Typography>
              </Box>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#E65100" }}>
                私立高校の学費
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>入学金</strong>：20～50万円（学校による）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>年間授業料</strong>：50～80万円（学校による）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>その他の費用</strong>：制服、教科書、施設費など（約30～50万円）
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1.5 }}>
                  <strong>年間総額</strong>：約70～150万円
                </Typography>
              </Box>
              <Box sx={{ pt: 2, borderTop: "1px solid #FFE0B2", mt: 2 }}>
                <Typography variant="caption" sx={{ color: "#E65100", fontWeight: 700 }}>
                  ※学校により大きく異なります
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* 受験方法の違い */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            受験方法の違い
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
            <Paper sx={{ p: 3, border: "1px solid #E0E0E0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, mb: 2, color: "#1e782d" }}>
                公立高校
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2, lineHeight: 1.8 }}>
                <strong>一般入試のみ</strong>が基本です。学力試験の成績で合否が決まります。
              </Typography>
              <Typography variant="caption" sx={{ display: "block", fontWeight: 700, color: "#666", mb: 1 }}>
                試験科目：
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                数学、国語、英語、理科、社会（5科目）
              </Typography>
              <Typography variant="caption" sx={{ display: "block", fontWeight: 700, color: "#666", mb: 1 }}>
                合否判定：
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                学力試験の成績 + 内申点（調査書）
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, border: "1px solid #E0E0E0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, mb: 2, color: "#E65100" }}>
                私立高校
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2, lineHeight: 1.8 }}>
                複数の受験方法があり、受験生が選択できます。
              </Typography>
              <Typography variant="caption" sx={{ display: "block", fontWeight: 700, color: "#666", mb: 1 }}>
                主な受験方式：
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                ・ 推薦入試（指定校推薦、公募制推薦）
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                ・ 一般入試
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                ・ AO入試（活動や適性で評価）
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* 学校選びのポイント */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            公立・私立を選ぶ時のポイント
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#e9f2ea", border: "1px solid #bcd7c0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1.5, color: "#1e782d" }}>
                公立高校がおすすめの場合
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  学費をできるだけ抑えたい
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  多様な環境で学びたい
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  自由度が高い学校生活を望む
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  学力試験で実力を発揮できる
                </Typography>
              </Box>
            </Paper>

            <Paper sx={{ p: 2.5, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1.5, color: "#E65100" }}>
                私立高校がおすすめの場合
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  推薦で合格したい
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  充実した教育環境を望む
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  大学進学支援が充実した学校を希望
                </Typography>
                <Typography component="li" variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  特定の教育理念に共感している
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* ランキングを確認する */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#e9f2ea", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#1e782d" }}>
            実際に高校の偏差値を確認してみましょう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校偏差値を無料で検索できます。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#1e782d",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1e782d", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              高校偏差値ランキングを見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 関連記事 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#1e782d" }}>
            関連記事
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値と総合的な判断で最適な学校を選ぶ
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  偏差値の見方・使い方を徹底解説
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値とは何か、受験戦略にどう活かすか
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/mensetsu-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  面接試験の対策ガイド
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  よくある質問と効果的な対策方法
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
                <ArrowBackIcon sx={{ fontSize: "1.2rem", color: "#FF6F00" }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#FF6F00" }}>
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
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#FF6F00" }}>
                  高校偏差値ランキング
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: "1.2rem", color: "#FF6F00" }} />
              </Box>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
