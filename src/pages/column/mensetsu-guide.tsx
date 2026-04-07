import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";

export default function MensetsGuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校受験の面接対策" },
  ];

  const faqItems = [
    {
      question: "高校受験の面接は、どのくらい合否に影響しますか？",
      answer:
        "学校によって異なりますが、一般的に合否の20～30%程度に影響します。特に、内申点と試験成績が同じ受験生が多い場合は、面接で合否が決まることもあります。決して軽視できない重要な試験です。",
    },
    {
      question: "面接では何を見られていますか？",
      answer:
        "学力知識だけでなく、コミュニケーション能力・志望動機の強さ・人間性・礼儀・態度などを総合的に評価されます。また、回答内容の正確性や説得力も重要な評価基準となります。",
    },
    {
      question: "面接で落ちることはあります？",
      answer:
        "はい、あります。ただし、内申点と試験成績が合格圏内であれば、よほどの理由がない限り不合格になることは少ないです。面接で失言や礼儀違反をしないことが大切です。",
    },
    {
      question: "面接では、どのような質問がよく出ますか？",
      answer:
        "志望動機・中学生活の思い出・得意科目・趣味・部活動の経験・高校卒業後の進路・高校で頑張りたいことなどが多く聞かれます。これらの質問に対し、事前に準備して臨むことが重要です。",
    },
    {
      question: "面接対策は、どのくらい前から始めるべきですか？",
      answer:
        "最低でも2～3ヶ月前から準備を始めることをお勧めします。定期テストが終わった後から本格的に対策を進め、入試の1ヶ月前には完璧に仕上げておくとよいでしょう。",
    },
    {
      question: "面接で絶対にしてはいけないことは？",
      answer:
        "以下は特に注意が必要です：面接官の質問を途中で遮断する、誠実でない回答をする、失言・不適切な発言、遅刻・早退、礼儀違反（挨拶・お礼を言わない）など。これらは合否に大きく影響します。",
    },
    {
      question: "面接で緊張してしまった場合、どうすればよいですか？",
      answer:
        "深呼吸をして心を落ち着かせ、面接官の目を見てゆっくり話すことが大切です。多少の緊張は面接官も理解しているため、無理に完璧を目指さず、誠実な態度で臨むことが重要です。",
    },
    {
      question: "面接で沈黙が続いた場合、どうすればよいですか？",
      answer:
        "焦らず、面接官が次の質問をするのを待ちましょう。沈黙の時間が長い場合は、「申し訳ありませんが、もう一度質問をお願いできますか」と丁寧に言うことが良いでしょう。",
    },
  ];

  const commonQuestions = [
    {
      question: "志望動機",
      answers: [
        "「貴校は〇〇の特徴があり、私の◆◆という目標に合致している。」",
        "具体的な校風・カリキュラム・施設などを挙げる",
        "学校のホームページや説明会で得た情報を活用",
      ],
    },
    {
      question: "中学生活の思い出・頑張ったことは？",
      answers: [
        "具体的なエピソードを挙げる（部活動・学園祭など）",
        "その経験から何を学んだのかを説明",
        "その学びが高校でどう生かされるかを述べる",
      ],
    },
    {
      question: "得意科目・不得意科目は何ですか？",
      answers: [
        "得意科目の場合：具体的にどのようなことが得意か説明",
        "不得意科目の場合：克服のために努力していることを述べる",
        "前向きな姿勢を心がけ、投げやりな返答は避ける",
      ],
    },
    {
      question: "高校で頑張りたいことは？",
      answers: [
        "学習・部活動・学校行事など、具体的な目標を述べる",
        "その目標がなぜ重要かを説明",
        "高校卒業後の進路とのつながりを述べると、さらに説得力が増す",
      ],
    },
    {
      question: "高校卒業後の進路は？",
      answers: [
        "大学進学・専門学校・就職など、現時点での目標を述べる",
        "なぜその進路を選択したのか、理由を述べる",
        "進路が定まっていない場合は「今後、高校で探したい」と前向きに答える",
      ],
    },
    {
      question: "趣味や特技は何ですか？",
      answers: [
        "本当の趣味や特技を述べる（嘘は避ける）",
        "その趣味から学んだことや工夫した点を説明",
        "趣味が高校生活とどう関わるかを述べると、人間性がより伝わる",
      ],
    },
  ];

  const beforeInterview = [
    {
      icon: "📋",
      title: "面接の基本情報を確認",
      items: [
        "面接日時・場所を確認",
        "面接時間・面接官の人数を確認",
        "必要な書類を用意（受験票など）",
        "服装や持ち物を確認",
      ],
    },
    {
      icon: "🎯",
      title: "志望動機を明確にする",
      items: [
        "志望理由を具体的に考える",
        "学校のホームページで情報収集",
        "説明会や文化祭で学校の特徴を確認",
        "他校との違いを理解",
      ],
    },
    {
      icon: "📝",
      title: "よくある質問への回答を準備",
      items: [
        "志望動機・中学生活など重要項目の回答を準備",
        "回答を紙に書いて、何度も読み直す",
        "声に出して練習（発音や流暢さを確認）",
        "家族や先生に聞いてもらう",
      ],
    },
    {
      icon: "🏫",
      title: "学校の先生とも練習",
      items: [
        "進路指導の先生に依頼して、模擬面接を実施",
        "複数回の練習で本番に向けて準備",
        "先生からのアドバイスを参考に改善",
        "本番さながらの雰囲気を実感",
      ],
    },
  ];

  const duringInterview = [
    { good: "ノックをして「失礼します」と言って入室", bad: "ドアをそっと開けて無言で入室" },
    { good: "椅子を勧められるまで座らない", bad: "勝手に座る" },
    { good: "面接官の目を見てゆっくり話す", bad: "下を向いたり、早口で話す" },
    { good: "質問を最後まで聞いてから答える", bad: "質問が終わる前に答え始める" },
    { good: "正直で前向きな回答をする", bad: "誠実でない回答や投げやりな態度" },
    { good: "わからない場合は正直に「考えさせてください」と言う", bad: "適当な回答をしてごまかす" },
    { good: "面接後、「ありがとうございました」と言って一礼して退室", bad: "黙ったまま帰る" },
  ];

  const dosAndDonts = [
    {
      title: "DO：やるべきこと",
      items: [
        "毎日、鏡の前で練習して、表情・身振りを確認",
        "志望動機を何度も繰り返し練習",
        "新聞やニュースで時事問題をチェック",
        "面接に関連する本を読んで知識を増やす",
        "健康管理に気をつけて、本番に向けて体調を整える",
      ],
    },
    {
      title: "DON'T：避けるべきこと",
      items: [
        "面接対策を後回しにしない（2～3ヶ月前から準備）",
        "学校のホームページを見ずに面接に臨まない",
        "本番で初めて見るような、予想外の質問に焦らない",
        "面接官を不安にさせるような発言をしない",
        "体調不良のまま面接に臨まない（必要に応じて先延ばしを相談）",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="高校受験の面接対策｜よく出る質問と答え方を解説 | School Station"
        description="高校受験の面接対策を徹底解説。よく出る質問・回答例・本番での注意点など、合格につながる面接対策をすべてご紹介します。"
        canonical="/column/mensetsu-guide/"
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
            高校受験の面接対策｜よく出る質問と答え方を解説
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            面接で高評価を得るための準備・よくある質問・本番での注意点をすべて解説します
          </Typography>
        </Box>

        {/* Introduction */}
        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3.5 }, mb: 4, bgcolor: "#f5f5f5", borderLeft: "4px solid #FF6F00" }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#424242" }}>
            高校受験において、面接試験は内申点と学力試験に次ぐ重要な評価要素です。多くの高校では面接の配点が20～30%あり、特に内申点と試験成績が同じ受験生の合否を分ける重要な試験になります。このガイドでは、高校受験の面接で合格を勝ち取るための対策方法を詳しく解説します。
          </Typography>
        </Paper>

        {/* 面接の基本情報 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            高校受験の面接について
          </Typography>
          <Box sx={{ bgcolor: "#E3F2FD", p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              <strong>面接の目的：</strong>学力以外の部分、つまりコミュニケーション能力・志望動機の強さ・人間性・礼儀・態度などを総合的に評価することです。
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              <strong>面接時間：</strong>一般的に1人あたり5～10分程度の個人面接が行われます。学校によっては、グループ面接が行われることもあります。
            </Typography>
          </Box>
        </Box>

        {/* よく出る質問と回答例 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            よく出る質問と回答のポイント
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr" }, gap: 3 }}>
            {commonQuestions.map((item, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2.5, border: "1px solid #E0E0E0", bgcolor: "#fff" }}>
                <Typography variant="h4" component="h4" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: "#1976D2" }}>
                  {idx + 1}. {item.question}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {item.answers.map((answer, answerIdx) => (
                    <Typography key={answerIdx} component="li" variant="body2" sx={{ mb: 1, color: "#424242", lineHeight: 1.6 }}>
                      {answer}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* 面接前の準備 */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            面接前の準備（2～3ヶ月前から実施）
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {beforeInterview.map((item, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2.5, border: "1px solid #E0E0E0", bgcolor: "#fff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Typography sx={{ fontSize: "1.8rem" }}>{item.icon}</Typography>
                  <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {item.items.map((subItem, subIdx) => (
                    <Typography key={subIdx} component="li" variant="body2" sx={{ mb: 1, color: "#424242" }}>
                      {subItem}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* 面接当日のチェックリスト */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            面接当日のDO & DON'T
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3, mb: 4 }}>
            {dosAndDonts.map((section, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2.5, border: `1px solid ${idx === 0 ? "#4CAF50" : "#f44336"}`, bgcolor: idx === 0 ? "#E8F5E9" : "#FFEBEE" }}>
                <Typography variant="h4" component="h4" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 2, color: idx === 0 ? "#2E7D32" : "#C62828" }}>
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {section.items.map((item, itemIdx) => (
                    <Typography key={itemIdx} component="li" variant="body2" sx={{ mb: 1, color: "#424242" }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>

          {/* 面接官の視点：DO & DON'T */}
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 3 }}>
            面接時の具体的な行動：OKとNGの例
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #E0E0E0" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#E3F2FD" }}>
                  <TableCell sx={{ fontWeight: 700, color: "#0D47A1" }}>OK - これはやる</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#C62828" }}>NG - これはしない</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {duringInterview.map((item, idx) => (
                  <TableRow key={idx} sx={{ "&:nth-of-type(even)": { bgcolor: "#f5f5f5" } }}>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                        <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: "1.2rem", flexShrink: 0, mt: 0.3 }} />
                        <Typography variant="body2">{item.good}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                        <ClearIcon sx={{ color: "#f44336", fontSize: "1.2rem", flexShrink: 0, mt: 0.3 }} />
                        <Typography variant="body2">{item.bad}</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* 面接で注意すべき5つのポイント */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 3, pb: 2, borderBottom: "3px solid #1976D2" }}>
            面接で注意すべき5つのポイント
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 2 }}>
            {[
              { num: "1", title: "髪型・服装", desc: "清潔感のある服装・髪型を心がける。制服が指定されている場合は必ず着用" },
              { num: "2", title: "挨拶と礼儀", desc: "「おはよう」「ありがとう」などの基本的な挨拶と、適切な一礼が重要" },
              { num: "3", title: "声の大きさ", desc: "聞き取りやすい音量で、ゆっくり話すことを心がける。早口は避ける" },
              { num: "4", title: "目線・姿勢", desc: "面接官の目を見て、背筋を伸ばして座る。猫背や足をぶらぶらさせない" },
              { num: "5", title: "誠実さ", desc: "嘘をつかず、自分の気持ちや考えを正直に述べることが最も重要" },
            ].map((item, idx) => (
              <Paper key={idx} elevation={0} sx={{ p: 2, border: "1px solid #E0E0E0", bgcolor: "#fff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <Box sx={{ width: 32, height: 32, bgcolor: "#1976D2", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                    {item.num}
                  </Box>
                  <Typography variant="h4" component="h4" sx={{ fontSize: "1rem", fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  {item.desc}
                </Typography>
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

        {/* 最後のアドバイス */}
        <Box sx={{ bgcolor: "#FFF3E0", p: 3, borderLeft: "4px solid #FF6F00", mb: 5, borderRadius: 1 }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 2 }}>
            面接試験での最重要ポイント
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>準備が成功の鍵：</strong> 2～3ヶ月前から計画的に準備すれば、本番で焦ることなく自信を持って臨めます。
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>誠実さが最も評価される：</strong> 完璧な回答よりも、自分の気持ちを正直に伝えることが重要です。
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1.5, color: "#424242" }}>
              <strong>学校の先生に頼ろう：</strong> 模擬面接を通じて、プロ（先生）からのアドバイスを受けることが上達の近道です。
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: "#424242" }}>
              <strong>健康管理が大切：</strong> 本番当日に万全の状態で臨むため、充分な睡眠と栄養摂取を心がけましょう。
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            面接対策と並行して、志望校の偏差値も確認
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            面接対策と同時に、志望校の偏差値や合格に必要な学力を確認しましょう。総合的な受験対策が成功につながります。
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
