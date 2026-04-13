import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaletteIcon from "@mui/icons-material/Palette";

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

export default function KoukouArtsPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "音楽・美術・芸術系高校の選び方｜専門的な教育環境と進学先" },
  ];

  const faqItems = [
    {
      question: "音楽科・美術科と普通科の違いは何ですか？",
      answer: "音楽科・美術科は、それぞれの芸術分野を専門的に学ぶ学科です。普通科の音楽・美術の選択科目とは異なり、週12～18時間の実技授業が組まれています。楽器演奏の技術向上、作品制作の実践、音楽理論・美術史などの座学が統合されたカリキュラムです。将来的に芸術分野を職業とすることを前提とした教育が行われます。",
    },
    {
      question: "芸術系高校の入試では実技試験がありますか？",
      answer: "はい、実技試験は最重要試験です。音楽科では楽器演奏試験（50～100点配点）と聴音・視唱試験が課されます。美術科ではデッサン、色彩構成、制作実技など（100点以上配点）が課されます。学力試験よりも実技成績の方が合否判定に大きく影響する傾向があります。",
    },
    {
      question: "芸術系高校から一般大学や他学部への進学は可能ですか？",
      answer: "可能です。ただし進学先は限定される傾向があります。音楽科卒業生の約70～80%が芸術系大学に進学し、10～15%が一般大学の教育学部や経営学部に進学します。3年間で芸術系科目に多くの時間を割くため、他学部を目指す場合は自学自習で学力を高める必要があります。",
    },
    {
      question: "芸術系大学への進学実績が高い高校はどこですか？",
      answer: "音楽科・美術科を持つ高校は全国約200校あり、うち進学校系約80校は国公立大学や難関私立大学への進学実績が豊富です。例えば、都立総合芸術高校、京都教育大学附属高校、福岡県立福岡高等学園など、設置地域によって異なります。オープンキャンパスで進学実績を確認することが重要です。",
    },
    {
      question: "ポートフォリオ（作品集）の作成はいつから始めるべきですか？",
      answer: "高1から意識的に良い作品を保管し、高2年秋以降に本格的なポートフォリオ制作を開始することが目安です。多くの芸術系大学の推薦入試では、高2までの作品20～30点でポートフォリオを構成します。高1段階で複数の技法や表現方法を試し、自分のスタイルを見つけることが重要です。",
    },
    {
      question: "芸術系高校卒業後、就職する場合の進路はどんなものがありますか？",
      answer: "高卒での就職は、フリーランス音楽家・アーティスト、楽器店スタッフ、美術館・博物館職員、デザイン会社、舞台制作会社など多様です。ただ多くの企業では大卒以上を採用基準にしているため、高卒での就職後のキャリア形成は限定される傾向があります。大学進学を検討することが就職先の幅を広げます。",
    },
  ];

  return (
    <>
      <SEO
        title="音楽・美術・芸術系高校の選び方｜専門的な教育環境と進学先 | School Station"
        description="芸術系高校の種類（音楽科・美術科・演劇科・舞踊科）と特徴、普通高校の芸術選択との違い、芸術系大学への進学実績・推薦枠、実技試験対策、ポートフォリオ作成、卒業後の就職・進路の現実を完全解説。"
        canonical="/column/koukou-arts/"
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
            "headline": "音楽・美術・芸術系高校の選び方｜専門的な教育環境と進学先",
            "description": "芸術系高校の種類（音楽科・美術科・演劇科・舞踊科）と特徴、普通高校の芸術選択との違い、芸術系大学への進学実績・推薦枠、実技試験対策、ポートフォリオ作成、卒業後の就職・進路の現実を完全解説。",
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
            background: "linear-gradient(135deg, #7B1FA2 0%, #9C27B0 50%, #BA68C8 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            音楽・美術・芸術系高校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#F3E5F5", maxWidth: 600, mx: "auto" }}>
            専門的な教育環境と進学先を徹底解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="芸術系高校の種類と特徴" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            日本全国には、音楽・美術・演劇・舞踊など、様々な芸術分野に特化した高校が約200校あります。これらの学校では、音楽や美術を趣味や選択科目としてではなく、専門的な学問と技能の習得を目指しています。入学からその卒業まで、通常の高校よりもはるかに多い時間を芸術実習に費やし、基礎技能から応用、さらには創作・発信まで、一連の芸術教育を受けます。
          </Typography>

          <SubSection title="音楽科の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              音楽科は、楽器演奏技能、声楽、音楽理論、音楽史などを総合的に学ぶ学科です。全国約100校の高校に設置されており、最も設置数が多い芸術科です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実習時間</strong> — 週12～16時間の器楽演奏実習、週3～5時間のソルフェージュ（音感訓練）、週2～3時間の座学（音楽理論・音楽史）が組み込まれています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>楽器種</strong> — ピアノ、ヴァイオリン、チェロ、フルート、オーボエ、クラリネット、トランペット、声楽など、複数の楽器から1つを選択し、専門的に学びます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>プレイスメント試験</strong> — 入学時に実施され、実技成績に基づいて「専攻」が決定されます。初心者と経験者では習得速度が異なるため、指導者は実技水準に応じたグループ分けを行うことが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期演奏会</strong> — 音楽科のある高校では、秋の定期演奏会が最大の学校行事です。1年生から演奏機会があり、舞台経験を通じて技能向上を図ります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="美術科の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              美術科は、絵画、彫刻、デッサン、工芸など、総合的な美術表現を学ぶ学科です。全国約80校に設置されており、美術系高校の中では最も一般的です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実習科目</strong> — デッサン（週4～5時間）、油彩・アクリル画（週4～5時間）、彫刻（週2～3時間）、版画（週2～3時間）、デザイン（週3～4時間）など、多種多様な技法を学びます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>制作重視</strong> — 座学よりも制作実習が主体です。生徒は年間20～30点の大型作品を制作し、ポートフォリオ形成が進みます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>卒業制作展</strong> — 3年生の卒業制作展は、美術館レベルの大規模展示となります。在学中の全作品の中から最高傑作を出展し、専門家からの評価を受けます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>工芸科の特色</strong> — 陶芸、漆芸、木工、テキスタイルなどの伝統工芸を学ぶコースがある高校もあります。日本文化の継承と発展を目指した教育が行われています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="演劇科・舞踊科の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              演劇科・舞踊科は、舞台芸術を中心に学ぶ比較的小規模な学科です。全国約30校に設置されており、設置校が限定されています。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>演劇科</strong> — 演技実習（週5～6時間）、戯曲研究、舞台製作実習が中核です。学園祭や地域の演劇祭での公演を通じて、プロの舞台経験を積みます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>舞踊科</strong> — クラシックバレエ（週4～5時間）、モダンダンス（週3～4時間）、日本舞踊（週1～2時間）などを学びます。体の柔軟性と表現力の育成が重点です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実績</strong> — 全国高校演劇大会や全国高校ダンスドリル選手権など、大規模大会への出場が目標です。全国大会での受賞経験が大学推薦に有利に働きます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="普通高校の芸術選択との違い" id="difference">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            普通科高校でも音楽・美術を選択して学ぶことが可能です。しかし、芸術科と普通科での学習内容・時間・深度は大きく異なります。芸術系高校への進学か、普通高校での芸術選択かを決める際は、これらの違いを理解することが重要です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr" }, gap: 3, mb: 3 }}>
            <Paper sx={{ p: 3, bgcolor: "#F3E5F5", border: "2px solid #7B1FA2" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#7B1FA2", mb: 2 }}>
                芸術科高校
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>実習時間：</strong>週12～18時間（総時間の30～40%）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>目的：</strong>プロフェッショナルな技能習得
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>進路：</strong>芸術系大学進学・芸術活動
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>進学実績：</strong>芸術系大学への推薦枠豊富
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>入試難度：</strong>実技重視で学力は二次的
                  </Typography>
                </ListItem>
              </List>
            </Paper>
            <Paper sx={{ p: 3, bgcolor: "#E8F5E9", border: "2px solid #2E7D32" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#2E7D32", mb: 2 }}>
                普通科高校（芸術選択）
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>実習時間：</strong>週2～3時間（総時間の5～8%）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>目的：</strong>教養としての芸術理解
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>進路：</strong>文系理系全般の大学進学
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>進学実績：</strong>芸術系大学への推薦は限定的
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>入試難度：</strong>学力が最重要で実技不問
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Box>

          <SubSection title="実際の選択肢とその判断基準">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>芸術を職業にしたい場合：</strong>芸術科高校への進学が強く推奨されます。専門的な技能習得と進学実績が有利です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学先の選択肢を広げたい場合：</strong>普通科高校の方が、医学部・工学部など芸術以外の学部への進学に有利です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ダブルスクール対応：</strong>普通科進学後、音楽教室や美術予備校に通いながら芸術系大学受験を目指すという選択肢もあります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="芸術系大学への進学実績と推薦枠" id="university">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            芸術科高校から芸術系大学への進学率は全国平均で70～75%と高く、大学進学時には大きなアドバンテージが得られます。普通科から芸術系大学を目指す場合と比較すると、推薦枠と進学難度に大きな差があります。
          </Typography>

          <SubSection title="主要な芸術系大学と推薦枠">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              日本の主要な芸術系大学は以下の通りです。各大学では、提携する高校からの推薦入試を実施しており、芸術科高校からは推薦枠が豊富に用意されています。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽系大学：</strong>東京音楽大学、国立音楽大学、桐朋学園大学、日本大学芸術学部、昭和音楽大学など。各大学で音楽科高校との提携関係が強く、推薦枠は各校10～30名。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術系大学：</strong>武蔵野美術大学、多摩美術大学、桑沢デザイン研究所、女子美術大学など。美術科高校との提携が強く、推薦枠は各校5～20名。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>国公立音楽大学：</strong>東京藝術大学、京都市立芸術大学など難関校でも、芸術科高校からの推薦受験者の合格率は50%程度と高い傾向があります。普通科から受験する場合の合格率は10～15%程度です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦入試での評価基準">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              芸術系大学の推薦入試では、以下の要素が評価されます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力成績（20～30%）</strong> — 国語・英語など基礎学力が評価されます。内申点3.5以上が推薦の目安。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実技試験（50～60%）</strong> — 楽器演奏、デッサン・色彩構成など、最も重要な審査要素です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ポートフォリオ・作品（15～20%）</strong> — 高1～高2までの主要作品や受賞歴が評価されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接・志望理由書（10～15%）</strong> — 芸術を学ぶ動機、大学で成し遂げたいことについて評価されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="芸術系高校の入試：実技試験とポートフォリオ対策" id="entrance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            芸術系高校への入学試験は、一般的な学力試験と大きく異なります。実技試験の配点が高く、準備期間も長期に及びます。
          </Typography>

          <SubSection title="音楽科の入試">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>楽器演奏試験（100～120点）</strong> — 自由曲1曲、課題曲1曲の2曲演奏。ピアノ科は2曲、声楽科はイタリア古典歌曲などから選曲。全国大会出場経験者でも合格が確実でないほどハイレベルです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>聴音試験（50点）</strong> — 流れてきた音を楽譜に書く試験。単旋律聴音から複合聴音まで、高度な音感が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>視唱試験（30点）</strong> — 初見で楽譜を読み歌う試験。音感と視譜能力が評価されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力試験（50～100点）</strong> — 国語・数学・英語の基礎的な問題。配点は実技の1/2程度に過ぎません。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="美術科の入試">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デッサン試験（100～120点）</strong> — 石膏像、りんご・立方体などの静物、人物デッサンなどから出題。3～4時間の実施時間で表現力・技法を評価されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>色彩構成（100点）</strong> — 与えられたテーマで色彩表現を行う試験。配色・構図・表現力が評価されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力試験（50～100点）</strong> — 国語・数学・英語の基礎問題。美術科の入試では、デッサン・色彩構成の配点が全体の70～80%を占めます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ポートフォリオ（作品集）の重要性">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              多くの芸術系高校では、入試時にポートフォリオ（A4判20～30ページの作品集）の提出を求めています。これは大学進学時だけでなく、高校入試でも重要な評価対象です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中1～中2までの作品</strong> — 基礎的なスケッチ、色彩練習、小作品などを保管しておくことが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中3での本格的なポートフォリオ制作</strong> — 秋～冬にかけて、最高の作品20～30点を厳選し、テーマ別に整理したポートフォリオを作成します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>多様な表現方法</strong> — デッサン、絵画、彫刻、工芸など、複数の技法で作成した作品を揃えることで、表現の幅広さを示せます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="卒業後の就職・進路の現実" id="career">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            芸術系高校卒業後の進路は、大学進学が中心ですが、一部の生徒は高卒での就職やフリーランス活動を選択します。現実的な進路情報を理解することが重要です。
          </Typography>

          <SubSection title="進路1：芸術系大学への進学（約70%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              最も一般的な進路は、芸術系大学への進学です。推薦入試と一般入試の双方で進学が実現されます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦入試での進学</strong> — 全国大会受賞、高成績生徒が推薦枠を利用し、学力試験免除で進学します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>一般入試での進学</strong> — 学力試験と実技試験の両方で合格を目指します。芸術科高校での実技レベルが高いため、入試合格率は80～90%と高い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進路2：他学部・総合大学への進学（約15～20%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              芸術系高校でも、進学先を芸術系大学に限定しない生徒がいます。教育学部、経営学部（スポーツマネジメント等）、情報学部などへの進学が見られます。ただし、実技時間が多い分、他学部受験のための学力対策が不十分になるリスクがあります。
            </Typography>
          </SubSection>

          <SubSection title="進路3：高卒での就職・フリーランス（約5～10%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              一部の優秀な生徒は、高卒でプロの音楽家・美術家として活動を開始します。しかし、多くの企業や演奏活動の場では大卒以上の学歴を求める傾向があるため、生涯キャリアを考慮すると大学進学が有利です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽家</strong> — 高卒で指揮者・演奏家として活動を開始する者は極少数。多くの場合、大学で更に高度な技能を習得してからプロ活動を開始します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術家・デザイナー</strong> — 高卒でフリーランスデザイナーとして活動する者は存在しますが、生涯年収は大卒の同業者より低い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽教室・美術教室の講師</strong> — 高卒での就職先として、ヤマハ音楽教室やカワイ音楽教室の講師職があります。年収は350～550万円程度です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="卒業後のキャリア形成への課題">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              芸術系高校卒業後、多くの生徒は大学で更なる専門教育を受けます。しかし、中には以下のような課題に直面する卒業生もいます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実績不足による進学先の限定</strong> — 全国大会入賞経験がない場合、推薦枠が得られず、一般入試での合格を目指す必要があります。その際、学力不足が課題になることが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>就職時の給与水準</strong> — 音楽教員（中高）の初任給は約210万円、フリーランス美術家の平均年収は約200～300万円と、一般職の初任給より低い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>セカンドキャリア戦略</strong> — 芸術分野での成功が不確実な場合に備えて、並行して一般的な職業スキルも習得することが、生涯キャリアリスク低減に重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Box sx={{ my: 4 }}>
          <Divider />
        </Box>

        <FAQ items={faqItems} />
      </Container>
    </>
  );
}
