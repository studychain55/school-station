import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function JukenStressPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "受験のストレスと上手に付き合う方法" },
  ];

  const faqItems = [
    {
      question: "受験ストレスでうつ的な症状が出たらどうすればいい？",
      answer: "まずは学校のカウンセラーや親に相談してください。必要に応じて医師の診察を受けることをおすすめします。受験を無理に続けることより、心身の健康を優先することが重要です。",
    },
    {
      question: "親からのプレッシャーが強い場合はどうする？",
      answer: "親との対話が重要です。自分の気持ちや不安を冷静に伝えることで、親も状況を理解できます。学校の進路指導の先生に間に入ってもらうのも有効です。",
    },
    {
      question: "睡眠不足はどのくらい危険ですか？",
      answer: "睡眠は学習の定着に最も重要です。受験前夜は十分な睡眠をとることが、本番での実力発揮に直結します。毎日7～8時間の睡眠を心がけてください。",
    },
    {
      question: "模試の成績で落ち込んだときはどう対処する？",
      answer: "模試は本番ではなく、課題を見つけるためのツールです。結果を分析し、何を改善すべきか計画を立てることで、前向きに次に進むことができます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="受験のストレスと上手に付き合う方法｜メンタルヘルスガイド | School Station"
        description="受験ストレスの対処法、睡眠・栄養の管理、メンタルトレーニング、親とのコミュニケーションなど、心身の健康を保ちながら受験に臨むための完全ガイド。"
        canonical="/column/juken-stress/"
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "受験のストレスと上手に付き合う方法｜メンタルヘルスガイド",
              description: "受験ストレスの対処法、睡眠・栄養の管理、メンタルトレーニング、親とのコミュニケーションなど、心身の健康を保ちながら受験に臨むための完全ガイド。",
              datePublished: `${CURRENT_YEAR}-04-07`,
              author: {
                "@type": "Organization",
                name: "School Station",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: item.label,
                item: item.href ? `https://school-station.com${item.href}` : undefined,
              })),
            }),
          }}
        />
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <BreadCrumb items={breadcrumbs} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            受験のストレスと上手に付き合う方法
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
            更新日: {CURRENT_YEAR}年4月7日 | 読了時間: 約8分
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: "#f5f5f5" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            受験は人生の大事な試練
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            受験は人生の中でも大きなストレスを伴うイベントです。勉強の辛さ、親からのプレッシャー、友人との比較、不安感など、様々なストレス要因があります。
            本ガイドでは、受験ストレスに向き合い、心身の健康を保ちながら、最高のパフォーマンスを発揮するための方法を詳しく解説します。
          </Typography>
        </Paper>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            受験ストレスの原因と症状
          </Typography>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Paper sx={{ p: 2, border: "1px solid #e0e0e0" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                主なストレス要因
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="勉強量の多さと期間の長さ" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="親からの期待と成績へのプレッシャー" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="成績不振による不安と自信喪失" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="友人との競争心と比較" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="将来への不安と進路選択のストレス" />
                </ListItem>
              </List>
            </Paper>
            <Paper sx={{ p: 2, border: "1px solid #e0e0e0" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                ストレスの兆候を見逃さない
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "warning.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="睡眠不足や食欲低下" secondary="1～2週間継続する場合は注意" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "warning.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="気分の落ち込みやイライラ" secondary="常に負の感情が続く場合" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "warning.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="集中力の低下や頭痛" secondary="勉強がはかどらない状態が続く" />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            ストレス対処法
          </Typography>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Paper sx={{ p: 3, border: "2px solid #2196f3", borderLeft: "6px solid #2196f3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                1. 十分な睡眠を優先する
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                受験勉強では睡眠を削りがちですが、睡眠は学習の定着に最も重要です。毎日7～8時間の睡眠を目指し、特に試験前は十分な睡眠を心がけてください。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #2196f3", borderLeft: "6px solid #2196f3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                2. バランスの良い食事を心がける
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ストレスで食欲が落ちやすいですが、栄養不足は集中力低下につながります。朝食は必ず摂り、カフェイン過剰摂取も避けましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #2196f3", borderLeft: "6px solid #2196f3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                3. 定期的な運動でストレス解消
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                15～30分の運動でストレスホルモンが低下します。ウォーキング、軽いジョギング、ストレッチなど、無理のない運動を継続しましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #2196f3", borderLeft: "6px solid #2196f3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                4. 親や友人との相談を大切に
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ストレスを抱え込まず、親や友人に気持ちを伝えることで、心理的な負担が軽減されます。学校のカウンセラーも活用しましょう。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, border: "2px solid #2196f3", borderLeft: "6px solid #2196f3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                5. 瞑想とリラックス法
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                朝5分の瞑想や就寝前の呼吸法で、心を落ち着かせることができます。不安が強い時は試してみる価値があります。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            親とのコミュニケーション
          </Typography>
          <Paper sx={{ p: 3, bgcolor: "#fff3e0", border: "1px solid #ffe0b2" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              親からのプレッシャーがストレスの大きな要因になります。親に対しては、自分の努力を具体的に示し、信頼関係を築くことが重要です。
              「今月は○○時間勉強した」「模試で△△点取った」など、客観的な数字を親に示すことで、親の不安も軽減されます。
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        <Paper sx={{ p: 4, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            高校を探す
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            あなたに最適な高校が見つかります。
          </Typography>
          <Link href="/all/">
            <Typography
              variant="button"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.5,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: 1,
                textDecoration: "none",
              }}
            >
              高校を検索する
            </Typography>
          </Link>
        </Paper>
      </Container>
    </>
  );
}
