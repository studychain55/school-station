import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function GuidePage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "高校受験完全ガイド" },
  ];

  const faqItems = [
    {
      question: "高校受験とは何ですか？",
      answer: "高校受験は、日本の教育制度における中学校から高校への進学試験です。通常、中学3年生の秋から冬にかけて実施され、志望する高校の入試に合格することで進学が決まります。公立高校と私立高校があり、それぞれ入試方法や偏差値が異なります。",
    },
    {
      question: "偏差値とは何ですか？",
      answer: "偏差値は、学校の学力レベルを示す統計的な指標です。50を平均値として、上下に分布します。偏差値が高い学校ほど入試難易度が高い傾向にあります。ただし、偏差値は学校の教育内容や実績の全てを表すものではなく、参考情報として活用することが重要です。",
    },
    {
      question: "志望校をどうやって選ぶべきですか？",
      answer: "志望校選びは、以下の観点から検討することをお勧めします：1) 自分の学力と偏差値のバランス、2) 学びたい学科や専攻分野、3) 学校の教育方針や特色、4) 部活動や施設、5) 通学時間・立地、6) 大学進学実績。これらを総合的に判断することが大切です。",
    },
    {
      question: "偏差値に基づいて受験戦略を立てるべきですか？",
      answer: "はい、偏差値は受験戦略を立てる際に重要な指標です。一般的に、自分の偏差値より5〜10程度上の学校を目標校、同程度を実力相応校、下の学校を安全校として設定する3段階志望法が推奨されています。また、併願校の選択にも活用できます。",
    },
    {
      question: "入試対策で最も重要なことは何ですか？",
      answer: "入試対策で最も重要なことは、継続的な学習習慣です。特に中学3年生の秋以降は、苦手科目の克服と基礎学力の定着に集中することが重要です。また、過去問演習や模試受験を通じて、出題傾向の理解と時間管理の練習も欠かせません。",
    },
    {
      question: "公立高校と私立高校、どちらを選ぶべき？",
      answer: "公立高校と私立高校にはそれぞれメリットがあります。公立高校は学費が安く、地域に根ざした教育を提供する傾向があります。私立高校は独自の教育方針や充実した施設を持つ傾向があります。自分の目標や家庭の事情を考慮して選択することが大切です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校受験完全ガイド | School Station"
        description="高校受験の基礎知識から志望校選び、入試対策まで、受験に必要な情報をまとめたガイド。偏差値の見方、受験戦略、学校選択のポイント等を解説します。"
        canonical="/guide/"
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
            "headline": "高校受験完全ガイド",
            "description": "高校受験の基礎知識から志望校選び、入試対策まで、受験に必要な情報をまとめたガイド。",
            "datePublished": `${CURRENT_YEAR}-01-01`,
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校受験完全ガイド
          </Typography>
          <Typography variant="body1" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            志望校選びから入試対策まで、受験に必要な知識をわかりやすく解説
          </Typography>
        </Box>

        {/* Quick Navigation */}
        <Box sx={{ mb: 5, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
          <Paper elevation={0} sx={{ p: 2.5, border: "1px solid #E0E0E0", borderLeft: "4px solid #1565C0" }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 700, color: "#1565C0", mb: 1 }}>
              初心者向け
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
              高校受験の基本概念、偏差値の意味、受験の流れなど、初めての方向けの情報です。
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2.5, border: "1px solid #E0E0E0", borderLeft: "4px solid #F57F17" }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 700, color: "#F57F17", mb: 1 }}>
              受験生向け
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.6 }}>
              志望校選びの方法、入試対策の進め方、模試の活用法など、実践的な情報です。
            </Typography>
          </Paper>
        </Box>

        {/* Section 1: 高校受験とは */}
        <Section title="高校受験とは" id="what-is-koukou-exam">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校受験は、日本の教育制度における重要な通過点です。中学校を卒業する際に、志望する高校の入試を受けて、進学先を決める試験です。
          </Typography>

          <SubSection title="受験の時期">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校受験は通常、以下のスケジュールで進みます：
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="中学3年生の秋（9月～10月）"
                  secondary="志望校の選定、入試要項の確認"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="冬（11月～1月）"
                  secondary="私立高校の入試実施、願書受付・出願"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="冬～春（1月～3月）"
                  secondary="公立高校の入試実施、合格発表"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="公立高校と私立高校">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
              <strong>公立高校：</strong>都道府県や市町村が運営する高校です。学費が比較的安く（授業料無料化の場合もあり）、地域に根ざした教育を提供します。入試は学力試験が中心となります。
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              <strong>私立高校：</strong>学校法人が運営する高校です。独自の教育方針、特色のあるカリキュラム、充実した施設が特徴です。学費がかかる場合が多いですが、奨学金制度を備えている学校も多くあります。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Section 2: 偏差値について */}
        <Section title="偏差値とは" id="what-is-hensachi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            偏差値は、学校の学力レベルを数値化した指標です。School Stationでは、全国の高校を偏差値順にランキングしており、志望校選びの重要な参考資料として活用できます。
          </Typography>

          <SubSection title="偏差値の計算方法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              偏差値は、以下の計算式で求められます：
            </Typography>
            <Paper sx={{ p: 2, bgcolor: "#F5F5F5", mb: 2 }}>
              <Typography variant="body2" sx={{ fontFamily: "monospace", textAlign: "center", fontSize: "0.9rem" }}>
                偏差値 = (受験者の得点 - 平均得点) ÷ 標準偏差 × 10 + 50
              </Typography>
            </Paper>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              50は全受験者の平均を示します。偏差値が60なら平均より上、40なら平均より下の学力ということになります。
            </Typography>
          </SubSection>

          <SubSection title="偏差値の活用方法">
            <List>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="学力レベルの把握"
                  secondary="自分の偏差値と志望校の偏差値を比較して、受験の難易度を判断"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="受験戦略の立案"
                  secondary="目標校（偏差値+5～10）、実力相応校（偏差値±0～5）、安全校（偏差値-5～10）の3段階志望法"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <ListItemText
                  primary="併願校の選択"
                  secondary="公立高校の併願として、私立高校の選定時に活用"
                  primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: "0.95rem" } }}
                  secondaryTypographyProps={{ sx: { color: "#424242" } }}
                />
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="偏差値活用時の注意点">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              偏差値は学力レベルの参考になりますが、学校の全てを表すものではありません。教育方針、部活動、施設、大学進学実績、立地なども総合的に判断して志望校を選ぶことが重要です。
            </Typography>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Section 3: 志望校選びのポイント */}
        <Section title="志望校の選び方" id="how-to-choose-school">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            志望校選びは、高校受験における最も重要な決断の一つです。以下のポイントを参考に、自分に最適な学校を選びましょう。
          </Typography>

          <SubSection title="検討すべき観点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学力レベル</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分の現在の偏差値と志望校の偏差値を比較。無理のない範囲での目標設定が大切です。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学科・専攻分野</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    普通科、工業科、商業科など、学びたい分野が学べる学校を選びましょう。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>教育方針と特色</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学校のアドミッションポリシーや教育特色が、自分の価値観・目標と合致しているかを確認。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>部活動と施設</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    興味のある部活動が充実しているか、施設は整っているかを調査しましょう。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>通学の利便性</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    通学時間や交通費も重要です。無理のない通学時間の学校を選ぶことで、学習に専念できます。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>大学進学実績</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    志望大学への進学実績や進路指導の充実度も確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3段階志望法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              一般的に、以下の3段階で志望校を設定することが推奨されています：
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#2E7D32" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>目標校（チャレンジ校）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分の偏差値より5～10程度高い学校。努力次第で合格が目指せる目標です。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#F57F17" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>実力相応校</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分の偏差値と同程度（±0～5）の学校。合格可能性が高い志望校です。
                  </Typography>
                </Box>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#C62828" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>安全校</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    自分の偏差値より5～10程度低い学校。ほぼ確実に合格できる学校です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Section 4: FAQ */}
        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Related Column Articles */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 700, color: "#0D47A1" }}>
            関連コラム記事
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2, mb: 2 }}>
            {[
              { href: "/column/hensachi-guide/", title: "偏差値の見方・使い方を徹底解説", desc: "偏差値とは何か、計算方法や見方を初心者向けに解説。" },
              { href: "/column/koko-choice/", title: "志望校の選び方｜受験校を決める5つの基準", desc: "学力レベルから教育方針まで、最適な志望校選びの基準。" },
              { href: "/column/nyushi-schedule/", title: "高校受験スケジュール完全ガイド", desc: "中学3年間の受験スケジュールと準備の進め方。" },
              { href: "/column/kouritsu-vs-shiritsu/", title: "公立vs私立｜高校選びの徹底比較", desc: "費用・環境・進学実績から最適な選択を解説。" },
              { href: "/column/naishin-up/", title: "内申点の上げ方｜今すぐできる方法", desc: "定期テスト対策など、すぐに実践できるポイント。" },
              { href: "/column/study-methods/", title: "高校受験に向けた効果的な勉強法", desc: "教科別攻略と時間管理のコツを徹底解説。" },
              { href: "/column/mensetsu-guide/", title: "高校受験の面接対策完全ガイド", desc: "よく聞かれる質問と答え方のコツを解説。" },
              { href: "/column/chugaku-entrance/", title: "中学受験の基礎知識｜いつから準備する？", desc: "費用・日程・学校選びを徹底解説。" },
              { href: "/column/tokkoku-guide/", title: "推薦入試・特色選抜完全ガイド", desc: "推薦入試の種類・資格・面接対策を解説。" },
              { href: "/column/bukatsu-choise/", title: "高校の部活選び｜入学前に知ること", desc: "部活と勉強の両立、大学受験への影響を解説。" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Paper elevation={0} sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", height: "100%", "&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderLeftColor: "#E65100" }, transition: "all 0.2s" }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#0D47A1", mb: 0.5 }}>{article.title}</Typography>
                  <Typography sx={{ fontSize: 12, color: "#757575" }}>{article.desc}</Typography>
                </Paper>
              </Link>
            ))}
          </Box>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box component="span" sx={{ fontSize: 13, color: "#1565C0", textDecoration: "underline", cursor: "pointer" }}>
              すべてのコラム記事を見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Popular Prefecture Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 700, color: "#0D47A1" }}>
            都道府県別の高校偏差値ランキング
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            お住まいの地域の高校偏差値ランキングをチェックしてみましょう。各都道府県の公立・私立・国立高校を一覧で確認できます。
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: 1.5, mb: 3 }}>
            {[
              { label: "東京都", slug: "tokyo" },
              { label: "神奈川県", slug: "kanagawa" },
              { label: "大阪府", slug: "osaka" },
              { label: "愛知県", slug: "aichi" },
              { label: "埼玉県", slug: "saitama" },
              { label: "千葉県", slug: "chiba" },
              { label: "兵庫県", slug: "hyogo" },
              { label: "福岡県", slug: "fukuoka" },
              { label: "北海道", slug: "hokkaido" },
              { label: "宮城県", slug: "miyagi" },
              { label: "京都府", slug: "kyoto" },
              { label: "広島県", slug: "hiroshima" },
            ].map((pref) => (
              <Link key={pref.slug} href={`/rankings/koukou/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    border: "1px solid #E0E0E0",
                    borderRadius: 1,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#1565C0",
                    "&:hover": { bgcolor: "#F5F9FF", borderColor: "#1565C0" },
                    transition: "all 0.15s",
                  }}
                >
                  {pref.label}
                </Box>
              </Link>
            ))}
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
              <Box component="span" sx={{ fontSize: 13, color: "#1565C0", textDecoration: "underline", cursor: "pointer" }}>
                全47都道府県のランキングを見る →
              </Box>
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            さらに詳しい情報をお探しですか？
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            School Stationでは、全国の高校偏差値ランキングを都道府県別・地方別に掲載しています。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="a"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#FF6F00",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { bgcolor: "#E65100", transform: "translateY(-1px)" },
                transition: "all 0.2s",
              }}
            >
              高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#0D47A1" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" component="h3" sx={{ mb: 1.5, fontSize: "1.1rem", fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
