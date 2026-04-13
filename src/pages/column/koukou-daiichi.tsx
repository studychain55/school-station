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

export default function KoukouDaiichiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の第一志望校の決め方｜偏差値・校風・進学実績で後悔しない学校選び" },
  ];

  const faqItems = [
    {
      question: "第一志望校を決める際に最も重要な基準は何ですか？",
      answer: "第一志望校を決める際には、『学力（偏差値）』『校風・学習環境』『進学実績』の3つの基準が最も重要です。これら3つのバランスを総合的に判断することで、『自分に最適な高校』が見つかります。特に偏差値だけで学校を選ぶと、入学後に『校風が合わない』『学習内容が合わない』という後悔につながりやすいため、学校訪問や説明会を通じて、自分の適性と学校のマッチングをしっかり確認することが重要です。",
    },
    {
      question: "偏差値だけで高校を選んではいけない理由は？",
      answer: "偏差値は『学力レベルの目安』に過ぎず、『学校の良さ』を完全には表していません。高い偏差値の学校でも、『授業のペースが速すぎる』『競争が厳しすぎてストレスになる』『校風が合わない』という理由で、入学後に苦しむ生徒も多くいます。一方、偏差値が低くても『きめ細かい指導』『生徒の満足度が高い』『進学実績が優れている』という学校も多く存在します。大切なのは『自分の学力と目標に合った学校』『自分の性格や価値観と合う校風の学校』を選ぶことです。",
    },
    {
      question: "公立高校と私立高校では、どのような違いがあるのですか？",
      answer: "公立高校は『学費が低い（約30万円/年）』『多様な生徒が集まる』『地域密着型の教育』が特徴です。一方、私立高校は『学費が高い（約80～150万円/年）』『統一された教育方針』『充実した設備や専門教育』『進学実績を重視』という特徴があります。公立高校は『個性の尊重』『自主性の育成』を重視し、私立高校は『明確な進学目標の達成』『専門的スキルの習得』を重視する傾向があります。自分の学習スタイル、経済的事情、将来の進路によって、最適な選択肢が異なります。",
    },
    {
      question: "学校見学や説明会では、どのようなポイントをチェックすべきですか？",
      answer: "学校見学では『校舎の施設や設備』『図書館やパソコン室などの充実さ』『校庭や体育館』をチェックします。説明会では『カリキュラムの内容』『進学実績の詳細（進学先大学、進学率）』『部活動の種類と活動状況』『進路指導の方法』『生徒と先生の関係性』に注目しましょう。また、『在校生や卒業生の話』『学校の雰囲気』『自分がその学校に在学している自分をイメージできるか』という『感覚的な判断』も重要です。",
    },
    {
      question: "複数の高校に興味がある場合、どのように志望校を絞り込むべきですか？",
      answer: "複数の高校に興味がある場合は、『学力レベルの階層化』『進路目標での分類』『校風の適合性』の3つの視点で整理することが効果的です。例えば、『安全圏（確実に合格できるレベル）』『チャレンジ圏（努力すれば合格できるレベル）』『夢圏（目指す高い目標）』に分類し、各レベルで『最も条件が合った学校』を第一志望候補として選定します。最終的には『自分の適性と最も合致している学校』を第一志望に決め、その学校を目指して勉強のモチベーションを高めることが重要です。",
    },
    {
      question: "親と子の志望校の意見が異なる場合、どのように話し合うべきですか？",
      answer: "親と子の意見が異なる場合は『双方の理由を理解する』ことが最初のステップです。子どもが『この学校に行きたい』という理由、親が『別の学校を勧める』理由を冷静に聞き合いましょう。その後、『学力レベル』『進学実績』『親の経済的負担』『本人のやりたいこと』など、具体的なデータを基に『どの学校が最適か』を一緒に考え直します。重要なのは『親の意見も本人の希望も尊重する』という『対話のプロセス』です。最終的には『本人がしっかり勉強する』という前提で、『本人が納得できる学校』を選ぶことが、入学後の学習モチベーション維持につながります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校の第一志望校の決め方｜偏差値・校風・進学実績で後悔しない学校選び | School Station"
        description="高校の第一志望校を決める3つの基準（学力・校風・進路実績）、偏差値だけで決めてはいけない理由、公立と私立の比較（費用・進学実績・校風の違い）、学校見学・説明会を最大限活用する方法、志望校を絞り込むための具体的なステップ、親と子の意見が合わない場合の調整方法を完全解説。"
        canonical="/column/koukou-daiichi/"
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
            "headline": "高校の第一志望校の決め方｜偏差値・校風・進学実績で後悔しない学校選び",
            "description": "高校の第一志望校を決める3つの基準（学力・校風・進路実績）、偏差値だけで決めてはいけない理由、公立と私立の比較（費用・進学実績・校風の違い）、学校見学・説明会を最大限活用する方法、志望校を絞り込むための具体的なステップ、親と子の意見が合わない場合の調整方法を完全解説。",
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
            高校の第一志望校の決め方
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            偏差値・校風・進学実績で後悔しない学校選び
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="第一志望校を決める3つの基準" id="sanshu-kijun">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の第一志望校を決める際には、複数の基準を総合的に判断することが重要です。『偏差値だけで決める』『友人が行くから選ぶ』といった単一の判断基準では、入学後に『こんなはずではなかった』という後悔につながりやすいです。中学3年生が直面する高校選びは、その後の3年間の学習環境を大きく左右する重要な決断です。以下は、志望校決定に際して最も重要な3つの基準について、詳しく解説します。
          </Typography>

          <SubSection title="基準1：学力レベル（偏差値）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              偏差値は『現在の学力と高校の学力レベルがマッチしているか』を判断する重要な指標です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>偏差値の正しい見方</strong> — 偏差値とは『全国の受験生の中での学力位置を数値化したもの』であり、『絶対的な学力』を表すものではありません。例えば、偏差値50は『ちょうど中位の実力』、偏差値60は『上位16%』、偏差値70は『上位2%』に相当します。自分の偏差値が60であれば、『偏差値55～65の高校が現実的な選択肢』となり、『偏差値75以上の高校はチャレンジ校』となります。志望校決定では『自分の偏差値±5の範囲』を目安として、複数の選択肢を検討することが推奨されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>偏差値マッチングの3層構造</strong> — 志望校選びは『チャレンジ校（偏差値+10以上）』『実力校（偏差値±5）』『安全校（偏差値-10以下）』の3層で考えることが重要です。チャレンジ校は『高い目標を設定して努力するモチベーション』を与え、実力校は『最も合格の可能性が高い現実的な選択肢』、安全校は『最悪の場合の保険』として機能します。この3層構造を意識することで、『合格と入学後の学習継続』の両立が実現しやすくなります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="基準2：校風・学習環境">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              校風とは『学校の教育理念』『校内の雰囲気』『生徒と先生の関係性』の総体であり、3年間の学習環境を大きく左右します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>校風の種類と特徴</strong> — 高校の校風には『自由度が高い校風』『規則が厳しい校風』『部活動を重視する校風』『進学実績を重視する校風』など、様々なタイプがあります。『自分のペースで学習したい』というタイプの生徒が『進学実績を重視し、勉強量が多い校風』の学校に入学すると、『勉強が辛すぎる』と感じるようになります。反対に『競争を通じてモチベーションを保ちたい』というタイプが『のんびりした校風』の学校に進学すると、『学習意欲が低下する』という事態が起こります。重要なのは『自分の学習スタイル』『価値観』『性格』に合致した校風の学校を選ぶことです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習環境と進学サポート</strong> — 校風の重要な要素として『進学サポートの充実さ』があります。『1年生から進路指導が行われているか』『予備校講師による特別講座があるか』『放課後の質問対応体制は整っているか』『大学進学実績は継続して伸びているか』といった具体的な施策を確認することが重要です。進学実績が高い学校でも『近年は伸び悩んでいる』場合と『継続して伸びている』場合では、『学校の指導力』が異なります。学校見学や説明会で『在校生の学習風景』『自習室の整備状況』『進学実績の推移』を詳しく確認することが、適切な判断につながります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="基準3：進学実績・将来の進路">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              進学実績とは『高校の卒業生がどの大学に進学したか』を示すデータであり、『学校の指導力』『生徒の学習レベル』を判断する重要な指標です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績の見方と注意点</strong> — 進学実績を見る際には『進学率（大学進学者の割合）』『難関大学進学者数（東京大学、京都大学、早慶など）』『進学実績の推移（過去3～5年）』に注目することが重要です。『今年は東京大学に10名合格した』という1年限りのデータより『毎年東京大学に5～7名程度が合格している』という『継続性』が重要です。学校のパンフレットに掲載されている進学実績は『学校が強調したい実績』である可能性があるため、『学校ホームページの詳細データ』『塾の進学実績ランキング』『大学のホームページの進学者数』を参考に、複数のソースを確認することが推奨されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分の進路希望と学校のマッチング</strong> — 『医学部志望なら医学部進学者が多い学校』『文系進学希望なら文系大学の進学実績が豊富な学校』というように、『自分の進路希望』と『学校の進学実績』が合致していることが重要です。例えば、『医学部志望なのに、その高校から医学部進学者がほとんどいない』という場合、『進学サポート体制が不十分』である可能性があります。自分の進路希望が『まだ決まっていない』場合でも、『多様な進路選択を支援できる学校』『複数分野で良好な進学実績を持つ学校』を選ぶことが、将来的な柔軟性につながります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="公立高校と私立高校の比較" id="kouritsu-shiritsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校選びでは『公立か私立か』という選択も重要な決断です。両者は『教育方針』『学費』『進学実績』『校風』など、多くの側面で異なります。『絶対的にどちらが良い』というわけではなく、『自分の状況に合った選択』をすることが重要です。以下は、公立高校と私立高校の主な違いをまとめたものです。
          </Typography>

          <SubSection title="学費の違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立高校の学費</strong> — 公立高校は『授業料がほぼ無料（2010年から高等学校等就学支援金で授業料が無償化）』であり、年間の負担額は『教科書代・制服代・修学旅行費など』を合わせて約20～30万円です。経済的負担が少ないため『家庭の事情で進学が困難』という生徒でも、質の高い教育を受けることができます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立高校の学費</strong> — 私立高校は『授業料が年間30～50万円』『施設維持費が年間10～20万円』『学費合計が80～150万円』など、公立高校の3～5倍の経済負担があります。ただし『奨学金制度』『特待生制度』『授業料減免制度』など、経済的困難を緩和する制度を導入している学校も多いため、『実際の負担額』は学校によって異なります。進学実績が良い私立高校への進学を希望する場合は『特待生制度の有無』『奨学金制度の内容』を事前に確認することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進学実績・進路指導の違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績の傾向</strong> — 進学実績の上位には『難関私立高校』が占める傾向があります。これは『私立高校が進学実績を競争の重要な要素としている』『充実した進学サポート体制』『よりチャレンジングなカリキュラム』という要因が考えられます。一方、『公立高校全体の進学実績が劣っている』わけではなく、『進学実績トップ層に難関公立高校も存在する』『地域によっては公立高校の方が進学実績が良い』という事情もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進路指導の体制</strong> — 私立高校は『早期からの進路指導』『進学先ごとの個別指導』『土曜日の模試・講座』など、進学実績向上に特化した体制を整えている傾向があります。一方、公立高校は『生徒の自主性を尊重した指導』『多様な進路選択を支援する指導体制』という特徴があります。『親身な指導をしてほしい』という生徒には私立高校が、『自分のペースで学習を進めたい』という生徒には公立高校が適していることが多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="校風の違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立高校の校風</strong> — 私立高校は『統一された教育方針』『校則が比較的厳しい』『学校のアイデンティティが強い』という特徴があります。例えば『宗教系私立高校は宗教教育を重視』『進学実績重視の私立高校は予習復習が多い』というように、『学校の特色が明確』です。多くの生徒がその学校の『教育方針に共感して入学』するため、『校内の価値観が一貫している』という利点があります。その反面『個性の発揮』『自由な選択肢』が制限される場合があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立高校の校風</strong> — 公立高校は『多様な生徒が集まる』『個性や自主性の尊重』『地域の様々な中学から進学』という特徴があります。『様々な背景を持つ生徒との出会い』『幅広い価値観の学習』『生徒の自主性による学校運営』が特徴です。その反面『学校の指導方針が定まりにくい』『進学指導の手厚さが学年や教員による差が大きい』という課題があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="学校見学・説明会を最大限活用する方法" id="gakkou-kenngaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            志望校決定の最も重要なステップは『実際に学校を訪問する』ことです。パンフレットやホームページだけでは『学校の本当の雰囲気』『生徒の実際の様子』『校内環境』を正確に判断することはできません。学校見学と説明会を『情報収集の場』『判断材料の確認の場』として活用することが、後悔のない志望校選びにつながります。以下は、学校見学と説明会を最大限活用するための具体的なポイントです。
          </Typography>

          <SubSection title="学校見学でチェックすべきポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>施設・設備の確認</strong> — 『教室の広さと明るさ』『図書館の蔵書数と利用しやすさ』『コンピュータ室の機器の充実さ』『実験室の設備』『トイレと水飲み場』『昼食スペースの広さ』など、『生徒が実際に利用する施設』を細かくチェックします。『古い学校だから質が低い』わけではなく、『限られた予算で工夫している学校』もあります。重要なのは『施設を大切に使っているか』『必要な環境が整備されているか』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒の様子と校内雰囲気</strong> — 『授業中の生徒の集中力』『廊下での生徒の挨拶や態度』『部活動の様子』『掲示板の内容』『校舎のきれいさ』など、『その学校ならではの雰囲気』を感じることが重要です。『生徒が楽しそうに学んでいるか』『先生と生徒の関係性が良いか』『学校全体が活気に満ちているか』という『感覚的な判断』も、適切な学校選びに不可欠です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="説明会で確認すべき情報">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>カリキュラムと進学実績</strong> — 『1年生のカリキュラムは共通か選択可能か』『2年生以降の文理選択のシステム』『進学実績の詳細（進学者数・大学名・進学率）』『進学実績の推移』を確認します。説明会では『都合の良いデータだけを説明する学校』も多いため、『質問を通じて詳細を引き出す』ことが重要です。例えば『医学部進学者は何名か』『過去5年で何名か』『医学部進学に向けた特別な指導体制があるか』といった『具体的で詳細な質問』をしましょう。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進路指導と大学受験サポート</strong> — 『進路指導はいつから開始するか』『大学別・学部別の進学説明会があるか』『放課後の質問対応体制』『予備校講師による講座の有無』『合宿や特別講座』『進学実績に基づいた入試戦略指導』など、『進学に向けた具体的なサポート内容』を確認することが重要です。『良い進学実績を持つ学校でも、進学指導の内容が充実していない』という場合もあるため、『学校のサポート頼みではなく、自分でも努力する姿勢』を持つことが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="志望校を絞り込むための具体的なステップ" id="kibori-step">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            複数の高校に興味を持つことは自然なことですが、いつかは『第一志望校を決定する』という決断を下す必要があります。以下は、『興味のある複数の高校』から『第一志望校を1つに決定する』ための具体的なステップを示します。
          </Typography>

          <SubSection title="ステップ1：候補校の絞り込み">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              まず『興味のある複数の高校』を『学力レベル』『進路希望』『地域』などで分類します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『安全校3～5校』『実力校3～5校』『チャレンジ校2～3校』に分類し、合計10～13校に絞ることが推奨されます。この段階では『偏差値』『進学実績』『自宅からの距離』など、『客観的な情報』に基づいて分類することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ2：学校見学と説明会への参加">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『実力校』『チャレンジ校』から優先的に学校見学と説明会に参加します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『自分が3年間通う学校』という視点で、『校風』『校内雰囲気』『生徒の様子』を確認します。『優先度の低い学校』から見学することで『比較検討の視点』が磨かれ、『最後に見た学校』の評価がより正確になります。全ての学校を見学した後『記憶が新しい段階』で『見学記録』を整理し、『各学校の特徴』を明確にすることが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ3：評価基準の設定と比較">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『学力レベル』『校風の適合性』『進学実績』『校内施設』『通学の便利さ』など、複数の評価基準を設定し、候補校をスコア化して比較します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『各基準を1～5点で評価』『全体合計スコアを算出』することで、『客観的な比較』が可能になります。ただし『スコアが高い学校が必ずしも最適とは限らない』という点に注意が必要です。『どうしてもこの学校に行きたい』という『感覚的な判断』も重要な要素であり、『理性と感情のバランス』を取ることが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="ステップ4：最終決定">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『比較検討の結果』『親と子の話し合い』を通じて『第一志望校を決定』します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  最終決定後は『迷いなく、その学校を目指して勉強する』という『揺るがぬ決意』が重要です。『第一志望校を決定してから受験まで』の間に『やっぱり別の学校がいいのではないか』と迷い続けると、『勉強のモチベーション』が低下しやすいです。決定した学校の『卒業生の体験記』『学校行事の様子』『進学実績の最新情報』などを読んで、『その学校に対する期待』『やる気』を高めることが推奨されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="親と子の意見が合わない場合の調整方法" id="oyako-chousei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校選びにおいて『親と子の意見が異なる』というケースは珍しくありません。『子どもが希望する学校』と『親が勧める学校』が異なる場合、その後の学習モチベーションや親子関係に大きな影響を与える可能性があります。重要なのは『対立を解消する対話』『相互の理解』『納得できる結論の導き出し』です。以下は、親と子の意見対立を解決するための具体的なプロセスを示します。
          </Typography>

          <SubSection title="意見が異なる原因の分析">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>親の視点</strong> — 親が『別の学校を勧める理由』は『進学実績の懸念』『経済的負担』『通学時間の負担』『親の高校時代の経験』『世間一般の評判』など、複数の要因があります。親の意見は『子どもの将来を思う気持ち』に基づいていることがほとんどです。『親がなぜこの学校を勧めるのか』という『親の真意』を理解することが、対話の第一歩です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>子どもの視点</strong> — 子どもが『特定の学校を希望する理由』は『校風が好き』『学校行事が充実している』『友人が進学する』『部活動が強い』『学舎の雰囲気が好き』など、多くの場合『感覚的な判断』です。親は『子どもの気持ちは分かりにくい』と感じることが多いですが、『子どもが3年間を過ごす学校』として『子どもの気持ちが最も重要』であることを理解することが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="対話のプロセス">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ステップ1：相互の意見を理解する</strong> — 『親と子が落ち着いた環境で話し合う』『互いに『なぜそう思うのか』という理由を丁寧に聞く』という『対話のプロセス』を大切にします。この段階では『説得』『反論』ではなく『相手の気持ちを理解する』ことが重要です。『親はなぜこの学校を心配するのか』『子どもはなぜこの学校に惹かれるのか』という『本当の理由』を知ることで、『対立の本質』が明らかになります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ステップ2：具体的な情報に基づいて検討する</strong> — 『親が心配している項目』『子どもが希望する理由』について『具体的なデータ』『学校訪問による実際の情報』に基づいて再検討します。例えば『親が進学実績を心配している場合』は『その学校の進学実績の詳細』『近年の進学実績の推移』『子どもの成績から見た合格可能性』といった『客観的な情報』を確認します。『子どもが校風を理由に希望している場合』は『実際に学校を訪問して確認する』『在校生や卒業生の声を聞く』という『一次情報の確認』が有効です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ステップ3：妥協点の検討</strong> — 『親と子の意見が平行線をたどる場合』『妥協点』を見つけることが重要です。例えば『経済的理由から親が公立高校を希望し、子どもが特定の私立高校を希望している場合』『特待生制度で授業料が減免される私立高校を検討する』という『第三の選択肢』が見つかる場合があります。『子どもが特定の地域の学校を希望し、親が通学時間を心配している場合』『実際に通学経路を確認してみる』ことで『懸念が払拭される』こともあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ステップ4：『本人の決意』を重視した決定</strong> — 最終的には『子どもが納得し、そしてしっかり勉強する』ことが最も重要です。『親が強く反対している学校に無理に進学させれば』『子どもが反発してやる気を失う』可能性があります。逆に『子どもが納得できない学校に進学すれば』『『こんなはずではなかった』という後悔』が生まれやすいです。『親と子が最終的に納得できる学校』『子どもが『この学校で頑張る』という決意を示す学校』を選ぶことが、入学後の学習継続につながります。
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
