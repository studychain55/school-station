import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

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

export default function KoukouSoudanPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校選びで失敗しない相談先ガイド｜塾・学校説明会・先輩情報の活用法" },
  ];

  const faqItems = [
    {
      question: "高校選びの相談先として、最も信頼できる情報源は？",
      answer: "学校説明会での直接の質問、在学生・卒業生からの情報、中学校の進路指導の先生の意見が最も信頼できます。各情報源は異なる視点を提供するため、複数の情報を組み合わせて判断することが重要です。",
    },
    {
      question: "学校説明会では何を確認すべきですか？",
      answer: "教育方針、進学実績、部活動、キャンパス施設、校風、卒業後の進路などを確認しましょう。パンフレットには掲載されていない詳細情報を質問することで、学校の真の姿が見えてきます。",
    },
    {
      question: "塾の先生に高校選びを相談する場合、注意点はありますか？",
      answer: "塾の先生は学力面でのアドバイスに優れていますが、部活動や学校文化についての情報は限定的です。塾の先生の意見と、実際の学校情報を組み合わせることが重要です。",
    },
    {
      question: "先輩からの情報をどう活用すべきですか？",
      answer: "先輩からは、リアルな学校生活、友人関係、部活動の実態など、パンフレットには掲載されない生きた情報が得られます。複数の先輩からの話を聞くことで、より客観的な判断ができます。",
    },
    {
      question: "SNS・口コミサイトの情報はどの程度信頼できますか？",
      answer: "SNSや口コミサイトの情報は、個人的な感情や特定の出来事に基づいていることが多いです。参考情報として活用しつつ、公式な情報と比較検討することが大切です。",
    },
    {
      question: "高校選びで最終決定するとき、最も重要な判断基準は何ですか？",
      answer: "自分の学力に合っているか、学校の雰囲気が自分に合っているか、将来の目標に向かって学べる環境か、の3点です。周囲の意見も参考にしながら、最終的には自分の意思で決定することが重要です。",
    },
  ];

  return (
    <>
      <SEO
        title="高校選びで失敗しない相談先ガイド｜塾・学校説明会・先輩情報の活用法 | School Station"
        description="高校選びの情報収集方法を徹底ガイド。学校説明会・オープンキャンパス・塾の先生・先輩からの情報を効果的に活用し、最適な高校を選ぶコツを解説。"
        canonical="/column/koukou-soudan/"
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
            "headline": "高校選びで失敗しない相談先ガイド｜塾・学校説明会・先輩情報の活用法",
            "description": "高校選びの情報収集方法を徹底ガイド。学校説明会・オープンキャンパス・塾の先生・先輩からの情報を効果的に活用し、最適な高校を選ぶコツを解説。",
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
            高校選びで失敗しない相談先ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            塾・学校説明会・先輩情報を上手く活用し、自分に最適な高校を選ぶための完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校選びが人生を左右する理由" id="importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校選びは、単なる学校の選択ではなく、人生の進路を大きく左右する重要な決定です。高校3年間で学ぶ内容、接する友人、経験する活動は、大学進学先や将来のキャリアに大きな影響を与えます。また、自分に合わない高校を選んでしまうと、学業成績の低下、人間関係の問題、学校生活への不適応につながる可能性があります。正しい情報に基づいた高校選びが、充実した人生を送るための第一歩です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>学習環境の決定</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>進学校か進学校でない学校か、その選択で受けられる教育内容が大きく異なります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>人間関係の形成</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校での友人関係は、人生に大きな影響を与えます。学校の雰囲気や文化が自分に合っているかが重要です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>キャリア形成</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校の進学実績やキャリア支援の充実度は、将来のキャリア形成に大きく影響します。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>自己成長の機会</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>部活動、行事、課外活動などの充実度が、高校3年間の成長を決めます。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="高校選びの情報収集方法" id="information">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校選びで後悔しないためには、複数の情報源から正確で多角的な情報を集めることが不可欠です。各情報源にはメリットとデメリットがあるため、それぞれを理解した上で活用することが重要です。
          </Typography>

          <SubSection title="学校説明会・オープンキャンパス">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校説明会とオープンキャンパスは、学校の公式な情報を直接得られる最も信頼できる情報源です。校舎の施設、学習環境、在学生の様子を実際に見ることで、学校の真の姿を知ることができます。
            </Typography>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数回の参加：</strong>春と秋の説明会に参加することで、学校の全体像をより深く理解できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在学生への直接質問：</strong>説明会では、在学生に学校生活の実態について質問することが最も効果的です。学校の雰囲気が自分に合っているかを判断できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>施設の確認：</strong>図書館、教室の広さ、食堂の質、トイレの清潔さなど、細かい施設も確認しましょう。これらが学校生活の質を決めます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動の様子を観察：</strong>説明会時に部活動が活動している場合は、部員の態度、練習内容、顧問の指導方法などを観察することで、部活動の実態が分かります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="塾の先生への相談">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              塾の先生は、多数の生徒の高校進学を指導した経験から、学力に基づいた客観的なアドバイスができます。ただし、進学実績を優先する傾向があるため、バランスの取れた判断が必要です。
            </Typography>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット：</strong>学力に基づいた客観的なアドバイス、多くの生徒の進学先での成功事例の共有、学力試験対策の指導
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>注意点：</strong>部活動や学校文化についての情報は限定的。塾の進学実績を優先させる傾向があるため、学校の雰囲気についてはやや偏りがある可能性あり。
                </Typography>
              </ListItem>
            </List>

            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D", mt: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
                塾の先生のアドバイスは参考にしつつ、最終判断は自分で行うことが重要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="学校の進路指導の先生への相談">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              中学校の進路指導の先生は、あなたの学力、性格、適性を最も詳しく知っています。学校の情報、進学実績、受験戦略について、最も信頼できるアドバイスが期待できます。
            </Typography>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>個別相談の活用：</strong>進路相談の時間を十分に取ってもらい、学力だけでなく、あなたの性格や適性に合った学校を紹介してもらいましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦入試の情報：</strong>進路指導の先生は推薦入試に関する詳細な情報を持っています。推薦入試の合格可能性について、正確な判断をしてもらえます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="先輩・卒業生からの情報">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              先輩や卒業生からは、パンフレットには掲載されていない生きた情報が得られます。リアルな学校生活、実際の進学実績、高校選びの後悔など、極めて貴重な情報源です。
            </Typography>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数の先輩からの話：</strong>1人の先輩の意見では偏りがあるため、複数の先輩からの意見を聞くことで、より客観的な判断ができます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体的な質問：</strong>「学校生活で最も大変だったことは？」「友人関係はどう？」「進学実績は実際どう？」など、具体的な質問をすることで、学校の実態が見えます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>後悔している点：</strong>先輩が「この高校にして後悔したこと」を聞くことで、失敗しない高校選びができます。先輩の後悔は、あなたの貴重な学習材料です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="学校説明会で必ず確認すべき質問リスト" id="questions">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学校説明会での質問は、メモを用意して、事前に質問内容をまとめておくことで、より効果的な情報が得られます。以下のリストを参考に、自分に必要な情報を確認しましょう。
          </Typography>

          <SubSection title="学習環境についての質問">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  1. 進学校と言われている理由は何ですか？（進学実績？教育方針？）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  2. 過去3年間の大学進学実績（国立大学、早慶上智などの実績数）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  3. 授業内容と教科書の進め方（進度が速い？）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  4. 追加勉強やサポート体制（補習授業？質問対応の時間？）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  5. 宿題の量と自学自習の推奨時間
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="学校生活・雰囲気についての質問">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  6. 部活動の活動時間と勉強との両立
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  7. 学校の校風と生徒の雰囲気（厳しい？自由？）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  8. いじめや問題行動への学校の対応
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  9. 男女比と共学校での男女の関係
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  10. 学園祭・体育祭の様子（活発？盛り上がる？）
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="施設・サービスについての質問">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  11. 図書館の蔵書数とWi-Fi環境
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  12. 食堂の営業時間とメニューの豊富さ
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  13. 交通アクセス（駅から何分？バス便はあるか？）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  14. 放課後の利用できる施設（自習室？質問室？）
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="SNS・口コミサイトの使い方と注意点" id="sns">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            SNSや口コミサイトは、リアルタイムな情報が得られる便利なツールですが、情報の信頼性の問題があります。参考情報として活用しつつ、公式情報と比較検討することが重要です。
          </Typography>

          <SubSection title="SNS・口コミの情報の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット：</strong>在学生のリアルな感想、最新の学校情報、親には聞きにくい話題（クラス内の人間関係など）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デメリット：</strong>個人的な感情や特定の出来事に基づいている、ネガティブ情報が目立つ傾向、情報の真偽が不確定
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="SNS・口コミを活用する際の注意点">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600, mb: 2 }}>
                複数の意見を比較：1つの意見だけで判断せず、複数の口コミを読んで共通点を見つけることが重要です。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600, mb: 2 }}>
                時間的背景を確認：古い口コミは、現在の学校の様子と異なっている可能性があります。投稿日時を確認しましょう。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600, mb: 2 }}>
                公式情報と比較：SNS情報を参考にしつつ、学校の公式ウェブサイトや学校説明会の情報と比較することで、より正確な判断ができます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
                批判的思考：極端にネガティブまたはポジティブな評価は、その投稿者の個人的な事情による可能性があります。客観的視点を保つことが重要です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="最終的な意思決定の方法" id="decision">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            複数の情報源を活用した後、最終的な意思決定は自分自身で行う必要があります。情報を整理し、優先順位を付けて、後悔のない判断をすることが重要です。
          </Typography>

          <SubSection title="判断の基準となる3つのポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", width: "100%" }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#1e782d", mb: 1 }}>
                    1. 学力に合致しているか
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>
                    学力が合わない学校を選ぶと、授業についていけず、成績が低下します。塾の先生や進路指導の先生のアドバイスを参考に、学力に合った学校を選ぶことが基本です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", width: "100%" }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#1e782d", mb: 1 }}>
                    2. 学校の雰囲気が自分に合っているか
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>
                    学力が高くても、学校の雰囲気が自分に合わないと、学校生活が充実しません。説明会や先輩の話から、学校の校風が自分に合っているか確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", width: "100%" }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#1e782d", mb: 1 }}>
                    3. 将来の目標に向かって学べる環境か
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>
                    大学進学、専門技術習得、就職など、あなたの進路目標に対応した教育が提供されているかを確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="意思決定の流れ">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>ステップ1：情報の整理</strong> — 収集した全ての情報（学校説明会、塾の意見、先輩の話、SNS情報）をノートにまとめ、各学校の特徴を明確にします。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>ステップ2：優先順位の決定</strong> — あなたにとって最も重要な条件（進学実績？雰囲気？部活動？）を決め、各学校の該当度を評価します。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>ステップ3：複数校の比較</strong> — 複数の志望校を比較し、上記の3つのポイント（学力、雰囲気、将来目標）に照らし合わせて、総合的に判断します。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>ステップ4：最終判断</strong> — 周囲の意見も参考にしつつ、最終的には自分の意思で決定します。決定したら、その高校での成功を目指して、準備に取り組みましょう。
              </Typography>
            </Box>
          </SubSection>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D", mt: 3 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
              最後に：高校選びで100%完璧な判断はできません。不安もあるかもしれませんが、現在手に入る最適な情報に基づいて決定すれば、その高校での経験は必ず有意義なものになります。前向きに新しい高校生活に向かいましょう。
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <FAQ items={faqItems} />

        {/* Back to Column */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E0E0E0" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#1e782d", fontWeight: 600, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
              ← コラム一覧に戻る
            </Typography>
          </Link>
        </Box>
      </Container>
    </>
  );
}
