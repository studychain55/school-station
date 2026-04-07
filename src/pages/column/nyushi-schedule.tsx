import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import EventIcon from "@mui/icons-material/Event";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function NyushiSchedulePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "受験スケジュール" },
  ];

  const faqItems = [
    {
      question: "中3の1学期は受験対策を始めるべきですか？",
      answer:
        "はい、中3の1学期から本格的な受験対策が必要です。この時期は基礎固めと学習習慣の定着が重要です。特に苦手科目を克服することが大切です。",
    },
    {
      question: "夏休みの勉強時間の目安はどのくらいですか？",
      answer:
        "一般的には、1日8～10時間程度の学習が推奨されます。ただし、集中力を保つために休憩を取ることが大切です。計画的に学習することが重要です。",
    },
    {
      question: "秋からの過去問対策はいつから始めるべきですか？",
      answer:
        "9月から過去問対策を始めるのが一般的です。志望校の傾向を理解し、苦手分野を見つけて克服する時間が必要です。遅くても10月までには始めましょう。",
    },
    {
      question: "冬休み中の勉強時間はどのくらい必要ですか？",
      answer:
        "冬休みは受験直前の追い込み時期です。1日10～12時間程度の学習が必要です。体調管理と睡眠は忘れずに、計画的に進めてください。",
    },
    {
      question: "学校行事と受験勉強のバランスはどう取るべきですか？",
      answer:
        "学校行事も中学生活の大切な思い出です。行事に参加しながらも、優先順位を決めて勉強時間を確保することが大切です。メリハリのある生活が効果的です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();
  const schedule = [
    {
      period: "4月～5月（1学期初期）",
      title: "基礎固め期間",
      tasks: [
        "- 1、2年生の復習（特に苦手科目）",
        "- 3年生の予習開始",
        "- 学習習慣の定着",
        "- 目標偏差値の設定",
      ],
      focus: "1、2年の内容完全理解が最優先",
    },
    {
      period: "6月～7月（1学期後期）",
      title: "学力診断テスト・夏休み準備",
      tasks: [
        "- 1学期の定期考査対策",
        "- 模擬試験受験（診断テスト）",
        "- 志望校の研究開始",
        "- 夏休み学習計画の立案",
      ],
      focus: "模試で自分の実力把握が大切",
    },
    {
      period: "7月～8月（夏休み）",
      title: "夏期講習・集中学習期間",
      tasks: [
        "- 1日8～10時間の学習",
        "- 苦手科目の集中克服",
        "- 塾の夏期講習参加",
        "- 志望校文化祭見学",
      ],
      focus: "受験の天王山。集中力を保つことが鍵",
    },
    {
      period: "9月（2学期初期）",
      title: "模試対策・過去問開始",
      tasks: [
        "- 夏休みの復習",
        "- 志望校の過去問研究開始",
        "- 定期考査対策（内申点確保）",
        "- 模擬試験（目標達成度確認）",
      ],
      focus: "過去問で志望校の傾向を掴む",
    },
    {
      period: "10月～11月（2学期後期）",
      title: "過去問演習・弱点補強",
      tasks: [
        "- 志望校の過去問5年分解答",
        "- 弱点分野の重点対策",
        "- 定期考査で内申点確保",
        "- 願書出願準備開始",
      ],
      focus: "志望校対策が本格化する時期",
    },
    {
      period: "12月～1月初旬（冬休み）",
      title: "入試直前対策・追い込み",
      tasks: [
        "- 1日10～12時間の学習",
        "- 過去問徹底復習",
        "- 苦手問題の総整理",
        "- 私立入試の対策",
      ],
      focus: "受験の最後の追い込み。体調管理が重要",
    },
    {
      period: "1月中旬～2月（私立入試）",
      title: "私立入試・本番",
      tasks: [
        "- 私立高校の入試本番",
        "- 公立入試に向けた最終チェック",
        "- 試験当日のシミュレーション",
        "- 精神的なサポート",
      ],
      focus: "実践経験を積む時期",
    },
    {
      period: "2月下旬～3月（公立入試）",
      title: "公立入試本番",
      tasks: [
        "- 公立高校の入試本番",
        "- 試験当日への心理的準備",
        "- 親子で支え合う",
        "- 志望校への推薦入試",
      ],
      focus: "最終目標への総仕上げ",
    },
  ];

  return (
    <>
      <SEO
        title="高校受験のスケジュール｜中3の年間スケジュール解説 | School Station"
        description="中3が知っておくべき高校受験の年間スケジュール。春の基礎固めから冬の追い込みまで、各時期の勉強法と重要ポイントをまとめました。"
        canonical="/column/nyushi-schedule/"
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
              headline: "高校受験のスケジュール｜中3の年間スケジュール解説",
              description: "中3が知っておくべき高校受験の年間スケジュール。春の基礎固めから冬の追い込みまでを解説。",
              datePublished: `${CURRENT_YEAR}-04-07`,
              author: {
                "@type": "Organization",
                name: "School Station",
              },
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
            高校受験のスケジュール
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            中3の年間スケジュール。春の基礎固めから冬の追い込みまで、受験を成功させるための時間配分と重要ポイント
          </Typography>
        </Box>

        {/* 概要 */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, bgcolor: "#F5F5F5", border: "1px solid #E0E0E0" }}>
          <Typography variant="h3" component="h2" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2, color: "#0D47A1" }}>
            受験スケジュール全体像
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
            高校受験は、中3の4月から始まる1年間のプロセスです。各時期に役割と目標があり、計画的に進めることが成功の鍵です。このガイドでは、月別の重要なタスクと勉強のコツをご紹介します。
          </Typography>
        </Paper>

        {/* スケジュール表 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            中3の年間スケジュール
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
            {schedule.map((item, idx) => (
              <Paper key={idx} sx={{ p: 3, border: "1px solid #E0E0E0", transition: "all 0.3s", "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" } }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <EventIcon sx={{ color: "#FF6F00", fontSize: "1.5rem" }} />
                  <Typography variant="caption" sx={{ color: "#FF6F00", fontWeight: 700, fontSize: "0.9rem" }}>
                    {item.period}
                  </Typography>
                </Box>

                <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#0D47A1" }}>
                  {item.title}
                </Typography>

                <Box sx={{ mb: 2.5 }}>
                  <Typography variant="caption" sx={{ display: "block", color: "#666", fontSize: "0.8rem", fontWeight: 600, mb: 1, textTransform: "uppercase" }}>
                    重要タスク
                  </Typography>
                  {item.tasks.map((task, tidx) => (
                    <Typography key={tidx} variant="body2" sx={{ color: "#424242", fontSize: "0.9rem", mb: 0.5 }}>
                      {task}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #E0E0E0" }}>
                  <Typography variant="caption" sx={{ display: "block", color: "#FF6F00", fontWeight: 700, fontSize: "0.85rem", mb: 0.5 }}>
                    ポイント
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", fontSize: "0.9rem" }}>
                    {item.focus}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* 時期別詳細ガイド */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            時期別の勉強の重点ポイント
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr" }, gap: 3 }}>
            <Paper sx={{ p: 3, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#E65100" }}>
                春（4月～5月）：基礎学力の確認と補強
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                中1、中2の重要な単元を復習します。特に数学、英語など積み上げが必要な科目の弱点を把握して補強することが大切です。この時期の学習が後の成績を大きく左右します。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F3E5F5", border: "1px solid #E1BEE7" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#7B1FA2" }}>
                夏（7月～8月）：集中学習と弱点克服
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                受験の天王山です。長期休暇を最大限に活用して、1、2年の復習を完了させ、3年の内容の先取り学習を行います。苦手な教科や単元に集中して取り組む時期です。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#E3F2FD", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#1565C0" }}>
                秋（9月～11月）：志望校対策と実践問題
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                志望校の過去問に取り組み始める時期です。入試の傾向を理解し、自分の弱点を明確にして対策します。定期考査で内申点を確保することも重要です。
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: "#F1F8E9", border: "1px solid #DCEDC8" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#558B2F" }}>
                冬（12月～1月）：最終チェックと入試本番
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8 }}>
                本番を意識した学習に切り替えます。夏までに習った内容の総復習と、過去問の徹底攻略に注力します。体調管理と精神的な安定も重要です。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* モチベーション維持 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            受験勉強を成功させるコツ
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr" }, gap: 2 }}>
            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                1. 月単位と週単位の目標を設定
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                大きな目標を細分化して、実現可能な小目標を立てます。達成感を積み重ねることでモチベーションが保たれます。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                2. 定期考査と入試対策の両立
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                定期考査での高い点数は内申点に直結します。受験対策と並行して、学校の授業と定期考査対策を大切にしましょう。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                3. 苦手科目の早期対策
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                苦手な教科ほど、早期から計画的に対策することが大切です。春や夏に集中的に取り組むと、秋以降に成果が出やすいです。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                4. 親のサポートとコミュニケーション
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                親子で受験について話し合い、サポート体制を整えることが重要です。精神的な支えが、受験を乗り越える力になります。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                5. 体調管理と生活習慣
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                十分な睡眠、バランスの取れた食事、軽い運動は受験勉強のパフォーマンスを大きく左右します。体が資本です。
              </Typography>
            </Paper>

            <Paper sx={{ p: 2.5, border: "1px solid #E0E0E0" }}>
              <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, color: "#0D47A1" }}>
                6. 模擬試験の活用
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                定期的に模擬試験を受けて、実力を把握し、苦手分野を見つけることが大切です。本番対策のためのシミュレーションにもなります。
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* 関連記事 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 700, mb: 3, color: "#0D47A1" }}>
            関連記事
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
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
                  内申点が重要な理由と効果的な対策
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
                <ArrowBackIcon sx={{ fontSize: "1.2rem", color: "#FF6F00" }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#FF6F00" }}>
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
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#FF6F00" }}>
                  高校偏差値ランキング
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: "1.2rem", color: "#FF6F00" }} />
              </Box>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}
