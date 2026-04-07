import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Helper Components
function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 700, color: "#0D47A1", mb: 2, scrollMarginTop: 80 }} id={id}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3, ml: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#1565C0", mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function KoukouOyakoPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "保護者が知っておくべき高校受験サポート方法｜親ができること・できないこと" },
  ];

  const faqItems = [
    {
      question: "高校受験において保護者の役割とは何ですか？",
      answer: "保護者の役割は『サポーター』です。受験勉強の主体は子ども本人であり、親の役割は環境整備・情報収集・メンタルサポートに限定すべきです。親が過度に干渉すると、子どもの自立心が損なわれ、逆効果になることが多いです。",
    },
    {
      question: "受験期の子どもにどのくらい勉強させるべきですか？",
      answer: "子ども本人の意志を尊重し、目安として中3では平日3～4時間、休日6～8時間程度が一般的です。ただし個人差が大きいため、本人の適性に合わせることが大切です。親が無理に勉強させるのではなく、本人のペースを見守ることが重要です。",
    },
    {
      question: "成績が上がらないときは、どう対応すべきですか？",
      answer: "成績が上がらない原因を冷静に分析することが重要です。勉強法に問題がないか、十分な学習時間が確保できているか、心理的なストレスがないかなどを確認します。その上で、塾の講師や学校の先生に相談し、適切な対応方法を検討します。親が責める姿勢は禁物です。",
    },
    {
      question: "親は子どもにどのような言葉をかけるべきですか？",
      answer: "『頑張ってね』『応援しているよ』など、前向きで応援する言葉が効果的です。一方、『合格できなかったら大変』『〇〇高校に絶対合格しろ』など、プレッシャーを与える言葉は避けるべきです。子どもの努力を認め、結果がどうなっても支えるという姿勢が大切です。",
    },
    {
      question: "受験本番の日、親はどう動くべきですか？",
      answer: "当日は、子どもが試験会場に無理なく到着でき、リラックスできる環境を整えることが重要です。朝食は本人の希望に合わせ、余裕を持って出発します。試験中は親は子どもに干渉せず、試験終了まで待つことが大切です。試験結果についても、当日は触れない配慮が必要です。",
    },
    {
      question: "複数の子どもがいる場合、受験生と下の子どもの対応のバランスをどう取るべきですか？",
      answer: "受験生に配慮しつつ、下の子どもも同じように大切にすることが重要です。受験生ばかりに注目が集まると、下の子どもが不満を持つ可能性があります。一方、受験生を軽視するのも良くありません。家族全体で受験を応援する雰囲気を作り、それぞれの子どもを平等に愛していることを示すことが大切です。",
    },
  ];

  return (
    <>
      <SEO
        title="保護者が知っておくべき高校受験サポート方法｜親ができること・できないこと | School Station"
        description="高校受験を控えた子どもを持つ保護者向けに、受験サポートの正しい方法を解説。親がやるべきこと・避けるべきこと、受験情報の集め方、メンタルサポートのコツを紹介。"
        canonical="/column/koukou-oyako/"
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
            "headline": "保護者が知っておくべき高校受験サポート方法｜親ができること・できないこと",
            "description": "高校受験を控えた子どもを持つ保護者向けに、受験サポートの正しい方法を解説。親がやるべきこと・避けるべきこと、受験情報の集め方、メンタルサポートのコツを紹介。",
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
            background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            保護者が知っておくべき高校受験サポート方法
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            親ができること・できないことを理解し、子どもの受験を最適にサポートするための実践的ガイド
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校受験において保護者の役割とは" id="role">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校受験は、子ども本人の人生に大きな影響を与える重要なイベントです。親として何をすべきかを理解することが、子どもの成功を左右する重要な要素になります。保護者の役割は『直接の学習指導者』ではなく、『受験活動のサポーター』であることを認識することが重要です。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>情報収集</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>高校の情報・入試日程・願書手続きなど、必要な情報を積極的に集める。子ども本人では気づきにくい情報も、親が収集してサポートします。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>環境整備</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>勉強しやすい家庭環境を整え、健康管理（栄養・睡眠）をサポート。親の役割は『邪魔しない』ことも含まれます。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>メンタルサポート</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>成績が上がらない時期、不安感が強い時期に、精神的なサポートをする。親の安定した態度が、子どもの心の支えになります。</Typography>
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: "#F5F9FF", border: "1px solid #BBDEFB" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#0D47A1", mb: 1 }}>受験の見守り</Typography>
              <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>最終的には、子どもが自分の力で受験を乗り越えるのを見守る。過度な指示は避け、子どもの判断を尊重する。</Typography>
            </Paper>
          </Box>
        </Section>

        <Section title="保護者が積極的にすべきサポート" id="support">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            受験サポートには『やるべきこと』があります。親が主導的に取り組むべき業務を理解することで、効果的なサポートができます。
          </Typography>

          <SubSection title="受験情報の収集と提供">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>高校情報の収集</strong> — 志望高校の偏差値、合格実績、教育方針、進学先など、子ども本人では集めきれない情報を親が主導的に収集します。複数の情報源から確認することが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>入試日程と願書管理</strong> — 願書提出期限、試験日程、合格発表日など、手続き系の情報管理は親の責任です。提出書類漏れがないか確認するのも親の役割です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校説明会への参加</strong> — 親も学校説明会に参加し、学校の雰囲気を直接感じることが重要です。その情報を子どもと共有することで、志望校の選定がより現実的になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="健康管理と生活環境の整備">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>栄養管理</strong> — 脳を使う受験勉強には、バランスの取れた食事が不可欠です。疲労回復に役立つ栄養を意識した食事を用意することが、親の重要なサポートです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>睡眠時間の確保</strong> — 睡眠不足は学習効率を大きく低下させます。受験期であっても、十分な睡眠時間（7～8時間）を確保するよう勧告することが重要です。徹夜勉強を容認しないことが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>勉強しやすい環境設備</strong> — 机の照明、椅子の高さ、室温など、勉強環境を物理的に整えることが親の責任です。勉強妨害となるテレビやスマートフォンは、リビングなど別の場所に置くなどの配慮も必要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>病気予防</strong> — インフルエンザ予防接種、手洗い・うがい習慣の励行など、受験期の病気を防ぐための環境作りが重要です。受験直前の体調管理は人生の分岐点です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="メンタルサポートと相談対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>話を聞く姿勢</strong> — 子どもが不安や悩みを話してきたときは、まず『聞く』ことが大切です。親が一方的に意見を言うのではなく、子どもの気持ちを受け止めることが重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>失敗を許容する姿勢</strong> — 模試で悪い点数を取ったとき、親が責める姿勢を見せると、子どもは失敗を隠すようになります。『失敗は成功のもと』という姿勢を示すことが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専門家への相談</strong> — 心理的な問題がある場合は、学校のキャリアカウンセラーやスクールカウンセラーへの相談も視野に入れます。親だけで対応できないこともあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>応援と励ましの言葉</strong> — 『頑張ってね』『応援しているよ』など、子どもの努力を認める言葉が重要です。定期的に『あなたの頑張りを見ているよ』というメッセージを伝えることが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="塾・家庭教師との連携">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>塾選び</strong> — 子どもに合った塾を選ぶのは親の重要な役割です。個別指導と集団指導の違い、オンライン塾など、複数の選択肢から検討する必要があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期的な面談</strong> — 塾の講師と月1～2回面談し、子どもの学習進捗状況を確認します。塾での様子や課題を共有することで、家庭でのサポート方法も見えてきます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="やりすぎ・過干渉が子どもに与える悪影響" id="overparenting">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            親心から受験をサポートしたいという気持ちは理解できます。しかし、過度な干渉は、子どもの自立心を損ない、逆に学習意欲を低下させてしまいます。避けるべき親の行動を理解することが重要です。
          </Typography>

          <SubSection title="避けるべき親の行動">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『勉強しなさい』という指示</strong> — 何度言っても逆効果です。親の指示で勉強する子どもは、親の目がなくなると勉強しなくなります。子ども本人の『やる気』を引き出すことが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>成績が悪いことを責める</strong> — 『こんな成績では合格できない』『兄弟は〇〇高校に合格した』など、他者との比較や責めの言葉は禁物です。子どもの自信を奪い、親子関係を悪化させます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習内容への細かい指示</strong> — 『この教材をやりなさい』『こういう勉強法をしなさい』など、具体的な学習指導は塾や学校の先生に任せるべきです。親が指示しすぎると、子どもは思考を停止します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>勉強の進捗状況を細かくチェック</strong> — 『今日、何時間勉強した？』『模試の点数は？』など、細かいチェックは子どもにストレスを与えます。信頼の気持ちを示し、おおらかに見守ることが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『〇〇高校に絶対合格しろ』というプレッシャー</strong> — 親の期待が強すぎると、子どもは『親の期待に応えるため』に勉強するようになります。これは自分の夢を失うことになります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>友人関係や部活への干渉</strong> — 『友人と遊ぶ時間がもったいない』『部活をやめて勉強に集中しろ』など、友人関係や部活までコントロールしようとする親もいます。これは大きな失敗です。バランスの取れた生活が、実は最も効果的な学習につながります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="過干渉が子どもに与える影響">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
              <Paper sx={{ p: 2.5, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#E65100", mb: 1 }}>自立心の喪失</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>親に指示されることに慣れた子どもは、自分で判断・決定できなくなります。これは受験後の人生にも悪影響を与えます。</Typography>
              </Paper>
              <Paper sx={{ p: 2.5, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#E65100", mb: 1 }}>親への反発</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>過度な干渉は反発を生み、親の言うことを聞かなくなります。親子関係の悪化も招きます。</Typography>
              </Paper>
              <Paper sx={{ p: 2.5, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#E65100", mb: 1 }}>学習動機の喪失</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>『親の期待に応えるため』の勉強になり、『自分のやりたいこと』が見失われます。</Typography>
              </Paper>
              <Paper sx={{ p: 2.5, bgcolor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", fontWeight: 700, color: "#E65100", mb: 1 }}>ストレスと精神的な問題</Typography>
                <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.7 }}>プレッシャーからストレス、不安症、うつ症状など、心身の健康を害する可能性があります。</Typography>
              </Paper>
            </Box>
          </SubSection>
        </Section>

        <Section title="受験情報の集め方" id="information">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            正確な受験情報は、適切な志望校選びと合格可能性の判断に不可欠です。親が主導的に情報を集め、子どもに提供することが大切です。
          </Typography>

          <SubSection title="学校説明会への参加">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>親も一緒に参加する</strong> — 学校説明会は子どもだけでなく、親も参加することをお勧めします。学校の雰囲気、教育方針、施設などを直接確認できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>質問すべき項目を準備する</strong> — 学費、進学実績、部活動、受験方式など、事前に質問項目を用意し、スタッフに直接質問します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数校の説明会に参加</strong> — 志望校候補を3～5校絞った上で、それぞれの説明会に参加し、比較検討することが大切です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="塾の講師・学校の先生への相談">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期面談の活用</strong> — 塾の講師や学校の先生と面談し、お子さんの学力レベルに合った志望校を相談します。子どもの適性と学力に合った選択が重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>進学実績の確認</strong> — 高校からの大学進学実績、合格者の受験方式、進学先の特徴など、具体的な数字を確認します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="インターネット・資料での情報収集">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校ウェブサイトの確認</strong> — 学校の公式ウェブサイトから、入試科目、配点、過去問、教育方針などを確認します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>受験情報サイトの活用</strong> — School Station などの高校情報サイトで、偏差値、進学実績、部活動などを比較します。複数の情報源から確認することが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>受験案内冊子の取得</strong> — 各高校の受験案内冊子を取り寄せ、詳細な情報（受験日程、出願方法、試験科目など）を確認します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="受験期の子どもへのメンタルサポートのコツ" id="mental">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            受験期は、子どもの心理状態が大きく変動する時期です。親のメンタルサポートが、受験成功の大きな要因になります。
          </Typography>

          <SubSection title="成績が上がらないときの対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>責めずに原因を一緒に考える</strong> — 『成績が上がらないのはなぜだろう』と、冷静に分析します。勉強法の工夫、学習時間の見直しなど、建設的な対話を心がけます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>小さな進歩を認める</strong> — 『〇〇が得意になったね』『この単元はマスターできたね』など、小さな成長を認める言葉を意識的に伝えます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>プロの意見を尊重する</strong> — 塾の講師や学校の先生の指導方針を信頼し、親は『見守る』姿勢を保ちます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="不安が強いときの対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>話を聞く</strong> — 『不安なことがあったら、何でも話してね』と、子どもが話しやすい雰囲気を作ります。親が『聞き手』に徹することが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『今できることをやろう』という前向きメッセージ</strong> — 不確実な未来を心配するより、『今できることに集中しよう』という考え方を示します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>家庭での安定した雰囲気作り</strong> — 親の不安が子どもに伝わると、さらに不安が増幅されます。家庭を『安心できる場所』として保つことが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="モチベーション維持のための工夫">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>定期的な励ましの言葉</strong> — 『あなたの頑張りを見ているよ』『応援しているよ』など、定期的に伝えることで、子どものモチベーションが維持されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>適度なリフレッシュ機会</strong> — 『たまには息抜きしようか』『好きなものを食べようか』など、適度なリフレッシュを促します。休息も受験勉強の一部です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望校への関心を高める</strong> — 『〇〇高校ってこんなに良い学校だよ』と、志望校の魅力を伝え、子どもの目標達成への意欲を高めます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="受験本番直前・当日の親の動き方" id="examination">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            受験本番を前にした時期の親の行動が、子どもの最終的なパフォーマンスに大きな影響を与えます。本番直前の準備と当日の対応について、具体的なアドバイスをまとめました。
          </Typography>

          <SubSection title="受験本番1～2週間前の準備">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>試験会場への移動ルートの確認</strong> — 実際に試験会場を訪問し、移動ルート、所要時間、公共交通機関の状況を確認します。朝、どのくらいの時間に家を出ればいいかを把握することが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>必要な提出書類の整理</strong> — 受験票、身分証明書、筆記用具など、必要な書類や物品をリストアップし、試験当日の朝に持ち物漏れがないか確認します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>睡眠リズムの調整</strong> — 本番と同じ時間に寝起きする習慣をつけ、本番での体のコンディションを整えます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>体調管理の強化</strong> — インフルエンザ予防接種の確認、手洗い・うがい習慣の徹底、十分な睡眠と栄養補給を意識します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="試験当日の朝の対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>栄養バランスの取れた朝食</strong> — 子どもが食べやすく、栄養のある朝食を用意します。ただし、いつもと違うものは避け、消化の良いものを心がけます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>余裕を持った出発</strong> — 試験開始時間の30分～1時間前には試験会場に到着するよう、余裕を持たせた時間で出発します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ポジティブな声かけ</strong> — 『これまでの頑張りをぶつけてきてね』『応援しているよ』など、前向きなメッセージを伝えます。『絶対合格するんだよ』というプレッシャーはかけないことが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="試験中の親の過ごし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>試験会場での待機</strong> — 試験中は、親は試験会場の控え室やカフェなどで待機します。試験終了時間まで、子どもに干渉しないことが大切です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>親自身の心身管理</strong> — 親も不安ですが、その不安を子どもに見せないことが大切です。本を読む、散歩するなど、親自身も落ち着いて過ごすことを心がけます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数試験の場合の対応</strong> — 複数日試験がある場合は、各試験終了後の食事や睡眠管理が重要です。試験結果の詳しい質問は避けるべき配慮も必要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="試験後の対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>結果発表までの過ごし方</strong> — 『今回の試験はどうだった？』という質問は避けることが大切です。試験が終わったら、それ以上のプレッシャーをかけないようにします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>日常生活の回復</strong> — 試験後も、学校への出席や普通の生活を続けることが大切です。受験だけに人生が占領されないようにします。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数校受験の場合の対応</strong> — 複数校を受験した場合は、各校の結果発表日を整理し、家族で冷静に対応方法を話し合うことが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        {/* FAQ */}
        <Box sx={{ my: 5 }}>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1565C0", fontWeight: 600, cursor: "pointer", "&:hover": { color: "#0D47A1" } }}>
              <ArrowBackIcon sx={{ fontSize: "1.2rem" }} />
              コラム一覧に戻る
            </Box>
          </Link>
          <Typography variant="caption" sx={{ color: "#666" }}>
            最終更新：{new Date("2026-04-07").toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
