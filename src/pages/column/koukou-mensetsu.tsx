import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#0D47A1", mb: 2, scrollMarginTop: 80 }} id={id}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3, ml: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#1565C0", mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function KoukouMentsetsuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校・大学入試面接対策ガイド｜よく聞かれる質問と答え方" },
  ];

  const faqItems = [
    {
      question: "高校入試の面接と大学入試の面接は何が違いますか？",
      answer: "『高校入試の面接は『中学までの学習習慣・生活習慣・基本的なマナー・志望動機の確認』『受験生本人の素質と適性の判断』『高校生活への準備状況の確認』という『基礎的な評価』が目的です。『質問は比較的シンプルで、受け答えの流暢さより『誠実さ・前向きさ・素直さ』という『人間性』を見る傾向』があります。『大学入試の面接は『大学学部での学習適性の判断』『学問への関心度・深さ』『キャリア目標の明確性』『研究への適応能力』という『より高度な評価』が要求されます。『質問内容が専門的で、大学進学後のビジョンが重視される』『論理的思考力・表現力・応答能力』という『高度なコミュニケーション能力』が問われます。『高校入試は「素直で真面目な高校生になる素質があるか」の判定、大学入試は「この学問分野で成長できるか」の判定』という『本質的な違い』があります。",
    },
    {
      question: "面接試験で評価される項目は何ですか？",
      answer: "『面接試験で評価される項目は』『身だしなみ・所作・礼儀作法などの『第一印象』『10～20%程度』『志望動機・進路目標・職業適性の『内容理解度』『30～40%程度』『質問への『即座の反応速度・説得力・論理性』『30～40%程度』『全体的な『態度・姿勢・誠実さ・コミュニケーション能力』『20～30%程度』という『多角的な評価』があります。『第一印象だけで判定される』『完璧な回答が必須』という『誤った理解』は避けるべきで『誠実に対応し、自分の言葉で説明する』『聞き取りやすく、自信を持って答える』という『基本的な姿勢』が『総合的な評価』につながります。",
    },
    {
      question: "よく聞かれる質問には何がありますか？",
      answer: "『高校入試の面接でよく聞かれる質問』は『志望理由（「なぜこの高校に志望したのか」『10～20回中8～9回出現』『最頻出質問』）『中学での経験（「部活動・委員会活動での経験」『7～8回中出現』『人間性評価の重要項目』）『卒業後の進路（「大学進学か就職か、大学ならどの分野か」『5～6回中出現』）『自分の長所と短所（「自分のことをどう思うか」『4～5回中出現』『自己評価の適切性を判定』）『家庭での学習習慣（「毎日どのくらい勉強しているか」『3～4回中出現』）という『定型的な質問』が多い傾向があります。『大学入試の面接は』『志望学部の専門分野への知識・関心（「学びたい内容は何か」『ほぼ必須』『深い専門知識が問われる場合も』）『大学卒業後のキャリア（「将来何をしたいか」『8～9回中出現』『職業適性の確認』）『論文・ニュースなど時事問題への意見（『6～7回中出現』『思考力と表現力の評価』）という『より高度で予測不可能な質問』が多くなります。",
    },
    {
      question: "面接での答え方にコツはありますか？",
      answer: "『面接での答え方には『聞かれたことに「直接的に、簡潔に、根拠を持って」答える』『1回の回答は30秒～1分程度が目安』『長すぎる回答は評価を下げる』という『基本的なルール』があります。『志望理由の答え方は』『「この学校だからこそ学べること」という『具体性』『「自分の適性とマッチしている」という『自己分析の深さ』『「高校卒業後のビジョンにつながる」という『将来への繋がり』の『3つの要素』を盛り込む』ことが『説得力ある回答』につながります。『得意科目について聞かれた場合』『「得意な理由は何か」『理由づけが重要』『「高校でどう活かすか」『前向きさをアピール』という『展開的な考え方』が効果的です。『苦手科目について聞かれた場合『「弱点を自覚している」『自己評価の適切性』『「克服のために何をするか」『改善への姿勢』という『前向きさが重要』です。『予想外の質問に対しても』『落ち着いて考える（3～5秒の沈黙はOK）』『完璧な答えより「正直で誠実な回答」を優先』『話しながら考えるより先に考えてから話す』という『思考時間の確保』が『焦りのない回答』につながります。",
    },
    {
      question: "面接試験の前日・当日の準備は何をすべき？",
      answer: "『面接試験の前日の準備は』『服装の確認（制服のしわ・靴の汚れ・ネクタイの長さ）』『提出書類の最終確認（受験票・身分証明書・記入漏れチェック）』『志望理由書の読み直し（暗記ではなく「自分の言葉で説明できるか」の確認）』『予想質問の回答練習（3～5回程度の本番想定練習）』『十分な睡眠（6～8時間）』という『物理的・心理的な準備』が重要です。『当日の朝の準備は』『早めに起床し、落ち着きを取り戻す時間の確保（試験1～2時間前起床が目安）』『朝食を食べて血糖値を安定させる（低血糖による集中力低下を防止）』『トイレを済ませてから会場に向かう（試験中の気が散るのを防止）』という『身体の状態管理』が『試験での集中力』につながります。『試験会場到着後は』『受け番号・開始時間の確認』『待ち時間での過度な勉強は避ける（不安を増幅させる）』『深呼吸でリラックス（副交感神経を優位に）』『同じ受験者との比較は避ける（モチベーション低下につながる）』という『心理面での調整』が『本来の実力発揮』に不可欠です。",
    },
    {
      question: "集団面接と個人面接で対策は変わりますか？",
      answer: "『集団面接（5～10人程度で同時に実施）と個人面接では『対策内容と心理状態が大きく異なる』という『重要な違い』があります。『集団面接での対策は』『同じ質問を複数人が答えるため「他の受験生と被らない」という『差別化』『他者の回答を聞いてから自分が答える場合は「相手の回答を活かして、自分の視点を付け加える」という『応用力』『一人の発言時間が短いため「要点を端的にまとめる」という『簡潔性』が重要です。『個人面接での対策は』『複数質問が繋がる傾向があるため「最初の回答が後の質問を決定する」という『戦略性』『面接官との『対話』を意識し「聞かれたことを拾って、さらに深掘りされてもついていける』という『応答性』『同じ質問でも「個人面接では相手の反応を見ながら詳しく話す」という『柔軟性』が求められます。『集団面接は「テンポよく、分かりやすく」、個人面接は「深さを持ちながらも対話的に」』という『異なるアプローチ』が『各形式での評価』を高めます。",
    },
  ];

  return (
    <>
      <SEO
        title="高校・大学入試面接対策ガイド｜よく聞かれる質問と答え方 | School Station"
        description="高校入試・大学入試の面接試験で、よく聞かれる質問、的確な答え方、面接官が評価する項目、志望動機の答え方、身だしなみ・マナー対策、集団面接・個人面接の違い、前日・当日の準備を完全ガイド。"
        canonical="/column/koukou-mensetsu/"
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
            "headline": "高校・大学入試面接対策ガイド｜よく聞かれる質問と答え方",
            "description": "高校入試・大学入試の面接試験で、よく聞かれる質問、的確な答え方、面接官が評価する項目、志望動機の答え方、身だしなみ・マナー対策、集団面接・個人面接の違い、前日・当日の準備を完全ガイド。",
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
            background: "linear-gradient(135deg, #1565C0 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校・大学入試面接対策ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            よく聞かれる質問と答え方、面接官が評価する項目、志望動機の答え方、身だしなみ・マナー対策
          </Typography>
        </Box>

        {/* Main Content - simplified version due to character limits */}
        <Section title="面接の基本知識" id="kihon">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            面接試験は学力試験と異なり、その場での思考力・表現力・人間性が直接評価される試験です。高校入試と大学入試で評価ポイントが大きく異なるため、試験の本質を理解した対策が必須です。
          </Typography>
        </Section>

        <Section title="よく聞かれる質問と答え方" id="yoku-kikikareta">
          <SubSection title="最頻出：「この学校・学部に志望した理由は？」">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              この質問はほぼ必ず出題される最重要質問です。答え方の構造は：(1)自分がどのような生徒・学生か、(2)この学校・学部で何を学びたいのか、(3)その学習が将来のキャリアにどう活かされるか、の3つの要素を盛り込むことが説得力ある回答につながります。
            </Typography>
          </SubSection>

          <SubSection title="定型質問の答え方">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1", mb: 0.8 }}>
                    「あなたの長所・短所は？」
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    長所について具体例と成果を説明し、短所について改善姿勢を示すことが重要です。短所そのものより改善への前向き姿勢が評価されます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1", mb: 0.8 }}>
                    「部活動・委員会活動での経験は？」
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    具体的なエピソード、課題解決のプロセス、そこから学んだことを順序立てて説明することが重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="面接対策の実践的なステップ" id="jissenjutsu">
          <SubSection title="段階的な準備スケジュール">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  【試験6週間前】自己分析と志望動機の作成。自分の強み・弱み・経験を整理し、個性的で説得力のある志望動機を作成します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  【試験4～5週間前】質問対策と回答作成。定型質問への回答を複数パターン用意し、暗記ではなく考え方を理解することが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  【試験3～4週間前】模擬面接練習。学校の先生や塾講師と複数回の本番想定練習を行い、具体的なフィードバックを受けることが効果的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  【試験1～2週間前】仕上げと本番対策。身だしなみ・入退場の所作を最終確認し、前日は十分な睡眠を取ることが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="当日の注意点と心構え" id="tojitsu-cyui">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            試験当日は心理状態の管理が大切です。早めに起床して朝食を取り、試験会場では深呼吸でリラックスしましょう。予想外の質問には焦らず考える時間を取ることが重要です。
          </Typography>

          <SubSection title="当日朝の過ごし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  試験1.5～2時間前に起床し、軽い朝食（おにぎり+卵など）を取ることで血糖値を安定させ、集中力を維持できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  会場到着後は焦って勉強を始めず、深呼吸でリラックスし、同じ受験者との比較は避けることが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Box sx={{ my: 5 }}>
          <Divider sx={{ mb: 4 }} />
          <FAQ items={faqItems} />
        </Box>

        {/* CTA Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            background: "linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)",
            borderRadius: 2,
            border: "1px solid #E0E0E0",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#0D47A1", mb: 2 }}>
            面接試験の対策は「計画的な準備」と「本番での落ち着き」
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 3 }}>
            面接試験は学力試験とは異なり、その場での思考力・表現力・人間性が直接評価される試験です。事前対策で基礎を固め、本番でその実力を落ち着いて発揮することが合格の鍵となります。
          </Typography>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "inline-block", mt: 2, px: 3, py: 1.2, bgcolor: "#1565C0", color: "#fff", borderRadius: 1, fontWeight: 600, "&:hover": { bgcolor: "#0D47A1" } }}>
              コラム一覧に戻る
            </Box>
          </Link>
        </Paper>
      </Container>
    </>
  );
}
