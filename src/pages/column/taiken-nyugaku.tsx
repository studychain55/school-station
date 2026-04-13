import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function TaikenNyugakuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "学校見学・体験入学の活用ガイド" },
  ];

  const faqItems = [
    {
      question: "学校見学と体験入学の違いは何ですか？",
      answer: "学校見学は、在校生の案内で学校の施設や雰囲気を観察する活動です。一方、体験入学（学校説明会）は、学校の方針や入試情報を聞きながら、実際に授業を受けたり、部活動に参加したりする活動です。",
    },
    {
      question: "いつから学校見学・体験入学に参加すべきですか？",
      answer: "中学2年生の冬から始めることをお勧めします。そうすることで、志望校を決める前に複数の学校を比較検討でき、より最適な学校選びができます。中学3年生の夏休みまでに主な志望校は訪問しておくとよいでしょう。",
    },
    {
      question: "学校見学の際に確認すべきポイントは何ですか？",
      answer: "施設の充実度、在校生の雰囲気、学校の清潔さ、部活動の様子、教室の環境などが重要です。また、実際に在校生に話しかけて、学校生活の実態を聞くことも大切です。",
    },
    {
      question: "複数の学校を見学する場合のコツはありますか？",
      answer: "メモやスマートフォンで記録を取り、帰宅後に比較しやすくまとめておくことが重要です。また、見学リストを作成して、各校で確認すべき項目を統一することで、客観的な比較が可能になります。",
    },
    {
      question: "体験入学で良い印象を与えるには？",
      answer: "身なりを整え、積極的に授業に参加し、わからないことは質問する姿勢を見せることが重要です。また、説明会で配られた資料を大切に保管し、後で見直せるようにしておきましょう。",
    },
    {
      question: "学校見学後、何をすべきですか？",
      answer: "見学翌日中に、見学内容を振り返り、メモを整理することが重要です。写真やビデオを撮影した場合は、後で見直して学校の特徴を確認し、志望校判定に役立てましょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="学校見学・体験入学の活用ガイド｜志望校選びに役立てよう | School Station"
        description="学校見学・体験入学を最大限に活用するための完全ガイド。見学のコツ、質問するべき項目、志望校比較方法など、効果的な学校選びのための情報をまとめました。"
        canonical="/column/taiken-nyugaku/"
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
            "headline": "学校見学・体験入学の活用ガイド｜志望校選びに役立てよう",
            "description": "学校見学・体験入学を最大限に活用するための完全ガイド。見学のコツ、質問するべき項目、志望校比較方法などを解説。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            学校見学・体験入学の活用ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            志望校選びを成功させるための学校見学・体験入学の活用方法を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="学校見学・体験入学とは" id="what-is-taiken">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            <strong>学校見学</strong>は、中学生が高校の校舎や施設を直接見学し、学校の雰囲気や環境を知るための活動です。一般的には在校生の案内により、キャンパスツアーが行われます。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            <strong>体験入学</strong>（学校説明会）は、学校の教育方針や入試情報の説明とともに、実際に授業を受けたり、部活動に参加したり、在校生と交流したりする活動です。学校の理解をより深めることができます。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            両者とも、志望校を決める上で非常に重要な活動であり、パンフレットやWebサイトだけではわからない、学校の「本当の姿」を知る機会となります。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学校見学・体験入学に参加するメリット" id="merits">
          <SubSection title="1. 学校の雰囲気を実感できる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              Webサイトやパンフレットだけでは、学校の本当の雰囲気は伝わりません。実際に訪問することで、キャンパスの雰囲気、在校生の様子、学校の清潔さなどを肌で感じることができます。これは志望校選びにおいて極めて重要な判断基準となります。
            </Typography>
          </SubSection>

          <SubSection title="2. 不安や疑問を直接解消できる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校見学・体験入学の際に、教職員や在校生に直接質問することができます。入試対策、学校生活、進学実績など、気になることを即座に解決できるため、より正確な情報をもとに志望校を決定できます。
            </Typography>
          </SubSection>

          <SubSection title="3. 複数の学校を比較検討できる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              複数の学校を見学することで、それぞれの違いが明確になります。施設、教育方針、部活動、校風など、様々な観点から比較検討することで、自分に最適な学校を選ぶことができます。
            </Typography>
          </SubSection>

          <SubSection title="4. 受験モチベーションが高まる">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              実際に学校の環境や在校生の様子を見ることで、「この学校で学びたい」というモチベーションが高まります。受験勉強の原動力となるため、合格に向けた学習を継続しやすくなります。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学校見学・体験入学のスケジュール" id="schedule">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            最適な見学スケジュールを計画することで、効率的に学校選びを進めることができます：
          </Typography>

          <Paper sx={{ overflowX: "auto", mb: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#1e782d" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>時期</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>活動内容</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>目的</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>中2冬～春</TableCell>
                  <TableCell>学校見学（複数校）</TableCell>
                  <TableCell>学校選びの基礎知識を得る</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>中3春</TableCell>
                  <TableCell>体験入学・説明会</TableCell>
                  <TableCell>有力候補校を絞り込む</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>中3夏</TableCell>
                  <TableCell>志望校の確定見学</TableCell>
                  <TableCell>最終的な志望校を決定する</TableCell>
                </TableRow>
                <TableRow sx={{ "&:nth-of-type(odd)": { bgcolor: "#F5F9FF" } }}>
                  <TableCell sx={{ fontWeight: 600 }}>中3秋</TableCell>
                  <TableCell>補足情報の確認</TableCell>
                  <TableCell>入試対策に向けた最終確認</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontSize: "0.9rem" }}>
            ※ このスケジュールは目安です。学校によって見学可能な時期が異なるため、事前に確認しましょう。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学校見学の準備と当日のポイント" id="preparation">
          <SubSection title="見学前の準備">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>事前にWebサイトを確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校のWebサイトで基本情報、見学予約方法、アクセス方法を確認
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>質問リストを作成</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校の特徴や入試、学校生活など、事前に聞きたいことをリストアップ
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>アクセス方法の確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    交通機関、所要時間、駐輪場の有無など、訪問ルートを事前に確認
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>必要物の準備</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    ノート、ペン、学生証、カメラなど、メモや記録に必要な物を用意
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="見学当日のポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#388E3C" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>身なりを整える</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    清潔感のある服装で訪問。学校を訪問する際のマナーを守ることが重要
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#388E3C" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>積極的に観察・質問</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    施設の充実度、生徒の雰囲気、学校の清潔さなどを注意深く観察。教職員や在校生に積極的に質問
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#388E3C" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>メモを丁寧に取る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    見学内容、質問への回答、気付いたことなどを詳細にメモ。後で複数校を比較しやすくするため
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#388E3C" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>感謝の気持ちを忘れずに</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    見学案内をしてくれた在校生や教職員に丁寧にお礼を述べる
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="見学で確認すべき項目チェックリスト" id="checklist">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学校見学の際に確認すべき項目を一覧にしました。複数校を比較する際の参考にしてください：
          </Typography>

          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
            <SubSection title="施設・環境">
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">校舎の設備は充実しているか</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">図書館・コンピュータ室・実験室などの設備は整っているか</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">校舎は清潔に保たれているか</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">キャンパスの雰囲気・環境は良好か</Typography>
                </ListItem>
              </List>
            </SubSection>

            <Divider sx={{ my: 2 }} />

            <SubSection title="在校生・学校の雰囲気">
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">在校生は明るく、生き生きしているか</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">生徒同士の関係は良好か</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">教職員は親身に対応しているか</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">学校全体の雰囲気は自分に合っているか</Typography>
                </ListItem>
              </List>
            </SubSection>

            <Divider sx={{ my: 2 }} />

            <SubSection title="教育内容・進学実績">
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">教育方針・カリキュラムは明確か</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">進学実績は良好か</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">大学受験対策は充実しているか</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">就職サポートは充実しているか</Typography>
                </ListItem>
              </List>
            </SubSection>

            <Divider sx={{ my: 2 }} />

            <SubSection title="部活動・学校生活">
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">部活動の種類は充実しているか</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">部活動と勉強の両立は可能か</Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">学園祭・行事は充実しているか</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Typography variant="body2">国際交流・特別プログラムはあるか</Typography>
                </ListItem>
              </List>
            </SubSection>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="見学後のフォローアップ" id="followup">
          <SubSection title="1. メモの整理">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              見学から帰宅したら、その日のうちにメモを整理しましょう。写真やビデオを撮影した場合は、それらとメモを組み合わせて、見学内容をまとめておくことが重要です。
            </Typography>
          </SubSection>

          <SubSection title="2. 複数校の比較表作成">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              複数の学校を見学した場合、見学内容を比較表にまとめることで、各校の特徴が明確になります。施設、雰囲気、進学実績、部活動など、同じ項目で複数校を比較することで、客観的に志望校を決定できます。
            </Typography>
          </SubSection>

          <SubSection title="3. 不明な点の確認">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              見学後に不明な点や追加で知りたいことがあれば、学校に電話やメールで問い合わせましょう。疑問を解決することで、より信頼性の高い判断ができます。
            </Typography>
          </SubSection>

          <SubSection title="4. 志望校の絞り込み">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              複数校の見学と比較を通じて、「この学校で学びたい」と感じた学校から志望校を絞り込みます。偏差値だけでなく、学校の雰囲気や教育方針も志望校選びの重要な判断基準です。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* ランキングを確認する */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#e9f2ea", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#1e782d" }}>
            高校の情報を検索してみましょう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校情報を掲載。見学後は実際の評判や詳細情報をチェック。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#1e782d",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1e782d", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              高校偏差値ランキングを見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 関連記事 */}
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値と総合的な判断で、自分に合った志望校を選ぶポイント
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  偏差値の見方・使い方を徹底解説
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値とは何か、どのように活用すべきかをわかりやすく解説
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  高校受験のスケジュール完全ガイド
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験本番に向けた計画立案と準備スケジュール
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#1e782d" }}>
                次の記事: 志望校の選び方
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ mb: 3 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#1e782d" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" component="h3" sx={{ mb: 1.5, fontSize: "1.1rem", fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
