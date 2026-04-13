import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ComputerIcon from "@mui/icons-material/Computer";

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

export default function KoukouIctPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校のICT教育・タブレット活用の現状｜1人1台端末時代の高校選び" },
  ];

  const faqItems = [
    {
      question: "GIGAスクール構想とは何ですか？",
      answer: "GIGAスクール構想は、文部科学省が2019年に発表した国家戦略で、全国の公立小中学校の児童生徒に1人1台のパソコン・タブレットを配布し、高速インターネット環境を整備するものです。2021～2022年度に全国の小中学校で実施され、現在は高校でも広がっています。この取り組みにより、個別最適な学びと協働的な学びが実現可能になりました。",
    },
    {
      question: "高校で配給されるタブレット・パソコンの種類は？",
      answer: "高校のICT環境は学校によって大きく異なります。Chromebookを採用する学校が約40%、iPadが約30%、Windowsノートパソコンが約25%です。Chromebookは価格が安く操作が簡単、iPadは直感的な操作と高い教育用アプリ対応、Windowsは複雑な計算・プログラミングに対応しています。学校の選択基準は、初期導入費用と教員のICT活用能力です。",
    },
    {
      question: "ICT活用授業でプログラミングはどのように学びますか？",
      answer: "高校では情報科目でプログラミングが必須化されました。PythonやJavaScriptなどの言語を学び、アルゴリズム思考と問題解決能力を育てます。ICT環境が整った学校では、Chromebook上でクラウドベースのプログラミングツール（Google Classroom統合ツール、GitHub Educationなど）を使用し、リアルタイムで生徒同士のコードレビューが可能です。",
    },
    {
      question: "デジタルノート・手書きアプリはどう活用されていますか？",
      answer: "OneNote、Notability、GoodNotesなどのアプリが普及しており、講義ノートをデジタル化する学校が増えています。手書きとテキスト入力の両立が可能で、OCR機能で手書き文字が検索可能になります。ノートを紛失する心配がなく、クラウド保存で自動バックアップされます。ただし、手書き学習の効果については議論があり、従来のノート学習も並行する学校が多いです。",
    },
    {
      question: "ICT教育が大学受験に有利になりますか？",
      answer: "直接的な有利は限定的ですが、デジタルリテラシーと情報処理能力の向上は、共通テスト「情報」への対応、レポート作成スキル、プレゼンテーション能力の向上につながります。これらのスキルは総合型選抜・推薦入試での小論文・プレゼンテーション試験で有利です。国公立大学では2024年から『情報』の受験が必須化されており、高校段階のICT教育の充実が受験準備に直結しています。",
    },
    {
      question: "ICT教育に力を入れている高校の見分け方は？",
      answer: "学校説明会で以下をチェックしてください：(1)全生徒への1人1台端末の配布、(2)教室の全台にプロジェクター・電子黒板の設置、(3)高速Wi-Fi環境の整備、(4)情報科の担当教員数と資格保持者の割合、(5)プログラミング・デジタルコンテンツ制作の授業実績、(6)学校のWebサイトやオンライン授業への対応状況。評判の良い学校は、Webサイトで『ICT活用事例』『授業での端末活用』を具体的に公開しています。",
    },
  ];

  return (
    <>
      <SEO
        title="高校のICT教育・タブレット活用の現状｜1人1台端末時代の高校選び | School Station"
        description="GIGAスクール構想で変わった高校のICT環境（1人1台タブレット）、タブレット・PCを活用した授業スタイル（プログラミング・動画学習・デジタルノート）、ICT教育に力を入れる高校の見分け方、Chromebook・iPad・Windowsの使われ方の違い、ICT活用が大学受験・就職に与える影響を完全解説。"
        canonical="/column/koukou-ict/"
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
            "headline": "高校のICT教育・タブレット活用の現状｜1人1台端末時代の高校選び",
            "description": "GIGAスクール構想で変わった高校のICT環境（1人1台タブレット）、タブレット・PCを活用した授業スタイル（プログラミング・動画学習・デジタルノート）、ICT教育に力を入れる高校の見分け方、Chromebook・iPad・Windowsの使われ方の違い、ICT活用が大学受験・就職に与える影響を完全解説。",
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
            background: "linear-gradient(135deg, #1e782d 0%, #1976D2 50%, #42A5F5 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校のICT教育・タブレット活用の現状
          </Typography>
          <Typography variant="body2" sx={{ color: "#e9f2ea", maxWidth: 600, mx: "auto" }}>
            1人1台端末時代の高校選び
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="GIGAスクール構想と高校のICT環境の急速な変化" id="giga">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            2019年に文部科学省が発表したGIGAスクール構想により、日本の教育現場は急速にデジタル化されました。もともとは小中学校を対象とした施策でしたが、2023年以降、高校でも1人1台端末配布と高速インターネット環境整備が進んでいます。この変化により、高校での学習スタイルは根本的に変わり始めています。タブレットやノートパソコンを用いた授業は単なる「板書のデジタル化」にとどまらず、プログラミング、データ分析、動画制作、協働学習など、従来の教室では実現不可能だった多様な学習体験を提供するようになりました。高校選びの際、このICT環境の整備状況は、学習機会と進学準備に大きく影響する重要な要素になっています。学校のICT導入レベルは、まだ地域差や学校差が大きく、同じ偏差値帯の学校でも教育環境が異なるため、進学希望地域での最新状況把握が必須です。
          </Typography>

          <SubSection title="高校に導入されているデバイスの種類">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              高校で採用されているデバイスは、学校の財政状況、教員のICTスキル、教科の特性によって異なります。各デバイスは異なる利点と制約を持っており、その選択は今後の授業の質に大きく影響します。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Chromebook（約40%）</strong> — Google Chrome OSを採用し、初期導入費用が3～5万円と最も安価です。クラウドベースのアプリケーション（Google Classroom、Docs、Sheets）との親和性が高く、複数の学校が統一的に導入できます。ただし、オフライン時の機能が限定的で、複雑な動画編集やプログラミング環境には向きません。情報科目の基礎的なプログラミングや、文書作成・表計算・プレゼンテーションには十分です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>iPad（約30%）</strong> — Appleが教育向けに提供しており、初期導入費用は5～8万円です。直感的なタッチ操作とApple Pencilによる手書き機能が優れており、美術・芸術系科目やノート作成に適しています。教育用アプリが豊富で、海外の進学校でも採用率が高いため、国際的な教育トレンドに対応した環境といえます。一方、複雑なプログラミングやデータ処理には専用アプリが必要で、教科間での利用環境の差が大きいです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Windowsノートパソコン（約25%）</strong> — 初期導入費用は8～12万円と最も高価ですが、汎用性が最高です。統計処理ソフト（R、Python）、CADツール、高度なプログラミング環境（Visual Studio、Android Studio）など、大学での研究・開発環境に直結するツールが全て使用できます。理系進学校では、高度な実験・実習の準備段階としてWindowsを採用する傾向があります。ただし、教員のサポート体制が整っていない学校では、生徒が十分に使いこなせないという課題もあります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>複数デバイスの併用</strong> — 一部の進学校では、基礎授業ではChromebook、専門科目ではWindows、芸術科目ではiPadというように、教科ごとに最適なデバイスを使い分ける学校もあります。この場合、生徒は複数のデバイス操作スキルを習得できる反面、学習環境の移行に時間がかかることが課題です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="ICT活用による新しい授業スタイル" id="lessons">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            タブレット・パソコンの導入により、従来の一方向的な講義型授業から、個別最適化と協働学習を組み合わせた新しい学習スタイルが実現しました。高校段階でこの新しい学習経験を積むことは、大学でのアクティブラーニングやゼミでの協働研究に直結し、将来のキャリアに影響を与えます。
          </Typography>

          <SubSection title="プログラミング・情報科目の実装">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              2022年から高校『情報科』が必須化され、全生徒がプログラミングを学ぶようになりました。ICT環境の整備レベルにより、学習内容に大きな差が生まれています。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>基礎的なプログラミング学習（Chromebook環境）</strong> — Python、JavaScriptなどの言語をクラウドベースの環境（Replit、Google Colab）で学びます。変数・関数・ループなどの基本的な概念と、簡単なアルゴリズム設計ができるレベルです。大学入学共通テスト『情報』の出題形式に対応しており、受験対策として有効です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>実践的なプログラミング学習（Windows環境）</strong> — IDEツール（Visual Studio Code、PyCharm）を使用し、大規模プロジェクト開発や、ライブラリ・フレームワークの実装を学びます。Webアプリケーション開発、機械学習ライブラリ（TensorFlow、scikit-learn）の実装など、大学での研究水準に近い内容を高校段階で体験できます。情報工学系進学を目指す生徒にとって、大学入学時のアドバンテージが顕著です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="デジタルノート・クラウド学習">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              OneNote、Notability、GoodNotesなどのアプリが普及し、ノート作成の効率が大幅に向上しました。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>手書きとテキスト入力の融合</strong> — 数学の計算をタブレットペンで手書きしながら、テキスト説明をキーボード入力することで、両者の利点を活かしたノートが作成できます。OCR機能により、手書き文字がテキスト検索可能になるため、復習時の検索効率が大幅に向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>クラウドストレージとの自動同期</strong> — OneNoteやGoogle Keep、Notion等を活用すれば、自宅・図書館・塾など、複数の場所からノートにアクセスでき、紙のノート学習では難しい「いつでもどこでも復習」が実現します。紛失の心配もなく、自動バックアップによるセキュリティも向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>協働編集による学習の共有</strong> — Google Docs等の共有機能を使用すれば、複数の生徒が同時に同一ノートを編集でき、グループ学習が効率化されます。教員が生徒のノート作成状況をリアルタイムで確認し、個別指導を行うことも可能になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="動画学習・オンデマンド授業">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              YouTubeやLMS（学習管理システム）を使用した動画コンテンツが学習の主要な構成要素になりました。
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>フリップ・ラーニングの実装</strong> — 教員が事前に録画した解説動画を自宅で視聴し、授業時間は問題演習と質疑応答に充てるという「反転学習」が普及しています。生徒は自分のペースで動画を視聴できるため、理解度に応じた学習が可能になり、授業時間の活用効率が向上します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>部活動や学校行事での学習機会の喪失を補完</strong> — 部活動が忙しい生徒や、学校行事で授業を欠席した場合でも、動画で追い付くことが可能です。特に難関大学受験対策では、学習の「抜け」をデジタルコンテンツで補完できることが重要です。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="ICT教育に力を入れている高校の見分け方" id="identify">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            全国の高校のICT導入は進んでいますが、その質は学校によって大きく異なります。導入したデバイスを効果的に活用できている学校と、形式的に配布しているだけの学校の差は、在学中の学習経験と進学準備に大きく影響します。学校説明会やWebサイトで、以下のポイントを確認してください。
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr" }, gap: 3, mb: 3 }}>
            <Paper sx={{ p: 3, bgcolor: "#e9f2ea", border: "2px solid #1e782d" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e782d", mb: 2 }}>
                ICT環境の整備状況
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>全生徒への1人1台端末配布</strong> — 交代制や一部のみの配布は避けるべき
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>全教室への高速Wi-Fi環境</strong> — 回線速度100Mbps以上が目安
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>電子黒板・プロジェクターの設置</strong> — 全教室以上が理想
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>クラウドサービスの契約</strong> — Microsoft 365、Google Workspaceなど
                  </Typography>
                </ListItem>
              </List>
            </Paper>
            <Paper sx={{ p: 3, bgcolor: "#F3E5F5", border: "2px solid #7B1FA2" }}>
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#7B1FA2", mb: 2 }}>
                教員のICTスキルと研修体制
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>ICT担当教員の配置</strong> — 専任教員がいるか確認
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>定期的な研修プログラム</strong> — 年3回以上の教員研修
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>外部講師・大学との連携</strong> — 情報工学系大学との共同授業
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#424242" }}>
                    <strong>情報科担当教員の資格</strong> — 高等学校教諭（情報）免許保有者数
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Box>

          <SubSection title="学校Webサイトでの確認ポイント">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>ICT活用事例の具体的な記載</strong> — 単なる「ICT化しています」ではなく、「Python・JavaScriptでのプログラミング実習」「デジタル映像制作プロジェクト」など、具体的な授業内容が記載されているか確認してください。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>生徒の制作作品の紹介</strong> — Webサイトやブログで、生徒が制作したプログラム、動画、デジタルコンテンツが紹介されているか確認してください。これは学校のICT活用の質を示す重要な指標です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>情報科関連の大会成績</strong> — 『全国高校Webデザインコンテスト』『プログラミング甲子園』などの大会での受賞経歴があれば、学校のICT教育が実践的なレベルにあることを示します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>情報系大学への進学実績</strong> — 東京大学情報理工学系大学院、京都大学情報学研究科、早稲田大学基幹理工学部情報理工学科などへの合格者数を確認してください。高度なICT教育が実施されている学校ほど、情報系大学への進学実績が高い傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="Chromebook・iPad・Windowsの使われ方の違いと選択基準" id="devices">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校が採用するデバイスは、その後の学習経験と進学準備に大きく影響します。各デバイスの特性を理解し、自分の進学目標と学習スタイルに最適な学校を選ぶことが重要です。
          </Typography>

          <SubSection title="Chromebookを採用する学校">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている進路：</strong>文系進学、一般的な大学・短大進学、職業訓練校進学など。情報系進学や高度なプログラミング学習を目指さない場合に適しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>利点：</strong>費用が安い（年間レンタル料1,000～1,500円程度）、操作が簡単、Google Classroomとの連携が優れている、セキュリティが高い。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>制限：</strong>複雑なプログラミング環境が限定的、オフライン時の機能が限定的、高度な動画編集や統計処理には向かない。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="iPadを採用する学校">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている進路：</strong>美術・デザイン系大学進学、国際系学部進学（Apple Pencilでの直感的な操作が有効）、教育学部（教育の先進事例が豊富）など。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>利点：</strong>Apple Pencilによる手書き機能が優れている、タッチ操作が直感的、教育用アプリが豊富、海外の進学校と同じ環境を体験できる。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>制限：</strong>初期導入費用が高い、複雑なプログラミング環境に対応するアプリの数が限定的、後継デバイスの購入費用も高くなる傾向。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="Windowsノートパソコンを採用する学校">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>向いている進路：</strong>情報工学系大学進学、データサイエンス系大学進学、理系進学全般。高度な実験・データ分析を高校段階で経験したい場合に最適です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>利点：</strong>汎用性が最高、大学での研究環境に直結するツール（Python、R、RStudio、MATLAB）が全て使用可能、複雑なプログラミングプロジェクトに対応。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>制限：</strong>初期導入費用が最も高い（8～12万円）、教員のサポート体制が整っていない学校では十分に活用されない可能性がある。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="ICT活用が大学受験・就職に与える影響" id="future">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校段階でのICT教育経験は、大学入試と卒業後のキャリア形成に直結しています。単なる「パソコン操作ができる」というレベルではなく、デジタルツールを使った問題解決能力、データ分析能力、創作能力が評価される時代です。
          </Typography>

          <SubSection title="大学入試への影響">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>共通テスト『情報』への対応</strong> — 2025年から大学入学共通テストに『情報』が本格導入されました。Chromebook等でのクラウドベースの学習経験があれば、試験対策がスムーズになります。プログラミング問題やデータ分析問題への理解度が高まるため、高得点獲得に有利です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>総合型選抜（旧AO入試）での活用</strong> — デジタルコンテンツ制作、プログラミングプロジェクト、データ分析レポートなど、高度なICT活用の経験があれば、小論文やプレゼンテーション試験で優位に立ちます。特に情報系学部や工学部では、こうした実績が評価されやすい傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>指定校推薦での有利性</strong> — 高度なICT環境で学んだ生徒は、評定平均が高い傾向があります。協働学習やプロジェクト学習が評価されやすく、大学進学時の指定校推薦基準（評定3.8以上など）をクリアしやすくなる傾向があります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="就職・キャリアへの影響">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>IT業界・情報系職種への進出</strong> — Windowsノートパソコン環境でのプログラミング経験があれば、IT業界への就職・転職の際に有利になります。高校段階でJavaやPythonの実装経験があれば、新入社員研修時の習得速度が大幅に短縮されます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>データリテラシーと統計知識</strong> — Excel、Python、Rを使ったデータ分析の経験がある高卒生は、営業管理、経営企画、マーケティング部門での採用時に評価されやすい傾向があります。2020年代の日本企業はデータ活用が急速に進んでおり、この分野の人材需要は増加しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#1e782d" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>デジタル・リテラシーの汎用性</strong> — 高度なICT環境で学んだ生徒は、どのような仕事でも必要なMicrosoft 365、Google Workspace、クラウドストレージ等の操作スキルが身についています。この基礎知識は、製造業・建設業・小売業など、IT企業以外の職種でも重要性が増しており、就職時の競争力になります。
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
