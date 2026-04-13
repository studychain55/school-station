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

export default function KoukouSogoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校入試・総合型選抜（AO入試）の対策ガイド｜内申・面接・小論文・活動実績の準備" },
  ];

  const faqItems = [
    {
      question: "総合型選抜（AO入試）と推薦入試は何が違いますか？",
      answer: "『総合型選抜（旧AO入試）』と『推薦入試』は『全く異なる入試形態』です。『総合型選抜は学力試験がない、または簡易的で、学生の個性・適性・志望動機・活動実績を総合的に評価する』『一般的な選考期間が秋（9月～11月）』『複数回面接や小論文が求められる』という特徴があります。一方『推薦入試は学校長の推薦が必須』『推薦資格として内申点の基準がある』『学力試験が課されることが多い』という『学校のお墨付きが重要』な制度です。『総合型選抜は学力試験不要で自分の実績をアピール可能』『推薦入試は学力試験がある可能性が高い』という『根本的な違い』があり『入試形態の特徴に応じた対策が必須』です。",
    },
    {
      question: "総合型選抜を実施している高校の種類は？",
      answer: "『総合型選抜を実施している高校』は『私立高校の大多数』『中高一貫私立校』『国際系高校』『特色校（都立・県立の進学校など）』など『多様な高校が採用』しています。『大学進学実績が豊富な進学校では総合型選抜で将来性が高い生徒を採用する』『国際系高校では英語力・留学経験・異文化理解力を評価する』『特色校では部活動成績・学習成果・研究実績を評価する』という『高校の教育方針に応じた評価基準』が設定されています。『私立高校は総合型選抜に積極的』『公立高校でも進学実績が高い高校では総合型選抜を導入』『自分の適性に合った高校の総合型選抜を探すことが重要』です。",
    },
    {
      question: "志望理由書で審査官が見るポイントは？",
      answer: "『志望理由書で審査官が見るポイント』は『なぜこの高校を志望したのか（具体的理由）』『この高校で何を学びたいのか（明確な目標）』『高校卒業後のキャリアプラン（進学先・職業選択の具体性）』『これまでの活動実績がこの高校志望とどう繋がっているのか（一貫性）』『文章の論理性・説得力（読みやすさ・誤字脱字の有無）』などです。『高校のパンフレットの内容をコピペしたような志望理由は絶対に避ける』『本当に興味を持っている内容を自分の言葉で記述する』『高校訪問・学園祭参加などの体験を具体的に記述する』『自分の成長過程と高校志望がどう繋がっているかを明確に記述する』という『個性的で説得力のある志望理由書』が『合格を大きく近づける』重要な要素です。",
    },
    {
      question: "面接対策で重点的に準備すべきことは？",
      answer: "『総合型選抜の面接対策で重点的に準備すべきこと』は『自己紹介（30秒～1分で自分の特徴をまとめる）』『志望動機（なぜこの高校なのか、高校で何をしたいのか）』『将来の夢（具体的なキャリアプラン）』『自分の活動実績（部活動・学習成果・ボランティア）の説明』『高校に入学後挑戦したいこと』などの『頻出質問への回答準備』です。『面接官の質問に対して、一貫性のある回答をする』『自分の言葉で、自信を持って話す』『相手の目を見て、聞き手を意識した話し方をする』『活動実績の詳細を具体的に説明できるようにする』『逆質問（高校に対する質問）も準備しておく』という『実践的な面接スキル』の習得が『合格に直結する』重要なポイントです。",
    },
    {
      question: "小論文・グループディスカッションの対策方法は？",
      answer: "『小論文対策』は『与えられたテーマについて自分の意見を論理的に述べる力が求められる』『高校の社会的課題・教育問題・環境問題などが出題されやすい』『段落構成（序論・本論・結論）を意識した執筆練習』『具体例を交えた説得力のある論述練習』が重要です。『グループディスカッション対策』は『他の受験生の意見を聞いて、尊重しながら自分の意見も述べる力』『議論を進行させるリーダーシップ』『相手の発言に対して質問や共感を示すコミュニケーション力』『限られた時間の中で建設的な結論を導く力』などが『評価のポイント』となります。『過去問の小論文テーマを数十題準備して練習する』『複数の友人とグループディスカッション練習を何度も重ねる』『教科の先生に小論文添削を依頼する』という『継続的な準備』が『試験での高得点』につながります。",
    },
    {
      question: "中学校での活動実績を総合型選抜でどう活かすか？",
      answer: "『生徒会役職（会長・副会長など）』『部活動での主要成績（県大会・全国大会出場）』『部活動での役職（部長・副部長）』『ボランティア活動（福祉施設訪問・地域清掃など）』『委員会活動での実績』『外部資格試験の取得（英検・漢検など）』などの『多様な活動実績』は『総合型選抜で極めて重要な評価要素』です。『活動実績そのものよりも、その活動を通じて何を学んだのか、どう成長したのか』『失敗経験からどう立ち直ったのか』『その経験が高校志望とどう繋がっているのか』という『活動の質的側面と成長ストーリー』を『志望理由書・面接で具体的に語ることが重要』です。『複数の活動経験を持つ』『各活動に深く関わる』『活動を通じた学びや成長を言語化する力』が『総合型選抜での高い評価』に繋がります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校入試・総合型選抜（AO入試）の対策ガイド｜内申・面接・小論文・活動実績の準備 | School Station"
        description="総合型選抜（旧AO入試）の完全対策ガイド。総合型選抜とは何か、学力検査以外での評価方法、実施高校の種類（私立・中高一貫・国際系・特色校）、志望理由書の書き方と審査官が見るポイント、面接対策の具体的方法、小論文・グループディスカッション対策、中学校での活動実績の活かし方を完全解説。"
        canonical="/column/koukou-sogo/"
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
            "headline": "高校入試・総合型選抜（AO入試）の対策ガイド｜内申・面接・小論文・活動実績の準備",
            "description": "総合型選抜（旧AO入試）の完全対策ガイド。総合型選抜とは何か、学力検査以外での評価方法、実施高校の種類（私立・中高一貫・国際系・特色校）、志望理由書の書き方と審査官が見るポイント、面接対策の具体的方法、小論文・グループディスカッション対策、中学校での活動実績の活かし方を完全解説。",
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
            総合型選抜（AO入試）の対策ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            学力試験なしで評価される、志望理由書・面接・活動実績の準備方法
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="総合型選抜（旧AO入試）とは何か" id="sogo-gaiyou">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『総合型選抜（旧AO入試）』は『学力試験の成績よりも、学生の個性・適性・志望動機・課外活動の実績を総合的に評価する入試形態』です。『学力試験がない、または簡易的な試験のみ』『多段階の選考プロセス（志望理由書・第一次面接・第二次面接など）が採用される』『入試時期が秋（9月～11月）と比較的早い』という『従来の推薦入試や一般入試とは大きく異なる特徴』があります。『総合型選抜の評価基準は「なぜこの高校で何を学びたいのか」という明確な志望動機の有無』『これまでの活動実績が志望理由と一貫しているか』『高校入学後に大きく成長する可能性があるか』などの『定性的な評価』が極めて重要です。『学力試験で失敗を避けられる』『自分の個性や活動実績をアピールできる』『早期に進学先を決定できる』というメリットがある一方『準備期間が長い』『志望理由書の質が極めて重要』『複数回の面接で真摯な姿勢が問われる』というデメリットも存在します。
          </Typography>

          <SubSection title="総合型選抜の主な特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力試験の廃止または簡易化</strong> — 『学力試験がない、または国語・数学・英語などの基礎学力確認のみ』『学力試験の配点が極めて低い、または合否判定に影響しない』という『学力試験中心の一般入試とは全く異なる評価方式』です。『学力試験がなければ、学力が低い生徒も合格可能性がある』『自分の強みを活かした受験戦略が可能』という『大きなメリット』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望理由書の提出と審査</strong> — 『志望理由書は「なぜこの高校を志望したのか」「高校で何を学びたいのか」「将来のキャリアプランは何か」を1000～1500字程度で記述する極めて重要な書類』です。『志望理由書の質が第一次選考の合否を大きく左右する』『表面的な理由ではなく、具体的で説得力のある理由が必須』『高校訪問や学園祭参加などの体験を根拠に挙げることが重要』という『準備の質が問われる』重要なプロセスです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数回の面接選考と活動実績の評価</strong> — 『総合型選抜では複数回（第一次・第二次・最終）の面接が実施されることが一般的』『各面接で志望動機の一貫性、活動実績の詳細、高校入学後の成長意欲などが多角的に評価される』『部活動成績、生徒会役職、ボランティア活動、外部資格取得などの『課外活動の実績が極めて重要な評価要素』です。『実績そのものよりも「その経験から何を学んだのか」という内省力が重要』『面接官は「この生徒は高校で成長する可能性があるか」を評価する』という『定性的な評価の重要性』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>入試時期の早期化（秋の9月～11月開始）</strong> — 『総合型選抜の多くは秋の9月から開始される』『合格発表は秋～冬と比較的早い』『早期合格により、進学先を決定してから冬の一般入試準備に移行することが可能』『ただし、総合型選抜での不合格の場合は推薦入試や一般入試での受験が可能』という『受験戦略の柔軟性』がメリットです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="総合型選抜を実施している高校の種類" id="sogo-koutei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『総合型選抜は私立高校を中心に広く採用されており』『特色校（都立・県立の進学校など）』『中高一貫私立校』『国際系高校』『大学附属高校』など『多様な高校が導入している』という特徴があります。『高校の教育方針によって評価基準が大きく異なる』『自分の適性や活動実績に合った高校の総合型選抜を選ぶことが極めて重要』です。
          </Typography>

          <SubSection title="高校タイプ別の総合型選抜の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立進学校（大学進学実績が豊富）</strong> — 『将来性が高い生徒、明確な進学目標を持つ生徒を採用する』『学力は高い必要があるが、総合型選抜なら当日の学力試験で失敗しても合格可能』『スーパーイングリッシュプログラムなどの特色教育への適性が評価される』という特徴があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中高一貫私立校</strong> — 『6年間の一貫教育に適した生徒を採用』『長期的な視点で自分のキャリアを考えられる生徒が有利』『部活動や課外活動に継続的に取り組む姿勢が重視される』という特徴があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>国際系高校・英語教育重視校</strong> — 『英検準2級以上の資格保有者、海外経験、英語学習への強い関心が極めて重視される』『帰国子女や留学経験者、国際交流活動の経験者が有利』『TOEICやTOEFL等の外部資格試験の成績が評価対象』という特徴があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>都立・県立特色校（キャリア教育や探究学習が充実）</strong> — 『自分で課題を設定して研究できる生徒を採用』『社会への関心が高く、主体的に学習する姿勢が重要』『ボランティア活動や地域貢献活動の経験が高く評価される』という特徴があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="志望理由書の書き方と審査官が見るポイント" id="sogo-shobun">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『志望理由書は総合型選抜の合否を決める最も重要な書類の一つ』『審査官は志望理由書から「この生徒は本当に当校で学びたいのか」「志望動機は具体的で説得力があるか」「高校入学後に成長する可能性があるか」を判定する』という『極めて重要な役割』を担っています。『志望理由書の質が低い』『表面的な理由しか書かれていない』『高校パンフレットの内容を丸写し』という『準備不足の志望理由書は必ず落とされる』という現実があります。
          </Typography>

          <SubSection title="志望理由書で審査官が見るポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体性（なぜこの高校か、他ではなく）</strong> — 『「進学実績が良いから」「きれいなキャンパスだから」という理由は絶対に避ける』『「学園祭で～というプログラムを見て、このような学びがしたいと思った」「英語教育に力を入れている点に魅力を感じた」という『高校訪問や学園祭参加、パンフレット研究などの体験に基づいた具体的な理由』が必須です。『他校との違いを明確に打ち出す』『高校の教育方針・プログラム・施設設備などの具体的要素を挙げる』ことが『説得力のある志望理由書』につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>一貫性（過去の活動実績と志望理由の繋がり）</strong> — 『志望理由書で「〇〇に関心がある」と述べた場合、中学校での活動実績で該当する実績があるべき』『例えば「国際交流に関心がある」なら「英検の勉強を3年間継続してきた」「国際交流ボランティアに参加した」などの根拠が必要』『活動経験と志望理由が矛盾していない』『志望理由が自分の成長過程の必然的な結果に見える』という『ストーリー性のある志望理由書』が『高く評価される』重要なポイントです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>明確性（高校で何を学びたい、その先何を目指す）</strong> — 『「英語を学びたい」という曖昧な表現ではなく「英語で国際交流ができる人材になり、将来は国連職員として世界平和に貢献したい」などの『具体的で高い目標』が必要です。『高校での3年間で何を成し遂げたいのか』『その先のキャリアをどう構想しているのか』『高校がその目標達成に必要な場所である理由』という『三層構造の明確な目標設定』が『審査官の心を掴む志望理由書』につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>文章力と論理性</strong> — 『誤字脱字がない』『句読点の使い方が正しい』『段落構成が明確（序論・本論・結論）』『文章が読みやすく、意味が明確』という『基本的な文章技能』が重要です。『一文が長すぎない』『抽象的な表現ばかりでなく、具体例を交える』『接続詞の使い方が適切』という『読み手を意識した文章表現』が『審査官の好感度を高める』重要な要素です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="志望理由書の構成例">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『序論（導入）』→『中学時代の経験・気づき』→『その経験から生まれた目標』→『高校で学びたいこと』→『高校選択の理由』→『将来のキャリアプラン』→『結論（高校への期待・覚悟）』という『8段落構成』が効果的です。『各段落に具体的なエピソード・数字・根拠を含める』『審査官が「この生徒の成長ストーリーが見える」と感じられるような記述』が『合格を大きく近づける』志望理由書の特徴です。
            </Typography>
          </SubSection>
        </Section>

        <Section title="面接対策の具体的な方法" id="sogo-mensetsu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『総合型選抜の面接は複数回開催される』『各面接で異なる視点から評価される』『文章の志望理由書とは異なり、実際の言葉・態度・反応力が評価される』という『高いレベルの準備が必須』な選考プロセスです。『面接官は「この生徒は高校で成長する可能性があるか」「他の生徒と比べてどのような強みがあるか」「志望理由は本物か」を多角的に評価する』という『厳しい審査基準』が設定されています。
          </Typography>

          <SubSection title="面接対策の重点項目">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自己紹介（30秒～1分）</strong> — 『名前』『出身中学』『部活動・課外活動』『自分の特徴』『志望理由（端的に）』などを『時間内に効果的にまとめる』『相手の目を見て、聞き手を意識した話し方』『堂々とした態度』が重要です。『何度も練習して、自然な自己紹介ができるまで磨く』ことが『面接の第一印象を大きく左右する』極めて重要なステップです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望動機（「なぜこの高校か」を明確に）</strong> — 『「この高校の～というプログラムに魅力を感じた」「学園祭で見た～という授業展開に強く惹かれた」という『具体的で説得力のある理由』『他校との違いを明確に説明できる力』『高校の特色・教育方針を理解した上での志望であることを示す』という『本気度が伝わる志望動機の説明』が『面接官の好感度を高める』重要なポイントです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>将来の夢・キャリアプラン（具体性が重要）</strong> — 『「〇〇分野で働きたい」という程度では不十分』『「〇〇という社会課題を解決するために〇〇という職業を目指す」「その目標を達成するために高校では～を学びたい」という『多段階の具体的なキャリアプラン』『高校選択がそのキャリアプランに必須である理由』を『論理的に説明できる力』が『成熟した生徒であることを示す』重要な評価要素です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>活動実績の説明（数字ではなく経験から何を学んだか）</strong> — 『「部活動で県大会に出場した」という事実よりも「県大会出場という高い目標達成のプロセスで、チームワークの重要性を学んだ」「失敗から立ち直る力が身についた」という『内省的で成長志向の説明』『具体的なエピソード』『その経験が将来にどう活かされるのか』という『質的な評価』が『面接官が重視する評価ポイント』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>逆質問（相手に対する質問）</strong> — 『面接の最後に「何か質問がありますか」と聞かれる』『「ありません」と答えるのは関心がないと思われる危険がある』『「高校在学中に海外研修の機会はあるか」「英検取得をサポートするプログラムはあるか」など『志望理由と繋がった、前向きな質問』『高校への関心の高さを示す質問』を準備しておくことが『面接官に良い印象を与える』重要なスキルです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="小論文・グループディスカッション対策" id="sogo-shoron">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『総合型選抜の選考プロセスに小論文やグループディスカッションが含まれることが多い』『これらは記述力・思考力・コミュニケーション力を総合的に評価する手段』『事前の準備と実践練習が不可欠』という『極めて重要な対策項目』です。
          </Typography>

          <SubSection title="小論文対策のポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>段落構成（序論・本論・結論）の徹底</strong> — 『序論で自分の主張を明確に述べ』『本論で複数の具体例や根拠を提示して主張を展開し』『結論で全体をまとめる』という『論理的で説得力のある構成』『読者が「この生徒は論理的に考えられる」と感じられる文章構成』が『高得点を獲得する』基本的要素です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体例の活用</strong> — 『抽象的な表現ばかりでなく、新聞記事・統計データ・歴史的事例・身近な経験などの『具体例を複数提示』『説得力を大きく高める』という『評価者が納得できる根拠の充実』が『小論文の質を大きく高める』極めて重要なスキルです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>過去問とテーマ演習</strong> — 『志望高校の過去3～5年の小論文テーマを調べて、該当テーマで複数回の作成・添削練習』『社会的課題・環境問題・教育問題などのテーマを広く研究』『時事問題への理解を深める』という『継続的な演習』が『実試験での高得点獲得』に必須です。教科の先生に『小論文添削を何度も依頼』『フィードバックを反映した修正』『改善のプロセスを繰り返す』ことが『確実な小論文力向上』につながります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="グループディスカッション対策のポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>他者の意見を尊重する姿勢</strong> — 『異なる意見を聞いて「なぜそのような意見なのか」と質問する』『相手の発言を認めながら、自分の意見を述べる』『議論を自分の主張を押し通すのではなく「みんなで最良の結論に到達する」という姿勢』『協調性とリーダーシップが両立している』という『成熟した態度』が『グループディスカッションで最も高く評価される』重要なポイントです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>議論を深める質問力</strong> — 『相手の発言に対して「〇〇という根拠がある」という質問』『「その意見とこの意見は矛盾していないか」という論理的な質問』『複数の立場から考察する多面的思考』『議論全体の進行状況を把握して「そろそろ結論を出してみてはどうか」という進行管理』が『グループ内でのリーダーシップ』『思考の深さ』を示す重要な行動です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実践演習の重要性</strong> — 『複数の友人とグループディスカッション練習を10回以上重ねる』『異なる立場を持つ人との議論を何度も経験』『自分がどのような役割を果たしやすいのか（リーダー・サポーター・進行管理）を認識』『改善点を反映した本番での実践』という『継続的で実践的な準備』が『当日の高いパフォーマンス』に繋がります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="中学校での活動実績を総合型選抜で活かす方法" id="sogo-jisseki">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『中学校での活動実績は総合型選抜の合否を大きく左右する極めて重要な要素』『審査官は「この生徒は複数の経験を持ち、各経験から深い学びを得ている」「継続性を持って活動に取り組んでいる」「活動を通じて成長する力がある」という『質的な評価』を行う』という『実績の量よりも質が重要』という特徴があります。『複数の活動経験を持つ』『各活動に継続的に取り組む』『活動の失敗経験を含めた内省的な学びを言語化できる』ことが『総合型選抜での高い評価』に必須です。
          </Typography>

          <SubSection title="活動実績の種類と評価ポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動の実績（競技成績・役職・継続性）</strong> — 『県大会出場・全国大会出場などの競技成績』『部長・副部長などの役職』『3年間継続して活動することで培った継続性』『失敗経験から立ち直った経験』などが『評価対象』です。『成績が出ていない部活でも「チームの雰囲気改善のために何をしたか」「困っている後輩をサポートした」という『リーダーシップと思いやりの行動』『実績よりも姿勢が評価される』ケースも多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒会・委員会活動（リーダーシップ・企画力）</strong> — 『生徒会役職（会長・副会長・書記・会計など）』『学園祭・体育祭などの企画運営』『委員会での主導的な活動』『生徒会の活動を通じてどのような課題を認識し、どう解決したか』という『リーダーシップと問題解決力』『学校全体への貢献』が『高く評価される』重要なポイントです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ボランティア活動・社会貢献（社会的関心・共感力）</strong> — 『福祉施設訪問・地域清掃活動・寄付活動などの継続的なボランティア』『社会的課題への関心の高さ』『困難な状況にある人への共感力』『ボランティア活動から何を学んだか』という『社会性と内省力』が『総合型選抜で極めて高く評価される』重要な要素です。『実績の大きさよりも「社会課題への本気度」「継続的に取り組む力」が評価される』という『質的な評価基準』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>外部資格試験の取得（英検・漢検・数検等）</strong> — 『英検準2級以上』『漢検2級以上』『数検3級以上』などの『難度の高い資格取得』『資格取得に向けた継続的な学習』『資格を活かした学習への積極的な取り組み』が『学習意欲・継続性・成長志向』の『客観的な証拠』となります。『国際系高校への志望なら英検、理系志望なら数検』という『志望理由と資格の一貫性』が『より高く評価される』ポイントです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習成績・特定教科での優秀さ</strong> — 『定期テストで常に高得点』『特定教科（英語・数学など）での優秀性』『学習コンテスト・科学展示会などでの入賞経験』『研究発表での評価』などの『学習面での実績』『知識追究の強い動機付け』が『進学校への志望との一貫性』『学習への真摯な姿勢』を示す重要な要素です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="活動実績を総合型選抜でアピールするコツ">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『実績そのものよりも「その活動を通じて何を学んだのか、どう成長したのか」という内省的な学びを言語化する力が極めて重要』『失敗経験も「失敗からどう立ち直ったのか、何を学んだのか」という『内省的で建設的な意味づけ』『単一の活動よりも複数の活動経験から『共通のテーマ・価値観』『自分の一貫した世界観』が見える』という『ストーリー性のある活動実績の説明』『志望理由と活動実績が有機的に繋がっている』ことが『総合型選抜での高い評価』に繋がる『極めて重要な工夫』です。
            </Typography>
          </SubSection>
        </Section>

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
