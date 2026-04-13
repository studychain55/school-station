import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function KokoseiNyushiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校入試の種類と対策" },
  ];

  const faqItems = [
    {
      question: "推薦入試と一般入試、どちらが難しいですか？",
      answer: "一概には言えませんが、難易度のポイントが異なります。推薦入試は内申点と面接が重視されるため、3年間の学習態度が重要。一般入試は試験当日の学力が最優先です。自分の適性に合った方法を選ぶことが大切です。",
    },
    {
      question: "推薦入試で不合格になったら一般入試は受験できますか？",
      answer: "はい。推薦入試で不合格でも、その後の一般入試に出願できます。ただし、推薦入試の出願期限から一般入試までの準備期間は短いため、推薦入試を受ける際から一般入試対策も並行して進めておくことがおすすめです。",
    },
    {
      question: "特色選抜と推薦入試の違いは何ですか？",
      answer: "特色選抜は学校の特定の教育目標や資格要件を満たす生徒を対象とした入試で、学校推薦より自分のペースで出願できることが多いです。推薦入試は学校長の推薦が必須です。募集定員や合格基準も異なるため、事前に確認が重要です。",
    },
    {
      question: "内申点はどのくらい重要ですか？",
      answer: "推薦入試では非常に重要で、合否判定の大きなウエイトを占めます。一般入試では内申点が合否に直結しませんが、出願資格や調査書の参考にされる場合があります。いずれにせよ、日頃から定期テストと提出物を大切にすることが成功の鍵です。",
    },
    {
      question: "面接対策は何ヶ月前から始めるべきですか？",
      answer: "推奨としては、夏休み終了後（9月）から本格的に始めると良いでしょう。ただし、自分がなぜその高校を選んだのか、将来の夢は何かなどの根本的な問いは、年間を通じて考え続けることが重要です。3ヶ月間の集中対策で、十分な準備が可能です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校入試の種類と対策｜推薦・一般・特色選抜の違い | School Station"
        description="高校入試の3つの主要な種類（推薦入試・一般入試・特色選抜）について、出願資格、対策方法、面接のポイント、出願スケジュールを詳しく解説。合格を勝ち取るための戦略をご紹介します。"
        canonical="/column/kokosei-nyushi/"
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
            "headline": "高校入試の種類と対策｜推薦・一般・特色選抜の違い",
            "description": "高校入試の3つの主要な種類について、出願資格、対策方法、面接のポイントを詳しく解説。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1976D2 50%, #1E88E5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校入試の種類と対策
          </Typography>
          <Typography variant="body2" sx={{ color: "#B3E5FC", maxWidth: 600, mx: "auto" }}>
            推薦入試・一般入試・特色選抜の違い、出願資格、合格戦略をわかりやすく解説

          </Typography>
        </Box>

        <Section title="高校入試の3つの主要な種類" id="types-of-entrance-exams">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入試には、主に3つの種類があります。各入試の特徴を理解し、自分の適性に合った受験戦略を立てることが合格への近道です。
          </Typography>

          <SubSection title="推薦入試（学校推薦）">
            <Box sx={{ bgcolor: "#e9f2ea", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>概要：</strong> 中学校の校長からの推薦を受けた生徒が受験する入試。一般入試より先の秋冬に実施されることが多いです。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>出願資格：</strong> 内申点（通常3.0以上）、生活態度の良好さ、特定の実績（スポーツ、文化活動など）が条件となることが多いです。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>試験内容：</strong> 面接、作文、実技試験（学校によって異なる）。学力試験が実施されない場合もあります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="一般入試">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>概要：</strong> 最も一般的な受験方式。学力試験の成績を基準に合否が判定されます。冬から春にかけて実施されます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>出願資格：</strong> 特に制限がなく、すべての受験生が出願できます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>試験内容：</strong> 国語、数学、英語、社会、理科の5教科の学力試験。配点や試験時間は学校によって異なります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="特色選抜">
            <Box sx={{ bgcolor: "#F1F8E9", p: 2.5, borderRadius: 1, border: "1px solid #C5E1A5", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>概要：</strong> 高校の特色ある教育目標や目的に合致した生徒を対象とした入試。国際教育や理数教育などに特化した高校で実施されることが多いです。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>出願資格：</strong> 学校の掲げる特定の才能や適性（例：英検準2級以上、数学の優秀成績など）。学校によって大きく異なります。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>試験内容：</strong> 学力試験（国数英など一部）、面接、実技試験、小論文など、学校の特色に合わせた独特の試験内容。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="各入試の出願資格と受験条件" id="application-requirements">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            入試ごとに出願資格が異なります。志望校の募集要項を早めに確認することが大切です。
          </Typography>

          <SubSection title="推薦入試の主な出願要件">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>内申点の基準</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    公立高校では通常3.0以上、難関校では3.5以上などの基準があります。自分の内申点が基準を満たしているか確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校長の推薦</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    校長からの推薦が必須。生活態度、勤務成績、出席状況などが総合的に評価されます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>欠席日数の制限</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校によって異なりますが、欠席日数が少ないことが推薦の条件となることが多いです。一般的には年3日以内などの基準があります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>実績・資格の有無（スポーツ推薦など）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    スポーツ推薦や文化推薦の場合、全国大会入賞や各種検定資格が求められます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="一般入試の出願条件">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学力試験の成績</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    募集定員内に収まる学力があることが条件。内申点は参考程度です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>特に出願資格はなし</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    欠席日数や生活態度に制限がないため、誰でも出願できます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="内申点の重要性と上げ方" id="grades-importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試を考えている人にとって、内申点は合否を大きく左右する要素です。内申点の仕組みと上げ方を理解しましょう。
          </Typography>

          <SubSection title="内申点とは">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                内申点は、中学3年間の定期テストの成績、授業態度、提出物、出席状況などを総合的に評価した点数です。一般的には9段階評価（1～9）で、各教科の評価を集計します。多くの高校では、この9段階評価の平均値を内申点として使用しています。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="内申点を上げるための5つの実践的な方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>1. 定期テストで高得点を狙う</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    内申点の基本となる定期テスト。各テスト1ヶ月前から計画的に学習を進め、各教科で80点以上を目指すことが目安です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>2. 授業に積極的に参加する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    発表、質問、グループワークなど、授業中の貢献が評価されます。得意な教科こそ、積極的に参加することで、評価を上げることができます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>3. 提出物を絶対に忘れない</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    宿題やレポートの提出状況は、内申点に直結します。提出期限を厳守し、丁寧に作成することが、スムーズに内申点を上げるコツです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>4. 欠席を減らす</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    欠席日数が多いと、推薦入試の出願資格そのものに影響します。健康管理に気をつけ、やむを得ない理由以外では欠席しないことが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>5. 苦手教科を優先的に対策する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    苦手教科を克服することで、全体の内申点が上がります。担当の先生に相談し、個別サポートを受けることもおすすめです。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="面接対策のポイント" id="interview-preparation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試・特色選抜では面接が実施されることがほとんどです。面接を制することが、合格への大きな一歩となります。
          </Typography>

          <SubSection title="よく出る質問と対策">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#2E7D32" }}>「なぜこの高校を志望しましたか？」</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>対策：</strong> 学校のパンフレットやホームページを熟読し、具体的な理由を用意する。「自分の夢」と「学校の特色」を結びつけた回答が効果的です。「先生から勧められた」だけでなく、自分の言葉で志望理由を語ることが大切。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#2E7D32" }}>「高校でやりたいことは何ですか？」</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>対策：</strong> 部活動、学習、生徒会活動など、具体的な目標を述べる。「頑張りたい」という漠然とした回答ではなく、「〇〇大学に進学するために、この高校で〇〇を学びたい」など、具体性が重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#2E7D32" }}>「中学での最大の成果・経験は何ですか？」</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>対策：</strong> 部活動の成績、学園祭での工夫、定期テストの成績向上など、具体的なエピソードを用意する。「そこから何を学ったか」という自己反省が評価されます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 1, color: "#2E7D32" }}>「得意な教科・苦手な教科は？」</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>対策：</strong> 得意な教科ではその理由を、苦手な教科では克服するための努力を具体的に説明する。「頑張っている」という言葉よりも、「前回のテストより5点上がった」など、数字で示すことが効果的です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="面接で気をつけるべき5つのマナー">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>身だしなみの整備</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    制服をきちんと着こなし、髪型は清潔に。爪の長さ、アクセサリーにも注意が必要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>正しい敬語と丁寧な言葉遣い</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    「です・ます」調で統一し、「～してくれる」ではなく「～してくださる」など、正しい敬語を使う習慣をつけましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>視線と姿勢</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    面接官の目を見て、背筋を伸ばして座る。緊張して俯いたり、そわそわしたりしないことが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>適度な大きさの声で答える</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    小さすぎる声では自信がないように見え、大きすぎると傲慢に見えます。面接官に聞きやすい声量を心がけましょう。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>結論から答える</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    「はい、〇〇です。なぜなら～」と、結論から話し始めることで、聞き手にわかりやすい答え方ができます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="出願スケジュールと注意事項" id="application-schedule">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入試は複数の時期に分かれて実施されます。スケジュールを理解し、計画的に受験を進めることが重要です。
          </Typography>

          <SubSection title="典型的な高校入試のスケジュール">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>9月～10月：推薦入試の願書受付</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦入試の志望校を決め、学校から推薦をもらえるか確認する時期。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>11月～12月：推薦入試の実施</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦入試（面接・作文など）が実施される。結果は12月中旬～1月初旬に発表される。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>1月～2月：一般入試の願書受付・実施</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一般入試の願書受付が行われ、学力試験が実施される（公立は通常2月中旬）。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>3月：合格発表・入学手続き</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一般入試の結果が発表され、合格者は入学手続きを行う。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="入試出願時の重要な注意事項">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#D32F2F" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>出願期限を絶対に守る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    出願期限を過ぎると、どんな理由があっても受験できません。早めに必要書類を揃え、余裕を持って出願することが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#D32F2F" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>願書の記入を慎重に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    氏名、生年月日、住所など、記入ミスがないか何度も確認する。記入ミスが合否に影響することもあります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#D32F2F" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>成績証明書・推薦書を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦書や成績証明書に誤りがないか、学校に確認をとる。特に内申点に誤記がないか確認することが重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#D32F2F" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>複数校への同時出願を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    推薦入試と一般入試を同時出願する場合、受験スケジュールが重複しないか確認する。特に合格時の手続き期限に注意。
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
        <Box sx={{ my: 4, p: 3, bgcolor: "#B3E5FC", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#01579B" }}>
            志望校の情報をもっと詳しく確認しよう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校の入試情報も掲載しています。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#01579B",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#004D7A", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              高校を検索する →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Related Articles */}
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/kokosei-study/" style={{ textDecoration: "none" }}>
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
                  高校生の効率的な勉強法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  定期テスト・大学受験対策の勉強法と時間管理
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/mensetsu-guide/" style={{ textDecoration: "none" }}>
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
                  面接対策ガイド
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  よく出る質問と答え方を詳しく解説
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
          <Link href="/column/kokosei-study/" style={{ textDecoration: "none" }}>
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
                次の記事: 高校生の効率的な勉強法
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
