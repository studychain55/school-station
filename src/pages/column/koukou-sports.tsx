import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
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

export default function KoukouSportsPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "体育・スポーツ系高校の特徴｜スポーツ推薦入学と進路の実態" },
  ];

  const faqItems = [
    {
      question: "体育科・スポーツ科のある高校と普通科の違いは何ですか？",
      answer: "体育科・スポーツ科は、スポーツの理論と実践を専門的に学ぶ学科です。普通科と異なり、スポーツ科学、運動生理学、栄養学などの専門科目が組まれています。実習時間も多く、週15～20時間の運動実習が標準的です。大学進学時は、体育大学や経営学部のスポーツマネジメント学科など、スポーツ関連学科への進学が優遇される傾向があります。",
    },
    {
      question: "スポーツ推薦入学の条件は厳しいですか？",
      answer: "条件は学校によって異なりますが、一般的には全国大会出場経験、都道府県大会上位入賞、該当種目で都道府県代表選手であることなどが目安です。成績面では、内申点3.5以上（5段階）が目安とされることが多いです。入試での学力試験は簡易的であることが多いですが、面接は重視される傾向があります。",
    },
    {
      question: "スポーツ推薦で入学した後、成績が下がると退学させられますか？",
      answer: "法的には退学強制はできません。ただし、推薦で入学した場合、入学後の成績低下や著しい実績不足が続くと、学校から厳しい指導が入る可能性があります。また、大学進学時に推薦枠が得られなくなるリスクがあります。スポーツ推薦入学後も、高い水準の競技成績を維持することが重要です。",
    },
    {
      question: "文武両道はどの程度実現可能ですか？",
      answer: "体育科・スポーツ科でも文武両道は可能ですが、時間管理が極めて重要です。週20時間近い運動実習に加えて、定期テスト対策や受験勉強を両立させるには、効率的な学習が不可欠です。進学校のスポーツ科では、朝学習や放課後の時間活用で対応している学校が多くあります。",
    },
    {
      question: "スポーツ推薦に失敗した場合、どうなりますか？",
      answer: "推薦枠での入学が決まらない場合でも、一般入試での受験は可能です。ただ、体育科・スポーツ科の一般入試は実技試験を課す学校が多いため、競技成績が優れていない場合は合格が難しい傾向があります。また推薦失敗による精神的ショックが大きいため、事前に落ちた場合の進路を検討しておくことが重要です。",
    },
    {
      question: "スポーツ推薦で大学に進学する場合、奨学金はもらえますか？",
      answer: "はい、多くの体育大学や有名大学のスポーツ推薦では、スポーツ奨学金制度が設けられています。返済不要の給付型奨学金から、部分的な授業料免除まで、種類は様々です。ただし卒業まで競技成績を維持する必要があることが多いため、奨学金の条件を十分に確認することが大切です。",
    },
  ];

  return (
    <>
      <SEO
        title="体育・スポーツ系高校の特徴｜スポーツ推薦入学と進路の実態 | School Station"
        description="体育科・スポーツ科のある高校の特徴、設備・コーチ陣・練習時間、スポーツ推薦入学の仕組みと条件、文武両道の学校選びポイント、卒業後の進路（体育大学・実業団・プロ）、スポーツ推薦失敗時のリスク対策を完全解説。"
        canonical="/column/koukou-sports/"
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
            "headline": "体育・スポーツ系高校の特徴｜スポーツ推薦入学と進路の実態",
            "description": "体育科・スポーツ科のある高校の特徴、設備・コーチ陣・練習時間、スポーツ推薦入学の仕組みと条件、文武両道の学校選びポイント、卒業後の進路（体育大学・実業団・プロ）、スポーツ推薦失敗時のリスク対策を完全解説。",
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
            background: "linear-gradient(135deg, #E53935 0%, #F44336 50%, #EF5350 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            体育・スポーツ系高校の特徴
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFEBEE", maxWidth: 600, mx: "auto" }}>
            スポーツ推薦入学と進路の実態を徹底解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="体育科・スポーツ科のある高校の特徴" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育科・スポーツ科を設置している高校は、単なる運動部の強豪校ではなく、スポーツを学問として学ぶ専門的な教育機関です。このような学校では、スポーツの実践だけでなく、スポーツ科学や栄養学、運動生理学など、基礎理論から応用までを体系的に学びます。また、最新のトレーニング施設や経験豊富なコーチ陣を揃えており、将来的にスポーツ関連の職業を目指す生徒に最適な環境が整備されています。全国には約250校の体育科・スポーツ科設置校があり、各地域の教育委員会が指定する進学校となっていることが多いです。
          </Typography>

          <SubSection title="体育科・スポーツ科の特徴的な施設">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>充実した運動施設</strong> — 体育館（複数棟）、屋外運動場、プール、トレーニング室（ウェイトルーム）、武道場、テニスコートなど、多種多様なスポーツに対応した施設が完備されています。公立校でもこの水準の施設を備えている場合が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>最新のスポーツ科学機器</strong> — 体力測定装置、映像分析システム、筋力測定装置など、競技力向上のための最新技術が導入されている学校が増えています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>栄養管理室・医務室</strong> — スポーツ栄養士、専属医師・スポーツドクターが常駐し、選手の栄養管理とケガの予防・治療に対応しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>寮施設</strong> — 遠方から来た選手のため、学校敷地内または近隣に寮を備えている学校があります。寮生活を通じた人間関係の形成も重要な教育の一部です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="指導者（コーチ陣）の質と資格">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              体育科設置校のコーチ陣は、単なる部活顧問ではなく、専門的な資格を持つ指導者です。日本体育大学や中京大学などのスポーツ専門大学を卒業した経験豊富なコーチが多く、各競技の全国レベルの大会での指導経験を持っています。多くの学校では、以下のような体制を整えています。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専属コーチ</strong> — 各競技に専任のコーチが配置され、年間を通じて継続的で高度な指導を行います。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>外部講師</strong> — 実業団チームのコーチやオリンピック経験者など、トップレベルの指導者から指導を受ける機会があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スポーツ科学スタッフ</strong> — データ分析、栄養管理、心理サポートなど、複数の専門分野から選手をサポートするスタッフが配置されています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="年間の練習時間と環境">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              体育科・スポーツ科の生徒は、一般的に週15～20時間のスポーツ実習を行います。これに加えて部活動での練習があるため、高度な競技能力を養成できる環境が整備されています。
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
              <Paper sx={{ p: 2.5, bgcolor: "#FFEBEE", border: "1px solid #FFCDD2" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#C62828", mb: 1 }}>授業での実習時間</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7, fontSize: "0.95rem" }}>週15～20時間のスポーツ実習科目が組み込まれています。専門競技の技術向上だけでなく、複数の競技を体験し、幅広いスポーツ知識を身につけます。</Typography>
              </Paper>
              <Paper sx={{ p: 2.5, bgcolor: "#e9f2ea", border: "1px solid #bcd7c0" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 1 }}>部活動</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7, fontSize: "0.95rem" }}>放課後・土日の練習で、より専門的・高度な競技技術を磨きます。全国大会出場を目標とした練習環境が整備されています。</Typography>
              </Paper>
            </Box>
          </SubSection>
        </Section>

        <Section title="スポーツ推薦入学の仕組みと条件" id="suisen">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            スポーツ推薦入学（学校推薦型選抜）は、優れた競技成績を持つ生徒を対象にした入試制度です。体育科・スポーツ科のある学校では、スポーツ推薦を通じて全国レベルの競技者を集め、チーム強化を図っています。推薦に合格すると、通常の学力試験（国語・数学・英語）の受験が免除されるメリットがある反面、入学後の成績維持や実績継続が求められます。
          </Typography>

          <SubSection title="スポーツ推薦の出願資格">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              学校によって条件は異なりますが、一般的な出願資格は以下の通りです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>競技成績</strong> — 全国大会出場、都道府県大会上位入賞（1～3位）、都道府県代表選手などが目安です。競技によって異なり、野球・サッカー・バスケットボールなど人気競技は要求水準が高い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学業成績</strong> — 内申点が3.5以上（5段階評価）、または平均評定が3.0以上というのが目安です。スポーツ推薦だからといって学業成績が全く不問というわけではありません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生活態度</strong> — 学校からの推薦では、規則正しい生活、素行不良がないことが前提条件です。中学段階での問題行動があると推薦を受けられません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>通学可能性</strong> — 入寮できない場合は、学校から通学可能な地域の居住者が条件となることが多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦入試の試験内容">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              スポーツ推薦では、一般入試のような厳しい学力試験は課されません。代わりに以下のような試験が実施されます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接（重視）</strong> — コーチや学校関係者との面接で、競技に取り組む姿勢、高校生活への心構え、将来の夢について評価されます。面接は最も重要な試験です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力試験（簡易的）</strong> — 基礎的な国語・数学・英語が課される場合もありますが、一般入試ほど難しくなく、中学範囲の基礎知識を問う程度です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実技試験</strong> — 体育科・スポーツ科では、体力テスト（握力・50m走・立幅跳など）が実施される場合があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>提出書類</strong> — 競技成績証明書、推薦理由書、自己紹介書などが審査の対象になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="文武両道の学校選びポイント" id="bunbun">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育科・スポーツ科でスポーツ推薦により入学する場合でも、高校卒業後の進路によっては学業成績が重要になります。特に大学進学を希望する場合は、文武両道のバランスが取れた学校選びが必須です。
          </Typography>

          <SubSection title="文武両道が実現できている学校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>朝学習の実施</strong> — 多くの進学校系スポーツ科では、朝7時～7時30分に全校朝学習を実施し、基礎学力の定着を図っています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>放課後補習制度</strong> — 弱点科目の補習が放課後に行われ、時間効率的な学習をサポートしています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学進学実績</strong> — 体育大学や有名大学への進学実績が豊富な学校は、学業面での指導も充実しています。学校案内で進学実績を確認することが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教員の配置</strong> — 体育科専任の教員が複数名配置されており、学業面でのサポート体制が整備されている学校が望ましいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期テスト対策</strong> — スポーツ科だからといって定期テストが簡単になることはありません。むしろ時間が限られている分、効率的なテスト対策が必要です。学校の定期テスト成績平均値を確認すると、学業レベルが把握できます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="卒業後の進路（体育大学・実業団・プロ）" id="career">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育科・スポーツ科を卒業した生徒の進路は、大きく4つに分かれます。進学先・進路を選ぶ際は、高1年の時点から情報収集を始めることが重要です。
          </Typography>

          <SubSection title="進路1：体育系大学への進学">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              最も一般的な進路は、体育大学への進学です。日本体育大学、中京大学、順天堂大学、東海大学など、全国に体育系大学は約30校あります。高校でのスポーツ成績が優秀であれば、スポーツ推薦枠での入学が可能な場合が多いです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>メリット</strong> — 専門的なスポーツ科学を学べる、競技力向上が期待できる、体育会所属での人間関係形成、教員免許（体育）取得が容易。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>就職先</strong> — 学校の体育教員、スポーツ施設職員、フィットネスクラブスタッフ、企業の健康管理部門など、スポーツ関連職への道が広がります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進路2：実業団・プロへの進路">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              野球、サッカー、バレーボール、バスケットボール、陸上など、競技によっては高卒での実業団入団やプロ契約が可能です。特に野球の場合、ドラフト会議への指名を目指して進路を決定します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>野球</strong> — 高卒でプロ野球ドラフト指名を目指す生徒が多くいます。実業団野球も有力な選択肢です。年俸は実業団で200～500万円、プロで年俸数千万円に達することもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サッカー</strong> — Jリーグの育成選手制度があり、高卒で入団→プロ契約という道があります。U-19日本代表経験者の進路として一般的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その他競技</strong> — バレーボール、バスケットボール、陸上などでも実業団への進路がありますが、競技によって進路の選択肢の数が異なります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="進路3：一般大学（スポーツ関連学科）への進学">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              体育大学ではなく、経営学部のスポーツマネジメント学科や、教育学部の体育教育専攻など、一般大学のスポーツ関連学科への進学も選択肢です。こうした進路を選ぶ場合は、高1～高2から学業成績を意識的に高める必要があります。
            </Typography>
          </SubSection>

          <SubSection title="進路4：専門学校・就職">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              スポーツトレーナー養成専門学校やスポーツビジネス専門学校へ進学する選択肢もあります。また、競技成績によっては高卒での一般企業就職を選ぶ生徒もいます。
            </Typography>
          </SubSection>
        </Section>

        <Section title="スポーツ推薦失敗時のリスクと対策" id="risk">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            スポーツ推薦による高校入試は、成功すれば学力試験が免除されるメリットがある反面、推薦に落ちた場合のリスクが存在します。事前に対策を講じておくことが重要です。
          </Typography>

          <SubSection title="推薦に落ちる理由">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>競技成績が基準に達していない</strong> — 全国大会出場などの明確な実績がない場合、推薦枠は限られています。各高校で推薦枠は5～10名程度に限定されることが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>内申点が基準以下</strong> — 競技成績は優れていても、学業成績（内申点3.5未満）では推薦がもらえない場合があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接での評価が低い</strong> — 競技成績は優秀でも、面接で高校生活への心構えや学習意欲が見られない場合は、推薦がもらえません。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校内での競合</strong> — 同じ競技で複数の生徒が推薦を希望した場合、中学校は最も適切な生徒を1名に絞って推薦します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦失敗時の対策">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>一般入試への切り替え</strong> — スポーツ推薦に落ちても、一般入試での受験は可能です。ただし体育科・スポーツ科の一般入試では実技試験が課されることが多いため、競技成績が有利になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>代替校の確保</strong> — 推薦を受ける前から、推薦に落ちた場合の進学先（安全校）を確保しておくことが重要です。一般入試で確実に合格できる高校を事前に決めておくべきです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学力の並行強化</strong> — スポーツ推薦に頼らず、学力でも受験できる水準を保つことが、推薦失敗時のリスクを軽減します。高1～中3を通じて、最低限の学力（内申点3.0以上）を維持すべきです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E53935" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>心理的準備</strong> — 推薦に落ちることは誰にでも起こりうることです。落ちた場合の対処法を家族と事前に相談し、精神的な準備をしておくことが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="体育科・スポーツ科のある高校選びの最終チェックリスト" id="checklist">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育科・スポーツ科への進学を決める際は、以下の項目を確認することが重要です。
          </Typography>
          <List>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>施設の充実度</strong> — 屋外・屋内の運動施設、トレーニング室、栄養管理施設が整備されているか確認。
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>指導者の質</strong> — コーチの専門資格、全国大会指導経験などを確認。
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>大学進学実績</strong> — 体育大学や有名大学への進学実績数を確認。
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>学業サポート体制</strong> — 朝学習、放課後補習などが実施されているか。
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>寮施設</strong> — 遠方から進学する場合、寮の有無と環境を確認。
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#E53935" }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                <strong>卒業後の進路</strong> — 実業団進出者、プロ選手、大学進学者などの進路先を具体的に確認。
              </Typography>
            </ListItem>
          </List>
        </Section>

        <Box sx={{ my: 4 }}>
          <Divider />
        </Box>

        <FAQ items={faqItems} />
      </Container>
    </>
  );
}
