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

export default function KoukouKagakuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校理科（化学・物理・生物）の勉強法ガイド｜理科選択と大学受験への影響と攻略法" },
  ];

  const faqItems = [
    {
      question: "化学・物理・生物のうち、大学受験に最も有利な選択科目は何ですか？",
      answer: "『理科選択の最適科目は「志望大学」「志望学部」「本人の適性」という3つの要因で決まり、単純に「有利な科目」は存在しない』『医学部志望なら化学と生物の組み合わせ、理工系なら物理と化学の組み合わせが一般的で、これらは各学部で「実施試験」として高い配点を持つ』『ただし、旧帝大などの難関大学では出題難度が大幅に上昇し、得意科目でも高得点が難しくなる』『そのため「受験に有利」という観点より「本人が理解しやすく、継続的に高得点を取れる科目」を選択することが、最終的には合格可能性を最大化する』『目安としては、高1段階での定期テスト成績で、得意科目が明確に見える場合はそれを選択し、複数科目が同等ならば「将来の専攻に直結する科目」を基準に選ぶこと』が現実的な判断方法になります。",
    },
    {
      question: "化学・物理・生物で、それぞれ最初につまずきやすい単元は何ですか？",
      answer: "『化学では「化学式の計算」と「酸塩基平衡」での失点が顕著。理由は「化学式の意味を理解せず、パターン暗記に頼るから』『物理では「力と運動」と「電磁気」での挫折が多く、特に「スカラー量とベクトル量の違い」を理解していないと、どちらの分野も本質的な理解が不可能』『生物では「細胞分裂」「遺伝」での概念理解の不足が原因で、図を見ても「何が起きているのか」が理解できず、暗記に頼る悪循環に陥る』『共通の対策は『最初の単元を完全に理解すること』『図や図解を活用して「視覚化」すること』『実際の事象や現象と理論をリンクさせること』の3点が極めて重要』『この3点を徹底することで、後続の単元の習得が飛躍的に加速する』という『初期投資の重要性』があります。",
    },
    {
      question: "共通テスト理科で高得点を取るための戦略は何ですか？",
      answer: "『大学入学共通テスト理科（選択科目）は『制限時間内での問題読解』『複合的な知識の統合』『データの解釈能力』が評価される』『Ⅰ（60分100点）では約7～8問を解く必要があり、1問あたり7～8分のペースで、かつ正答率75%以上を達成することが高得点の条件』『高得点戦略は『第一に、基礎知識の確実な定着が前提で、教科書の全単元を3回以上読み込むこと』『第二に、過去5年分の共通テスト問題を分析し、『出題パターン』『よく出題される単元』『引っかけやすいポイント』を認識する段階』『第三に、実際の時間制限下での模試演習を週2回実施し、時間管理と判断速度を鍛える段階』『最後に、間違えた問題の『知識不足』『読み間違い』『判断ミス』を分類し、各々に対策を立てることで、着実に得点が向上する』という『段階的準備法』が必須です。」",
    },
    {
      question: "化学・物理・生物で、計算問題で失点しないための対策は何ですか？",
      answer: "『理科の計算問題は「概念理解」と「計算精度」の両方が必須で、片方が欠けると高得点は不可能』『特に共通テストや二次試験では『計算結果の妥当性を判断する能力』『有効数字の扱い』『単位の確認』などの『細部への注意』が合否を分ける』『失点削減戦略は『第一に、基本的な計算式の導出過程を理解すること』『例えば化学の「モル計算」は公式を暗記するのではなく「なぜこの式で計算できるのか」を理解することが最優先』『第二に、計算問題を毎日10～15問解き、計算プロセスを自動化する段階』『この段階では「正答率」より「計算を迅速かつ正確に実行する」ことに注力』『第三に、計算結果の『論理的妥当性』を確認する習慣をつけることで、計算ミスを事前に発見できる』『例えば、「物理の速度が光速を超えている」『化学の物質量がマイナスになっている』などの『物理的にあり得ない結果』を発見することで、ミスをその場で修正可能になる』という『多層的チェック体制』が計算ミス撲滅の鍵です。」",
    },
    {
      question: "医学部志望の場合、理科2科目の選択と勉強配分はどうすべきですか？",
      answer: "『医学部入試では、化学と生物の組み合わせが絶対的多数派で、約90%の医学部がこの2科目の受験を求める』『配点は各科目100点程度で、合計200点中180点以上（正答率90%以上）の達成が難関医学部の合格ライン』『勉強配分の戦略は『高1段階で『化学と生物の基本概念』を完全に理解し、教科書の全内容を3回以上読み込む』『高2段階で『各単元の計算問題と考察問題』を網羅的に演習し、定期テストで90%以上の成績を維持する』『高3段階で『共通テスト対策』と『二次試験対策』の二本立てで、大学別過去問を中心に演習を重ねる』『この段階では化学と生物に毎日3～4時間かけ、得意科目にはやや多めの時間配分をすることで、得点の最大化が実現』『さらに、共通テスト後は『二次試験の出題傾向に特化した対策』に徐々にシフトすることで、本番での得点が著しく向上する』という『段階的重点配分法』が医学部合格に必須です。」",
    },
    {
      question: "理工系大学志望の場合、物理と化学の習得方法に違いはありますか？",
      answer: "『物理と化学は『分野の性質』が大きく異なり、習得方法も明確に区別して考える必要がある』『物理は『現象の本質的理解』が最優先で、例えば「力学」では『力と運動の関係』『エネルギーと仕事の関係』など『物理的法則の本質』を深く理解することで、あらゆる問題に対応可能になる』『そのため、教科書で『公式がなぜ成り立つのか』『現象とどう対応するのか』を繰り返し学習することが最重要』『一方、化学は『物質の性質と反応』を『個別の知識』として習得する側面が強く、例えば「有機化学」では『官能基』『反応パターン』などの『個別知識の積み重ね』が成績を左右する』『そのため、化学は『単元別の系統的な学習』『反応式の丁寧な記述』『繰り返し演習による習得』が効果的』『総合的には、物理と化学に各日4時間かけて勉強する場合、物理に2.5時間（概念理解と問題演習を5:5の比率で）、化学に1.5時間（知識習得と演習を4:6の比率で）という『科目特性に応じた時間配分』が理想的です。」",
    },
  ];

  return (
    <>
      <SEO
        title="高校理科（化学・物理・生物）の勉強法ガイド｜理科選択と大学受験への影響と攻略法 | School Station"
        description="高校理科の勉強法と選択戦略を解説。化学・物理・生物それぞれの特徴と難易度比較、大学受験（医学部・理工系・薬学部）との相性、効率的な暗記と理解のバランス、共通テスト理科の得点アップ法を紹介。"
        canonical="/column/koukou-kagaku/"
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
            "headline": "高校理科（化学・物理・生物）の勉強法ガイド｜理科選択と大学受験への影響と攻略法",
            "description": "高校理科の勉強法と選択戦略を解説。化学・物理・生物それぞれの特徴と難易度比較、大学受験（医学部・理工系・薬学部）との相性、効率的な暗記と理解のバランス、共通テスト理科の得点アップ法を紹介。",
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
            background: "linear-gradient(135deg, #2E7D32 0%, #388E3C 50%, #4CAF50 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校理科の勉強法ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#E8F5E9", maxWidth: 600, mx: "auto" }}>
            化学・物理・生物の勉強法と大学受験への影響・攻略法
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校理科の全体像と選択科目の重要性" id="science-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校理科は化学・物理・生物という「3つの全く異なる分野」で構成され、それぞれ「学習アプローチ」「難易度」「大学受験における役割」が大きく異なる』『特に、高2で「理科選択」を迫られるが、この選択が『受験科目の難度』『勉強時間の必要量』『志望大学の合格可能性』に直結するため、単に「好きな科目を選ぶ」というだけでは不十分』『医学部志望なら化学と生物、理工系なら物理と化学というように、志望学部ごとに「実質的に推奨される選択」が存在し、これを逆行すると受験で大きなハンディキャップを背負う』『さらに、大学入試改革により、共通テストでは『知識の正確性』『データ解釈能力』『複合的な思考力』が従来より重視され、単なる「暗記型学習」では高得点が困難』『このガイドでは、高校理科（化学・物理・生物）の全範囲を体系的に理解し、各科目の特徴に応じた効果的な勉強法と、志望大学別の選択・対策戦略を詳しく解説します』
          </Typography>

          <SubSection title="化学・物理・生物の特徴と学習難易度比較">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>化学</strong> — 『「物質の性質と反応」を学ぶ分野で、「暗記」と「計算」が並行して必要』『特に無機化学では各物質の反応パターンを習得し、有機化学では官能基と反応パターンを理解する必要がある』『難易度は「中程度」だが、習得に必要な時間は長く、250～300時間の学習が必須』『共通テストではやや易しめだが、二次試験では計算問題や複合的な問題が出題され、高い思考力が要求される』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>物理</strong> — 『「力と運動」「電磁気」「波」など物理法則を理解する分野で、「概念理解」が最優先』『暗記量は化学より少ないが、同じ式でも「応用パターン」は無限に近く、『問題解法の工夫』が合否を分ける』『難易度は「高い」で、多くの生徒が挫折しやすい。習得に必要な時間は200～250時間と推定される』『共通テストは標準的な難度だが、難関大学の二次試験では思考力と創意工夫が極めて重要』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生物</strong> — 『「細胞」「遺伝」「進化」など生命現象を学ぶ分野で、「図解による理解」が重要』『計算問題は化学・物理ほど多くないが、『概念理解』が不足すると設問の意図が理解できず、暗記に頼る悪循環に陥りやすい』『難易度は「低～中程度」で、習得に必要な時間は200～250時間と推定される』『ただし、医学部の二次試験では「細胞学」「免疫」など深い知識が要求されるため、単純には「簡単」とは言えない』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="化学・物理・生物の効果的な勉強法と段階的習得" id="science-methods">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『理科の学習は「科目ごとの特性」を理解し、各科目に応じた学習法を採用することが極めて重要』『化学は「個別知識の習得」を重視し、物理は「概念の本質的理解」を重視、生物は「図解による可視化」を重視するというように、学習アプローチを使い分けることで、習得時間を30～40%削減できる』『以下、各科目の効果的な習得法を詳しく解説します』
          </Typography>

          <SubSection title="化学の効果的な習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『化学の習得は「無機化学」と「有機化学」で学習方法を分ける必要がある』『無機化学では『各物質の反応パターン』を習得することが重要で、具体的には①主要な物質（Na、Ca、Al、Fe、Cu、S、P、N、O、Cl等）の性質と反応を各々30個以上習得し、②定期テストで90%以上の成績を維持し、③複数単元を組み合わせた問題を週10問解き、複合的な思考に慣れること』『有機化学では『官能基と反応パターン』の理解が最優先で、各官能基ごとに『特徴的な反応』『記述すべき化学式』を習得する必要がある』『両分野とも、教科書の演習問題を最低3回以上繰り返し解き、手を動かして覚える「アクティブラーニング」が極めて有効』『この方法で3～4か月の継続で、共通テストレベルまで到達可能』
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="物理の効果的な習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『物理の習得は「概念の本質的理解」が全ての基礎で、例えば「力」という概念を「ベクトル量として扱う理由」を理解していないと、力学全般で躓く』『効果的な学習法は①各単元の『根本的な法則』（ニュートンの運動法則、エネルギー保存則、電荷の性質など）を深く理解し、②教科書の「導出過程」を自分で追跡し、なぜその式が成り立つのかを理解し、③実際の現象や事象と理論をリンクさせて、『理論が何を説明しているのか』を把握することが最優先』『その後に『問題演習』に移行し、同じパターンの問題を5～10回繰り返し解くことで、『問題のアプローチ方法』が脳に刻み込まれる』『特に「電磁気」は多くの生徒が苦手とするが、『電場と電位の関係』『磁力と運動の関係』などの『本質的な対応関係』を理解することで、応用問題への対応力が飛躍的に向上する』『この方法で3～4か月の継続で、ほぼ全ての物理問題に対応可能になる』
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="生物の効果的な習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『生物の習得は「図による可視化」が最重要で、『細胞分裂』『遺伝』『進化』などの複雑な現象を『図解を通じて立体的に理解する』ことが高得点の鍵』『効果的な学習法は①各単元を『図解付きで整理する』段階、②教科書の図を10回以上見て、『各図が何を表しているのか』『図の各部分が何を意味するのか』を完全に理解し、③自分で図を描く練習をして、『描きながら理解を深める』段階を踏むこと』『特に「遺伝」は『ポイント（対立遺伝子）』『メイオシス（減数分裂）』『受精』の3つのプロセスが絡み合い、図解なしには理解困難』『ただし、一度図解で理解すれば、応用問題への対応力が急速に向上する』『この方法で2～3か月の継続で、遺伝分野のほぼ全ての問題に対応可能』『その後、他の分野（呼吸と光合成、神経と筋肉、ホルモン調節など）を同様のアプローチで習得することで、生物全体の理解が有機的につながる』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="志望大学別の理科選択と対策戦略" id="science-university">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校理科の選択は、単に「好きな科目を選ぶ」のではなく、『志望学部』『志望大学の入試形式』『本人の得意分野』を総合的に考慮して決定することが極めて重要』『特に医学部志望と理工系志望では「推奨される選択」が異なり、この判断を誤ると、受験段階で大きなハンディキャップを背負う可能性がある』『以下、志望別の選択と対策戦略を詳しく解説します』
          </Typography>

          <SubSection title="医学部志望の場合の理科選択と対策">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『医学部入試では「化学と生物」の選択が約90%で、この2科目の高得点が合格に必須』『選択理由は「医学の基礎知識として生物が必須」『医学部で習う有機化学や生化学の準備として化学が重要』という『直結性』』『対策戦略は『高1段階で化学と生物の基本概念を完全に理解する』『高2段階で各単元の計算問題と考察問題を網羅し、定期テスト90%以上を維持する』『高3段階で共通テストと二次試験の同時対策を実施する』という『段階的重点配分』』『勉強配分としては、化学と生物に毎日4時間かけ、化学に2時間、生物に2時間という『均等配分』が基本だが、共通テスト後は二次試験の出題傾向に合わせて『大学別シフト』を実施』『目安としては、共通テストで化学と生物の合計が185点以上（正答率92%以上）、二次試験で両科目合計180点以上（正答率90%以上）の達成が難関医学部合格の条件』
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="理工系志望の場合の理科選択と対策">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『理工系志望では「物理と化学」の選択が約70%で、特に大学院進学や研究活動を視野に入れる場合は「物理必須」という暗黙の了解がある』『物理が苦手でも「生物を選ぶより物理を頑張る方が受験では有利」という『難易度ではなく、入試制度』による判断が必要』『選択理由は「物理は工学の基礎」『化学は材料工学や化学工学の基礎』という『専攻との直結性』『対策戦略は『高1段階で物理の「力と運動」「エネルギー」の基本をしっかり定着させることが最優先』『高2段階で電磁気・波・熱など全分野を習得し、化学と並行して習得する』『高3段階で各大学の過去問を分析し、出題傾向に特化した対策を実施』という『物理重視の段階的戦略』』『勉強配分としては、物理と化学に毎日4時間かける場合、物理に2.5時間、化学に1.5時間という『物理重視の配分』が理工系では標準的』『目安としては、共通テストで物理と化学の合計が190点以上（正答率95%以上）、二次試験で両科目合計170点以上（正答率85%以上）の達成が難関理工系大学合格の条件』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="共通テスト理科で確実に得点を取るための対策" id="science-common-test">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『大学入学共通テスト理科（選択科目）の最大の特徴は『データ解釈能力』『複合的思考力』『時間制限下での判断速度』の3つが従来の センター試験より大幅に強化された点』『Ⅰ（60分100点）では『知識問題』『計算問題』『グラフ・表の読解』が幅広く出題され、単なる「教科書の知識」では対応困難』『共通テストで高得点（85点以上）を取るには、「基礎知識の確実な習得」と「問題形式への適応」という二つのアプローチが必須』『以下、確実に得点を取るための段階的対策を詳しく解説します』
          </Typography>

          <SubSection title="共通テスト理科対策の3段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階1：教科書の完全習得（高2終了までに完結）</strong> — 『共通テストの致命的な失点は「基礎知識の不足」が原因で、教科書の全範囲を最低3回以上読み込むことが必須』『具体的には①教科書の全章を「最初の読み」「重要ポイント整理」「3回目の理解確認」という3段階で読み込み、②定期テストで90%以上の成績を維持し、③補助教材（図解や参考書）を活用して、『視覚的理解』を強化すること』『この段階で教科書内容を完全に習得していないと、共通テストの応用問題に対応不可』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階2：共通テスト形式への適応（高3春夏）</strong> — 『過去5年分の共通テスト問題を実際の時間制限下で解き、『グラフ・表の読解法』『複合的な設問への対応』『時間管理』を養成』『週2回の模試演習で、本番の環境での対応力を確認』『この段階での目標は『問題形式への完全な慣れ』『正答率75%以上』の達成』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階3：弱点分析と最終調整（高3秋冬）</strong> — 『模試や過去問の結果から『得点できない特定分野』『時間が足りない問題形式』『読み間違いが多い設問』を詳しく分析』『これらを重点的に対策することで、正答率を5～10%向上させることが可能』『特に最後の1ヶ月は、自分の弱点に特化した『ミニ問題集』を作成し、毎日30分復習することで、確実な得点安定性が実現する』
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
