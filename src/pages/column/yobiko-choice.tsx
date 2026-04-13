import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function YobikoChoicePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校受験の塾・予備校の選び方" },
  ];

  const faqItems = [
    {
      question: "個別指導と集団指導、どちらが向いていますか？",
      answer: "個別指導は自分のペースで学べ、苦手科目の重点対策に向いています。集団指導は周囲の刺激を受けられ、クラス全体で受験への士気が高まりやすいメリットがあります。自分の学習スタイルと目標に合わせて選びましょう。",
    },
    {
      question: "オンライン塾は本当に効果ありますか？",
      answer: "自宅で集中できる環境が作れれば、オンライン塾は非常に効果的です。ただし、自己管理能力が必要です。通学時間がかからないメリット、質問しやすさなどを考慮して判断してください。",
    },
    {
      question: "塾に通い始めるのは中何年がベストですか？",
      answer: "一般的には、中1から基礎を固める、中2で本格的に対策を始める、中3で総復習と受験対策をするのが標準的です。ただし個人差があるため、学習状況を見て判断することが大切です。",
    },
    {
      question: "費用を抑えて効果を出すコツはありますか？",
      answer: "夏期講習と直前対策に絞る、映像授業の活用、グループ指導を選ぶなど、費用を抑える方法があります。また、多くの塾が春キャンペーンや割引制度を実施しているため、活用しましょう。",
    },
    {
      question: "体験授業は受けた方がいいですか？",
      answer: "必ず受けるべきです。講師との相性、授業の進め方、教室の雰囲気など、実際に体験することで、その塾が自分に合っているか判断できます。複数の塾を比較することをお勧めします。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校受験の塾・予備校の選び方｜個別指導vs集団指導 | School Station"
        description="高校受験に向けた塾・予備校選びの完全ガイド。個別指導と集団指導の特徴、オンライン塾の活用、コスト比較、体験授業の活用法を解説します。"
        canonical="/column/yobiko-choice/"
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
            "headline": "高校受験の塾・予備校の選び方｜個別指導vs集団指導",
            "description": "高校受験に向けた塾・予備校選びの完全ガイド。個別指導と集団指導の特徴、コスト比較を解説します。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校受験の塾・予備校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            個別指導と集団指導の比較。自分に最適な学習スタイルを見つけるガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="塾・予備校選びが重要な理由" id="importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校受験の成功は、自分に合った学習環境を見つけることが大きく影響します。塾や予備校の選択は、単なる「勉強の場所」ではなく、「受験戦略の要」となります。
          </Typography>
          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              間違った塾選びは、時間と費用の無駄につながるだけでなく、勉強へのモチベーション低下につながる可能性があります。自分の学習スタイル、目標、予算をしっかり把握した上で、慎重に選ぶことが大切です。
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="個別指導 vs 集団指導｜特徴と選び方" id="individual-vs-group">
          <SubSection title="個別指導の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              個別指導は、生徒1～2人に対して講師が1人つく形式です。生徒のペースに合わせた学習が可能で、苦手科目の集中対策に最適です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>メリット</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分のペースで学習でき、質問しやすい。苦手科目の重点対策が可能。講師との相性が大切。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>デメリット</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    費用が高い（月3～5万円程度）。講師の質にばらつきがある場合がある。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>向いている人</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    苦手科目が限定的、自己管理能力がある程度ある、質問が得意な人。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="集団指導の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              集団指導は、複数の生徒が同じクラスで一緒に学ぶ形式です。周囲の刺激を受けながら、共に受験へ向けて取り組めます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>メリット</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    費用が安い（月2～3万円程度）。周囲の刺激で勉強のモチベーションが上がる。友人ができることもある。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>デメリット</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分のペースで学べない。質問がしにくい場合がある。苦手科目の重点対策が難しい。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>向いている人</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全科目をバランスよく学びたい、周囲の刺激が好き、費用を抑えたい人。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="オンライン塾・映像授業の活用" id="online-tutoring">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            オンライン塾や映像授業は、近年人気が高まっています。通学時間がかからず、自宅で集中して学べるメリットがあります。
          </Typography>
          <SubSection title="オンライン塾のメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  通学時間がかからない（往復2時間の時間削減）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  費用が安い（月1～2万円程度）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  自分のペースで学べる（動画は何度でも視聴可能）
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  柔軟なスケジュール調整が可能
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="オンライン塾のデメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  自己管理能力が必須（サボりやすい）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  質問しにくい（チャットサポートがあっても返答に時間がかかる）
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  モチベーション維持が難しい（周囲の刺激がない）
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="塾のコスト比較" id="cost-comparison">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            塾にかかる費用は、形式によって大きく異なります。以下は、中3の1年間の目安です。
          </Typography>
          <Box sx={{ overflowX: "auto", mb: 3 }}>
            <Box sx={{ minWidth: 500, bgcolor: "#F5F9FF", p: 2, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, mb: 2, fontWeight: 600, fontSize: "0.9rem" }}>
                <Typography sx={{ fontWeight: 700 }}>形式</Typography>
                <Typography sx={{ fontWeight: 700 }}>月額（目安）</Typography>
                <Typography sx={{ fontWeight: 700 }}>年間（目安）</Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, mb: 2, borderBottom: "1px solid #bcd7c0", pb: 2 }}>
                <Typography variant="body2">集団指導</Typography>
                <Typography variant="body2">2～3万円</Typography>
                <Typography variant="body2">25～35万円</Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, mb: 2, borderBottom: "1px solid #bcd7c0", pb: 2 }}>
                <Typography variant="body2">個別指導</Typography>
                <Typography variant="body2">4～6万円</Typography>
                <Typography variant="body2">50～70万円</Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
                <Typography variant="body2">オンライン塾</Typography>
                <Typography variant="body2">1～2万円</Typography>
                <Typography variant="body2">12～25万円</Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            この他に、春期講習・夏期講習・冬期講習などの特別講座で、30～50万円追加でかかることもあります。受験直前の追い込み講座も費用がかさみます。予算に応じて、無理のない塾選びをしましょう。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="塾選びの実践的なステップ" id="practical-steps">
          <Box sx={{ bgcolor: "#FFF3E0", p: 3, borderRadius: 1, border: "1px solid #FFE0B2" }}>
            <List sx={{ m: 0 }}>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 1. 自分の学習スタイルを診断する
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    自分のペースを大切にしたいなら個別指導、周囲の刺激が欲しいなら集団指導。通学時間を節約したいならオンライン。自分の性格と環境に合った形式を選びましょう。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 2. 予算を決める
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    月額費用と夏期講習などの特別講座を含めた総予算を家族で相談。無理のない範囲で決めることが大切です。複数の塾の見積もりを取ることをお勧めします。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 3. 複数の塾を比較検討
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    最低3～5つの塾について、カリキュラム、講師、費用、サポート体制を比較。オンラインでの無料説明会や資料請求を活用しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 4. 体験授業を受ける
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    候補の塾すべてで体験授業を受けましょう。講師との相性、授業の進め方、教室の雰囲気を実際に感じることが重要です。体験後に質問時間があるか確認。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 5. 学校の教科書・カリキュラムとの相性を確認
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    塾で学ぶ内容が、学校の授業と相乗効果を生み出すか確認。学校の定期テスト対策もしてくれるか、進度は学校と合っているか等を確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="塾の選択と学校の学習の相乗効果" id="synergy">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            多くの生徒が塾に通っていますが、塾だけに頼るのではなく、学校の授業との相乗効果を意識することが大切です。
          </Typography>
          <SubSection title="学校の授業を大切にする">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校の授業が基本</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    塾は補助的な役割。学校の授業を真摯に受け、内申点を確保することが第一です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>定期テスト対策</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    塾の定期テスト対策と学校の学習を組み合わせることで、より効果的な学習ができます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* ランキングを確認する */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#e9f2ea", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#1e782d" }}>
            志望校の偏差値をチェックしましょう
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
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/study-methods/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  高校受験に向けた効果的な勉強法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  教科別攻略と時間管理のコツ
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
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験校を決める5つの基準
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/naishin-up/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  内申点の上げ方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  中学生が今すぐできる具体的な方法
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/kokosei-baito/" style={{ textDecoration: "none" }}>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>前の記事</Typography>
              </Box>
            </Paper>
          </Link>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d" }}>
                <Typography sx={{ fontWeight: 600 }}>コラムに戻る</Typography>
              </Box>
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
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#1e782d" }}>
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
