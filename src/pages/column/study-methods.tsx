import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function StudyMethodsPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校受験に向けた効果的な勉強法" },
  ];

  const faqItems = [
    {
      question: "合格に必要な勉強時間はどのくらいですか？",
      answer: "一般的には、中学3年間で2,000～3,000時間の総学習時間が目安です。1日あたり2～3時間の学習を毎日続けることで達成できます。夏休みなど長期休暇時は1日8～10時間の学習が推奨されます。",
    },
    {
      question: "得意科目と苦手科目はどのように対策すべきですか？",
      answer: "得意科目は基礎を確実にしつつ、応用問題に挑戦して高得点を狙います。苦手科目は基礎を徹底的に復習し、理解を深めることに時間を使うことが重要です。配分は苦手科目に多めの時間を割きましょう。",
    },
    {
      question: "スケジュール管理で失敗しないコツは何ですか？",
      answer: "週単位で計画を立て、毎週末に進捗確認をすることが大切です。計画が完璧であることより、実現可能な計画を継続することが重要です。余裕を持たせ、突発的な状況にも対応できる柔軟性を保ちましょう。",
    },
    {
      question: "モチベーションが落ちたときはどうすればいいですか？",
      answer: "短期目標（1週間）を達成したら小さなご褒美をあげるなど、達成感を積み重ねることが大切です。また、友人と一緒に勉強する、親と受験について話し合うなど、サポート体制を活用することも有効です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校受験に向けた効果的な勉強法｜教科別攻略と時間管理のコツ | School Station"
        description="高校受験合格に必要な勉強量、教科別の効果的な勉強法、スケジュール管理のコツ、モチベーション維持方法をわかりやすく解説します。"
        canonical="/column/study-methods/"
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
              headline: "高校受験に向けた効果的な勉強法｜教科別攻略と時間管理のコツ",
              description: "高校受験合格に必要な勉強量、教科別の効果的な勉強法、スケジュール管理のコツ、モチベーション維持方法をわかりやすく解説します。",
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
            高校受験に向けた効果的な勉強法
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            教科別攻略と時間管理のコツ。合格に必要な勉強量から実践的な学習方法まで、合格の道を示します
          </Typography>
        </Box>

        {/* Overview */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, bgcolor: "#F5F5F5", border: "1px solid #E0E0E0" }}>
          <Typography variant="h3" component="h2" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2, color: "#0D47A1" }}>
            合格に必要な勉強量
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 2 }}>
            高校受験で合格するために必要な総学習時間は、一般的に2,000～3,000時間が目安とされています。これは中学3年間（約1,000日）で割ると、1日あたり2～3時間の学習を毎日継続する必要があるということです。
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            ただし、現在の学力や志望校のレベルによって必要な時間は異なります。苦手科目が多い場合や上位校志望の場合は、より多くの学習時間が必要になることを念頭に置いておきましょう。
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* 教科別勉強法 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            教科別勉強法
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr" }, gap: 3 }}>
            <Paper sx={{ p: 3, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#E65100" }}>
                英語：毎日継続が鍵
              </Typography>
              <List sx={{ pl: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      単語・文法の基礎固め（1年～2年生）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      毎日30分の単語学習と、文法問題を確実に解くことが重要です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      長文読解練習（3年生）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      文法が定着したら、長文読解に時間を使います。毎日1～2題の長文を解く習慣をつけましょう。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      リスニング対策
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      1日10～15分程度のリスニング練習を毎日続けることで、耳が慣れていきます。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#E3F2FD", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#1565C0" }}>
                数学：反復演習が最重要
              </Typography>
              <List sx={{ pl: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      基本問題の徹底（1年～2年生）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      計算力と基本的な解法を完全にマスターすることが土台になります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      応用問題・過去問演習（3年生）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      基礎が定着したら、入試レベルの問題演習に移ります。わからない問題は解説をしっかり読み、何度も復習しましょう。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#1565C0", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      ケアレスミス対策
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      計算ミスや読み間違いをなくすため、見直しの習慣をつけることが大切です。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F3E5F5", border: "1px solid #E1BEE7" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#7B1FA2" }}>
                国語：読解力の養成
              </Typography>
              <List sx={{ pl: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      文法・古文・漢文の基礎（1年～2年生）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      文法規則、古文の単語・文法、漢文の基本を確実に学習します。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      現代文の読解演習
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      毎日1～2題の読解問題を解き、論理的思考力を鍛えます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#7B1FA2", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      作文対策
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      定期テストや模試の作文問題を通じて、文章表現力を高めましょう。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F1F8E9", border: "1px solid #DCEDC8" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#558B2F" }}>
                社会・理科：知識の体系化
              </Typography>
              <List sx={{ pl: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#558B2F", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      教科書の読み込みと要点整理
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      教科書の内容を自分の言葉で整理し、知識を体系化することが重要です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#558B2F", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      用語の暗記と理解の両立
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      単なる暗記ではなく、事象の背景にある理由や関連性を理解することが大切です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: "#558B2F", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#424242", mb: 0.5 }}>
                      実験・観察の復習（理科）
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      実験結果の理由を理解し、計算問題もしっかり練習しましょう。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* スケジュール管理 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            スケジュール管理の工夫
          </Typography>

          <List sx={{ bgcolor: "#FAFAFA", p: 2, borderRadius: 1 }}>
            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  1. 週間スケジュールを作成する
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  月単位の計画より、週単位でスケジュールを立てることが効果的です。毎週末に進捗を確認し、必要に応じて調整しましょう。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  2. 科目別の学習時間を決める
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  苦手科目に多くの時間を割き、得意科目は維持程度の時間で十分です。週の総学習時間を10～20時間確保することが目標です。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  3. 短期目標と長期目標を設定する
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  月ごとの目標（偏差値アップ、模試の点数目標など）と、3ヶ月ごとの長期目標を立てることで、学習のモチベーションが保ちやすくなります。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  4. 余裕を持たせる
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  計画が100%完璧である必要はありません。70～80%実現できれば上出来です。突発的な事態にも対応できるよう、柔軟性を持たせることが重要です。
                </Typography>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
              </ListItemIcon>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#FF6F00", mb: 1 }}>
                  5. 休息日を設ける
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
                  週に1日程度の完全休息日を設けることで、心身をリフレッシュできます。継続的な学習のためには、メリハリが大切です。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* モチベーション維持 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            モチベーション維持の工夫
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                短期目標の達成を祝う
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                1週間ごと、1ヶ月ごとに小さな目標を達成したら、自分へのご褒美を用意しましょう。達成感の積み重ねがモチベーション維持につながります。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                友人と情報交換
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                同じ受験生の友人と勉強方法や進捗状況を話し合うことで、新しい視点が得られ、モチベーションが上がります。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                親のサポートを活用
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                親に学習進捗を報告し、励ましてもらうことで精神的な支えになります。親子で受験について対話することが大切です。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                志望校を意識する
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                志望校の過去問や学校資料を定期的に見ることで、「この学校に行きたい」という動機づけが強化されます。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                模試結果の分析
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                模試の成績が上がった科目や単元を確認することで、学習の効果が実感でき、モチベーションが維持されます。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                適切な休息と気分転換
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                疲れた時は無理をせず、運動や趣味に時間を使うなど、心身をリセットすることが長期的なモチベーション維持につながります。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ランキングを確認する */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#E3F2FD", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
            実際に高校の偏差値を確認してみましょう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校偏差値を無料で検索できます。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#0D47A1",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1565C0", transform: "translateY(-1px)" },
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
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            関連記事
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }, gap: 2 }}>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  高校受験のスケジュール
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験本番に向けた計画立案と準備スケジュール
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
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  内申点を上げる方法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  内申点が重要な理由と効果的な対策
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
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#0D47A1" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}>
                  高校受験の面接対策
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  よくある質問と効果的な対策方法
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Box>

        {/* ナビゲーション */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 5 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              sx={{
                p: 2.5,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <ArrowBackIcon sx={{ fontSize: "1.2rem", color: "#0D47A1" }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1" }}>
                  コラム一覧に戻る
                </Typography>
              </Box>
            </Paper>
          </Link>

          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Paper
              sx={{
                p: 2.5,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1" }}>
                  高校偏差値ランキング
                </Typography>
              </Box>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
