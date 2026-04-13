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

export default function KoukouSetsumeikaiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の学校説明会・オープンキャンパスを最大限活用する方法" },
  ];

  const faqItems = [
    {
      question: "学校説明会とオープンキャンパスの違いは何ですか？",
      answer: "学校説明会は学校の教職員が学校の方針や入試情報を説明する場で、説明中心です。オープンキャンパスは、授業体験や施設見学、先生・先輩との交流など、体験を通じて学校を知る場です。",
    },
    {
      question: "中学何年生から参加するべきですか？",
      answer: "理想的には中学2年生から参加を始めることをお勧めします。中3になると受験対策で忙しくなるため、中2のうちに複数校を比較検討しておくと、志望校選びがスムーズです。",
    },
    {
      question: "参加する前に何を準備すべきですか？",
      answer: "志望理由や質問リスト、学校の教育方針・カリキュラム、進学実績などの基礎情報をあらかじめ調べておくことが大切です。また、メモ帳とペンを持参し、重要な情報をメモする習慣をつけましょう。",
    },
    {
      question: "複数の学校を比較する際のポイントは何ですか？",
      answer: "偏差値や立地だけでなく、校風、在学生の雰囲気、施設、先生との相性、教育方針など複数の観点から総合的に判断することが重要です。必ず複数校を訪問し、比較検討しましょう。",
      },
    {
      question: "オープンキャンパスで聞くべき質問は何ですか？",
      answer: "進学実績、補習制度、部活と勉強の両立、校則、通学時間、奨学金制度など、具体的で自分にとって重要な質問をしましょう。単に『どうですか？』という曖昧な質問ではなく、具体的な質問をすることで、学校の特徴がより明確に見えてきます。",
    },
    {
      question: "オープンキャンパスで友人と分かれて行動してもいいですか？",
      answer: "可能ですが、おすすめしません。複数人で参加する場合は、同じ体験を共有し、後から比較・検討することが大切です。また、先生や先輩に質問する際も、複数人の方が時間効率が良くなります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の学校説明会・オープンキャンパスを最大限活用する方法 | School Station"
        description="高校受験を控えた中学生向けに、学校説明会とオープンキャンパスの違い、参加前の準備、当日の確認ポイント、複数校を比較するコツを解説。"
        canonical="/column/koukou-setsumeikai/"
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
            "headline": "高校の学校説明会・オープンキャンパスを最大限活用する方法",
            "description": "学校説明会とオープンキャンパスの違い、参加前の準備、当日の確認ポイント、複数校を比較するコツを解説。",
            "datePublished": `${CURRENT_YEAR}-04-07`,
            "dateModified": `${CURRENT_YEAR}-04-07`,
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
            学校説明会・オープンキャンパスを最大限活用する方法
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            事前準備から当日確認、複数校比較までのすべてを網羅した完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="学校説明会とオープンキャンパスの違い" id="difference">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校受験を控えた中学生にとって、志望校選びは最も重要な決断の一つです。その際に欠かせないのが「学校説明会」と「オープンキャンパス」です。これら二つは似ているようでいて、実は全く異なるものです。
          </Typography>

          <SubSection title="学校説明会とは">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                学校説明会は、学校の教職員が学校の教育方針、カリキュラム、入試情報、進学実績などを説明する場です。通常は体育館などの大きな講堂で実施され、多くの中学生と保護者が参加します。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴：学校の情報を体系的に学べる</strong> — 学校の基本的な情報が分かりやすく説明されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>時間：通常1時間～1時間半</strong> — スケジュールが立てやすく、複数校参加しやすいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>参加者：保護者同伴を想定</strong> — 家族で学校情報を共有できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実施時期：年3～5回程度</strong> — 複数回開催されるため、都合のつく日程に参加できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="オープンキャンパスとは">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                オープンキャンパスは、中学生がキャンパスを訪問し、授業体験、施設見学、先生や先輩との交流を通じて、学校の雰囲気を直接感じる場です。学校によっては「体験入学」や「キャンパスツアー」と呼ぶこともあります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴：学校を五感で体験できる</strong> — 校舎の雰囲気、在学生の様子、施設の充実度などを実際に見て感じられます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>時間：2時間～4時間</strong> — 時間に余裕があり、深く学校を知ることができます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>参加者：本人中心</strong> — 中学生が主体的に参加する場です。保護者が見学することもできます。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実施時期：夏休み中心</strong> — 夏休みに集中して開催されることが多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="二つを比較する表">
            <Box sx={{ overflowX: "auto" }}>
              <Paper sx={{ p: 0 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>項目</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>学校説明会</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>オープンキャンパス</Box>

                  <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>内容</Box>
                  <Box sx={{ p: 2 }}>学校情報の説明</Box>
                  <Box sx={{ p: 2 }}>授業・施設体験</Box>

                  <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>所要時間</Box>
                  <Box sx={{ p: 2 }}>1～1.5時間</Box>
                  <Box sx={{ p: 2 }}>2～4時間</Box>

                  <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>参加形式</Box>
                  <Box sx={{ p: 2 }}>保護者同伴推奨</Box>
                  <Box sx={{ p: 2 }}>本人中心</Box>

                  <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>実施時期</Box>
                  <Box sx={{ p: 2 }}>年3～5回</Box>
                  <Box sx={{ p: 2 }}>夏休み中心</Box>

                  <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>向いている人</Box>
                  <Box sx={{ p: 2 }}>基本情報を効率よく知りたい人</Box>
                  <Box sx={{ p: 2 }}>学校の雰囲気を直に感じたい人</Box>
                </Box>
              </Paper>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="参加するベストタイミング" id="timing">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            学校説明会やオープンキャンパスに参加するタイミングは、志望校選びの成功を左右する重要な要素です。時期によって、学べることや参加者の数が異なります。
          </Typography>

          <SubSection title="中学1年生">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>参加の必要性：低い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高校入試はまだ遠く、志望校選びの緊急性はありません。ただし、学校に興味があれば、参加してみることで将来の目標設定のきっかけになります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="中学2年生">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>参加の必要性：高い（推奨）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高校入試がおよそ1年後に控えており、志望校選びを本格化させるべき時期です。複数校を比較検討し、自分の進路方向を決める重要な時期です。特に秋から冬にかけて開催されるオープンキャンパスや説明会に参加することをお勧めします。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="中学3年生">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>参加の必要性：中程度</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    受験対策で忙しい時期ですが、志望校の最終確認には参加すべきです。春から夏の学校説明会に参加し、志望校を最終決定するのが理想的です。秋以降は受験準備に専念するため、早めに志望校を絞っておくことが大切です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", mt: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              <strong>結論：中学2年生のうちに複数校を比較し、中学3年生の春～夏に志望校を最終決定するスケジュールが理想的です。</strong>
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="参加前の準備" id="preparation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            学校説明会やオープンキャンパスを最大限活用するには、事前の準備が欠かせません。以下のポイントをチェックしましょう。
          </Typography>

          <SubSection title="1. 基礎情報の調査">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校のホームページを確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    教育方針、カリキュラム、進学実績、施設などの基本情報を事前に把握しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>偏差値を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    現在の自分の学力と学校の難易度をマッチングさせることが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部活動を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分が参加したい部活があるか、その部活の実績などを確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. 質問リストの作成">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                学校説明会やオープンキャンパスで先生に質問するリストを事前に作成しましょう。曖昧な質問ではなく、具体的で自分にとって重要な質問をすることが大切です。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績：</strong> 過去3年間の大学進学実績、進学先の大学名、指定校推薦の有無
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>補習制度：</strong> 苦手教科の補習、進学対応の個別指導の有無
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活と勉強の両立：</strong> 部活の時間帯、掛け持ちの可否、受験期の対応
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>校則：</strong> 制服規定、髪型、携帯電話、アルバイトの可否
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>奨学金制度：</strong> 学費サポート、授業料減免の有無
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>通学：</strong> 通学時間、駐輪場・駐車場、通学路の安全性
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 持ち物の準備">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メモ帳とペン：</strong> 重要な情報をメモするため必須です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スマートフォン：</strong> 校舎や施設の写真撮影、位置情報確認に便利です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>タオルと飲料：</strong> 夏場は熱中症対策が重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>上履き（オープンキャンパスの場合）：</strong> 指定があるか事前に確認しましょう。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="当日確認すべきこと" id="check-list">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            学校説明会やオープンキャンパスに参加した際、以下のポイントを意識して観察・確認しましょう。
          </Typography>

          <SubSection title="校風・雰囲気">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在学生の表情：</strong> 生き生きしているか、落ち着いているか。学校生活に満足しているか。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>校舎の清潔さ：</strong> トイレ、廊下、教室が清潔か。学校全体の雰囲気は整理整頓されているか。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>先生の態度：</strong> 生徒に親身に向き合っているか、説明が分かりやすいか。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>全体の雰囲気：</strong> 緊張感がありながらも和やかか。自分がこの環境で学びたいと感じるか。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="施設・設備">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>図書館：</strong> 蔵書数、自習スペースの充実度、利用環境の良さ。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実験室：</strong> 理系科目の実験設備が充実しているか。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>コンピュータ室：</strong> パソコンの台数、最新のOSか、利用制限はあるか。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>体育館・運動場：</strong> スポーツ設備は十分か、部活動に支障がないか。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>食堂・購買部：</strong> 食事が充実しているか、価格は手頃か。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="先生の雰囲気">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>質問への対応：</strong> 丁寧に答えているか、曖昧な回答をしていないか。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒への接し方：</strong> 生徒を尊重しているか、指導は厳しすぎないか。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>信頼できるか：</strong> 先生の話に一貫性があるか、本当に生徒のことを考えているか。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="複数校を比較するコツ" id="comparison">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            複数の学校を訪問した後、どのようにして比較・検討を進めるかは非常に重要です。効果的な比較方法を紹介します。
          </Typography>

          <SubSection title="1. 比較表を作成する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              複数校の情報を整理するため、比較表を作成しましょう。以下の項目を含めることをお勧めします。
            </Typography>

            <Box sx={{ overflowX: "auto" }}>
              <Paper sx={{ p: 0 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.85rem" }}>評価項目</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.85rem" }}>A高校</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.85rem" }}>B高校</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.85rem" }}>C高校</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5", fontSize: "0.85rem" }}>偏差値</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>68</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>65</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>62</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5", fontSize: "0.85rem" }}>校風</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>◎自由で活発</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>〇バランス型</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>△厳しい</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5", fontSize: "0.85rem" }}>進学実績</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>◎有名大多数</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>〇国公立数名</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>△地方大が中心</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5", fontSize: "0.85rem" }}>施設</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>◎新しく充実</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>〇普通</Box>
                  <Box sx={{ p: 1.5, fontSize: "0.85rem" }}>△やや古い</Box>
                </Box>
              </Paper>
            </Box>

            <Typography variant="body2" sx={{ color: "#666", mt: 2, fontSize: "0.85rem" }}>
              ※◎優れている、〇普通、△改善希望の3段階で評価
            </Typography>
          </SubSection>

          <SubSection title="2. 優先順位を明確にする">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校選びで重視する項目は、人によって異なります。自分にとって最も大切な項目を明確にしましょう。
            </Typography>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学進学を目指すなら：</strong> 進学実績、進学指導、進学対応コース
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動を重視するなら：</strong> 部活の充実度、実績、顧問の質
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自由度を求めるなら：</strong> 校風、校則の厳しさ、生徒の主体性
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>通学時間を短くしたいなら：</strong> 立地、アクセス、通学路の安全性
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 複数回の訪問を検討する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              可能であれば、同じ学校を複数回訪問しましょう。別の時期に訪問することで、異なる側面が見えてくることがあります。また、学校説明会とオープンキャンパスの両方に参加することで、より深く学校を理解できます。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="志望校選びに活かすポイント" id="decision">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            複数校の学校説明会やオープンキャンパスに参加した後、その情報を志望校選びにどのように活かすかが重要です。
          </Typography>

          <SubSection title="自分にとって最適な学校を選ぶプロセス">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>1. 感覚と理屈のバランスを取る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    偏差値や進学実績も重要ですが、「その学校で学びたい」という気持ちが重要です。訪問時の直感も大切にしましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>2. 「目標校・実力相応校・安全校」の3段階を決める</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    偏差値で「挑戦できる学校」「ちょうどいい学校」「確実に合格できる学校」の3つを用意することが、受験戦略として重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>3. 親とよく話し合う</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学費、通学時間、教育方針など、親の意見も重要です。親子で訪問し、意見を交わすことをお勧めします。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>4. 決定後は迷わない</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    志望校を決めたら、その学校での「3年間を充実させるぞ」という気持ちで臨むことが大切です。後悔しないため、決定までは時間をかけて検討しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ */}
        <Box sx={{ my: 5 }}>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Navigation Links */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 5 }}>
          <Link href="/column/tsushinsei-koukou/" style={{ textDecoration: "none" }}>
            <Paper sx={{ p: 2, border: "1px solid #E0E0E0", textAlign: "center", cursor: "pointer", "&:hover": { boxShadow: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d", fontWeight: 600, fontSize: "0.9rem" }}>
                <ArrowBackIcon sx={{ fontSize: "1rem" }} />
                前の記事
              </Box>
              <Typography variant="body2" sx={{ mt: 1, color: "#424242" }}>通信制・定時制高校の違い</Typography>
            </Paper>
          </Link>
          <Link href="/column/kokosei-baito/" style={{ textDecoration: "none" }}>
            <Paper sx={{ p: 2, border: "1px solid #E0E0E0", textAlign: "center", cursor: "pointer", "&:hover": { boxShadow: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d", fontWeight: 600, fontSize: "0.9rem" }}>
                次の記事
                <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, color: "#424242" }}>高校生のバイトと勉強の両立</Typography>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
