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

export default function DaigakuJukenPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校から大学受験を見据えた学習計画の立て方" },
  ];

  const faqItems = [
    {
      question: "高1から大学受験対策を始めるのは早いですか？",
      answer: "決して早くありません。むしろ理想的です。高1から基礎を確実に固めることで、高3での追い込み勉強がぐっと楽になります。特に英語と数学は、積み重ねが重要な教科なので、早期のスタートが合格につながります。",
    },
    {
      question: "推薦入試と一般入試、どちらを目指すべきですか？",
      answer: "学力、内申点、活動実績など、複数の要因を総合的に判断する必要があります。推薦入試は定期テスト対策と部活動の両立が必要ですが、合格可能性が高い傾向。一般入試は偏差値が高い大学を目指せます。両方を視野に入れた対策が最も安全です。",
    },
    {
      question: "高2で模試の偏差値が伸びません。どうすればいいですか？",
      answer: "模試の偏差値が伸びないのは、基礎知識の穴がある可能性があります。苦手単元を徹底的に復習し、教科書レベルの内容から確実に固めることが重要です。同時に、模試の復習を丁寧に行い、間違えた理由を分析することで、次の模試で成果が出やすくなります。",
    },
    {
      question: "塾に行かなくても大学受験に合格できますか？",
      answer: "可能です。ただし、自学自習の質と量が極めて重要になります。参考書選びが適切か、勉強計画が現実的か、進捗管理ができているかなど、すべてを自分で管理する必要があります。不安な場合は、部分的に塾を活用（苦手科目だけなど）するのも一つの方法です。",
    },
    {
      question: "大学受験の準備に必要な総勉強時間はどのくらいですか？",
      answer: "目安として、高1から高3の合計で3,000～4,000時間が一般的です。高1：年1,000時間（日2.5時間）、高2：年1,200時間（日3.5時間）、高3：年1,500時間（日4～5時間）という配分が理想的です。ただし、質が伴わなければ意味がないので注意が必要です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校から大学受験を見据えた学習計画の立て方｜推薦・一般入試対策 | School Station"
        description="高1・高2・高3の各段階でやるべきことを詳しく解説。推薦入試・総合型選抜の対策から一般入試対策、模試の活用法、塾選びのコツまで、大学受験の全体像をご紹介します。"
        canonical="/column/daigaku-juken/"
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
            "headline": "高校から大学受験を見据えた学習計画の立て方",
            "description": "高1・高2・高3の各段階での学習計画、推薦入試・総合型選抜・一般入試の対策方法を詳しく解説。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校から大学受験を見据えた学習計画の立て方
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            高1・高2・高3の各時期にやるべきことを徹底解説。推薦入試・総合型選抜・一般入試に対応した効果的な学習戦略

          </Typography>
        </Box>

        {/* Introduction */}
        <Box sx={{ mb: 4, p: { xs: 2, sm: 3 }, bgcolor: "#F5F5F5", borderRadius: 2 }}>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            大学受験は、高3の秋冬に始まるのではなく、高1の時点ですでに始まっています。特に推薦入試や総合型選抜を視野に入れる場合、定期テスト対策や学校活動への取り組みが合否を大きく左右します。本記事では、高1・高2・高3のそれぞれの段階で実施すべき学習計画と、推薦入試・一般入試に向けた具体的な対策をご紹介します。
          </Typography>
        </Box>

        {/* Table of Contents */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, bgcolor: "#F9F9F9", border: "1px solid #E0E0E0" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 2, color: "#1e782d" }}>
            目次
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#grade1" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  高1でやるべきこと：基礎固めと習慣形成
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#grade2" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  高2でやるべきこと：応用力育成と進路決定
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#grade3" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  高3でやるべきこと：受験直前期の最終追い込み
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#suisen" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  推薦入試・総合型選抜の対策戦略
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#general" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  一般入試の基礎固めと実践対策
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#mock" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  模試の活用法と偏差値の読み方
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#juku" style={{ textDecoration: "none", color: "#1e782d" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  塾・予備校選びと自習の組み合わせ
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Paper>

        <Section title="高1でやるべきこと：基礎固めと習慣形成" id="grade1">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高1の時点では、大学受験の意識が低いかもしれません。しかし、この時期の勉強習慣がその後の成績を大きく左右します。定期テスト対策を通じて、基礎学力を確実に定着させることが最重要です。
          </Typography>

          <SubSection title="定期テスト対策に全力で取り組む">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>定期テストは受験に直結</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      高1の定期テスト成績は内申点につながり、推薦入試や総合型選抜の合否に大きく影響します。また、定期テストを通じて学ぶ習慣も、高3での受験勉強を支える基礎となります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>毎日の予習復習を重視</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      高1では、授業の理解が後々の応用問題を解く力に直結します。毎日1～2時間の予習復習を習慣化し、授業中は積極的に質問する姿勢を心がけましょう。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="英語・数学の基礎固めを優先">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              英語と数学は、大学受験で最も重要な科目です。高1の段階で、基本的な文法や計算を確実に理解することが、後の応用問題を解く力につながります。
            </Typography>
            <Box sx={{ bgcolor: "#FCE4EC", p: 2.5, borderRadius: 1, border: "1px solid #F8BBD0" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#E91E63" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.3 }}>英語：単語・文法の確実な定着</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      毎日30分の単語学習と、週3回の文法学習を習慣化させます。高1の英文法を完全に理解することで、長文読解への土台ができます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#E91E63" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.3 }}>数学：計算と基本定理の習得</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      教科書の基本問題から確実に始めます。計算ミスを減らすため、同じ問題を複数回解く「反復学習」を取り入れることが重要です。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="推薦入試を視野に入れた活動実績作り">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              推薦入試では、学習成績以外に、部活動や学校行事への取り組み、ボランティア活動などが評価されます。高1のうちから、興味のある活動に積極的に参加し、実績を積み重ねることが大切です。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="高2でやるべきこと：応用力育成と進路決定" id="grade2">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高2は、「受験準備の本格化」の時期です。この時期から応用問題に取り組み始め、同時に進路を具体的に決めることが重要です。高3での効率的な受験対策に向けた「助走期」と言えます。
          </Typography>

          <SubSection title="応用問題への段階的なステップアップ">
            <Box sx={{ bgcolor: "#E0F2F1", p: 2.5, borderRadius: 1, border: "1px solid #B2DFDB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高1で学んだ基礎を土台に、高2では応用問題に取り組みます。教科書の問題→練習問題→過去問という段階的な学習が、実力を確実に高めます。高2の終わりまでに、高2までの内容の「完全な理解」を目指しましょう。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="第一回全国模試の受験と活用">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高2の春には、全国規模の模試を受けることをお勧めします。自分の全国における位置を把握することで、志望大学の決定や勉強計画の調整ができます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>模試の活用法</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    模試を受けたら、採点結果の分析が最重要です。得点したセクション、失点したセクションを整理し、「なぜ失点したのか」を理由別に分類します。これが、その後の勉強計画の改善につながります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="志望大学の具体化と情報収集">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              高2の秋までに、志望大学を具体的に決めることが理想的です。大学の説明会に参加したり、パンフレットを取り寄せたりして、各大学の入試制度（推薦・総合型選抜・一般入試など）を理解しておくことが大切です。
            </Typography>
          </SubSection>

          <SubSection title="内申点を高めるための最終チャンス">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              推薦入試を視野に入れる場合、高2の内申点は非常に重要です。定期テストに向けた徹底的な対策と、授業中の積極的な参加を心がけ、内申点3.8以上を目指しましょう。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="高3でやるべきこと：受験直前期の最終追い込み" id="grade3">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高3は、受験の「仕上げの年」です。春から夏までは基礎固めと応用力の最終調整、秋から冬は過去問演習と実践的な対策に集中します。
          </Typography>

          <SubSection title="春～夏：基礎と応用の融合">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>春（4月～6月）：</strong> 高1～高2の復習を完了。基礎に穴がないか、確認テストを通じてチェック。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>夏（7月～8月）：</strong> 夏期講習や集中学習を活用。1日8～10時間の勉強時間を確保し、苦手科目の徹底的な克服に取り組む。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>秋（9月～10月）：</strong> 過去問演習をスタート。実際の入試問題を解くことで、出題パターンと時間配分を学習。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="秋～冬：過去問演習と実践対策">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高3秋以降は、模試と過去問演習に集中します。毎週1～2年分の過去問を解き、採点・分析を繰り返すことで、実践的な力を磨きます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>過去問は10年分以上が理想</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    志望大学の過去問は最低10年分、可能なら15～20年分に取り組むことで、出題傾向の変化を捉えられます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>本番さながらの環境で練習</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    時間制限を厳密に守り、実際の入試と同じ環境で過去問を解くことが、本番での実力発揮につながります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="センター試験（共通テスト）対策">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              共通テストは、1月中旬に実施されます。高3秋から本格的な対策を始め、実施2週間前には、毎日1セット（本番同様の時間）を解く習慣をつけましょう。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試・総合型選抜の対策戦略" id="suisen">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試や総合型選抜は、学習成績だけでなく、活動実績やプレゼンテーション能力が問われます。早期から準備することが、合格の鍵となります。
          </Typography>

          <SubSection title="推薦入試成功の3要素">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>1. 内申点</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      推薦入試では、通常3.8以上の内申点が求められます。高1から高3の1学期までの定期テストと授業態度が評価対象です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>2. 活動実績</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      部活動、ボランティア、特技など、学校外での取り組みが評価されます。高1から活動を記録しておくことが大切です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>3. 面接・小論文</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      志望理由書、自己推薦文、面接練習に高3秋から本格的に取り組みます。学校の進路指導の先生に指導を受けることが重要です。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="総合型選抜での差別化戦略">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              総合型選抜では、他者と異なるユニークな経験やプロジェクトが強みになります。課題研究、起業体験、海外経験など、自分の「ストーリー」を作ることが大切です。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="一般入試の基礎固めと実践対策" id="general">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            一般入試は、学力試験による合否判定です。高1から高3まで、継続的な学習計画と効率的な勉強法が、合格を左右します。
          </Typography>

          <SubSection title="5教科7科目の計画的学習">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              国語・数学・英語は毎日学習。理科・社会は、高2から本格的に始めるのが一般的です。週ごとの学習計画で、全科目をバランスよく学習することが重要です。
            </Typography>
          </SubSection>

          <SubSection title="共通テスト対策と個別試験対策">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>共通テスト（1月）：</strong> 全国共通の問題で基礎学力を測定。高3秋から集中対策を始めます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>個別試験（2月以降）：</strong> 大学ごとの問題に対応。志望大学の過去問を10年分以上解き、出題傾向を把握することが合格のカギです。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="模試の活用法と偏差値の読み方" id="mock">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            模試は、受験学力を測る最高の学習ツールです。単に受けるだけでなく、結果を活用することが、成績向上につながります。
          </Typography>

          <SubSection title="模試の3つの活用法">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>1. 苦手分野の可視化</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    模試の結果から、自分の苦手分野を明確にします。「英語の長文」「数学の確率」など、具体的な課題を特定することが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>2. 時間配分の改善</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    本番と同じ時間制限で模試を解くことで、「どの問題に時間を費やすべきか」が見えます。複数の模試を通じて、最適な時間配分を見つけましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>3. 志望大学との偏差値比較</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    模試の偏差値と、志望大学の難易度を比較することで、合格可能性を判断できます。目標偏差値との差を埋めるための具体的な計画立案に活かします。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="偏差値の正しい読み方">
            <Box sx={{ bgcolor: "#FCE4EC", p: 2.5, borderRadius: 1, border: "1px solid #F8BBD0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>偏差値50：</strong> 全国の受験者の平均位置
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>偏差値60以上：</strong> 全国の上位16%に位置。有名大学の入試レベル
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                <strong>偏差値70以上：</strong> 全国の上位2%に位置。東大・京大などの最難関大学レベル
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                重要なのは、模試の偏差値は「その時点での立ち位置」であり、「最終的な合否ではない」ということです。模試後の改善活動如何で、偏差値はいくらでも上がります。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="塾・予備校選びと自習の組み合わせ" id="juku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            塾・予備校は「サポート役」です。自習が主体となり、塾を効果的に活用することが、合格への最短ルートです。
          </Typography>

          <SubSection title="塾・予備校の選び方">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>集団指導塾</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>メリット：</strong> 費用が安い、ライバル意識が刺激になる<br/>
                    <strong>デメリット：</strong> 個別対応が難しい、ペースに付いていく必要がある
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>個別指導塾</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>メリット：</strong> 苦手に特化できる、自分のペースで学習<br/>
                    <strong>デメリット：</strong> 費用が高い、講師の質が差を生むことがある
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>オンライン塾・通信講座</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>メリット：</strong> 費用が安い、自分のペースで学習できる<br/>
                    <strong>デメリット：</strong> 学習管理が自己責任、質問しにくいことがある
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="自習を主体とした勉強計画">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              最終的に、合否を左右するのは「自習の質と量」です。塾の授業は週3～4時間ですが、自習時間は週20～30時間。この圧倒的な比率から、自習の重要性がわかります。
            </Typography>
            <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFF176" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 1, color: "#F57F17" }}>自習の効率を高めるコツ</Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FBC02D" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    静寂な環境：図書館や自習室を活用
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FBC02D" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    具体的な目標設定：「今日は数学の確率を完成させる」
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FBC02D" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    定期的な振り返り：週単位で進捗を確認し、計画を調整
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 5 }} />

        {/* FAQ */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#1e782d", mb: 3 }}>
            よくあるご質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            全国の高校情報をチェック
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            志望校選びの第一歩。全国の高校偏差値ランキングで、自分の進路を探しましょう。
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
