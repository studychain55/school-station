import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#1e782d", mb: 2, scrollMarginTop: 80 }} id={id}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3, ml: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#1e782d", mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function KoukouSeisekiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "内申点の仕組みと上げ方｜高校受験に必要な評定平均と内申点の目安" },
  ];

  const faqItems = [
    {
      question: "内申点とは何ですか？",
      answer: "内申点は、中学1年生から3年生までの成績をまとめたもので、高校受験の合否判定に大きな影響を与えます。通常、9教科（国語、数学、英語、理科、社会、音楽、美術、保健体育、技術家庭）の5段階評価を記録され、合計45点満点です。高校によって内申点の計算方法や重視度が異なります。",
    },
    {
      question: "定期テストの成績と内申点の関係は？",
      answer: "定期テストの成績は内申点を決める最も重要な要素で、約60～70%の割合を占めます。定期テスト1～3の平均点が高いほど、その教科の評定も高くなりやすいです。ただし、テスト成績だけでなく、提出物や授業態度も評価対象となります。",
    },
    {
      question: "都道府県によって内申点の扱い方は異なりますか？",
      answer: "はい、大きく異なります。東京都では内申点と学力試験の比率が1:1ですが、大阪府では内申点の比率が高く、北海道では学力試験をより重視する傾向があります。また、内申点に1.5倍や2倍の倍率をかけるなど、計算方法も自治体によって異なります。",
    },
    {
      question: "中1・中2・中3の内申点で重みに違いはありますか？",
      answer: "多くの都道府県では、中3の内申点をより重視します。高校入試の判定では、中3の成績を2倍や1.5倍にする自治体が多いです。つまり、中3での成績向上が受験合否に大きく影響するため、最後まで気を抜かないことが重要です。",
    },
    {
      question: "内申点を短期間で上げることは可能ですか？",
      answer: "定期テスト対策を集中的に行えば、1回のテストで大幅な成績向上が期待できます。特に5段階評価で『3』から『4』への上昇は、勉強努力によって十分可能です。ただし『5』の評価獲得には、テスト満点近くと高い提出物クオリティが必要です。",
    },
    {
      question: "内申点が低い場合、高校受験に落ちやすいですか？",
      answer: "内申点が低い場合でも、学力試験で高得点を取れば逆転は可能です。特に学力試験の比率が高い自治体では、当日の試験成績が非常に重要です。ただし、内申点が低い場合は、より確実な学力対策が必須になります。",
    },
  ];

  return (
    <>
      <SEO
        title="内申点の仕組みと上げ方｜高校受験に必要な評定平均と内申点の目安 | School Station"
        description="高校受験で重要な内申点（調査書点）の計算方法、都道府県別の扱い方、内申点を上げるための具体的な勉強方法を解説。志望校別の必要内申点の目安も紹介。"
        canonical="/column/koukou-seiseki/"
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
            "headline": "内申点の仕組みと上げ方｜高校受験に必要な評定平均と内申点の目安",
            "description": "高校受験で重要な内申点（調査書点）の計算方法、都道府県別の扱い方、内申点を上げるための具体的な勉強方法を解説。志望校別の必要内申点の目安も紹介。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((bc, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": bc.label,
              "item": bc.href ? `https://school-station.com${bc.href}` : undefined,
            })).filter((item) => item.item !== undefined || item.position === breadcrumbs.length),
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            内申点の仕組みと上げ方
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            高校受験に必要な評定平均と内申点の目安、都道府県別の扱い方の違いを完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="内申点（調査書点）とは" id="definition">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            内申点（調査書点）は、中学3年間の成績評価をまとめた数値で、高校入試の合否判定に大きな影響を与えます。一般的に9教科（国語、数学、英語、理科、社会、音楽、美術、保健体育、技術家庭）の5段階評価の合計で計算され、最高45点となります。多くの高校では、学力試験の成績と内申点を組み合わせて合否を判定するため、内申点を上げることは受験対策の重要な一部です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>9教科の評定合計</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>各教科5段階評価×9教科＝45点満点。全ての教科が高校入試対象であり、得意教科だけでなく苦手教科の成績向上も重要です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>高校入試での重要性</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校によって内申点と学力試験の比率が異なります。内申点の比率が高い高校では、内申点対策がより重要になります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>定期テスト重視</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>各教科の評定の60～70%は定期テストの成績で決まります。つまり、内申点を上げるにはまず定期テスト対策が不可欠です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>その他の評価項目</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>提出物、授業態度、出席率、課題提出状況なども評定に含まれます。日常の学習習慣が評定に大きく影響します。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="内申点の計算方法" id="calculation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            内申点は5段階評価を合計する単純な方法ですが、都道府県や高校によって計算方法が異なります。また、各教科の評定を決める基準も、学校によって若干の違いがあります。
          </Typography>

          <SubSection title="基本的な計算方法">
            <TableContainer component={Paper} sx={{ mb: 3, border: "1px solid #bcd7c0" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1e782d" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>教科</TableCell>
                    <TableCell align="center" sx={{ color: "#fff", fontWeight: 700 }}>評定（5段階）</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>評定を決める要素</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>国語</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>定期テスト（60%）、提出物・授業態度（40%）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>数学</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>定期テスト（70%）、提出物・授業態度（30%）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>英語</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>定期テスト（60%）、リスニング（15%）、その他（25%）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>理科</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>定期テスト（65%）、実験・提出物（35%）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>社会</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>定期テスト（60%）、課題・授業態度（40%）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>実技4教科</TableCell>
                    <TableCell align="center">1～5</TableCell>
                    <TableCell>実技試験（50%）、授業態度・参加度（50%）</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                上記の比率は学校によって異なりますが、一般的なパターンです。各学校の評定方法は学期ごとに説明されるため、学校から配布される資料を確認することが重要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="5段階評定の基準">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>5（優）：</strong>テスト平均90点以上、提出物の完成度が高い、授業で積極的に発言・参加している
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>4（良）：</strong>テスト平均80～89点、提出物の品質が良好、授業態度が積極的
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>3（可）：</strong>テスト平均70～79点、提出物は提出されている、授業態度は普通
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>2（不可）：</strong>テスト平均60～69点、提出物の未提出がある、授業態度に課題あり
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>1（最低）：</strong>テスト平均60点未満、提出物未提出が多い、授業態度に大きな問題あり
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="都道府県による内申点の扱い方の違い" id="prefectures">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入試での内申点の扱い方は都道府県によって大きく異なります。内申点と学力試験の比率、倍率、計算方法の違いを理解することは、各地域の入試対策に不可欠です。
          </Typography>

          <SubSection title="東京都の内申点制度">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              東京都では、内申点と学力試験（5教科×100点）の比率が1:1です。中学3年間の成績（各学期3回）が記録され、合計45点×2倍で換算されます。つまり、内申点（最高90点）と学力試験（最高500点）の合計で合否が決まります。
            </Typography>
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                内申点の比率が高いため、定期テスト対策と日常学習が受験合否に大きく影響します。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="大阪府の内申点制度">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              大阪府では、中学3年間の内申点（9教科×5段階）が記録されます。内申点の扱い方は高校や学科によって異なり、内申点を1.5倍～2倍にする高校も多くあります。学力試験（5教科×100点）との比率は、学校によって大きく異なります。
            </Typography>
          </SubSection>

          <SubSection title="北海道の内申点制度">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              北海道では、学力試験（5教科）の比率が高く、内申点の影響は比較的小さいです。学力試験での得点が合否を大きく左右するため、受験直前の学力対策がより重要になります。
            </Typography>
          </SubSection>
        </Section>

        <Section title="内申点を上げるための具体的な方法" id="improvement">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            内申点を確実に上げるには、定期テスト対策、提出物の完成度向上、授業態度の改善など、複数のアプローチが必要です。それぞれの要素に対して、具体的な行動を起こすことが成功の鍵になります。
          </Typography>

          <SubSection title="定期テスト対策（テスト成績：60～70%）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>テスト2～3週間前から準備を開始：</strong>テスト日程を確認したら、計画表を作成して計画的に勉強を進めましょう。先延ばしを避けることが成功の第一歩です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教科書とワークの繰り返し学習：</strong>各教科のワークを3回以上解くことで、知識が定着します。わからない問題は、何度も繰り返し解いて理解を深めましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>過去問や模試の活用：</strong>前年度のテスト問題や塾の模試を活用することで、出題傾向を把握できます。得意・不得意な分野を明確にしましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>わからない部分は早めに質問：</strong>テスト1週間前には、分からない部分を先生に質問して解決しておきましょう。疑問点をテストに持ち込まないことが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="提出物対策（提出物・課題：20～30%）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>提出期限厳守：</strong>未提出は内申点を大きく下げます。提出物カレンダーを作成して、期限を厳管しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>丁寧で正確な提出物：</strong>ワークは解きっぱなしではなく、間違い箇所を修正してから提出しましょう。丁寧な字で作成することも評価に影響します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>課題を完全に理解した上で提出：</strong>提出物は、単なる「義務」ではなく、学習成果を示すものです。すべての問題を理解した上で提出することが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="授業態度対策（授業態度・発言：10～20%）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>毎日の授業に集中：</strong>スマートフォンを見ない、居眠りしないなど、基本的な授業態度が評定に影響します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>積極的な発言・発表：</strong>授業中に質問や発言をすることで、先生の評価が高まります。分からないことは、遠慮なく質問しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ノート作成の工夫：</strong>見やすく、整理された字でノートを作成することで、学習効果が高まり、先生の評価も向上します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="中1～中3の内申点の重みの違い" id="grades">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            多くの都道府県では、中学3年間の内申点すべてを考慮しますが、中3の成績をより重視する傾向があります。これは、最後の1年間の頑張りが受験合否に最も大きく影響することを意味します。
          </Typography>

          <TableContainer component={Paper} sx={{ mb: 3, border: "1px solid #bcd7c0" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#1e782d" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>学年</TableCell>
                  <TableCell align="center" sx={{ color: "#fff", fontWeight: 700 }}>内申点への影響</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>重要度</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>中1</TableCell>
                  <TableCell align="center">通常比率（1倍）</TableCell>
                  <TableCell>基礎学力の確立が目的。3年間の基盤となります。</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>中2</TableCell>
                  <TableCell align="center">通常比率（1倍）</TableCell>
                  <TableCell>学習難度が上がります。このとき頑張る習慣が中3に活かされます。</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>中3</TableCell>
                  <TableCell align="center">高倍率（1.5～2倍）</TableCell>
                  <TableCell>受験年度のため、最も重視されます。最後の追い込みで内申点を上げる余地があります。</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D" }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
              重要なポイント：中1・中2の内申点が低い場合でも、中3で頑張れば内申点を上げることは十分可能です。特に中3での成績向上が受験合否を左右する要因になるため、最後まで気を抜かないことが大切です。
            </Typography>
          </Box>
        </Section>

        <Section title="志望校別の必要内申点の目安" id="targets">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            志望校によって必要な内申点が異なります。以下は一般的な目安ですが、学校によって基準が異なるため、学校説明会で確認することが重要です。
          </Typography>

          <SubSection title="進学校（大学進学を想定）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>必要内申点：38～45点</strong>（45点満点）
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                進学校では、ほぼ全教科で『4』以上の評定が必要です。特に英語・数学・国語などの基幹教科で『5』を目指すことが重要です。内申点が低い場合は、学力試験で高得点を取る必要があります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="中位レベルの公立高校">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>必要内申点：30～37点</strong>（45点満点）
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                ほぼ全教科で『3』以上、得意教科で『4』以上が必要です。学力試験と内申点のバランスが合否を決めます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="商業・工業などの実業高校">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>必要内申点：25～35点</strong>（45点満点）
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                実業高校では、内申点の基準が比較的低めです。実技教科の成績や適性も重視される傾向があります。
              </Typography>
            </Box>
          </SubSection>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D" }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
              注意：上記の目安は一般的なパターンです。志望校の入試要項を確認し、正確な必要内申点を把握することが重要です。
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <FAQ items={faqItems} />

        {/* Back to Column */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E0E0E0" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#1e782d", fontWeight: 600, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
              ← コラム一覧に戻る
            </Typography>
          </Link>
        </Box>
      </Container>
    </>
  );
}
