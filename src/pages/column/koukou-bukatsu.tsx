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

export default function KoukouBukatssuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の部活動選び｜勉強との両立と進路への影響" },
  ];

  const faqItems = [
    {
      question: "文化系と体育系の部活では、勉強との両立は難しさが違いますか？",
      answer: "傾向としては、体育系は練習時間が長く、身体的な疲労が大きいため、勉強との両立が難しい傾向があります。ただし、個人差や部活の方針によって異なります。文化系でも、全国大会を目指す競技かるた部や科学部などは、かなりの時間と努力が必要です。",
    },
    {
      question: "部活動は大学受験に本当に影響しますか？",
      answer: "大きく影響します。推薦入試では、部活での実績や役職（部長、副部長など）が評価されます。一般入試でも、『部活を通じて何を学んだか』という経験値が評価される傾向があります。ただし、部活に時間をかけすぎて基礎学力が身につかないと、大学受験で失敗することもあります。",
    },
    {
      question: "部活動で役職（部長など）に就くと受験に有利ですか？",
      answer: "推薦入試や総合型選抜では、リーダーシップの実績が評価される傾向があります。『部長として何を成し遂げたか』という具体的な成果が重要です。ただし、役職に就くことだけが目的になってはいけません。本当の意味でのリーダーシップ経験が求められます。",
    },
    {
      question: "部活を途中でやめる場合、進路に悪影響がありますか？",
      answer: "やめる『理由』によります。『成績が落ちているから』『勉強に専念したいから』などの前向きな理由であれば、面接官も理解します。一方、『つらいから』『つまらないから』というような後ろ向きな理由は、あまり良い印象を与えません。",
    },
    {
      question: "同好会と部活動は大学受験での扱いが違いますか？",
      answer: "公式な『部活動』ほどの評価にはならない傾向があります。ただし、同好会であっても『全国大会に出場した』『プロジェクトを完成させた』など、具体的な成果があれば、十分なアピール要素になります。",
    },
    {
      question: "兼部（複数の部活に所属）することは推薦入試で有利ですか？",
      answer: "多くの高校では兼部が禁止されているため、まずは学校のルールを確認してください。兼部が可能であっても、どちらも中途半端になるより、1つの部活に本気で取り組む方が、推薦入試では有利に評価されます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の部活動選び｜勉強との両立と進路への影響 | School Station"
        description="高校の部活動の選び方と勉強との両立方法を解説。文化系・体育系の特徴から、部活動が大学受験・進路選択に与える影響、時間管理のコツまで詳しく紹介。"
        canonical="/column/koukou-bukatsu/"
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
            "headline": "高校の部活動選び｜勉強との両立と進路への影響",
            "description": "高校の部活動の選び方と勉強との両立方法を解説。文化系・体育系の特徴から、部活動が大学受験・進路選択に与える影響、時間管理のコツまで詳しく紹介。",
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
            高校の部活動選び完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            部活動の選び方、勉強との両立、進路選択への影響、時間管理のコツをすべて解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="部活動の種類と選び方のポイント" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の部活動は、学生生活の中でも『勉強以外の成長』をもたらす非常に重要な要素です。部活動の選択は、その後の3年間の高校生活を大きく左右するため、慎重に選ぶ必要があります。
          </Typography>

          <SubSection title="主な部活動の種類">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高校の部活動は、大きく『体育系』『文化系』『同好会』に分けられます。それぞれの特徴を理解することが、自分に合った部活動を選ぶ第一歩です。
              </Typography>
            </Box>

            <SubSection title="体育系部活動">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                野球、サッカー、バレーボール、陸上競技、テニスなど、スポーツを通じた競技活動が中心の部活動です。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>練習時間が長い</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      放課後の毎日の練習に加え、休日の練習・試合も多いため、週に15～20時間以上の時間投資が必要な場合もあります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>身体的な疲労がある</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      運動による疲労で、放課後勉強に集中しにくくなることがあります。ただし、継続的な鍛錬で体力・精神力が養われます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>推薦入試での評価が高い</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      スポーツ推薦や、推薦入試での部活動実績が高く評価される傾向があります。特に全国大会出場などの成績は大きなアピール材料になります。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="文化系部活動">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                吹奏楽、美術、茶道、映画研究、演劇、書道など、芸術・文化を中心とした活動です。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>練習時間が比較的少ない</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      体育系に比べて練習時間が短く、週5～10時間程度が目安です。そのため、勉強との両立がしやすいです。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>個性的なスキルが身につく</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      楽器演奏、美術技法、伝統文化など、『その部活だからこそ学べる』専門的なスキルが習得できます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>文化祭などでの発表機会がある</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      文化祭や外部のコンクール・展覧会で成果を発表する機会が多いため、社会に向けた表現活動ができます。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="同好会">
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                学校公式の『部活動』ではなく、有志で集まって活動するグループです。アニメ研究会、バンド活動、ゲーム研究会など、ニッチな興味を追求できます。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>自由度が高い</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      部活動のような厳格なルールや練習方針に縛られず、メンバーで活動内容を自由に決められます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>推薦入試での評価は低い傾向</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      公式な『部活動』ではないため、推薦入試の評価対象になりにくいです。ただし、同好会で全国大会に出場するなど、具体的な成果があれば評価されることもあります。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </SubSection>
          </SubSection>

          <SubSection title="部活動選びの7つのポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>1. 本当に興味があるか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『推薦に有利だから』『友達がやってるから』という理由で選んでも、3年間続きません。自分が本当にやりたいことを選ぶことが最優先です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>2. 体力や適性はあるか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    体育系を選ぶなら、基本的な体力は必須です。文化系でも、楽器の才能や美術センスなど、向き不向きがあります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>3. 顧問の先生は信頼できるか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活動の成否は、顧問の先生の指導力に大きく左右されます。実績や評判を調べ、信頼できる顧問がいるか確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>4. 先輩・後輩の雰囲気は良いか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校見学やオープンキャンパスで、実際に部活動の様子を見たり、先輩の話を聞いたりして、人間関係の雰囲気を確認します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>5. 勉強との両立は現実的か</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    練習時間が多い部活なら、勉強時間を確保できるか冷静に判断します。定期テスト時の活動はどうなるのか、事前に確認することが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>6. 進路と合致しているか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    大学進学を目指すなら、推薦入試で評価されやすい実績を得られるか、一般入試との時間配分は大丈夫か、を考慮します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>7. 施設や設備は充実しているか</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    グラウンド、体育館、音楽室など、活動に必要な施設が整っているか確認します。古い設備では、やる気も減少しやすいです。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活動と勉強を両立するための時間管理" id="ryoritsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            部活動と勉強の両立は、多くの高校生が直面する課題です。ただし、適切な時間管理と勉強方法の工夫により、十分に両立することは可能です。
          </Typography>

          <SubSection title="平日の時間配分例">
            <Box sx={{ overflowX: "auto", mb: 3 }}>
              <Paper sx={{ p: 0 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", fontSize: "0.85rem" }}>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 1.5, fontWeight: 700 }}>時間帯</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 1.5, fontWeight: 700 }}>体育系部活</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 1.5, fontWeight: 700 }}>文化系部活</Box>
                  <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 1.5, fontWeight: 700 }}>部活なし</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5" }}>放課後～練習開始</Box>
                  <Box sx={{ p: 1.5 }}>軽食・休憩（30分）</Box>
                  <Box sx={{ p: 1.5 }}>勉強開始（30分）</Box>
                  <Box sx={{ p: 1.5 }}>勉強開始（1時間）</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5" }}>練習時間</Box>
                  <Box sx={{ p: 1.5 }}>部活（2.5～3時間）</Box>
                  <Box sx={{ p: 1.5 }}>部活（1～2時間）</Box>
                  <Box sx={{ p: 1.5 }}>勉強（2時間）</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5" }}>帰宅後</Box>
                  <Box sx={{ p: 1.5 }}>夜食・シャワー（1時間）</Box>
                  <Box sx={{ p: 1.5 }}>夜食・シャワー（45分）</Box>
                  <Box sx={{ p: 1.5 }}>夜食・シャワー（30分）</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5" }}>勉強時間</Box>
                  <Box sx={{ p: 1.5 }}>勉強（1.5～2時間）</Box>
                  <Box sx={{ p: 1.5 }}>勉強（2～2.5時間）</Box>
                  <Box sx={{ p: 1.5 }}>勉強（2.5時間）</Box>

                  <Box sx={{ p: 1.5, fontWeight: 600, bgcolor: "#F5F5F5" }}>就寝</Box>
                  <Box sx={{ p: 1.5 }}>23時～24時</Box>
                  <Box sx={{ p: 1.5 }}>23時</Box>
                  <Box sx={{ p: 1.5 }}>22時30分～23時</Box>
                </Box>
              </Paper>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              体育系でも、1日1.5～2時間の勉強時間を確保することで、定期テスト対策や大学受験準備は可能です。重要なのは『毎日継続すること』です。
            </Typography>
          </SubSection>

          <SubSection title="効率的な勉強方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>スキマ時間を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    通学時間、昼休み、移動時間にも英単語や古文暗記など、『ながら学習』で効率化します。細切れ時間の積み重ねが、1日の勉強時間を大きく左右します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>週末に集中学習</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    土日は部活試合や練習がある場合もありますが、可能なら週末に3～5時間の集中学習時間を確保します。平日の細切れ勉強+週末の集中学習が理想的です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>定期テスト1週間前は練習量を調整</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    ほとんどの学校は、定期テスト1週間前は部活動が休みになります。この期間を最大限活用し、定期テストに向けた集中学習に充てます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>授業の予習復習を重視</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    授業の理解が深ければ、その後の復習時間を削減でき、全体の勉強効率が上がります。疲れていても、授業だけは集中して受けることが大切です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活動が大学受験・進路選択に与える影響" id="shinro">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            部活動での経験は、単に『高校の思い出』になるだけではなく、大学受験や進路選択にも直接的な影響を与えます。
          </Typography>

          <SubSection title="推薦入試・総合型選抜での評価">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                推薦入試や総合型選抜では、『学力試験がない、または簡易的である』という特徴があります。その分、部活動での実績や経験が、合否を決める重要な要素になります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>全国大会出場</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活動で全国大会に出場した、という実績は、大学の推薦入試で最高レベルの評価になります。『全国レベルで実績を出せる力がある』と判定されるためです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部長・副部長などのリーダーシップ経験</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『部長として何を成し遂げたのか』という具体的な実績が評価されます。『人を統率できる能力』『困難を乗り越える力』『目標達成能力』などが、大学で求める資質になるためです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>3年継続</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高1から高3まで同じ部活を継続した、という事実だけでも、『忍耐力がある』『目標を最後までやり遂げられる』という高い評価につながります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部活から学んだことの明確な表現</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『部活を通じて、〇〇というスキルが身についた』『△△という経験から、こんなことを学んだ』という、『経験→学び→成長』が明確に説明できることが重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="一般入試での影響">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              一般入試では、『調査書（内申点）』に部活動の実績が記載されます。また、大学の面接がある場合は、部活動での経験について質問されることもあります。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>調査書の評価</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    多くの大学は、一般入試でも調査書を評価の対象にしています。部活動での実績があれば、調査書の評価が高まり、合否判定時にプラスに働きます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>面接試験での話題</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『あなたはこの大学で何をしたいですか』という質問に対し、『高校の部活で学んだ経験を、大学でもさらに発展させたい』という具体的な答えができるようになります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進路選択への影響">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              部活動での経験は、『どの進路を選ぶか』という判断にも影響を与えます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>適性の発見</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活動を通じて『自分は〇〇というスキルに向いている』『△△という分野に興味がある』という気づきが得られ、進学先の選択に役立ちます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>将来の職業決定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活での成功経験や失敗経験が、『将来はこんな仕事をしたい』という職業選択につながることもあります。例えば、野球部で学んだコーチング経験が、スポーツ心理学への進学につながる、など。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活を途中でやめる場合の考え方" id="yameru">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『部活をやめたい』という状況に直面する人も少なくありません。その場合、どのように判断し、進路選択に影響させないようにするかが重要です。
          </Typography>

          <SubSection title="部活をやめても大丈夫な場合">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『勉強に専念したい』という明確な目標がある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『定期テスト成績が落ちているから』『大学受験に本気で向き合いたいから』という理由であれば、推薦入試の面接でも、『勉強と部活のバランスを考えた結果の判断』として、一定の評価を得られる可能性があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>健康上の理由がある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    ケガや病気で部活を続けられなくなった場合は、やむを得ない判断として受け入れられます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部活をやめた後も、他の活動で実績を出している</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活をやめた後に、『生徒会に立候補した』『資格取得に真摯に取り組んだ』『ボランティア活動に参加した』など、他の成果を出していれば、推薦入試の評価が下がることはありません。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="部活をやめると不利になる可能性がある場合">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『つらいから』『友人関係がうまくいってないから』という後ろ向きな理由</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『困難から逃げるクセがある』『人間関係を構築する能力がない』と判定されやすく、推薦入試の評価に悪影響を与えます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部活をやめた後、特に何もしていない</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活をやめて時間が余ったのに、『特に何もしていない』という状態では、『この生徒は継続力や目標設定能力がない』という判定になってしまいます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="部活をやめる場合の対策">
            <Box sx={{ bgcolor: "#FFF9E6", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                部活をやめることが避けられない場合は、『やめた後に何をするか』が重要です。『勉強に専念する』『生徒会に参加する』『資格取得を目指す』など、『部活の代わりに、別の成果を出す』という明確な行動計画を立てることで、推薦入試での評価を維持することができます。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            部活選びが高校生活を左右する
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3, maxWidth: 600, mx: "auto" }}>
            部活動は、単に『趣味の活動』ではなく、勉強と両立させることで、大学受験や進路選択に大きな影響を与えます。自分に合った部活を選び、3年間で最大限成長することを目指しましょう。
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
              全国の高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
