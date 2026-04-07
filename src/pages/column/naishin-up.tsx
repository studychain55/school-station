import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function NaishinUpPage() {
  const CURRENT_YEAR = new Date().getFullYear();
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "内申点の上げ方" },
  ];

  const faqItems = [
    {
      question: "内申点とは何ですか？",
      answer:
        "内申点は、中学3年間の成績をまとめたもので、高校受験に大きく影響します。通常、5段階評価の9教科の成績が記録され、高校によって内申点の計算方法が異なります。",
    },
    {
      question: "内申点を上げるために最も重要なことは何ですか？",
      answer:
        "定期テストの成績を上げることが最も重要です。内申点の約60～70%は定期テストの成績で決まります。その次に、提出物・授業態度・出席率が重要になります。",
    },
    {
      question: "定期テストの点数を上げるためには、どうすればよいですか？",
      answer:
        "計画的な勉強が不可欠です。テスト2～3週間前から準備を始め、教科書やワークを繰り返し学習することが効果的です。わからない部分は早めに先生に質問することもおすすめします。",
    },
    {
      question: "提出物を忘れた場合、内申点に影響しますか？",
      answer:
        "はい、大きく影響します。提出物の未提出は、かなり内申点が下がる傾向にあります。チェックリストを作成して、提出期限を管理することが重要です。",
    },
    {
      question: "授業態度が内申点に与える影響はどのくらいですか？",
      answer:
        "授業態度は内申点の20～30%程度に影響します。積極的な発言、ノートの丁寧な記入、集中力のある姿勢などが評価されます。毎日の授業に真摯に取り組むことが大切です。",
    },
    {
      question: "評価が低い教科を集中的に上げることはできますか？",
      answer:
        "はい、可能です。特に苦手教科は、先生に相談して克服方法を聞くことが効果的です。放課後補習や追加学習を活用することで、短期間での改善が期待できます。",
    },
    {
      question: "1年生の内申点と3年生の内申点、どちらが重要ですか？",
      answer:
        "高校によって異なりますが、一般的に3年生の内申点がより重視される傾向があります。しかし、1・2年生の内申点も合計で計算されるため、全学年で高い成績を維持することが重要です。",
    },
    {
      question: "内申点が低くても、受験当日の試験で合格できますか？",
      answer:
        "学校によって、内申点と試験成績の配点が異なります。一部の高校では試験成績の配点が高いため、内申点が低くても合格の可能性があります。ただし、内申点が高い方が有利なことは確実です。",
    },
  ];

  const actions = [
    {
      icon: "📚",
      title: "定期テスト対策",
      items: [
        "テスト2～3週間前から準備を始める",
        "教科書とワークを3回以上繰り返す",
        "わからない部分は先生に質問する",
        "過去問や試験範囲を徹底的に学習",
        "試験直前は復習に集中",
      ],
    },
    {
      icon: "✏️",
      title: "授業態度の改善",
      items: [
        "毎日、授業に真摯に取り組む",
        "ノートを丁寧に、きれいに記入",
        "理解できない部分はすぐに手を上げる",
        "発言・発表に積極的に参加",
        "宿題は確実に提出する",
      ],
    },
    {
      icon: "📋",
      title: "提出物対策",
      items: [
        "提出期限をカレンダーに記入",
        "提出物チェックリストを作成",
        "完成度の高い提出物を心がける",
        "期限直前ではなく、余裕を持って完成",
        "提出物の返却時に修正点を確認",
      ],
    },
    {
      icon: "⏰",
      title: "出席・遅刻対策",
      items: [
        "毎日、時間に余裕を持って登校",
        "欠席・遅刻をなるべく避ける",
        "やむを得ない欠席の場合は事前に報告",
        "授業数が不足しないよう注意",
        "健康管理を意識的に行う",
      ],
    },
  ];

  const timelineData = [
    {
      grade: "1年生",
      time: "基礎固めの時期",
      actions: [
        "定期テストで8割以上を目指す",
        "授業態度・出席率を意識する",
        "基礎学力をしっかり身につける",
      ],
    },
    {
      grade: "2年生",
      time: "学力向上の時期",
      actions: [
        "全教科で5段階評価を維持・向上",
        "提出物の質を上げる",
        "苦手教科の克服に力を入れる",
      ],
    },
    {
      grade: "3年生前半",
      time: "最終調整の時期",
      actions: [
        "定期テストで更なる高得点を目指す",
        "受験に向けた学習も本格化",
        "内申点を最大限に高める",
      ],
    },
    {
      grade: "3年生後半",
      time: "受験対策集中期",
      actions: [
        "内申点確定後、受験対策に集中",
        "志望校の傾向・対策に注力",
        "試験本番に向けた最終調整",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="内申点の上げ方｜中学生が今すぐできる具体的な方法 | School Station"
        description="内申点を上げるための具体的な方法を解説。定期テスト対策、授業態度、提出物管理など、すぐに実践できる5つのポイントをご紹介します。"
        canonical="/column/naishin-up/"
        breadcrumbs={breadcrumbs}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "内申点の上げ方｜中学生が今すぐできる具体的な方法",
            "description": "内申点を上げるための具体的な方法を解説。定期テスト対策、授業態度、提出物管理など、すぐに実践できる5つのポイントをご紹介します。",
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
            mb: 5,
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            内申点の上げ方｜中学生が今すぐできる具体的な方法
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            定期テスト・授業態度・提出物で、内申点を確実に上げるための方法を徹底解説します
          </Typography>
        </Box>

        {/* Introduction */}
        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3.5 }, mb: 4, bgcolor: "#f5f5f5", borderLeft: "4px solid #FF6F00" }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#424242" }}>
            高校受験において、内申点は非常に重要な役割を果たします。多くの高校では、内申点と当日の試験成績の両方で合否が決まり、内申点の比重は学校によって30%～60%程度になります。このガイドでは、内申点を上げるための具体的で実践的な方法を解説します。
          </Typography>
        </Paper>

        {/* 内申点とは */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            内申点とは
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "#424242" }}>
            内申点は、中学1～3年生の3年間の成績をまとめたものです。通常、5段階評価（1～5）の9教科（国語、数学、英語、理科、社会、音楽、美術、体育、技術家庭）の成績が記録されます。
          </Typography>
          <Box sx={{ bgcolor: "#E3F2FD", p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2 }}>
              内申点の計算方法
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              多くの高校では、全教科の成績を合計して、内申点を計算します。例えば、全教科で5が取れれば、9教科×3年間×5＝135点となります。ただし、計算方法は高校によって異なる場合があります（3年生の成績のみを対象にする高校もあります）。
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "#424242" }}>
            <strong>重要：</strong>内申点は高校選択の重要な要素となるため、早い段階から意識的に対策を講じることが大切です。
          </Typography>
        </Box>

        {/* 内申点に影響する要素 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            内申点に影響する5つの要素
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {[
              { title: "定期テスト（60%）", desc: "最も重要な要素。テストの成績が内申点を左右する最大の要因" },
              { title: "提出物（15%）", desc: "ワークシート・レポート・作品など。未提出は大きなマイナス" },
              { title: "授業態度（15%）", desc: "集中力・発言回数・ノートの状態。毎日の姿勢が評価される" },
              { title: "出席率（10%）", desc: "欠席・遅刻を最小化することが重要。健康管理が大切" },
            ].map((item, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2.5, border: "1px solid #E0E0E0", bgcolor: "#fff" }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <TrendingUpIcon sx={{ color: "#FF6F00", fontSize: "2rem", flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* 具体的な対策方法 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            内申点を上げるための4つの具体的な対策
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {actions.map((action, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 3, border: "1px solid #E0E0E0", bgcolor: "#fff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Typography sx={{ fontSize: "2rem" }}>{action.icon}</Typography>
                  <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {action.title}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {action.items.map((item, itemIdx) => (
                    <Typography key={itemIdx} component="li" variant="body2" sx={{ mb: 1, color: "#424242" }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* 学年別対策 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            学年別の内申点対策ロードマップ
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {timelineData.map((item, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2.5, border: "2px solid #1976D2", bgcolor: "#E3F2FD" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <CheckCircleIcon sx={{ color: "#1976D2", fontSize: "1.8rem" }} />
                  <Box>
                    <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700 }}>
                      {item.grade}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {item.actions.map((action, actionIdx) => (
                    <Typography key={actionIdx} component="li" variant="body2" sx={{ mb: 1, color: "#424242" }}>
                      {action}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* よくある質問 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 重要なポイント */}
        <Box sx={{ bgcolor: "#FFF3E0", p: 3, borderLeft: "4px solid #FF6F00", mb: 5, borderRadius: 1 }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2 }}>
            内申点を上げるための最重要ポイント
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>定期テストが最優先：</strong> 内申点の60%以上は定期テストで決まります。テスト対策を最優先にしましょう。
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>毎日の授業を大切に：</strong> 授業態度と提出物で30%の配点があります。毎日の小さな努力が大きな差になります。
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>早めの対策が重要：</strong> 1年生から内申点を意識することで、より高い成績を維持できます。
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: "#424242" }}>
              <strong>先生との相談：</strong> わからないことや評価について不安な場合は、遠慮なく先生に相談しましょう。
            </Typography>
          </Box>
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
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
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
                  受験スケジュール・日程を完全ガイド
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験本番に向けた計画立案と準備スケジュール
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
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#FF6F00" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#FF6F00", mb: 1 }}>
                  偏差値の見方・使い方を徹底解説
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値とは何か、受験戦略にどう活かすか
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
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
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  偏差値と総合的な判断で最適な学校を選ぶ
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            志望校選びのために、偏差値も確認しましょう
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            内申点を上げた後は、志望校の偏差値や合格に必要な学力をチェック。あなたに最適な学校を見つけましょう。
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
              高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
