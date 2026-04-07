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

export default function KoukouOnlineSchoolPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "通信制高校・オンライン高校の選び方｜卒業資格・学費・自由な時間の両立" },
  ];

  const faqItems = [
    {
      question: "通信制高校とは何ですか？全日制高校との違いは？",
      answer: "『通信制高校は「自宅学習を中心とした高等教育機関」』『週に数日のスクーリング（面接授業）と自学習によって高卒資格を取得』『全日制高校と異なり、自分のペースで学習を進めることが可能』という『極めて柔軟な学習形態』です。『全日制高校』は『毎日朝から放課後まで登校し、決まったカリキュラムに従う』『集団生活を通じた社会性の育成が重視される』『部活動・学園祭など、学校行事が充実』という『集団教育を基本』としています。『通信制高校』は『自分のペースで学習でき、仕事・趣味・資格取得と両立が容易』『スクーリングは週1～3日程度で、自由な時間が大幅に確保』『経済的な負担が低い（年間学費10～60万円程度）』『多様な背景を持つ生徒が在籍（高認取得者・定時制からの転入・社会人等）』という『多様な選択肢』が特徴です。『自分のライフスタイル・進路目標に合わせた選択が重要』『自律的な学習が必須』という『重要な判断基準』があります。",
    },
    {
      question: "通信制高校の学費はいくらですか？公立と私立で費用は異なりますか？",
      answer: "『公立通信制高校の学費』は『年間授業料：5,000～15,000円程度（月額400～1,250円）』『施設費・教材費：5,000～10,000円』『スクーリング費用（交通費含む）：5,000～20,000円』『総計：年間15,000～45,000円程度』『大幅に低額』という『経済的に大きなメリット』があります。『私立通信制高校の学費』は『年間授業料：150,000～400,000円程度』『施設費・教材費：50,000～100,000円』『添削指導料・サポート料：30,000～60,000円』『総計：年間230,000～560,000円程度』『高額な傾向』という『学校やサービス内容によって大きく異なる』特徴があります。『高等学校等就学支援金制度（国の補助金：年間118,800～297,000円）』を『全国の公立・私立通信制高校の生徒が受給可能』『実質的な学費負担を大幅に軽減』『所得制限あり（年間910万円以上の家庭は対象外）』『条件を満たす場合は申請手続きが重要』です。『自分の家庭の経済状況・受けられる補助制度』『各学校のサービス内容と費用のバランス』を『総合的に判断した選択』が『通信制高校選びの成功』に繋がります。",
    },
    {
      question: "通信制高校を卒業した場合、大学進学に不利になりますか？",
      answer: "『通信制高校の卒業資格は全日制高校と全く同じ』『大学入試時に「通信制卒業」という事実が不利に働くことはない』『学部・大学によっては「全日制高校出身者」と「通信制高校出身者」の区別がない』という『法制度上の完全な同等性』が保証されています。『ただし現実的には』『大学側が「通信制高校出身者の学力が劣る」と誤解する可能性がある』『面接試験で「なぜ通信制を選んだのか」という質問が来る可能性』『通信制高校での自学習の成果を定量的に示す必要』という『心理的・社会的な課題』が存在します。『対策としては』『大学入学共通テストで高得点を獲得し、学力を証明』『英検・数学検定・簿記等の資格取得により、学習意欲と能力を示す』『志望理由書で「通信制を選んだ理由」「その間の学習成果」を明確に記述』『面接で「自分がなぜ通信制高校を選び、どのように学習してきたか」を堂々と説明』という『積極的な準備と証拠提示』が『大学進学での成功』に繋がります。『実際には通信制高校から東京大学・京都大学などの難関大学に進学する事例も多数存在』『学力と意欲があれば、通信制高校出身は決して不利にはならない』という『事実の理解』が重要です。",
    },
    {
      question: "オンライン高校と通信制高校はどう違いますか？",
      answer: "『通信制高校』は『基本が郵送・紙媒体による学習材料の配信』『スクーリングは指定された日時に特定の会場に登校』『テレビ放送・ラジオ放送を活用する学校も存在』『インターネット動画等の活用は補完的』という『従来型の通信教育』『自学習が基本』です。『オンライン高校』は『インターネット動画・ウェブ授業が学習の中心』『リアルタイム配信授業（ライブ授業）とオンデマンド動画の両方を活用』『双方向のやり取りが可能（チャット・質問機能）』『スクーリングは最小限（年2～4日程度）に設定』『完全オンラインで卒業資格取得が可能な学校も存在』という『デジタルテクノロジーを活用した新型高等教育』『非常に自由度が高い』です。『選択基準として』『インターネット環境が充実している→オンライン高校が便利』『アナログ学習を希望・インターネット環境が不十分→通信制高校が適切』『通学できない（身体障害・疾患・家庭事情等）→オンライン高校が有効』『対面授業で質問したい→スクーリング充実の通信制高校』という『自分のニーズと環境』に基づいた判断が『最適な選択』に繋がります。",
    },
    {
      question: "通信制高校・オンライン高校は本当に自由ですか？進級・卒業に必要な条件は？",
      answer: "『通信制高校・オンライン高校は自由度が高い一方で、「完全に自由＝何もしなくていい」ではない』『卒業要件が明確に定められており、達成しなければ卒業できない』という『重要な誤解を避けることが必須』です。『卒業要件』は『①在籍期間3年以上』『②総修得単位数74単位以上』『③特別活動30時間以上（学校によって異なる）』という『具体的で厳格な条件』があります。『単位修得の方法』は『①郵送・オンラインでの課題提出（レポート）』『②動画視聴やオンライン授業への参加』『③定期的なスクーリング（面接授業）への出席』『④定期試験への合格』という『複数の要件の同時達成』が必要です。『多くの生徒が失敗する理由』は『「自由=怠けていい」と誤解し、課題提出を怠る』『スクーリングに出席しない』『試験を受けない』『3年間で74単位に到達しない』という『自己管理の失敗』『結果として4年以上在籍する羽目になる』『最悪の場合は高卒資格を取得できず退学となる』という『深刻な事態』です。『対策として』『自分で学習計画を立て、毎月の課題提出期限を管理する』『スクーリング日程をカレンダーに記入し、確実に出席する』『試験対策を計画的に実施する』『親や学校の進路指導の先生と定期的に面談し、進捗状況を確認』という『計画的で継続的な努力』が『通信制高校での卒業』『大学進学への道』を『現実のものにする』ために『不可欠』です。",
    },
    {
      question: "通信制高校やオンライン高校を選ぶべき人はどんな人ですか？",
      answer: "『通信制高校・オンライン高校が適切な選択肢となる人』は『①全日制高校に適応できない生徒（不登校経験者・いじめ被害者・社会適応困難等）』『②仕事をしながら高卒資格を取りたい社会人』『③スポーツ・芸能・音楽など特定の活動に全力投球したい生徒』『④身体障害・慢性疾患で毎日登校が困難な生徒』『⑤親の海外転勤に伴って海外滞在する生徒』『⑥高認（高等学校卒業程度認定試験）合格者で大学進学を目指す生徒』『⑦自分のペースで学習したい自主性の高い生徒』『⑧経済的理由で学費を抑えたい生徒』という『多様な背景と目的を持つ人々』が該当します。『一方、通信制高校が不適切な選択となる人』は『①自己管理能力が極めて低く、計画的に学習できない生徒』『②対面での人間関係構築を強く望む生徒』『③学校の部活動・学園祭などの学校行事を重視する生徒』『④親のサポートなしに学習継続が困難な生徒』『⑤スクーリングなどの通学が物理的に不可能な生徒』という『学習スタイルと環境が大きく異なる人々』です。『自分がどちらのタイプに該当するか』『自己管理能力・学習意欲・生活環境・将来目標』を『親や進路指導の先生と十分に協議した上で』『現実的で実行可能な選択』をすることが『後悔のない高校選び』に繋がります。",
    },
  ];

  return (
    <>
      <SEO
        title="通信制高校・オンライン高校の選び方｜卒業資格・学費・自由な時間の両立 | School Station"
        description="通信制高校とオンライン高校の完全ガイド。全日制高校との違い、公立・私立の学費相場と補助金、スクーリングの内容と日程、卒業資格の取得方法、大学進学への影響、オンライン高校の仕組み、通信制が適切な生徒の特徴、学習管理と成功のポイント、よくある質問への回答を完全解説。"
        canonical="/column/koukou-online-school/"
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
            "headline": "通信制高校・オンライン高校の選び方｜卒業資格・学費・自由な時間の両立",
            "description": "通信制高校とオンライン高校の完全ガイド。全日制高校との違い、公立・私立の学費相場と補助金、スクーリングの内容と日程、卒業資格の取得方法、大学進学への影響、オンライン高校の仕組み、通信制が適切な生徒の特徴、学習管理と成功のポイント、よくある質問への回答を完全解説。",
            "datePublished": "2026-04-07",
            "dateModified": "2026-04-07",
            "author": {
              "@type": "Organization",
              "name": "School Station",
            },
            "publisher": {
              "@type": "School",
              "name": "スクールステーション",
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
            background: "linear-gradient(135deg, #1565C0 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            通信制高校・オンライン高校の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            卒業資格・学費・自由な時間の両立。あなたのライフスタイルに合わせた高校選び
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="通信制高校とは｜全日制高校との基本的な違い" id="tushin-basics">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『通信制高校は「自宅学習を中心とした高等教育機関」として、全日制高校とは全く異なる教育形態』『週に数日程度のスクーリング（面接授業）と自学習によって高卒資格を取得可能』『自分のペースで学習を進めることが最大の特徴』『仕事・趣味・資格取得・治療など、多様なライフスタイルとの両立が可能』という『極めて柔軟で多様な選択肢』です。『多くの生徒が「通信制=簡単」と誤解しているが、実際には継続的な自己管理と努力が必須』『計画的な学習習慣がない場合は卒業が困難になる可能性が高い』という『重要な警告』があります。
          </Typography>

          <SubSection title="全日制高校と通信制高校の主な違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>登校日数と時間</strong> — 『全日制高校は「毎日朝から放課後まで登校」「週5日固定」「年間200日以上の登校」』『通信制高校は「週1～3日のスクーリング」「時間帯も選択できる学校が多い」「年間20～30日程度の登校」「自宅学習が中心」』という『圧倒的な時間的自由さ』が特徴です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学習方法</strong> — 『全日制高校は「教室での一斉授業」「決まったカリキュラム」「集団で同じペースで学習」』『通silon制高校は「郵送・オンラインでの課題提出（レポート）」「動画授業・テキスト自学習」「自分のペースで学習」「得意科目は早く進める、苦手科目は時間をかけるなど、カスタマイズが可能」』という『個別化された学習』が可能です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学費</strong> — 『全日制公立高校は「年間15万～20万円程度」』『全日制私立高校は「年間100万～150万円程度」』『通信制公立高校は「年間15,000～45,000円程度」（補助金利用で実質ほぼ無料）』『通信制私立高校は「年間230,000～560,000円程度」』という『通信制が経済的に大きなメリット』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学校行事・部活動</strong> — 『全日制高校は「文化祭・体育祭など充実した行事」「運動部・文化部など多くの部活が存在」「学校生活の中核」』『通信制高校は「行事が最小限（卒業式程度）」「部活動がない学校が多い」「学校外での活動（趣味・仕事など）が中心」』という『学生生活の定義の違い』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>対人スキルの育成</strong> — 『全日制高校は「集団生活を通じた社会性・協調性の育成」「友人関係の構築」「同級生との深い人間関係形成」』『通信制高校は「スクーリング時の限定的な人間関係」「自律的な学習習慣の形成」「個人としての成長に重点」』という『教育方針の違い』があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="通信制高校の学費｜公立と私立の費用比較と補助金活用" id="tushin-gakuhi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『通信制高校の学費は全日制高校と比較して大幅に低額』『ただし公立と私立で費用が大きく異なる』『国による補助金（高等学校等就学支援金）を活用することで、実質的な負担を最小化することが可能』『各学校のサービス内容と費用のバランスを慎重に検討した上での選択が重要』という『経済的な判断軸』があります。
          </Typography>

          <SubSection title="公立通信制高校の費用構成">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業料</strong> — 『年間5,000～15,000円程度（月額400～1,250円という極めて低額）』『高等学校等就学支援金制度の対象』『実質的に無料～5,000円程度の負担』という『経済的に最もメリット』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>教材費・施設費</strong> — 『年間5,000～10,000円程度』『テキスト代・学習教材の購入費』『図書館や施設利用料』が含まれます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクーリング費用</strong> — 『年間5,000～20,000円程度（交通費含む）』『週1～3日のスクーリング通学費』『自宅から学校までの距離で大きく異なる』『遠方からの受講生は費用が増加する傾向』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その他の費用</strong> — 『生徒会費：500～1,000円程度』『修学旅行積立金：通常は実施されないか、実施されても5,000～10,000円程度』『年間総計：15,000～45,000円程度』『3年間で約45,000～135,000円という極めて低額』です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="私立通信制高校の費用構成">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>授業料</strong> — 『年間150,000～400,000円程度（学校による大きな差）』『高い授業料は充実した学習サポート・質問対応・進学指導を反映』『安い授業料は最小限のサービスに対応』という『費用とサービスの相関関係』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>施設費・教材費</strong> — 『年間50,000～100,000円程度』『オンラインプラットフォーム利用料』『配信動画の制作・管理費』『テキスト・教材の制作費』などが含まれます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>サポート料・添削指導料</strong> — 『年間30,000～60,000円程度』『個別の進学指導・キャリアカウンセリング』『提出課題の丁寧な添削・フィードバック』『質問対応サービス（メール・チャット等）』などの充実したサービス』が含まれます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>スクーリング費用・その他</strong> — 『年間20,000～50,000円程度』『スクーリングは年2～4日程度と少ないが、交通費・宿泊費がかかることもある』『年間総計：230,000～560,000円程度』『公立の5倍～15倍のコスト』『ただし個別指導・進学サポートが充実』という『金額に見合ったサービス』が受けられるか、慎重に検討が必要』です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="高等学校等就学支援金制度の活用">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『国が行う補助金制度「高等学校等就学支援金」』『公立・私立を問わず対象』『年間118,800～297,000円程度を補助（通信制は授業料に応じて決定）』『所得制限あり（年間910万円以上の家庭は対象外）』『申請手続きが必須（自動的には受給されない）』『通信制高校の入学時に学校が案内し、申請をサポート』『条件を満たす場合の実質負担を大幅に軽減』という『極めて重要な経済的サポート制度』です。
            </Typography>
          </SubSection>
        </Section>

        <Section title="スクーリングの仕組み｜通学日程と学習内容" id="tushin-schooling">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『スクーリングは通信制高校における「唯一の対面授業」』『レポート・動画学習と組み合わせて、卒業単位を構成』『学校ごとに日程・内容・期間が大きく異なる』『自分のライフスタイルに合わせたスクーリング形式の学校を選ぶことが継続学習の鍵』という『極めて重要な選択肢』です。
          </Typography>

          <SubSection title="スクーリング形式の種類">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>週1～3日制（固定スケジュール）</strong> — 『毎週決まった曜日（例：月火木）に登校』『学校のスケジュールが固定なので、仕事・趣味との調整が必要』『比較的安定した対面授業が受けられる』『定期的な人間関係構築が可能』『スポーツ・音楽などの活動との両立が困難な場合もある』という『安定性がメリット、融通性がデメリット』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>集中スクーリング（長期休暇中）</strong> — 『夏休み・春休み・冬休みに1～2週間の集中授業』『普段は自宅学習に集中でき、稼働時間が増加する』『シーズンに登校を集中させるため、スケジュール管理が容易』『大学進学を目指す学生が選ぶことが多い』『スクーリング時の友人関係構築が短期集中』という『時間的な自由度が高い』メリットがあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>年数回のスクーリング（最小限型）</strong> — 『年間2～4日程度のスクーリング』『オンライン授業やテキスト学習が中心』『最大限の自由度と時間的融通が可能』『仕事をしながら高卒資格を取得する社会人向け』『最小限の対面授業のため、人間関係構築が難しい』『自己管理能力が極めて高く、モチベーション維持が必須』という『完全な自主性が求められる』形式です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>完全オンライン型（スクーリング不要）</strong> — 『インターネット配信授業で完結』『一度も登校しなくても卒業可能』『最高レベルの時間的自由度』『海外滞在者・身体障害者などに有効』『対面授業がないため、人間関係構築がない』『完全な自学習のため、モチベーション維持が困難』『オンライン環境（インターネット・PC）が必須』という『極めて自由度が高い一方、自己管理能力が極めて重要』です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="卒業資格の取得条件｜継続学習と自己管理の重要性" id="tushin-sotsugyou">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『通信制高校の卒業は「何もしなくても3年経つと卒業」ではない』『明確な要件を達成しなければ卒業できず、4年以上の在籍が必要になる場合も多い』『多くの生徒が学習計画の失敗により、卒業が遅延する』『計画的で継続的な学習習慣が卒業への必須要件』という『重要な現実』があります。
          </Typography>

          <SubSection title="卒業に必要な3つの要件">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>①在籍期間3年以上</strong> — 『学校への正式な在籍が3年以上必要』『ただし転入（定時制高校からの転入）の場合は在籍期間を短縮できる』『3年未満での途中退学は高卒資格の取得不可』『留年する場合は4年以上の在籍となる』という『厳格な時間要件』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>②総修得単位数74単位以上の取得</strong> — 『1単位の獲得には「レポート提出→スクーリング参加→試験合格」という全3要件の達成が必須』『毎年約25単位程度の取得が必要（3年間で74単位以上）』『特定の科目の単位取得に失敗すると、翌年再履修が必要』『得意科目は早く取得、苦手科目は時間をかけるカスタマイズが可能』『計画的な学習スケジュール立案が成功の鍵』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>③特別活動への参加（30時間以上）</strong> — 『特別活動とは「生徒会活動・学校行事・ホームルーム」など学校外活動』『年間約10時間程度の参加で3年間で30時間達成』『オンライン型の学校の場合は実施方法が異なる』『参加実績を学校に報告し、記録される』『多くの生徒が見落とす要件だが、極めて重要』です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="単位修得の3要件（1単位取得のプロセス）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『1つの科目の単位を取得するために、3つの要件をすべて満たす必要がある』『1つでも欠けるとその科目の単位は取得できず、翌年再履修が必要』『この「完全な達成」が卒業への決定的な要因』という『極めて重要な仕組み』です。『①レポート（通常2～4回）の提出と合格』『各科目ごとに2～4つのレポートが課される』『郵送またはオンラインで提出』『添削を受けて、再提出で合格に到達することもある』『期限までの提出が必須（遅延は単位認定されないことも多い）』という『最初の関門』があります。『②スクーリング（面接授業）への出席』『その科目に関連するスクーリングに出席』『出席状況が記録される』『欠席が多いと、その科目の試験受験資格を失う場合もある』『遠方学生は交通費がかかるため、計画的な参加が重要』という『物理的な出席要件』があります。『③試験への合格』『各科目ごとの定期試験が実施される』『試験会場は学校指定（遠方学生は指定会場で受験）』『合格基準は一般的に60点以上』『複数回の受験機会がある学校もある』『試験に合格して初めて単位認定』という『最終的な評価』です。
            </Typography>
          </SubSection>
        </Section>

        <Section title="通信制高校から大学進学｜不利にならないための戦略" id="tushin-daigaku">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『通信制高校卒業は全日制高校卒業と法制度上は完全に同等』『大学入試において「通信制」という事実が不利に働くことはない』『ただし心理的には「通信制=学力が低い」という誤解が存在』『高い学力・実績で誤解を払拭し、大学進学を成功させることが重要』という『戦略的な準備』があります。
          </Typography>

          <SubSection title="通信制高校から難関大学への進学事例">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『通信制高校から東京大学・京都大学・早稲田大学・慶応大学などの難関大学に進学する事例は実際に存在』『近年の数字では、通信制高校からの大学進学率は約20～30%程度（全日制高校が約60～70%に比べてやや低い傾向）』『ただし意欲の高い生徒は通信制高校でも難関大学に進学可能』『通信制高校の最大のメリット：「自分の学習ペースで、得意科目を深掘りできる」「時間的な自由度を活用して、受験勉強に専念できる」「スポーツ・音楽などと両立させながら受験勉強ができる」』という『全日制にはないメリット』を『最大限に活用』することが『成功の鍵』です。
            </Typography>
          </SubSection>

          <SubSection title="大学進学を成功させるための5つの戦略">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略1：大学入学共通テストで高得点を獲得</strong> — 『共通テストの高得点が「学力証明」になる』『通信制高校の「誤解」を数字で払拭』『難関大学進学のための必須条件』『受験まで1年以上あれば、全日制と同等以上の準備が可能』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略2：英検・数学検定など資格取得で学習実績を示す</strong> — 『英検準1級以上・数学検定2級以上など、高度な資格取得』『志望理由書や面接で「資格取得のための学習」を説明』『学習意欲と実績の「証拠」として機能』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略3：志望理由書で「通信制を選んだ理由」「学習成果」を明確に記述</strong> — 『「なぜ通信制高校を選んだか」の明確な説明』『その間に「何を学んだか」「どのような成果を得たか」の具体例提示』『審査官の「なぜ通信制？」という疑問を払拭』という『心理的な説得力』が重要です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略4：面接試験で堂々と「通信制高校での経験」を説明</strong> — 『「自律的に学習を進めた」「困難を乗り越えた」などの成長物語』『「通信制のメリットを活用した」という肯定的な説明』『面接官への「通信制への誤解」払拭』が『第一印象を左右』します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>戦略5：進学予備校・オンライン予備校などのサポート活用</strong> — 『特に高3時点での受験対策が重要』『通信制高校の進学指導が不十分な場合、外部の予備校利用を検討』『Z会・進研ゼミ・駿台・河合塾など、受験指導の充実した選択肢を活用』『計画的な準備が難関大学進学を実現』します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="通信制高校・オンライン高校が適切な選択肢となる人" id="tushin-tekisei">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『通信制高校・オンライン高校は「万能な教育形態」ではなく、「特定のニーズや背景を持つ生徒に適切な選択肢」』『自分が該当するかどうか、親や進路指導の先生と十分に協議することが重要』『誤った選択は「卒業できない」「学習に失敗する」という深刻な事態に繋がる可能性』があります。
          </Typography>

          <SubSection title="通信制高校が向いている人の特徴">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>①全日制高校に適応できなかった経験のある生徒</strong> — 『不登校経験のある生徒』『いじめ被害者』『起立性調節障害・社会不安症など、心身の健康上の理由で毎日登校が困難な生徒』『新しい学校での「やり直し」を希望する生徒』『通信制高校の「自由度」が「心理的な安定」に繋がり、学習継続を実現する』という『心理的なメリット』があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>②仕事をしながら高卒資格を取得したい社会人</strong> — 『高卒資格を必要とするキャリアチェンジを計画している成人』『夜間定時制では対応できない労働時間の人』『通信制高校の「時間的自由度」が「仕事と学業の両立」を実現』します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>③スポーツ・芸能・音楽など特定の活動に全力投球したい生徒</strong> — 『プロスポーツ選手を目指すアスリート』『音楽家・芸能人志望者』『全日制高校の「毎日朝から放課後まで登校」という制約が「活動の妨げ」となる場合に、通信制高校が「両立の機会」を提供』します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>④身体障害・慢性疾患で毎日登校が困難な生徒</strong> — 『身体障害により移動が困難な生徒』『慢性疾患（がん治療中、透析中など）で毎日登校が不可能な生徒』『特にオンライン型の学校が「登校不要」という条件で『完全な対応』が可能』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>⑤経済的理由で学費を抑えたい家庭</strong> — 『公立通信制高校の年間15,000～45,000円という極めて低い学費』『補助金適用で実質ほぼ無料の可能性』『経済的に困窮している家庭にとって『高卒資格取得を現実化する唯一の選択肢』』となる場合もあります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="通信制高校が不適切な選択肢となる人">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>①自己管理能力が極めて低く、計画的に学習できない生徒</strong> — 『「自由度が高い＝何もしなくていい」と誤解する生徒』『親の強制がないと学習できない生徒』『このタイプが通信制に進むと、卒業までに4年以上かかる可能性が高い』『むしろ毎日の登校と決まった時間割がある全日制高校の方が』『学習習慣の形成に適切』です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>②学校の集団生活・人間関係構築を強く望む生徒</strong> — 『部活動・学園祭・体育祭など、学校行事を重視する生徒』『クラスの友人との深い人間関係形成を希望する生徒』『通信制高校は「対面授業が少ない」「学校行事がない」という『根本的な不満』に繋がる』『全日制高校の方が『本当に必要な学生生活』を提供』します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1565C0" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>③親のサポートなしに学習継続が困難な生徒</strong> — 『自宅学習で「親の声かけがないと勉強できない」という依存的な学習スタイル』『通信制高校は『親の継続的な監督が必須』『親が仕事や他の事情で見守りができない家庭では、卒業が困難』』という『現実的な課題』があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <FAQ items={faqItems} />
        </Box>
      </Container>
    </>
  );
}
