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

export default function TsushinSeiKoukouPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "通信制高校と定時制高校の違い｜どちらを選ぶべきか徹底比較" },
  ];

  const faqItems = [
    {
      question: "通信制高校と定時制高校の最大の違いは何ですか？",
      answer: "最大の違いは、授業形態と通学スケジュールです。通信制高校はレポート提出とスクーリング（年数日～月数回）が中心で、自分のペースで学べます。定時制高校は毎日通学し、夜間（または昼間）に対面授業を受けます。",
    },
    {
      question: "通信制高校は本当に卒業できますか？",
      answer: "はい、卒業できます。ただし、自己管理能力が必要です。レポート提出とスクーリング参加、単位取得が卒業の条件です。多くの生徒が3年で卒業していますが、進度は個人差があります。",
    },
    {
      question: "定時制高校の卒業には何年かかりますか？",
      answer: "定時制高校は4年制が多いです。ただし、定時制を選んで働きながら学んでいる生徒が多いため、社会人として成長できるメリットがあります。進学を希望する場合は、3年で卒業できる学校もあります。",
    },
    {
      question: "通信制高校から大学進学は可能ですか？",
      answer: "十分に可能です。通信制高校の卒業資格は全日制高校と同等です。ただし、進学実績は学校によって大きく異なるため、志望する進路に対応した学校選びが重要です。",
    },
    {
      question: "定時制高校に入学した場合、仕事と勉強の両立は難しいですか？",
      answer: "工夫が必要ですが、十分に両立できます。特に高1・高2は時間に余裕があり、効率的に勉強できます。高3の受験期は時間配分が大切ですが、多くの生徒が両立させています。",
    },
    {
      question: "通信制高校と定時制高校、どちらが学費が安いですか？",
      answer: "公立校なら両者とも学費は安いです。ただし通信制高校の中には私立校が多く、授業料が高い場合があります。また、サポート体制や施設の充実度によって費用が異なるため、学校ごとに確認が必要です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="通信制高校と定時制高校の違い｜どちらを選ぶべきか徹底比較 | School Station"
        description="通信制高校と定時制高校の仕組みや違いを徹底比較。学費・卒業要件・進学実績・向いている人の特徴を解説し、どちらを選ぶべきか判断できるガイドを提供。"
        canonical="/column/tsushinsei-koukou/"
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
            "headline": "通信制高校と定時制高校の違い｜どちらを選ぶべきか徹底比較",
            "description": "通信制高校と定時制高校の仕組みや違いを徹底比較。学費・卒業要件・進学実績・向いている人の特徴を解説。",
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
            通信制高校と定時制高校の違い
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            仕組み、学費、卒業条件、進学実績を徹底比較。あなたに合った高校選びをサポート
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="通信制高校とは" id="tsushinsei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            通信制高校は、教育改革の一環として注目を集めている教育形態です。レポート提出、スクーリング（対面授業）、試験を組み合わせた学習方法で、高卒資格を取得できます。自分のペースで学べることが最大の特徴です。
          </Typography>
          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              通信制高校は、働きながら学びたい人、既に中退した人、独特な学習環境を求める人など、多様なニーズに対応した高等教育機関です。
            </Typography>
          </Box>

          <SubSection title="通信制高校の仕組み">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>レポート提出</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    教科書や学習教材を使い、指定されたレポートを作成して提出。自宅での自学自習が中心となります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>スクーリング</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    週1～週5のコース、または集中スクーリング（夏期・冬期）など、学校によって異なります。対面授業により、わからない点を直接質問できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>試験</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学習内容の理解度を確認するため、定期的に試験が実施されます。試験に合格することで単位取得となります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="通信制高校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分のペースで学習可能</strong> — 仕事や趣味との両立が容易です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>費用が安い場合が多い</strong> — 公立通信制高校は特に学費が低いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>多様な学生が集う</strong> — 社会人、フリーター、芸能人など、様々なバックグラウンドを持つ生徒が在籍しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自己管理が重要</strong> — レポート提出や学習計画を自分で管理する必要があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="定時制高校とは" id="teijissei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            定時制高校は、働きながら高卒資格を取得したい人向けの教育機関です。夜間（または昼間）に毎日通学し、4年間で高卒資格を取得します。全日制高校と同じ卒業資格が得られます。
          </Typography>
          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              定時制高校は、昼間は働いて、夜間に学ぶという、仕事と教育を両立させたい人の強い味方です。
            </Typography>
          </Box>

          <SubSection title="定時制高校の仕組み">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>毎日通学</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    夜間課程は通常17時～21時程度、昼間課程は通常9時～12時程度の授業。毎日継続して通学する必要があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>対面授業</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全日制高校と同じく、教職員による対面授業が中心。わからない点をその場で質問できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>4年制が標準</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    通常は4年制ですが、3年で卒業できるコースを設置している学校もあります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="定時制高校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>対面授業による充実した学習</strong> — 教職員との直接的なサポートが得られます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>友人関係の構築</strong> — 毎日通学することで、同級生との関係が深まりやすいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校行事への参加</strong> — 文化祭や体育祭など、学校行事に参加できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>卒業まで時間がかかる</strong> — 4年かかるため、卒業後のキャリアスタートが遅れる場合があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="通信制高校と定時制高校の主な違い" id="differences">
          <Box sx={{ overflowX: "auto" }}>
            <Paper sx={{ p: 0 }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>項目</Box>
                <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>通信制高校</Box>
                <Box sx={{ bgcolor: "#1e782d", color: "#fff", p: 2, fontWeight: 700, fontSize: "0.9rem" }}>定時制高校</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>授業形態</Box>
                <Box sx={{ p: 2 }}>レポート + スクーリング</Box>
                <Box sx={{ p: 2 }}>毎日通学・対面授業</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>卒業までの期間</Box>
                <Box sx={{ p: 2 }}>3年が標準</Box>
                <Box sx={{ p: 2 }}>4年が標準</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>通学頻度</Box>
                <Box sx={{ p: 2 }}>週1～週5、または集中スクーリング</Box>
                <Box sx={{ p: 2 }}>毎日（夜間など決まった時間）</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>学費</Box>
                <Box sx={{ p: 2 }}>公立は安い、私立は高い場合多い</Box>
                <Box sx={{ p: 2 }}>公立は安い</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>大学進学対応</Box>
                <Box sx={{ p: 2 }}>学校によって異なる</Box>
                <Box sx={{ p: 2 }}>一般的に対応している</Box>

                <Box sx={{ p: 2, fontWeight: 600, bgcolor: "#F5F5F5" }}>教職員支援</Box>
                <Box sx={{ p: 2 }}>相対的に少ない</Box>
                <Box sx={{ p: 2 }}>毎日の関わりで充実</Box>
              </Box>
            </Paper>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="通信制高校が向いている人" id="tsushinsei-suited">
          <List>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>自己管理能力が高い人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  レポート提出やスクーリング参加を自分で管理できる人に向いています。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>働きながら学びたい人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  仕事のスケジュールに合わせて学習できます。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>趣味や特技を活かしたい人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  スポーツや芸能活動、アルバイトと両立できます。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>自分のペースで学びたい人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  全日制高校の一律なペースが合わない人に最適です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>既に中退した人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  改めて高卒資格を取得したい場合、柔軟な対応が可能です。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="定時制高校が向いている人" id="teijissei-suited">
          <List>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>毎日通学できる人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定時間に毎日通学する習慣がある人に向いています。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>対面授業を希望する人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  教職員からの直接的なサポートが欲しい人に最適です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学園生活を重視する人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  友人関係や学校行事への参加を大切にしたい人に向いています。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>将来、大学進学を考えている人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定時制高校は進学指導が充実している場合が多いです。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>生活リズムを大切にしたい人</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  毎日決まった時間に通学することで、安定した生活リズムを構築できます。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="大学進学への影響" id="daigaku-shinro">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            通信制高校と定時制高校の卒業資格は、全日制高校と全く同じです。したがって、大学受験を受ける際の資格面での違いはありません。ただし、進学準備という観点からは、学校選びが重要です。
          </Typography>

          <SubSection title="通信制高校から大学進学する場合">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  進学実績豊富な通信制高校を選ぶことが大切です。学校のサイトで過去の進学実績を確認しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  進学対応コースや大学受験サポートプログラムがあるか確認しましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  自己管理能力を高め、自学自習での学習習慣をつけることが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="定時制高校から大学進学する場合">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定時制高校の多くは大学進学対応のコースを設置しており、進学指導が充実しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  夜間課程であっても、昼間に受験対策講座や補習が行われることがあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  4年制のため、実際の大学受験は5年目（高卒後）になることもあるため、計画的な準備が必要です。
                </Typography>
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
          <Link href="/column/koukou-seikatsu/" style={{ textDecoration: "none" }}>
            <Paper sx={{ p: 2, border: "1px solid #E0E0E0", textAlign: "center", cursor: "pointer", "&:hover": { boxShadow: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d", fontWeight: 600, fontSize: "0.9rem" }}>
                <ArrowBackIcon sx={{ fontSize: "1rem" }} />
                前の記事
              </Box>
              <Typography variant="body2" sx={{ mt: 1, color: "#424242" }}>高校生活を充実させる方法</Typography>
            </Paper>
          </Link>
          <Link href="/column/koukou-setsumeikai/" style={{ textDecoration: "none" }}>
            <Paper sx={{ p: 2, border: "1px solid #E0E0E0", textAlign: "center", cursor: "pointer", "&:hover": { boxShadow: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d", fontWeight: 600, fontSize: "0.9rem" }}>
                次の記事
                <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, color: "#424242" }}>学校説明会・オープンキャンパス活用法</Typography>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
