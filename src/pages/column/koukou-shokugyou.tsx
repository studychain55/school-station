import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

export default function KoukouShokugyouPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校のキャリア教育・職場体験ガイド｜大学選びと将来の仕事を考えるきっかけ作り" },
  ];

  const faqItems = [
    {
      question: "高校のキャリア教育とは何ですか？",
      answer: "キャリア教育とは『自分の適性を理解し』『将来のキャリアパスを考え』『社会人として必要なスキルを身につける』ための教育活動です。文部科学省が推進する重要な教育分野であり『職場体験』『インターンシップ』『職業講話』『大学出前授業』『進路指導』などで構成されています。高校時代に『実際の仕事現場を経験する』『働く大人の話を聞く』『自分の適性を試す』という『実践的な体験』を通じて『漠然とした進路希望』が『具体的な目標』に変わります。特に『進路決定時期（高2～高3）』での『キャリア教育の充実』は『進学後の満足度』『進路実現率』に大きく影響します。",
    },
    {
      question: "職場体験とインターンシップの違いは何ですか？",
      answer: "職場体験とインターンシップは『期間』『内容』『対象学年』で異なります。職場体験は『3～5日間程度の短期間』『多様な職種を体験する』『中学生向けの一般的な教育プログラム』です。一方、インターンシップは『1～3ヶ月程度の中期間』『特定の職種を深く理解する』『高校生・大学生向けの本格的な就業体験』です。高校では『1年生時の職場体験』で『幅広い職種を知る』『働くことの意味を考える』という『啓発的な体験』を行い、『2年生以降』は『自分の関心分野に特化したインターンシップ』で『実践的なスキル習得』を目指します。",
    },
    {
      question: "キャリア教育が充実している高校はどのように見分けられますか？",
      answer: "『学校のホームページで『キャリア教育』『進路指導』『実績』の記載が詳細であること』『説明会で『1年からのキャリア指導内容』『職場体験受け入れ企業数』『進路決定率』『キャリア支援スタッフ配置』が説明されること』『学校案内で『キャリア教育の時間割配置』『進路指導室の整備』『OB/OG情報の充実』が記載されること』『実際の在校生に『職場体験の感想』『進路指導の手厚さ』を聞くこと』で判断できます。特に『進路決定率95%以上』『希望進路実現率90%以上』という『具体的な数字』が公開されている学校は『キャリア支援が充実している証拠』です。",
    },
    {
      question: "職場体験から将来の仕事への興味を広げるコツは何ですか？",
      answer: "『体験前の準備』『体験中の観察と質問』『体験後の振り返り』の3段階が重要です。事前に『その職場がどんな仕事をしているか』『自分は何を学びたいか』『どんな質問をするか』をメモに整理することで『主体的な体験』が可能になります。体験中は『表面的な作業』だけでなく『その仕事の社会的意義』『やりがい』『必要なスキル』を意識的に観察し『働く大人の姿勢』を学びます。体験後は『何が新しい発見だったか』『自分の適性に合致しているか』『さらに学びたいことは何か』を記述することで『体験の学習効果』が高まり、『次の進路選択』に活かせます。",
    },
    {
      question: "進路指導室をどのように活用すればいいですか？",
      answer: "進路指導室は『大学・専門学校のパンフレット』『入試情報』『OB/OG情報』『資格試験情報』『求人票』などの『進路選択に必要な情報』が集約された『情報センター』です。『定期的に訪問して最新情報をチェックする』『進路指導の先生に『自分の適性』『興味分野との合致する大学』『入試戦略』を相談する』『OB/OG訪問で『大学での学び』『就職後の仕事内容』を聞く』など『能動的な利用』が進路実現につながります。特に『AO入試・推薦入試の検討時期』『学部選択で迷っている時期』『就職を検討している時期』での『進路指導室の活用』は『正確な判断』に不可欠です。",
    },
    {
      question: "高校1年生からできる将来設計の始め方は何ですか？",
      answer: "『自己理解』『職業理解』『進路選択の計画立て』の3ステップが推奨されます。1年生では『適性検査』『興味関心の棚卸し』『学力の把握』を通じた『自己理解』を深め、『職業講話』『職場体験』『大学出前授業』で『多様な職業』『学問分野』を知る『職業理解』を進めます。その上で『2年生での文理選択』『2年後期の『大学・専門学校を絞り込み』『3年生での『志望校決定』『入試対策』というように『段階的な進路選択』を計画します。重要なのは『早期からの準備』で『高3から焦って決める』より『高1からコツコツ準備する』方が『納得のいく進路選択』に繋がります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校のキャリア教育・職場体験ガイド｜大学選びと将来の仕事を考えるきっかけ作り | School Station"
        description="高校で行われるキャリア教育の種類と内容（職場体験・インターンシップ・職業講話・大学出前授業）、キャリア教育が充実している高校の特徴と見分け方、職場体験で将来の仕事への興味を広げる方法、進路指導室の活用法（パンフレット・OB/OG情報・大学資料）、高校1年生からできる将来設計の段階的な始め方、親子で話し合うべき将来の仕事・学部選びの会話例を完全解説。"
        canonical="/column/koukou-shokugyou/"
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
            "headline": "高校のキャリア教育・職場体験ガイド｜大学選びと将来の仕事を考えるきっかけ作り",
            "description": "高校で行われるキャリア教育の種類と内容（職場体験・インターンシップ・職業講話・大学出前授業）、キャリア教育が充実している高校の特徴と見分け方、職場体験で将来の仕事への興味を広げる方法、進路指導室の活用法（パンフレット・OB/OG情報・大学資料）、高校1年生からできる将来設計の段階的な始め方、親子で話し合うべき将来の仕事・学部選びの会話例を完全解説。",
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
            高校のキャリア教育・職場体験ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            大学選びと将来の仕事を考えるきっかけ作り
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校で行われるキャリア教育の内容〜4つの主要プログラム" id="kyouiku-naiyou">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            キャリア教育は『自分の適性を知る』『社会人としての基礎を学ぶ』『具体的な進路を決める』という『3段階の学習プロセス』で構成されています。高校ではこれら3段階を『複数の教育プログラム』を組み合わせて実現しています。学校によって『プログラムの充実度』『実施時期』『参加企業数』に差がありますが『キャリア教育が充実している学校』ほど『進路決定率』『進路満足度』が高い傾向があります。
          </Typography>

          <SubSection title="1. 職場体験〜多様な職種を幅広く経験する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              職場体験は『3～5日間程度』『多様な業種・職種』『実際の職場での就業体験』を通じて『働くことの意味』『社会人としての心構え』『適性の発見』を目的とした教育プログラムです。多くの学校では『1年生』または『2年生』で実施されます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>体験内容</strong> — 『実際の業務補助』『顧客対応』『製造現場での作業』『事務作業』など『その職場の実際の仕事』を体験します。単なる『見学』ではなく『実際に手を動かす経験』が特徴です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>受け入れ企業の多様性</strong> — 『製造業』『流通業』『医療機関』『福祉施設』『学校』『行政機関』『飲食店』など『様々な業種』が参加することで『生徒が自分の興味分野を発見しやすい環境』が整備されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>事前事後学習</strong> — 『体験前のマナー研修』『質問事項の準備』『事後のレポート作成』『発表会での実報告』などを通じて『体験の学習効果』が最大化されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. インターンシップ〜関心分野を深く探究する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              インターンシップは『1～3ヶ月程度』『関心分野の深掘り』『実践的なスキル習得』を目的とした『本格的な就業体験』です。高2～高3で『進路がある程度決まった後』に実施される傾向があります。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>深い業務体験</strong> — 『営業ノウハウ』『製品企画プロセス』『顧客分析方法』など『その職場の本質的な業務プロセス』を学べます。推薦入試の『自己推薦文』で『具体的な仕事内容への理解』『その業界への適性確認』を述べる際の『重要な根拠』になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学進学との連動</strong> — 『経営学を学ぶために営業インターン』『医療を学ぶために病院実習』など『大学での学び』と『職業体験』を結びつけることで『進学後の学習動機』が明確になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 職業講話〜働く大人から直接話を聞く">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              様々な職業で活躍する『現役社会人』を学校に招き『その職業の実態』『やりがい』『必要なスキル』『高校時代にすべきこと』などを『直接的な話』から学ぶプログラムです。『講話後の質問時間』『名刺交換』『個別相談』など『双方向的な交流』がある学校は『キャリア教育の質』が高い傾向があります。
            </Typography>
          </SubSection>

          <SubSection title="4. 大学出前授業〜学部の内容を高校で体験する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『大学の教授』『大学院生』が『高校に来て大学での学び』を体験させるプログラムです。『医学部の解剖学授業』『工学部のロボット製作体験』『文学部の古文解読演習』など『大学の実際の授業を体験する』ことで『入学後のイメージ』が明確になり『進学後のギャップ』を削減できます。『志望大学の出前授業を受ける』ことは『その大学への関心度』『その学部への適性確認』『大学の講義レベルの把握』に有用です。
            </Typography>
          </SubSection>
        </Section>

        <Section title="キャリア教育が充実している高校の特徴と見分け方" id="juyutsu-gakkou">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『キャリア教育の充実度』は『進路決定率』『進路満足度』『就職率』『進学先での成績』などの『成果指標』に直結します。志望校選びの際に『キャリア教育の質』を判断することは『入学後の進路実現』に大きく影響します。
          </Typography>

          <SubSection title="学校選びの際にチェックすべきポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ホームページでの記載内容</strong> — 『キャリア教育』『進路指導』の専用ページが『詳細で更新が新しい』『職場体験受け入れ企業数』『進路決定率90%以上』『進路指導室の施設説明』などが記載されている学校は『キャリア教育を重視している証拠』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>説明会での具体的な説明</strong> — 『1年生から3年生までの進路指導カリキュラム』『職場体験の実施内容』『大学との連携プログラム』『進路指導スタッフの配置』『OB/OG支援システム』などの『具体的な施策』が説明される学校は『本気でキャリア教育に取り組んでいる』という確実な指標です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在校生への質問</strong> — 『職場体験はいつ、どこで実施された？』『進路指導は親身だったか？』『進路指導室はよく使われているか？』『進路決定までの流れ』などを実際の生徒に聞くと『キャリア教育の実態』が『本当のところ』わかります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校見学での確認</strong> — 『進路指導室の広さ』『大学・専門学校パンフの数量』『赤本（過去問）の充実』『OB/OGコーナーの有無』『進路実績の掲示』などから『キャリア支援体制』が『可視的に』わかります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="職場体験で将来の仕事への興味を広げる方法" id="taiken-hirогаru">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            職場体験は『ただ参加するだけ』では『学習効果が限定的』です。『事前準備』『体験中の意識的な観察』『事後の深い振り返り』を通じて『自分の適性理解』『職業観の拡大』『進路決定への活かし方』が実現します。
          </Typography>

          <SubSection title="体験前の準備〜目的を明確にする">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>職場研究</strong> — 『その企業は何をしている会社か』『どのくらいの規模か』『業界での立場は』『最近のニュースはないか』をホームページ・ニュース検索で『事前知識を入れる』ことで『体験時の理解度』が向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>質問リストの作成</strong> — 『この職場ではどのような工夫をして顧客満足を実現しているのか』『働く上で最も大切なことは何か』『高校生のうちに身につけるべきスキルは何か』など『具体的な質問』を準備することで『意識的な学び』が促進されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分の関心・適性の整理</strong> — 『なぜこの職場を選んだのか』『この仕事に興味を持った理由は』『自分の適性とこの職業の関連性は』を『予め考える』ことで『体験中の観察ポイント』が明確になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="体験中の観察〜表面的作業から学びを抽出する">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その仕事の本質を理解する</strong> — 『データ入力の作業』『顧客への説明』『チーム内での役割分担』など『表面的な作業』ではなく『その作業がなぜ必要か』『企業経営にどう貢献しているか』『どのようなスキルが必要か』を『意識的に観察』することが『深い学び』につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>働く大人のマインドセットを学ぶ</strong> — 『どのような工夫をして仕事の品質を高めているか』『どのような困難に直面し、どう乗り越えているか』『やりがいはどのような場面で感じるか』『人間関係構築の工夫は』などから『職業人としてのマインド』『社会人基礎スキル』が学べます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分の適性とのマッチング</strong> — 『この仕事内容は自分に向いているか』『この職場環境は自分に合っているか』『この業界で働くことを想像できるか』を『リアルな体験』から判断することで『進路決定時の根拠』が得られます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="体験後の振り返り〜学びを深化させる">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>体験レポート作成</strong> — 『何が新しい発見だったか』『予想と異なったことは』『働く大人のマインドセット』『自分の適性とのマッチング』『次に学びたいことは』を『構造的に』記述することで『学習効果』が定着します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>発表会での実報告</strong> — 『クラス内での発表』『学年全体での発表会』で『自分の体験』『学んだこと』『将来への示唆』を『他者に説明する』ことで『思考の整理』『表現力の向上』『他の生徒への刺激』が生まれます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="進路指導室の活用法〜大学情報とOB/OG情報を最大限活用" id="shigyou-shitsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            進路指導室は『進路選択に必要な情報が集約された場所』です。『パンフレット検索』『OB/OG情報の閲覧』『進路指導の先生への相談』など『能動的な活用』が『納得のいく進路選択』につながります。
          </Typography>

          <SubSection title="進路指導室に揃っている情報">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学・専門学校のパンフレット</strong> — 『募集要項』『学部学科の特色』『進学実績』『キャンパス施設』『奨学金情報』など『大学選択に必要な情報』が網羅されています。『志望大学のパンフを3回以上読む』ことが『入試面接』『推薦理由書』での『具体的な記述』につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>赤本（過去問）と解答解説</strong> — 『志望大学の過去5～10年分の入試問題』『模範解答』『出題傾向分析』が揃っています。『志望大学の試験レベル』『頻出単元』『対策方法』が『具体的に』わかります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>OB/OG情報</strong> — 『卒業生がどこに進学しているか』『その大学で何を学んでいるか』『就職先はどこか』『その大学は本当に合ったか』など『実際の進学者の声』が格納されています。『志望大学の出身OB/OGに会う』ことで『入学後のリアルな生活』『学び内容』『就職後の仕事』が『フィルターなく』聞けます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>資格試験情報</strong> — 『大学受験に有利な資格』『その資格の難易度』『高校在学中の取得方法』『取得後のメリット』などが記載されています。『英検』『簿記』『情報技術資格』など『入試加点』『推薦評価加点』につながる資格情報が有用です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>求人票と就職情報</strong> — 『高卒採用企業の求人票』『就職先企業の情報』『就職後の研修制度』『キャリアパス』などが管理されています。『就職を検討している生徒』『就職と進学で迷っている生徒』の『判断材料』になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進路指導室の活用戦略">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期的な訪問</strong> — 『週1回は訪問する』『新しい大学パンフをチェックする』『OB/OG情報を読む』『進路指導の先生と雑談する』など『継続的な関わり』で『新しい情報』『具体的なアドバイス』が得られます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進路指導の先生への相談</strong> — 『自分の適性を考えると、どのような大学・学部が合っているか』『志望大学は本当に現実的か』『大学選びで迷っているときの判断基準は』など『個別相談』で『専門的なアドバイス』が得られます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>OB/OG訪問の段取り</strong> — 『進路指導室から志望大学の出身OB/OGを紹介してもらう』『大学での学び』『キャンパスライフ』『就職後の仕事』を『直接聞く』ことで『リアルな情報』が得られます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高校1年生からできる将来設計の段階的な始め方" id="setsukeizu-hajimekata">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『進路決定を高3から焦って行う』より『高1からコツコツ準備する』ことで『納得のいく進路選択』『進学後の満足度向上』が実現します。『自己理解→職業理解→進路選択の計画立て』という『段階的なプロセス』が有効です。
          </Typography>

          <SubSection title="高1〜高2：自己理解と職業理解の段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>適性検査を活用する</strong> — 『性格検査』『興味関心検査』『学力診断』を受けることで『自分の適性』『得意分野』『向いている職業傾向』が『客観的に』わかります。学校の進路指導で『団体検査』が実施されるほか『オンライン適性検査』『塾の適性診断』も活用できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>職場体験に真摯に取り組む</strong> — 『多様な職業を経験する』『実際の働き手の話を聞く』『自分の適性とのマッチングを検討する』という『プロセス』を通じて『漠然とした興味が具体的な職業イメージに変わる』という『重要な転機』が訪れます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進路指導室で多様な職業を知る</strong> — 『パンフレット閲覧』『大学学部紹介』『職業ガイド』『OB/OG情報』を『広く浅く』読むことで『世の中にはこんなにたくさんの職業がある』『これだけ多様な学部がある』という『視野の拡大』が起こります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>親と進路について定期的に話し合う</strong> — 『高1：適性検査の結果を親子で共有』『高1冬：職場体験の感想を親に報告』『高2春：文理選択について親と相談』など『定期的な親子対話』で『親の人生経験の知恵』『親の支援体制の確認』『親との進路観の相互理解』が深まります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高2〜高3：進路決定と実行計画の段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>文理選択を決断する</strong> — 『自分の適性』『将来の職業イメージ』『得意な教科』『志望大学の学部』を総合判断して『文系か理系か』を『早期に（高1冬～高2春）決定する』ことで『その後の対策』『大学選択』がスムーズに進みます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望大学を絞り込む</strong> — 『高2秋～冬』に『3～5校の志望大学候補』を設定し『各大学のパンフ研究』『OB/OG訪問』『オープンキャンパス参加』を『集中的に』行うことで『志望理由』が『具体的に』なり『入試勉強のモチベーション』が高まります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>入試戦略を立てる</strong> — 『一般選抜か推薦選抜か』『国公立か私立か』『いつまでに志望大学を最終決定するか』『入試対策はいつから本格化するか』など『具体的なアクションプラン』を『進路指導の先生と一緒に』立てることで『迷わない受験準備』が可能になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="親子で話し合うべき将来の仕事・学部選びの会話例" id="oyako-kaiwa">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            進路決定は『子ども一人での判断』より『親の経験を活かした対話』で『より良い決定』が実現します。『子どもの自主性を尊重しながら』『親の知見を提供する』というバランスが大切です。
          </Typography>

          <SubSection title="高1春：適性検査結果の共有">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              「職場体験で何を経験したいの？」「得意な科目は何？」「社会に貢献したい分野はある？」など『子どもの興味・適性』を『開放的に』引き出す質問が有効です。親は『自分たちの人生選択』『その選択から学んだこと』を『子どもに示す』ことで『子どもの視野拡大』につながります。
            </Typography>
          </SubSection>

          <SubSection title="高1冬：職場体験の振り返り">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              「体験を通じて、その仕事のどんなところが良いと思った？」「大変だったことは？」「この職業は自分に合っていると思う？」など『体験の深掘り』を促す質問で『単なる作業体験』が『職業理解の深化』につながります。
            </Typography>
          </SubSection>

          <SubSection title="高2春：文理選択の相談">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              「得意な教科から考えると、文系？理系？」「将来の職業イメージがあれば教えて」「その職業に必要な学部は知ってる？」など『複数の視点』からの『構造的な判断』を促します。親は『文系出身だから文系がいい』という『単純な推奨』ではなく『子ども本人の適性』『本当にやりたいこと』を『尊重する姿勢』が重要です。
                        </Typography>
          </SubSection>

          <SubSection title="高2秋～高3春：志望大学決定">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              「なぜその大学なの？」「その学部で何を学びたいの？」「卒業後のキャリアパスは描けてる？」など『子どもの志望理由の具体性』を『チェック』します。親は『経済的負担』『所在地』『偏差値の現実性』など『客観的な判断基準』を『子どもと共有』し『より良い決定』をサポートします。
            </Typography>
          </SubSection>
        </Section>

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e782d", mb: 3 }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 6, pt: 3, borderTop: "1px solid #ddd" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", color: "#1e782d", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
              <ArrowBackIcon sx={{ mr: 1 }} />
              <Typography>コラム一覧に戻る</Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
