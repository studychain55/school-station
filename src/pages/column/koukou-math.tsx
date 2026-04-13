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

export default function KoukouMathPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校数学の勉強法完全ガイド｜数学I・II・III・A・Bの攻略と共通テスト・二次試験対策" },
  ];

  const faqItems = [
    {
      question: "高校数学I・II・III・A・Bはどの順番で学ぶべきですか？",
      answer: "『高校数学は段階的な積み上げが極めて重要で、学習順序は「数学I→数学A→数学II→数学B→数学III」という『標準的な学習進度』が推奨される』『数学Iは関数・二次関数・三角比など高校数学の基本概念が集約されており、ここで完全な理解を達成することが最優先』『数学Aは確率・整数などの論理的思考が必要な分野で、Iの後に学ぶことで抽象的思考能力を養成される』『その後、数学IIで対数・微積分の基本へ進み、数学Bで数列・ベクトルを習得』『最終段階の数学IIIは微積分の応用で、IIの内容を完全に理解していないと習得困難』『この流れに沿った学習により、各単元の論理的つながりが明確になり、効率的な習得が実現する』」という『段階的習得の重要性』があります。『ただし、大学共通テストや二次試験の時間制限を考慮すると、全てを完璧に学ぶのではなく、出題確率の高い単元（微積分・ベクトル・確率）に学習資源を集中することが現実的な戦略』になります。",
    },
    {
      question: "数学が苦手な高校生が克服するには何から始めるべきですか？",
      answer: "『数学が苦手な生徒の多くは、「高1の数学I」で躓いており、基本概念の理解不足が積み重なって、後の学年で完全に追いつけなくなる』という『根本的な原因』があります。『したがって、まず『中学数学の復習』が必須で、一次関数・二次関数・図形の基本性質などを30～50時間かけて確実に定着させることが非常に重要』『この段階を飛ばして高校数学に進むと、概念理解がぐらつき、何度解いても同じミスを繰り返す悪循環に陥る』『第二段階として、高校数学Iの「二次関数」から学習を開始し、毎日1～2時間、同じ単元を5～10回繰り返し解くことで、基礎が定着』『この時点では「参考書の多読」ではなく「一冊の参考書を完全に理解する」というアプローチが効果的』『第三段階として、各単元の「本質的な考え方」を理解することに注力し、公式の暗記だけではなく「なぜそうなるのか」という推論過程を大切にすることで、応用問題への対応力が向上する』という『段階的克服法』が確実です。『加えて、月1回の模試受験と弱点分析により、自分が何を理解していないかが明確になり、学習効率が飛躍的に向上』します。",
    },
    {
      question: "共通テスト数学で70点以上を確実に取るための対策は何ですか？",
      answer: "『大学入学共通テスト数学は「時間制限の厳しさ」と「思考力の要求」が特徴で、単なる公式暗記では対応不可』『共通テストのⅠA（70分・100点）では約14問、ⅡB（70分・100点）では約12問を1分30秒～5分で解く必要があり、素早い判断と計算速度が極めて重要』『70点達成の戦略は『第一に、基礎計算の速度と正確性を鍛える段階』『素因数分解・分数計算・√の計算などを毎日20分かけて訓練し、これらを無意識にできるレベルまで自動化することで、複雑な問題に思考力を振り向ける余裕が生まれる』『第二に、過去5年分の共通テスト問題を丁寧に分析し、出題パターンと問題形式に慣れる段階』『特に「データの分析」「確率」「図形」は毎年出題されるため、これらの分野に学習資源を集中投下』『第三に、実際の時間制限下での演習を週2回実施し、時間内に解き終わる力を習得する段階』『この時点で正答率が70%以上なら、確実に共通テストで70点達成可能』『さらに、間違えた問題の「なぜ間違えたのか」を「計算ミス」「概念不理解」「時間不足」に分類し、対策を立てることで、着実に得点が向上』という『実践的対策法』が極めて有効です。」",
    },
    {
      question: "証明問題・図形問題を得意にするために必要な勉強法は何ですか？",
      answer: "『高校数学の「証明問題」と「図形問題」は、計算問題とは異なる思考プロセスが必要で、「定理や性質を活用して論理を構築する力」が不可欠』『証明問題が苦手な生徒の多くは、「与えられた条件から何を導き出せるか」「どの定理を使えば結論に達するか」という『戦略的思考』が不足している』『克服方法は『第一段階として、代表的な定理（中線定理・余弦定理・相似条件など）の意味を深く理解し、なぜその定理が成立するのかを自分で導出してみること』『この過程で証明の「型」が脳に刻み込まれる』『第二段階として、教科書の証明例を20～30個丁寧に分析し、各証明の「流れ」を把握する段階』『ここで重要なのは「暗記」ではなく「なぜこの順番で論述するのか」という『論理の流れ』を理解すること』『第三段階として、自分で新しい証明問題に挑戦し、試行錯誤を通じて「正しい論理の構築法」を習得する段階』『この段階では最初失敗して当然で、10回失敗して1回成功する確率で、徐々に証明力が向上』『加えて、図形問題については「図を正確に描く力」が極めて重要で、毎日10分かけて図を描く練習をすることで、空間認識能力が劇的に向上する』という『段階的習得の極意』があります。」",
    },
    {
      question: "二次試験の数学で難関大学（旧帝大・早慶）に合格するレベルに到達するには？",
      answer: "『難関大学の二次試験数学は、単なる「高い計算能力」では対応不可で、『複合的な思考力』『時間管理』『過去問対策』という3つの要素が必須』『旧帝大（東大・京大・阪大など）や早慶の数学は、1問あたり30～45分の時間をかけて、複数の単元の知識を統合して解く問題が出題され、「どの単元を組み合わせるか」という『メタ的思考』が求められる』『達成戦略は『第一に、高2段階で数学I～Bの全範囲を完全習得し、各単元を「独立した知識」ではなく「有機的につながった知識体系」として理解する段階』『これは共通テストではなく二次試験対策の準備期間で、120～150時間かけて基礎を完成させることが重要』『第二に、高3の4月から「難問演習」に移行し、教科書の練習問題よりはるかに難しい問題に毎日2時間挑戦する段階』『具体的には「大学への数学」「やさしい理系数学」などの参考書で、複数の単元を組み合わせた問題を繰り返し解く』『この段階で重要なのは「正答率」ではなく「複雑な問題のアプローチ方法を学ぶこと」』『第三に、志望大学の過去10年分の過去問を分析し、『出題単元の傾向』『時間制限内の解法戦略』『採点者が評価する「答案の書き方」』を把握する段階』『同じ大学の過去問を5回以上解くことで、その大学特有の出題パターンと時間管理が習得される』『最終的には、実戦さながらの模試形式で、正答率70%以上の安定性を達成することが難関大合格の条件』という『高度な習得プログラム』が必須です。」",
    },
    {
      question: "数学の「式展開・計算」で失点しないために何をすべきですか？",
      answer: "『高校数学では「概念理解は100点だが、計算ミスで30点失う」という悲劇が頻繁に起こる』『特に共通テストや二次試験では、計算ミスが直結で失点となり、「一つのミスが大問全体の失点につながる」という『カスケード的失敗』が発生する』『失点削減戦略は『第一に、毎日の計算トレーニングが極めて重要で、①素因数分解、②分数の約分、③√の計算、④因数分解、⑤展開式の計算を毎日15～20分かけて継続すること』『このトレーニングにより、手が「正確な計算」を無意識に実行するようになる』『第二に、解答時は「計算の「個別ステップを紙に書く習慣」をつけることが不可欠』『暗算や飛ばし書きは、計算ミスの温床。一行一行、確実に書くことで、ミスをその場で発見できる』『第三に、本番の試験では『見直し時間を必ず確保し』『計算結果が「論理的に妥当か」『単位や符号が正しいか』『極値や定義域の制約に違反していないか』を確認する習慣をつけること』『この「見直し文化」により、本番での計算ミス激減が実現する』『実際に受験成功者の多くは「早く解く」ことより「確実に正答する」という『質重視の姿勢』を優先している』という『精密性重視の戦略』が計算ミス撲滅の鍵です。」",
    },
  ];

  return (
    <>
      <SEO
        title="高校数学の勉強法完全ガイド｜数学I・II・III・A・Bの攻略と共通テスト・二次試験対策 | School Station"
        description="高校数学の効果的な勉強法を解説。数学I・II・III・A・Bそれぞれの特徴と攻略法、共通テスト数学の頻出パターンと対策、数学が苦手な生徒のためのやり直し方法、証明問題・図形問題の解き方を紹介。"
        canonical="/column/koukou-math/"
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
            "headline": "高校数学の勉強法完全ガイド｜数学I・II・III・A・Bの攻略と共通テスト・二次試験対策",
            "description": "高校数学の効果的な勉強法を解説。数学I・II・III・A・Bそれぞれの特徴と攻略法、共通テスト数学の頻出パターンと対策、数学が苦手な生徒のためのやり直し方法、証明問題・図形問題の解き方を紹介。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校数学の勉強法完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            数学I・II・III・A・Bの攻略と共通テスト・二次試験対策
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校数学の全体像と学習戦略" id="math-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校数学は中学数学から大幅に難易度が上がり、抽象的な概念理解と計算の複雑さが飛躍的に増す』『特に数学I・IIで登場する関数・微積分・ベクトル・確率などは、日常生活の直感では理解困難な「数学的思考」が必須』『この「思考のギャップ」を埋めるために、単なる「公式の暗記」ではなく「概念の本質的理解」が極めて重要』『さらに、大学入試改革により、共通テストでは「時間制限下での複合的思考」が求められ、従来の「計算問題を時間をかけてじっくり解く」というアプローチは通用しない』『二次試験では「複数の単元を統合した難問」が出題され、単元ごとの知識の単純な積み重ねではなく、「全体を俯瞰した知識構造」の構築が必須』『このガイドでは、高校数学I～IIIの全範囲を体系的に理解し、共通テストから二次試験まで対応できる勉強法を詳しく解説します』
          </Typography>

          <SubSection title="数学I・A・II・B・IIIの位置付けと学習優先度">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>数学I（高1必須）</strong> — 『二次関数・三角比・指数対数など高校数学の基礎概念が集約された必修分野。全範囲の習得に100～150時間の学習時間が必要で、この段階での理解度が全体成績を左右する最重要単元』『共通テストでも毎年出題され、確実な基礎構築が不可欠』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>数学A（高1並行）</strong> — 『確率・整数・図形の性質など、数学Iと異なる思考角度の内容。抽象的・論理的思考が強く求められ、「なぜそうなるのか」という推論力が重要』『共通テストのⅠAで重点配点され、確実な対策が合格に直結』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>数学II（高2主体）</strong> — 『複素数・微分・積分など、Iよりはるかに難易度が上がる内容。特に微積分は「面積計算」「最大値最小値」など実践的な応用が豊富で、二次試験頻出単元』『習得に120～150時間必要で、丁寧な段階的学習が必須』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>数学B（高2並行）</strong> — 『数列・ベクトル・統計が含まれ、IIと並行して学習される。特にベクトルは立体図形の問題で強力で、二次試験では頻繁に登場』『各単元で80～100時間の学習を要し、着実な進度管理が重要』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>数学III（高3主体）</strong> — 『微分・積分の応用と極限が中心で、理系大学の二次試験では必ず出題される。IIの微積分と比較して『抽象度と計算難度が3～4倍上昇』『IIの完全習得がないと習得困難で、最低でも150～200時間の学習時間が必須』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="各数学単元の効果的な勉強法と習得ステップ" id="math-steps">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『数学の学習は「単元ごとに異なるアプローチ」が必要で、全ての分野に同じ勉強方法を適用すると、非効率で習得が遅れる』『例えば、「関数分野」は「グラフ描画による視覚化」が鍵で、「確率分野」は「論理的推論と場合分けの厳密性」が鍵、「ベクトル分野」は「座標系の理解と図形とのリンク」が鍵となる』『各単元の特性に応じた学習法を採用することで、習得時間を30～50%削減できる』『以下、代表的な単元の効果的勉強法を詳しく解説します』
          </Typography>

          <SubSection title="二次関数・図形問題の習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『二次関数は高校数学の核で、この分野の習得度で数学全体の成績が決まると言っても過言でない』『効果的学習法は、①教科書の基本例題5～10個を通じて「頂点形」「標準形」「因数分解形」の3つの表現形式の使い分けを理解、②グラフ描画トレーニングを毎日30分継続し、方程式⇄グラフの相互変換を自動化、③判別式・軸・最大値最小値などの「重要な量」が何を意味するのかを深く理解、④最大値最小値問題を週5問解き、複数の制約条件を組み合わせた複雑な問題に対応力を養成する』『この方法で3～4週間の継続で、ほぼ全ての二次関数問題に対応可能になる』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『図形問題が苦手な生徒は、多くの場合「図を描く力の不足」が根本原因』『改善方法は、毎日15～20分かけて『図を丁寧に描く習慣』をつけることで、空間認識能力が劇的に向上』『さらに、『定理や性質を「図の上に書き込む習慣」』をつけることで、論理と図形のリンクが強くなり、証明問題の難度が急速に低下』『具体的には、相似・平行線・垂直・角度などの基本的な関係を『図に色分けして表示する』ことで、「見える化」が達成され、解法が明確になる』
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="微分・積分の習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『微分は「変化率（傾き）を求める操作」、積分は「面積を求める逆操作」という『本質的な意味』を深く理解することが最優先』『多くの生徒は公式「f\'(x)」「∫f(x)dx」を無思考に適用するが、これでは応用問題で対応不可』『習得法は、①「平均変化率」から「微分係数」への論理的導出を理解し、②各基本公式（xⁿの微分など）が「なぜそうなるのか」を導出し、③実際に最大値最小値・接線・速度などの『実践的意味』を持つ問題を繰り返し解く』『この方法で4～5週間の継続で、微分のほぼ全ての応用問題に対応可能』『積分も同様に、「面積」「体積」「道のり」などの『具体的な対象』を意識しながら学習することで、抽象的な計算が意味を持つようになり、習得が加速する』
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="確率・統計の習得法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『確率は「場合分けの厳密性」と「論理的推論」が極めて重要な分野で、曖昧な思考では失点が多い』『習得法は、①和の法則・積の法則・条件付き確率などの基本的な考え方をしっかり理解、②「サイコロ2個」「カード抽出」など『具体的なシナリオ』で繰り返し練習し、③複雑な条件付き確率では『樹形図や表』を使った「可視化」を心がけることで、ミスが激減』『共通テストのデータの分析では、『平均・分散・標準偏差・相関係数』などが出題されるが、単なる計算ではなく『数値の意味』を理解することが得点差につながる』『1か月の継続で、ほぼ全ての確率・統計問題に対応可能になる』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="共通テスト数学で確実に得点を取るための対策" id="math-common-test">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『大学入学共通テスト数学の最大の特徴は『時間制限の厳しさ』『思考力の要求』『複数単元の組み合わせ』である』『ⅠA（70分100点）では約14問、ⅡB（70分100点）では約12問を、1問あたり1分30秒～5分で解く必要があり、「素早い判断と計算」が極めて重要』『また、従来のセンター試験と異なり、『複数の条件を組み合わせた文章読解』『段階的な設問構成（前の問いの答えを次の問いで使う）』『記述的な思考プロセスの記入』などが求められる』『これに対応するには、単なる「問題演習」ではなく「共通テスト特有の戦略」が必須』
          </Typography>

          <SubSection title="共通テスト対策の3段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階1：基礎計算の完全自動化（高2終了までに完結）</strong> — 『共通テストの致命的な失点は「計算ミス」であり、複雑な問題を時間内に解くためには、基礎計算が完全に自動化されていることが必須』『具体的には①素因数分解・②分数計算・③√の計算・④因数分解・⑤展開式を毎日10～15分かけて訓練』『この段階で計算が自動化されていると、複雑な問題も時間内に解ける余裕が生まれる』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階2：共通テスト形式への習慣化（高3春夏）</strong> — 『過去5年分の共通テスト問題を実際の時間制限下で解き、『問題形式への慣れ』『時間管理スキル』『複数単元の統合的思考』を養成』『週2回の模試演習で、本番の緊張感や時間の使い方を体験的に習得』『この段階での正答率が60%以上なら、本番で70点達成は確実』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段階3：弱点分析と最終調整（高3秋冬）</strong> — 『模試や過去問の結果から『得点できない特定単元』『時間が足りない分野』『計算ミスが頻繁な単元』を分析』『これらを重点的に対策することで、本番での得点率を5～10%向上させることが可能』『特に最後の1ヶ月は、自分の弱点に特化した『ミニ参考書』を作成し、毎日30分復習することで、確実な得点安定性が実現する』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="二次試験数学で難関大学に合格するための高度な対策" id="math-advanced">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『旧帝大・早慶などの難関大学の二次試験数学は、共通テストとは比較にならないほど難易度が高く、『複数単元の統合』『証明問題の論理構築』『計算の正確性と速度』『時間管理の工夫』など、多次元的な能力が求められる』『これらの大学の数学は『1問あたり30～45分の時間をかけて、複雑な問題を論理的に解く力』を評価するため、共通テスト対策とは大きく異なるアプローチが必須』『以下、難関大学合格レベルに到達するための高度な対策を詳しく解説します』
          </Typography>

          <SubSection title="難関大学数学対策の段階的アプローチ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高2段階：基礎の完全習得と知識の有機化</strong> — 『難関大合格には、高2段階で数学I～Bの全範囲を完全習得し、各単元を『独立した知識』ではなく『有機的につながった知識体系』として理解することが極めて重要』『具体的には、高2中にI～Bの全範囲を「標準的な参考書」を使って完成させ、その後「発展的な問題」を週5～10問解き、複数単元を組み合わせた思考になじむ』『この段階での習得度が、高3での難問演習の効率を左右するため、ここで手を抜くと後々大きな障害になる』『目安としては、高2終了時に『標準的な参考書の全ての例題が解けて』『複数単元の統合問題も解けるレベル』に到達することが必須』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高3春夏段階：難問演習と解法パターンの習得</strong> — 『高3から本格的な難問演習に移行し、教科書レベルをはるかに超える問題に毎日2～3時間挑戦』『使用教材は「大学への数学」「やさしい理系数学」など、出題単元の傾向に合わせて選定』『重要なのは『正答率』ではなく『複雑な問題のアプローチ方法を学ぶこと』で、最初の段階では正答率40%程度が目安』『難問に挑戦する過程で『どのような工夫が有効か』『どこで見通しを立てるか』という『メタ的思考』が育成され、これが後々の本番で大きな威力を発揮する』『週1回の模試受験で、実際の試験環境での対応力を確認することも重要』
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高3秋冬段階：過去問分析と最終仕上げ</strong> — 『志望大学の過去10年分の問題を詳しく分析し、『出題単元の傾向』『時間内での解法戦略』『部分点の取り方』『答案の書き方』を把握』『同じ大学の過去問を『最初の5回は参考書を見ながら解く』『次の3回は時間制限なしで解く』『最後の2回は本番形式で解く』という段階的アプローチが効果的』『この過程を通じて『その大学の出題傾向への完全対応』が実現し、本番での正答率が顕著に向上する』『最後の1ヶ月は『苦手単元の最終調整』と『計算ミス撲滅の訓練』に注力』『目安としては、本番での正答率70%以上の安定性を達成することが難関大合格の条件』
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        {/* FAQ */}
        <Divider sx={{ my: 4 }} />
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#1e782d", mb: 3 }}>
            よくある質問（FAQ）
          </Typography>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
