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

export default function KoukouShingakuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校入学後の大学進学準備｜1年生から始めるべき勉強習慣と情報収集" },
  ];

  const faqItems = [
    {
      question: "高校1年生から大学進学を意識する必要はありますか？",
      answer: "はい、非常に重要です。高校1年生の成績は、指定校推薦や評定平均の計算に直結します。また、高1から基礎学力を定着させることで、高2・高3での応用問題に余裕を持って取り組めます。大学進学を希望する場合は、遅くても高1の段階から意識的に勉強習慣を構築することが合格への近道です。",
    },
    {
      question: "高1・高2の評定が大学受験に与える影響は？",
      answer: "指定校推薦を狙う場合、高1～高2の評定が極めて重要です。指定校推薦は通常、3年間の評定平均を評価基準とするため、高1段階での定期テスト対策が不可欠です。また、総合型選抜（AO）でも評定平均や学習記録が評価対象になることが増えています。一般入試の場合でも、高1～高2での基礎固めが高3での学力向上を左右します。",
    },
    {
      question: "英検やTOEFLはいつから対策を始めるべき？",
      answer: "英検準2級は高1後期～高2上期、英検2級は高2上期～高3下期を目安に対策を始めることが推奨されます。多くの大学入試で英検2級以上が優遇される傾向があります。特にTOEFLはスコア取得に時間がかかるため、高1の早期から英語外部試験対策を開始することで、入試での有利性が高まります。",
    },
    {
      question: "高2での文理選択失敗を避けるポイントは？",
      answer: "文理選択の失敗を避けるには、①得意科目と不得意科目を正確に把握、②志望大学の学部学科が要求する科目を確認、③親や学校の先生・塾の講師に相談、の3ステップが重要です。特に理系を選ぶ場合は、数学と化学・物理の基礎が定着している必要があります。高1の段階で各科目の適性を見つめ直し、慎重に選択することが大切です。",
    },
    {
      question: "高校のオープンキャンパスは何年生から参加すべき？",
      answer: "高1後期～高2が最適な時期です。高1から参加することで、大学の教育内容・雰囲気・キャンパス環境を早期に理解でき、学習モチベーションが高まります。高3では受験勉強が忙しくなるため、高2までに複数大学を比較検討することが効率的です。ただし、高1の早期段階では大学の教育内容を完全に理解するのが難しいため、高2での参加をメインと考えるのが現実的です。",
    },
    {
      question: "大学進学を見据えた高1の勉強時間の目安は？",
      answer: "高1の段階では、日々の学校の授業予習復習（1～2時間）＋定期テスト対策（テスト2～3週間前より追加学習）で、平均3～4時間/日の学習時間を確保することが目安です。部活との両立を考慮しても、最低限の学習習慣を構築することが、高2・高3での受験対策に大きく影響します。",
    },
  ];

  return (
    <>
      <SEO
        title="高校入学後の大学進学準備｜1年生から始めるべき勉強習慣と情報収集 | School Station"
        description="高校1年生から大学進学を意識した勉強習慣の作り方、指定校推薦・総合型選抜に必要な高1～2年の評定維持、英語外部試験の早期対策メリット、文理選択のポイント、オープンキャンパスはいつから行くべきかを完全解説。"
        canonical="/column/koukou-shingaku/"
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
            "headline": "高校入学後の大学進学準備｜1年生から始めるべき勉強習慣と情報収集",
            "description": "高校1年生から大学進学を意識した勉強習慣の作り方、指定校推薦・総合型選抜に必要な高1～2年の評定維持、英語外部試験の早期対策メリット、文理選択のポイント、オープンキャンパスはいつから行くべきかを完全解説。",
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
            高校入学後の大学進学準備
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            1年生から始めるべき勉強習慣と情報収集の完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高1から大学進学を意識することの重要性" id="importance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入学直後は、新しい環境への適応や部活動の開始など、何かと忙しい時期です。しかし、大学進学を目指す場合、高1の段階から意識的に学習習慣を構築することは、後々の大学受験の成否を大きく左右します。多くの受験生が高3になって初めて本気で受験対策を始めますが、高1から計画的に準備している生徒との学力差は非常に大きくなります。特に指定校推薦や総合型選抜を狙う場合、高1～高2の成績が直接入試に影響するため、早期準備が不可欠です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>評定平均の積み重ね</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高1の成績は3年間の評定平均に直結します。指定校推薦を狙う場合、評定平均4.0以上が目安のため、高1から定期テスト対策が不可欠です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>基礎学力の定着</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高1で習う英語・数学は、高2・高3での応用問題の土台となります。基礎が定着していなければ、後々の成績向上は困難です。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>入試情報の早期収集</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高1から大学情報を集めることで、文理選択や科目選択が戦略的になります。志望大学の入試要件を知ることが学習の方向性を定めます。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>学習習慣の構築</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高1での学習習慣が、高2・高3の受験対策の効率性を大きく左右します。早期の習慣化が成功の鍵です。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="高1～高2で構築すべき勉強習慣" id="habits">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学進学を目指す高校生には、一貫性のある学習習慣が必要です。部活や学校行事で忙しい高1だからこそ、効率的で持続可能な勉強スタイルを確立することが大切です。
          </Typography>

          <SubSection title="日々の予習復習（毎日1.5～2時間）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業の予習：</strong>各科目の予習に15～20分程度を費やすことで、授業内容の理解度が大きく向上します。教科書を読み、分からない用語を調べておくだけでも効果的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業後の復習：</strong>授業後その日のうちに30分程度かけて、ノートを整理し、わからない部分を教科書で確認します。この習慣が定着すると、定期テスト対策の効率が劇的に向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>週末のまとめ学習：</strong>週末に1週間の学習内容を総復習し、分からない部分を質問カードに記入して先生に質問する習慣を付けます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="定期テスト対策（テスト2～3週間前から）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>テスト2週間前：計画立案と範囲確認：</strong>テスト範囲を把握し、科目ごとに2週間の学習計画表を作成します。1日あたり平均3～4時間の勉強を配分します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>テスト1週間前：ワーク完成・過去問演習：</strong>学校配布のワークを3回以上繰り返し、前年度のテスト問題（あれば）を解いて出題傾向を把握します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>テスト3日前：わからない部分の質問：</strong>テスト直前に分からない部分を先生に質問し、疑問点をテストに持ち込まないようにします。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="英語外部試験対策（高1～）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              多くの大学が英検やTOEICなどの外部試験を入試に活用しています。高1から外部試験対策を開始することで、高3での大学受験時に有利になります。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高1目標：英検準2級合格：</strong>高1までに英検準2級（大学入試の目安）の合格を目指します。週3～4回の英語学習に外部試験対策30分を追加します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高2目標：英検2級合格：</strong>多くの大学で英検2級以上を優遇します。高2の1月受験を目安に準備を進めます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習リソース：</strong>英検対策本、オンライン英会話、YouTube動画など複数のリソースを組み合わせることで、効率的に英語4技能を高められます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="指定校推薦・総合型選抜に必要な評定維持のコツ" id="grades">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            指定校推薦や総合型選抜は、高1～高3の成績が直接評価対象になります。特に評定平均3.8以上が求められる難関大学が多いため、高1段階からの継続的な成績管理が重要です。
          </Typography>

          <SubSection title="評定を上げるための3つのポイント">
            <TableContainer component={Paper} sx={{ mb: 3, border: "1px solid #bcd7c0" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1e782d" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>項目</TableCell>
                    <TableCell align="center" sx={{ color: "#fff", fontWeight: 700 }}>配点割合</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>対策方法</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>定期テスト成績</TableCell>
                    <TableCell align="center">60～70%</TableCell>
                    <TableCell>テスト2～3週間前から学習を開始し、80点以上を目指す。各科目のワークを3回以上繰り返す。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>提出物・課題</TableCell>
                    <TableCell align="center">20～30%</TableCell>
                    <TableCell>提出期限を厳守し、丁寧で正確な提出物を心がける。わからない問題は理解してから提出。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>授業態度・発言</TableCell>
                    <TableCell align="center">10～20%</TableCell>
                    <TableCell>授業に集中し、わかることはしっかり発言する。ノートを整理して作成し、積極的に学習に参加する。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>重要ポイント：</strong>評定は一度下がると、その後の成績向上で取り戻すのが非常に難しくなります。高1段階から確実に評定を維持することが、将来の選択肢を大きく広げます。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="高2での文理選択のポイント" id="bunri-choice">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高2での文理選択は、大学進学後の人生をも左右する重要な判断です。得意不得意だけでなく、志望大学の学部学科が要求する科目や将来のキャリアパスを考慮した選択が必要です。
          </Typography>

          <SubSection title="文理選択の判断基準">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高1での各教科の成績：</strong>理系選択の場合、数学と理科（特に化学・物理）の成績が高1の段階で60点以上ある必要があります。苦手な場合は、高2で急速に対応するのが難しいため、慎重な選択が重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望大学の学部学科：</strong>文系大学を志望する場合は文系、理系大学（工学部・医学部など）を志望する場合は理系を選択します。志望校が決まっていない場合は、保護者や学校の進路指導の先生に相談し、複数の進路オプションを検討します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>得意不得意の正確な把握：</strong>高1の定期テストの成績、高1で習う内容の理解度を正確に把握することが大切です。「何となく得意」ではなく、具体的な点数や理解度で判断します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>適性と興味の確認：</strong>得意科目＝興味のある科目とは限りません。4年間の大学生活を充実させるためには、興味を持ち続けられる分野を選択することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D" }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#E65100", fontWeight: 600 }}>
              文理選択後の変更は困難です。高1の段階で十分に検討し、親や学校の先生に相談した上で、慎重に決定することをお勧めします。
            </Typography>
          </Box>
        </Section>

        <Section title="大学のオープンキャンパス・説明会の活用法" id="campus-visit">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学の雰囲気を直接感じることは、志望校選択や学習モチベーション向上に大きく影響します。高1～高2の早期段階から複数大学を訪問することをお勧めします。
          </Typography>

          <SubSection title="オープンキャンパスの参加時期と活用法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高1後期～高2上期：初回訪問：</strong>志望校（複数）の初回訪問はこの時期が最適です。キャンパスの雰囲気、教育設備、学生の様子を観察し、大学のイメージを膨らませます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高2下期：詳細確認訪問：</strong>文理選択後、具体的な学部学科の説明会に参加し、カリキュラム、入試要件、進学実績などを確認します。複数回訪問することで、大学の理解が深まります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>確認すべき項目：</strong>①キャンパスの立地・環境、②教育設備の充実度、③学生の雰囲気、④入試方法と要件、⑤奨学金制度、⑥卒業生の進路先などを記録しておきます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高3では時間効率を重視：</strong>高3は受験勉強で忙しいため、オープンキャンパス訪問は最小限に留めます。高1～高2での情報収集を十分に行うことが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高1～高2の学習スケジュール例" id="schedule">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            以下は、大学進学を目指す高校生の推奨学習スケジュール例です。部活動や学校行事の状況に応じて、柔軟に調整してください。
          </Typography>

          <SubSection title="毎日の学習スケジュール">
            <TableContainer component={Paper} sx={{ border: "1px solid #bcd7c0" }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1e782d" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>時間帯</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>学習内容</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: 700 }}>時間</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>朝（登校前）</TableCell>
                    <TableCell>その日の授業の予習・音読・確認</TableCell>
                    <TableCell>15～20分</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>放課後</TableCell>
                    <TableCell>部活動または外出</TableCell>
                    <TableCell>60～90分</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>帰宅後（19:00～）</TableCell>
                    <TableCell>授業の復習・提出物・宿題</TableCell>
                    <TableCell>60分</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>夜間（20:00～）</TableCell>
                    <TableCell>復習・問題集演習・英語学習</TableCell>
                    <TableCell>60分</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>週末</TableCell>
                    <TableCell>1週間のまとめ学習・苦手科目の復習</TableCell>
                    <TableCell>180～240分</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mt: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>合計学習時間：</strong>平日2～2.5時間 + 週末3～4時間。この学習習慣が、高3での受験対策の効率性を大きく高めます。
              </Typography>
            </Box>
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
