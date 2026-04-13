import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

export default function KoukouTokkatsuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校の特別活動・生徒会活動ガイド｜入試・大学推薦に活かせる学校生活の実績作り" },
  ];

  const faqItems = [
    {
      question: "特別活動とは具体的に何ですか？",
      answer: "特別活動とは『生徒会活動』『委員会活動』『学校行事』『ホームルーム活動』など、教科学習以外の活動をまとめた総称です。文部科学省が定める『高等学校学習指導要領』に位置づけられており、『生きる力』『社会性』『リーダーシップ』などを育成することが目的です。生徒会役員になる、委員会活動で責任を果たす、学校行事で主体的に参加するなど、様々な形で『自分の役割を果たす経験』ができます。これらの活動は『調査書』『推薦入試』『面接』で重要な評価要素となり、『大学が求める主体性』『協調性』『実行力』を示す重要な証拠となります。",
    },
    {
      question: "生徒会役員になるメリットは何ですか？",
      answer: "生徒会役員になることで『リーダーシップの育成』『他者との協力経験』『責任感の成長』『意思決定経験』『対人関係スキルの向上』などのメリットがあります。特に『会長』『副会長』『書記』などの役職は『学校全体を引っ張る立場』であり、『組織運営』『問題解決』『会議の進行』などの経験が積まれます。推薦入試では『生徒会役員経験』は『リーダーシップがある』という強い証拠になり、『調査書』の記載内容も充実します。また『同じ目標に向かった仲間との絆』『やり遂げた達成感』など、高校生活における『貴重な思い出と成長』が得られます。",
    },
    {
      question: "文化祭や体育祭での活躍が推薦入試に影響しますか？",
      answer: "はい、文化祭や体育祭での活躍は推薦入試に大きく影響します。『実行委員会での企画・運営経験』『クラスの企画をまとめた経験』『体育祭での競技での貢献』『文化祭での展示・パフォーマンス』など、『主体的な参加』『チームワーク』『工夫と創意工夫』が評価されます。推薦入試の『自己推薦文』『志望理由書』では『学校行事での経験』から『何を学んだか』『どう成長したか』を具体的に記述することで、『人物評価』が高まります。特に『実行委員長』『企画担当者』として『困難を乗り越えた経験』『周囲を巻き込んで目標達成した経験』があれば、『主体性』『実行力』の強力なアピールになります。",
    },
    {
      question: "委員会活動（図書委員・保健委員など）はどのように評価されますか？",
      answer: "委員会活動は『地道な責任を果たす姿勢』『学校運営への貢献』『継続性』が評価されます。『図書委員』は『情報整理能力』『サービス精神』を、『保健委員』は『衛生管理への意識』『健康への関心』を、『放送委員』は『コミュニケーション能力』『正確性』を示します。推薦入試では『どの委員会に所属しているか』より『その役割をどのように果たしたか』が重要です。例えば『図書委員として、図書館利用者を増やすためにポップを作成した』『保健委員として、校内の感染症対策を主導した』など、『具体的な貢献』を自己推薦文に書くことで、『実行力』『創意工夫』がアピールできます。",
    },
    {
      question: "部活動が忙しい場合、特別活動と両立できますか？",
      answer: "はい、部活動と特別活動の両立は可能ですが『時間管理』と『優先順位の設定』が重要です。『生徒会役員』や『委員会委員長』は『試験期間の役務免除制度』『活動時間の融通』など、学校によってサポート制度がある場合があります。完全な両立が難しい場合は『副委員長など主要でない役職』『短期プロジェクトへの参加』『学校行事の実行委員会への参加』など、『柔軟な関わり方』を選択することも有効です。重要なのは『質の高い参加』です。『部活で実績を出す』『特別活動で責任を果たす』など、『複数の活動で実績を示すこと』が『多面的な人物評価』につながり、推薦入試で有利になります。",
    },
    {
      question: "特別活動の実績を調査書や推薦文に活かすコツは何ですか？",
      answer: "『具体的な活動内容』『その活動から得た学び』『今後の活かし方』の3点を意識することが重要です。例えば『生徒会副会長として、校内行事の企画運営に携わり、『利用者の視点で企画を考える重要性』を学んだ。この経験を大学での『チーム活動』『組織運営』で活かしたい』というように、『体験→学び→活用』の流れを示すと評価されやすくなります。また『具体的な数字』『改善実績』を盛り込むと『説得力』が高まります。例えば『図書館の来客数を3割増加させた』『生徒アンケートで満足度90%を達成した』など。学校の先生や塾の講師に『推薦文の添削』を依頼して『説得力を磨く』ことも重要です。",
    },
  ];

  return (
    <>
      <SEO
        title="高校の特別活動・生徒会活動ガイド｜入試・大学推薦に活かせる学校生活の実績作り | School Station"
        description="高校の特別活動の種類（生徒会・委員会・学校行事・ホームルーム）と特徴、生徒会役員になるメリット（リーダーシップ・協調性・実行力）、文化祭・体育祭・修学旅行での活躍が推薦入試に与える影響、委員会活動（図書委員・保健委員・放送委員等）の選び方と評価方法、特別活動の実績を調査書・自己推薦文に活かす具体的方法、部活動との両立テクニックを完全解説。"
        canonical="/column/koukou-tokkatsu/"
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
            "headline": "高校の特別活動・生徒会活動ガイド｜入試・大学推薦に活かせる学校生活の実績作り",
            "description": "高校の特別活動の種類（生徒会・委員会・学校行事・ホームルーム）と特徴、生徒会役員になるメリット（リーダーシップ・協調性・実行力）、文化祭・体育祭・修学旅行での活躍が推薦入試に与える影響、委員会活動（図書委員・保健委員・放送委員等）の選び方と評価方法、特別活動の実績を調査書・自己推薦文に活かす具体的方法、部活動との両立テクニックを完全解説。",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SchoolEvent",
            "name": "高校の特別活動・生徒会活動",
            "description": "生徒会・委員会・学校行事を通じた主体性とリーダーシップの育成",
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
            高校の特別活動・生徒会活動ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            入試・大学推薦に活かせる学校生活の実績作り
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="特別活動とは〜高校生活を豊かにする4つの活動" id="tokkatsu-kinds">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校の特別活動は『生徒会活動』『委員会活動』『学校行事』『ホームルーム活動』という4つの領域で構成されています。これらは『教科学習以外の場』で『社会性』『主体性』『リーダーシップ』を育成することが文部科学省の教育方針として位置づけられています。大学入試の推薦選抜や総合型選抜では『特別活動での実績』が『調査書』『志望理由書』『面接』で重要な評価項目となり、『人物評価』を大きく左右します。単に『参加すること』ではなく『主体的に関わり、何を学んだか』が評価のポイントとなります。
          </Typography>

          <SubSection title="1. 生徒会活動｜学校全体をリードする立場">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              生徒会は『学校運営への主体的な参加』『リーダーシップの育成』『民主主義の学習』を目的とした活動です。生徒会長・副会長・書記・会計などの役職者は『学校全体の意思決定』『学校行事の企画運営』『生徒の代表としての発言』という『大きな責任』を担います。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒会長・副会長</strong> — 『学校の意思決定機関』『学園祭や体育祭の総責任者』として『組織運営』『予算管理』『会議主催』など経営的な経験を積みます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>書記・会計</strong> — 『記録・報告』『予算管理』といった『事務能力』『正確性』『責任感』が求められます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>推薦入試での評価</strong> — 『学校全体をリードした経験』は『大学が求める主体性』『実行力』『社会貢献意識』の強い証拠となります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="2. 委員会活動｜学校運営を支える地道な貢献">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              各学年から選出された委員が『図書館運営』『保健衛生』『放送設備』『美化活動』など、『学校を運営するために必要な役割』を担う活動です。生徒会よりも『地道で継続的』『専門的な知識』が必要とされます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>図書委員</strong> — 図書館の蔵書管理、利用者サービス、書評紹介、図書館催事の企画を通じて『情報活用能力』『サービス精神』を育成。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>保健委員</strong> — 感染症予防、健康診断支援、衛生啓発活動を通じて『健康管理意識』『思いやり』を育成。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>放送委員</strong> — 朝礼の放送、学校行事の実況放送、校内放送技術を通じて『コミュニケーション能力』『技術スキル』を育成。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="3. 学校行事｜全校生徒の協力による大規模な活動">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              文化祭（学園祭）、体育祭、修学旅行、遠足などの『全校行事』では『クラス全体での協力』『目標達成への工夫』『チームワーク』が試される場です。実行委員として関わると『企画力』『実行力』が強く評価されます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>文化祭（学園祭）</strong> — クラスの展示企画、模擬店経営、ステージパフォーマンスなどで『創意工夫』『営業スキル』『表現力』を育成。実行委員は『全校規模の企画運営』を経験。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>体育祭</strong> — クラス対抗競技、団体競技、応援の準備などで『体力』『団結力』『応援精神』『個人の役割認識』が育成されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>修学旅行</strong> — 事前学習、現地での班別研修、事後報告会を通じて『自主性』『課題探究能力』『インタビュースキル』『報告表現力』を育成。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="4. ホームルーム活動｜クラスの絆を深める日常活動">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              毎日の『朝礼』『終礼』『学級会』『キャリア教育』などで『集団での役割分担』『意思決定スキル』『相互理解』が培われます。
            </Typography>
          </SubSection>
        </Section>

        <Section title="生徒会役員になるメリット〜リーダーシップと人物評価" id="seishokai-merit">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            生徒会役員は『学校生活における最高の責任ある立場』です。役員になることで『主体性』『リーダーシップ』『協調性』『実行力』といった『大学が評価する資質』を実践的に育成できます。推薦入試での評価は『役職の大きさ』ではなく『その役職で何をしたか』『どう工夫したか』『何を学んだか』が重要です。
          </Typography>

          <SubSection title="1. リーダーシップと意思決定能力">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              生徒会役員は『複数の提案の中から最適な施策を選択する』『部下（委員会）に指示を出す』『判断に責任を持つ』といった『経営的な決定』を経験します。特に『困難な状況での判断』『意見が対立したときの調整』『期限の中での成果出し』といった『実務的な問題解決』が育成されます。
            </Typography>
          </SubSection>

          <SubSection title="2. 協調性と調整力">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『生徒会内でのチームワーク』『教職員との交渉』『全校生徒への説明・説得』『異なる意見を持つ委員会間の調整』など、『複数のステークホルダーとの関係構築』『相互理解』『妥協点の模索』といった『社会人基礎スキル』が身につきます。
            </Typography>
          </SubSection>

          <SubSection title="3. 実行力と成果の可視化">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『決めたことを実行する』『障害に対処する』『期限内に成果を出す』『数字で結果を示す』といった『実務的なスキル』が育成されます。推薦文では『生徒会主催のイベント参加者が前年比150%に増加』『校内アンケート満足度が85%に上昇』など『定量的な成果』を記述することで『実行力』の説得性が高まります。
            </Typography>
          </SubSection>

          <SubSection title="4. 推薦入試での強い加点要因">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              大学の推薦入試では『調査書の出席日数』『成績』と同等かそれ以上に『特別活動での実績欄』を重視する大学が多くあります。『生徒会役員経験』『実行委員長経験』『複数年の委員会活動』などは『リーダーシップ人材』『組織貢献者』として『人物評価』を大きく高める要因となり、他の受験生との差別化につながります。
            </Typography>
          </SubSection>
        </Section>

        <Section title="学校行事での活躍が推薦入試に与える影響" id="gakkou-event">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            文化祭や体育祭は『全学年が参加する大規模な活動』であり、『実行委員』『企画担当』『運営スタッフ』として『組織的な経験』が得られます。推薦入試の『自己推薦文』『面接』では『学校行事での経験がその後の学習や成長にどう活かされたか』を述べることが重要です。
          </Typography>

          <SubSection title="実行委員会の活動で得られる経験">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>企画力</strong> — 『去年より盛り上がるには何が必要か』『参加者は何を求めているか』『予算の中で何ができるか』といった『ニーズ分析』『アイデア出し』『実現可能性の検討』を経験。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>組織運営力</strong> — 『分科会の設置』『担当者の配置』『進捗管理』『期限管理』『課題解決』といった『プロジェクト管理』を経験。大学ゼミの『グループ研究』『課題研究』で即座に活かせるスキル。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>危機管理力</strong> — 『天候の急変対応』『機材不良への対応』『参加者の安全確保』『トラブル対応』といった『予期しない状況への対処』『判断力』『責任感』が育成。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="推薦文での記述ポイント">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『文化祭実行委員として300人が参加する企画を主導し、来場者アンケートで『楽しかった』の回答率が93%に達した。この経験で『相手の喜びを考えて計画を立てる大切さ』『チームで目標を達成する協力の力』を学んだ。大学では、この『相手視点』『組織的思考』を『ゼミの研究』『サークル活動』で活かし、『社会に貢献できる人間』になりたい』といった『具体的な経験→学び→将来への展開』の構造を示すと、『人物評価』が高まります。
            </Typography>
          </SubSection>
        </Section>

        <Section title="委員会活動の選び方と実績の作り方" id="iinkai-erabikata">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            委員会活動は『興味関心から選ぶ』ことが継続と成果の鍵となります。『無理に大役を引き受ける』より『自分が貢献できる分野で実績を作る』ことが『調査書』『推薦評価』につながります。
          </Typography>

          <SubSection title="委員会選びの視点">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分の興味関心から選ぶ</strong> — 『図書が好き→図書委員』『体をよく動かしたい→体育委員』『情報発信に興味→放送委員』など、『やる気が続く委員会』を選ぶことで『質の高い活動』が可能になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>自分の強みが活かせる委員会を選ぶ</strong> — 『企画力がある→学園祭実行委員会』『コミュニケーション能力が高い→広報委員』『きめ細かい→整理整頓が得意な生活委員』など、『既存スキルの延伸』ができる委員会を選ぶ。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>キャリア目標に関連する委員会</strong> — 『マスコミ志望→放送委員・広報委員』『図書館司書志望→図書委員』『教育学部志望→ホームルーム副担当』など、『将来の進路との関連性』を意識した選択も有効。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="実績を作るための実践戦略">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>1年生から継続する</strong> — 『1年間の短期活動』より『3年間継続』『2年間委員長』などの『継続性』が『責任感』『貢献度』を示す強い証拠になります。推薦入試では『複数年の活動実績』が『安定性』『熱意』の評価に繋がります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>改善提案をする</strong> — 『昨年と同じ活動』ではなく『今年はどう工夫するか』『何が課題か』『どう解決するか』という『問題解決志向』を示すことが『創意工夫』『実行力』の評価につながります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>成果を数字で示す</strong> — 『図書館利用者が前年比40%増』『保健委員会主催の啓発活動で感染者が20%減少』『放送アンケートで満足度が85%に達した』など『定量的な成果』があると『実行力』『効果測定能力』が評価されやすくなります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>後進への指導を意識する</strong> — 『後輩委員の育成』『マニュアル作成』『年度末の引き継ぎ記録を整備』など『組織継続』『人材育成』を意識した活動が『リーダーシップ』『社会性』の評価を高めます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="特別活動を調査書・自己推薦文に活かす方法" id="jisui-katsuyo">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            推薦入試での『人物評価』は『調査書』『志望理由書』『自己推薦文』『面接』の複合で決まります。『特別活動での実績』を『学力』『進路意識』と結びつけて記述することが重要です。
          </Typography>

          <SubSection title="調査書における特別活動の記載方法">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              調査書の『特別活動の記録』欄には『役職』『活動内容』『成果』が記載されます。学校の先生が作成する時に『何か具体例を教えてください』と『具体的な実績』を伝えることで『説得力ある記載』を促すことができます。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体的な役職名</strong> — 『生徒会副会長』『文化祭実行委員長』『図書委員会委員長』など『何年度の何という役職か』を明記。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>具体的な活動内容</strong> — 『体育祭のスローガンを『チーム意識』に設定し、全クラスが団結した企画運営を主導した』『図書館利用促進キャンペーンで新作紹介ポップを100枚作成し利用者を増やした』など『何をしたのか』を具体的に記述。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その活動から得た学び</strong> — 『多様な意見を調整する大切さを学んだ』『相手ニーズを考えることの重要性を気づいた』『組織の一員としての責任感を実感した』など『内省的な記述』を含める。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="自己推薦文での記述フレームワーク">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『○○委員会で△△を担当し、困難な状況では××という工夫をした。その結果、□□が実現した。この経験で『相手を理解する大切さ』『チーム力の重要性』を学んだ。大学では、このスキルを『ゼミの研究』『サークル活動』で活かし、『社会に貢献できる人間』になることを目指す』という『経験→学び→将来→大学での実践』の4段階構造を意識することが重要です。
            </Typography>
          </SubSection>

          <SubSection title="面接で話すときのコツ">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>成功例だけでなく失敗例も話す</strong> — 『最初の企画は上手くいかなかったが、メンバーの意見を聞いて改善した』『計画の遅れに気づいて巻き返した』など『困難からの学び』は『成長力』『レジリエンス』を示す強い証拠になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>学び『を』実践できることを示す</strong> — 『特別活動で学んだリーダーシップを大学で活かしたい理由は？』と聞かれた時『○○大学の△△プログラムで××の研究に取り組み、チーム力を活かしたい』と『具体的な大学での活動計画』を述べることで『学学連携』『学習動機』が評価されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="部活動との両立方法〜時間管理の実践戦略" id="bukatsu-ryoritu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『部活動で実績を出すこと』と『特別活動で責任を果たすこと』の両立は『時間管理』『優先順位の明確化』『効率的な活動』が鍵となります。完全な両立が難しい場合は『柔軟な選択肢』を検討することも重要です。
          </Typography>

          <SubSection title="時間管理の工夫">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒会主催の大会期間を把握する</strong> — 部活動の『大会日程』『公式戦』を確認して『生徒会の重要会議』『行事実行委員会』がその前後に設定されるよう『段取り』することで『時間的負担』を軽減できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>役務免除制度の活用</strong> — 多くの学校では『試験期間中の委員会活動免除』『大きな部活大会前の活動軽減』『怪我時の役務免除』など『特別な配慮制度』が存在します。学校の生徒指導部に『部活動と特別活動の両立支援』について相談することが有効です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デジタルツールの活用</strong> — 『Slack』『Google Drive』『Teams』などの『情報共有ツール』を使って『会議時間を短縮』『離れた場所での文書編集』『非同期的な意思決定』を可能にすることで『時間効率』が向上します。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="柔軟な役職選択">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『部活動で中心的な役割を担う場合』『複数年の重要な役職』を無理に引き受けるより『副委員長』『短期プロジェクト（1ヶ月単位の企画）』『特定の分科会への参加』など『負担が限定的な役職』を選択することも有効な戦略です。推薦入試では『役職の大きさ』より『その活動での具体的な成果』『本人の成長』が評価されるため『質の高い限定的な役割』の方が『無理な両立による中途半端な成果』より評価されやすいです。
            </Typography>
          </SubSection>

          <SubSection title="両立のメリットを面接で表現する">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『部活動と特別活動の両立経験』は『時間管理能力』『優先順位判断』『複数のコミュニティでの人間関係構築』という『大学での学習』『職場での仕事』に直結するスキルであることを意識することが重要です。面接では『部活で身につけた集中力とチームワークを特別活動の企画運営に活かした』『異なるコミュニティの両立で『多角的な視点』『柔軟な思考』が育成された』など『複数活動の相乗効果』を述べることで『適応力』『学習能力』をアピールできます。
            </Typography>
          </SubSection>
        </Section>

        {/* FAQ Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h2" sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e782d", mb: 3 }}>
            よくある質問
          </Typography>
          <FAQ items={faqItems} />
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 6, pt: 3, borderTop: "1px solid #ddd" }}>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", color: "#1e782d", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
              <ArrowBackIcon sx={{ mr: 1 }} />
              <Typography>コラム一覧に戻る</Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
