import { Container, Typography, Box, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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

export default function KoukouJukuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校生の塾・予備校の選び方｜集団授業・個別指導・映像授業の比較" },
  ];

  const faqItems = [
    {
      question: "高校生の塾の平均的な費用はいくらですか？",
      answer: "高校生向けの塾の年間費用は、塾の種類と利用形態によって大きく異なります。個別指導塾は年間60～100万円、集団指導の大手予備校は年間30～50万円、映像授業は年間10～20万円が目安です。週2～3回の利用で、月額3～8万円程度が平均的な相場です。受験期（高3）には費用がさらに増加する傾向があります。",
    },
    {
      question: "集団授業と個別指導、どちらが効果的ですか？",
      answer: "集団授業は競争心を刺激し、効率的なカリキュラムで進むメリットがあります。一方、個別指導は自分のペースで学べ、苦手科目に集中できます。成績が平均以上で、刺激を求める生徒には集団授業、成績が低めで個別対応が必要な生徒には個別指導が適しています。最適な選択は、生徒の学力レベルと学習スタイルによって異なります。",
    },
    {
      question: "高1・高2と高3で塾の使い方を変えるべきですか？",
      answer: "はい、変えるべきです。高1～高2は基礎学力の定着が目的のため、学校の予習復習を補う形で週2回程度の利用が目安です。高3は大学受験対策に特化する必要があるため、週3～4回の利用や直前講習の活用が重要になります。また、高3では志望校別の対策講座や、弱点補強に特化した講座の受講が効果的です。",
    },
    {
      question: "部活と塾の両立は可能ですか？",
      answer: "可能です。ただし、高1～高2の間は週2～3回の塾利用で、部活と勉強のバランスを取ることが重要です。多くの高校では、高3の春（または夏）から本格的に大学受験対策を開始するため、それまでは無理のない範囲で両立できます。塾の自習室を活用し、部活の終了時間に合わせた日程調整をすることも有効です。",
    },
    {
      question: "塾なしで難関大学に合格することは可能ですか？",
      answer: "可能です。実際、塾なしで国公立大学や難関私大に合格する生徒は数多くいます。ただし、塾なしで合格するには、学校の授業を完全に理解し、自学自習の習慣が強い必要があります。また、わからない部分を学校の先生に質問し、積極的に学習を進める主体性が不可欠です。家計の事情で塾に行けない場合は、学校の授業と学習アプリ（スタディサプリなど）を活用することで、充分な対策が可能です。",
    },
    {
      question: "オンライン塾は対面塾と同じ効果がありますか？",
      answer: "オンライン塾は、自分のペースで学習でき、時間効率が優れています。一方、対面塾は質問がしやすく、学習計画のサポートが手厚い傾向があります。オンライン塾の効果は、生徒の自主性と学習姿勢に大きく左右されます。自分で学習を管理できる生徒にはオンライン塾が適しており、サポートが必要な生徒には対面塾が効果的です。",
    },
  ];

  return (
    <>
      <SEO
        title="高校生の塾・予備校の選び方｜集団授業・個別指導・映像授業の比較 | School Station"
        description="高校生向け塾の種類（大手予備校・個別指導・映像授業・オンライン）と特徴を徹底比較。年間30～100万円の費用相場、高1～高3で変わる塾活用法、部活との両立方法、塾なしで難関大合格できるかを完全解説。"
        canonical="/column/koukou-juku/"
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
            "headline": "高校生の塾・予備校の選び方｜集団授業・個別指導・映像授業の比較",
            "description": "高校生向け塾の種類（大手予備校・個別指導・映像授業・オンライン）と特徴を徹底比較。年間30～100万円の費用相場、高1～高3で変わる塾活用法、部活との両立方法、塾なしで難関大合格できるかを完全解説。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校生の塾・予備校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            集団授業・個別指導・映像授業の徹底比較ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校生向け塾の種類と特徴" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校生向けの塾・予備校は多種多様です。各塾の特徴を理解し、自分の学力レベル、学習スタイル、予算に合った塾を選択することが、受験成功の重要な要素になります。
          </Typography>

          <SubSection title="大手予備校（集団授業）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴：</strong>駿台予備校、河合塾、代ゼミなどの大手予備校では、受験対策に特化したカリキュラムで、40～50名の集団授業が行われます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット：</strong>経験豊富な講師による質の高い授業、テキストが充実している、受験情報が豊富、自習室が利用できる、競争心を刺激される環境。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デメリット：</strong>個別対応が難しい、ペースが合わない場合について行くのが難しい、授業形式が一方通行になりやすい、費用が高い（年間30～50万円）。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている生徒：</strong>成績が平均以上で、競争心が強く、一定のペースで学習を進められる生徒。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="個別指導塾">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴：</strong>講師1人に対して生徒が1～2人。生徒の理解度に合わせた個別対応の授業が特徴。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット：</strong>自分のペースで学習できる、わからない部分を何度も質問できる、苦手科目に集中できる、学習計画が立てやすい、講師と相談しやすい。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デメリット：</strong>費用が高い（年間60～100万円）、講師の質にばらつきがある、競争心を刺激されにくい、講師の当たり外れが大きい。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている生徒：</strong>成績が平均以下で、個別対応が必要、予算がある、自分のペースで学習したい生徒。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="映像授業・オンライン塾">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特徴：</strong>スタディサプリ、河合塾One、Z会などのオンライン型学習。自宅で動画を視聴し、自分のペースで学習できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット：</strong>低価格（年間10～20万円）、時間や場所を選ばない、何度も視聴できる、科目ごとに講師を選べる、自分のペースで進められる。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デメリット：</strong>質問ができない、モチベーション管理が難しい、学習計画を自分で立てる必要がある、講師との関係が薄い。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている生徒：</strong>自主性が高い、予算が限られている、自宅で学習したい、自分のペースで学習したい生徒。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="通信添削・オンライン質問サービス">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              Z会などの通信添削では、月に数回の課題提出と添削を受けることができます。また、オンラインで講師に質問できるサービスも増えています。これらは補助的な学習ツールとして活用されることが多いです。
            </Typography>
          </SubSection>
        </Section>

        <Section title="塾・予備校の費用相場" id="cost">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校生向けの塾・予備校の費用は、塾の種類、利用科目数、利用頻度によって大きく異なります。以下は一般的な相場です。
          </Typography>

          <SubSection title="年間費用の相場">
            <TableContainer component={Paper} sx={{ mb: 3, border: "1px solid #bcd7c0" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1e782d" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>塾の種類</TableCell>
                    <TableCell align="center" sx={{ color: "#fff", fontWeight: 700 }}>月額（目安）</TableCell>
                    <TableCell align="center" sx={{ color: "#fff", fontWeight: 700 }}>年間費用（目安）</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>備考</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>大手予備校（集団）</TableCell>
                    <TableCell align="center">25,000～40,000円</TableCell>
                    <TableCell align="center">30～50万円</TableCell>
                    <TableCell>講習代・季節講座で追加費用あり</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>個別指導塾</TableCell>
                    <TableCell align="center">50,000～80,000円</TableCell>
                    <TableCell align="center">60～100万円</TableCell>
                    <TableCell>1科目あたり月20,000～30,000円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>映像授業</TableCell>
                    <TableCell align="center">10,000～15,000円</TableCell>
                    <TableCell align="center">10～20万円</TableCell>
                    <TableCell>最も低価格、無料体験あり</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>通信添削</TableCell>
                    <TableCell align="center">5,000～10,000円</TableCell>
                    <TableCell align="center">6～15万円</TableCell>
                    <TableCell>補助的な利用が中心</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>オンライン家庭教師</TableCell>
                    <TableCell align="center">30,000～60,000円</TableCell>
                    <TableCell align="center">40～80万円</TableCell>
                    <TableCell>個別対応のため比較的高価</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>高3での追加費用：</strong>高3では、冬期講習や直前講習などで、年間費用が20～30万円増加することが一般的です。受験を控えた生徒の場合、総額60～150万円の費用がかかることも珍しくありません。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="高1・高2・高3で変わる塾活用法" id="usage-by-grade">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学受験に向けた塾の活用法は、学年によって大きく異なります。各学年での最適な塾の使い方を理解することが重要です。
          </Typography>

          <SubSection title="高1・高2：基礎定着と学習習慣の確立">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾の利用頻度：</strong>週2～3回程度が目安。学校の授業を補完する形で、苦手科目の基礎固めに集中します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾選びのポイント：</strong>集団授業でも個別指導でも、学校の授業と連動した内容で、基礎学力の定着を重視する塾を選びましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>費用：</strong>月額30,000～40,000円、年間40～50万円程度が目安。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活との両立：</strong>週2～3回程度であれば、部活と両立することは十分可能です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高3：受験対策に特化した学習">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾の利用頻度：</strong>週3～5回程度に増加。志望校対策、弱点補強、過去問演習などに特化した講座の受講。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾選びのポイント：</strong>志望校別講座、過去問研究、受験情報提供が充実した塾。講師の受験情報や指導経験が豊富な塾を選びましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>費用：</strong>月額50,000～80,000円。春期講習、夏期講習、冬期講習で追加費用が30～50万円。年間総額100～150万円が目安。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活との両立：</strong>高3の春（または夏）から部活を辞める生徒が多く、塾と大学受験勉強に集中することになります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="部活と塾・勉強の両立方法" id="balance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            多くの高校生は、部活と塾・勉強を両立させる必要があります。効率的な時間管理と戦略的な塾選びが、両立の鍵になります。
          </Typography>

          <SubSection title="両立するための具体的な方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾の授業時間を工夫：</strong>部活の終了時間（18:00～19:00）に合わせて、19:00～や20:00～の授業を選択できる塾を選びましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>週末の活用：</strong>土曜日午前に塾の授業、午後に自習、日曜日に週末課題の復習という流れで効率化します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾の自習室活用：</strong>自習室で部活前の空き時間を利用して、予習や課題をこなすことで、帰宅後の負担を減らせます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>映像授業の活用：</strong>部活の時間に合わせて自宅で学習でき、見逃した授業を後で視聴できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高3での決断：</strong>大学受験に本気で取り組む場合、高3の春（または夏）に部活を辞める決断が必要な場合も多いです。進学実績の良い学校では、多くの生徒がこの時期に部活から進学へ転換します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="塾なしで難関大学に合格できるか" id="without-juku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            塾に通わずに、国公立大学や難関私大に合格する生徒は数多くいます。塾の有無よりも、本人の学習意欲と自学自習の質が、受験成功の決定要因です。
          </Typography>

          <SubSection title="塾なしで合格するための条件">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校の授業を完全に理解：</strong>学校の授業を最大限に活用し、わからない部分は学校の先生に質問して解決することが必須です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自学自習の習慣：</strong>平日3～4時間、週末5～6時間の自学自習が必要です。計画を立て、継続的に実行する能力が不可欠です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習アプリの活用：</strong>スタディサプリ、YouTube講義、オンライン家庭教師などのアプリで、塾の代わりになる学習環境を構築します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望校対策の工夫：</strong>過去問を徹底的に研究し、出題傾向に合わせた学習を自分で設計する能力が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>モチベーション管理：</strong>塾の講師のサポートがない分、自分でモチベーションを管理し、高いレベルを保ち続ける必要があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D" }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
              結論：塾なしでも合格は可能ですが、本人の学習意欲、自学自習の習慣、学校の先生への質問力が必須です。家計の事情で塾に行けない場合は、上記の条件を満たすことで、十分な大学受験対策が可能です。
            </Typography>
          </Box>
        </Section>

        <Section title="塾選びの判断基準" id="selection-criteria">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            自分に合った塾を選ぶことは、受験成功の重要な要素です。以下の判断基準を参考に、慎重に塾を選びましょう。
          </Typography>

          <SubSection title="確認すべきポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>講師の質：</strong>講師の学歴・経験、授業評価、生徒満足度を確認します。体験授業を受けて、講師の説明がわかりやすいか判断します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>カリキュラム：</strong>学校の授業と連動しているか、受験対策が充実しているか、志望校別講座があるか確認します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績：</strong>塾の公表する進学実績、合格者数、難関大学への合格率を確認します。信頼できる実績かどうかを判断します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サポート体制：</strong>学習計画の立案、面接対策、願書添削など、受験に必要なサポートが充実しているか確認します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>費用：</strong>月額費用、季節講習費、入塾金などを確認し、総額で予算内に収まるか判断します。追加費用がないか確認することも重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自習室：</strong>塾生が利用できる自習室の環境（広さ、静かさ、開放時間）を確認します。自習室の充実度は、塾の質に大きく影響します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <FAQ items={faqItems} />

        {/* Back to Column */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E0E0E0" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#1e782d", fontWeight: 600, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
              ← コラム一覧に戻る
            </Typography>
          </Link>
        </Box>
      </Container>
    </>
  );
}
