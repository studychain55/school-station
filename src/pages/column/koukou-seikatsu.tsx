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

export default function KoukouSeikatsPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校生活を充実させる方法｜勉強・部活・友達・行事の両立" },
  ];

  const faqItems = [
    {
      question: "高校生活で最も大切なことは何ですか？",
      answer: "勉強・部活・人間関係・学校行事のバランスです。どれか一つに偏ると、高校3年間の充実度が下がります。自分にとって大切な優先順位を明確にし、時間を配分することが重要です。",
    },
    {
      question: "部活動と勉強の両立は本当に可能ですか？",
      answer: "十分可能です。むしろ、部活動を通じて時間管理能力と集中力が高まり、勉強の効率が上がることが多いです。部活の時間を固定することで、残りの時間を効率的に学習に充てられます。",
    },
    {
      question: "友人関係で悩んでいます。どうすればいいですか？",
      answer: "高校では、多様なバックグラウンドを持つ人間が集まります。相手の立場を理解し、自分の思いも素直に伝えることが大切です。悩みが大きい場合は、学校のカウンセラーや信頼できる大人に相談することをお勧めします。",
    },
    {
      question: "将来の夢がまだ決まっていません。高校生のうちに決めるべきですか？",
      answer: "決める必要はありません。高1・高2のうちは、様々な経験や人間関係を通じて、自分の興味や適性を探すことが大切です。高3に向けて少しずつ絞り込んでいく流れで構いません。",
    },
    {
      question: "修学旅行や文化祭などの行事は、大学受験に影響しますか？",
      answer: "むしろ、良い影響を与える可能性が高いです。学校行事への参加を通じて、他者とのコミュニケーション能力や企画力が磨かれます。推薦入試を受ける場合は、積極的な参加が評価されます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校生活を充実させる方法｜勉強・部活・友達・行事の両立 | School Station"
        description="高校生活の4つの柱（勉強・部活・人間関係・学校行事）の両立方法を解説。時間管理のコツ、部活と勉強の両立テクニック、修学旅行・体育祭・文化祭への取り組み方、将来の目標設定を詳しくご紹介します。"
        canonical="/column/koukou-seikatsu/"
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
            "headline": "高校生活を充実させる方法｜勉強・部活・友達・行事の両立",
            "description": "高校生活の勉強、部活、人間関係、学校行事のバランスの取り方を詳しく解説。",
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
            background: "linear-gradient(135deg, #7B1FA2 0%, #9C27B0 50%, #BA68C8 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校生活を充実させる方法
          </Typography>
          <Typography variant="body2" sx={{ color: "#E1BEE7", maxWidth: 600, mx: "auto" }}>
            勉強・部活・友達・行事のすべてを両立させるための実践的なアドバイス

          </Typography>
        </Box>

        {/* Introduction */}
        <Box sx={{ mb: 4, p: { xs: 2, sm: 3 }, bgcolor: "#F5F5F5", borderRadius: 2 }}>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            高校生活は、人生の中でも特に貴重な3年間です。勉強はもちろん、部活動、友人関係、学校行事など、様々な経験を通じて自分自身が大きく成長する時期です。しかし、これら全てをバランスよく進めるのは簡単ではありません。本記事では、高校生活の4つの柱をどのように両立させ、充実した毎日を過ごすかについて、実践的なアドバイスをご紹介します。
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
                <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#pillars" style={{ textDecoration: "none", color: "#7B1FA2" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  高校生活の4つの柱
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#time-management" style={{ textDecoration: "none", color: "#7B1FA2" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  時間管理と優先順位の付け方
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#both-study-bukatsu" style={{ textDecoration: "none", color: "#7B1FA2" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  部活と勉強の両立テクニック
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#school-events" style={{ textDecoration: "none", color: "#7B1FA2" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  修学旅行・体育祭・文化祭への取り組み方
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
              </ListItemIcon>
              <Link href="#future-goals" style={{ textDecoration: "none", color: "#7B1FA2" }}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  将来の目標設定と高校生活の関係
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Paper>

        <Section title="高校生活の4つの柱" id="pillars">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            充実した高校生活には、4つの重要な要素があります。それぞれの役割を理解し、バランスよく取り組むことが、3年間を最大限に活かすコツです。
          </Typography>

          <SubSection title="1. 勉強：将来の基礎を作る">
            <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                高校の勉強は、大学進学や将来のキャリアの土台になります。定期テスト対策を通じて、毎日の学習習慣を作ることが重要です。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：定期テストで各科目80点以上、内申点3.5以上を目指す
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：毎日1～2時間の予習復習、テスト2週間前からは3～4時間の集中勉強
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="2. 部活動：心身の成長と友情">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                部活動は、単なる課外活動ではなく、人間関係や忍耐力、チームワークを学ぶ場です。同じ目標に向かって頑張る仲間との経験は、生涯の財産になります。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：部活を通じて、責任感と行動力を身につける
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：週3～5日の活動時間を有効活用し、勉強との時間を厳密に分ける
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="3. 人間関係：多様な友人との絆">
            <Box sx={{ bgcolor: "#FCE4EC", p: 2.5, borderRadius: 1, border: "1px solid #F8BBD0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                高校では、異なる中学出身者や多様なバックグラウンドを持つ人たちと出会います。これらの友人関係は、視野を広げ、価値観を豊かにします。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C2185B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：クラス・部活・委員会など、複数のコミュニティで友人を作る
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C2185B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：相手の話を聞く姿勢、自分の考えを素直に伝えることを心がける
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="4. 学校行事：共同体験と成長">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                修学旅行、体育祭、文化祭といった行事は、クラス全体が共通の目標に向かって動く貴重な機会です。こうした経験を通じて、リーダーシップや企画力が磨かれます。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#E65100" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：各行事で責任ある役割を果たし、全力で取り組む
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#E65100" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：委員会活動や企画に進んで参加し、他者と協力する経験を積む
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="時間管理と優先順位の付け方" id="time-management">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校生活を充実させるために最も重要なのは、限られた時間をどのように配分するかです。戦略的な時間管理が、全てを両立させるカギになります。
          </Typography>

          <SubSection title="週単位での時間配分モデル">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                標準的な高校生の週間時間配分（24時間×7日＝168時間）：
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>睡眠：56時間（8時間/日）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      十分な睡眠は、学習効果と健康の基礎です。受験期でも7時間は確保しましょう。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>学校：35時間（5時間/日）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      授業、移動時間、昼食を含みます。学校での時間を有効活用することが重要です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>部活動：14時間（2時間/日）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      放課後の活動時間。試験期間は短縮し、勉強時間を確保します。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>自習・勉強：21時間（3時間/日）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      予習復習と定期テスト対策。テスト2週間前は5～6時間に増加。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>その他：42時間（食事・入浴・移動など）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      生活に必要な時間。無駄を減らすことで、有効活用時間を増やせます。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="優先順位の付け方：マトリクス法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              時間配分では、「やること」を優先度と緊急度で分類する「マトリクス法」が効果的です。
            </Typography>
            <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFF176" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>1. 重要＆緊急（最優先）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      定期テスト直前の勉強、部活の大会前の練習など。最も時間を費やすべき事項。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>2. 重要＆余裕あり（2番目）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      毎日の予習復習、友人関係の育成など。継続的に時間を確保すべき事項。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>3. 緊急＆軽要（3番目）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      委員会の急な仕事、提出物など。効率的に処理し、時間を最小限に。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>4. 軽要＆余裕あり（削減対象）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      SNS、ゲームなど。時間が限られている時期は、これらの時間を最小化。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活と勉強の両立テクニック" id="both-study-bukatsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            部活と勉強の両立は、多くの高校生が悩む課題です。しかし、適切な戦略を持つことで、十分に両立は可能です。むしろ、部活を通じて学ぶ時間管理や忍耐力が、勉強の効率を高めることもあります。
          </Typography>

          <SubSection title="「時間の固定」による効率化">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                部活の時間を「固定」することで、残りの時間を効率的に使える心理的な余裕が生まれます。例えば、放課後3時間は部活、帰宅後30分は食事・入浴、その後1.5時間は必ず勉強という風に、スケジュールを明確にすることが大切です。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活の開始・終了時刻を明確にする
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    その時間内で最大限の成果を出す心構え
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    帰宅後のルーティンを習慣化する
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="勉強時間の確保戦略">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              部活後は疲労がたまっているため、無理に長時間勉強することは避けましょう。代わりに、朝の時間を有効活用することがコツです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>朝の時間活用（30～60分）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    朝は脳が最も活性化している時間帯。英単語、計算練習など、反復学習に最適です。朝5分早く起きるだけで、週300分の追加勉強時間が確保できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>昼休みの活用（20～30分）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    お昼休みに軽い復習をすることで、午後の授業への理解が深まります。弁当を食べた後、10分の瞑想や深呼吸で気分をリセットしましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#1e782d" }}>部活後の勉強（45～60分）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    帰宅後は、軽いストレッチや30分の休息を取ってから、勉強を開始。教科書を読む、授業ノートを見直すなど、負担の少ない学習から始めましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="定期テスト前の部活調整">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              テスト2週間前は、部活動の時間を減らし、勉強時間を増やすことが一般的です。顧問の先生と相談し、テスト前は練習を短縮してもらうか、スケジュール調整をしてもらうことが重要です。部活仲間にも、テスト対策に専念する旨を事前に伝えておくと、協力が得られやすくなります。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="修学旅行・体育祭・文化祭への取り組み方" id="school-events">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学校行事は、単なる休息の時間ではなく、クラス全体での成長と絆を深める貴重な機会です。これらの行事に全力で取り組むことで、高校生活の充実度が大きく変わります。
          </Typography>

          <SubSection title="修学旅行：事前学習から事後学習まで">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#E65100" }}>事前学習（訪問地の歴史・文化の理解）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      修学旅行の行き先について、事前に歴史や文化を学ぶことで、旅行中の体験が深まります。班ごとに調べ学習を行い、互いに知識をシェアしましょう。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#E65100" }}>旅行中の行動（積極的な参加と観察）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      班での行動の中で、友人との関係を深め、協力することの大切さを学びます。「どうやって班をまとめるか」「誰がどの役割を担うか」など、自然とリーダーシップが磨かれます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#E65100" }}>事後学習（体験の振り返りとまとめ）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      修学旅行レポートの作成を通じて、学んだことを整理。また、クラス全体で写真を共有したり、思い出を語り合ったりすることで、クラスの絆が一層深まります。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="体育祭：班やクラスの団結力を高める">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              体育祭では、競技を通じて、クラスメイトとの協力の大切さを学びます。勝ち負けよりも、「いかに全力で取り組むか」「どうやって仲間を応援するか」が大切です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#FFEBEE", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#C62828" }}>事前練習</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    競技種目によって異なりますが、リレーなら走順を工夫し、綱引きなら引く位置や力の入れ方を工夫。細かな工夫が本番の成績に大きく影響します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#FFEBEE", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#C62828" }}>応援活動</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分たちの競技に出ていない時間も、クラスメイトの応援に全力で取り組む。大きな声援が、選手たちの士気を高めます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="文化祭：自分たちの「表現」を形にする">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              文化祭は、クラスの個性を表現する場です。演劇、展示、模擬店など、様々な形式がありますが、「何をするか」よりも「いかに工夫し、来場者を楽しませるか」が大切です。
            </Typography>
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    企画の立案：全員が意見を述べ、民主的に決定。少数派の意見も尊重
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    役割分担：製作班、営業班、当日スタッフなど、自分の適性に合わせた役割を担う
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    本番での連携：スムーズな運営と、来場者への対応。思いがけないトラブルにも、チーム全体で対応する力が磨かれます
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="将来の目標設定と高校生活の関係" id="future-goals">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校生活の充実度は、「将来への目標」の有無によって大きく変わります。漠然とした不安よりも、「将来こうなりたい」という前向きな目標が、日々の行動を導きます。
          </Typography>

          <SubSection title="高1：「興味」を広げる時期">
            <Box sx={{ bgcolor: "#E0F2F1", p: 2.5, borderRadius: 1, border: "1px solid #B2DFDB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                高1では、自分の「興味」を探す時期と捉えましょう。様々な授業を受け、多くの部活動や委員会活動を試してみる。その過程で、「なぜか惹かれる分野」や「得意な領域」が見えてきます。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#00796B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：「漠然とした興味が3つ以上見つかること」を成功とする
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#00796B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：部活動の他に、課題研究や図書館の利用を増やす
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="高2：「適性」を見つめる時期">
            <Box sx={{ bgcolor: "#E8EAF6", p: 2.5, borderRadius: 1, border: "1px solid #C5CAE9", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                高1の経験を踏まえ、高2では「自分は何が得意で、何が好きなのか」を、より明確にする時期です。進路指導の先生や親との相談も増え、徐々に進路を絞り込んでいきます。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#3F51B5" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：「希望大学・学部の候補が決まること」を成功とする
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#3F51B5" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：大学説明会に参加し、実際の学問内容を知る
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="高3：「確定」と「実現」の時期">
            <Box sx={{ bgcolor: "#FCE4EC", p: 2.5, borderRadius: 1, border: "1px solid #F8BBD0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
                高3では、進路がほぼ確定する時期です。その進路に向けた「現実的な準備」と「最終的な決断」に集中します。受験勉強だけでなく、進路選択のプロセスそのものが、「人生における判断力」を磨く貴重な機会です。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C2185B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標：「納得のいく進路決定と、その実現に向けた全力投球」
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C2185B" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実践：面接対策や志望理由書の作成を通じて、「自分の人生をどう歩むか」を深く考える
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="目標設定の具体的方法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              漠然とした目標では実行しにくいため、「SMART目標」を心がけましょう。
            </Typography>
            <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFF176" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>S（Specific）：具体的</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      「頭がいい人になりたい」ではなく、「数学で常に90点以上を取る」
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>M（Measurable）：測定可能</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      進捗が数値で追跡できるものを選ぶ
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>A（Achievable）：達成可能</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      現在のレベルから、努力で達成できる目標
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>R（Relevant）：関連性</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      自分の人生の方向性に関連している
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>T（Time-bound）：期限がある</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      「いつまでに達成するのか」が明確
                    </Typography>
                  </Box>
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
            充実した高校生活へのスタート。全国の高校偏差値ランキングで、自分にぴったりの高校を見つけましょう。
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
