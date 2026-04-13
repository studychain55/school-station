import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

export default function KoukouEventPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の体育祭・文化祭・修学旅行の魅力｜高校生活を充実させるイベントガイド" },
  ];

  const faqItems = [
    {
      question: "公立高校と私立高校のイベントに差はありますか？",
      answer: "大きな違いがあります。公立高校は予算の制約が多いため、シンプルで手作り感のあるイベントが特徴です。一方、私立高校は資金が豊富なため、大規模で豪華なイベントが多くあります。進学校は勉強時間の確保のため、イベント期間を短めに設定する傾向もあります。",
    },
    {
      question: "体育祭で実施される競技の種類は、どの高校でも同じですか？",
      answer: "いいえ、競技の種類は高校によって異なります。一般的な種目は騎馬戦やリレーですが、創意工夫を凝らしたオリジナル競技を実施する学校も多くあります。また、男女別競技と共学競技のバランスや、規模も学校によって異なります。",
    },
    {
      question: "文化祭でのパフォーマンスレベルは学校によって差がありますか？",
      answer: "あります。伝統的な文化祭を持つ学校は、生徒の出し物のクオリティが非常に高く、プロ並みのパフォーマンスを見ることができます。一方、化祭が比較的新しい学校は、発展途上段階であることが多いです。文化祭のレベルは学校の活力を示す指標の一つです。",
    },
    {
      question: "修学旅行の行き先によって学べることは異なりますか？",
      answer: "大きく異なります。歴史的な地を巡る修学旅行では日本史の深い理解が、海外への修学旅行では国際感覚と英語力の向上が期待できます。行き先によって学習テーマが設定されており、単なる観光地巡りではなく、学習の一環として位置づけられています。",
    },
    {
      question: "イベントが活発な学校と不活発な学校では、生徒の満足度に差がありますか？",
      answer: "大きな差があります。イベントが活発な学校の生徒は、学校生活への愛着が深く、卒業後の人間関係も良好です。また、イベント準備を通じてリーダーシップやチームワークが育成され、その経験は大学進学後の人間形成にも影響します。",
    },
    {
      question: "学校説明会でイベントの活発さをどう確認できますか？",
      answer: "過去のイベント写真を展示しているコーナーをチェックしましょう。また、在学生に『学園祭のレベルはどのくらい？』と質問するのも効果的です。学校のSNS（Instagram・TikTok）でイベント動画を公開している学校も増えており、実際の雰囲気を把握できます。",
    },
  ];

  return (
    <>
      <SEO
        title="高校の体育祭・文化祭・修学旅行の魅力｜高校生活を充実させるイベントガイド | School Station"
        description="高校の主要行事（体育祭・文化祭・修学旅行）の魅力と高校選びへの活かし方を解説。行事への参加度が高校生活の充実度に与える影響と、行事の充実した学校の見分け方を紹介。"
        canonical="/column/koukou-event/"
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
            "headline": "高校の体育祭・文化祭・修学旅行の魅力｜高校生活を充実させるイベントガイド",
            "description": "高校の主要行事（体育祭・文化祭・修学旅行）の魅力と高校選びへの活かし方を解説。行事への参加度が高校生活の充実度に与える影響と、行事の充実した学校の見分け方を紹介。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校の体育祭・文化祭・修学旅行の魅力
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            高校生活を充実させる主要イベントの特徴を理解し、学校選びに活かすための完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校生活でイベント・行事が重要な理由" id="importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校3年間の中で、体育祭・文化祭・修学旅行などの大型イベントは、単なる「楽しい時間」ではなく、人生を大きく左右する重要な経験となります。これらのイベントを通じて、友人関係が深まり、学校への愛着が形成され、一生の思い出が作られるのです。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>友人関係の深化</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>イベント準備を通じて、クラスメイトとの絆が深まります。協力して目標を達成する経験は、その後の人間関係構築に大きく影響します。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>学校への帰属意識</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>充実したイベントを経験することで、学校への愛着が深まります。この帰属意識が高まると、勉強へのモチベーションも向上します。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>リーダーシップの育成</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>イベント準備の中で、役割分担やチーム運営を学びます。これらの経験はリーダーシップや組織的思考力の育成につながります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>一生の思い出作り</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校時代の思い出は、生涯の精神的な支えになります。充実したイベント経験は、人生の質を高める重要な資産です。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="体育祭の特徴と学校による違い" id="taiikukai">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育祭は学校ごとに大きく異なります。公立高校と私立高校での違い、進学校と進学校でない学校での違いなど、様々な要因によって体育祭の規模や内容が変わってきます。
          </Typography>

          <SubSection title="公立高校の体育祭">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>予算の制約がある</strong> — 公立高校は公費で運営されるため、イベント予算が限定的です。派手な装飾や豪華な賞品は少ないですが、生徒たちの工夫と創意工夫で盛り上がります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実行委員会が中心</strong> — 体育祭の運営は生徒の実行委員会が担当します。生徒主導で進められるため、より自主性が育ちます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>手作り感がある</strong> — 看板や装飾は手作りされることが多く、温かみのある雰囲気が特徴です。その分、完成までのプロセスで友人関係が深まります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立高校の体育祭">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大規模で豪華</strong> — 私立高校は経営資金が豊富で、体育祭の予算も大きいです。大規模な看板、音響設備、豪華な賞品など、規模が大きいのが特徴です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>伝統が重視される</strong> — 多くの私立高校は長い歴史を持ち、毎年同じ形式で体育祭が開催されることが多いです。この伝統が学校のアイデンティティになっています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>企画が豊富</strong> — 予算が豊富なため、様々な趣向を凝らした企画が実施されます。招待選手によるパフォーマンスなど、エンターテイメント性が高いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進学校と進学校でない学校の体育祭の違い">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>進学校の体育祭：</strong>進学校では、受験勉強を優先するため、体育祭の期間を短めに設定する傾向があります。また、体育祭よりも文化祭に力を入れることが多いです。ただし、限られた時間の中で運営されるため、効率性が重視され、その経験が大学進学後に活かされます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>進学校でない学校の体育祭：</strong>進学校でない学校では、イベントに力を入れることが多く、体育祭の期間も長く、規模も大きいことが多いです。その結果、学校生活がより充実していると感じられます。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="文化祭の特徴と活発さの差" id="bunka">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文化祭は、学校の文化的レベルと生徒の活動意欲を最も如実に表すイベントです。同じ文化祭という名称でも、その内容と規模は学校によって大きく異なります。
          </Typography>

          <SubSection title="文化祭で見られる主な出し物">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>クラス企画</strong> — 屋台（焼きそば、たこ焼きなど）、劇、展示などが一般的です。クオリティは学校によって大きく異なります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動による発表</strong> — 音楽部、演劇部、ダンス部などが、完成度の高いパフォーマンスを披露します。この活発さが学校の文化レベルを示します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>有志企画</strong> — 音楽バンド、ダンスグループなど、有志による企画の質がその学校の文化的レベルを示す重要な指標です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="文化祭が活発な学校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>パフォーマンスの質が高い</strong> — プロ並みのクオリティを持つパフォーマンスが見られます。部活動や有志グループの実力が高く、準備期間に十分な時間をかけていることが分かります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出し物の多様性</strong> — 様々な種類の企画が実施されており、多くの生徒が参加しています。このことが学校全体の活気につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>来校者の多さ</strong> — 地域の人々や卒業生が訪れるほど、文化祭が充実していることを示します。学外からも注目される文化祭は、その学校の評判の高さを反映しています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="文化祭が不活発な学校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>出し物が少ない</strong> — クラス企画が屋台ばかり、部活動の発表がほとんどないなど、出し物の種類が限定的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>パフォーマンスの質が低い</strong> — 準備不足が見られ、本番での失敗やトラブルが多いです。これは学校全体の活気の低さを示しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>参加率が低い</strong> — 学校全体の雰囲気が盛り上がっていないことを示しています。一部の生徒だけが頑張っている傾向が見られます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="修学旅行の行き先・内容と学べること" id="shugaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            修学旅行は、学校の教育方針と学習目標を最も明確に反映するイベントです。行き先によって、生徒が学べる内容は大きく異なります。
          </Typography>

          <SubSection title="主要な修学旅行の行き先と学習テーマ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>京都・奈良（最も一般的）</strong> — 日本史の重要な遺跡を巡り、日本文化と歴史への深い理解を養います。多くの高校が選択する伝統的な行き先です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>広島（平和学習）</strong> — 原爆資料館の見学などを通じて、平和学習を重視する学校が選択します。社会的課題への関心が高まります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>海外（アメリカ、オーストラリア、東南アジアなど）</strong> — 国際感覚の育成と英語力の向上を目指す学校が選択します。生徒の視野が大きく広がります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>長野・信州（自然学習）</strong> — 自然環境と地域経済への理解を深めることを目的とする学校が選択します。環境問題への関心が高まります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ハワイ（グローバル教育）</strong> — グローバル教育に力を入れる学校が選択します。ハワイの多文化社会を学ぶ機会になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="修学旅行から何が学べるのか">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>教科学習の深化：</strong>国語・歴史・社会・地理など、様々な教科の学習内容をより深く理解できます。教科書の内容が実際の遺跡や現地の人との交流を通じて、生きた知識になります。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>人間関係の形成：</strong>一般的な行事よりも長期間、集団行動を共にするため、友人関係がより深まります。旅行先での課題解決を通じて、チームワークも向上します。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>自己啓発：</strong>新しい環境で新しい人間関係を作り、様々な課題に対応することで、自己啓発の機会になります。この経験は人生全体の視野を広げるきっかけになります。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="行事の活発さが学校選びの指標になる理由" id="indicator">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育祭・文化祭・修学旅行などのイベントの活発さは、その学校全体の教育的な質と生徒の充実度を示す重要な指標です。これらのイベントが活発な学校には、共通の特徴があります。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>学校の教育力の指標</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>イベント運営を通じて、企画・運営・実行の各段階で教育的な学びが生まれます。活発な学校は、生徒の主体性を尊重し、創造的思考を育成できている証拠です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>学校文化の豊かさ</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>学校に独自の文化がある学校は、イベントも活発です。学校の歴史の中で作られた伝統が、継続的にイベントの質を高めています。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>生徒モチベーションの高さ</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>学校全体のモチベーションが高い学校では、イベント準備に全力で取り組む生徒が多くいます。この雰囲気が全体を盛り上げます。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>進学実績への好影響</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>充実したイベント経験が、大学面接での自己PRにつながり、進学実績の向上にも貢献しています。イベント運営での経験は、大学でも高く評価されます。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="学校見学・説明会でイベント活発さを確認する方法" id="confirmation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            実際に高校を選ぶ際に、イベントの活発さをどう確認するか。学校見学や説明会の場で、気をつけるポイントをまとめました。
          </Typography>

          <SubSection title="学校見学の際にチェックするポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>イベント写真の展示</strong> — 校内にイベント写真が飾られているか、その規模と質を見ることで、イベントの活発さが分かります。写真が充実していれば、イベントが学校の大切な活動であることを示しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在学生への質問</strong> — 『学園祭はどのくらい盛り上がっていますか？』『体育祭の規模は？』と在学生に直接質問することで、実際の雰囲気が分かります。生徒の回答から、学校への愛着度も見えてきます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>施設の充実度</strong> — イベント用の施設（音響設備、舞台、体育館など）が充実していれば、学校がイベントに投資していることの証拠です。施設の充実度から学校の優先順位が見えてきます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="説明会で質問すべき内容">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『体育祭・文化祭の準備期間はどのくらいですか？』</strong> — 準備期間が長ければ長いほど、イベントに力を入れていることを示しています。進学校では準備期間が短い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『修学旅行の行き先と決定方針について教えてください』</strong> — 行き先から学校の教育方針が見えてきます。また、生徒の希望を反映した決定をしているかも重要な判断基準です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『部活動の発表会や文化祭での出し物について教えてください』</strong> — 部活動の活発さと文化祭での出し物のレベルから、学校全体の文化的レベルが推測できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="SNS・学校ウェブサイトでの確認方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Instagram・TikTok</strong> — 多くの高校がイベント動画や写真をSNSで公開しています。実際のイベントの雰囲気を、動画で確認することができます。フォロワー数やコメント数からも、イベント人気度が分かります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校ウェブサイト</strong> — 学校ウェブサイトのイベント情報から、学校の優先順位が見えてきます。イベントに関する情報を丁寧に掲載していれば、学校がイベントを大切にしていることを示しています。
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1e782d", fontWeight: 600, cursor: "pointer", "&:hover": { color: "#1e782d" } }}>
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
