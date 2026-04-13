import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Helper Components
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

export default function KoukouRyuunenPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校で留年・退学になりそうな場合の対処法｜代替進路の選択肢" },
  ];

  const faqItems = [
    {
      question: "高校で留年になる条件は何ですか？",
      answer: "高校での留年は、主に以下の条件で決定されます：(1)出席日数が不足している場合（通常、年間の1/3以上欠席で留年になる傾向）、(2)修得すべき単位が不足している場合（各科目の評価が1や2の場合）、(3)これらの両方を満たしていない場合です。学校によってルールは異なるため、担任や進路指導の先生に確認することが大切です。",
    },
    {
      question: "留年を回避するための対処法は何がありますか？",
      answer: "留年を回避するには、(1)出席日数の確保：やむを得ない事情（病気など）で欠席する場合は、医師の診断書や証明書を提出することで欠席日数から除外される場合がある、(2)単位取得：不足している科目については、追試験や補習授業に参加して単位を取得する、(3)学校への相談：担任や進路指導の先生に相談し、利用できる支援制度を確認することが重要です。",
    },
    {
      question: "高卒認定試験（高認）とは何ですか？",
      answer: "高卒認定試験は、高等学校を卒業していない者が、高等学校卒業程度の学力があるかどうかを認定する試験です。全日制高校の中退者や高認受験者が対象で、年2回（8月と11月）実施されます。試験に合格すれば、高卒資格がなくても大学入試受験や就職試験に応募できる『高卒認定資格』を得ることができます。",
    },
    {
      question: "高校中退後に大学に進学することはできますか？",
      answer: "はい、可能です。高卒認定試験に合格するか、通信制高校を卒業すれば、大学入試に受験資格が得られます。また、多くの大学が『社会人入試』『編入試験』などで、高卒以外の学歴を持つ志願者を受け入れています。中退後、独学や予備校での学習を経て、難関大学に進学した事例も多くあります。",
    },
    {
      question: "定時制高校と通信制高校の違いは何ですか？",
      answer: "定時制高校は、平日の夜間（または午前・午後の時間帯）に授業を受ける全日制高校の補助的選択肢です。一方、通信制高校は、自宅での学習が中心で、月数回のスクーリング（登校日）で単位を取得します。定時制は『毎日学校に通う』形式で、通信制は『自分のペースで学習』する形式です。仕事や家庭の事情に応じて、どちらが適しているかを判断しましょう。",
    },
    {
      question: "高校を中退した場合、就職は不利になりますか？",
      answer: "高卒資格がない場合、正社員採用の選択肢は限定される傾向にあります。しかし、(1)高卒認定試験に合格する、(2)通信制高校を卒業する、(3)各種職業訓練校に通う、などの方法で学歴要件を満たせば、進路の幅が広がります。また、技術職や専門職の場合は、高卒資格の有無より実務経験やスキルが重視されることもあります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校で留年・退学になりそうな場合の対処法｜代替進路の選択肢 | School Station"
        description="高校で留年・退学の危機にある場合の対処法と代替進路を解説。出席日数・単位不足への対応、高卒認定試験の活用、通信制への転校、高校中退後の進路選択肢を紹介。"
        canonical="/column/koukou-ryuunen/"
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
            "headline": "高校で留年・退学になりそうな場合の対処法｜代替進路の選択肢",
            "description": "高校で留年・退学の危機にある場合の対処法と代替進路を解説。出席日数・単位不足への対応、高卒認定試験の活用、通信制への転校、高校中退後の進路選択肢を紹介。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校の留年・退学対処ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            留年・退学の危機を乗り越える方法と、代替進路の選択肢を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校で留年になる条件を知る" id="criteria">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            留年の危機を回避するには、まず留年の条件を正確に理解することが重要です。多くの高校では、出席日数と修得単位の2つの基準で留年判定が行われます。
          </Typography>

          <SubSection title="出席日数の基準">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 1.5 }}>
                一般的な基準：年間授業日数の1/3以上の欠席で留年
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高校の年間授業日数は通常200～210日です。これの1/3は約65～70日となり、この日数を超えて欠席すると留年の可能性が高まります。例えば、年間200日の授業日数の場合、66日以上の欠席で留年のリスクが生じます。
              </Typography>
            </Box>

            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 1.5 }}>
                出席日数から除外される欠席
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                以下の欠席は、出席日数の計算から除外される場合があります（学校によって異なる）：
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    病気による欠席（医師の診断書が必要）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    災害や不可抗力による欠席（証明書が必要）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校行事への参加による欠席（公式な大会など）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校の特別な許可による欠席
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="修得単位の基準">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 1.5 }}>
                一般的な基準：各科目で一定以上の成績が必要
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高校では、各科目の成績が『1』（最も低い評価）では単位が認定されません。『2』以上の評価を得ることで、その科目の単位が認定されます。複数の科目で『1』の評価を得ると、修得単位が不足し、留年になる可能性があります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『1』の評価：単位認定なし（留年の主原因）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『2』の評価：単位認定あり（ただし、改善が必要な学習状況）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『3』以上の評価：単位認定あり（十分な学習状況）
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="留年を回避するための対処法" id="prevention">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            留年が確定する前に、多くの学校では学生に対して『追試験』『補習授業』『実力試験』などの支援制度を用意しています。これらの制度をフルに活用することで、留年を回避できる可能性があります。
          </Typography>

          <SubSection title="出席日数不足への対応">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ1：担任や進路指導の先生に相談
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                出席日数が不足していると感じたら、できるだけ早く担任に相談しましょう。先生は、出席日数から除外される可能性のある欠席について、具体的なアドバイスを提供できます。また、今後の出席計画を立てるのに役立ちます。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ2：医学的理由の証明を準備
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                病気による欠席が多い場合は、医師の診断書を取得しましょう。この書類があれば、その期間の欠席を『公式な欠席』として扱い、出席日数から除外できる可能性があります。診断書は医療機関で有料（通常1,000～3,000円）で発行されます。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ3：今後の出席計画を立てる
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                出席日数が回復不可能な場合を除き、今後の授業への出席を最優先にしましょう。1日の欠席の積み重ねが、最終的に留年につながるため、毎日の出席が極めて重要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="単位不足への対応">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ1：『1』評価の科目に集中
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                高校の多くでは、定期テスト後に『追試験』や『補習授業』を実施しています。『1』評価の科目に対して、これらの制度を活用し、成績を『2』以上に引き上げることが最優先です。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ2：追試験に参加
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                定期テストで基準点に達しなかった場合、追試験が実施されることが多いです。追試験に合格すれば、単位が認定される場合があります。追試験の詳細は、学校の掲示板や配布物で確認しましょう。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ3：補習授業への参加
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの高校では、夏休みや冬休みに補習授業を実施しています。これは、成績不振の生徒を対象とした無料の追加授業です。積極的に参加し、学習内容の理解を深めることで、次回のテストでの得点向上が期待できます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="学校に相談すべき内容">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  現在の出席日数と修得単位数の正確な状況
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  利用可能な『追試験』『補習授業』『学力支援』の内容
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  留年が確定的な場合の『転入』『編入』『通信制への転校』などの選択肢
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  学習に困難を感じている理由（学習方法の改善、健康面の問題、心理的課題など）の相談
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="退学になった場合の手続きと影響" id="withdrawal">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校を中退すると、様々な手続きが必要になり、進学や就職に影響します。しかし、中退後の選択肢も複数あるため、絶望する必要はありません。
          </Typography>

          <SubSection title="退学手続きの流れ">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ1：学校への正式な退学届の提出
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                高校を中退する場合は、学校に『退学届』を提出する必要があります。この届は、親の同意のもと、学校の教務課で提出します。届出後、学校はあなたの学籍から削除し、退学証明書などの書類を発行します。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ2：退学証明書などの書類取得
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                退学後、以下の書類を取得する必要があります：
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    退学証明書（高卒認定試験の出願に必要）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    成績証明書（修得単位の記録）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    在籍期間証明書（進学・就職の記録として）
                  </Typography>
                </ListItem>
              </List>
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
              ステップ3：教育委員会への報告
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校によっては、退学時に教育委員会に報告する場合があります。これは、特に都道府県外への引越しや転籍がある場合に行われます。
            </Typography>
          </SubSection>

          <SubSection title="退学が生涯に与える影響">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    進学：大学・短大・専門学校への直接進学は不可
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    高卒認定試験に合格するか、通信制高校を卒業すれば進学可能
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    就職：高卒以上の学歴要件を満たさない
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    高卒資格取得後、正社員採用の門戸が広がる
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    給与・待遇：中卒扱いとなる場合が多い
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    生涯所得の差は数千万円に及ぶ可能性がある
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高卒認定試験（高認）について" id="kokenin">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高卒認定試験は、高等学校を卒業していない者が、高卒程度の学力があることを認定する国家試験です。中退者や定時制・通信制進学者にとって、大学進学や就職の道を開く重要な制度です。
          </Typography>

          <SubSection title="高卒認定試験の概要">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 3 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      対象者
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      高等学校卒業見込みのない者（中卒者、高校中退者、定時制生など）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      試験日程
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      年2回：第1回（8月）、第2回（11月）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      試験科目
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      国語、社会（地歴・公民）、数学、理科、英語（各科目1単位～4単位）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      出願手数料
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      1科目600円（全科目で3,000～3,600円程度）
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="高卒認定試験合格後の進路">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  大学入試への受験資格が得られる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  短期大学・高等専修学校への進学が可能
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  就職試験で『高卒以上』の応募資格を満たす
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  公務員試験の受験資格が得られる（試験による）
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="通信制高校・定時制高校への転入" id="alternatives">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            全日制高校で留年の危機にあれば、通信制高校や定時制高校への転入を検討することも有効な選択肢です。これらの学校は、多様な学習背景を持つ生徒に対応した環境を提供しています。
          </Typography>

          <SubSection title="定時制高校への転入">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                定時制高校の特徴
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    平日の夜間（または午前・午後）に授業を実施
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    毎日学校に通い、同じクラスの仲間と学ぶ
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    仕事や家庭の事情のある生徒向け（4年で卒業）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全日制と同じ高卒資格が取得できる
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="通信制高校への転入">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                通信制高校の特徴
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自宅での学習が中心（月数回のスクーリングのみ）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分のペースで学習できる
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    年間を通じていつでも転入可能
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    単位認定が比較的寛容
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全日制と同じ高卒資格が取得できる
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Section title="高校中退後の進路選択肢" id="paths">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校を中退しても、進学や就職の道は複数あります。自分の適性と目標に合わせて、最適な進路を選択しましょう。
          </Typography>

          <SubSection title="進学経路">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    高卒認定試験合格 → 大学受験
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    高認合格後、大学一般入試を受験可能。塾や予備校での準備が重要
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    通信制高校卒業 → 大学受験
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    通信制で高卒資格取得後、大学受験が可能。定期的に通学する必要なし
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    高卒認定試験合格 → 短期大学・専門学校
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    実践的な技能を2年で習得でき、就職につながりやすい
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="就職経路">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    職業訓練校への進学
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    国の職業訓練校で2年間、無料で実践的な技能を習得。修了後、高卒資格と技能資格を取得
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    企業での見習い・実習制度
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    一部の企業では、中卒や高校中退者を対象とした見習い制度や実習制度がある
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                    高卒認定試験合格 → 正社員採用試験
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    高認合格後、『高卒以上』の応募資格を満たし、正社員採用試験に応募可能
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 5 }} />

        {/* FAQ Section */}
        <FAQ items={faqItems} />

        <Divider sx={{ my: 5 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            高校選びを進める
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            全国の高校偏差値ランキングで、自分に合った高校を探しましょう。
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
