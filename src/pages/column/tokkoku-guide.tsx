import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TokKokuGuidePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "特色選抜・推薦入試完全ガイド" },
  ];

  const faqItems = [
    {
      question: "学校推薦と自己推薦の違いは？",
      answer: "学校推薦は高校が受験生を推薦する制度で、内申点要件や出席状況などが厳しく審査されます。自己推薦は高校の推薦なしで、本人が自分の志望理由や適性をアピールする制度です。自己推薦の方が条件は緩いですが、自分の強みをしっかり表現する必要があります。",
    },
    {
      question: "推薦入試で合格するための内申点の目安は？",
      answer: "高校によって異なりますが、一般的には全体の内申点が4.0以上、5段階の合計が18～20以上が目安です。ただし、学校によっては3.5以上でも推薦を受けられることもあります。志望校の募集要項で確認することが重要です。",
    },
    {
      question: "面接試験ではどのような質問が出ますか？",
      answer: "「本校を志望した理由」「高校で何をしたいか」「将来の夢」「得意科目」「部活動の経験」などが一般的です。また、最近のニュースについての見解を聞く学校もあります。自分の言葉でしっかり答えられるよう練習することが大切です。",
    },
    {
      question: "推薦で合格できなかった場合、一般入試で受験できますか？",
      answer: "はい。推薦入試で合格できなくても、一般入試で受験することができます。ただし、精神的な負担が大きいため、推薦入試に挑戦する際は心の準備をしておくことが重要です。",
    },
    {
      question: "自己PR文はどのくらい力を入れるべきですか？",
      answer: "非常に重要です。推薦入試では、学力試験がない学校も多いため、自己PRは合格判定の大きな要素となります。何度も推敲し、学校のニーズとあなたの強みがマッチしていることを示すことが重要です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="特色選抜・推薦入試完全ガイド｜受験資格と対策 | School Station"
        description="特色選抜・推薦入試の完全ガイド。学校推薦と自己推薦の違い、内申点要件、面接対策、自己PR作成法など、推薦入試で合格するための全知識をご紹介します。"
        canonical="/column/tokkoku-guide/"
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
            "headline": "特色選抜・推薦入試完全ガイド｜受験資格と対策",
            "description": "特色選抜・推薦入試の完全ガイド。受験資格、対策方法、面接対策を詳しく解説。",
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
            background: "linear-gradient(135deg, #FF6F00 0%, #F57F17 50%, #FFA000 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            特色選抜・推薦入試完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFECB3", maxWidth: 600, mx: "auto" }}>
            受験資格、内申点要件、面接対策、自己PR作成法など、推薦入試で成功するための完全ガイド
          </Typography>
        </Box>

        <Section title="特色選抜・推薦入試とは" id="what-is-tokkoku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            <strong>特色選抜・推薦入試</strong>は、学力試験だけでなく、生徒の資質や適性を総合的に評価して合格者を決定する入試方式です。一般入試と異なり、内申点、面接試験、自己PRが重要な合格判定要素となります。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            推薦入試は、高校が推薦した生徒が受験する「学校推薦」と、本人が自由に受験できる「自己推薦」の2種類があります。学校によって募集要件が異なるため、事前に確認することが重要です。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学校推薦と自己推薦の違い" id="types-of-recommendations">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試には大きく2つの種類があります。それぞれの特徴と要件を理解しましょう：
          </Typography>

          <SubSection title="1. 学校推薦">
            <Box sx={{ bgcolor: "#F5F5F5", p: 2.5, borderRadius: 1, border: "1px solid #BDBDBD", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>定義：</strong> 高校が成績優秀で行動に問題のない生徒を推薦する制度。推薦人数に制限があります。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>内申点要件が厳しい</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      全体の内申点が4.0以上、または特定の科目の成績が5段階で4以上など、厳しい基準が設定されることが多い
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出席状況の厳しいチェック</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      欠席日数がほとんどないことが条件。遅刻や早退も審査対象になることがあります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>推薦枠の制限</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      各高校から推薦できる人数が決まっています。同じ学校から複数の推薦者が出ることはほぼありません。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="2. 自己推薦">
            <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>定義：</strong> 高校の推薦なしに、本人が自由に出願できる制度。志望理由や適性が評価されます。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出願条件が緩い</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      学校推薦より内申点要件が低い傾向。3.5以上や3.0以上という学校も多いです。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>複数出願が可能</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      制限がないため、志望校が複数ある場合、複数校に出願できます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>自己PRが重要</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      学力試験がない場合が多いため、自己PR、面接、小論文で自分の適性を示すことが重要です。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試の受験資格と内申点要件" id="requirements">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試を受験するには、以下の要件を満たす必要があります：
          </Typography>

          <SubSection title="一般的な要件">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>内申点</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校推薦は全体評定平均4.0以上が目安。自己推薦は3.5～3.8以上の学校が多い。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出席状況</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    欠席日数が少ないこと。学校推薦の場合、ほぼ皆勤が必須。自己推薦でも数日以下が目安。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>行動評定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    品行方正であること。生徒指導の記録がないことが前提。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>特定科目の成績</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    某科目の成績が5段階で4以上などの追加要件がある学校もあります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="推薦入試対策：面接試験" id="interview-preparation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試では、面接試験が非常に重要です。以下のポイントを押さえましょう：
          </Typography>

          <SubSection title="よくある面接質問と回答のコツ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#FF6F00" }}>Q1. 本校を志望した理由は？</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    <strong>回答のコツ：</strong> 学校のパンフレットで見た情報だけでなく、「学園祭で見た研究内容が魅力的だった」「進学実績が高い」など、具体的な理由を述べること。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#FF6F00" }}>Q2. 高校で何をしたいですか？</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    <strong>回答のコツ：</strong> 「勉強を頑張りたい」だけでなく、「〇〇を学んで、将来〇〇になりたい」など、具体的で現実的な目標を述べること。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#FF6F00" }}>Q3. 将来の夢・進路は？</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    <strong>回答のコツ：</strong> 大学進学を希望している場合は、「〇〇大学の〇〇学科で〇〇を勉強したい」と具体的に述べること。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#FF6F00" }}>Q4. 部活動での経験は？</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    <strong>回答のコツ：</strong> 成績や順位ではなく、「苦労したこと、そこから学んだこと」を述べ、高校生活にどう活かすかを考える。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#FF6F00" }}>Q5. 最近のニュースで気になることは？</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>回答のコツ：</strong> 政治・経済・環境問題など、時事問題について自分の考えを述べる。批判だけでなく、「こうすればいい」と前向きな意見を言うこと。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="面接試験の注意点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>身なりの清潔感</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校指定の制服を清潔に着用すること。髪型も整えておく。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>声の大きさと姿勢</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    背筋を伸ばし、目を見て、ハキハキとした声で話すこと。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>言葉遣い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    敬語を正しく使う。「〜だと思います」などの曖昧な表現を避ける。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>準備と練習</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    家庭や学校で何度も練習すること。先生や家族に模擬面接をしてもらう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="自己PR文の作成法" id="self-pr">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            自己PR文は、推薦入試の重要な評価要素です。以下のポイントを押さえて作成しましょう：
          </Typography>

          <SubSection title="自己PR文の構成">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>1. 結論（自分の強み）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      最初に「私の強みは〇〇です」と明確に述べる。例：「継続力」「リーダーシップ」「課題解決能力」など。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>2. 具体例（経験）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      部活動、学級活動、学習経験など、実際の経験に基づいて具体的に述べる。「〇〇という状況で、〇〇という課題に直面した」という流れで説明する。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>3. 学んだこと</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      その経験から学んだこと、得た気づきを述べる。「この経験を通じて、〇〇の大切さを学びました」。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#2E7D32" }}>4. 志望校での活かし方</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      その強みを志望校でどう活かすか述べる。「この強みを活かして、貴校では〇〇に取り組みたいと考えています」。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="自己PR文のコツ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校のニーズを理解する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    志望校の教育方針や求める人物像を研究し、その要件に合った自己PRをする。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>冒頭と結論は印象的に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    「私は〇〇という強みを持っています」と簡潔に述べ、最後も「このような力を貴校で活かしたいです」と強く結ぶ。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>第三者に見てもらう</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    親や先生に読んでもらい、冗長な表現や誤字がないか確認してもらう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>素直さと誠実さを大切にする</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    大げさな表現や嘘は避ける。自分の実体験に基づいた、誠実な文を心がける。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* CTA */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#FFF3E0", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#FF6F00" }}>
            高校の偏差値や進学実績を確認しよう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校の詳細情報を検索できます。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#FF6F00",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#E65100", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              高校偏差値ランキングを見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Related Articles */}
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/mensetsu-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  高校受験の面接対策
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  面接で聞かれる質問と回答例をわかりやすく解説
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/naishin-up/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  内申点を上げる方法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定期テストから授業態度まで、内申点を上げるための具体的な方法
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#FF6F00" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/bukatsu-choise/" style={{ textDecoration: "none" }}>
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
              <Typography sx={{ fontWeight: 600, color: "#FF6F00" }}>
                次の記事: 高校の部活選び
                <ArrowForwardIcon sx={{ ml: 1, fontSize: "1rem" }} />
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
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#FF6F00" }}>
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
