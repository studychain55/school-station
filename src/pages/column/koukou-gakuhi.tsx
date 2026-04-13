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

export default function KoukouGakuhiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の学費・授業料と奨学金ガイド｜公立・私立・通信の費用比較" },
  ];

  const faqItems = [
    {
      question: "公立高校の年間学費はいくらですか？",
      answer: "公立高校（全日制）の年間学費は、授業料0円（高等学校等就学支援金で無償化）、PTA会費・教材費・修学旅行積立で合計20～50万円程度です。授業料は無償ですが、PTA会費は学校や地域によって異なり、月額1,000～2,000円が一般的です。修学旅行積立は3年間で100万円を超える学校も多く、積立期間は通常2年次から開始されます。部活動や学用品費を含めると、実質的な負担はさらに増加します。",
    },
    {
      question: "私立高校の年間学費はいくらですか？",
      answer: "私立高校の年間学費は、授業料・施設費・教材費の合計で60～150万円が一般的です。進学実績が高い難関私立では100～150万円、中堅私立では60～90万円、やや偏差値が低い私立では50～80万円というように、学校の偏差値・進学実績によって大きく異なります。都市部の私立が地方よりも高い傾向があり、共学・女子校より男子校の方がやや安価な場合が多いです。修学旅行や体験学習が充実している学校は、別途積立金が20～30万円必要になることもあります。",
    },
    {
      question: "高等学校等就学支援金制度とは何ですか？",
      answer: "高等学校等就学支援金制度は、国が授業料を負担する制度です。2010年の創設以来、段階的に対象者が拡大され、現在は世帯収入が910万円未満の家庭の生徒が対象となっています。公立高校の授業料（年間11,800円相当）を全額、私立高校の授業料（年間39,600円相当）を上限として国が補助します。申請は入学時に学校を通じて行い、4月から月々の支援金が交付されます。ただし、支給対象外となった場合や減額となる場合もあるため、家庭の経済状況に応じた確認が重要です。",
    },
    {
      question: "都道府県の私立高校補助制度にはどのような違いがありますか？",
      answer: "都道府県の私立高校補助制度は、各地域の財政状況によって大きく異なります。東京都・神奈川県・大阪府などの経済力がある地域では、授業料の50～100%を補助する制度が充実しており、実質的には公立並みの負担で私立に通える場合があります。一方、財政が厳しい自治体では、補助制度がない、または低額補助にとどまる場合もあります。例えば、東京都は授業料補助に加えて入学金補助も行っており、世帯収入条件によっては150万円を超える補助を受けられます。制度は毎年変更される可能性があるため、必ず志望する学校の所在地の最新情報を確認してください。",
    },
    {
      question: "奨学金と給付型奨学金の違いは何ですか？",
      answer: "奨学金には、返済義務のある『貸与型奨学金』と返済不要の『給付型奨学金』の2種類があります。貸与型は日本学生支援機構（JASSO）が主体で、利息の有無による『第一種』『第二種』に分かれており、毎月3～12万円を借り、将来返済します。給付型奨学金は、成績優秀者や経済的困窮者を対象に、返済義務なしで月額数千円～数万円が給付されます。高校段階では給付型が充実しており、各都道府県や民間団体が独自の給付制度を提供しています。返済不要の給付型は競争が激しく、採用人数が限定されるため、書類審査や面接試験に合格する必要があります。",
    },
    {
      question: "高校の特待生制度と授業料減免の仕組みは？",
      answer: "私立高校の特待生制度は、学力が優秀な生徒や、スポーツ・芸術に秀でた生徒を対象に、授業料の全額または一部を免除する制度です。学力特待では、入試での成績が一定水準以上であれば、自動的に適用される場合が多いです。スポーツ特待では、全国大会出場経験者や地域の有力選手を対象に、授業料全免除に加えて月額支援金を支給する場合もあります。特待生の基準と免除額は学校によって大きく異なり、募集要項に明記されています。注意点として、特待生は評定平均が一定水準を下回ると、翌年度に免除が取り消される『条件付き』である場合が多いため、入学後の成績維持が重要です。",
    },
  ];

  return (
    <>
      <SEO
        title="高校の学費・授業料と奨学金ガイド｜公立・私立・通信の費用比較 | School Station"
        description="公立高校の年間学費（授業料・PTA費・修学旅行積立：20～50万円）、私立高校の学費（授業料・施設費・教材費：60～150万円）、高等学校等就学支援金制度の仕組み、都道府県別の私立高校補助制度の違い、奨学金・給付型奨学金の申請方法と注意点を完全解説。"
        canonical="/column/koukou-gakuhi/"
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
            "headline": "高校の学費・授業料と奨学金ガイド｜公立・私立・通信の費用比較",
            "description": "公立高校の年間学費（授業料・PTA費・修学旅行積立：20～50万円）、私立高校の学費（授業料・施設費・教材費：60～150万円）、高等学校等就学支援金制度の仕組み、都道府県別の私立高校補助制度の違い、奨学金・給付型奨学金の申請方法と注意点を完全解説。",
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
            高校の学費・授業料と奨学金ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            公立・私立・通信の費用比較
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="公立高校と私立高校の学費の大きな違い" id="gakuhi-kosa">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校選びの際、学費は大きな判断基準の一つです。公立高校と私立高校では、費用に大きな差があり、その差は年間で数十万円に及びます。公立高校は授業料が無償化されている一方で、私立高校は授業料だけで年間30～60万円かかることが一般的です。高等学校等就学支援金制度により、一定の家庭収入以下の世帯は補助を受けられますが、私立高校の場合、補助額が授業料を完全にカバーするとは限りません。さらに、都道府県ごとに異なる補助制度があり、同じ私立高校でも地域によって実質的な負担額が異なることは見落とされやすい点です。高校選びの段階で、正確な費用情報を把握し、家庭の経済状況に合わせた学校選択をすることが重要です。進学後に経済的理由で高校を中退するという最悪の事態を避けるためにも、入学前のシミュレーションが欠かせません。
          </Typography>

          <SubSection title="公立高校の年間学費（20～50万円）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              公立高校は授業料が無償化されているため、その他の費用の構成を理解することが重要です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業料：0円（高等学校等就学支援金で無償化）</strong> — 世帯収入910万円未満の家庭では、国から月額9,900円が支給され、授業料がゼロになります。この制度により、公立高校の最大の経済的メリットが実現しています。世帯収入がこれを超える場合でも、授業料は月額9,900円程度と非常に安価です。ただし、申請手続きを忘れると支給を受けられない場合があるため、入学時の書類作成時に学校から指示をよく受けてください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>PTA会費・諸費：月額1,000～2,000円（年間12,000～24,000円）</strong> — PTA活動の運営費として、月額1,000～2,000円が徴収されます。地域差や学校差があり、田舎の学校ほど安く、都市部の学校ほど高い傾向があります。PTA会費は進学指導に直結しない費用のため、保護者の中には負担感を覚える人も多いです。一部の学校では、PTA活動の実績報告書を提示し、費用の透明性を向上させる取り組みが進んでいます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教材費・学用品：年間5～10万円</strong> — 教科書代（2,000～5,000円）、副教材費（5,000～15,000円）、実習教材費（実験・実習がある場合）、体育着・上履きなどの購入費用が含まれます。特に、理科系の実験が多い学校では教材費が高くなります。購入の多くは入学時と進級時に集中するため、家庭への経済的負担は1年目が最も大きくなります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>修学旅行積立金：年間15～35万円（3年間で45～105万円）</strong> — 修学旅行は高校生活の最大イベントであり、積立金は年間を通じて集められます。目的地によって大きく異なり、国内（広島・京都など）が45～60万円、国外（韓国・オーストラリア）が80～150万円程度です。最近では、経済的理由で修学旅行参加を辞退する生徒もおり、一部の学校では参加を任意化し、不参加の場合は別プログラム用意する対応を取っています。3年間で積立金の総額は非常に大きいため、家計計画の重要な要素となります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動費：部活による（月額0～20,000円）</strong> — 文化部は費用が少ないことが多いですが、運動部は部費が月額数千円～1万円、さらに遠征費・合宿費が年間数万円～数十万円かかります。全国大会を目指す部活は、合宿費だけで50万円を超える場合もあり、家庭の経済状況に影響を与える場合があります。一部の学校では、部活動費の補助制度を設けており、経済的困窮家庭の生徒が部活を続けやすい環境づくりを進めています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立高校の年間学費（60～150万円）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              私立高校の学費は、授業料が主体となり、学校による差が大きいです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業料：年間30～60万円（月額25,000～50,000円）</strong> — 私立高校の授業料は、学校の進学実績・立地・設備充実度によって大きく異なります。難関進学校（開成・灘・東大寺など）では60～80万円、中堅進学校では40～60万円、やや偏差値が低い学校では30～45万円が一般的です。高等学校等就学支援金（年間最大39,600円相当）が支給されても、実質的な負担額は年間25～55万円に及びます。都市部の私立が地方よりも高い傾向があり、東京や大阪の難関私立は100万円前後の授業料を設定している学校もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>施設費・設備費：年間10～30万円</strong> — 図書館・実験室・体育館・カフェテリア・ICT環境などの維持費として、年間10～30万円が徴収されます。校舎の老朽化が進んでいる学校では改築費用の積立として、月額5,000円以上の追加徴収がある場合もあります。施設費は学校の設備投資政策によって大きく異なり、ICT環境を重視する学校ではタブレット・PCの購入・メンテナンス費用が追加されることもあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教材費・副教材費：年間5～15万円</strong> — 私立高校の教材費は公立よりも高い傾向があり、オリジナル教材・副教材の費用が多く発生します。進学指導に力を入れる学校では、大学受験対策用の問題集・予想問題などの購入費が加算されることもあります。また、英語教育や国際交流に力を入れている学校では、海外の教材やオンライン学習プラットフォームの利用料が別途かかる場合があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>修学旅行積立金：年間20～40万円（3年間で60～120万円）</strong> — 私立高校の修学旅行は、公立よりも目的地が豪華で、海外（オーストラリア・シンガポール・ニュージーランド）へ行く学校が多いです。その結果、積立金が年間30～40万円に上る学校も珍しくありません。国内に限定する学校でも年間25～35万円程度が一般的です。一部の難関私立では、修学旅行に代わる海外研修プログラムを用意しており、参加費用が100万円を超える場合もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その他の費用：入学金・制服代など</strong> — 入学時には、入学金（10～30万円）、制服代（5～10万円）、上履き・体育着などが一度に必要になります。特に、制服にこだわる高級私立では、制服代が15万円を超える場合もあります。これらの入学時費用が、総学費の大きな部分を占めることになり、家計計画では3年間の費用だけでなく、初年度の支出を特に注視する必要があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高等学校等就学支援金制度の仕組みと申請方法" id="shugaku-shien">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            国が授業料を負担する高等学校等就学支援金制度は、2010年の創設以来、段階的に拡大されてきました。最新の制度では、世帯収入910万円未満の家庭（年収の目安）であれば、公立高校の授業料（月額9,900円）が全額、私立高校の授業料（月額最大39,600円の範囲）が補助されます。この制度により、経済的理由で高校進学を諦める必要がなくなったことは大きな前進です。ただし、支給対象外となるケースもあり、特に世帯構成が複雑な家庭（両親が離婚・再婚している場合など）では、支給判定に時間がかかることがあります。申請は学校が一括して行うのが一般的ですが、申請書の記入漏れや必要書類の不備があると、支給が遅れる可能性があるため、学校からの指示を丁寧に確認することが重要です。
          </Typography>

          <SubSection title="支給対象者と支給額">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>支給対象者：世帯収入910万円未満（年収の目安）</strong> — 支給判定は保護者の市区町村民税の課税標準額および控除額に基づいて行われます。年収の目安は約910万円ですが、扶養家族の人数や実際の控除額によって判定結果が変わる場合があるため、正確には学校の進路指導の先生に相談することをお勧めします。世帯構成が複雑な場合（両親が別居・離婚している場合など）は、判定にどちらの親の情報を使用するかについて、学校に確認が必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>公立高校：月額9,900円（年間118,800円）</strong> — 公立高校の授業料がほぼ完全にカバーされます。ただし、世帯収入が一定以上の場合、支給額が減額される可能性があります。具体的には、市区町村民税の課税標準額が300,000円未満であれば月額9,900円、300,000円以上であれば月額6,600円、520,000円以上であれば月額3,300円となります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>私立高校：月額最大39,600円（年間最大475,200円）</strong> — 私立高校の支給額は、学校の設置認可都道府県によって異なります。東京都・神奈川県・大阪府など、追加の補助がある都道府県では、国の支給額に加えて都道府県の補助を受けられ、実質的には授業料がほぼ無償になる場合もあります。一方、補助制度が充実していない都道府県では、支給額だけでは授業料をカバーできず、実質負担が大きくなる傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="申請の手続きと注意点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>申請は学校経由で行うのが一般的</strong> — 入学時に学校から申請書が配布され、保護者が記入して提出します。申請に必要な書類は、課税証明書（または非課税証明書）など限定的であり、多くの学校では学校が一括して市区町村から取得する体制になっています。ただし、前年度の課税情報が未確定の場合（個人事業主など）は、追加書類が必要になることがあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>支給時期は4月以降（初年度は夏以降になる場合もある）</strong> — 国の就学支援金は、市区町村から課税情報が送付された後に初めて支給判定が行われるため、初年度は夏以降の支給になる場合があります。その間、授業料を学校に納付する必要があるため、家庭の資金繰りに影響を与える場合があります。学校によっては、就学支援金の支給予定額を差し引いた請求を行う制度を設けており、その場合は資金繰りの負担が軽減されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>支給対象外となる場合もある</strong> — 世帯収入が基準を超えている、または高等専修学校や各種学校などの対象外の教育機関に進学した場合は、支給を受けられません。また、高卒資格を持つ者や、既に他の学校から就学支援金を受給している者も対象外になります。こうした対象外の判定について異議がある場合は、学校の進路指導の先生に相談し、判定理由を確認することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="都道府県の私立高校補助制度の違い" id="todofuken-hojo">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            国の就学支援金に加えて、各都道府県が独自に私立高校生への補助制度を設けています。これらの制度は自治体の財政力によって大きく異なり、同じ私立高校でも都道府県が異なれば実質的な負担額が大きく変わります。経済的に恵まれた地域（東京・神奈川・大阪など）では、授業料補助に加えて、入学金補助・教科書代補助など複数の制度が用意されており、年間100万円を超える補助を受けられる家庭も存在します。一方、財政が厳しい地域では、補助制度そのものが存在しない、または補助額が非常に低い場合があります。このため、高校選びの際には、単に学校の偏差値や教育内容だけでなく、その学校が所在する都道府県の補助制度を必ず確認することが重要です。
          </Typography>

          <SubSection title="手厚い補助制度のある都道府県（東京・神奈川・大阪など）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>東京都：授業料補助＋入学金補助で最大150万円超</strong> — 東京都は『私立高等学校等授業料補助金』と『私立高等学校入学金補助金』の2つの制度を設けています。授業料補助は世帯年収に応じて月額最大39,600円（年間475,200円）、入学金補助は最大250,000円が支給されます。これにより、国の就学支援金と合わせると、年収590万円程度の家庭では、私立高校の授業料・入学金がほぼ全額カバーされることになります。さらに、多子世帯（3人以上の子ども）の場合は、補助額が加算される場合もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>神奈川県：授業料補助で最大80万円弱（年額）</strong> — 神奈川県は『私立高等学校等生徒学費補助金』として、年間800,000円を上限に補助を行っています。世帯年収によって補助率が異なり、年収450万円未満の家庭では授業料がほぼ無償化されます。また、入学金補助については別制度で最大250,000円が支給される場合もあり、初年度の負担が大幅に軽減されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大阪府：授業料補助＋入学金補助で最大60～80万円</strong> — 大阪府は『私立高等学校等の生徒に係る授業料補助』として、年間600,000円程度の補助を行っています。また、入学金補助も別途用意されており、合計で初年度80万円を超える補助を受けられる家庭も存在します。ただし、補助額は所得限度額によって厳しく制限されており、年収が一定以上の家庭では補助を受けられない場合があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="補助制度が限定的な都道府県への対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>補助制度が存在しない地域での選択肢</strong> — 一部の都道府県では、県独自の私立高校補助制度が存在しない、または非常に限定的な場合があります。このような地域では、国の就学支援金と、高校独自の特待生制度・奨学金に頼る必要があります。学校説明会では、『県の補助制度について確認してください』と学校側から説明されることが多いため、具体的な情報は各都道府県の教育委員会のWebサイトから取得することをお勧めします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>補助内容の定期的な確認が重要</strong> — 私立高校補助制度は、毎年見直されており、予算の都合で補助額が削減される可能性があります。進学後に補助内容が変わる場合もあり、家庭の資金計画に影響を与えることがあります。最新の制度情報は、志望する学校が所在する都道府県の教育委員会のWebサイト、または学校の進路指導室で確認することが確実です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="奨学金と給付型奨学金の申請方法と注意点" id="shogakukin">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の学費が家庭の経済状況で支払えない場合、奨学金制度を活用することが重要です。奨学金には、返済義務のある『貸与型』と返済不要の『給付型』があり、それぞれ特徴と条件が異なります。給付型は競争が激しく採用人数が限定されるため、貸与型を申請することも重要な選択肢です。高校段階では、都道府県と民間団体が複数の給付型奨学金制度を設けており、複数の制度に同時申請することで、採用される確率を高めることができます。奨学金申請は進学後ではなく、進学前（中学卒業前）に申請可能な制度も多いため、早めの情報収集が重要です。
          </Typography>

          <SubSection title="貸与型奨学金（返済義務あり）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>日本学生支援機構（JASSO）の奨学金：月額3～12万円</strong> — JASSOの奨学金は、高校段階の最大の経済支援制度です。『第一種奨学金（無利息）』と『第二種奨学金（利息付き）』の2種類があり、成績や経済状況に応じて選択できます。申請は学校が一括して行うのが一般的で、申請時期は毎年4月です。貸与額は毎月指定の銀行口座に振り込まれ、高卒後に返済が開始されます。返済期間は借りた期間によって異なり、3年間借りた場合（36万円）は最大20年かけて返済することになります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>都道府県の奨学金：月額5,000～20,000円</strong> — 各都道府県が独自に奨学金制度を設けており、JASSOの奨学金に加えて申請できる場合が多いです。無利息の貸与型が主体で、返済期間はJASSOより短い場合が多いです。申請条件や返済期間が都道府県によって異なるため、志望する学校が所在する都道府県の教育委員会のWebサイトで確認することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="給付型奨学金（返済不要）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>各都道府県の給付型奨学金：月額5,000～30,000円</strong> — 経済的困窮家庭の生徒を対象に、返済不要の給付型奨学金を提供する都道府県が増えています。採用人数は限定的（都道府県全体で数十～数百人）で、成績基準や家庭の経済状況による書類選考が行われます。給付額は月額5,000～30,000円が一般的で、家庭の経済状況に応じて複数段階に分かれていることが多いです。申請時期は毎年6月頃であることが多く、高1時点での申請が可能な制度も存在します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>民間団体の給付型奨学金：月額10,000～50,000円</strong> — 財団や企業が独自に設ける給付型奨学金があります。成績優秀者を対象にした『学力給付奨学金』（月額30,000～50,000円）、特定の地域・職業志向者を対象にした『地域創生奨学金』、困窮家庭の生徒を対象にした『福祉奨学金』など、種類が多岐に亘ります。採用人数が極めて限定的（全国で数名～数十名）な場合が多いため、条件が自分に合致しているかの確認が重要です。情報は、学校の進路指導室に掲示されるほか、『奨学金情報サイト』（scholarships.jp など）で検索することができます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="奨学金申請時の注意点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>給付型は複数同時申請が重要（採用確率を高める）</strong> — 給付型奨学金の採用人数は限定的であり、学校独自の給付制度を含めても、全体で数%の競争率になることが一般的です。複数の給付型制度に同時申請することで、採用される可能性を高めることができます。ただし、申請書の記入漏れや論文の質が採否を大きく左右するため、進路指導の先生からアドバイスを受けることが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>給付型奨学金採用後の評定維持が条件（多くの場合）</strong> — 給付型奨学金の多くは、『進学後の評定平均が一定以上でなければ、翌年度から返納義務が生じる』という条件が付いています。評定平均の条件は制度によって異なり（3.0以上が一般的）、入学後の学習態度が重要になります。特に、進学後に成績が不振になった場合、奨学金返納義務が生じる可能性があるため、進学後も学習に取り組む必要があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>奨学金は家庭の経済状況の合否判定に使用される可能性</strong> — 給付型奨学金申請時に提出した『家庭の経済状況説明書』は、進学後に授業料減免の対象判定にも使用される場合があります。つまり、給付型奨学金に採用されると、自動的に授業料減免制度の対象になる場合があり、複数の支援制度を同時に受けることが可能になります。このため、奨学金申請は単なる資金調達ではなく、経済的支援制度全体の入り口として認識することが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="家庭の経済状況に合わせた高校選びのコツ" id="keizai-taio">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学費は高校選びの重要な要素であり、進学後に経済的理由で中途退学することは、人生への悪影響が大きいです。最初の段階で、家庭の経済状況と希望する学校の学費を確認し、支援制度（就学支援金・都道府県補助・奨学金など）をどの程度活用できるかをシミュレーションすることが重要です。進学後に経済状況が悪化した場合のセーフティネットもあるため、学校の進路指導の先生に事前に相談しておくことをお勧めします。
          </Typography>

          <SubSection title="学費シミュレーションのポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>3年間の総学費を計算する（初年度と2～3年目で異なる）</strong> — 初年度には、入学金・制服代・教材費が一度に必要になり、2～3年目より支出が大きい傾向があります。3年間の総学費を計算し、平均的な年間支出額を把握することが重要です。修学旅行積立金が3年目に本格化する学校では、3年目の支出が最も大きくなる場合があるため、学校から事前に予定を確認しておくことをお勧めします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>支援制度を全て活用したシミュレーション</strong> — 単に学費から国の就学支援金を引くだけでなく、都道府県の補助制度・学校の特待生制度・奨学金までを含めた総合的なシミュレーションを行うことが重要です。志望する学校の所在地の都道府県補助制度を確認し、その学校の学費ホームページで『実質的な年間負担額の例』を確認することをお勧めします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学後の奨学金・支援制度の利用可能性を確認</strong> — 進学前の申請では採用されなかった奨学金や支援制度でも、進学後に再申請できる場合があります。特に、進学後に家庭の経済状況が悪化した場合の『緊急奨学金』や『授業料徴収猶予制度』については、学校の事務室に早期に相談することが重要です。
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
