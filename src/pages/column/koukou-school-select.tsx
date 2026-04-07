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

export default function KoukouSchoolSelectPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の校則と学校選びのポイント｜制服・スマホ・アルバイトのルールを比較" },
  ];

  const faqItems = [
    {
      question: "校則が厳しい高校と緩い高校は成績に差がありますか？",
      answer: "必ずしも相関関係がありません。成績が良い学校の中には校則が厳しい進学校もあれば、自由度が高くても進学実績が優秀な学校もあります。大切なのは、学校の指導方針に学生が適応できるかどうかです。",
    },
    {
      question: "制服と私服ではどちらが費用がかかりますか？",
      answer: "制服高校では入学時に制服代（3～5万円）と学校指定品の購入が必要です。私服高校では毎年多くの衣服を購入する必要があり、長期的には私服の方がコストがかかる傾向にあります。ただし個人差が大きいため、家計状況に合わせた選択が重要です。",
    },
    {
      question: "スマホ持参がOKかNGかで学校生活に大きな差がありますか？",
      answer: "あります。スマホ禁止の学校では授業に集中しやすい環境が整っていますが、友人との連絡が不便です。スマホ持参OKの学校では自由度が高い反面、依存のリスクがあります。自分のスマホリテラシーに合わせた選択が大切です。",
    },
    {
      question: "アルバイトができるかどうかは進学実績に影響しますか？",
      answer: "学力が高い学生は、アルバイトの可否に関わらず進学実績が良好です。アルバイト禁止でも成績が下がる生徒はいますし、アルバイトOKでも大学に進学する生徒はいます。重要なのは、個人の時間管理能力と学習意欲です。",
    },
    {
      question: "転入・編入で校則が緩い学校に転校できますか？",
      answer: "転入・編入は可能ですが、高2・高3での転校は学校が受け入れない場合が多いです。また転校理由として「校則が合わない」を挙げるのは、進学先の学校にマイナス評価を与える可能性があるため避けるべきです。",
    },
    {
      question: "学校説明会で校則について質問しても大丈夫ですか？",
      answer: "大丈夫です。むしろ「学校生活について質問がある」という姿勢は、学校側にも好印象を与えます。ただし「校則が厳しくないですか？」と直接聞くより、「スマホの使用ルール」「アルバイトについて」など具体的に質問すると良いでしょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の校則と学校選びのポイント｜制服・スマホ・アルバイトのルールを比較 | School Station"
        description="高校の校則の種類と厳しさの違いを解説。制服・私服、スマホ持参、アルバイト許可の有無など校則の観点から高校を比較する方法と、自分に合った校風の見つけ方を紹介。"
        canonical="/column/koukou-school-select/"
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
            "headline": "高校の校則と学校選びのポイント｜制服・スマホ・アルバイトのルールを比較",
            "description": "高校の校則の種類と厳しさの違いを解説。制服・私服、スマホ持参、アルバイト許可の有無など校則の観点から高校を比較する方法と、自分に合った校風の見つけ方を紹介。",
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
            高校の校則と学校選びのポイント
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            校則の厳しさから見た高校比較と、自分に合った校風を見つける方法を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校の校則が厳しい・緩い理由" id="reasons">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の校則の厳しさは、学校の教育方針、立地、生徒層、歴史によって大きく異なります。校則が厳しい・緩いことのそれぞれにメリット・デメリットがあり、理解することが学校選びに重要です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>校則が厳しい学校の特徴</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>進学重点校や私立の名門校に多い傾向があります。「自主性を育てるため、厳しい枠組みの中で成長させる」という教育哲学に基づいています。生徒の非行を防止し、勉強に集中させることを重視しています。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>校則が緩い学校の特徴</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>自由度を重視し、「生徒の自主性を尊重する」という教育方針を掲げる学校です。通信制高校や進学校以外の多くの高校が該当します。生徒の個性や自主的な判断を尊重することが教育の中核です。</Typography>
            </Paper>
          </Box>

          <SubSection title="校則の厳しさに影響する要因">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教育方針</strong> — 「規律を重視する」学校は校則が厳しく、「自主性を尊重する」学校は緩い傾向にあります。学校のパンフレットや説明会でこうした方針を確認できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>立地と生徒層</strong> — 都市部の学校は比較的自由で、郊外・農村部の学校は厳しい傾向があります。また進学実績が高い学校ほど校則が厳しい傾向にあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校の歴史</strong> — 創立100年を超える伝統校は校則が厳しい傾向があります。反対に、新しい学校（開校20年以内）は校則が緩いことが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立vs私立</strong> — 一般的に私立校の方が校則が厳しい傾向にあります。公立校は教育委員会の指導に従うため、私立校より校則が相対的に緩いことが多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="制服と私服高校の違いと選び方" id="uniforms">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の制服制度は、学校の規律観を示す大きな指標です。制服と私服で学校生活に与える影響は大きく、選択時に重要な判断基準となります。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>制服高校のメリット</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>朝の身支度が簡単で、毎日同じ制服を着るため費用管理が容易です。学校への帰属意識が高まり、不登校が減る傾向にあります。男女平等感も生まれやすいです。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>制服高校のデメリット</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>制服が自分に合わない場合、毎日不快感を抱く可能性があります。入学時に制服代（3～5万円）がかかります。校則が厳しい傾向にあり、自由度が限定されます。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>私服高校のメリット</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>自分の好みで服装を選ぶ自由があり、個性を表現できます。校則が緩い傾向にあり、自分のペースで学校生活を送れます。自己表現力が高まります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>私服高校のデメリット</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>毎日の服装選択に時間がかかります。長期的には衣服購入費が高額になります。服装による経済的・文化的格差が生まれやすくなります。</Typography>
            </Paper>
          </Box>

          <SubSection title="制服・私服の選び方のポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>性格と向き不向き</strong> — 朝の身支度が面倒な人は制服が便利です。ファッションに興味がある人は私服がおすすめです。自分の性格に合わせた選択が大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>経済面の考慮</strong> — 家計に余裕がない場合は制服（初期費用のみ）が有利です。経済的に安定している場合は私服でも問題ありません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校見学での確認</strong> — 学校見学時に制服を実際に見て、デザインが気に入るか確認しましょう。制服が素敵な学校は、生徒のモチベーションも高い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="スマホ・SNS規制の実態" id="smartphones">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            スマートフォンの使用ルールは、高校の校風を大きく左右します。規制の厳しさの実態と、その影響を理解することが学校選びに重要です。
          </Typography>

          <SubSection title="スマホ完全禁止の学校">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>特徴と実態：</strong>進学重点校や伝統校の一部でスマホを学校に持ち込み禁止にしている学校があります。持ち込んだ場合は没収され、保護者に返却されることもあります。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>メリット：</strong>授業に集中しやすく、勉強に専念できます。友人と対面でコミュニケーションする習慣がつきます。スマホ依存を防ぐことができます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="スマホ持参OK・校内使用禁止">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>特徴と実態：</strong>スマホを学校に持ってくることは許可されますが、授業中や休み時間の使用は禁止されている学校です。多くの公立高校がこのルールを採用しています。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>メリット：</strong>放課後に友人と連絡が取れ、生活の利便性が高いです。スマホを持つことで安全面でも安心できます。ルールを守る判断力が養成されます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="スマホ持参・校内使用OK">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>特徴と実態：</strong>スマホの利用に関して特に規制がない学校です。通信制高校や自由度を重視する学校で見られます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>メリット：</strong>スマホが必要な場合（調べ学習など）に即座に活用できます。自分でスマホ依存と向き合う力が養成されます。個人の自主性が最大限尊重されます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="スマホ規制への対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分のスマホリテラシーで判断</strong> — スマホに依存しやすい場合は持ち込み禁止の学校が合っています。自分でコントロールできれば、持参OKの学校でも問題ありません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>友人との連絡手段の確保</strong> — スマホが禁止の場合、連絡手段を別に用意する必要があります。友人との情報共有方法を事前に確認しましょう。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="アルバイト許可・禁止の学校の割合と理由" id="parttime-work">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校におけるアルバイトのルールは、学校の教育方針を反映しています。許可・禁止の実態と理由を理解することで、学校選びに活かせます。
          </Typography>

          <SubSection title="アルバイト禁止の学校">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>割合と特徴：</strong>進学重点校や私立の名門校、公立でも進学実績が高い学校の多くが禁止としています。全国的には約40～50%の高校がアルバイトを禁止しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>理由：</strong>勉強に集中させたい、生活リズムを保たせたい、非行防止という教育的配慮からです。受験勉強に専念させたいという方針が強い学校が禁止にしています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="アルバイト許可の学校">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>割合と特徴：</strong>全国的には約50～60%の高校がアルバイトを許可しています。公立高校や商業高校、進学校以外の多くの高校です。条件付きで許可する学校もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>理由：</strong>「社会経験は教育の一環」という考え方、生活費が必要な家庭への配慮、生徒の自主性を尊重する方針からです。ただし成績が落ちないこと、定期テスト期間は禁止など条件がある場合も多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="条件付きアルバイト許可">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの学校が「定期テスト1か月前から禁止」「月10時間程度まで」など条件付きでアルバイトを許可しています。この場合、保護者の同意書が必要になることもあります。自分の家計状況と学校の規則を確認し、事前に学校に相談することが大切です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="校則の厳しさと学力・進学実績の関係" id="grades-correlation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            「校則が厳しい学校ほど進学実績が良い」という認識がありますが、実際はどうなのでしょうか。統計的な関連性と、その理由を詳しく解説します。
          </Typography>

          <SubSection title="校則が厳しい学校の進学実績">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                一般的に、校則が厳しい学校（特に進学重点校）は進学実績が良好です。しかし、これは「校則が厳しいから成績が良い」のではなく、「進学に力を入れている学校が校則を厳しくしている」という因果関係です。厳しい規律の中での学習環境が、結果的に学力向上に寄与しているとも考えられます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="校則が緩い学校の進学実績">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                校則が緩い学校でも、進学実績が優秀な学校は存在します。自由度を重視しながらも、学生の自主性を尊重し、高い進学実績を上げている学校もあります。重要なのは、学校の指導方針がどれだけ学生に適応しているかです。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="進学実績に影響する真の要因">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教員の質と指導熱心度</strong> — 校則の厳しさより、教員の質が進学実績に大きく影響します。優秀な教員を集めている学校は、校則の有無に関わらず実績が良好です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>入学生の学力レベル</strong> — 入試難度が高い学校ほど進学実績が良好です。校則ではなく、選別された学生の学力が成果を生んでいる側面が大きいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習環境と施設</strong> — 図書館の充実、自習室の環境、ICT活用など、学習環境の質が進学実績に直結します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学生のモチベーション</strong> — 校則の有無より、学生自身がどれだけ勉強に前向きかが重要です。自主性を尊重される中で高いモチベーションを保つ生徒も多くいます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="学校見学・説明会で校則を確認する方法" id="school-visit">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学校見学や説明会は、校則や校風を直接確認する貴重な機会です。効果的な質問と観察ポイントを知ることで、学校選びの精度が高まります。
          </Typography>

          <SubSection title="見学時の観察ポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒の服装と所作</strong> — 制服の着こなし、メイクやアクセサリーの自由度、全体的な雰囲気から校風が分かります。生徒が楽しそうに学校生活を送っているか観察しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校内の掲示物</strong> — 校則や生活指導について貼り出されている掲示物から、学校の指導方針を読み取れます。禁止事項が多いか少ないか確認しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動の活発さ</strong> — 多様な部活が盛んな学校は、生徒に自由度を与えている傾向があります。一方、進学重点校は部活動に時間を割かないことが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒と教職員の関係</strong> — 廊下で見かける生徒と教職員の関係が親密か距離があるか、観察してみましょう。信頼関係が築かれている学校では、生徒も伸び伸びとしています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="説明会での質問例">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体的なルール</strong> — 「スマホの使用ルールについて教えてください」「アルバイトについては許可されていますか」など、具体的に質問しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>違反時の対応</strong> — 「校則違反した場合、どのような指導を受けるのか」を知ることで、学校の指導姿勢が分かります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒の生活実態</strong> — 「先輩たちの放課後の過ごし方は？」「校則は生徒にとって必要だと感じていますか？」など、在校生の実感を聞いてみましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>校則の改定</strong> — 「最近、校則が改定されたことはありますか」という質問で、学校が生徒のニーズに応えようとしているか確認できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="複数校を比較するポイント">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                複数の学校を見学する際は、メモを取りながら比較すると効果的です。「この学校では◎だが、あの学校は△」という相対的な評価ができます。最後に「この学校なら高校生活が充実しそう」と感じた学校が、自分に合った学校である可能性が高いです。
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
