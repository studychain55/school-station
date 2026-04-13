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

export default function SuisenNyushiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の推薦入試対策｜学校推薦型・総合型選抜の違いと面接のコツ" },
  ];

  const faqItems = [
    {
      question: "推薦入試と一般入試の最大の違いは何ですか？",
      answer: "推薦入試は、中学校の推薦に基づいて学力試験なしや基礎的な試験のみで選考される入試です。一般入試は、5教科の学力試験と調査書による総合評価で判定されます。推薦入試は内申点が極めて重要な役割を担います。",
    },
    {
      question: "学校推薦型と総合型選抜の違いは？",
      answer: "学校推薦型は、中学校の推薦が必須で、学力試験がない場合が多いです。総合型選抜は、推薦がなくても出願でき、本人の特技や実績、志望動機などが重視されます。総合型選抜は自分で意思決定して出願できる柔軟性があります。",
    },
    {
      question: "内申点は何で決まるのですか？",
      answer: "内申点は、定期テストの成績、授業の取り組み、課題・提出物の完成度、授業態度、出席状況などから総合的に判定されます。定期テストだけでなく、日々の学習姿勢が非常に重要です。",
    },
    {
      question: "推薦入試で落ちることはありますか？",
      answer: "はい、推薦入試であっても落ちることはあります。学力試験がない、または簡単であっても、面接や作文で基準に達しなければ不合格となります。また、推薦条件を満たせば『必ず合格する』わけではありません。",
    },
    {
      question: "面接でよく聞かれる質問は何ですか？",
      answer: "『志望動機』『自分の長所・短所』『高校に入ってやりたいこと』『中学時代の経験から学んだこと』『10年後のあなたの目標』などが頻出です。面接官は、面接を通じて受験生の考え方や適性を総合的に判断します。",
    },
    {
      question: "推薦入試に合格した後、必ずその高校に入学しないといけないのですか？",
      answer: "推薦入試の形式によります。『専願』の推薦は、合格後の辞退が原則できません。一方、『併願推薦』では、推薦では合格しても一般入試に進むことができる場合があります。出願前に必ず確認しましょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の推薦入試対策｜学校推薦型・総合型選抜の違いと面接のコツ | School Station"
        description="高校受験の推薦入試（学校推薦型・総合型選抜）の仕組みと対策を解説。内申点の重要性、志望動機の書き方、面接の準備方法まで詳しく紹介。"
        canonical="/column/suisen-nyushi/"
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
            "headline": "高校の推薦入試対策｜学校推薦型・総合型選抜の違いと面接のコツ",
            "description": "高校受験の推薦入試（学校推薦型・総合型選抜）の仕組みと対策を解説。内申点の重要性、志望動機の書き方、面接の準備方法まで詳しく紹介。",
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
            高校の推薦入試対策完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            学校推薦型・総合型選抜の仕組み、内申点対策、面接準備まですべてを解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="推薦入試の種類を理解する" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校受験の推薦入試には、大きく分けて「学校推薦型」と「総合型選抜」の2つの種類があります。それぞれ異なる特徴と対策が必要です。まずはこの2つの違いを理解することから、推薦入試対策はスタートします。
          </Typography>

          <SubSection title="学校推薦型選抜">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                学校推薦型選抜は、中学校の校長が推薦を行い、成績（内申点）が基準を満たしていることが出願条件となる入試形式です。学力試験がない、または簡易的な試験で判定される場合が多いです。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦の条件：</strong> 通常、各学年の内申点平均が3.5以上（5段階評定）など、学校が定めた基準をクリアしていることが必須です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>選考方法：</strong> 面接や作文、場合によっては簡単な学力試験が実施されます。学力試験よりも、面接や小論文での評価がより重視される傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専願性：</strong> ほとんどの学校推薦型選抜は「専願」です。つまり、その高校に合格した場合は、必ずその高校に進学することが約束となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="総合型選抜">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                総合型選抜は、推薦がなくても本人の意思で出願でき、学力試験がないか簡易的で、本人の適性、志望動機、特技・経験、将来の目標などが総合的に判定される入試形式です。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出願資格：</strong> 学校推薦型ほど厳しい内申点の基準がない場合が多いです。本人の意思表示が何より重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>選考方法：</strong> 志望理由書、面接、適性検査など多面的な評価が行われます。『なぜこの高校に行きたいのか』という強い動機が重視されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>併願可能性：</strong> 総合型選抜で不合格となった場合、他校の総合型選抜や一般入試に進む選択肢があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="内申点の重要性と上げ方" id="naishin">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試において、内申点はあなたの「学校生活での評価」を示す最も重要な指標です。内申点が高いほど、推薦を受けられる確率が高まり、また合格の可能性が大きく高まります。
          </Typography>

          <SubSection title="内申点が決まる要因">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>定期テストの成績（50%程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    定期テストの点数が内申点決定の最大要因です。年4回の定期テストすべてで高い点数を取ることが重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>授業態度と参加度（30%程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    積極的な挙手、発言、グループワークへの貢献など、授業中の主体的な態度が評価されます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>提出物・課題（15%程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    宿題、課題、レポートの提出状況と完成度が評価されます。提出忘れは内申点に大きく影響します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出席状況・生活態度（5%程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    無遅刻無欠席、身だしなみ、廊下での過ごし方など、学校生活全般が評価されます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="今からできる内申点対策">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              内申点を上げるために、今からできる具体的な対策を実行しましょう。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期テスト対策を徹底：</strong> 最低でも2週間前から計画的に勉強を始め、全科目で安定した成績を取ることを目指します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>提出物は必ず期限内に：</strong> 宿題やレポートの未提出は内申点に大きなダメージを与えます。優先順位をつけて確実に提出します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業中は積極的に参加：</strong> 手を挙げて発言する、質問をするなど、先生の目に留まる行動を意識します。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出席状況を完璧に：</strong> 遅刻・欠席は絶対に避けます。やむを得ない場合は学校に必ず届け出ます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="志望動機書・自己推薦書の書き方" id="shobun">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試では、志望動機書や自己推薦書の質が非常に重要です。学力試験がない分、この書類で『あなたがどんな人物で、何を目指しているのか』が判定されます。
          </Typography>

          <SubSection title="志望動機書の書き方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>「なぜこの高校か」を具体的に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『進学実績が良い』『近い』などの曖昧な理由ではなく、『貴校の〇〇というカリキュラムで△△を学びたい』というように、その高校だからこそ、という理由を具体的に述べます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>中学時代の経験と結びつける</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    中学時代の部活動、勉強、生徒会活動などの経験が、なぜこの高校を志望するのかにつながっているかを説明します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>高校入学後の目標を明確に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『高校では何をしたいのか』『将来どうなりたいのか』という前向きな目標を述べることで、志望校への本気度を示します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>誤字脱字をなくす</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    誤字脱字は『注意力がない』という悪い印象につながります。必ず複数回見直し、完璧な状態で提出します。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="自己推薦書の書き方">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                自己推薦書は、志望動機書と異なり、『あなた自身の強み、実績、個性』をアピールする書類です。中学時代の成果や学んだことを、できるだけ具体的かつ説得力を持って表現することが大切です。
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              自己推薦書で効果的にアピールするポイント：
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体的な実績を数字で示す：</strong> 『部活で全国大会に出場』『英検2級取得』『生徒会副会長として行事改革を実現』など、数字や成果で示すことで説得力が増します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>失敗から学んだことをアピール：</strong> 失敗自体は悪くありません。『失敗からどう立ち直ったか』『何を学んだか』という成長の姿勢が大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>オリジナリティを出す：</strong> 『頑張りました』だけでなく、『自分にしかない個性や考え方』を表現することで、面接官の記憶に残りやすくなります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="面接対策：よく聞かれる質問と回答のコツ" id="mensetsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試の面接では、面接官は『この受験生が高校でしっかり勉強・成長できるか』『高校の校風に合っているか』を判断しようとしています。事前の対策と練習が成功のカギとなります。
          </Typography>

          <SubSection title="頻出質問と回答のポイント">
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#1e782d" }}>1. 「なぜ本校を志望しましたか」</Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                <strong>ポイント：</strong> その高校の『何が自分を惹きつけたのか』を具体的に述べます。教育方針、部活動、進学実績、施設など、実際にリサーチした情報を盛り込むことで、『本当に志望している』という姿勢が伝わります。
              </Typography>
              <Box sx={{ bgcolor: "#FFF9E6", p: 2, borderRadius: 1, borderLeft: "3px solid #FF6F00" }}>
                <Typography variant="body2" sx={{ color: "#424242", fontStyle: "italic" }}>
                  例：「貴校の課題研究という特色あるカリキュラムで、〇〇について深く学びたいと考え、志望しました。」
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#1e782d" }}>2. 「あなたの長所と短所を教えてください」</Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                <strong>ポイント：</strong> 長所は『具体的な状況』で示します。短所を述べる際は、『改善するための努力』を一緒に述べることで、前向きな姿勢を示せます。
              </Typography>
              <Box sx={{ bgcolor: "#FFF9E6", p: 2, borderRadius: 1, borderLeft: "3px solid #FF6F00" }}>
                <Typography variant="body2" sx={{ color: "#424242", fontStyle: "italic" }}>
                  例：「長所は継続力です。部活で1000日連続練習を達成しました。短所は細かいところが雑ですが、チェックリストを作って改善しています。」
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#1e782d" }}>3. 「高校に入ってやりたいことは何ですか」</Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                <strong>ポイント：</strong> 部活動、勉強、生徒会など、複数の観点から、具体的で実現可能な目標を述べます。『頑張ります』だけでなく、『どうやって実現するか』という行動計画も含めるとより説得力があります。
              </Typography>
              <Box sx={{ bgcolor: "#FFF9E6", p: 2, borderRadius: 1, borderLeft: "3px solid #FF6F00" }}>
                <Typography variant="body2" sx={{ color: "#424242", fontStyle: "italic" }}>
                  例：「バレーボール部で全国大会出場を目指すとともに、定期テストで学年上位10位を維持したいです。」
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#1e782d" }}>4. 「中学時代の経験で一番成長したことは何ですか」</Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                <strong>ポイント：</strong> 具体的な『状況』『そこから学んだこと』『その後の行動変化』を３段階で説明します。これにより、面接官は『この生徒は経験から学び、成長できる人物』と判断します。
              </Typography>
              <Box sx={{ bgcolor: "#FFF9E6", p: 2, borderRadius: 1, borderLeft: "3px solid #FF6F00" }}>
                <Typography variant="body2" sx={{ color: "#424242", fontStyle: "italic" }}>
                  例：「生徒会の役員選挙で落選しました。その悔しさから、『信頼を得るには日々の行動が重要』と学び、その後は無遅刻無欠席を徹底し、翌年の選挙で当選しました。」
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#1e782d" }}>5. 「10年後のあなたを想像してください」</Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                <strong>ポイント：</strong> 将来像を述べることで、『人生設計ができている』『この高校でそれに向けて取り組む意思がある』という姿勢を示します。職業に限定せず、『どんな大人になりたいか』という視点も重要です。
              </Typography>
              <Box sx={{ bgcolor: "#FFF9E6", p: 2, borderRadius: 1, borderLeft: "3px solid #FF6F00" }}>
                <Typography variant="body2" sx={{ color: "#424242", fontStyle: "italic" }}>
                  例：「大学で〇〇を学び、人の役に立つ仕事に就きたいです。そのために、高校では基礎学力をしっかり固め、視野を広げたいと考えています。」
                </Typography>
              </Box>
            </Box>
          </SubSection>

          <SubSection title="面接で気をつけるべきマナー">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>身だしなみ：</strong> 髪は整える、制服はしわなく、靴は磨くなど、清潔感を心がけます。第一印象は非常に重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>入退室：</strong> ノック3回、『失礼します』と大きな声で言い、着席してから自己紹介などを始めます。最後も『ありがとうございました』と言って退室します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>視線と笑顔：</strong> 相手の目を見て、笑顔で話します。緊張していても、前向きな表情を心がけます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>言葉遣い：</strong> 敬語を正しく使い、『あの、その』などの言葉を避けます。落ち着いたペースで、はっきり話します。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>姿勢：</strong> 背筋を伸ばし、椅子に深く腰かけます。貧乏揺すりや腕組みなど、落ち着きのない態度は避けます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試のメリット・デメリット" id="merit">
          <SubSection title="メリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学力試験の負担が軽い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学力試験がないか簡易的なため、5教科すべてを完璧に準備する必要がなく、心理的な負担が軽くなります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>合格確率が高い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦条件を満たしていれば、一般入試より合格する確率が高いことが多いです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>入試時期が早い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦入試は一般入試より早く実施されるため、合格が決まると精神的に楽になり、高校入学準備に時間をかけられます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="デメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>内申点の基準がある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦を受けるには、内申点が一定以上必要です。中学1年生からの継続的な勉強と学校生活が求められます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>落ちる可能性もある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦=合格ではありません。面接や作文で基準に達しなければ不合格となり、その後の進路変更が難しくなる場合があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学力が身につきにくい可能性</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学力試験が簡易的なため、基礎学力をしっかり身につけないまま高校に進学すると、高校での勉強についていけなくなることがあります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
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
            推薦入試対策は今からが勝負
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3, maxWidth: 600, mx: "auto" }}>
            内申点、志望動機書、面接。すべての準備を計画的に進めることで、推薦入試での合格をぐんと近づけることができます。
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
