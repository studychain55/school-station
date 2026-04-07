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

export default function KoukouEnglishPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策" },
  ];

  const faqItems = [
    {
      question: "英語4技能とは何ですか？",
      answer: "英語4技能は、「読む（Reading）」「聞く（Listening）」「書く（Writing）」「話す（Speaking）」の4つの能力です。従来の教育は読む・聞く中心でしたが、グローバル化に対応するため、書く・話す能力も重視されるようになりました。大学入試でも4技能を評価する試験が増えています。",
    },
    {
      question: "大学入学共通テストで英語はどのように出題されていますか？",
      answer: "大学入学共通テストの英語（リーディング）は、従来のセンター試験より読解力重視に変わり、実用的な文章（メール、ウェブサイト、広告など）が多く出題されます。また多くの大学が英検やTEAPなどの外部試験スコアを活用しており、リスニング能力も重要です。",
    },
    {
      question: "英検2級を持っていると大学受験で有利ですか？",
      answer: "はい、多くの大学が推薦入試や総合型選抜で英検2級以上を出願資格にしたり、一般入試でスコア加算の対象にしています。特に難関大学ほど英検準1級以上を求める傾向があります。ただし試験方式や募集要項は大学により異なるため、志望校の条件を確認することが大切です。",
    },
    {
      question: "高校でのオールイングリッシュ授業は実際に行われていますか？",
      answer: "はい、文部科学省の指針により、高1・高2の英語授業は原則オールイングリッシュで実施されています。ただし実態は学校により異なり、日本語を交える学校も多くあります。進学校やグローバルコース設置校ほど、より徹底したオールイングリッシュ教育を行っています。",
    },
    {
      question: "スピーキング対策として何をやればよいですか？",
      answer: "高校の授業では、オーラルコミュニケーションやALTとの会話練習が主です。個人的には、英検やTEAP、GTECなどのスピーキングテストに向けて勉強することが効果的です。また YouTube で英語動画を見たり、スマートフォンアプリで音声練習することも有用です。",
    },
    {
      question: "英語が得意な高校に進学するメリットは何ですか？",
      answer: "英語教育に力を入れている高校では、留学プログラムが充実していたり、英検取得率が高いことが多いです。また、大学入試で英検スコアを活用する際に、高い級取得者が多い学校では、学校の指導体制やサポートが整備されていて有利になる場合があります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策 | School Station"
        description="高校の英語教育の変化と大学入試への影響を解説。英語4技能（読む・聞く・書く・話す）重視の流れ、大学入学共通テストの英語問題の特徴、高校での英語力を伸ばす方法を紹介。"
        canonical="/column/koukou-english/"
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
            "headline": "高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策",
            "description": "高校の英語教育の変化と大学入試への影響を解説。英語4技能（読む・聞く・書く・話す）重視の流れ、大学入学共通テストの英語問題の特徴、高校での英語力を伸ばす方法を紹介。",
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
            高校の英語教育の変化
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            英語4技能重視の流れと大学入試への対応方法を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="英語4技能重視になった背景と変化" id="background">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            日本の英語教育は、2013年の学習指導要領改訂以降、大きく転換しました。従来は「読む」「聞く」中心の受動的な学習でしたが、グローバル化する世界で活躍できる人材育成を目指し、「話す」「書く」を含めた4技能全体の育成へシフトしました。この変化は高校入試や大学入試にも反映されており、高校生の学習方法に大きな影響を与えています。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>従来の英語教育</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7, fontSize: "0.95rem" }}>読解と文法を中心とした座学。リスニングは限定的。スピーキングほぼなし。実用的な運用能力の育成に課題。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#E8F5E9", border: "1px solid #C8E6C9" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1B5E20", mb: 1 }}>現在の英語教育</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7, fontSize: "0.95rem" }}>4技能均等に育成。オールイングリッシュ授業。実務的な表現を重視。外部試験の活用増加。</Typography>
            </Paper>
          </Box>

          <SubSection title="高校の英語授業での具体的な変化">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>オールイングリッシュ授業の導入</strong> — 文部科学省の指針により、高1・高2の英語授業は原則として英語のみで進行。日本語の説明を最小限にしています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>リスニング重視</strong> — 従来より大幅にリスニング時間が増加。ネイティブスピーカーの音声をよく聞く練習が増えています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スピーキング・ライティング活動</strong> — ペアワークやディスカッション、レポート作成など、発信する活動が増加しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実用的な英語表現重視</strong> — メール、インタビュー、プレゼンテーション、会話など、実際に使える英語を学びます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ALT（外国語指導助手）の活用増加</strong> — ネイティブ講師との直接的な会話練習が増えています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="大学入学共通テストの英語問題の特徴" id="common-test">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            2021年から始まった大学入学共通テストの英語は、従来のセンター試験から大きく変わりました。実用的で複合的な読解力が求められ、また外部試験スコア（英検、TEAP、GTECなど）の活用も広がっています。共通テストの特徴を理解し、対策することが大学入試成功の鍵になります。
          </Typography>

          <SubSection title="リーディングの特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                共通テストのリーディングは、実用的な文章（メール、ウェブサイト、広告、申込フォーム）が多く出題されます。従来のセンター試験より文章が長く、複数のテキストを組み合わせた問題も増えています。単語の意味だけでなく、文脈や情報の整理、論理的思考が必要です。速く正確に読み取る力が求められます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="リスニングの特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数のスピーカー</strong> — アメリカ英語、イギリス英語など複数のアクセントが出題されます。様々な発音に慣れることが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自然な速度での音声</strong> — 従来より速いテンポで進行。ゆっくり繰り返されることがないため、集中力が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>会話の内容把握</strong> — 単語の聞き取りだけでなく、会話の流れ、話者の意図を理解することが求められます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>視覚情報との組み合わせ</strong> — 写真や図表を見ながらリスニングする問題が増えています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="外部試験スコアの活用">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの大学では、英検、TEAP、GTEC、IELTSなどの外部試験スコアを、推薦入試や総合型選抜で活用しています。一般入試でも、英語の成績に加点する大学が増えています。特に英検準1級以上、TOEFL80点以上など、高いスコアを持つことで、大学受験で有利になる可能性があります。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="英語外部試験（英検・TEAP・GTECなど）の活用" id="external-exams">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学入試の仕組みが変わり、外部試験の重要性が高まっています。各試験の特徴を理解し、自分に合った試験を選ぶことが大切です。高1・高2のうちから対策を始めることで、高い成績を獲得することができます。
          </Typography>

          <SubSection title="英検（実用英語技能検定）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴</strong> — 最も受験者数が多く、受験者データが豊富。4技能均等評価。高校でも対策教材が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学での活用</strong> — ほぼすべての大学が英検スコアを受け入れ。2級で標準的、準1級以上で高い評価を受けます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習難度</strong> — 高2で2級、高3で準1級を目指すのが標準的。準1級は大学入試レベルの英語力を要求します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="TEAP（Test of English for Academic Purposes）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴</strong> — 大学入試専用に開発された試験。アカデミックな英語を重視。早稲田大学などが推奨しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学での活用</strong> — 難関大学や国公立大学で高く評価される傾向。特に推薦入試で有利になりやすいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習難度</strong> — 難易度は英検2級～準1級の間程度。アカデミックな文章が多いため、読書習慣が必要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="GTEC（Global Test of English Communication）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴</strong> — ベネッセが実施。高校での実施制度が充実しており、在学中に受験しやすいです。CBT形式で日程が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学での活用</strong> — 多くの大学が受け入れ。特に推薦入試での活用が多いです。中堅大学から難関大学まで幅広く対応。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習難度</strong> — 英検より段階的に難易度が上がります。高2で800点前後、高3で900点以上を目指すのが目安です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高校での英語授業（オールイングリッシュ等）の実態" id="classroom-reality">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文部科学省の指針では高1・高2の英語授業をオールイングリッシュで実施することとしていますが、実際の実施状況は学校により大きく異なります。実態を知ることで、高校選択や学習方法の参考になります。
          </Typography>

          <SubSection title="進学校でのオールイングリッシュ授業">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                進学重点校やグローバルコース設置校では、徹底したオールイングリッシュ授業が実施されています。テキスト例文の日本語訳もせず、英語で説明し、生徒もペアワークで英語で応答します。このような環境では、高1からリスニング・スピーキング能力が大幅に向上しやすいです。ただし、文法の詳しい解説が少ないため、自学での補強が必要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="標準的な高校でのオールイングリッシュ授業">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの標準的な高校では、名目上「オールイングリッシュ」ですが、実際には日本語を交えた授業が行われています。難しい文法事項は日本語で説明し、簡単な会話練習は英語で進めるというバランス型です。実務的で効果的な授業運営をしている学校が多いです。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="ALT（外国語指導助手）の役割">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>会話練習の相手</strong> — ALTとのペアワークで、実際の英会話経験を積みます。多くの高校でALTが週1～2時間の授業に参加しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>発音・リスニング指導</strong> — ネイティブスピーカーの発音を聞くことで、リスニング能力が自然に向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>文化的な学習</strong> — 英語圏の文化や生活習慣も学ぶことで、より深い英語理解につながります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="4技能を効率よく伸ばす学習方法" id="study-methods">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校での授業だけでは、4技能を満遍なく伸ばすことは難しい場合が多いです。個人学習で4技能それぞれを効果的に伸ばす方法を実践することが、大学入試で高いスコアを獲得するコツです。
          </Typography>

          <SubSection title="リーディング能力の伸ばし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>長文読解教材の活用</strong> — 大学入試レベルの長文問題集（『基礎英語長文』『やっておきたい英語長文』など）を繰り返し解く。速度と精度の両立が大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>語彙力の強化</strong> — 受験頻出単語（3000～4000語）の習得が不可欠。単語帳『速読英単語』『シスタン』などで、文脈の中で単語を学ぶことが効果的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英文法の習得</strong> — 文法は読解の基本。「関係詞」「分詞」など、複雑な構文の理解が重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="リスニング能力の伸ばし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>共通テスト対策教材</strong> — 大学入学共通テストのリスニング問題を繰り返す。自然なテンポで流されるため、本番と同じ環境で練習することが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>シャドーイング練習</strong> — 英語音声を聞きながら、自分もついて発音する練習。リスニングとスピーキングの両立が図れます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>English Media の活用</strong> — YouTube、Podcast、BBC Learning Englishなど、様々なアクセントや速度の英語に慣れることが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ライティング能力の伸ばし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検対策（ライティングセクション）</strong> — 英検のライティング問題は、意見を述べ、理由を2つ示すという形式。高1から対策することで、書く力が確実に向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>日記を英語で書く</strong> — 日々の活動を英語で記録する習慣をつけると、自然な表現が身につきます。週3～4日でも効果的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英作文教材の活用</strong> — 『大学入試英作文フォーミュラ』『実践！英語要約トレーニング』など、段階的に学べる教材が有効です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="スピーキング能力の伸ばし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>オンライン英会話の活用</strong> — DMM英会話などで、週3～4回フィリピン人講師と会話練習。25分程度で5,000～10,000円/月の価格帯が一般的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検面接対策</strong> — 英検2級以上の面接に向けて、想定問題を何度も練習。学校の英語の先生に見てもらうことが最も効果的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音読練習</strong> — 教科書やテキストを繰り返し音読することで、自然な発音とリズムが身につきます。毎日10～15分が目安です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="英語が得意な高校・英語教育に力を入れている高校の選び方" id="school-selection">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            英語を得意にしたい場合、高校選択の段階で、英語教育の充実度を確認することが大切です。英語教育に力を入れている高校の特徴と見分け方をご紹介します。
          </Typography>

          <SubSection title="英語教育に力を入れている高校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>グローバルコースの設置</strong> — 国際教育に力を入れる高校では、グローバルコースや国際科が設置されており、英語教育の時間数が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ALT（外国語指導助手）の充実</strong> — ネイティブ講師が複数名いたり、毎日授業に参加する環境は、スピーキング・リスニング能力の向上に有利です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>留学プログラムの充実</strong> — 長期・短期の海外留学制度が整備されており、英語を実践する機会が豊富です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検取得率が高い</strong> — 学校全体での英検受験を奨励し、2級以上の取得者が多い高校は、英語教育体制が整備されています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英語の課外講座や補習</strong> — 英検対策講座、TOEFL対策、上級者向けの講座など、段階的な支援体制があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>模擬国連など英語活動</strong> — 模擬国連、英語スピーチコンテスト、英語ディベート部など、英語運用能力を高める活動が活発です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="学校説明会で確認すべきポイント">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>1. 英語の授業時数</strong> — 通常より多くの英語授業を実施しているか確認。進学重点校では週6～7時間の英語授業が多いです。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>2. 英検取得サポート</strong> — 学校での英検受験支援、対策講座、合格実績などを確認。目標級の取得者数が多いかは重要です。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>3. 国際交流プログラム</strong> — 海外修学旅行、短期留学、ホームステイプログラムなど、実践的な英語使用機会の有無を確認。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>4. ALT や海外出身の教員</strong> — ネイティブスピーカーとの直接的な関わりの機会が多いか、説明会で質問してみましょう。
              </Typography>
            </Box>
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
