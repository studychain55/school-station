import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BukatsuChoisePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の部活選び" },
  ];

  const faqItems = [
    {
      question: "部活動と勉強の両立は可能ですか？",
      answer: "はい、十分に可能です。多くの高校生が部活動をしながら大学受験に成功しています。むしろ、部活動で得た時間管理スキルが勉強にも活かされます。ただし、時間管理とメリハリが重要です。",
    },
    {
      question: "高校入学時に部活を決めないといけないですか？",
      answer: "学校によって異なりますが、多くの高校では入学後の初期段階で部活選択があります。ただし、後から変更できる学校も多いので、事前に確認しておくと良いでしょう。",
    },
    {
      question: "運動部と文化部、どちらを選ぶべきですか？",
      answer: "これは個人の興味や適性で選ぶべきです。大学受験への影響はほぼ変わりません。自分が心から楽しめ、続けたいと思える活動を選ぶことが最も重要です。",
    },
    {
      question: "大学受験に有利な部活動はありますか？",
      answer: "特定の部活動が受験に有利というわけではありません。しかし、実績を出した経験、継続して頑張ったこと、リーダーシップを発揮したことなど、成果や成長過程が評価されます。どの部活動でも、そのような経験を得ることは十分可能です。",
    },
    {
      question: "初心者でも入部できる部活動はありますか？",
      answer: "はい。ほとんどの部活動は初心者歓迎です。むしろ、高校から始める生徒が大多数です。経験の有無よりも、熱意と継続力が重視されます。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の部活選び｜入学前に知っておくべきこと | School Station"
        description="高校の部活選びの完全ガイド。部活と勉強の両立方法、主要部活の特徴、顧問の選び方、大学受験への影響など、高校入学前に知っておくべき情報を解説します。"
        canonical="/column/bukatsu-choise/"
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
            "headline": "高校の部活選び｜入学前に知っておくべきこと",
            "description": "高校の部活選びの完全ガイド。部活と勉強の両立方法、主要部活の特徴を詳しく解説。",
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
            background: "linear-gradient(135deg, #2E7D32 0%, #388E3C 50%, #43A047 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校の部活選び
          </Typography>
          <Typography variant="body2" sx={{ color: "#C8E6C9", maxWidth: 600, mx: "auto" }}>
            部活と勉強の両立、顧問の指導スタイル、大学受験への影響など、入学前に知っておくべきポイント
          </Typography>
        </Box>

        <Section title="高校の部活選びの重要性" id="importance-of-club">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校の部活選びは、単なる課外活動ではなく、3年間の高校生活を大きく左右する重要な選択です。多くの高校生にとって、部活動は学校の中でのコミュニティ形成、友人関係、そして個人の成長に大きな影響を与えます。
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            また、大学受験時の推薦入試やAO入試では、部活動での活動歴や成果も評価対象となります。適切な部活を選ぶことで、充実した高校生活を送ることができます。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活と勉強の両立方法" id="balancing-club-and-study">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            「部活動をすると勉強が疎かになるのでは？」という懸念を持つ人も多いですが、実際には、部活動をしている生徒の方が時間管理が上手く、大学受験で成功する傾向があります。
          </Typography>

          <SubSection title="時間管理のコツ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>朝学習を活用する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    朝30分の集中力は夜の2時間分の価値があると言われます。部活から帰宅後は疲れているため、朝学習を習慣化することが効果的です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校の授業を大切にする</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活が忙しくても、学校の授業を集中して受ければ、自宅学習時間は減らせます。授業中の理解度が、その後の学習効率を大きく左右します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>スキマ時間の活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    通学時間、昼休み、部活前の待ち時間など、細切れ時間を活用する。単語帳や要点ノートを持ち歩く習慣をつける。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>定期テスト前の時間配分</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    定期テスト2週間前から部活の活動を調整する学校も多いです。その期間に集中的に勉強時間を確保することが大切です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>休息も計画する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    毎日の勉強と部活で疲弊しないよう、週に1～2日はリセットする時間を作る。メリハリが続く秘訣です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="主要部活の特徴と難易度" id="characteristics-of-clubs">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の主要部活の特徴を理解し、自分に合った活動を選びましょう：
          </Typography>

          <SubSection title="運動部">
            <Box sx={{ bgcolor: "#E3F2FD", p: 2.5, borderRadius: 1, border: "1px solid #BBDEFB", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#1565C0" }}>野球・サッカー・バレーボール</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日2～3時間、土日は試合や練習試合。<br/>
                      <strong>難易度：</strong> 高い。毎日の練習と体力が必要。<br/>
                      <strong>メリット：</strong> チームワークを学べる。全国大会を目指すモチベーション。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#1565C0" }}>テニス・陸上・水泳</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1～2時間、土日は大会や練習。<br/>
                      <strong>難易度：</strong> 中程度。個人の頑張り次第で成果が出やすい。<br/>
                      <strong>メリット：</strong> 個人の記録向上が目に見える。時間融通がつきやすい場合もある。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#1565C0" }}>剣道・柔道・弓道</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1.5～2時間、土日は大会。<br/>
                      <strong>難易度：</strong> 中程度。礼儀や精神修養が重視される。<br/>
                      <strong>メリット：</strong> 日本の伝統文化を学べる。精神的な成長が大きい。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="文化部">
            <Box sx={{ bgcolor: "#F3E5F5", p: 2.5, borderRadius: 1, border: "1px solid #E1BEE7" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>吹奏楽・合唱</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1～2時間、大会前は3時間以上。<br/>
                      <strong>難易度：</strong> 中～高。全体での調和が重要。<br/>
                      <strong>メリット：</strong> 音楽の技術向上。全国大会での達成感が大きい。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>演劇・ダンス</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1.5～2時間、本番前は毎日。<br/>
                      <strong>難易度：</strong> 中程度。表現力やチームワークが必要。<br/>
                      <strong>メリット：</strong> 自分を表現できる。舞台で活躍する充実感。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>美術・書道・茶道</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1～1.5時間、比較的自由。<br/>
                      <strong>難易度：</strong> 低～中。個人のペースで進められる。<br/>
                      <strong>メリット：</strong> 創作の自由度が高い。勉強時間の融通がつきやすい。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5, color: "#6A1B9A" }}>新聞・放送・写真</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      <strong>練習時間：</strong> 平日1時間程度、比較的自由。<br/>
                      <strong>難易度：</strong> 低。自分のペースで活動できる。<br/>
                      <strong>メリット：</strong> 情報発信スキルが身につく。部活と勉強のバランスが取りやすい。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活選びの5つのポイント" id="selection-criteria">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入学時に部活を選ぶ際、確認すべきポイントをご紹介します：
          </Typography>

          <List>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>1. 自分の適性と興味</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  何より重要なのは、自分が心から興味を持てる活動を選ぶことです。中学の部活経験も参考になりますが、高校で新しい活動に挑戦するのも良いでしょう。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>2. 練習時間と勉強時間のバランス</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  大学受験を視野に入れると、どの程度の練習時間を確保できるかが重要です。放課後毎日3時間以上の部活では、勉強時間が限定される可能性があります。自分の学習スタイルと照らし合わせて検討しましょう。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>3. 顧問の指導スタイル</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  顧問の先生の指導方法、人柄、部活に対する考え方は、部活体験を大きく左右します。体験入部や学園祭で、その顧問がどのような指導をしているか観察することが大切です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>4. 先輩たちの様子</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  部活の雰囲気は、先輩たちの様子に大きく左右されます。先輩たちが楽しそうか、厳しすぎないか、いじめがないか、などを確認します。同級生同士の関係も大切です。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <Box sx={{ bgcolor: "#FFF9C4", p: 2.5, borderRadius: 1, border: "1px solid #FFD54F", width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.5, color: "#F57F17" }}>5. 辞める際の手続き</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  部活を始める前に知っておくべきですが、「部活を辞めたい場合、どのような手続きが必要か」も確認しておくと安心です。大多数の高校では気軽に辞めることはできませんが、やむを得ない理由（怪我、進学受験など）があれば考慮される場合があります。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="顧問の指導スタイルの見極め方" id="coach-selection">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            良い顧問との出会いは、部活体験を大きく変えます。以下のポイントで顧問を評価しましょう：
          </Typography>

          <SubSection title="良い顧問の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>生徒の個性を尊重する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一律の指導ではなく、生徒の適性や弱点に合わせて指導できる顧問。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>結果だけでなく過程を重視する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    全国大会を目指すことと同じくらい、努力の過程や人間的な成長を重視する顧問。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>怪我や体調管理に配慮する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    無理な練習による怪我を防ぎ、生徒の体調に配慮できる顧問。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>受験への配慮</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    3年生の受験時期に練習を調整したり、サポート体制を整えたりできる顧問。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>生徒とのコミュニケーション</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    生徒の悩みや不安に耳を傾け、相談しやすい環境を作る顧問。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="部活動と大学受験" id="club-and-university">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            部活動が大学受験に与える影響について、よくある疑問を解説します：
          </Typography>

          <SubSection title="大学受験への影響">
            <Box sx={{ bgcolor: "#E8F5E9", p: 2.5, borderRadius: 1, border: "1px solid #C8E6C9" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>推薦入試・AO入試：</strong> 部活動での成果、継続期間、リーダーシップの経験などが評価されます。全国大会出場よりも、「コンスタントに頑張った」「課題を克服した」といった過程が重視されます。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>一般入試：</strong> 大学の試験科目での学力が最優先です。部活動の有無は直接的には影響しません。ただし、部活動で得た時間管理スキルが、受験勉強に活かされることは多いです。
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>小論文・面接：</strong> 部活動での経験は「自分の成長過程」を示す材料として有効です。「部活で学んだことを、大学でどう活かすか」という問いに答える際に役立ちます。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="3年生（受験学年）での部活との向き合い方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>春～初夏：部活と勉強の両立</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活に全力を注ぎながら、同時に基礎学習を進める。多くの生徒が両立できる時期です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>夏：部活の大会と本格的な受験勉強</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    部活の総体（全国大会）を目指しながら、夏休みは受験勉強を本格化させる。朝学習と夜の集中学習をバランスよく実施。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>秋～冬：部活引退と受験勉強専念</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    多くの部活は秋に大会が終わり、引退する生徒が大半。その後は受験勉強に全力を注ぐ。部活での経験と学んだ精神力が、受験勉強を支える基盤になります。
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
        <Box sx={{ my: 4, p: 3, bgcolor: "#C8E6C9", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#2E7D32" }}>
            高校の情報をもっと詳しく確認しよう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国5,000校以上の高校の部活情報も掲載しています。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#2E7D32",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1B5E20", transform: "translateY(-1px)" },
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
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#2E7D32" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#2E7D32", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  高校選びで重視すべき5つの基準をわかりやすく解説
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/study-methods/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#2E7D32" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#2E7D32", mb: 1 }}>
                  効果的な勉強法
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  高校受験合格に必要な勉強法と時間管理のコツ
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#2E7D32" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>コラム一覧へ</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/tokkoku-guide/" style={{ textDecoration: "none" }}>
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
              <Typography sx={{ fontWeight: 600, color: "#2E7D32" }}>
                前の記事: 推薦入試完全ガイド
                <ArrowBackIcon sx={{ ml: 1, fontSize: "1rem" }} />
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
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32" }}>
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
