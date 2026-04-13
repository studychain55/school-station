import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Helper Components
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

export default function KoukouTenkoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の転校・転入手続きガイド｜公立・私立・通信制それぞれの方法" },
  ];

  const faqItems = [
    {
      question: "高校の転校と転入、編入の違いは何ですか？",
      answer: "転校は同じ地域内で別の高校に移動する場合、転入は他の都道府県から引っ越して新しい高校に入学する場合、編入は高校在学中に進学学年を上げずに別の高校に移る場合を指します。転校は比較的手続きが簡単で、転入は教育委員会を通じた手続きが必要になることが多いです。",
    },
    {
      question: "公立高校への転入手続きはどのように進みますか？",
      answer: "公立高校への転入は、主に教育委員会と学校の両方に申告する必要があります。転出学校で『在籍証明書』『成績証明書』『指導要録』などを取得し、転入予定の教育委員会に届け出ます。教育委員会が転入可能な学校を紹介し、学校と調整を行った後、転入試験（適性検査や面接）を受けることになります。",
    },
    {
      question: "単位認定はどのように行われますか？",
      answer: "転入前の学校で取得した単位は、転入先の学校で評価されます。ただし、カリキュラムが異なる場合は全ての単位が認定されない可能性があります。認定に必要な書類は『成績証明書』『指導要録』『修得単位一覧』などです。学校によって認定基準が異なるため、転入前に相談することが重要です。",
    },
    {
      question: "私立高校への転入はどのくらい難しいですか？",
      answer: "私立高校への転入は、学校の受け入れ姿勢や定員に大きく左右されます。多くの私立高校は転入生の受け入れに積極的ですが、特定の学年では受け入れていないこともあります。転入試験は学力試験と面接が一般的で、公立高校の転入試験より厳しい傾向にあります。",
    },
    {
      question: "通信制高校への転入が『最も柔軟』とされる理由は？",
      answer: "通信制高校は年間を通じていつでも入学・転入が可能で、スクーリング（登校日）の日程も自由に選べることが多いです。また、単位認定も比較的寛容で、転入試験が簡単またはない学校も少なくありません。仕事や家庭の事情がある生徒にとって最も柔軟な選択肢です。",
    },
    {
      question: "転入に必要な書類は全て各学校で取得できますか？",
      answer: "転出学校から取得する書類（成績証明書、在籍証明書、指導要録、修得単位一覧など）は、各学校の教務課で申請できます。ただし、発行に2〜3営業日要することが多いため、余裕を持って申請することが大切です。。転入予定の学校から指示される書類もあるため、事前に確認しましょう。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の転校・転入手続きガイド｜公立・私立・通信制それぞれの方法 | School Station"
        description="高校を転校・転入する際の手続きと必要書類を解説。公立高校・私立高校・通信制高校への転入方法の違い、転校後の単位認定、在籍期間の扱いについて紹介。"
        canonical="/column/koukou-tenko/"
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
            "headline": "高校の転校・転入手続きガイド｜公立・私立・通信制それぞれの方法",
            "description": "高校を転校・転入する際の手続きと必要書類を解説。公立高校・私立高校・通信制高校への転入方法の違い、転校後の単位認定、在籍期間の扱いについて紹介。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
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
            高校の転校・転入手続きガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            公立・私立・通信制の転入方法の違い、必要書類、単位認定について完全解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校転校・転入・編入の違いを理解する" id="types">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校での転校・転入・編入は、それぞれ異なる定義と手続きがあります。自分の状況がどれに該当するかを正確に理解することで、スムーズな転校手続きを進められます。
          </Typography>

          <SubSection title="転校（同一都道府県内での移動）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                同じ都道府県内で別の高校に移動する場合を『転校』と呼びます。例えば、東京都内の高校から別の東京都内の高校に移動する場合が該当します。転校は比較的手続きが簡単で、転出元と転入先の学校同士で調整を行うことが多いです。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  同一都道府県の教育委員会のルールに従える
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  都道府県外転入に比べて教育委員会を通じた申告が簡潔な場合が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  単位認定や成績評価のルールが統一されているため、手続きが円滑に進みやすい
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="転入（他の都道府県からの引越し）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                他の都道府県から引っ越してきた場合、その地域の高校に『転入』します。都道府県が異なるため、教育委員会の対応も異なり、より複雑な手続きが必要になることがあります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転出地の教育委員会と転入地の教育委員会両方への申告が必要
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  都道府県によってカリキュラムや単位認定基準が異なる場合がある
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入試験の受験が必須のケースが多い
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="編入（進学学年を上げずに転校）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高校在学中に、進学学年を上げずに別の高校に移ることを『編入』と呼びます。例えば、高1で入学した高校から、別の高校の高1に編入する場合が該当します。編入は転校・転入と比べて受け入れ校が限定される傾向にあります。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  編入可能な学年が限定される（高1のみ、など）ことが多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  受け入れ校の定員状況に大きく影響される
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入試験が必須である場合が多い
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="公立高校への転入手続き" id="public">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            公立高校への転入は、教育委員会を通じた手続きが必須です。都道府県によってルールが異なるため、事前に転入先の教育委員会に確認することが重要です。
          </Typography>

          <SubSection title="基本的な手続きの流れ">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ1：転出地の教育委員会へ報告
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                引っ越しが決まったら、現在の高校または教育委員会に転出の旨を報告します。この時点で、転出学校から『在籍証明書』『成績証明書』『指導要録』『修得単位一覧』などの書類を取得するリクエストを出しましょう。発行に数営業日要することが多いため、早めの対応が大切です。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ2：転入地の教育委員会に申告
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                転入先の住所地を管轄する教育委員会に『転入学届』を提出します。教育委員会は転入可能な学校と受け入れ可能な学年を指示します。受け入れに余裕がない場合は、指定された学校から選択する必要があります。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ3：転入先学校との個別相談
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
                教育委員会の指示を受けたら、転入先の学校に直接連絡し、個別相談を申し込みます。学校側が単位認定基準や学校生活について説明し、転入試験の日程を調整します。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontWeight: 600, mb: 2 }}>
                ステップ4：転入試験の受験
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                多くの公立高校では、転入試験として『適性検査』『学力試験』『面接』などが実施されます。合格後、転入手続きが完了し、新しい学校での学生生活が始まります。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="公立高校転入の注意点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  都道府県によって転入の時期が限定されていることがあります（年度初めのみ、など）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  高3への転入は難しい傾向にあります
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  全ての単位が認定されないケースもあるため、事前確認が重要です
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="私立高校への転入手続き" id="private">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            私立高校への転入は、学校ごとに手続きが異なります。受け入れに積極的な学校から受け入れていない学校まで、様々です。直接学校に問い合わせることが最初のステップです。
          </Typography>

          <SubSection title="私立高校転入のメリット">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  教育委員会を通じた複雑な手続きが不要な場合が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  年間を通じて転入生を受け付けている学校が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  学校によっては、一般入試よりも転入試験が簡単な場合がある
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立高校転入の難しさ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  学校の受け入れ姿勢が転入のしやすさに大きく影響する
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入試験が公立よりも難しい傾向がある
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入金や追加の学費が必要になる場合がある
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="通信制高校への転入（最も柔軟な選択肢）" id="tsushinsei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            通信制高校は、全日制高校から転入する生徒にとって最も柔軟な選択肢です。入学・転入の時期が自由で、スクーリングのスケジュールも調整可能です。
          </Typography>

          <SubSection title="通信制高校転入の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  年間を通じていつでも転入可能（学校により異なる）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  スクーリング（登校日）の日程を柔軟に選択できる
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  単位認定が比較的寛容で、多くの単位が認定される傾向
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入試験がない、または非常に簡単な学校が多い
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  仕事や家庭の事情がある生徒にも対応可能
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="通信制高校転入時の単位認定">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                通信制高校は、前籍校での修得単位をほぼ全て認定することが多いです。これは、全日制高校のカリキュラムと通信制のカリキュラムが、教育内容において共通基盤を有しているためです。転入前に『成績証明書』『修得単位一覧』を用意し、学校に単位認定の基準を確認しましょう。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="転入に必要な書類一覧" id="documents">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校転入の際に必要な書類は、転出学校から取得するものと、各機関への申告に必要なものに分かれます。以下に代表的な書類をまとめました。
          </Typography>

          <SubSection title="転出学校から取得する書類">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2" }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      在籍証明書
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      現在その学校に在籍していることを証明する書類
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      成績証明書
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      各科目の成績と単位数を記載した公式文書
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      指導要録
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      学籍記録と指導記録を含む重要書類（転入先学校への提出が多い）
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#FF6F00" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#424242", fontWeight: 600 }}>
                      修得単位一覧
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      取得した単位の詳細を記載した一覧（単位認定に必須）
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="その他の書類・証明">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  転入学願書（転入先学校で指定されるフォーム）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  健康診断票（転入先学校で要求される場合）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  予防接種記録（学校により異なる）
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  住所を証明する書類（公立高校転入時に教育委員会から要求される場合）
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="単位認定と卒業資格への影響" id="certification">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            転入時の単位認定は、卒業資格に大きく影響します。認定される単位が少ないと、卒業に必要な単位を満たすまでに時間が追加で必要になるケースもあります。
          </Typography>

          <SubSection title="単位認定の基準">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 3 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                高校卒業には通常74単位以上の取得が必要です。転入時に認定される単位は、転入先学校のカリキュラムと照らし合わせて判定されます。以下の点が考慮されます：
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    教育内容の一致度（同一科目なら認定されやすい）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    学習時間数の確認（転入先の要件を満たしているか）
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#1e782d" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    評価の適切性（合格判定の基準）
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>

          <SubSection title="卒業までの時間計算">
            <Box sx={{ bgcolor: "#FFF3E0", p: 2.5, borderRadius: 1, border: "1px solid #FFE0B2" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                【例】高2の途中で全日制から通信制に転入した場合：
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                転入時に32単位認定 → 残り42単位必要 → 1年で30単位取得可能なら → 卒業まで約1.5年
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                単位認定の多少で、卒業時期が大きく変わるため、事前に詳細な計画を立てることが重要です。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 5 }} />

        {/* FAQ Section */}
        <FAQ items={faqItems} />

        <Divider sx={{ my: 5 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            高校選びを進める
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3 }}>
            全国の高校偏差値ランキングで、自分に合った高校を探しましょう。
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
