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

export default function KoukouSuisenPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校推薦入試ガイド｜学校推薦型・総合型選抜の対策と流れ" },
  ];

  const faqItems = [
    {
      question: "学校推薦型選抜と総合型選抜の最大の違いは何ですか？",
      answer: "学校推薦型選抜は『高校の先生による推薦が必須』で、高3の秋から出願が開始されます。一方、総合型選抜は『自分でエントリーして受験』でき、高3の夏から出願できる大学も多いです。また、学校推薦型は学力試験がない場合が多いですが、総合型は簡易的な試験が実施される傾向があります。",
    },
    {
      question: "推薦入試に必要な評定平均の目安はどのくらいですか？",
      answer: "一般的には、評定平均3.5以上があれば推薦入試の出願資格を満たすことができます。難関大学を目指す場合は4.0以上が目安です。ただし、大学・学部によって異なるため、志望大学の募集要項を確認することが重要です。",
    },
    {
      question: "推薦入試に落ちた場合、一般入試で受験できますか？",
      answer: "はい、ほとんどの場合は一般入試で受験可能です。ただし、大学によっては『推薦入試で受験した場合は、その大学の一般入試に出願できない』という規則があるため、出願前に確認する必要があります。",
    },
    {
      question: "推薦入試で合格したら、一般入試に合格した場合と待遇が違いますか？",
      answer: "多くの大学では、推薦入試と一般入試の合格者に対する待遇に違いはありません。ただし、返納可能な入学金を設定している大学では、推薦入試の方が有利な条件の場合もあります。詳細は募集要項で確認しましょう。",
    },
    {
      question: "志望理由書は何文字くらい書けばいいですか？",
      answer: "400～800字が一般的です。ただし、大学によって指定文字数が異なるため、募集要項をよく確認してください。重要なのは『文字数ではなく、いかに『その大学である理由』を明確に伝えられるか』です。短くても論理的で説得力のある理由書の方が評価されます。",
    },
    {
      question: "推薦入試の面接で、よく聞かれる質問は何ですか？",
      answer: "『なぜ本学を志望するのか』『この学部で何をしたいのか』『高校生活で最も力を入れたことは』『その経験から何を学んだのか』などが定番です。また、『あなたの弱点は』『困難にどう対処したか』などの深掘り質問も多くあります。具体的な事例を交えて、一貫性のある回答を準備することが大切です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校推薦入試ガイド｜学校推薦型・総合型選抜の対策と流れ | School Station"
        description="高校推薦入試の完全ガイド。学校推薦型選抜と総合型選抜の違い、評定平均の目安、志望理由書の書き方、面接対策、スケジュール管理など、推薦入試合格に必要な知識をすべて解説。"
        canonical="/column/koukou-suisen/"
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
            "headline": "高校推薦入試ガイド｜学校推薦型・総合型選抜の対策と流れ",
            "description": "高校推薦入試の完全ガイド。学校推薦型選抜と総合型選抜の違い、評定平均の目安、志望理由書の書き方、面接対策、スケジュール管理など、推薦入試合格に必要な知識をすべて解説。",
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
            高校推薦入試完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            学校推薦型選抜と総合型選抜の違い、出願資格、対策方法、面接・志望理由書の書き方をすべて解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="推薦入試とは？学校推薦型・総合型選抜の違い" id="overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学入試には『一般選抜』『学校推薦型選抜』『総合型選抜』の3つの主要な方式があります。推薦入試は、学力試験が簡易的または実施されない代わりに、出願書類や面接での評価が重視される入試方式です。
          </Typography>

          <SubSection title="学校推薦型選抜の特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                学校推薦型選抜は、『高校の先生による推薦が必須』という特徴があります。高3の秋から出願が開始され、学力試験がない場合がほとんどです。評定平均が出願資格の重要な判定基準になります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>推薦が必須</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高校の進路指導の先生が推薦状を作成し、出願します。そのため、評定平均が目安値を下回る場合は、推薦をもらえない可能性があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>評定平均が重要</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一般的には、評定平均3.5以上が出願資格の目安です。難関大学では4.0以上が必要な場合もあります。推薦を狙うなら、高1から定期テストと授業態度を重視する必要があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学力試験がない場合が多い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    面接と出願書類（志望理由書など）のみで判定される大学が大多数です。ただし、国公立大学では簡易的な学力試験が実施される場合もあります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出願時期が早い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    多くの大学は高3の9月～11月に出願が行われ、12月～1月に選抜結果が発表されます。そのため、合格が決まれば、その後の一般入試対策に集中する必要がありません。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="総合型選抜の特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                総合型選抜（旧AO入試）は、『推薦の有無に関わらず、自分でエントリーして受験』できる点が学校推薦型との大きな違いです。大学側が求める人物像に合った生徒が合格する傾向があります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>推薦が不要</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校の推薦がなくても、自分でエントリーシートを作成して出願できます。評定平均の条件が緩い大学が多いため、推薦の条件に満たない生徒も受験機会があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>大学の求める人物像との適合性が重要</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『あなたは、なぜこの大学でなければならないのか』『この学部で何を学びたいのか』という、志望理由の一貫性と具体性が合否を左右します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出願時期が多様</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    大学によって出願時期が異なります。高3の夏から出願できる大学もあれば、秋以降の大学もあります。また、2次選考、3次選考が実施される大学も多くあります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>面接以外の試験が実施される場合もある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    エントリーから実際の出願まで複数の段階があり、途中で簡易的な筆記試験やグループディスカッション、プレゼンテーションが実施される場合があります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試の出願資格と評定平均の目安" id="shikaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試を受験するためには、各大学・学部が定める出願資格を満たす必要があります。評定平均はその最も重要な判定基準の1つです。
          </Typography>

          <SubSection title="評定平均とは何か">
            <Box sx={{ bgcolor: "#FFF9E6", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                評定平均とは、高1～高3の全教科の平均評価を指します。例えば、主要5教科と体育・音楽・美術・英語などの評価を合計して、その数で割った値です。多くの場合、5段階評価で計算されます。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>計算方法</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高1～高3の全科目の評価を合計し、科目数で割ります。例えば、全科目の合計が140で、科目数が35科目なら、評定平均は4.0になります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>高1の成績が重要</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦入試を視野に入れるなら、高1から定期テストに真摯に取り組む必要があります。高3だけ頑張ろうとしても、高1～高2の成績の影響は大きく、評定平均を上げるのは難しいです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>1つの低い成績がすべてを左右することもある</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    たとえ4が大多数でも、1つ2がついてしまうと、評定平均は大きく下がります。苦手科目こそ、早めに対策することが重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦入試の出願資格となる評定平均の目安">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>中堅大学：評定平均3.5以上</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      日東駒専やMARCHレベルの大学では、評定平均3.5以上が一般的な出願資格です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>難関大学：評定平均3.8～4.0以上</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      早慶上理やGMARCHなどの難関大学では、評定平均3.8～4.0以上が必要です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>国公立大学：評定平均3.8～4.2以上（学部による）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      国公立大学は、学部による差が大きいです。医学部などの人気学部は4.0以上が必須の場合もあります。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="志望理由書の書き方と高評価のポイント" id="shomei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            志望理由書は、『あなたがなぜこの大学を選んだのか』『この学部で何を学びたいのか』を大学側に伝える、最も重要な出願書類です。その出来が合否を大きく左右します。
          </Typography>

          <SubSection title="志望理由書に含めるべき要素">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『その大学である理由』を明確に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『社会貢献がしたいから』という理由は、どの大学でも当てはまります。重要なのは、『〇〇大学の△△という教育環境だからこそ、□□が学べる』という、具体性です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>具体的な学習内容を示す</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『経営学を学びたい』ではなく、『〇〇大学の経営学部で、国際経営論や新興国市場戦略について学び、将来は発展途上国の経済発展に貢献する人材になりたい』という具体性が必要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>高校での経験を活かす</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『部活でのリーダーシップ経験から、人を統率することの大切さを学びました。大学では、このスキルをさらに磨き、××に活かしたいと考えています』というように、高校での経験との連続性を示すことが重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>卒業後のビジョンを示す</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『大学卒業後は、こういう仕事に就いて、こういう社会貢献をしたい』という明確なビジョンがあると、面接官も『この生徒は本気で学ぼうとしている』と判定しやすくなります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="志望理由書を書く際の注意点">
            <Box sx={{ bgcolor: "#FFE6E6", p: 2.5, borderRadius: 1, border: "1px solid #EF9A9A" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    複数の大学に同じ志望理由書を使い回さない（大学名や学部名を書き換えるだけはNG）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『成績が良いから』『偏差値が高いから』などの理由は書かない
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    美辞麗句を羅列するのではなく、『自分の言葉』で語ること
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    誤字脱字がないか、複数回見直すこと
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試の面接対策と質問例" id="mensetsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学校推薦型選抜の多くの大学では、面接が合否を決める最も重要な要素です。しっかりとした面接対策が、合格への鍵となります。
          </Typography>

          <SubSection title="推薦入試の面接対策のコツ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『最初の30秒』で好印象を</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    入室してから最初の30秒（軽くお辞儀、挨拶、着席）で、面接官の評価は大きく決まります。堂々とした態度、明るい表情、はっきりとした挨拶を心がけましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『志望理由書の内容』を深堀される</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    面接では、志望理由書に書いた内容について、必ず深掘り質問があります。『なぜそう思うのか』『具体的にはどうするのか』という質問に答えられるまで、何度も深掘りします。準備段階で、予想質問を10個以上準備し、それぞれについて『なぜ』『どうして』と深掘りする練習をしましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『具体例』を交えた回答</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『高校の部活で学んだことはたくさんあります』という抽象的な回答より、『全国大会で1回戦で敗退した時、悔しさをバネに、冬の練習で1日3時間追加練習をした結果、次の大会で全国3位になった』という具体例の方が、面接官の心に残ります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『質問への直接的な回答』</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『あなたの弱点は何ですか』と聞かれて、『得意なことは〇〇です』と違う内容を答えるのはNG。質問に正面から答えた上で、『その弱点を克服するために、こういう取り組みをしています』という前向きさを示しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="よく聞かれる面接質問と回答例">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1.5 }}>
                『なぜ本学を志望するのか』
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2.5 }}>
                志望理由書の内容をベースに、『〇〇大学の△△という特徴（キャンパス環境、教授、カリキュラム、施設など）に惹かれました。具体的には、〇〇という研究をしている△△教授の下で、□□について学びたいと考えています』というように、具体的に答える。
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1.5 }}>
                『高校生活で最も力を入れたことは』
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 2.5 }}>
                部活、勉強、ボランティアなど何でも良いが、『具体的な数字や事実』を含める。例：『部活の試合で全国大会に出場し、個人の通算○○の記録を出しました。この経験から、〇〇というスキルが身につきました』
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1.5 }}>
                『あなたの弱点は何ですか、それをどう克服するか』
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                『英語の発音が得意でないという弱点があります。克服するために、毎日30分のリスニング練習と、週2回の英会話レッスンを実施しています。この取り組みで、英検準1級に合格できました』というように、具体的な行動と成果を示す。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試のスケジュール管理と準備流れ" id="schedule">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試を成功させるためには、計画的な準備スケジュールが重要です。いつから何を始めるべきか、実行可能なロードマップを示します。
          </Typography>

          <SubSection title="高1～高2：基礎を整える期間">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>評定平均を意識した学習</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    毎回の定期テストに真摯に取り組み、苦手科目は早めに対策。推薦を狙うなら、高1から評定平均3.5以上を目指す。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>課外活動に取り組む</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活、生徒会、委員会、ボランティアなど、高校での『活動実績』を作る。推薦では、学力以外の経験が重視されます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>資格取得に挑戦</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    英検、漢検、簿記検定など、志望学部に関連した資格を取得することも、推薦での強みになります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高3春～夏：志望大学を絞る期間">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>大学のオープンキャンパスに参加</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    複数の大学を訪問し、『本当にこの大学で学びたいのか』を判断。志望動機の核となる部分を見つける。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>進路指導の先生に相談</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分の評定平均と志望大学が『釣り合うか』を早めに確認。推薦をもらえそうか、先生からアドバイスをもらう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>志望理由書の執筆開始</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    草稿を作成し、進路指導の先生や国語の先生に添削してもらう。複数の修正を重ねて、完成させる。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高3秋：出願・面接対策期間">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>志望理由書を完成させて出願</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    大学の募集要項をよく確認し、指定期間内に出願。オンライン出願の場合は、システムトラブルに注意。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>面接対策開始</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校の進路指導の先生や塾の講師に、複数回の面接練習をしてもらう。想定質問リストを作成し、予想外の質問にも対応できるようにする。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>面接実施</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    大学側の面接日程に従い、面接に臨む。入室から退室まで、礼儀正しく、堂々とした態度を心がける。
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
            推薦入試の準備は高1から始まる
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3, maxWidth: 600, mx: "auto" }}>
            推薦入試を合格への道として選択する場合、高1から評定平均を意識した勉強と、課外活動への参加が不可欠です。計画的な準備により、推薦での合格を勝ち取りましょう。
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
