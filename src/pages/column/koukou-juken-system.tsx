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

export default function KoukouJukenSystemPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校入試の種類と仕組み完全ガイド｜推薦・一般・公立・私立の入試制度を解説" },
  ];

  const faqItems = [
    {
      question: "公立一般選抜と公立推薦選抜の違いは何ですか？",
      answer: "公立一般選抜は『学力試験の成績』『調査書（内申点）』『志願理由書』の総合評価で合格者を決める制度です。一方、公立推薦選抜は『中学校の推薦』『調査書』『面接や小論文』を中心に評価し、学力試験を課さない（または軽く見る）制度です。公立推薦選抜は『確実に合格を決めたい生徒』『特定の強みや適性がある生徒』に適していますが、『推薦を失格になるリスク』があるため、『確実に合格できる実力』が必要です。一般選抜は『幅広い選択肢がある』『複数校受験できる』という柔軟性が特徴です。",
    },
    {
      question: "私立高校の一般入試と推薦入試ではどちらが有利ですか？",
      answer: "『有利・不利』は個人の状況によって異なります。私立一般入試は『学力試験が中心』であり、『学力が高い生徒』『入試対策をしっかり行った生徒』に有利です。一方、私立推薦入試（学校推薦・自己推薦）は『内申点』『面接』『小論文』が中心であり、『オールラウンダーの成績』『明確な志望動機』『コミュニケーション能力』がある生徒に有利です。『内申点が高い場合は推薦入試』『偏差値が高く学力に自信がある場合は一般入試』という選択が一般的です。私立高校は『推薦と一般の両方に出願』できる場合が多いため、『複数受験戦略』が有効です。",
    },
    {
      question: "内申点（調査書）は入試にどのくらい影響しますか？",
      answer: "内申点の影響度は『入試制度』『学校』『地域』によって大きく異なります。公立推薦選抜では『内申点が合否の50～80%を占める』ため、極めて重要です。公立一般選抜では『学力試験70～80%、内申点20～30%』程度の配分が一般的です。私立高校では『内申点の扱いは学校によって異なり』、『内申点をほぼ見ない学校』『内申点を重視する学校』など様々です。いずれにしても『内申点が低いと合格難度が上がる』のは共通であるため、『定期テスト対策』『提出物の厳密な提出』『授業の積極的参加』により、『高い内申点を確保する』ことが重要です。",
    },
    {
      question: "都道府県によって入試制度が違うのはなぜですか？",
      answer: "高校入試は『都道府県の教育委員会』が制度を決定するため、『地域ごとに異なる制度』が採用されています。『共通テストを使用する地域』『独自の学力試験を行う地域』『推薦入試の比率が高い地域』『一般入試が主流の地域』など、様々な違いがあります。例えば『東京都の推薦入試』『大阪府の特別選抜』『福岡県の一般選抜』など、各都道府県が独自の制度を運用しています。『引っ越しによって入試制度が変わる可能性』『全国統一ではない制度への対応』が必要なため、『自分の地域の入試制度を正確に理解する』ことが極めて重要です。教育委員会や学校の進路指導の先生に『自分の地域の入試制度』『スケジュール』『求められる資料』を確認することが必須です。",
    },
    {
      question: "複数の高校に受験する場合、どのような戦略を取るべきですか？",
      answer: "複数受験戦略は『リスク分散』『選択肢の最大化』を目的とした重要な戦略です。一般的には『チャレンジ校（合格難度が高い）』『実力相応校（最も合格可能性がある）』『安全校（確実に合格できる）』の3段階を基本に、『各段階で複数校受験する』ことが推奨されます。私立高校については『併願推薦制度（合格後の進学確約なし）』『特待生制度での受験』を活用し、『経済的リスク』『進学先の選択肢』を確保することが重要です。また『公立一般選抜と私立入試のスケジュール』『受験費用』『受験による身体的・精神的負担』を総合的に考慮して、『最適な受験プラン』を立てることが成功につながります。",
    },
    {
      question: "推薦入試で不合格になったら、一般入試で受験できますか？",
      answer: "『推薦入試の結果と一般入試の出願が関連しているかは学校による』という重要な注意点があります。『同じ高校の推薦入試で不合格となった場合、その高校の一般入試には出願できない』という『単願推薦ルール』を採用している学校が多いです。一方『併願推薦制度』『併願可能な推薦制度』を採用している学校であれば『推薦不合格後に同じ高校の一般入試に出願できる』場合があります。したがって『推薦入試に出願する前に』『推薦不合格時の対応』『一般入試との併願の可否』を必ず確認することが重要です。進路指導の先生や学校のパンフレットに『推薦不合格後の扱い』『併願の可否』が明記されているため、『事前の確認』が『後悔のない受験戦略』につながります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校入試の種類と仕組み完全ガイド｜推薦・一般・公立・私立の入試制度を解説 | School Station"
        description="高校入試の主な種類（公立一般選抜・公立推薦・私立一般・私立推薦）の違いと特徴、公立と私立の入試日程の違い、推薦入試の種類（学校推薦・自己推薦・スポーツ推薦）と条件、内申点の計算方法と影響度、都道府県別入試制度の違い、複数校受験戦略を完全解説。"
        canonical="/column/koukou-juken-system/"
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
            "headline": "高校入試の種類と仕組み完全ガイド｜推薦・一般・公立・私立の入試制度を解説",
            "description": "高校入試の主な種類（公立一般選抜・公立推薦・私立一般・私立推薦）の違いと特徴、公立と私立の入試日程の違い、推薦入試の種類（学校推薦・自己推薦・スポーツ推薦）と条件、内申点の計算方法と影響度、都道府県別入試制度の違い、複数校受験戦略を完全解説。",
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
            高校入試の種類と仕組み
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            推薦・一般・公立・私立の入試制度を完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校入試の主な種類" id="shuyo-shurui">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            日本の高校入試は『公立高校』『私立高校』『入試方式』『推薦の種類』などによって、複数の種類に分類されます。同じ『高校入試』といっても『学力試験の有無』『評価基準』『出願条件』『合格後の進学確約』など、入試制度ごとに大きく異なります。高校受験を成功させるためには『自分が対象となる入試制度』『各制度の特徴』『自分の学力や適性に最適な選択肢』を正確に理解することが不可欠です。以下は、高校入試の主要な種類と特徴を詳しく解説します。
          </Typography>

          <SubSection title="公立高校一般選抜">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              公立高校一般選抜は『学力試験（国語・数学・英語・理科・社会の5教科）』『調査書（内申点）』『志願理由書』を総合的に評価して合格者を決定する制度です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力試験の重要性</strong> — 公立一般選抜では『学力試験の成績』が『合格の最重要要因』となります。一般的には『学力試験の成績が70～80%』『調査書が20～30%』という配分で評価されることが多く、『高い学力試験得点』が『ほぼ合格を確実にする』ほどの影響力を持ちます。学力試験は『都道府県が統一した出題内容』『同じ日程での全校実施』という特徴があるため、『全県統一の公正な評価』が行われます。公立高校の人気校では『学力試験で120点満点中100点以上の高得点が必要』といった『非常に高い得点が求められる』傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数校受験が可能</strong> — 公立一般選抜は『多くの都道府県で複数校の出願が可能』という重要な特徴があります。『第一志望校』『第二志望校』『第三志望校』など『複数の学校に出願』して『最も偏差値の高い合格校に進学する』という『段階受験』の考え方が有効です。ただし『各都道府県による異なるルール』『出願校数の制限』『同時出願可能な学校の条件』などが存在するため、『事前の確認』が重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="公立高校推薦選抜">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              公立推薦選抜は『中学校の推薦』『調査書』『面接や小論文』を中心に評価し、『学力試験を課さない（またはごく簡易的な試験のみ）』という制度です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦要件と出願条件</strong> — 公立推薦選抜に出願するには『中学校長の推薦が必須』『内申点が一定基準以上（目安として4.0以上の5段階評価など）』『学習態度や生活指導で問題がない』といった『厳しい条件』が課されます。推薦制度は『学力試験では測定できない素質や適性を持つ生徒』『学校の掲げる教育理念に適合した生徒』を選抜することを目的としているため、『調査書の評価』『面接での印象評価』『小論文での表現力評価』が『重要な判定要素』となります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>単願と併願の違い</strong> — 公立推薦選抜は『単願推薦（推薦合格時の進学確約が条件）』『併願推薦（推薦合格後も他校の一般入試受験が可能）』に分かれます。『単願推薦で合格すれば』『その高校への進学が確定される』ため『精神的安定』が得られますが『他校への出願が不可能』になります。一方『併願推薦』は『合格後も選択肢が残る』という『柔軟性』が特徴ですが『進学確約がない』ため『他校一般入試での合格を狙う』という『二転三転のリスク』があります。自分の適性『確実に合格したい』『複数の選択肢を確保したい』に応じて『適切な推薦方式』を選択することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立高校一般入試">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              私立高校一般入試は『学力試験（英数国など2～4教科）』を中心に合格者を決定する制度であり、『公立一般選抜より学力試験の比重が高い』という特徴があります。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数日程での受験機会</strong> — 私立一般入試は『複数の入試日程』『複数の教科選択パターン』を用意している学校が多く、『1月（北海道・東北地方以外）』『2月（地域によって異なる）』『3月』など『複数日程での出願が可能』です。『同じ高校に複数日程で出願』『異なる高校に出願』など『柔軟な受験戦略』が可能となり『合格の可能性を最大化』できます。ただし『各日程での合格最低点が異なる』『受験者層が異なる』ため『受験日程ごとに難度が変動する』という注意が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>受験費用と特待生制度</strong> — 私立一般入試は『1校あたりの入試出願料が15,000～25,000円程度』『複数日程受験すると総額が高くなる』という『経済的負担』があります。一方『学力試験成績が優秀な場合、授業料が減免される特待生制度』『合格後の進学意思確認なし（併願制度）』により『経済的リスク』を軽減できます。特待生制度で『授業料全額免除』『授業料50%減免』などの待遇が得られれば『実質負担額』が公立高校並みになる場合もあり『経済的理由で進学が困難』という生徒にとって『重要な進学経路』となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立高校推薦入試と専願">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              私立高校推薦入試は『学校推薦』『自己推薦』『スポーツ推薦』など『複数の種類』があり『内申点や面接を中心に評価』される制度です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校推薦と自己推薦の違い</strong> — 『学校推薦（指定校推薦）』は『高校と中学校の間での事前合意に基づき』『特定の中学校から推薦を受けた生徒のみ出願可能』という『狭き門』です。一方『自己推薦』は『生徒本人が直接出願』『学校の推薦が不要』『すべての生徒が出願可能』という『開かれた制度』です。『学校推薦は合格率が高い（80～95%）』『自己推薦は合格率が低い（30～50%）』という『大きな差』があるため『学校推薦への出願機会があれば極めて有利』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スポーツ推薦と進学確約</strong> — 『スポーツ推薦』は『学校の部活動で実績を持つ生徒』『将来その部活動を担う見込みがある生徒』を対象とした『特別な推薦制度』です。スポーツ推薦は『学力試験を課さない』『内申点の基準が緩い』という『有利な条件』がある反面『進学後の部活動継続が暗黙の了解』『進学後の進路変更が困難』という『制約』があります。また『スポーツ推薦による進学』は『学力が低いまま高校に進学する』『大学進学時に学力が足りない』というリスクも存在するため『進学後の学習計画』『大学進学の可能性』を冷静に検討することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="公立と私立の入試日程" id="nittei-hikaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            公立高校と私立高校の『入試日程』『合格発表日』『進学手続きの期限』は『大きく異なる』という重要な特徴があります。受験生は『複数の高校に出願する際の日程調整』『合格から進学手続きまでの期間』『複数合格時の選択のタイミング』を正確に把握することが『適切な受験戦略』につながります。
          </Typography>

          <SubSection title="一般的な入試日程">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立入試（1月～2月中旬）</strong> — 私立高校入試は『1月中旬（大学入試センター試験のような全国模試）』『1月下旬～2月上旬』『2月中旬』など『複数日程』で実施されます。『受験料が必要』『複数日程に複数出願可能』『合格発表は試験から1～3日程度で開始』という『迅速なプロセス』が特徴です。私立入試で『複数合格を獲得』することで『進学先の保険』『経済的負担軽減の選択肢』が確保されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立推薦入試（2月中旬）</strong> — 公立推薦選抜は『一般的に2月中旬（中旬～下旬）』に実施されます。『推薦合格の発表は試験から1週間程度後』『合格確定から入学手続きまで1～2週間』という『短期間での決定』が求められます。『単願推薦で合格すれば』『その時点で進学が確定される』ため『その後の公立一般入試への出願はできない』という『重要な制約』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立一般入試（3月上旬）</strong> — 公立高校一般選抜は『全国的に3月上旬（多くの地域で3月上旬から中旬）』に実施されます。『学力試験は全県統一の同一日程』『合格発表は試験から1週間～10日程度後』『進学手続きの期限は発表から3～5日程度』という『全国統一のプロセス』が特徴です。『公立一般入試での合格確定後は』『高等専修学校への進学変更』『工業高等専門学校への進学変更』など『進路変更の機会が限定される』ため『慎重な進学先選択』が重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点（調査書）の計算と影響" id="naishin-keisan">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『内申点（調査書）』は『中学校3年間の通知表成績』『生活指導記録』『特別活動の記録』などを基に『高校入試の合否判定に用いられる重要な評価指標』です。『内申点の計算方法』『各教科の評価への影響』『内申点と学力試験得点の配分』によって『合格可能性』が大きく左右されるため『正確な理解』が不可欠です。
          </Typography>

          <SubSection title="内申点の計算方法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              内申点は『各教科の成績を数値化』『複数の評価方法の組み合わせ』により計算されます。一般的には『9教科（国語・社会・数学・理科・英語・音楽・美術・保健体育・技術家庭）の通知表成績』『5段階評価の3年間の平均』を『内申点に換算』する方法が採用されている地域が多いです。例えば『全教科で5段階評価の5を取得した場合、内申点は45点満点』『全教科で3を取得した場合、内申点は27点満点』といった『単純な計算ロジック』が用いられます。ただし『都道府県によって異なる計算方法』『特定教科の加重評価』『3年間の全成績の単純平均か最終学年の成績を重視するかの違い』が存在するため『自分の地域の具体的な計算方法』を『進路指導の先生』に確認することが重要です。
            </Typography>
          </SubSection>

          <SubSection title="内申点と学力試験の配分">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立推薦での内申点の重要性</strong> — 公立推薦入試では『内申点が合否の50～80%を占める』という『極めて高い影響度』があります。『内申点が高い（目安として4.2以上）』ことが『推薦資格の前提条件』となり『内申点が低いと推薦を受けることさえ困難』です。このため『中学1年生の時点から定期テスト対策』『提出物の厳密な提出』『授業態度の改善』に『長期的に取り組む』ことが『推薦資格獲得』に不可欠です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立一般での内申点の役割</strong> — 公立一般選抜では『学力試験70～80%、内申点20～30%』という『学力試験重視』の配分が一般的です。しかし『同じ学力試験得点の複数の受験生がいる場合、内申点で順位が決まる』『内申点が極端に低いと合格が困難』という『重要な役割』があります。『内申点を上げること』は『学力試験対策と同等の重要性』があり『両者の バランスを取った受験対策』が『合格を確実にする鍵』となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="複数校受験戦略" id="fukusu-juken">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『複数校受験』は『進学先の選択肢を確保する』『合格可能性を最大化する』『経済的リスクを軽減する』ために『極めて重要な受験戦略』です。『受験料の総額』『身体的・精神的負担』『日程調整』などの『実務的な課題』を克服しながら『最適な受験プラン』を立てることが『成功する受験戦略』につながります。
          </Typography>

          <SubSection title="私立を合格確実にして公立にチャレンジ">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『私立高校で確実な合格を獲得してから』『偏差値が高い公立高校にチャレンジする』という『保険をかけた受験戦略』が一般的です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略1：安全校の私立で合格確保</strong> — 『自分の模試偏差値より5～10ポイント低い私立高校』に『必ず合格できる可能性が高い』『安全校として受験』します。『1月中旬～2月上旬の私立入試で合格を確定させる』ことで『その後の公立入試に向けて精神的に余裕を持って取り組める』という『心理的メリット』があります。安全校での特待生合格により『授業料が減免される場合』『経済的メリット』も大きいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略2：実力相応校の私立にも合格を狙う</strong> — 『自分の模試偏差値と同程度の私立高校』に複数出願し『実力を試す』とともに『実力相応校での合格も確保』します。『複数の私立高校から合格を得る』ことで『進学先の選択肢』が増え『進学後の後悔』を防ぐことができます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略3：公立一般入試で最高峰にチャレンジ</strong> — 『私立で複数の合格を獲得した上で』『3月の公立一般入試で自分の目標とする高校にチャレンジ』します。『既に複数の合格を確保している』という『精神的な安定感』が『本番での実力発揮』を促進し『公立入試での成功確率を高める』という『心理的効果』があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="受験費用と負担の最適化">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『複数校受験』は『受験料が1校15,000～25,000円程度』『複数日程で受験すると総額が高くなる』という『経済的な課題』があります。『特待生制度』『併願推薦での進学確約なし制度』を活用して『経済的負担』を軽減することが重要です。
            </Typography>
          </SubSection>
        </Section>

        <Box sx={{ mt: 5 }}>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
