import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LanguageIcon from "@mui/icons-material/Language";

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

export default function KoukouLanguagePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "外国語教育に力を入れる高校の選び方｜英語以外の言語教育も充実した学校" },
  ];

  const faqItems = [
    {
      question: "高校の英語教育はどのように変わっていますか？",
      answer: "2022年の学習指導要領改訂により、高校英語教育は『4技能（読む・聞く・話す・書く）』重視へシフトしました。従来の『読み書き中心』から『コミュニケーション能力の育成』へ転換され、スピーキングとライティングの配点が大幅に増加しました。大学入学共通テストでは『リーディング』『リスニング』に分離され、リスニングの配点が100点から100点のままですが、難度が高まっています。高度な英語教育環境がある学校では、TOEFL対策、英検1級対策、ネイティブスピーカーとの会話実習など、実践的な学習が展開されています。",
    },
    {
      question: "ネイティブ教師の配置状況は学校によって異なりますか？",
      answer: "異なります。進学校や私立中高一貫校では、1学年あたり4～6名のネイティブスピーカーを配置する学校が多い一方、地方の公立高校では1～2名の配置にとどまっている学校も多くあります。配置人数だけでなく、『何時間の授業でネイティブが担当しているか』『学校全体で週何時間のネイティブ授業があるか』を確認することが重要です。全授業時間の30%以上がネイティブ担当の学校は、スピーキング能力の向上が顕著です。",
    },
    {
      question: "英検やTOEFLの対策講座は高校で行われていますか？",
      answer: "進学校では、英検2級～準1級対策講座、TOEFL iBT対策講座が放課後や土曜日に開講されています。これらの対策講座は、大学進学時の外部試験利用入試に直結しており、多くの大学が『英検1級合格』『TOEFL iBT 80点以上』といった基準を設定しています。一方、地方の公立高校では、このような講座の実施率が低い傾向があります。学校説明会で『英検対策講座の有無』『過去3年間の英検合格者数・合格レベル』を確認することが重要です。",
    },
    {
      question: "英語以外の言語（中国語・韓国語・フランス語など）を学べる高校はどのくらいありますか？",
      answer: "全国約3,000の高校のうち、英語以外の言語を提供する高校は約15～20%程度です。中でも『中国語』『韓国語』は、アジア地域との経済関係の深化に伴い、設置校が増加しています。『フランス語』『スペイン語』『ドイツ語』を提供する高校は限定的で、主に大都市圏の進学校に集中しています。都市部の高校では3～4言語から選択可能な環境が整備されている一方、地方では英語のみという学校がほとんどです。言語多様化を重視する場合は、居住地域での選択肢確認が必須です。",
    },
    {
      question: "Super English Language High School（SELHi）とは何ですか？",
      answer: "SELHi（スーパーイングリッシュランゲージハイスクール）は、文部科学省が指定する『英語教育拠点校』です。全国約150校がSELHi指定校として、最先端の英語教育カリキュラムの開発・実施を行っています。SELHi指定校では、英語科目だけで週10時間以上の学習が確保され、ネイティブスピーカーによる少人数授業、海外大学の先生による講義、英語検定試験対策が統合的に実施されています。大学進学時に『SELHi指定校出身』という実績が評価される傾向もあり、国際系学部や外国語学部進学に有利になります。",
    },
    {
      question: "海外留学プログラムはどのような高校で実施されていますか？",
      answer: "全国約600の高校が『姉妹校交流』『長期留学派遣』『短期語学研修』などのプログラムを実施しています。進学校では年間10～30名の生徒が1年間の交換留学を実施し、帰国後は帰国大学入試を利用して有名大学に進学するケースが多くあります。一方、一般的な公立高校では、3週間～1ヶ月の『サマーキャンプ』程度の実施にとどまっている学校も多いです。学校説明会で『長期留学派遣人数』『交換受け入れ人数』『提携留学先国・地域数』を確認することで、学校の国際交流レベルが判定できます。",
    },
  ];

  return (
    <>
      <SEO
        title="外国語教育に力を入れる高校の選び方｜英語以外の言語教育も充実した学校 | School Station"
        description="英語教育が充実した高校の特徴（ネイティブ教師・英検・TOEFL対策）、英語以外の言語（中国語・韓国語・フランス語・スペイン語）の授業がある高校、海外留学プログラム・国際交流が活発な学校の選び方、Super English Language High School（SELHi）の仕組み、語学力重視の大学入試（英語外部試験利用）への対応を完全解説。"
        canonical="/column/koukou-language/"
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
            "headline": "外国語教育に力を入れる高校の選び方｜英語以外の言語教育も充実した学校",
            "description": "英語教育が充実した高校の特徴（ネイティブ教師・英検・TOEFL対策）、英語以外の言語（中国語・韓国語・フランス語・スペイン語）の授業がある高校、海外留学プログラム・国際交流が活発な学校の選び方、Super English Language High School（SELHi）の仕組み、語学力重視の大学入試（英語外部試験利用）への対応を完全解説。",
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
            background: "linear-gradient(135deg, #00897B 0%, #009688 50%, #26C6DA 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            外国語教育に力を入れる高校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#B2DFDB", maxWidth: 600, mx: "auto" }}>
            英語以外の言語教育も充実した学校
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校英語教育の現状と2022年改訂後の変化" id="english">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            2022年の学習指導要領改訂は、高校英語教育に大きな変化をもたらしました。従来の『読解重視』『受験対策重視』から『実践的なコミュニケーション能力の育成』へシフトしており、これに対応できているかどうかが高校選びの重要なポイントになっています。大学入学共通テストのリーディング・リスニング分離、英語の4技能（読む・聞く・話す・書く）重視の方針により、高度な英語教育環境を持つ学校と、従来型の授業にとどまる学校の差が顕著になっています。国際系学部・外国語学部進学を目指す生徒にとって、高校段階での英語教育環境は、大学進学後の専門学習に直結する重要な要素です。同時に、文系・理系を問わず、全ての大学進学希望者にとって『英語』は最重要科目であり、高度な英語教育環境での学習経験は、共通テスト・個別試験のスコアに大きく影響します。
          </Typography>

          <SubSection title="高校英語教育の主な変化">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>4技能重視への転換</strong> — 従来の『読む・書く』中心から『読む・聞く・話す・書く』の全てを均等に扱う授業に変更されました。スピーキング・リスニング能力の育成が、高度な英語教育環境を持つ学校の差別化ポイントになっています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大学入学共通テスト『リーディング』『リスニング』の分離</strong> — 以前は『英語（筆記200点+リスニング50点）』でしたが、2025年から『リーディング100点』『リスニング100点』に分離されました。リスニング対策の重要性が著しく高まり、リスニング専門の授業時間を確保している学校が評価されるようになりました。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ネイティブスピーカーによる授業時間の増加</strong> — 文部科学省は『週3時間以上のネイティブ授業』を推奨しており、この基準を達成している学校の進学実績が高い傾向があります。全国のネイティブ教員数は約3,000名で、大都市部の進学校に集中しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検・TOEFL等の外部試験対策の組織化</strong> — 高度な英語教育を実施する学校では、英検準2級～1級、TOEFL iBTなどの資格試験対策を、正課または課外で組織的に実施しています。これらの資格は、大学入試での『英語外部試験利用入試』に直結し、合格の決め手になることが多いです。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="英語教育が充実した高校の見分け方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ネイティブ教員数と授業時間数</strong> — 学年200名の高校で3名以上のネイティブ教員配置があれば、週3時間以上のネイティブ授業が実現可能です。学校説明会で『ネイティブ教員数』『ネイティブが担当する授業時間数』『ネイティブとの会話授業の有無』を確認してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検合格実績</strong> — 学校Webサイトで『過去3年間の英検合格者数』『合格レベル別の人数』を確認してください。準1級以上の合格者が複数いる学校は、高度な英語教育が実施されています。一般的に、進学校では高3の時点で『英検2級以上保有率』が50%を超えています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>放課後の英検・TOEFL対策講座</strong> — 週3日以上の課外講座が開講されている学校は、語学教育に力を入れている証拠です。講座の参加率、合格率、講座を担当する教員の資格（TOEFL試験官資格など）も確認してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>リスニング専門の教室設備</strong> — リスニング用の音声スタジオ、個別リスニング学習室（Language Lab）の有無を確認してください。共通テスト対策の『速読・速聴教室』を設置している学校は、リスニング対策に真摯に取り組んでいます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="英語以外の外国語教育：多言語対応の学校の選び方" id="other-languages">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            グローバル化に伴い、英語以外の外国語教育を提供する高校が増加しています。中国語・韓国語・フランス語・スペイン語・ドイツ語など、複数言語から選択できる高校は、国際的な視野を広げたい生徒にとって大きな魅力です。ただし、これらの言語を学べる高校は全国でも限定的であり、都市部と地方の格差が大きい現状があります。
          </Typography>

          <SubSection title="英語以外の言語を提供する高校の実態">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              全国約3,000の高校のうち、英語以外の言語を教える高校は約15～20%程度に限定されています。言語別の設置状況は以下の通りです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中国語（約180校、約6%）</strong> — アジア地域における経済的な重要性の高まりに伴い、中国語教育を提供する高校は年々増加しています。北京官話（標準中国語）が標準的です。高1で基礎文法・簡単な会話、高2～3で読解・作文へ進む段階的学習が行われています。大学進学時に『中国語が堪能』という実績は、東アジア関連学部・国際ビジネス学部で評価されやすい傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>韓国語（約150校、約5%）</strong> — 文化交流の増加や、K-POPブーム、近年の日韓関係の改善により、韓国語教育を提供する高校が増加しています。設置校は首都圏と関西地方に集中しており、地方では少数です。ハングル文字の習得が比較的容易で、初心者でも学習進度が速い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>フランス語（約80校、約3%）</strong> — 伝統的な進学校（特に女子校）で設置されることが多いです。パリやフランス留学の人気が高く、大学の仏文学部進学を目指す生徒に選ばれています。発音・文法の難度が高く、学習期間が長期化する傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スペイン語（約60校、約2%）</strong> — ラテンアメリカ地域への経済関係の深化に伴い、スペイン語教育を提供する高校が増加しています。設置校は大都市圏に集中しており、全国での展開は限定的です。スペイン語圏の人口は5億人以上であり、グローバル就職を目指す生徒にとって有用な言語です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ドイツ語（約50校、約2%）</strong> — 西欧の伝統的な言語として、主に旧帝国大学附属高校や古い進学校で設置されています。学習者数は減少傾向にあり、今後の設置校数は減少する可能性があります。ただし、ドイツ語が堪能な人材の需要は根強く、就職市場での評価は高い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="複数言語選択が可能な高校の特徴">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              3言語以上から選択可能な高校は全国でも限定的ですが、以下の特徴を持つ学校が多いです。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>大都市圏の進学校</strong> — 東京・大阪・京都など、人口が多く、外国語教員の採用が容易な地域に集中しています。都市部の公立高校・私立高校では『英語・中国語・韓国語・フランス語』から選択できる環境が実現されやすくなっています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>国際的な教育方針の学校</strong> — 『国際教育に力を入れる』ことを標榜する学校は、複数言語教育に予算を配分し、留学プログラムも充実している傾向があります。こうした学校では、複数言語の習得が『グローバル人材育成』の中核戦略になっています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中高一貫校</strong> — 中学段階から言語選択を開始し、6年間で複数言語を深く学べる環境が整っています。中学で『英語+中国語』、高校で『フランス語を追加』というように、段階的に言語数を増やす教育設計をしている学校も存在します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="海外留学プログラムと国際交流の充実度を評価する" id="exchange">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高度な語学教育は、体験を通じた学習によって初めて血肉になります。海外での実践経験を提供する高校は、単なる『座学の質』だけでなく、『実社会での言語使用経験』を提供することで、生徒の語学力と国際意識を大幅に向上させています。大学進学の際、『交換留学経験者』『海外での短期研修参加者』という実績は、総合型選抜やAO入試での評価材料として機能する傾向があります。
          </Typography>

          <SubSection title="高校の海外交流プログラムの種類">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>1年間の交換留学（長期）</strong> — 進学校では、高2期間を利用して、姉妹校がある国への1年間の交換留学を実施しています。プログラムの参加者は年間5～20名程度で、帰国時に『帰国大学入試』を利用して難関大学に進学するケースが多いです。留学費用は学校負担または奨学金で支援される場合が多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>3～6ヶ月の中期留学</strong> — 高2の前半または後半の約4ヶ月間、海外の高校に入学し、現地の学生と同じカリキュラムで学ぶプログラムです。参加者は年間5～15名程度で、帰国後は国内の高校に復帰して大学受験に臨みます。留学経験が大学入試で評価される傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>2～4週間の短期語学研修（サマーキャンプ）</strong> — 夏休み期間を利用した短期研修です。参加者は年間30～100名程度で、費用は50～100万円程度です。大多数の高校が実施しており、『語学力向上』『異文化理解』『国際交流』の初期段階として機能しています。高1・高2の全員参加型の学校と、希望者対象の学校があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>オンライン国際交流・遠隔授業</strong> — パンデミック以降、『ZoomやTeamsを利用した外国の高校との交流授業』『国際コースの大学講師による遠隔授業』が増加しています。物理的な移動がない分、費用が低く（年間数千円～数万円）、参加ハードルが低い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="国際交流が活発な高校の見分け方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>姉妹校・提携校の数と国数</strong> — 多くの国に提携校を持つ高校ほど、交流の選択肢が広がります。一般的に、進学校では3～8ヶ国に提携校を持っています。提携校の所在国は、英語圏（アメリカ・カナダ・オーストラリア・イギリス）、アジア（中国・韓国・シンガポール）、ヨーロッパ（フランス・ドイツ）など、多様化する傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>交換受け入れ人数</strong> — 日本の高校から『派遣する留学生数』だけでなく、『海外から受け入れる留学生数』を確認してください。受け入れ人数が多い学校ほど、在学生が国際交流を身近に経験でき、国際意識の醸成が図られやすい傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>長期留学派遣者数と費用補助</strong> — 年間10名以上の長期留学派遣があれば、学校として本格的に国際教育に投資していることを示します。留学費用の学校負担・奨学金制度があれば、経済格差による機会喪失が防止されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>帰国大学入試での進学実績</strong> — 交換留学者の大学進学先を確認してください。東京大学・京都大学・早稲田大学・慶應義塾大学などの難関大学への進学実績が多い学校ほど、留学経験が進学に有効であることを示しています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="Super English Language High School（SELHi）とその優位性" id="selhi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文部科学省が指定する『Super English Language High School（SELHi）』は、英語教育の『実験校』として機能しています。SELHi指定校では、最先端の英語教育カリキュラムの開発・実施が行われており、指定校での学習経験は、大学進学時に評価される傾向があります。全国約150校がSELHi指定校として認定されており、指定校出身であることが『高度な英語教育環境で学んだ』という証拠になります。
          </Typography>

          <SubSection title="SELHi指定校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>週10時間以上の英語学習時間</strong> — 通常の英語科目（週7～8時間）に加え、『英語での教科横断的学習』『課題研究の英語発表』など、追加の英語学習機会が確保されています。これにより、英語を『教科』としてではなく『コミュニケーション手段』として使いこなす能力が養成されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数のネイティブスピーカーによる授業</strong> — SELHi指定校では、ネイティブ教員が学年あたり4～8名配置される傾向があります。ネイティブスピーカーによるスピーキング・リスニング訓練が週3～5時間確保され、発音・リスニング理解度が大幅に向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英語での教科学習（イマージョン教育）</strong> — 理科・社会・数学などの教科を『英語で』教える授業があります。例えば『English Biology』『English History』など、実験や歴史学習を英語で行うことで、『英語で専門知識を学ぶ』能力が育成されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英語検定試験対策の組織化</strong> — 英検1級、TOEFL iBT、IELTSなどの資格試験対策が正課・課外で実施されています。SELHi指定校の生徒の英検1級合格率は、全国平均の3～5倍高い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>海外大学連携・研究協力</strong> — SELHi指定校では、海外の大学の先生による特別講義、共同研究プロジェクト、研究論文の英語発表指導など、大学レベルの英語学習経験が提供されています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="SELHi指定校のメリットと進学時の評価">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>国際系・外国語系学部への進学有利性</strong> — SELHi指定校出身であることが『高度な英語教育環境で学んだ』という実績になり、これらの学部進学試験での面接・小論文で有利に評価される傾向があります。早稲田大学国際教養学部、上智大学外国語学部などでは、SELHi指定校出身者の合格率が高い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>共通テスト『英語』での高得点</strong> — SELHi指定校の生徒の共通テスト英語平均点は、全国平均よりも20～30点高い傾向があります。高度なリスニング・リーディング訓練により、試験対策がスムーズになります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英語外部試験利用入試への対応</strong> — 大学入試で『英検2級合格』『TOEFL iBT 70点以上』といった基準を設定する大学は年々増加しています。SELHi指定校での学習により、これらの基準クリアが容易になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="語学力重視の大学入試：外部試験利用入試への対応" id="entrance-exam">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            大学入試において『英語外部試験利用』『外部言語試験利用』の入試方式が年々増加しています。英検・TOEFL・IELTS・HSK（中国語検定）などの資格試験の成績を、入試での『英語試験免除』『加点』として認める大学は、全国で800校を超えています。高校段階で資格試験対策を組織的に実施している学校からの合格者が、こうした入試方式で有利になる傾向があります。
          </Typography>

          <SubSection title="外部試験利用入試の種類と基準">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検利用入試</strong> — 『英検2級以上を合格していれば、共通テスト英語を受験せず、英検の成績で判定』『英検準1級合格者に10点加算』など、多様な評価方法が採用されています。早稲田大学では25学部以上で英検2級以上の保有者に加点を行っており、GMARCH以下の大学では英検利用が一般的になっています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>TOEFL利用入試</strong> — 国際系学部・大学院進学時に『TOEFL iBT 70点以上』『TOEFL ITP 520点以上』といった基準を設定する大学は、関東・関西の進学校で約200校あります。国際教養学部、外国語学部、国際関係学部などで、TOEFL成績が必須化されつつあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>IELTS利用入試</strong> — 国際大学、国際教養大学など、国際型大学でIELTS成績を評価する大学が増加しています。『IELTS 5.5以上で出願可能』『IELTS 7.0で加点』などの基準が設定されていることが多いです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>中国語資格試験（HSK）利用入試</strong> — 東京大学、早稲田大学、慶應義塾大学などで『HSK5級以上取得者対象』という特別入試枠が設定される傾向があります。中国語が堪能な人材は、グローバル人材として高く評価されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="外部試験対策が充実した高校の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>英検対策講座の開講</strong> — 週2～3回の課外講座で、英検2級～1級の対策を実施している学校。英検1級取得者が毎年複数いる学校は、本気で対策に取り組んでいる証拠です。学校説明会で『過去3年間の英検1級合格者数』『英検準1級合格者数』を確認してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>TOEFL iBT・IELTS対策の実施</strong> — セキュアなテスト環境を学校内に整備し、試験対策講座を開講している学校。TOEFL試験官資格を持つ教員がいれば、より高度な指導が期待できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00897B" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>在学中の資格試験受験機会の提供</strong> — 学校内で英検・TOEFL・HSKなどの検定試験を開催し、受験ハードルを下げている学校。『いつでも受験可能』という環境が、合格率向上につながる傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ Component */}
        <FAQ items={faqItems} />
      </Container>
    </>
  );
}
