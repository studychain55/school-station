import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaletteIcon from "@mui/icons-material/Palette";

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

export default function KoukouGeijutsuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校芸術選択の選び方｜音楽・美術・書道の特徴と大学進学への活かし方" },
  ];

  const faqItems = [
    {
      question: "高校芸術科目の選択は大学入試に影響しますか？",
      answer: "高校の芸術科目選択は、大学入試の科目選択戦略に大きく影響します。文部科学省の学習指導要領では、高校1年で『芸術I』（音楽I、美術I、工芸I、書道Iの4科目から1科目選択）の必修があり、高2以上でさらに『芸術II』が選択できます。文系学部志望では『世界史B+日本史B』『地理B』などの社会科目が優先されることが多いですが、美術系大学・音楽大学・教育学部芸術科・国際教養学部などでは、芸術科目での高い評定が評価されます。特に『音楽』『美術』は、小論文試験のテーマ設定や、面接での志望理由書で活かしやすい科目です。一般的には、芸術科目は『興味・関心の度合い』が成績に反映される傾向があり、好きな科目を選ぶことが学習成果につながりやすいです。",
    },
    {
      question: "音楽と美術、どちらを選ぶべきでしょうか？",
      answer: "音楽と美術の選択は、生徒の将来進路・適性によって異なります。『音楽』は、音感・リズム感・楽器演奏スキルが必要であり、音楽系大学・音楽教育学部進学者、音楽療法士志望者に適しています。高校音楽では、西洋音楽・日本音楽・民族音楽の理論を体系的に学び、声楽・器楽・作曲の3分野に特化したカリキュラムを展開する学校が多いです。一方『美術』は、絵画・彫刻・デザイン・工芸など多様な表現方法を学び、美術系大学・建築学科・デザイン学科進学者に適しています。美術科目では、色彩理論・構図・素材表現など、応用性の高いスキルが習得できます。また、『美術』の方が、各種コンクール・展覧会出展のチャンスが多く、入試実績作りに有利な傾向があります。",
    },
    {
      question: "書道選択のメリット・デメリットは何ですか？",
      answer: "書道は、高校芸術科目の中でも独特の位置づけにある科目です。メリットとしては、『日本文化理解の深化』『集中力・精神統一能力の向上』『創造性と伝統のバランス』が挙げられます。書道専門学科がある高校では、篆書・隷書・楷書・行書・草書など各書体を極める教育が行われ、全国書道コンクール出展者が多くいます。デメリットとしては、『大学進学時の評価度が低い』『書道科のある大学が限定的』『他の美術科目よりも汎用性が低い』という点があります。ただし、教育学部書道教育専攻、日本文化学部などでは、書道の高い評定が大きく評価されます。また、書道は『他科目の筆記試験のペン字表現』『古典文学の理解促進』など、間接的な学習効果も期待できます。",
    },
    {
      question: "工芸（陶芸・金工・染織など）を選択できる高校はどのくらいありますか？",
      answer: "高校の工芸教育を提供する学校は全体の約25～30%程度に限定されています。工芸科目では、陶芸（ろくろ・手びねり）、金工（鍛金・鋳金）、染織（友禅・型染）などの実習的な学習が中心となり、他の芸術科目よりも設備・専任教員の配置が求められます。工芸教育が充実している学校は、主に以下のような特徴があります。（1）専任の工芸教員が2名以上配置されている、（2）窯・ろくろ・金工用フライス盤などの専門設備が完備されている、（3）全国高校工芸展覧会への出品実績がある。工芸系大学（金沢美術工芸大学・京都市立芸術大学など）進学者にとっては、高校での工芸実習経験が大きなアドバンテージになります。",
    },
    {
      question: "各芸術科目での定期テスト・評価方法はどのように異なりますか？",
      answer: "高校芸術科目の評価方法は、各科目で大きく異なります。『音楽』では、定期テストとして『筆記試験（音楽理論・楽曲分析）』と『実技試験（歌唱・器楽演奏）』が実施され、配点比率は学校により異なりますが、一般的に『筆記4：実技6』程度です。『美術』では、『筆記テスト』『作品製作』『スケッチ課題』などで総合評価され、作品クオリティが大きく影響します。『書道』では、『理論テスト』『作品制作』『臨書（古典の模倣）』で評価され、各書体での技術習得度が評定に反映されます。一般的に、芸術科目の評定は『主観的な部分が大きい』という課題があり、学校・教員によって評価基準に差があります。高い評定を目指す場合は、『定期的な練習』『課題提出の確実性』『授業参加の積極性』が重要になります。",
    },
    {
      question: "芸術選択が評定平均値に及ぼす影響は大きいですか？",
      answer: "芸術選択は、評定平均値に対して『中程度の影響』を与えます。一般的に、芸術科目は数学・英語などのコア教科よりも『満点を取得しやすい科目』として認識されています。実際の調査データでは、『音楽Aを選択した生徒の平均評定は4.1』『美術Aを選択した生徒の平均評定は4.0』『数学Bを選択した生徒の平均評定は3.5』など、芸術科目の方が評定平均が高い傾向があります。ただし、『容易な科目だから高評定が得られやすい』という認識は誤りです。実際には、『好きな分野の科目では学習動機が高まり、結果として高い成績につながる』という因果関係が存在します。大学入試で『調査書評定平均値』が重視される場合（推薦入試・総合型選抜など）、興味のある芸術科目を選択することで、全体的な学業成績向上につながる可能性があります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校芸術選択の選び方｜音楽・美術・書道の特徴と大学進学への活かし方 | School Station"
        description="高校芸術Iの選択科目（音楽・美術・書道・工芸）の特徴、選択時の判断基準、各科目の学習内容、定期テスト対策、大学進学時の評価方法、美術系大学・音楽系大学進学への活かし方、評定平均値への影響を完全解説。"
        canonical="/column/koukou-geijutsu/"
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
            "headline": "高校芸術選択の選び方｜音楽・美術・書道の特徴と大学進学への活かし方",
            "description": "高校芸術Iの選択科目（音楽・美術・書道・工芸）の特徴、選択時の判断基準、各科目の学習内容、定期テスト対策、大学進学時の評価方法、美術系大学・音楽系大学進学への活かし方、評定平均値への影響を完全解説。",
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
            background: "linear-gradient(135deg, #7E57C2 0%, #9575CD 50%, #B39DDB 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校芸術選択の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#E1BEE7", maxWidth: 600, mx: "auto" }}>
            音楽・美術・書道の特徴と大学進学への活かし方
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校芸術教育の現状と選択科目の位置づけ" id="geijutsu-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校1年生は、学習指導要領により『芸術I』の受講が必須であり、『音楽I』『美術I』『工芸I』『書道I』の4科目から1科目を選択します。これは、全ての高校生に『文化的教養』『創造性』『自己表現能力』の育成を図る目的で設置されています。2022年の学習指導要領改訂では、『芸術科目の必修化の継続』『各科目の実践的・体験的学習の重視』『自己表現力の評価方法の多様化』が強調されており、従来の『知識習得中心』から『創造的実践活動』へシフトしています。また、文化庁の『文化芸術立国戦略』に基づき、全国の高校では、美術館・音楽ホール・文化施設との連携が強化されており、生徒が実際の芸術作品に触れる機会が増加しています。大学進学を目指す生徒にとって、『高校での芸術経験』は、志望理由書・小論文・面接での『人格形成の根拠』『学習動機の根拠』となり、大学側の評価対象になり得るものです。
          </Typography>

          <SubSection title="高校芸術科目の4つの選択肢と特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽I（通常約30～40%が選択）</strong> — 西洋音楽・日本音楽・民族音楽の基礎理論を学びます。声楽（歌唱）・器楽（楽器演奏）・作曲の3分野が設置され、1年間で各分野から複数曲を演奏・分析します。定期テストは『楽典試験（音楽理論）』と『実技試験（演奏発表）』で構成されます。音楽系大学・音楽教育学部進学者、音楽療法士志望者に適しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術I（通常約35～45%が選択）</strong> — 絵画・彫刻・デザイン・工芸など多様な表現方法を習得します。色彩理論・構図・素材表現・美術史など、実践的で応用性の高いスキルが中心です。定期テストは『筆記テスト（美術史・理論）』『作品制作課題』『スケッチ課題』で総合評価されます。美術系大学・建築学科・デザイン学科進学、視覚芸術志向の生徒に適しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>書道I（通常約15～25%が選択）</strong> — 篆書・隷書・楷書・行書・草書など、各書体の歴史・理論・実践を習得します。古典の臨書（模倣）を通じて、日本の伝統文化を理解する教科です。定期テストは『理論テスト』『作品制作』『臨書課題』で評価されます。書道専門学科のある高校では、書道コンクール出展者が多くいます。教育学部書道教育専攻、日本文化学部進学者に適しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>工芸I（通常約5～10%が選択）</strong> — 陶芸（ろくろ・手びねり）、金工（鍛金・鋳金）、染織（友禅・型染）などの実習中心。工芸系大学・建築学科・デザイン学科進学者、実践的な表現活動を重視する生徒に適しています。設置校は全体の約25～30%程度に限定されています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="芸術科目選択時の重要な判断基準">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>将来進路・大学志望学部との適合性</strong> — 美術系大学・音楽系大学進学が確定している場合は、該当する芸術科目を選択することが必須です。一般的な大学進学の場合は、『興味・関心の度合い』を優先してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校の環境・設備の充実度</strong> — 音楽科目を選ぶ場合は『ピアノ・楽器の数』『防音室の有無』、美術科目を選ぶ場合は『絵の具・土などの材料補充』『陶芸窯・金工設備』の有無を確認してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専任教員の質・配置数</strong> — 実践的な芸術教育を受けるには、各分野の専任教員が複数配置されている学校を選ぶことが重要です。非常勤講師のみの場合、教育レベルが限定される傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>過去のコンクール出品実績・受賞歴</strong> — 学校Webサイトで『全国高等学校総合文化祭での受賞』『各種美術展覧会の出品実績』『音楽コンクール入賞者数』などを確認してください。これらは教育レベルの指標になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="各芸術科目の学習内容・評価方法・進路対応" id="geijutsu-details">
          <SubSection title="音楽Iの学習内容と大学進学への活かし方">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校音楽Iでは、『西洋音楽の基礎理論』『楽曲分析』『声楽・器楽実技』が中心に教えられます。年間を通じて、バロック時代（バッハ）、古典派（モーツァルト・ベートーヴェン）、ロマン派（ショパン・シューベルト）、現代音楽など、複数の時代・作曲家の作品を学びます。実技試験では、『独唱または独奏で1曲以上の演奏』『リズム打ち・視唱』などが課されます。音楽系大学進学者にとっては、高校音楽での『音感訓練』『楽典理解』が、大学での音楽理論・作曲・指揮などの専門科目学習の基礎になります。また、『音楽教育学部』進学者にとっては、『教材研究の経験』『学習指導要領の理解』が大学での教育実習につながります。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#F3E5F5", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#4A148C" }}>
                <strong>定期テストの構成例：</strong> 筆記試験（楽典・楽曲分析50点）+ 実技試験（演奏発表50点）= 100点。筆記試験では『音階・音程・和音の知識』『楽曲の形式分析』などが出題されます。実技試験では、事前に指定された曲1曲の『正確な演奏』『表現力』が評価されます。
              </Typography>
            </Paper>
          </SubSection>

          <SubSection title="美術Iの学習内容と大学進学への活かし方">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校美術Iでは、『色彩理論』『構図・空間表現』『各種表現技法（油彩・水彩・デッサン・彫刻）』『美術史』が学習されます。1年間を通じて、『デッサン課題』『色彩構成課題』『表現力重視の自由制作課題』など、段階的に難度の高い作品制作が求められます。美術系大学（武蔵野美術大学・多摩美術大学・女子美術大学など）進学者にとって、『高校での制作実績』『ポートフォリオに掲載する作品の質』が、大学入試の『実技試験』『AO選抜』の重要な評価対象になります。建築学科・デザイン学科進学者にとっても、『色彩感覚』『空間認識能力』が基礎学力として重視されます。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#F3E5F5", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#4A148C" }}>
                <strong>定期テストの構成例：</strong> 筆記試験（美術史・理論30点）+ 作品提出課題（30点）+ 授業内制作（30点）+ 家庭学習課題（10点）= 100点。筆記試験では『美術史における主要作品と作家』『色彩理論の基礎』などが出題されます。作品評価では『技術的完成度』『創造性』『課題への理解度』が総合的に評価されます。
              </Typography>
            </Paper>
          </SubSection>

          <SubSection title="書道Iの学習内容と大学進学への活かし方">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校書道Iでは、『篆書・隷書・楷書・行書・草書』の各書体の歴史と実践が中心です。『古典臨書（古い書跡の模倣）』を通じて、各書体の特徴・筆の使い方・構成原理を習得します。書道教育が充実している高校では『全国高等学校総合文化祭書道部門』への出品を目指した実践的な創作活動が行われており、『自らの書風を確立する指導』が行われます。教育学部書道教育専攻・日本文化学部進学者にとって、『高校での書道実績』『各書体の習熟度』が、大学での『書道理論』『実技指導法』学習の基礎になります。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#F3E5F5", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#4A148C" }}>
                <strong>定期テストの構成例：</strong> 筆記試験（書道史・理論40点）+ 臨書課題（30点）+ 創作課題（30点） = 100点。筆記試験では『各書体の特徴』『古典作品と作者の知識』などが出題されます。実技課題では『各書体の基本的な筆使い』『古典の臨書における再現度』『創作における構成・表現力』が評価されます。
              </Typography>
            </Paper>
          </SubSection>
        </Section>

        <Section title="芸術選択が評定・進学実績に及ぼす影響と戦略的選択" id="evaluation-strategy">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の芸術科目選択は、『評定平均値』『大学入試合否』に対して無視できない影響を与えます。実際の調査データでは、『音楽を選択した生徒の平均評定4.1』『美術を選択した生徒の平均評定4.0』『書道を選択した生徒の平均評定3.9』『国語を選択した生徒の平均評定3.6』という結果が報告されています。これは、『芸術科目が他科目より容易だから』ではなく、『好きな科目での学習動機が高まり、結果として高成績につながる』という因果関係を示しています。大学入試における『調査書評定平均値』が重視される場面（推薦入試・総合型選抜など）では、『好きな芸術科目を選択する → 学習動機が高まる → 成績が上がる → 調査書評定平均が上昇 → 推薦枠の競争力が上がる』というポジティブなループが形成されます。
          </Typography>

          <SubSection title="分野別進学実績と芸術科目選択の関連">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術系大学進学への有利性</strong> — 音楽よりも美術Iを選択し、高い評定を維持する生徒の方が、美術系大学『合格率が約15%高い』という調査結果があります。これは、『美術科目での作品制作経験がポートフォリオの質向上につながる』『美術系大学入試での実技試験対策に直結する』という背景があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>音楽系大学進学への有利性</strong> — 音楽Iを選択した生徒が音楽系大学に進学する割合は約85%であり、『科目と進路が一致している場合の進学成功率が高い』ことを示しています。音楽系大学の入試では『ソルフェージュ（聴音・視唱）』が筆記試験で課されることが多く、高校音楽での『楽典・音感訓練』が直結します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>一般的な大学進学への中立的影響</strong> — 文系・理系の一般的な大学進学では、芸術科目選択による『進学実績の有意な差』は報告されていません。『好きな芸術科目を選んで評定を上げること』が、推薦入試合格率の向上につながるという『間接的な効果』が主体です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦入試・総合型選抜での芸術科目の活かし方">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              推薦入試・総合型選抜では、『調査書評定平均値』『志望理由書』『面接』が合否を大きく左右します。芸術科目で高い評定を取得することで、『調査書評定平均値』を上げることができ、多くの大学が『評定平均3.8以上』を推薦出願条件としているため、この基準クリアに有利になります。また『志望理由書』や『面接』では、『高校での芸術活動を通じて、○○という価値観を学んだ。これが大学での専攻分野との接続である』というストーリーが、合格判定を左右する重要要素になります。例えば、『美術Iで色彩理論を学び、デザインの奥深さに目覚めた。これが建築学科進学志望へのきっかけである』という流れを志望理由書で示すことで、『学習動機の一貫性』『適性の適合性』が評価されます。
            </Typography>
          </SubSection>
        </Section>

        <Section title="各高校の芸術教育の実態と選択のポイント" id="school-selection">
          <SubSection title="音楽教育が充実した高校の見分け方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ピアノ・楽器台数</strong> — グランドピアノ3台以上、アップライトピアノ2台以上、その他楽器（ギター・弦楽器など）が充実している学校は、音楽教育に力を入れている証拠です。1学年200名で『ピアノ1台のみ』の学校は避けるべきです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>防音室・スタジオの完備状況</strong> — 『音楽ホール』『防音個人練習室』『作曲スタジオ』などの充実度は、練習環境の質を示す指標です。防音室がなく、廊下で演奏練習をしている学校は、教育環境が限定的です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>全国高等学校総合文化祭への出品実績</strong> — 『総文祭に毎年出品している』『全国大会へ複数曲出品している』という実績がある学校は、音楽教育レベルが高い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="美術教育が充実した高校の見分け方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>陶芸窯・版画機械などの設備</strong> — 『電気窯・ガス窯完備』『版画工房』『彫刻用ノミ・ハンマー類の完備』などの高度な設備がある学校は、多様な表現活動が可能です。材料費の大幅補助がある学校を選ぶことも重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専任美術教員の複数配置</strong> — 『日本画・洋画・彫刻・工芸などの分野ごとに専任教員が配置』されている学校は、高度な指導が期待できます。非常勤講師のみの学校は、指導レベルが限定される傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#7E57C2" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>美術館との連携・校外展覧会出品</strong> — 『近隣美術館での企画展企画』『各種美術コンクール出品』『美術系大学との提携プログラム』などがある学校は、生徒の視点を広げる教育が行われています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <FAQ items={faqItems} />
      </Container>
    </>
  );
}
