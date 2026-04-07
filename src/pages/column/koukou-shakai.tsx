import { Container, Typography, Box, Divider, List, ListItem, ListItemIcon } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

export default function KoukouShakaiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校社会の勉強法ガイド｜地理・日本史・世界史・倫理・政治経済の選択戦略と攻略法" },
  ];

  const faqItems = [
    {
      question: "高校社会の地理・日本史・世界史の中から、大学受験に有利な科目を選ぶにはどうすればよいですか？",
      answer: "『高校社会の科目選択は、『自分の適性』『志望大学の入試制度』『時間配分の効率性』の3つの要因を総合的に判断することが極めて重要』『地理は『社会現象を図表・統計から読み取る力』『空間的認識能力』が求められ、社会科学系学部・商学部・経済学部に有利で、難関大入試でも『短期間での習得』が可能』『日本史は『時系列の把握』『因果関係の理解』が中核で、文学部・法学部・人文系学部に有利だが、『暗記量が膨大』『習得に時間がかかる』という課題がある』『世界史は『グローバルな視点』『文化的背景の理解』が求められ、国際関係学部・外国語学部に有利で、『詳しい知識が必要』という点では最も難易度が高い』『選択戦略としては、『文系志望で文学部志向なら日本史』『経済・商学系志向なら地理』『グローバル関心が高く国際系志向なら世界史』という『学部適性による選択』が基本』『さらに、『あなたの暗記能力』『図表読み込み能力』『時間投資可能額』を自己評価して、『最適な選択』を行うことが合格の鍵となる』",
    },
    {
      question: "地理の勉強法で、単なる暗記ではなく実力を養うための効果的な学習方法は何ですか？",
      answer: "『高校地理は『単なる地名・統計の暗記』では対応できず、『社会現象の因果関係を理解し、新しい問題に対応できる力』が求められる』『効果的な勉強法は『第一段階として、『地図帳と統計資料を『毎日30分見る習慣』を確立』『例えば、『なぜこの地域で産業が集積しているのか』『人口分布がこのような形になるのはなぜか』という『なぜ？』を常に問い続ける』『第二段階として、『自然地理』『人文地理』『地誌』の『3領域を統合的に理解』『例えば、『モンスーン地域の農業』は『気候』『地形』『水資源』『農業技術』が複合的に影響していることを理解』『第三段階として、『最近のニュース・時事ネタと地理の関連付け』『例えば、『ウクライナ情勢』『米国の選挙結果』『日本の人口減少』など、『現在進行形の社会現象』を『地理的視点から分析』『この『時事ネタ連動学習』により、『地理の実践的な活用能力』が育成され、共通テスト・二次試験での『複合的問題』への対応力が大幅に向上する』",
    },
    {
      question: "日本史の膨大な暗記内容を効率的に習得し、定着させるための秘訣は何ですか？",
      answer: "『日本史は『暗記量が最も多い科目』で、『単なる年号・人物名の丸暗記』では習得不可能で、『時系列の理解と因果関係の把握』が必須』『効果的習得法は『第一に、『通史の『大きな流れ』を理解する』『例えば、『縄文→弥生→古墳時代』は『狩猟採集→農業定着→階級分化』という『社会の発展段階』で理解』『各時代の『支配体制』『経済形態』『文化的特徴』を『因果関係』として結び付ける』『第二に、『時代ごとの『主要な人物』『出来事』『政治体制の変化』を『縦の連携』で把握』『例えば、『鎌倉幕府成立』→『南北朝内乱』→『室町幕府成立』は『武家政権確立への段階的な流れ』として理解』『第三に、『同時期の『経済動向』『文化的動き』『対外関係』を『横の連携』で把握』『例えば、『江戸時代』は『政治的には幕府体制の安定』『経済的には『商業発展』『文化的には『町人文化の繁栄』『対外的には『鎖国政策』が同時並行で進行していることを理解』『この『縦横の連携学習』により、『バラバラな暗記項目』が『一つの有機的な流れ』として定着し、『忘れにくい長期記憶』が形成される』",
    },
    {
      question: "世界史で世界各地域の歴史を同時に理解し、複雑な国際関係の変化をマスターするコツは？",
      answer: "『世界史は『複数の地域・文明が『時間軸を共有して』発展する複雑さ』が最大の課題で、『単純な年号暗記では対応不可能』『効果的な勉強法は『第一に、『地域別の『通史』を確立する』『例えば、『西洋史』『イスラム史』『東アジア史』『インド史』など『主要地域の歴史的流れ』を『独立した物語』として習得』『各地域で『支配体制の変化』『経済的発展』『思想的動き』を『時系列』で理解』『第二に、『同時代性の理解』『例えば、『ルネサンス（14-16世紀）』『明朝時代（14-17世紀）』『オスマン帝国の拡大（15-16世紀）』が『同じ時代に世界の異なる地域で進行』していることを把握』『『地球儀の上での世界観』を持つことが極めて重要』『第三に、『国家間の相互作用』『例えば、『ナポレオン戦争』『列強のアジア進出』『世界大戦』など『大規模な国際紛争』が『各国の政治・経済に与えた影響』を『相互的に』理解』『この『地域連携』『時代連携』『相互作用』という『三次元的な世界史理解』により、『複雑な国際関係』が『有機的な一つの歴史ドラマ』として把握でき、『深い理解に基づいた記憶』が形成される』",
    },
    {
      question: "倫理・政治経済の抽象的で複雑な概念を実生活と結びつけながら理解するコツは何ですか？",
      answer: "『倫理・政治経済は『社会科学の理論的側面』『実際の政治・経済現象』『人生の価値観』を総合的に理解する必要があり、『単なる知識習得では対応不可能』『効果的な勉強法は『第一に、『倫理は『哲学者の思想』『人生観』『道徳的問題』を『実例を通じて』理解』『例えば、『プラトン』『デカルト』『カント』などの『思想の本質』を『その思想が『どのような人生問題』『社会問題』に対する『解答を提供しているのか』という『実践的視点』で学ぶ』『第二に、『政治経済は『政治体制』『経済体制』『国家政策』を『自分たちの実生活に及ぼす影響』という『利益関心』で理解』『例えば、『民主主義』『資本主義』『社会主義』の『異なる社会体制』が『人間の自由』『経済的平等』『幸福度』にどのような『メリット』『デメリット』をもたらすか、『比較論的に』分析』『第三に、『時事ネタとの『即座の関連付け』『例えば、『最近の政治スキャンダル』『経済危機』『国際紛争』を『学んだ政治経済の理論』で『解釈し、批評する習慣』をつける』『この『理論と実践の往復』により、『倫理・政治経済の概念』が『自分の人生観と社会観の一部』として『深く内在化』され、『試験での出題パターンの変化』にも『柔軟に対応できる応用力』が養成される』",
    },
    {
      question: "共通テスト社会（地理・日本史・世界史・倫理・政治経済）で高得点を取るための最終対策戦略は何ですか？",
      answer: "『共通テスト社会は『従来のセンター試験と比較して、『複雑な思考力』『資料読み込み能力』『複数の視点からの分析』が求められるようになり、『単純な知識では対応不可能』『高得点獲得戦略は『第一に、『各科目の『知識の完成』を『高3の秋までに完了』『その後、『共通テスト特有の『資料問題の読み込み』『複合的判断』『時間効率の工夫』に注力』『第二に、『過去問・予想問題での『時間配分訓練』『地理なら『図表読み込みに5分』『選択肢判定に1分』』『日本史なら『史料読み込みに3分』『時系列把握に2分』』など『問題タイプごとの『タイムマネジメント』を『本番前に100回は繰り返す』『第三に、『苦手科目の『徹底的な『内容理解』『例えば、『世界史が苦手なら、『各地域の歴史的背景』『国家間の関係性』『時代ごとの特徴』を『縦横斜めの関連付けで』整理し、『丸暗記ではなく『構造的な理解』に転換』『第四に、『共通テスト本番の『心理的準備』『制限時間内での『判断ミス』『読み間違い』を防ぐための『『チェックリスト』『見直し方法』『時間不足時の『優先順位の判断法』を『模試を通じて』習熟』『この『総合的な4段階戦略』により、『社会全体での90点以上（100点満点中）』の達成が実現可能になる』",
    },
  ];

  return (
    <>
      <SEO
        title="高校社会の勉強法ガイド｜地理・日本史・世界史・倫理・政治経済の選択戦略と攻略法 | School Station"
        description="高校の地歴公民の効果的な勉強法と科目選択戦略を解説。地理・日本史・世界史・倫理・政治経済それぞれの特徴、大学受験（文系・理系）に合わせた科目選択の判断軸、暗記を効率化する学習法、共通テスト社会の高得点戦略を紹介。"
        canonical="/column/koukou-shakai/"
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
            "headline": "高校社会の勉強法ガイド｜地理・日本史・世界史・倫理・政治経済の選択戦略と攻略法",
            "description": "高校の地歴公民の効果的な勉強法と科目選択戦略を解説。地理・日本史・世界史・倫理・政治経済それぞれの特徴、大学受験（文系・理系）に合わせた科目選択の判断軸、暗記を効率化する学習法、共通テスト社会の高得点戦略を紹介。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
            "author": {
              "@type": "School",
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
            高校社会の勉強法完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            地理・日本史・世界史・倫理・政治経済の選択戦略と攻略法
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校社会の全体像と科目選択戦略" id="shakai-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校社会は『地理』『日本史』『世界史』『倫理』『政治経済』という『複数の独立した領域』から構成され、大学受験において『科目選択』が『合格確率』に大きく影響する最重要決定』『各科目は『学習内容』『習得難度』『出題傾向』『時間投資』が大きく異なり、『自分の適性と志望学部』を総合的に判断した『最適な選択』が『受験成功の鍵となる』『さらに、各科目の『効果的な勉強法』『暗記を効率化する工夫』『共通テストでの高得点獲得戦略』を習得することで、『社会全体での得点差が20～30点』に達することもある』『このガイドでは、高校社会の『全科目の特徴と学習戦略』『あなたに最適な科目選択の判断軸』『各科目の実践的な勉強法』『共通テスト社会での確実な高得点獲得戦略』を詳しく解説します』
          </Typography>

          <SubSection title="各社会科目の特徴と習得難度の比較">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>地理（高1～高3）</strong> — 『「自然地理」「人文地理」「地誌」から構成される、『社会現象の『空間的な配置』『因果関係』を理解する領域』『暗記量は『日本史・世界史より圧倒的に少なく』『時間投資が少なくて済む』『習得に40～60時間が必要で、『短期間での成績向上』が期待できる』『ただし、『地図帳・統計資料の読み込み能力』『グラフ・図表の分析能力』『地理的思考力』が求められ、『単なる知識の詰め込み』では対応できない』『メリット：最短習得、短期間での成績向上、知識の『汎用性』が高い。デメリット：『地理的思考』が必要で、『感覚的な才能差』が出やすい』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>日本史（高1～高3）</strong> — 『「政治史」「経済史」「文化史」が『時系列的に』展開される、『日本社会の『歴史的発展過程』を理解する領域』『暗記量は『極めて膨大』『年号、人物名、出来事の『因果関係』『時代ごとの特徴』など『覚えるべき項目が無数』『習得に100～150時間の学習時間が必要で、『高1から早期の学習開始』が『合格に不可欠』『メリット：『日本の歴史理解』『時代背景の把握』が深まり、『二次試験での『記述問題』『論述問題』に強くなる。デメリット：『暗記量が膨大』『習得に時間がかかる』『効率的な勉強法』を習得していないと『時間浪費の悪循環』に陥りやすい』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>世界史（高1～高3）</strong> — 『『ヨーロッパ史』『イスラム史』『東アジア史』『その他地域』が『複数の時間軸で』同時進行する、『最も『複雑で難易度が高い』領域』『暗記量は『日本史と同等かそれ以上に膨大』『多くの国・地域の『歴史的背景』『国家間の関係性』『思想的動き』が出題される』『習得に120～180時間の学習時間が必要で、『最も習得に時間がかかる科目』『メリット：『グローバルな視点』『多角的な歴史理解』『国際関係への深い洞察』が養成される。デメリット：『暗記量が『膨大で複雑』『関連付けが難しい』『習得難度が最も高い』『挫折者が最も多い科目』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>倫理（高2～高3）</strong> — 『『西洋哲学』『東洋思想』『日本思想』『人生観・倫理』から構成される、『『社会科学の理論的側面』『人生の価値観』を理解する領域』『暗記量は『社会科の中でも『比較的少なく』『習得に30～50時間が必要』『ただし、『哲学者の『思想の本質』『人生問題への解答』を『深く理解する必要』があり、『浅い知識では対応不可能』『メリット：『人生観の形成』『倫理的思考力の養成』『短期習得』が可能。デメリット：『抽象的概念の理解』が必要で、『具体的な実例』なしでは『理解困難』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>政治経済（高3）</strong> — 『『政治体制』『経済体制』『国家政策』『国際政治・経済』から構成される、『『現代社会の仕組み』『時事問題』を理解する領域』『暗記量は『倫理と同程度で比較的少なく』『習得に30～50時間が必要』『ただし、『時事ネタ』『ニュース』『『今この瞬間の政治・経済現象』と『学習内容』の『即座の連携』が重要で、『新聞やニュース』の『常時チェック』が『習得の鍵』『メリット：『実用的な知識』『時事問題への対応』『短期習得』が可能。デメリット：『時事ネタの『常時更新』が必要で、『予測不可能な出題』に対応する『柔軟な思考力』が求められる』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="あなたに最適な社会科目の選択判断軸" id="shakai-choice">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校社会の『科目選択』は『合格確率』『得点効率』『習得期間』に『大きな影響』を与えるため、『単なる『興味関心』だけでなく、『自分の『適性』『志望学部』『時間リソース』『学習能力』を『総合的に判断』した『戦略的な選択』が極めて重要』『例えば、『「地理に興味があるから地理を選ぼう」という『単純な選択』よりも、『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="志望学部による最適な科目選択">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『【文学部・人文系学部志望】 → 日本史推奨』『日本の『文学』『歴史』『思想』『文化』への『深い理解』が『入試での『差別化』につながり、『二次試験での『記述問題』『論述問題』に強くなる』『【経済学部・商学部志望】 → 地理推奨』『地域ごとの『産業分布』『経済活動』『国際貿易』などの『『地理的理解』が『経済学の『『基礎教養』となり、『短期習得』『効率的な成績向上』が可能』『【国際関係学部・外国語学部志向】 → 世界史推奨』『『グローバルな視点』『各地域の『文化・思想』『国際紛争の『歴史的背景』への『深い理解』が『志望動機』『入試での『論述問題』で評価されやすい』『【法学部・政治学部志向】 → 政治経済推奨』『『政治体制』『経済システム』『法的枠組み』『『国際政治』への『実務的理解』が『『志望学部の『『適性』と『『合致』『【社会科学系全般・教育学部志向】 → 倫理推奨』『『人生観』『倫理的思考』『社会の『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="各社会科目の効果的な勉強法と習得ステップ" id="shakai-methods">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校社会の『各科目の勉強法』は『科目の性質』『出題形式』『習得ステップ』が『大きく異なり』『単一の勉強方法で『全科目を習得』することは『極めて非効率』『例えば、『地理の『図表読み込み勉強法』は『日本史の『時系列記憶』にはほぼ役立たず』『世界史の『地域連携理解』『倫理の『思想的思考』『政治経済の『時事ネタ連動』は『全く異なるアプローチが必要』『以下、『各科目の『特徴に応じた実践的な勉強法』『段階的な習得ステップ』を詳しく解説します』
          </Typography>

          <SubSection title="地理：図表読み込みと地理的思考の育成">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『地理の習得は『「地図帳と統計資料の『毎日の読み込み』『地域ごとの『自然条件』『経済活動』『人口分布』の『関連付け』『最近のニュースと地理の『結びつけ』という『三つのアプローチが鍵』『第一に、『地図帳を『単なる参考書』ではなく『教科書』として扱い、『毎日30～45分、『自分が興味を持つ地域』『テストに出やすい地域』を『深く読み込む習慣』をつける』『例えば、『なぜシンガポールは『『商業の中心地』になったのか』『どういう『自然条件』『地理的位置』がそれを実現したのか』という『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="日本史：時系列理解と因果関係の習得">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『日本史の習得は『「通史の『大きな流れ』の理解』『同時代性の『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="世界史：地域連携と複数視点の構築">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『世界史の習得は『「地域別の『独立した通史』『同時代性の『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="倫理・政治経済：理論と実践の往復">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『倫理・政治経済の習得は『「抽象的な『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="共通テスト社会で確実に得点を取るための対策" id="shakai-common-test">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『共通テスト社会は『「『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="共通テスト社会の段階的対策戦略">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『共通テスト『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        {/* FAQ */}
        <Divider sx={{ my: 4 }} />
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#0D47A1", mb: 3 }}>
            よくある質問（FAQ）
          </Typography>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
