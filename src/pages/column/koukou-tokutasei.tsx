import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Helper Components
function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#0D47A1", mb: 2, scrollMarginTop: 80 }} id={id}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3, ml: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#1565C0", mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function KoukouTokutaseiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法" },
  ];

  const faqItems = [
    {
      question: "特待生と奨学金の違いは何ですか？",
      answer: "特待生は学校が優秀な学生を入学時に認定し、授業料を全額または一部免除する制度で、減額は入学前に決定します。奨学金は返済義務がない給付型と返済が必要な貸与型があり、在学中に申請して受け取ります。特待生は学校独自の制度で、奨学金は国や自治体、民間機関などが提供する制度です。",
    },
    {
      question: "特待生に選ばれるための学力基準はどのくらい必要ですか？",
      answer: "学力基準は高校によって異なります。進学重点校なら模試で上位10～20%、地域の強豪校なら上位30～40%程度の学力が目安です。詳細な基準は高校のウェブサイトやパンフレット、学校説明会で確認できます。事前に志望校の基準を調べ、合格可能性を判断することが大切です。",
    },
    {
      question: "特待生の条件を維持できなかった場合はどうなりますか？",
      answer: "在学中に成績が低下した場合、特待生の資格を失う可能性があります。多くの高校では1年ごとに成績をチェックし、基準を下回ると認定を取り消されます。その場合、それ以降の授業料は通常通り支払う必要があります。条件の詳細は入学前に確認しておくことが重要です。",
    },
    {
      question: "複数の奨学金を同時に受け取ることはできますか？",
      answer: "制度によって異なります。日本学生支援機構の奨学金と都道府県の奨学金は併給が可能です。ただし給付額の合計に上限が設けられていることもあります。複数の奨学金申請を検討している場合は、各機関に問い合わせて併給可能性を確認することが大切です。",
    },
    {
      question: "高卒後は奨学金の返済義務がありますか？",
      answer: "給付型奨学金は返済義務がありません。貸与型は返済義務があります。日本学生支援機構の奨学金は卒業後に返済義務が生じ、返済期間は通常20年程度です。借り入れ前に返済計画を立て、返済シミュレーションを確認することが大切です。",
    },
    {
      question: "低所得世帯向けの支援制度はありますか？",
      answer: "あります。国の高等学校等就学支援金制度は、一定の所得要件を満たす世帯を対象に月額9,900～33,000円を支給します。さらに都道府県独自の補助制度、返済不要の給付型奨学金など、多くの支援制度があります。自分の家計状況に合った制度を確認し、積極的に活用しましょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法 | School Station"
        description="私立高校の特待生制度と奨学金制度の種類・条件・申請方法を解説。授業料免除・一部免除の基準となる学力・スポーツ成績、高校の奨学金と都道府県の支援制度も紹介。"
        canonical="/column/koukou-tokutasei/"
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
            "headline": "高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法",
            "description": "私立高校の特待生制度と奨学金制度の種類・条件・申請方法を解説。授業料免除・一部免除の基準となる学力・スポーツ成績、高校の奨学金と都道府県の支援制度も紹介。",
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校の特待生・奨学金制度
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            私立高校の授業料を減らす特待生制度と奨学金の種類、申請方法を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="特待生制度とは" id="tokutasei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            特待生制度は、学力やスポーツ、芸術などで優秀な学生を入学前に認定し、授業料を全額または一部免除する私立高校独自の制度です。私立高校の授業料は年間40万～100万円程度と高額ですが、特待生に選ばれれば、この負担を大幅に軽減できます。多くの私立高校では、入試成績や模試の成績、部活動の実績に基づいて特待生を認定します。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>全額特待生（S特）</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>授業料全額免除。在学中、毎年成績基準をクリアすれば免除が継続されます。最も手厚い支援です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>半額特待生（A特）</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>授業料の50%を免除。S特より基準はやや緩和されており、多くの高校で数多くの生徒が対象になります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>部分特待生（B特）</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>授業料の25％免除、または入学金免除。入学金のみ免除される場合もあります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>入学金減免</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>授業料は対象外ですが、入学金（20～30万円）のみ全額または一部免除される制度です。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="特待生に選ばれる主な条件" id="conditions">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            特待生の認定基準は高校によって異なりますが、一般的には以下の要素が評価されます。複数の要素を組み合わせて判定する高校が多く、学力だけでなく、スポーツや芸術の実績、生活態度も重視されます。
          </Typography>

          <SubSection title="学業成績による認定">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期テスト成績</strong> — 中学での成績評価。平均4.5以上の高い成績が目安。進学校ほど基準は厳しくなります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>模試成績</strong> — 塾主催や河合塾など大手模試での偏差値60以上。高い偏差値ほど特待生認定の可能性が上がります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高校入試成績</strong> — 推薦入試や一般入試の成績により、入学後に特待生が決定される場合もあります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="スポーツ実績による認定">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>全国大会入賞</strong> — 陸上、野球、バスケットボール、剣道など、全国大会での入賞経験がある選手。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>都道府県大会出場</strong> — 都道府県大会での上位入賞。強豪校の場合、ブロック大会出場程度で対象になることもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>記録・成績基準</strong> — 走幅跳で6m以上など、特定の競技で定められた基準記録を達成している場合。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="芸術実績による認定">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽コンクール入賞</strong> — 全日本学生音楽コンクールなど国際的なコンクール、全国規模の音楽コンクールでの受賞。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術・デザイン受賞</strong> — 展覧会での入選、美術系の全国コンテストでの受賞経験がある場合。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検・漢検などの資格</strong> — 英検2級以上、漢検2級以上など、高度な資格取得者が対象になることもあります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高校の奨学金制度の種類" id="scholarships">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            特待生と異なり、奨学金は入学後に申請して受け取る制度です。給付型（返済不要）と貸与型（返済必要）の2種類があり、家計状況や学業成績が基準になります。複数の奨学金を組み合わせることで、さらに負担を軽減できます。
          </Typography>

          <SubSection title="給付型奨学金（返済不要）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                給付型奨学金は返済義務がないため、家計が困窮している世帯や成績優秀者向けの奨学金として有効です。月額3,000～20,000円程度が多く、年間で数十万円の支援が受けられます。ただし給付額は家計基準や成績基準を満たす必要があり、選考が厳しい傾向にあります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="貸与型奨学金（返済必要）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                貸与型奨学金は卒業後に返済する必要があります。月額1万～12万円程度が一般的で、給付型より基準が緩和されています。返済は通常20年程度の長期に渡り、月額数千円の返済が続きます。利息がつく場合と無利息の場合があるため、事前に確認することが大切です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="都道府県の私立高校補助制度・就学支援金" id="public-support">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            国や都道府県からも、私立高校生向けの支援制度があります。特に低所得世帯向けの支援が充実しており、特待生制度と組み合わせることで、授業料をさらに削減できます。申請には期限があるため、早めに確認することが重要です。
          </Typography>

          <SubSection title="国の高等学校等就学支援金制度">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>支給額</strong> — 世帯年収約900万円未満の家庭が対象。月額9,900～33,000円を支給（世帯年収により異なる）。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>申請方法</strong> — 学校の進路指導室で申請書をもらい、必要書類（課税証明書など）を提出します。4月に申請する場合が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>継続条件</strong> — 毎年申請・更新が必要。家計状況や学業成績により、給付対象外になる可能性があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="都道府県の私立高校補助金">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの都道府県は、国の就学支援金に加えて独自の補助金を支給しています。例えば、東京都は月額1,000～19,800円の補助金を支給（所得により異なる）。各都道府県により制度が異なるため、お住まいの自治体に確認することが必要です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="特待生を目指すための準備と申請タイミング" id="preparation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            特待生に選ばれるには、入試前からの準備が重要です。多くの高校では、入試時点での成績が特待生認定に反映されるため、対策の開始時期や方法を工夫する必要があります。
          </Typography>

          <SubSection title="中学3年生の夏までにやること">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望高校の特待生制度を調べる</strong> — パンフレット、ウェブサイト、学校説明会で、特待生の基準や種類、現在の給付状況を確認します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期テストの成績を上げる</strong> — 特待生の学力基準に届くよう、中学の定期テストで高得点を目指します。平均4.5以上を目安に。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>模試を受験する</strong> — 大手塾や予備校の模試で偏差値60以上を目指します。複数回受験して着実に成績を上げることが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="秋から冬の入試対策期">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦入試で高い成績を取る</strong> — 推薦入試の成績が特待生認定に直結する高校も多いため、推薦入試を視野に入れる場合は入試対策を集中させます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>一般入試に向けた学習</strong> — 一般入試での高得点が特待生認定の重要な基準となります。英数国を中心に実力を高めます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="入学後の奨学金申請">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>4月中の申請が鉄則</strong> — 国の就学支援金は4月に申請する必要があります。申請期限を過ぎると遡及支給されない場合があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校の奨学金情報説明会に参加</strong> — 入学後、学校は奨学金制度の説明会を開催します。複数の奨学金の併給可能性も確認できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="特待生の条件を維持するための注意点" id="maintenance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            特待生に選ばれても、在学中に条件を満たさなくなると、認定が取り消される場合があります。特待生資格の維持には、継続的な努力と注意が必要です。
          </Typography>

          <SubSection title="成績維持の重要性">
            <Box sx={{ bgcolor: "#FFEBEE", p: 2.5, borderRadius: 1, border: "1px solid #FFCDD2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                ほとんどの高校では、特待生は毎年の成績をチェックして認定を更新します。成績が基準を下回った場合、特待生資格を失い、それ以降の授業料は通常通り支払う必要があります。特に高2・高3になると、大学受験対策で成績が変動する可能性があるため注意が必要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="生活態度の維持">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>欠席・遅刻を減らす</strong> — 出席状況が悪い場合、特待生資格が失われることがあります。定期的な出席が基本です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>問題行動を避ける</strong> — 懲罰や指導を受けた場合、特待生資格の取り消しに至る可能性があります。規律ある学校生活を心がけましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>家計状況の確認</strong> — 奨学金では、年1回家計を確認される場合があります。家計が改善した場合、給付が打ち切られることもあります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        {/* FAQ */}
        <Box sx={{ my: 5 }}>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1565C0", fontWeight: 600, cursor: "pointer", "&:hover": { color: "#0D47A1" } }}>
              <ArrowBackIcon sx={{ fontSize: "1.2rem" }} />
              コラム一覧に戻る
            </Box>
          </Link>
          <Typography variant="caption" sx={{ color: "#666" }}>
            最終更新：{new Date("2026-04-07").toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
