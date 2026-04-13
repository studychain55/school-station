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

export default function KoukouGakuensaiPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の学園祭・文化祭ガイド｜企画・出展のコツと高校生活の充実" },
  ];

  const faqItems = [
    {
      question: "学園祭の準備はいつから始まるのが一般的ですか？",
      answer: "多くの高校では、開催の2～3ヶ月前から準備委員会が結成され、本格的な準備が始まります。ただし、クラスの出展準備は開催の1～2ヶ月前から本気モードになることが多いです。限られた時間で成果を出すためには、5月から計画を立て始めることをお勧めします。",
    },
    {
      question: "学園祭で失敗しないための計画の立て方は？",
      answer: "『3段階計画法』をお勧めします。第1段階（企画決定・予算計画）、第2段階（準備・制作）、第3段階（当日運営・反省）の3段階に分けて、段階ごとに責任者を決め、進捗管理を行うことが重要です。また、定期的に全体ミーティングを開き、問題が発生した際は迅速に対応することが成功の鍵です。",
    },
    {
      question: "学園祭の出展でクラスがまとまらない場合、どうすればいいですか？",
      answer: "出展内容の決定段階で、複数の案を『投票制』で決める、意見対立する場合は『小委員会制』で先に詳細を詰めてから全体提案するなど、民主的で透明性のある意思決定プロセスを設計することが大切です。また、『全員参加の規則』を最初に決め、参加度の低い生徒にはサポート役を割り当てることも有効です。",
    },
    {
      question: "学園祭での食販売は許可が必要ですか？",
      answer: "ほとんどの高校では、食品を扱う出展に対して『衛生管理計画書』の提出を求めています。特に、加熱が必要な調理や、生もの・卵・乳製品を扱う場合は、保健所の許可が必要な場合もあります。必ず学校の指導の先生に相談し、ルールを確認してから出展してください。",
    },
    {
      question: "学園祭でお金を集める際の注意点は？",
      answer: "生徒が費用を負担する場合は、『全員から均等に徴収する』『チケット販売で利益を上げる』など、透明性のある資金調達方法を採用することが重要です。余ったお金の処理（返金・寄付・貯蓄）も事前に決めておきましょう。不透明な金銭管理は、クラスのトラブルの原因になります。",
    },
    {
      question: "学園祭の実行委員と各クラスの負担の違いは何ですか？",
      answer: "実行委員は『全校規模のイベント運営』（スケジュール管理、舞台設営、全体統括）を担当するため、準備期間の負担が非常に大きいです。一方、各クラスは『自分たちの出展』に専念すればよいため、比較的自由な内容設計ができます。実行委員に立候補する場合は、かなりの時間と努力が必要となることを覚悟してください。",
    },
  ];

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <SEO
        title="高校の学園祭・文化祭ガイド｜企画・出展のコツと充実した高校生活 | School Station"
        description="高校の学園祭・文化祭の完全ガイド。クラス企画の選び方、出展内容の決定方法、準備の進め方、実行委員の役割、当日の運営のコツまで、高校生活を充実させるためのノウハウをすべて解説。"
        canonical="/column/koukou-gakuensai/"
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
            "headline": "高校の学園祭・文化祭ガイド｜企画・出展のコツと充実した高校生活",
            "description": "高校の学園祭・文化祭の完全ガイド。クラス企画の選び方、出展内容の決定方法、準備の進め方、実行委員の役割、当日の運営のコツまで、高校生活を充実させるためのノウハウをすべて解説。",
            "datePublished": `${CURRENT_YEAR}-04-07`,
            "dateModified": `${CURRENT_YEAR}-04-07`,
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
            高校の学園祭・文化祭完全ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            企画の選び方、出展内容の決定、準備スケジュール、当日の運営から実行委員の役割まで、学園祭を成功させるすべてのノウハウを解説
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="学園祭とは？高校生活を充実させるイベント" id="overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学園祭（文化祭・体育祭）は、高校生活において『勉強以外で最も大きな達成感を得られるイベント』です。クラス全体で1つの目標に向かい、当日までの準備プロセスと、当日の成功体験を通じて、『チームワークの大切さ』『計画力』『問題解決能力』などの重要なスキルが養われます。
          </Typography>

          <SubSection title="学園祭の種類と特徴">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                高校の学園祭には、主に『文化祭』『体育祭』『文化祭と体育祭の併催』という3パターンがあります。それぞれの特徴を理解し、自分たちの高校にどのような学園祭があるのかを把握することが重要です。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>文化祭</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    クラスでの企画展示、演技、食販売、部活動の成果展示などが中心です。『創造性』『表現力』『企画力』が試されます。文化祭は、一般来場者（保護者・地域住民）も訪れるため、プレゼンテーション能力が問われます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>体育祭</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    クラス対抗の運動会です。『団結力』『体力』『競争心』『戦略立案』などが試されます。体育祭では、運動が得意でない生徒も、応援・装飾・進行管理など、様々な役割を担当することで、全員が参加できる仕組みになっています。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>文化祭と体育祭の併催</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    金曜日に文化祭、土曜日に体育祭、という2日間開催の学校もあります。この場合、準備期間が長く、クラス内での『係分け』がより重要になります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="学園祭の高校生活への影響">
            <Box sx={{ bgcolor: "#FFF9E6", p: 2.5, borderRadius: 1, border: "1px solid #FFB74D", mb: 2 }}>
              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#F57F17" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『クラスの一体感の醸成』：学園祭を通じて、クラスメイトとの関係が一段と深まります。
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#F57F17" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『達成感と自信』：準備から当日まで、困難を乗り越えた経験は、大学受験や進路選択の自信につながります。
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#F57F17" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『リーダーシップの育成』：企画責任者やクラス代表として、初めてリーダーシップを発揮する機会になります。
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#F57F17" }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『推薦入試での話題』：推薦入試の面接で『学園祭での経験は』と聞かれることもあります。具体的な成果を述べられると、面接官に強い印象を与えます。
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="文化祭のクラス企画選びと出展内容の決定方法" id="kikaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文化祭のクラス企画は、『全員が参加できるか』『実現可能性はあるか』『来場者に喜んでもらえるか』の3点を基準に選ぶことが重要です。
          </Typography>

          <SubSection title="人気のあるクラス企画の種類">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>食販売（たこ焼き、クレープ、焼きそば、カレーなど）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    来場者が最も多く立ち寄る出展です。利益も上げやすいため、クラス費の不足を補えます。ただし、衛生管理が厳しく、準備期間が長いため、『実行委員を中心に計画的に進める』ことが成功の鍵です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>教室での展示（迷路、射的、ゲーム、展示作品など）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    準備期間が比較的短く、全員が参加しやすいため、クラスがまとまらないときに最適です。工作・美術の得意な生徒が中心になり、他の生徒はサポート役に回れます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>舞台での演技（劇、コント、ダンス、歌など）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    高い達成感が得られますが、準備期間が長く、体力的な負担も大きいです。舞台経験のある生徒がリーダーシップを発揮できる企画です。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>オタクの聖地、アニメカフェ、韓国カフェなどのテーマ企画</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    特定の趣味を共有するクラスなら、盛り上がりやすいです。装飾や演出に工夫がある程度必要なため、センスが問われます。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="企画を決める際の民主的なプロセス">
            <Box sx={{ bgcolor: "#F5F9FF", p: 2.5, borderRadius: 1, border: "1px solid #bcd7c0", mb: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
                企画決定で『議論がこじれる』パターンの多くは、『意見をまとめるプロセスが不透明』だからです。以下の手順で進めることをお勧めします。
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>第1段階：複数の案を出す（1週間程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『全員で各自3案以上、企画案を出す』というルールを決める。得票数が少ない案も、提案者の『想い』を尊重するため、決定段階で振り返る。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>第2段階：メリット・デメリットを比較（1週間程度）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『実現可能性』『準備期間』『全員参加度』『来場者の満足度』『利益』などの観点から、案を比較する表を作成。客観的に評価することが重要。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>第3段階：投票で決定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『1人1票、記名投票で、上位3案に投票』などのルールで投票。結果は公開し、『誰がどの案に投票したか』ではなく『全体としてどの案が選ばれたか』を尊重する。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学園祭の準備スケジュールと進捗管理のコツ" id="junbi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学園祭の成功は『準備のプロセス』で8割決まります。計画的で透明性のある準備スケジュールを立てることが重要です。
          </Typography>

          <SubSection title="3～4ヶ月前：企画案募集・選定段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>クラス全体で企画案を募集</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    3案以上の企画案が出るよう、複数回のクラス会議を開く。実現可能性を判断するため、『予算概算』『必要人数』『準備期間』も一緒に提出させる。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>企画を投票で決定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    上記で紹介した『3段階プロセス』で、民主的に企画を決定。決定後は『全員がこの企画で頑張る』という覚悟を決める。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2～3ヶ月前：詳細計画・係決め段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>企画責任者を決定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『総責任者1名』『副責任者1～2名』『小係（製作係、演出係、当日運営係など）の複数名』で構成。責任者には『全体進捗管理表を作成する』『定期的にミーティングを開く』『問題発生時に早期対応する』という役割を期待。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>全員の係を決定</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『全員参加』が原則。参加度が低い生徒にも、『当日の装飾・設営『『来場者案内』『片付け』など、様々な役割を割り当てることで、『自分も企画の一部』という意識を持たせる。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>予算計画を立案</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『材料費』『食材費』『装飾費』などを細かく見積もり、『1人あたりの負担額』を決定。余剰金の処理方法（返金・寄付・積み立て）も事前に決めておく。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="1～2ヶ月前：本格的な製作段階">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>毎週ミーティングを開く</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『進捗状況の報告』『問題の共有と解決』『次週のタスク確認』を30分程度で行う。全体で情報共有することで、『誰が何をしているのか』が明確になり、重複や漏れを防げます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『チェックリスト』を活用</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『小道具の製作』『装飾の準備』『当日の流れの確認』など、各タスクを細分化して、『完了したか』『残っているか』を毎週チェック。漏れが生じにくくなります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>予期せぬ問題への対応</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『材料が不足した』『係の生徒が急に参加できなくなった』などの問題が発生した場合は、『責任者が迅速に代替案を出す』ことが重要。『このままでは間に合わない』と判断したら、早期に指導の先生に相談することも重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="1週間前～当日：最終チェック・当日運営">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>当日の『操作マニュアル』を作成</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『何時に何をするのか』『誰が何を担当するのか』『トラブルが発生した際の対応方法』などを書いたマニュアルを作成。急な欠席や係が入れ替わっても、対応できるようにします。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>当日の『朝礼』で全員で心を合わせる</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    当日朝に『本気モードの朝礼』を開き、『今日の目標』『各係の最終確認』『問題発生時の対応方法』を確認。このプロセスで、クラスが一体になります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>当日は『来場者の笑顔』を最優先に</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    来場者が『楽しかった』『また来たい』と思う企画にするために、『笑顔で対応する』『丁寧に説明する』『困っている来場者に声をかける』など、接客の質を高めることが重要です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="学園祭での『全員参加』を実現するための工夫" id="zenin">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            学園祭を成功させるためには、『全員参加』が不可欠です。ただし、得意不得意や関心度には差があるため、『全員が活躍できる仕組み』を作ることが重要です。
          </Typography>

          <SubSection title="参加度が低い生徒への対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『当日限定タスク』を用意する</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    準備に参加できない生徒でも、『当日の来場者案内』『販売スタッフ』『装飾の設営』など、当日限定で活躍できるタスクを用意。『自分も企画の一部』という意識を持たせる。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『興味に合わせた係分け』</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『美術が得意な生徒は装飾係』『話好きな生徒は当日の進行係』『力持ちな生徒は設営・片付け係』など、『その生徒の適性と興味に合わせた係』を割り当てることで、『やりがい感』が生まれます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『参加度の低い生徒の声を聞く』</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『なぜ参加できないのか』『どうしたら参加できるのか』を丁寧に聞く。家庭の事情で準備に参加できない生徒もいるため、その生徒の状況を理解した上で、『その生徒なりの参加方法』を見つけることが大切です。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="意見対立が生じた場合の対応">
            <Box sx={{ bgcolor: "#FFE6E6", p: 2.5, borderRadius: 1, border: "1px solid #EF9A9A" }}>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
                『企画内容』『予算配分』『係の割り振り』など、様々な場面で意見対立が生じます。その場合は、『感情的な対立』にしないために、以下の対応をお勧めします。
              </Typography>

              <List>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『その人の意見を尊重する』前提を作る</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      『対立する意見も、その人なりの『想い』や『理由』があることを尊重する』という文化をクラスに作る。『俺の意見が正しい』ではなく、『お前の想いはわかるけど、こういう理由で別の案にしたい』という丁寧な説明が重要。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『ファシリテーター』を用意する</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      議論がこじれた場合は、『ファシリテーター（進行役）』が『両者の意見を整理して、共通点と相違点を明確にする』という役割を担う。その後、『投票制』など客観的な意思決定方法で決めることが重要。
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ color: "#C62828" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『決定後の対応』が最重要</Typography>
                    <Typography variant="body2" sx={{ color: "#424242" }}>
                      『投票で自分の案が選ばれなかった』という悔しさを、『でも、決定した方針に協力する』という前向きさに変える。このプロセスで『民主主義と協調性』を学べます。
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Section title="体育祭を成功させるための戦略と運営のコツ" id="taiikusai">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            体育祭は、『文化祭とは異なり、『競争』という要素が強いイベント』です。『勝つこと』だけを目指すのではなく、『全員が楽しみ、全員が活躍する』という視点が重要です。
          </Typography>

          <SubSection title="体育祭での『全員参加』の工夫">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『選手と応援・運営のバランス』を取る</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    体育祭では、『選手』『応援』『装飾・進行運営』という3つの役割がある。全員が『自分の役割で最高の力を発揮する』という意識を持つことで、全員が活躍できる。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『応援のテーマ』を決める</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『統一の衣装・髪飾り』『クラスの旗やうちわの製作』『応援チャント・ダンスの練習』など、『応援チーム』が活躍できる工夫をする。応援がいいと、選手のモチベーションも上がります。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『得点計算が複雑でない』ことの重要性</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『団体種目での成績』『装飾点数』『応援点数』など、複数の要素で『総合優勝』を決める学校が多いです。『選手だけが評価されるのではなく、応援・装飾も評価される』という仕組みが、『全員参加』につながります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="当日のトラブル対応">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『怪我や体調不良』への対応</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    急に選手が欠席した場合は、『代替選手を用意する』『別の種目に参加させる』など、柔軟に対応。『この生徒も何らかの形で体育祭に参加する』という姿勢を心がけます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.5 }}>『接戦での気持ちの切り替え』</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    『惜しくも負けてしまった』という場合は、『次のチャンスに向かって、前向きに行動する』という文化を作ることが重要。『負けたから落ち込む』のではなく、『次に向けて何ができるか』を考える力が、人生で最も大切なスキルです。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600 }}>
            学園祭は高校生活の最高の思い出作り
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", mb: 3, maxWidth: 600, mx: "auto" }}>
            学園祭の準備プロセスを通じて、『チームワーク』『計画力』『問題解決能力』『リーダーシップ』など、人生で必要なスキルが自然と身につきます。失敗を恐れず、『全員で最高の学園祭を作る』という気持ちを大切にしましょう。
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
              全国の高校偏差値ランキングを見る
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
