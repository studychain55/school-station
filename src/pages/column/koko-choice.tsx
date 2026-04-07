import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function KokoChoicePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "志望校の選び方" },
  ];

  const faqItems = [
    {
      question: "偏差値だけで志望校を決めてもいいですか？",
      answer: "偏差値は重要な指標の一つですが、それだけで判断するべきではありません。教育方針、学科、立地、大学進学実績など、複数の観点から総合的に判断することが大切です。",
    },
    {
      question: "志望校は何校選ぶべきですか？",
      answer: "一般的には、公立高校1校を本命として、私立高校を2～3校併願する形が多いです。目標校、実力相応校、安全校を各段階で選ぶと、合格確保と上位校への挑戦のバランスが取れます。",
    },
    {
      question: "学校見学は重要ですか？",
      answer: "非常に重要です。実際に訪問することで、校舎の雰囲気、施設、在学生の様子など、数值では分からない情報が得られます。必ず見学することをお勧めします。",
    },
    {
      question: "通学時間が長い学校を選んでもいいですか？",
      answer: "毎日の通学は生活の大きな部分を占めます。通学時間が長いと学習時間が減る可能性があります。できれば無理のない範囲の学校を選ぶことが望ましいです。",
    },
    {
      question: "大学進学を考える場合、高校選びで気を付けることは？",
      answer: "志望大学への進学実績、進路指導の充実度、補習制度の有無などを確認しましょう。また、学習環境が整い、自分が集中して勉強できる雰囲気の学校かどうかも重要です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="志望校の選び方｜受験校を決める5つの基準 | School Station"
        description="自分に最適な志望校を選ぶための5つの重要な基準を解説。学力レベル、学科、教育方針、立地、大学進学実績など、総合的な判断基準をご紹介します。"
        canonical="/column/koko-choice/"
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
            "headline": "志望校の選び方｜受験校を決める5つの基準",
            "description": "自分に最適な志望校を選ぶための5つの重要な基準を解説。",
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            志望校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            受験校を決める5つの基準。自分に最適な学校を選ぶためのガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="志望校選びが重要な理由" id="importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            志望校選びは、高校受験における最も重要な決断の一つです。単に「入試に合格すること」だけでなく、「その学校で充実した3年間を過ごすこと」を視野に入れた選択が必要です。
          </Typography>
          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              志望校選びで失敗すると、勉強へのモチベーション低下、対人関係の悩み、キャリアの後悔につながる可能性があります。時間をかけて慎重に検討することが大切です。
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="志望校を決める5つの基準" id="five-criteria">
          <SubSection title="1. 学力レベル（偏差値）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              最初に確認すべき基準が、自分の現在の学力と志望校の難易度のマッチングです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>自分の偏差値を知る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    模試の結果を基に、複数回の平均値として自分の偏差値を把握しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>3段階志望法を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    目標校（偏差値+5～10）、実力相応校（偏差値±0～5）、安全校（偏差値-5～10）を設定します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>現実的な目標設定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    努力で到達可能な範囲内で、かつ自分を成長させられる学校を選びましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. 学科・専攻分野">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校では、普通科だけでなく、商業科、工業科、農業科、家政科など、様々な学科があります。自分の興味・適性に合った学科を選ぶことが重要です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>普通科</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    数学、国語、英語などの基礎学科を広く学びます。大学進学を目指す多くの生徒が選択。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>専門学科</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    商業科、工業科など、特定分野の専門知識・技能を習得。就職や実践的スキルを重視する場合に最適。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 教育方針と特色">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校ごとに、独自の教育方針や特色があります。あなたの価値観や目標と合致しているか確認することが大切です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校の理念を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校案内やWebサイトで、アドミッションポリシーや教育方針を読み込みましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校見学を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    実際に訪問して、校舎の雰囲気や在学生の様子を見ることで、本当に合う学校か判断できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>卒業生の声を聞く</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    可能であれば、卒業生や現在の生徒から直接話を聞くと、学校の実態がよくわかります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="4. 通学利便性と立地">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              毎日の通学は、生活の大きな部分を占めます。通学時間や交通費、周辺環境も考慮して選びましょう。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>通学時間</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    往復で2時間以上かかる場合、学習時間や睡眠時間が減少するリスクがあります。可能なら1時間以内を目安に。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>交通費</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    定期代の負担も考慮。定期が購入できる範囲かどうかを確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>周辺環境</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    駅近くの便利さ、治安、学習環境（図書館など）の充実度も確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="5. 大学進学実績と進路指導">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              特に大学進学を目指す場合は、進学実績と進路指導体制の充実度が重要です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>進学実績の確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    志望大学への進学実績があるか、また進学先大学の偏差値レベルはどのくらいか確認します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>進路指導の体制</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    進路指導専任の教職員がいるか、補習制度は充実しているか、個別相談が受けられるかなどを確認。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学習環境</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    図書館、自習スペース、実験室など、学習に必要な施設が充実しているかも重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="志望校選びの実践的なステップ" id="practical-steps">
          <Box sx={{ bgcolor: "#FFF3E0", p: 3, borderRadius: 1, border: "1px solid #FFE0B2" }}>
            <List sx={{ m: 0 }}>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 1. 自分の適性を理解する
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    模試の結果を複数回分集計し、自分の偏差値を把握。また、興味・適性検査などを参考に、自分の強みを理解します。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 2. 志望校候補をリストアップ
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    School Stationなどの偏差値ランキングを使って、目標校、実力相応校、安全校のグループ分けをします。各グループから複数校を選びます。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 3. 学校案内・Webで情報収集
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    学科、教育方針、進学実績、施設などをリサーチ。複数校を比較表にまとめると判断しやすくなります。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 4. 学校見学に行く
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    候補校の文化祭や学校説明会に参加。実際に訪問することで、数値では分からない学校の雰囲気を感じることができます。
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                    Step 5. 家族や進路指導の先生に相談
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                    自分の考えをまとめた上で、家族や学校の進路指導の先生に相談。複数の視点からアドバイスをもらうことで、より適切な判断ができます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1565C0" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>前の記事</Typography>
              </Box>
            </Paper>
          </Link>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1565C0" }}>
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
                <ArrowForwardIcon />
              </Box>
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
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#0D47A1" }}>
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
