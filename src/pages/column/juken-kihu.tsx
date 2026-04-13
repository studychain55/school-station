import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function JukenKihuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校受験にかかるお金" },
  ];

  const faqItems = [
    {
      question: "高校受験にかかる総額の目安は？",
      answer: "一般的に、塾や予備校に通わない場合は約10～20万円、塾に通う場合は約40～80万円程度かかります。ただし、学校によって受験料が異なるため、志望校に確認することが重要です。",
    },
    {
      question: "受験料の全額を払わないといけませんか？",
      answer: "はい、受験料は合格発表まで返金されません。複数校受験の場合は、各学校の受験料を全て負担する必要があります。ただし、経済的に困難な場合は、減免制度がある学校もあるため、確認しましょう。",
    },
    {
      question: "無料で受験対策できる方法はありますか？",
      answer: "はい。学校の授業を活用する、図書館の自習室を使う、無料のオンライン学習動画（YouTube等）を活用するなど、塾に頼らない方法もあります。工夫次第で、費用を抑えられます。",
    },
    {
      question: "奨学金制度は利用できますか？",
      answer: "はい。国の給付型奨学金、地域の教育委員会の奨学金、学校独自の奨学金など、様々な制度があります。家計が困難な場合は、学校の進路指導の先生に相談しましょう。",
    },
    {
      question: "高校入学後、授業料以外にいくらかかりますか？",
      answer: "制服、教科書、通学定期、修学旅行費など、入学後も費用がかかります。公立高校でも年間30～50万円、私立高校は年間50～100万円程度の追加費用がかかることがあります。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校受験にかかるお金の全まとめ｜費用の相場と節約術 | School Station"
        description="高校受験にかかる全費用を徹底解説。受験料、塾代、教材費から入学後の費用まで、費用の相場と節約術をご紹介します。"
        canonical="/column/juken-kihu/"
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
            "headline": "高校受験にかかるお金の全まとめ｜費用の相場と節約術",
            "description": "高校受験にかかる全費用を徹底解説。費用の相場と節約術をご紹介します。",
            "datePublished": `${CURRENT_YEAR}-04-07`,
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
            background: "linear-gradient(135deg, #1e782d 0%, #1e782d 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校受験にかかるお金の全まとめ
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            費用の相場から節約術まで、受験に必要な金銭面での全知識
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校受験の費用構成" id="cost-structure">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校受験にかかるお金は、準備段階から受験当日、そして入学後までの様々な場面で発生します。事前に費用を把握し、家族で予算を立てることが重要です。
          </Typography>
          <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              高校受験の費用は家計に大きな影響を与えます。事前に総額を把握し、塾の選択、受験校の数などを計画的に決めることで、不要な出費を抑えることができます。
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="受験までにかかる費用内訳" id="costs-breakdown">
          <SubSection title="1. 塾・予備校代（最大の費用）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              多くの家庭が塾に通う場合、最大の費用項目となります。
            </Typography>
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>集団指導塾</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      月2～3万円 × 12ヶ月 = 24～36万円（中1～中3の場合は更に多い）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>個別指導塾</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      月4～6万円 × 12ヶ月 = 48～72万円
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>特別講座（夏期・冬期・直前）</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      夏期講習5～10万円 + 冬期講習3～5万円 + 直前講座2～3万円 = 10～18万円
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              塾に通う場合の総額は、年間40～90万円が目安です。複数の塾を併用すると、費用は更に増えます。
            </Typography>
          </SubSection>

          <SubSection title="2. 受験料（各学校ごと）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校受験では、複数校の受験が一般的です。各学校の受験料の目安は以下の通りです。
            </Typography>
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <List sx={{ m: 0 }}>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>公立高校</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      2,200～2,500円が多い（地域による）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>私立高校</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      20,000～30,000円が多い（学校による）
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              一般的な受験戦略では、公立高校1校と私立高校2～3校を受験するため、受験料の総額は約50,000～100,000円程度になります。
            </Typography>
          </SubSection>

          <SubSection title="3. 教材費・参考書代">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              受験対策に必要な教材や参考書の購入費用です。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>参考書・問題集</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    科目ごと、単元ごと。目安3～5万円程度（塾に通わない場合は更に必要）
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>模試受験料</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    1回3,000～5,000円 × 5～10回 = 15,000～50,000円
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学習アプリ・通信教育</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    月2,000～3,000円 × 12ヶ月 = 24,000～36,000円
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="4. その他の準備費用">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  学校見学・説明会への交通費：5,000～10,000円
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  志望理由書・自己PR文の添削料（個別相談の場合）：0～10,000円
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  スーツ・上履き・受験用の鞄など：10,000～20,000円
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="高校受験費用の総額目安" id="total-cost-estimate">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            以下は、受験準備から合格、入学までにかかる費用の目安です。
          </Typography>
          <Box sx={{ overflowX: "auto", mb: 3 }}>
            <Box sx={{ minWidth: 600, bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0" }}>
              <Box sx={{ mb: 2, fontWeight: 600, fontSize: "0.9rem" }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>シナリオA: 塾に通わない場合</Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  参考書・模試・教材: 15～20万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  受験料（受験料50,000円）: 5万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  その他（交通費等）: 2～3万円
                </Typography>
                <Typography sx={{ fontWeight: 700, color: "#1e782d" }}>
                  総額: 22～28万円
                </Typography>
              </Box>
              <Box sx={{ borderTop: "1px solid #bcd7c0", pt: 2, fontWeight: 600, fontSize: "0.9rem" }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>シナリオB: 集団指導塾に通う場合</Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  塾月謝と特別講座: 35～50万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  参考書・模試: 5～10万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  受験料: 5万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  その他: 2～3万円
                </Typography>
                <Typography sx={{ fontWeight: 700, color: "#1e782d" }}>
                  総額: 47～68万円
                </Typography>
              </Box>
              <Box sx={{ borderTop: "1px solid #bcd7c0", pt: 2, fontWeight: 600, fontSize: "0.9rem" }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>シナリオC: 個別指導塾に通う場合</Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  塾月謝と特別講座: 60～90万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  参考書・模試: 5～10万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  受験料: 5万円
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  その他: 2～3万円
                </Typography>
                <Typography sx={{ fontWeight: 700, color: "#1e782d" }}>
                  総額: 72～108万円
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            実際のかかる費用は、受験校の数、塾の選択、模試の受験数などで大きく異なります。
          </Typography>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="費用を抑えるための節約術" id="cost-saving-tips">
          <SubSection title="1. 塾の形式を工夫する">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>オンライン塾を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    通学時間がなく、月1～2万円程度で費用が抑えられます。自己管理ができれば効果的です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>塾を絞る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    個別指導と集団指導を併用せず、どちらか1つに絞ることで費用を削減できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>キャンペーンを活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    春キャンペーンや紹介割引など、多くの塾が割引制度を実施しています。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. 教材を工夫する">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>無料リソースを活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    YouTube、Khan Academy、教科書会社の公開教材など、無料で質の高い学習教材が利用できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>参考書は厳選</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    参考書は全教科全単元を揃える必要はありません。苦手分野に絞って購入することで費用が削減できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>図書館を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    図書館には参考書や問題集が豊富です。購入前に借りて確認できます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 受験校の選択を工夫する">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>受験校を厳選</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    無駄な受験を避け、本当に進学したい学校に絞ることで受験料を削減できます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>減免制度を確認</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    一部の学校は、経済的理由による受験料減免制度を実施しています。事前に確認しましょう。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="高校入学後にかかる費用" id="post-admission-costs">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校受験に合格した後も、様々な費用がかかります。以下は入学後の主な費用です。
          </Typography>
          <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 2 }}>
            <List sx={{ m: 0 }}>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>公立高校の場合</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    授業料：無料（または低額）
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    入学金：5,650～10,000円
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    施設設備費：月2,000～5,000円
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    その他（制服、教科書、通学定期等）：年間30～50万円
                  </Typography>
                </Box>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem disablePadding>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>私立高校の場合</Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    授業料：月20,000～30,000円程度
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    入学金：200,000～300,000円
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                    施設設備費：月5,000～10,000円
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    その他（制服、教科書等）：年間50～100万円
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="経済的に困難な場合の対策" id="financial-aid">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
            高校受験や入学に必要な費用が負担できない場合、以下の支援制度があります。
          </Typography>
          <List>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>奨学金制度</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  国の給付型奨学金、地域の教育委員会の奨学金、学校独自の奨学金などがあります。学校の進路指導の先生に相談しましょう。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>授業料減免制度</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  私立高校では、経済的困難な家庭向けに授業料減免制度を実施しているところが多いです。入学前に確認しましょう。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>生活保護制度</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  生活保護を受給している場合、教材費や制服代などが支給されることがあります。福祉事務所に相談しましょう。
                </Typography>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: "#1e782d" }} />
              </ListItemIcon>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>学校の相談窓口</Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  学校の進路指導の先生や養護教諭に相談することで、利用可能な支援制度を案内してもらえます。
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="よくある質問" id="faq">
          <FAQ items={faqItems} />
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* ランキングを確認する */}
        <Box sx={{ my: 4, p: 3, bgcolor: "#e9f2ea", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700, mb: 1, color: "#1e782d" }}>
            志望校の学費を比較しましょう
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", mb: 2 }}>
            School Stationでは全国の高校の詳細情報が検索できます。
          </Typography>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.2,
                bgcolor: "#1e782d",
                color: "#fff",
                borderRadius: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#1e782d", transform: "translateY(-1px)" },
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              高校偏差値ランキングを見る →
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 関連記事 */}
        <Section title="関連記事" id="related">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <Link href="/column/yobiko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  高校受験の塾・予備校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  個別指導vs集団指導の比較
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  志望校の選び方
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受験校を決める5つの基準
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/kouritsu-vs-shiritsu/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E0E0E0",
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderColor: "#1e782d" },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1e782d", mb: 1 }}>
                  公立と私立高校の違い
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  費用・教育内容を比較
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Navigation */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, my: 4 }}>
          <Link href="/column/yobiko-choice/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d" }}>
                <ArrowBackIcon />
                <Typography sx={{ fontWeight: 600 }}>前の記事</Typography>
              </Box>
            </Paper>
          </Link>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E0E0E0",
                textAlign: "center",
                transition: "all 0.2s",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#1e782d" }}>
                <Typography sx={{ fontWeight: 600 }}>コラムに戻る</Typography>
              </Box>
            </Paper>
          </Link>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ mb: 3 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2.5, fontSize: "1.5rem", fontWeight: 700, color: "#1e782d" }}>
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
