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

export default function KoukouNaishinshoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "内申書（調査書）の仕組みと高校受験への影響｜内申点アップのための具体的な対策" },
  ];

  const faqItems = [
    {
      question: "内申書（調査書）と内申点は何が違いますか？",
      answer: "『内申書（調査書）』は『中学校3年間の成績・生活指導・特別活動の記録を記載した公式文書』であり、『内申点』は『その記録から算出された数値化された評価スコア』です。内申書はA4用紙に記載される『定性的な情報』（成績が優秀、学習態度が前向き、部活動で活躍など）を含みますが、内申点は『9教科の5段階評価×学年数などの数式で計算された定量的スコア』です。高校入試では『内申点の数値が直接的に合否判定に用いられる』ため、『内申点の重要性』が極めて高いです。ただし『内申書の定性的情報』も『面接官の印象形成』『補欠判定時の参考資料』として活用される重要な情報です。",
    },
    {
      question: "都道府県によって内申点の計算方法が違うのはなぜですか？",
      answer: "『内申点の計算方法』は『各都道府県の教育委員会』が独自に設定するため、『全国統一ではない』という重要な特徴があります。例えば『東京都は9教科×5段階×3年間=最高45点』『大阪府は中3の9教科のみ評価=最高45点』『福岡県は特定教科を加重計算』など、『地域ごとに異なる計算ロジック』が採用されています。『都道府県によって異なる』のは『各地域の教育方針』『地域の受験競争の実態』『高校入試制度の特徴』に対応するためです。自分の地域の具体的な計算方法を『進路指導の先生に確認する』『教育委員会のウェブサイトで確認する』ことが『不可欠な準備』となります。",
    },
    {
      question: "内申点が低い場合、高校入試に合格できますか？",
      answer: "『内申点が低くても高校入試に合格することは可能』ですが『受験戦略の調整』が必要です。『公立推薦選抜は内申点が極めて重要』なため『内申点が低いと推薦資格がない』という場合がありますが、『公立一般選抜では学力試験の成績が最重要』『内申点は参考資料程度』という位置づけの学校もあります。『私立高校では内申点をほぼ見ない学校』『内申点を重視しない学校』も多く存在するため『内申点が低い場合は私立高校を中心に受験する』『当日の学力試験に全力で取り組む』『内申点の比重が低い高校を選択する』といった『柔軟な受験戦略』で対応可能です。進路指導の先生に『内申点が低い場合の受験可能性』『推薦資格の有無』を相談することが重要です。",
    },
    {
      question: "内申点を上げるために最初にすべきことは何ですか？",
      answer: "『内申点を上げるための最初のステップ』は『定期テストの得点を上げること』です。『通知表の成績の大部分』は『定期テストの得点で決定される』ため、『定期テスト対策が内申点向上の最優先課題』です。具体的には『テスト2週間前から勉強を開始する』『教科書・教材の重要ポイントをノートに整理する』『過去問題を何度も解く』『弱点分野を集中的に学習する』などの『計画的で継続的な学習習慣』が必要です。次に重要なのが『提出物の厳密な提出』『授業中の積極的な発言』『授業態度の改善』といった『学習への姿勢の改善』です。『テスト対策と同時に日常の学習習慣を改善する』という『両輪の取り組み』が『内申点向上の効果的な方法』です。",
    },
    {
      question: "欠席や遅刻が内申点に与える影響はどのくらい大きいですか？",
      answer: "『欠席・遅刻・早退』は『調査書に明記される重要な情報』であり『内申点に直接的な減点はされない場合が多い』ですが『高校入試の合否判定時に重大な悪影響』を与えます。『公立推薦選抜の推薦資格条件』に『欠席日数が○日以下』『遅刻がない』という『厳しい条件』が設定されている場合がほとんどです。『欠席が多い生徒』『遅刻が常習的な生徒』は『推薦を受けることすら困難』になり『推薦資格を失う』という『極めて大きな影響』を受けます。また『公立一般選抜や私立入試でも』『欠席や遅刻が多い生徒』は『面接時に厳しく追及される』『合否判定時に不利な評価』を受ける可能性が高いです。『欠席・遅刻を徹底的に減らす』ことが『高校入試での機会を最大化する』ために『極めて重要な対策』です。",
    },
    {
      question: "内申点が低い場合の高校選びの戦略は？",
      answer: "『内申点が低い場合の高校選びの戦略』は『内申点の扱いが軽い高校を選択する』『当日の学力試験が合否に及ぼす影響が大きい高校を選ぶ』『私立高校を中心に受験する』という『現実的な対応』が必要です。具体的には『公立高校は内申点の配分が高い傾向があるため避ける』『私立高校で内申点をほぼ見ない学校を選ぶ』『当日の学力試験で高得点を狙える科目を中心に学習する』『複数の私立高校に出願して合格の確保を優先する』といった『内申点の低さをカバーする戦略』が有効です。また『内申点が低い原因』（成績が低い・提出物を出していない・授業態度が悪い）を『早急に改善する』ことで『今からでも内申点を上げる可能性』が残されています。『今からできる改善』と『現実的な高校選び』を『組み合わせた受験戦略』が『最も効果的な対応』です。",
    },
  ];

  return (
    <>
      <SEO
        title="内申書（調査書）の仕組みと高校受験への影響｜内申点アップのための具体的な対策 | School Station"
        description="高校入試で重要な内申書（調査書）の仕組みを完全解説。記載内容（成績・欠席日数・特別活動・資格）、内申点の計算方法（地域差）、高校受験への影響度（公立一般は当日点+内申点の配分）、内申点を上げるための具体的対策（定期テスト・提出物・授業態度）、欠席・遅刻のマイナス影響、内申点が低い場合の受験戦略を完全ガイド。"
        canonical="/column/koukou-naishinsho/"
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
            "headline": "内申書（調査書）の仕組みと高校受験への影響｜内申点アップのための具体的な対策",
            "description": "高校入試で重要な内申書（調査書）の仕組みを完全解説。記載内容（成績・欠席日数・特別活動・資格）、内申点の計算方法（地域差）、高校受験への影響度（公立一般は当日点+内申点の配分）、内申点を上げるための具体的対策（定期テスト・提出物・授業態度）、欠席・遅刻のマイナス影響、内申点が低い場合の受験戦略を完全ガイド。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            内申書（調査書）の仕組み
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            高校受験への影響と内申点を上げるための具体的対策
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="内申書（調査書）とは何か" id="naishinsho-gaiyou">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入試で極めて重要な『内申書（調査書）』は『中学校が作成する公式な評価文書』であり、『生徒の3年間の学習成績』『生活態度』『特別活動での実績』『課外活動での成果』などの『多面的な情報』を記載した『高校入試の重要な資料』です。『内申書に記載される情報』は『学力試験では測定できない生徒の適性や素質』を評価するために『極めて重要な役割』を担っており、『特に推薦入試では合否判定の中心』となります。『内申書に何が記載されるのか』『どのような情報が高校入試に影響するのか』を正確に理解することが『高校受験の成功』に不可欠です。
          </Typography>

          <SubSection title="内申書の主な記載内容">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習成績</strong> — 『国語・社会・数学・理科・英語・音楽・美術・保健体育・技術家庭の9教科』について『5段階評価』『各学年の成績』『3年間の成績推移』が記載されます。『各教科の成績は定期テストの得点』『小テストの成績』『授業への参加度』『提出物の提出状況』などを総合的に判定した『総合評価』です。『成績が上昇傾向にある場合は高く評価される』『成績が低下している場合は懸念される』という『成績の推移』も『重要な評価要素』となります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>欠席日数・遅刻・早退の記録</strong> — 『3年間の欠席日数』『遅刻の回数』『早退の回数』が『定量的に記載』されます。『欠席日数が多い（10日以上）』『遅刻が常習的（月1回以上）』『学校への来校意思が低い』と判断される生徒は『調査書に負の評価が記載される』『推薦資格を失う可能性がある』という『極めて重大な影響』を受けます。『公立推薦の推薦資格条件』に『欠席日数が○日以下』という『厳しい制限』が設定されている場合がほとんどです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>特別活動（部活動・生徒会）での実績</strong> — 『部活動での役職（部長・副部長など）』『県大会・全国大会での成績』『生徒会での役職』『委員会活動での主な活動内容』などが『記載』されます。『特別活動での実績』は『学力試験では測定できない生徒のリーダーシップ』『協調性』『継続性』『社会性』を『定性的に評価する重要な情報』です。『推薦入試では特別活動での実績が求められる場合が多い』『特別活動での成果が面接での評価に直結する』という『重大な役割』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>資格・検定試験の成績</strong> — 『英検』『漢検』『数検』『TOEIC』などの『外部資格試験の成績』『取得した資格』が『記載されることがある』という『プラスの評価要素』です。『英検2級取得』『数検3級取得』などの『難度の高い資格』は『内申点の加点対象』『推薦資格の優遇条件』『奨学金申請の加点』など『複数の形で有利に働く』という『重要な実績』です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点の計算方法と地域差" id="naishin-keisan">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『内申点』は『内申書に記載された各教科の成績を数値化した評価スコア』であり、『高校入試の合否判定』『推薦資格の判定』『奨学金申請』など『多くの重要な場面で活用される』『極めて重要な評価指標』です。『内申点の計算方法』は『都道府県ごとに異なる』という『重要な特徴』があり『自分の地域の具体的な計算ルール』を『正確に理解する』ことが『受験計画の第一歩』となります。
          </Typography>

          <SubSection title="一般的な内申点の計算方法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『最も一般的な内申点の計算方法』は『9教科の通知表成績（5段階評価）×3年間の平均』という『シンプルな方式』です。例えば『全教科で5を取得した場合、内申点は45点（9科目×5段階×3年÷3年）』『全教科で3を取得した場合、内申点は27点』といった『直感的に理解しやすい計算ロジック』が採用されている地域が多いです。ただし『都道府県によって異なる計算方法』『特定教科の加重計算』『最終学年のみの評価』など『地域固有のルール』が存在するため『教育委員会のウェブサイト』『学校の進路指導資料』で『自分の地域の正確な計算方法』を『必ず確認する』ことが重要です。
            </Typography>
          </SubSection>

          <SubSection title="地域によって異なる計算パターン">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>パターン1：3年間の全科目全成績を平均（東京・神奈川など）</strong> — 『9教科×5段階×3年間すべての成績を総合評価』『最高点が45点』『最低点が9点』という『最もシンプルな方式』です。『中学1年生の成績も重要』『3年間を通した継続的な成績向上が評価される』という『長期的な成績管理が重要』という特徴があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>パターン2：中学3年生のみの成績を評価（一部地域）</strong> — 『中学3年生の通知表成績のみを内申点の計算対象とする』『最高点が45点』『中学1年・2年の成績は直接的には反映されない』という『最終学年重視』の方式です。『中学3年生での成績向上が重要』『中学1年・2年で低い成績でも中学3年生で巻き返すことで高い内申点を獲得できる』というチャンスが存在します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>パターン3：特定教科の加重計算（一部地域）</strong> — 『英数国などの主要5教科を2倍に評価する』『芸術系科目を通常評価する』など『教科によって異なる配点』が採用される場合があります。『主要5教科の成績が高い』『得意な教科を活かした受験戦略』が『より効果的』という『科目別の戦略立て』が重要になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点が高校受験に与える影響度" id="naishin-eikyo">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『内申点』は『高校入試の種類』『学校のレベル』『地域の入試制度』によって『極めて異なる影響度』を持つという『重要な特徴』があります。『公立推薦では内申点が合否の最重要要因』『公立一般では学力試験が最重要で内申点は補助的役割』『私立高校では内申点をほぼ見ない学校も多い』という『入試形態による大きな違い』を理解することが『適切な受験戦略』につながります。
          </Typography>

          <SubSection title="入試形態による内申点の重要性の違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立推薦選抜での内申点（合否の50～80%を占める）</strong> — 『公立推薦選抜は内申点が最重要評価要素』『内申点が高い（目安として3.8以上）』『学力試験がない、または簡易的な試験のみ』『面接・小論文が重要』という『総合評価』が特徴です。『推薦資格そのものが内申点に基づいて決定される』『内申点が低いと推薦を受けることすら困難』『推薦合格の可能性が内申点に極めて大きく左右される』という『内申点が合否を決定する最重要要因』としての位置づけです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立一般選抜での内申点（合否の20～30%程度）</strong> — 『公立一般選抜は学力試験が70～80%を占める』『内申点は20～30%程度の配分』『同じ学力試験得点の複数受験生の順位決定時に内申点が活用される』という『補助的ながら重要な役割』を担います。『学力試験で高得点を取得できれば内申点が低くても合格可能』『学力試験で失敗した場合に内申点が順位を左右する』という『条件付きの重要性』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立高校での内申点（学校によって大きく異なる）</strong> — 『私立高校では内申点の扱いが極めて多様』『内申点をほぼ見ない学校』『内申点を参考程度に扱う学校』『内申点を重視する学校』『入試形態によって異なる扱い』など『学校ごとに大きく異なる』という『特徴』があります。『各私立高校の募集要項を詳しく確認する』『学校説明会で内申点の扱いを質問する』『内申点が低い場合は内申点をほぼ見ない学校を選ぶ』という『戦略的な高校選び』が重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点を上げるための具体的な対策" id="naishin-ageru">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『内申点を上げる』ことは『高校入試の成功』『推薦資格の獲得』『奨学金申請時の加点』など『多くの場面で極めて重要』です。『内申点を上げるための具体的な対策』は『定期テスト対策』『提出物の厳密な提出』『授業態度の改善』『欠席を減らす』などの『実行可能で効果的な具体的行動』です。『今からできる改善』『短期間での成果が期待できる対策』から『優先的に取り組む』ことが『効率的な内申点向上戦略』につながります。
          </Typography>

          <SubSection title="定期テスト対策による内申点向上">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『定期テストの成績が通知表評価の最重要要因』『定期テストの得点向上が内申点向上に直結する』という『シンプルで効果的な方法』です。『テスト2週間前から計画的に勉強を開始する』『教科書・教材の重要ポイントをノートに整理する』『過去問題を繰り返し解く』『弱点分野に集中的に取り組む』『テスト1週間前から本格的な対策を開始する』という『段階的で継続的な勉強習慣』が『テスト成績向上の鍵』となります。『全教科で平均して成績を上げる』ことが『内申点向上に最も効果的』『得意な教科の成績を維持しつつ、苦手な教科の成績を向上させる』というバランスが重要です。
            </Typography>
          </SubSection>

          <SubSection title="提出物と授業態度の改善">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>提出物の期限内提出と質の向上</strong> — 『提出物（宿題・ワークシート・レポート）を期限内に提出する』『提出物の質を高める（丁寧な字・誤字脱字がない・解答の根拠を記載）』『提出物を出さないことが成績低下につながる』という『極めてシンプルながら効果的な対策』です。『提出物を出さない生徒は成績が低くなる傾向が強い』『定期テストの成績は良いのに提出物がないため成績が下がった』というケースが存在するため『提出物の提出を絶対条件』として捉えることが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業中の積極的な参加と学習態度の改善</strong> — 『授業中に手を上げて発言する』『先生の質問に対して積極的に答える』『わからないことを質問する』『ノートを丁寧に取る』『授業に集中する』という『授業への前向きな態度』が『成績評価の重要な要素』となります。『成績は定期テストだけで決まるのではなく、授業態度が大きく影響する』『授業に真摯に取り組む姿勢が成績向上につながる』という『実態を理解する』ことが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="欠席・遅刻が内申点に与えるマイナス影響" id="kesseki-eikyo">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『欠席・遅刻・早退』は『内申点の直接的な減点にはならない場合が多い』ですが『内申書に記載される負の情報』『推薦資格の喪失』『面接での厳しい追及』『合否判定時の不利な評価』など『多くの形で大きな悪影響』を与えるという『極めて重大なマイナス要因』です。『欠席・遅刻を絶対に減らす』『学校への来校を優先する』ことが『高校入試での機会を最大化する』『推薦資格を確保する』ために『極めて重要な基本的対策』となります。
          </Typography>

          <SubSection title="推薦資格への影響">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『公立推薦選抜の推薦資格条件』には『欠席日数が○日以下（多くの場合3日～10日以内）』『遅刻がない、または月1回以内』『学校生活に問題がない』という『厳しい条件』が設定されている場合がほとんどです。『欠席が多い生徒』『遅刻が常習的な生徒』は『中学校長から推薦を受けることができない』『推薦資格を自動的に失う』という『極めて重大な影響』を受けます。『推薦入試が選択肢から除外される』『当日の学力試験で高得点を取得することが絶対条件』という『厳しい受験環境』を余儀なくされるため『欠席・遅刻を絶対に防ぐ』ことが『受験の幅を広げる』ために『極めて重要』です。
            </Typography>
          </SubSection>

          <SubSection title="一般入試での評価への影響">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接での厳しい追及</strong> — 『高校の面接試験で欠席や遅刻について質問される』『理由を説明する必要がある』『学校への来校意思の有無を疑われる』『高校進学後の出席状況について懸念を持たれる』という『ネガティブな印象形成』につながります。『説得力のある理由がない場合（体調不良や家庭の事情がない）』『面接官に不信感を与える可能性がある』『合否判定に悪影響する可能性がある』という『極めてリスクの高い状況』が生まれます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>内申点への直接的な悪影響</strong> — 『欠席が多い生徒は授業に参加していない』『学習活動の積み重ねが不足』『提出物の提出状況が悪い傾向』『テスト成績が低くなる傾向』という『間接的ながら確実な悪影響』が発生します。『結果として通知表の成績が低下する』『内申点が低くなる』という『悪循環』が生まれるため『欠席を減らすことが内申点向上の基本』となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点が低い場合の受験戦略" id="naishin-hikui">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『内申点が低い』という『不利な状況』でも『適切な受験戦略』『現実的な高校選び』『当日の学力試験への全力投球』によって『高校合格を実現することは可能』です。『内申点の低さを言い訳にするのではなく』『今からできる改善』『実現可能な受験戦略』を『冷静に判断して実行する』ことが『受験の成功』につながります。
          </Typography>

          <SubSection title="推薦入試の可能性の判定と戦略">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『内申点が低い場合、まず確認すべきこと』は『自分が推薦資格を満たしているかどうか』です。『推薦資格の内申点の基準』『欠席日数の制限』『生活指導上の問題がないか』を『進路指導の先生に確認する』『教育委員会のウェブサイトを確認する』ことが『第一ステップ』です。『推薦資格を失う可能性が高い場合』『公立推薦を避けて公立一般・私立高校に集中する』『当日の学力試験対策を最優先』するという『現実的な選択』が重要です。『推薦資格を満たしている場合』『推薦入試にチャレンジする価値がある』『複数の推薦候補校を検討する』という『柔軟な戦略』も可能です。
            </Typography>
          </SubSection>

          <SubSection title="高校選びの基本戦略">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立高校中心の受験戦略</strong> — 『内申点が低い場合、私立高校は内申点をほぼ見ない学校が多い』『当日の学力試験が最重要評価要因』『実力に合わせた高校選択が可能』という『内申点の低さをカバーしやすい選択肢』です。『複数の私立高校に出願』『安全校から実力校までをバランスよく受験』『合格の確保を優先する』という『戦略的な受験計画』が有効です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立高校選択での注意点</strong> — 『内申点が低い場合、公立高校受験は困難』『内申点の配分が20～30%である点を活かして、学力試験で高得点を狙う』『内申点の配分が低い高校（学力試験重視の学校）を選択する』という『戦略的な選択』が必要です。『当日の学力試験で90点以上（満点100点の場合）を取得する』『絶対的な学力優位性を示す』ことで『内申点の低さを補完する』という『実力による挽回』が必要となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Box sx={{ mt: 5 }}>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
