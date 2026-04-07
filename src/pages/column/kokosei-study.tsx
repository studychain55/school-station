import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function KokoseiStudyPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校生の効率的な勉強法" },
  ];

  const faqItems = [
    {
      question: "高校生は1日何時間勉強すべきですか？",
      answer: "目安は1日3～4時間が標準ですが、学年や目標によって異なります。1年生は基礎固めで2～3時間、2年生は3～4時間、3年生は受験モードで4～6時間程度が目安です。ただし、質の高い学習が量より重要です。",
    },
    {
      question: "定期テスト1週間前の勉強スケジュールは？",
      answer: "テスト1週間前から、毎日3～4時間を確保することをお勧めします。最初の3日間は全教科を広く復習し、最後の4日間は苦手教科に集中。前日は復習に徹し、新しい内容は避けましょう。十分な睡眠を取ることも同じくらい大切です。",
    },
    {
      question: "数学が苦手ですが、効率的な勉強法は？",
      answer: "数学は反復練習が最重要。教科書の基本問題→練習問題→過去問という段階的な学習がおすすめです。間違えた問題は3回目の正解を目指し、解法パターンを頭に叩き込むことが鍵。わからない時は、すぐに先生に質問することも大切です。",
    },
    {
      question: "英語の長文読解が苦手なのですが...？",
      answer: "長文は音読が効果的です。毎日15～20分、テキストを音読することで、リズムと発音が定着します。同時に、単語帳で語彙を増やし、文法を確認することが重要。焦らず、同じテキストを何度も読むことで、読解速度が自然と上がります。",
    },
    {
      question: "スマートフォンを触らずに勉強に集中できません...",
      answer: "スマートフォンは別の部屋に置くか、電源を切ることが最も効果的です。SNSやゲームは『脳の報酬系』を刺激するため、非常に中毒性が高い。『勉強1時間後に15分のご褒美タイム』というルールを作り、メリハリをつけることで、集中力を高められます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校生の効率的な勉強法｜定期テスト・大学受験対策 | School Station"
        description="高校生向けの効率的な勉強法を詳しく解説。勉強時間の目安、定期テスト対策、科目別の学習方法、大学受験ロードマップ、スマートフォン対策など、合格に必要なすべてをご紹介します。"
        canonical="/column/kokosei-study/"
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
            "headline": "高校生の効率的な勉強法｜定期テスト・大学受験対策",
            "description": "高校生向けの効率的な勉強法、定期テスト対策、科目別学習方法、大学受験ロードマップを詳しく解説。",
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
            background: "linear-gradient(135deg, #7B1FA2 0%, #9C27B0 50%, #BA68C8 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校生の効率的な勉強法
          </Typography>
          <Typography variant="body2" sx={{ color: "#E1BEE7", maxWidth: 600, mx: "auto" }}>
            定期テスト・大学受験に向けた、科目別の学習方法と時間管理のコツを徹底解説

          </Typography>
        </Box>

        <Section title="高校生の勉強時間と計画の立て方" id="study-time-planning">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の勉強は、中学とは異なり、自由度が高く責任も大きくなります。効率的に学習を進めるには、まず「どのくらい勉強すべきか」を理解し、現実的な学習計画を立てることが大切です。
          </Typography>

          <SubSection title="学年別の推奨勉強時間">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>1年生</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>推奨時間：</strong> 1日2～3時間<br/>
                      <strong>目的：</strong> 高校の基礎学力の定着と勉強習慣の形成。定期テスト対策に重点を置く時期です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>2年生</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>推奨時間：</strong> 1日3～4時間<br/>
                      <strong>目的：</strong> 学習内容の深掘りと応用力の育成。受験に向けた基礎固めを本格化させる時期です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>3年生（受験学年）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>推奨時間：</strong> 1日4～6時間（受験直前は7時間以上も）<br/>
                      <strong>目的：</strong> 受験対策に全力を注ぎ、合格を目指す時期。夏休みは1日8～10時間の学習も視野に入れます。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="現実的な月間学習計画の立て方（テンプレート）">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>ステップ1：目標を決める</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    月の目標を具体的に設定します。例：「数学の青チャートを終わらせる」「英単語を500個覚える」など、測定可能な目標が効果的です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>ステップ2：週単位に分割</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    月の目標を4週に分割します。例：「週1：青チャート第1章」「週2：第2章」という具合に、段階的に進める計画が重要です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>ステップ3：曜日ごとの割当を決める</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    月曜は英語、火曜は数学、水曜は国語、といった曜日ローテーションを決めると、計画が立やすくなります。ただし、定期テスト前は柔軟に変更します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>ステップ4：振り返りと調整</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    月末に目標達成度を確認し、翌月の計画に反映させます。達成できなかった部分は、何が障壁だったのかを分析することが重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="定期テスト対策｜直前1週間の効率的な学習" id="exam-preparation">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            定期テストは、高い成績を取るための重要な機会です。特に、テスト直前1週間の過ごし方が、成績を大きく左右します。
          </Typography>

          <SubSection title="テスト1週間前のスケジュール例">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#0D47A1" }}>テスト8日前～5日前：全教科の範囲確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    各教科の試験範囲をノートにまとめ、全体像を把握する時期。「この範囲では何が重要か」を意識しながら、教科書を一通り読む。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#0D47A1" }}>テスト4日前～2日前：過去問・練習問題に挑戦</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    教科書の理解が進んだら、過去のテスト問題や教科書の練習問題に取り組む。「実際のテストではどのように出題されるか」を体験することが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#0D47A1" }}>テスト前日：復習に徹する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    新しい内容は避け、できなかった問題をもう一度解く。自分がミスしやすいパターンを復習することが効果的です。夜は十分に睡眠を取ることが、翌日の成績に大きく影響します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#0D47A1" }}>テスト当日：冷静さを保つ</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    朝は十分な睡眠後に起床し、栄養のある朝食を摂る。焦らず、落ち着いて試験に臨むことが、実力を発揮するコツです。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="定期テスト対策の5つの鉄則">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>1. 授業ノートを最大限活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    教科書よりも、授業で先生が強調した内容がテストに出やすい。ノートを何度も読み直し、重要ポイントを頭に叩き込む。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>2. 解く時間を決めて練習問題に取り組む</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    本番と同じ時間制限で問題を解く。これにより、時間管理のスキルと、実際の問題への対応力が身につきます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>3. 間違えた問題は3回解く</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一度間違えた問題は、その場ですぐに解答を確認し、翌日、そしてテスト前日にもう一度解く。3回正解することで、確実に知識が定着します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>4. 質問を積極的にする</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    わからない部分は、テスト前日までに先生に質問して解決する。先生の説明を聞くことで、出題の意図も理解できることが多いです。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>5. 十分な睡眠を優先</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    テスト直前の「一夜漬け」は避ける。脳の働きが低下し、本番での記憶定着が悪くなります。毎日7～8時間の睡眠が、最高の学習成果をもたらします。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="科目別の効率的な勉強方法" id="subject-specific-methods">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            各教科の特性に応じた学習法を用いることで、同じ時間でも学習効果が大きく変わります。
          </Typography>

          <SubSection title="数学｜解く量より質が勝負">
            <Box sx={{ bgcolor: "#FCE4EC", p: 2.5, borderRadius: 1, border: "1px solid #F8BBD0", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>基本公式の理解</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      公式を「暗記」するのではなく、「なぜこの公式が成り立つのか」を理解することが大切。導出過程を理解することで、応用問題にも対応できるようになります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>段階的な問題演習</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      教科書の基本例題 → 練習問題 → 応用問題 → 入試問題、という順番で難度を上げていく。焦らず、段階を踏むことが成功の秘訣です。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>間違いノートの作成</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      間違えた問題は「なぜ間違えたのか」を分析して、ノートに記録。定期的に見返すことで、自分の弱点が明確になり、対策が立てやすくなります。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="英語｜4技能のバランスが重要">
            <Box sx={{ bgcolor: "#E0F2F1", p: 2.5, borderRadius: 1, border: "1px solid #B2DFDB", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>単語と文法の同時学習</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      単語帳で語彙を増やしつつ、文法参考書で表現の仕組みを理解する。どちらか一方では、読解力や作文力が伸びません。毎日15分の単語学習が習慣化すると、3ヶ月で大きく成長します。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>音読による定着</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      教科書やテキストを毎日音読（15～20分程度）することで、リズムと発音が身につき、読解速度が自然と上がります。リスニング対策にもなります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>長文読解の練習</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      週に3～4本の長文を時間制限付きで読む。回数を重ねるごとに、単語の推測力と文脈理解が進みます。得点が安定してきたら、過去問にシフト。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="国語｜読解力と表現力の育成">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>古文・漢文の基礎固め</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      古文の助動詞、漢文の句法など、基本事項の暗記が読解の土台。毎週1～2時間、文法事項を体系的に学ぶ。基礎がしっかりするまで、長編は避ける。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>現代文は傍線部の読み取り</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      傍線部が「なぜそこに引かれているのか」を考える癖をつける。著者の主張や段落の役割を意識しながら読むことで、問題への対応力が高まります。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>作文対策は定期的に</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      月に2～3回、実際に作文や小論文を書き、先生に添削をしてもらう。「何度も書く」ことが、論理的で説得力のある文章を作る近道です。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="大学受験を意識した学習ロードマップ" id="university-roadmap">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入学時から受験を見据えた計画的な学習を進めることで、3年生での受験勉強の負担が大きく軽くなります。
          </Typography>

          <SubSection title="1年生：基礎の定着と習慣形成">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>重点目標：</strong> 高校の学習内容に適応し、勉強習慣を確立する時期。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 定期テストで平均80点以上を目指す
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 英単語を1,000語習得
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 数学の基本問題を確実に解けるようにする
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 毎日2～3時間の勉強習慣をつける
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="2年生：応用力の養成と進路決定">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>重点目標：</strong> 難度が上がった学習内容に対応し、応用問題に挑戦し始める時期。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 英単語を2,500語習得
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 数学Ⅱ・数学Bの典型問題を解けるようにする
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 定期テストで90点以上を安定して取る
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 志望大学を決め、入試科目の確認をしておく
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="3年生：受験対策に集中">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>重点目標：</strong> 受験に全力を注ぎ、志望大学の入試レベルの問題を解けるようにする時期。
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 英単語4,000語以上を習得（春～初夏）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 過去問で志望大学の出題パターンを把握（夏）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - 弱点教科を集中的に対策（秋）
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    - センター試験・入試本番に向けた最終調整（冬）
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="スマートフォンとの付き合い方・集中力の維持" id="smartphone-concentration">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校生にとって、スマートフォンは最大の敵です。集中力を保つための工夫が、学習成果を大きく左右します。
          </Typography>

          <SubSection title="スマートフォンが勉強の邪魔をする理由">
            <Box sx={{ bgcolor: "#FFEBEE", p: 2.5, borderRadius: 1, border: "1px solid #FFCDD2", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#C62828" }}>通知による割り込み</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      SNSの通知や友人からのメッセージが、学習の邪魔をします。一度気になると、復帰に15～20分かかるとも言われています。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#C62828" }}>依存性</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      SNSやゲームは「報酬系」を刺激するため、脳が快感を求め続けます。結果として、やめられなくなり、勉強時間が蝕まれます。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#C62828" }}>睡眠の質の低下</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      寝る直前のスマートフォン使用は、ブルーライトにより睡眠の質を低下させます。睡眠は学習効果を大きく左右するため、深刻な悪影響をもたらします。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="集中力を維持するための5つの実践的な対策">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>スマートフォンを別の部屋に置く</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    最も効果的な対策。勉強部屋にスマートフォンを持ち込まないことで、視界から消え、誘惑が軽くなります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>アプリを削除する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    SNSやゲームアプリを勉強期間だけ削除する。再インストールする手間が、抑止力になります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>ご褒美タイムのルール化</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    「勉強1時間ごとに15分のご褒美タイム」というルールを作る。目標を持つことで、集中力が高まります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>勉強仲間を作る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    友人と「勉強の時間」を共有する。互いに監視し合うことで、サボりにくくなります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7B1FA2" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>寝る1時間前はスマートフォン禁止</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    ブルーライトを避け、睡眠の質を上げる。質の高い睡眠が、翌日の学習効果を大きく高めます。
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
        <Box sx={{ my: 4, p: 3, bgcolor: "#E1BEE7", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#4A148C" }}>
            志望校の情報をもっと詳しく確認しよう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校の情報を掲載しています。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#4A148C",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#38006B", transform: "translateY(-1px)" },
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
            <Link href="/column/kokosei-nyushi/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#7B1FA2" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#7B1FA2", mb: 1 }}>
                  高校入試の種類と対策
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  推薦・一般・特色選抜の違いと合格戦略
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
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#7B1FA2" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#7B1FA2", mb: 1 }}>
                  内申点の上げ方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  中学生が今すぐできる具体的な方法
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#7B1FA2" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/kokosei-baito/" style={{ textDecoration: "none" }}>
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
              <Typography sx={{ fontWeight: 600, color: "#7B1FA2" }}>
                次の記事: 高校生のバイトと勉強の両立
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
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#7B1FA2" }}>
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
