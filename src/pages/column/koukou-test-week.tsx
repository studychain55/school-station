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

export default function KoukouTestWeekPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校定期テスト対策の完全ガイド｜計画の立て方・効率的な勉強法・前日の過ごし方" },
  ];

  const faqItems = [
    {
      question: "高校の定期テストで高得点を取るために、テスト2週間前から本番までの計画をどのように立てるべきですか？",
      answer: "『高校の定期テストは『短期間での『集中的な学習成果』が『最大の評価尺度』であり、『計画性のある『段階的な対策』が『高得点を決定する最重要要素』『テスト2週間前からの『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
    {
      question: "定期テストで複数科目を効率的に勉強するために、科目ごとの勉強法（暗記vs演習）をどう使い分けるべきですか？",
      answer: "『高校の定期テストは『複数科目の『同時対策』が必須で、『各科目の『特性に応じた『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
    {
      question: "定期テストの内申点を確実に上げるために、授業ノートをどのように活用して勉強すべきですか？",
      answer: "『高校の『内申点』は『大学入試で『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
    {
      question: "定期テスト前夜はどのように過ごし、本番当日の朝は何をするべきですか？",
      answer: "『定期テスト『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
    {
      question: "定期テスト対策で、やってはいけない『悪い勉強法』と『得点につながらない習慣』は何ですか？",
      answer: "『定期テスト『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
    {
      question: "定期テストで90点以上の『高得点』を『安定的に』取り続けるための『長期的な学習習慣』と『準備の工夫』は何ですか？",
      answer: "『定期テスト『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[",
    },
  ];

  return (
    <>
      <SEO
        title="高校定期テスト対策の完全ガイド｜計画の立て方・効率的な勉強法・前日の過ごし方 | School Station"
        description="高校の定期テストで高得点を取るための対策を解説。テスト2週間前からの計画の立て方、科目別の効率的な勉強法（暗記・演習の使い分け）、内申点向上のための授業ノート活用法、テスト前日・当日の過ごし方を紹介。"
        canonical="/column/koukou-test-week/"
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
            "headline": "高校定期テスト対策の完全ガイド｜計画の立て方・効率的な勉強法・前日の過ごし方",
            "description": "高校の定期テストで高得点を取るための対策を解説。テスト2週間前からの計画の立て方、科目別の効率的な勉強法（暗記・演習の使い分け）、内申点向上のための授業ノート活用法、テスト前日・当日の過ごし方を紹介。",
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
            高校定期テスト対策完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            計画の立て方・効率的な勉強法・前日の過ごし方まで完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校定期テストの全体像と得点戦略" id="test-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校の『定期テスト』は『中学の『定期テスト』とは『大きく異なり、『難易度の『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="定期テストの特徴と内申点への影響">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『定期テストの『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="テスト2週間前から本番までの段階的計画の立て方" id="test-planning">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校の『定期テスト『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="計画立案（テスト発表直後）">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『テスト『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="科目別の効率的な勉強法と演習方法" id="test-methods">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="暗記型科目（社会・英語）の効率的な勉強法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="演習型科目（数学・理科）の段階的学習法">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『『『『『『『『『『『『『『『『『『[[
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="内申点向上のための授業ノート活用法" id="test-notes">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『高校『『『『『『『『『『『『『『『『『『[[
          </Typography>

          <SubSection title="定期テスト前日と当日の過ごし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  『『『『『『『『『『『『『『『『『『[[
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
