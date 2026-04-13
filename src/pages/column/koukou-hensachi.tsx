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

export default function KoukouHensachiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ" },
  ];

  const faqItems = [
    {
      question: "偏差値50は平均的なレベルですか？",
      answer: "はい、偏差値50は平均値です。受験者の平均的な学力レベルを示しています。偏差値60以上は上位16%以内、偏差値70以上は上位2.3%以内という目安になります。自分の偏差値が受験予定の学校の偏差値と比べてどの位置にあるかを把握することが重要です。",
    },
    {
      question: "模試によって偏差値が違う理由は何ですか？",
      answer: "受験者の構成が異なるためです。駿台模試は難易度が高く上位層が多く参加する傾向があり、進研模試は広い層が参加するため、同じレベルの学生でも模試によって偏差値が異なります。志望校判定には、その学校の入試に多くの受験者が参加する模試を参考にすることが重要です。",
    },
    {
      question: "偏差値で志望校を選ぶことの危険性は？",
      answer: "偏差値だけで学校を選ぶと、校風や教育内容、進学実績、立地など重要な要素を見落とす可能性があります。また、偏差値は相対的な数値で、その年によって変わることもあります。偏差値は志望校選びの一つの目安にすぎず、実際に学校を訪問して全体的に判断することが大切です。",
    },
    {
      question: "安全校・実力校・チャレンジ校のバランスはどのくらいが理想的ですか？",
      answer: "受験校は通常、安全校2校、実力校2校、チャレンジ校1〜2校のバランスが目安とされています。ただし、本当にやりたいことや通いたい学校がある場合は、柔軟に判断しましょう。重要なのは、自分の学力と志望校の難易度の関係を冷静に把握し、合格の可能性を考慮することです。",
    },
    {
      question: "偏差値が上がっているのに判定が変わらないのはなぜですか？",
      answer: "偏差値の上昇率が他の受験者と同程度の場合、相対的な位置は変わらないため判定が変わらないことがあります。また、模試によって受験者層が異なるため、ある模試では判定が上がっても別の模試では変わらないこともあります。判定だけでなく、実際の成績の伸びも注視することが重要です。",
    },
    {
      question: "偏差値よりも重視すべき要素は何ですか？",
      answer: "学校の教育方針、校風、部活動の充実度、進学実績（特に志望大学への合格実績）、通学時間、学費などです。偏差値が高い学校でも自分の進路希望に合致していなければ、その学校のメリットが活かせません。複数の視点から総合的に判断することが大切です。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ | School Station"
        description="高校の偏差値の意味と正しい使い方を解説。模試別の偏差値の違い、偏差値と合格可能性の関係、偏差値だけに頼らない志望校選びの判断基準、安全校・チャレンジ校のバランスの取り方を紹介。"
        canonical="/column/koukou-hensachi/"
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
            "headline": "偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ",
            "description": "高校の偏差値の意味と正しい使い方を解説。模試別の偏差値の違い、偏差値と合格可能性の関係、偏差値だけに頼らない志望校選びの判断基準、安全校・チャレンジ校のバランスの取り方を紹介。",
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
            偏差値の見方と志望校選び
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            偏差値を正しく理解し、失敗しない高校選びをするための完全ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="偏差値とは（計算方法と意味）" id="definition">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            偏差値は、受験者全体の中での自分の相対的な学力位置を示す指標です。平均を50とし、平均より高ければ50以上、低ければ50未満になります。重要なのは、偏差値は「絶対的な学力」ではなく「相対的な位置」を示す数値だということです。
          </Typography>

          <SubSection title="偏差値の計算方法">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", fontFamily: "monospace" }}>
                偏差値 = 50 + 10 × (自分の点数 - 平均点) / 標準偏差
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              標準偏差とは、受験者の点数がどの程度ばらついているかを示す指標です。点数のばらつきが大きいほど、同じ点数でも偏差値は低くなります。つまり、簡単な試験では平均より高い点でも偏差値は上がりにくく、難しい試験では少しの高得点で偏差値が大きく上がることがあります。
            </Typography>
          </SubSection>

          <SubSection title="偏差値の目安">
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  <strong>偏差値70以上</strong> — 上位2.3% 最難関高校合格可能
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  <strong>偏差値60～69</strong> — 上位16% 難関高校合格可能
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  <strong>偏差値50～59</strong> — 平均～上位50% 標準的高校合格可能
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  <strong>偏差値40～49</strong> — 下位50% 標準以下の高校合格可能
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>偏差値40未満</strong> — 下位16% 学力試験なしの高校も選択肢に
                </Typography>
              </Box>
            </Paper>
          </SubSection>
        </Section>

        <Section title="模試によって偏差値が違う理由（駿台・河合・進研）" id="models">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            同じレベルの学生でも、受ける模試によって偏差値が異なることがあります。これは、各模試の受験者層や難易度が異なるためです。3大予備校の模試の特徴を理解し、志望校判定に活用しましょう。
          </Typography>

          <SubSection title="駿台模試の特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                駿台模試は難易度が高く、全国的に見ても学力上位の受験者が多く参加します。そのため、同じ点数でも河合模試や進研模試より偏差値が高く出ることが多いです。難関国公立大学や最難関私立大学を目指す学生向けの模試です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="河合塾模試の特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                河合塾模試は難易度が標準的で、全国の広い層の受験者が参加します。駿台より偏差値は低めに出ることが多いですが、より多くの受験者層を反映しているため、実際の合格判定には参考になることが多いです。国公立大学や標準レベルの私立大学を目指す学生向けです。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="進研模試の特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                進研模試は高校1年生からの模試で、学力層が広いため、同じ点数でも駿台模試や河合塾模試より偏差値が低めに出ます。全国の平均的な受験者を反映しており、私立大学や標準レベルの国公立大学の合格判定に参考になります。学力層の広さが特徴です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="模試を選ぶポイント">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              志望校への合格判定は、その学校の入試に実際に参加する受験者が多く参加する模試を参考にすることが重要です。国公立大学志望なら駿台、標準レベルなら河合塾、全国標準なら進研模試が参考になります。複数の模試を受けて、異なる視点から自分の学力を評価することがお勧めです。
            </Typography>
          </SubSection>
        </Section>

        <Section title="偏差値と合格可能性の関係" id="passing">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            偏差値と高校合格の可能性には、統計的な関係があります。ただし、偏差値だけでは合格を保証するものではなく、その他の要因も大きく影響します。
          </Typography>

          <SubSection title="偏差値による合格可能性の目安">
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#424242", mb: 1 }}>
                  <strong>志望校の偏差値より15以上高い</strong> — 合格可能性90%以上（安全校）
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  <strong>志望校の偏差値と同程度</strong> — 合格可能性50〜60%（実力校）
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>
                  <strong>志望校の偏差値より5程度低い</strong> — 合格可能性30～50%（チャレンジ校）
                </Typography>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望校の偏差値より15以上低い</strong> — 合格可能性20%未満（非現実的）
                </Typography>
              </Box>
            </Paper>
          </SubSection>

          <SubSection title="偏差値以外の合格要因">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>内申点</strong> — 公立高校の合格には内申点が大きく影響する
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦入試</strong> — 一般入試より低い学力で合格できる可能性がある
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接や小論文</strong> — 学力試験より人間性や適性が評価される場合もある
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>本番での実力発揮</strong> — 模試の成績より本番で良い結果を出すことも可能
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="偏差値だけでは分からないこと（校風・実績・立地）" id="beyond">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            偏差値は学力レベルの目安になりますが、学校選びで重要な要素の全てを表しません。偏差値が同じ学校でも、教育方針、校風、進学実績、立地など大きく異なることがあります。
          </Typography>

          <SubSection title="校風（学校の雰囲気）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                自由な校風の学校と厳格な校風の学校、進学重視の学校と人間教育重視の学校など、同じ偏差値でも校風は大きく異なります。学校説明会や体験入学で、実際に学校を訪問し、自分に合った校風かどうかを確認することが大切です。3年間毎日通う学校だからこそ、自分の価値観に合致した環境を選ぶことが重要です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="進学実績（志望大学への合格者数）">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                大学受験を視野に入れている場合、その高校の進学実績は非常に重要です。偏差値が同じでも、東大・京大・医学部への合格者が多い学校と、地域の国公立大への進学が中心の学校では、進学サポートの質が異なります。自分が目指す大学への進学実績を確認し、その学校の進学指導の質を判断しましょう。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="部活動・課外活動の充実度">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                部活動や文化祭などの課外活動は、高校生活の大きな部分を占めます。偏差値が高い進学校でも、部活動が制限されていることもあります。反対に、偏差値が標準的な学校でも、部活動が充実し全国大会で活躍している学校もあります。自分がどのような高校生活を送りたいのかを考え、学校を選ぶことが大切です。
              </Typography>
            </Box>
          </SubSection>

          <SubSection title="立地・通学時間">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                毎日の通学時間は、学力向上や高校生活の充実度に大きく影響します。偏差値が高くても通学時間が2時間以上では、朝早く起き夜遅く帰宅することになり、睡眠時間や自学時間が削られます。偏差値だけでなく、通学時間や立地も総合的に考慮し、現実的な学校選びをしましょう。
              </Typography>
            </Box>
          </SubSection>
        </Section>

        <Section title="安全校・実力校・チャレンジ校のバランス" id="balance">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校受験では、複数の学校に出願するのが一般的です。合格を確保しつつ、チャレンジできる学校のバランスが重要です。以下が一般的な出願戦略です。
          </Typography>

          <SubSection title="受験校の構成例">
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>安全校（2校）</strong><br />
                合格可能性80%以上の学校。偏差値で言えば、自分の偏差値より15以上高い学校。必ず合格を確保できる学校を選びます。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                <strong>実力校（2校）</strong><br />
                合格可能性50～70%程度の学校。自分の偏差値と同程度か、少し高い学校。現在の学力でも合格の可能性がある学校です。
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                <strong>チャレンジ校（1～2校）</strong><br />
                合格可能性30～50%程度の学校。自分の偏差値より5～10程度高い学校。合格すれば理想的だが、合格できなくても後悔しない学校を選びます。
              </Typography>
            </Paper>
          </SubSection>

          <SubSection title="バランスを崩した出願の危険性">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>チャレンジ校ばかりに出願</strong> — 全て落ちるリスク。必ず安全校を含めましょう
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>安全校に出願しない</strong> — 合格を確保できず、不本意な進路になる可能性
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#E57373" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>本当に行きたい学校を除いて出願</strong> — 入学後のモチベーション低下のリスク
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="志望校選びで見るべき5つのポイント" id="five-points">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            偏差値以外に、志望校を選ぶ際に確認すべき5つのポイントを紹介します。これらを総合的に判断することで、自分に最適な学校が見つかります。
          </Typography>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0", mb: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
              ポイント1: 教育理念と自分の価値観の一致
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              学校のホームページや説明会で、その学校が何を大切にしているのかを確認しましょう。人間教育を重視する学校、進学に特化した学校、国際教育に力を入れている学校など、自分の価値観に合致しているかが重要です。
            </Typography>
          </Paper>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0", mb: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
              ポイント2: 自分が学びたい専門分野や学科の充実度
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              工業科や商業科など特定の専門分野を学びたい場合は、その学科が充実しているかを確認しましょう。施設や設備、講師の質、就職先などを調査し、本当に自分が学べる環境かを判断します。
            </Typography>
          </Paper>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0", mb: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
              ポイント3: 進学実績（特に志望大学への合格実績）
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              大学進学を考えている場合、志望大学への合格者の有無や数を確認しましょう。学校全体の進学実績だけでなく、自分が目指す大学への合格実績が充実している学校を選ぶことで、進学指導の質が高まります。
            </Typography>
          </Paper>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0", mb: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
              ポイント4: 部活動の状況と学力面のバランス
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              部活動をしながら勉強したいのか、勉強を優先したいのかで、学校選びが異なります。進学校でも部活動が充実している学校もあれば、部活動が制限されている学校もあります。自分の高校生活のプランに合った学校を選ぶことが大切です。
            </Typography>
          </Paper>

          <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #bcd7c0" }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
              ポイント5: 通学時間と立地
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              毎日の通学時間は、睡眠や自学時間に大きく影響します。理想的な通学時間は片道1時間以内とされています。立地も重要で、駅から遠い学校では雨の日の通学が大変になります。現実的な通学時間で、学力向上に支障が出ない学校を選びましょう。
            </Typography>
          </Paper>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#1e782d", mb: 3 }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* Related Links */}
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e782d", mb: 3 }}>
            関連コラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
            <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1" } }}>
                偏差値の見方・使い方を徹底解説
              </Box>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1" } }}>
                志望校の選び方｜受験校を決める5つの基準
              </Box>
            </Link>
            <Link href="/column/koukou-career/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1" } }}>
                高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較
              </Box>
            </Link>
            <Link href="/column/taiken-nyugaku/" style={{ textDecoration: "none" }}>
              <Box sx={{ p: 2, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, color: "#1e782d", "&:hover": { bgcolor: "#FFF8E1" } }}>
                学校見学・体験入学の活用ガイド｜志望校選びに役立てよう
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>

      {/* Navigation */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1e782d", fontWeight: 600, "&:hover": { opacity: 0.7 } }}>
              <ArrowBackIcon sx={{ fontSize: "1.1rem" }} />
              コラム一覧に戻る
            </Box>
          </Link>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1e782d", fontWeight: 600, "&:hover": { opacity: 0.7 } }}>
              高校偏差値ランキング
              <ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
