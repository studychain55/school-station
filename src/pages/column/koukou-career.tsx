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

export default function KoukouCareerPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較" },
  ];

  const faqItems = [
    {
      question: "高校卒業後の進路は決まった方が良いですか？",
      answer: "高校卒業時にすべてが決まっていなくても問題ありませんが、進学や就職には準備期間が必要です。遅くても高2の終わりには大まかな進路方針を決めることが、受験対策や就職活動を効率的に進めるために大切です。自分の適性・興味・経済状況を考慮し、柔軟に進路を検討しましょう。",
    },
    {
      question: "大学進学と就職、どちらを選ぶべきですか？",
      answer: "目指す職業によって選択は異なります。弁護士・医者・研究者など専門資格が必要な職業を目指すなら大学進学が必須です。一方、実務スキルを早期に身につけたい場合や、特定の技術職を目指すなら就職が最適です。自分のキャリアビジョンと経済状況から判断することが重要です。",
    },
    {
      question: "専門学校と短大の違いは何ですか？",
      answer: "専門学校は実務的な技術や技能に特化した実践的教育を2年制で提供し、修了後は高度専門士や専門士の称号を得ます。短大は教養と専門知識をバランスよく学ぶ2年制の高等教育機関で、短期大学士の学位が与えられます。専門学校は実務スキル重視、短大はより広い教養を学ぶという特徴があります。",
    },
    {
      question: "高卒就職のメリットは何ですか？",
      answer: "高卒就職のメリットは、早期に給与を得られること、実務経験を積める、生涯賃金が大卒と遜色ない職種も多いこと、同期との関係が深いこと、などが挙げられます。また、企業の育成制度を活用して必要な資格を取得できる場合も多いです。ただし職種が限定される傾向もあるため、将来のキャリアパスを見据えることが重要です。",
    },
    {
      question: "大学進学後に進路を変更することはできますか？",
      answer: "もちろん可能です。大学入学後に専攻や目標が変わることはよくあります。進路変更は編入試験、大学院進学、資格取得、留学など複数の方法があります。ただし時間と費用がかかる場合があるため、高校時点での準備や情報収集は重要です。柔軟に対応できる環境を整えることをお勧めします。",
    },
    {
      question: "ギャップイヤーは日本で認識されていますか？",
      answer: "日本ではまだ一般的ではありませんが、認識は高まっています。大学の入学時期を柔軟に対応する制度も増えており、海外留学やボランティア、インターンシップに充てる学生が増えています。ただし就職活動やキャリアに影響する可能性があるため、事前に計画を立て、目的を明確にしておくことが大切です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較 | School Station"
        description="高校卒業後の主な進路（大学・短大・専門学校・就職・留学）のメリット・デメリットを比較。自分の目標・適性・経済状況に合った進路を選ぶための考え方を解説。"
        canonical="/column/koukou-career/"
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
            "headline": "高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較",
            "description": "高校卒業後の主な進路（大学・短大・専門学校・就職・留学）のメリット・デメリットを比較。自分の目標・適性・経済状況に合った進路を選ぶための考え方を解説。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校卒業後の進路選択
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            大学・専門学校・就職・留学のメリット・デメリットを比較し、自分に最適な進路を選びましょう
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校卒業後の主な進路の種類" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校卒業後には、大学進学、短期大学、専門学校進学、就職（高卒就職）、留学・ギャップイヤーなど、多くの進路選択肢があります。各進路には異なるメリット・デメリット、費用、キャリアパスがあります。自分の将来のビジョン、適性、経済状況から最適な進路を選ぶことが大切です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>4年制大学</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>より広い教養と専門知識を学べ、資格取得や研究に有利。大学院進学の道も開かれています。</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>短期大学</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>2年で実践的な専門知識と教養を学べます。高卒と4年制大学の中間的な選択肢です。</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>専門学校</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>実務スキルに特化した教育を受けられます。即戦力として就職できる職種が多いです。</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>高卒就職</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>早期に給与を得られ、実務経験を積めます。生涯賃金が遜色ない職種も多くあります。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="大学進学のメリット・デメリット" id="university">
          <SubSection title="大学進学のメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>広い視野と深い専門知識</strong> — 教養教育と専門教育をバランスよく学べ、人生観が広がる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>資格取得に有利</strong> — 医師、弁護士、研究職など多くの職業に必須か有利
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学院進学が可能</strong> — 研究職やより高度な専門職を目指せる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生涯賃金が高い傾向</strong> — 統計的には高卒や短大卒より生涯賃金が高い場合が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>人脈形成の機会</strong> — 同じ目標を持つ仲間や多くの人間関係を築ける
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="大学進学のデメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>費用が高額</strong> — 4年間で国公立大学なら400〜500万円、私立大学なら600〜800万円以上必要な場合が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>社会人になるまでに時間がかかる</strong> — 最短でも22歳での就職となり、就職後のキャリアスタートが遅れる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実務経験がない</strong> — 座学中心のため、実務スキルは就職後に学ぶことになる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>就職が保証されない</strong> — 大卒資格があっても希望職種への就職が保証されるわけではない
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="専門学校・短大の特徴と向いている人" id="specialized">
          <SubSection title="専門学校とは">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                専門学校は実務的な技能や技術の習得に特化した高等教育機関です。2年制が一般的で、実践的な実習を通じてすぐに社会で役立つスキルを身につけられます。看護師、美容師、調理師、機械操作など、特定の職業に必要な技能を効率的に習得できることが特徴です。修了後は「高度専門士」や「専門士」の称号を得られます。
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              <strong>専門学校が向いている人：</strong>
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  実務スキルを早期に身につけたい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  具体的な職業目標が決まっている
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  短期間で社会人になりたい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  実践的な学習を好む
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="短期大学とは">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                短期大学は2年制の高等教育機関で、教養教育と専門教育をバランスよく学べます。4年制大学ほどではありませんが、幅広い知識を学びながら、実践的な技能も習得できます。修了後は「短期大学士」の学位が与えられ、4年制大学への編入も可能です。文科系・理科系・芸術系など、多くの分野の短大があります。
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              <strong>短大が向いている人：</strong>
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  広い教養と専門知識をバランスよく学びたい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  費用を抑えながら高等教育を受けたい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  進学と就職の両立を目指したい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  4年制大学への編入を考慮したい
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高卒就職のメリット・デメリット" id="employment">
          <SubSection title="高卒就職のメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>早期に給与を得られる</strong> — 18歳から給与収入があり、経済的に自立できる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実務経験を積める</strong> — 学生時代から実務スキルを習得でき、キャリアを築きやすい
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>深い人間関係</strong> — 同期との関係が強く、長期的な職場環境が安定することが多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生涯賃金が高い場合も</strong> — 職種によっては大卒と遜色ない生涯賃金を得られる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>企業の育成制度を活用</strong> — 資格取得や研修を企業が負担してくれることが多い
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高卒就職のデメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>職種が限定される傾向</strong> — 高卒採用は製造業、建設業、サービス業など特定業種に偏ることが多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>管理職昇進に不利</strong> — 大卒が昇進条件になっている企業が多く、昇進の道が閉ざされることもある
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生涯賃金が低い傾向</strong> — 統計的には大卒より生涯賃金が低い場合が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学の道が閉ざされやすい</strong> — 後から進学したくなった場合、働きながらの学習は困難
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>転職が困難な場合も</strong> — 高卒資格だけでは転職先の選択肢が限られることがある
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="留学・ギャップイヤーという選択肢" id="abroad">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校卒業後、すぐに進学や就職をするのではなく、留学やギャップイヤー（休学年）を選ぶ選択肢もあります。これは自分の将来について深く考える時間、海外での経験、自分探しの期間として活用できます。
          </Typography>

          <SubSection title="海外留学">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高卒後、海外の大学や語学学校に進学する選択肢があります。海外の大学進学は、国際的な視野を広げ、英語力を向上させ、異文化理解を深められることが大きなメリットです。一方、費用が高額、言語の障壁、帰国後のキャリアパスが不明確になる可能性があります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="ギャップイヤー">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                ギャップイヤーは、高卒後1年程度、進学や就職をせず、ボランティア、インターンシップ、旅行、自分探しに充てる期間です。日本ではまだ一般的ではありませんが、欧米では普遍的な選択肢です。自分の将来について深く考え、本当にやりたいことを見つけるための貴重な時間になります。ただし、日本の就職活動では「既卒」という扱いになり、採用選考に影響する可能性があるため、事前計画が重要です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="進路選びのフレームワーク（目標・適性・費用）" id="framework">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            進路選びで大切なのは、自分の「目標」「適性」「経済状況」の3つの要素を総合的に判断することです。以下のフレームワークを参考に、自分に最適な進路を探してみましょう。
          </Typography>

          <SubSection title="1. 目標（キャリアビジョン）から逆算する">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                まず、将来なりたい職業や達成したい目標を考えてみてください。医師・弁護士・公務員など資格が必要な職業がありますか？それとも、実務スキルが重視される職業ですか？目指す職業に必要な学歴や資格を確認し、それに合った進路を選ぶことが成功への近道です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="2. 適性（興味・才能）を理解する">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                勉強は好きですか？それとも実践的な学習を好みますか？学校での人間関係を重視しますか？自分の適性を理解することで、大学進学が向くのか、専門学校が向くのか、就職が向くのかが見えてきます。適性に合った進路を選ぶことで、充実度が高まります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="3. 経済状況を現実的に判断する">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                大学進学には多額の費用が必要です。親の支援が期待できるのか、奨学金に頼るのか、自分でアルバイトしながら賄うのか。経済的な制約を現実的に判断し、無理のない進路選びをすることが大切です。奨学金制度や教育ローンについても事前に調べておきましょう。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="進路選択フレームワーク図">
            <Paper sx={{ p: 3, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>Step 1: 目標を決める</strong> → なりたい職業、実現したい夢<br />
                ↓<br />
                <strong>Step 2: 必要な学歴・資格を確認</strong> → 大学必須？短大・専門学校で足りる？<br />
                ↓<br />
                <strong>Step 3: 自分の適性を考える</strong> → 勉強好き？実践的学習好き？<br />
                ↓<br />
                <strong>Step 4: 経済状況を判断</strong> → 親の支援は？奨学金利用可能？<br />
                ↓<br />
                <strong>Step 5: 進路を決定</strong> → 大学・短大・専門学校・就職・留学から選択
              </Typography>
            </Paper>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#0D47A1", mb: 3 }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* Related Links */}
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#0D47A1", mb: 3 }}>
            関連コラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
            <Link href="/column/daigaku-juken/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1" } }}>
                高校から大学受験を見据えた学習計画の立て方
              </Box>
            </Link>
            <Link href="/column/koukou-seikatsu/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1" } }}>
                高校生活を充実させる方法｜勉強・部活・友達・行事の両立
              </Box>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1" } }}>
                志望校の選び方｜受験校を決める5つの基準
              </Box>
            </Link>
            <Link href="/column/koukou-hensachi/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1" } }}>
                偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>

      {/* Navigation */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1565C0", fontWeight: 600, "&:hover": { opacity: 0.7 } }}>
              <ArrowBackIcon sx={{ fontSize: "1.1rem" }} />
              コラム一覧に戻る
            </Box>
          </Link>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1565C0", fontWeight: 600, "&:hover": { opacity: 0.7 } }}>
              高校偏差値ランキング
              <ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
