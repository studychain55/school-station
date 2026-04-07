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

export default function KoukouMathPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校数学の勉強法｜数学が苦手な人のための効率的な学習方法" },
  ];

  const faqItems = [
    {
      question: "高校数学で最初につまずきやすい単元は何ですか？",
      answer: "多くの生徒が最初につまずくのは「数と式」「二次関数」「三角関数」です。特に中学数学と高校数学の難度のギャップが大きい二次関数で成績が低下する生徒が多くいます。基本概念の理解を重視し、繰り返し練習することが大切です。",
    },
    {
      question: "数学が苦手でも公立大学に合格できますか？",
      answer: "できます。公立大学の中には数学の配点が低い大学や、文系科目が中心の学部もあります。また推薦入試・総合型選抜では数学が不要な場合もあります。自分の適性に合わせた進路選択が重要です。",
    },
    {
      question: "数ⅠAと数ⅡBはどう違いますか？",
      answer: "数ⅠAは高1の基礎段階で、二次関数・三角比・確率・整数など、応用の土台となる内容です。数ⅡBは高2で学ぶやや応用的な内容で、指数対数・三角関数・微分積分の基礎などが含まれます。数ⅠAの理解があって初めて数ⅡBが理解できます。",
    },
    {
      question: "問題集はどのくらいの期間で1冊完成させるべきですか？",
      answer: "レベルと科目によって異なりますが、基礎問題集は1～2か月、標準問題集は2～3か月、応用問題集は3～4か月が目安です。重要なのは、解く速度より「理解して解く」ことです。焦らず確実に理解を深めることを優先しましょう。",
    },
    {
      question: "共通テスト数学で高得点を取るコツは何ですか？",
      answer: "共通テストは時間が厳しいため、計算速度と判断力が重要です。本試験形式の模試を定期的に受け、時間内に解く練習が必須です。また、問題文を正確に読み取る力も必要。過去問を何度も解くことが最大の対策です。",
    },
    {
      question: "数学が苦手な場合、参考書と問題集はどう使い分けますか？",
      answer: "参考書は「なぜそうなるのか」を理解するために使い、問題集は「実際に解けるか」を確認するために使います。参考書で単元全体を理解した後、問題集で練習する流れが効果的です。参考書だけ読むのではなく、必ず問題集で演習を重ねることが大切です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校数学の勉強法｜数学が苦手な人のための効率的な学習方法 | School Station"
        description="高校数学が苦手な人のための効率的な学習法を解説。数ⅠA・数ⅡB・数ⅢCの特徴、基礎から応用への勉強ステップ、問題集の選び方、受験数学の対策法を紹介。"
        canonical="/column/koukou-math/"
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
            "headline": "高校数学の勉強法｜数学が苦手な人のための効率的な学習方法",
            "description": "高校数学が苦手な人のための効率的な学習法を解説。数ⅠA・数ⅡB・数ⅢCの特徴、基礎から応用への勉強ステップ、問題集の選び方、受験数学の対策法を紹介。",
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
            高校数学の勉強法
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            数学が苦手な人でも実践できる効率的な学習法と、段階的なステップアップ方法を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校数学が苦手になる主な原因" id="reasons">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校数学で苦手意識を持つ生徒は多くいますが、その原因は大きく分けて3つあります。中学数学との難度のギャップ、基本概念の理解不足、そして解法パターンの習得不足です。これらの原因を認識することが、効率的な学習への第一歩となります。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>難度のギャップ</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>中学数学は計算が中心ですが、高校数学は「なぜそうなるのか」という理論的な理解が重視されます。このギャップに対応できず、成績が急低下する生徒が少なくありません。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>基本概念の理解不足</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>「解き方は知っているが、なぜそれで解けるのか理解していない」という状態では、応用問題に対応できません。基本の確実な理解が必須です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>解法パターンの習得不足</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>数学は多くの解法パターンがあり、それぞれを身につける必要があります。パターン習得なしでは、初見問題に対応できません。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>時間管理の失敗</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校では学習量が急増します。部活や他教科の学習と両立できず、数学の勉強時間が確保できない生徒も多いです。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="数ⅠA・数ⅡB・数ⅢCの特徴と難易度" id="courses">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校数学は3つの主要科目に分かれており、それぞれに異なる特徴と難易度があります。各科目の特徴を理解することで、効率的な学習計画が立てられます。
          </Typography>

          <SubSection title="数学ⅠA（高1で学習）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                数ⅠAは高校数学の基礎段階です。数と式、二次関数、三角比が中核となり、確率や整数の性質も学びます。この段階での理解が後の学習に大きく影響するため、特に重要です。難易度は中学との難度差を感じやすい段階ですが、じっくり基礎を固めることが成功の鍵です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="数学ⅡB（高2で学習）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                数ⅡBは数ⅠAの発展段階です。指数・対数、三角関数（より高度な内容）、微分・積分の基礎が含まれます。難易度は数ⅠAより上がり、多くの生徒がここで成績が低下します。数ⅠAの確実な理解があって初めて学習が進みます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="数学ⅢC（高3で学習）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                数ⅢCは理系志望者向けで、複素数平面、微分・積分（高度な内容）、数列などを学びます。難易度が最も高く、大学入試でも最難関科目とされています。受験勉強の中心となる科目です。数ⅡBの確実な理解が必須です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="基礎固めから応用への勉強ステップ" id="steps">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            効率的に成績を上げるには、計画的に段階を踏む必要があります。基礎から応用へと進む正しいステップを踏むことで、短期間での大幅な成績向上が可能です。
          </Typography>

          <SubSection title="ステップ1：基本概念の理解（1か月～2か月）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>参考書で単元全体を把握</strong> — まず参考書や授業で単元全体の理論を学び、「なぜそうなるのか」を理解します。図解が多い参考書がおすすめです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>基本問題で確認</strong> — 理解した内容を、教科書の例題や基本問題で確認します。ここで完全に理解できていない場合は、参考書に戻って再学習します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>計算技能の習得</strong> — 繰り返し計算練習を行い、基本的な計算技能を定着させます。計算ミスを減らすことが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ2：解法パターンの習得（1か月～2か月）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>基礎問題集を繰り返す</strong> — 「黄チャート」「基礎問題精講」などの基礎問題集を、何度も繰り返し解きます。3回目までに完全に理解できるようにします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>解法を暗記ではなく理解</strong> — パターン習得の際、「なぜこの解法を使うのか」を常に意識します。丸暗記では応用問題に対応できません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期テスト対策で確認</strong> — 学校の定期テストで習った内容が確実に身についているかを確認します。定期テストは実践的な練習の場です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ3：応用問題への挑戦（2か月～3か月）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>標準問題集で発展的な内容へ</strong> — 「赤チャート」「標準問題精講」などで、基本パターンを組み合わせた応用問題に挑戦します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数の解法を学ぶ</strong> — 1つの問題を複数の方法で解く経験を積むことで、応用力が磨かれます。別解を見ることも重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>模試で実力を測定</strong> — 定期的に模試を受け、実際の試験形式での実力を測定します。模試の結果から改善点を見つけることが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ4：入試レベルの演習（3か月～）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望校の過去問に挑戦</strong> — 志望大学の過去問を解き、出題傾向を把握します。過去10年分を何度も解くことが有効です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>難問演習で最終調整</strong> — 「新数学演習」などの難問集で、最後の仕上げを行います。この段階は秋以降が目安です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>時間内に解く練習</strong> — 本番を意識し、制限時間内に問題を解く練習を重ねます。計算速度と判断力の向上が重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="問題集・参考書の選び方（レベル別）" id="materials">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学習段階に応じた適切な教材選びが、成績向上の大きな鍵となります。自分のレベルに合った教材を段階的に進めることが重要です。
          </Typography>

          <SubSection title="初学者向け（基礎段階）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「数学ⅠA基礎問題精講」など基礎精講シリーズ</strong> — 基本を徹底的に学べます。解説が詳しく、初学者に最適です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「黄チャート」</strong> — 基礎から標準レベルまで網羅しており、解説が丁寧です。挫折しにくい参考書です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教科書＋問題集</strong> — まずは学校の教科書で基本を学び、教科書の練習問題で確認するのも効果的です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="標準レベル（応用段階）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「青チャート」</strong> — 基礎から応用まで幅広く網羅。問題数も多く、パターン習得に最適です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「標準問題精講」</strong> — 基本から応用への橋渡けがうまく、実践的な力がつきます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「1対1対応の演習」</strong> — 標準問題と解法のバランスが良く、少問数で実力がつきます。時間が限られている場合におすすめです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="難問レベル（発展段階）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「赤チャート」</strong> — 難度が高く、最難関大学対策に適しています。ただし分量が多いため、時間に余裕がある場合に使用します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>「新数学演習」</strong> — 大学入試の難問を集めた問題集です。最難関大対策や数学を得意にしたい場合に最適です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望大学の過去問</strong> — 最終段階では、志望大学の過去問を何度も解くことが最も効果的です。出題傾向を把握できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="共通テスト・二次試験の数学対策" id="exam">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学入試では共通テストと個別の二次試験（記述試験）という2つの異なる形式があり、それぞれに適した対策が必要です。
          </Typography>

          <SubSection title="共通テスト数学の特徴と対策">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>出題形式の特徴：</strong>共通テストは3時間で数ⅠA（60分）と数ⅡB（60分）に分かれます。マーク方式で、計算量が多く、時間が限られているのが特徴です。初見の問題形式も多く含まれます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>対策方法：</strong>本試験形式の模試を定期的に受け、時間内に解く練習を重ねることが最重要です。公開されている過去問（2015年から）を何度も解き、出題傾向を把握します。計算速度の向上と、問題文の正確な読み取りが鍵です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="二次試験（記述型）の特徴と対策">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>出題形式の特徴：</strong>二次試験は記述型で、途中の過程も採点対象です。難度が高く、深い理解と応用力が必要です。大学によって出題傾向が異なります。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>対策方法：</strong>志望大学の過去問を10年分以上解き、出題傾向を徹底分析します。難問演習で応用力を磨き、採点官が理解しやすい解答を書く練習も重要です。参考書よりも、過去問での演習を優先します。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="数学が苦手な人に向いている入試方式" id="entrance-types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            数学が苦手でも、入試方式や進路選択を工夫することで、大学進学の道は多くあります。自分の適性に合わせた選択が重要です。
          </Typography>

          <SubSection title="推薦入試・総合型選抜">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校推薦型推薦入試</strong> — 定期テストの成績が良い場合、推薦で受験できます。数学の配点が低い大学・学部を選ぶことで、数学が苦手でも合格可能です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>総合型選抜</strong> — 小論文と面接で合否が決まり、数学が不要な場合が多いです。自分の強みをアピールできる選抜方式です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="数学配点が低い大学・学部">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>文系学部</strong> — 経済学部や社会学部でも数学が配点に含まれない場合があります。大学の入試科目を確認し、数学が不要または低配点の学部を選びましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高卒認定試験＋大学編入</strong> — 高卒認定試験で数学を避け、大学に編入する方法もあります。ただし編入試験は競争が激しい点に注意です。
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
