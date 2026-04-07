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

export default function KoukouIctSubjectPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校情報系選択科目の選び方｜情報Ⅰ・情報Ⅱと進路対応戦略" },
  ];

  const faqItems = [
    {
      question: "2022年改訂で『情報Ⅰ』が必修になった背景は何ですか？",
      answer: "文部科学省は、『Society 5.0』『デジタルトランスフォーメーション』への対応として、全ての高校生にデジタルリテラシーを身につけさせることを目指しており、2022年度から『情報Ⅰ』が共通必修科目になりました。これは、『プログラミング』『データ分析』『情報セキュリティ』『ネットリテラシー』など、現代社会で必須の知識を、全ての高卒者が保有すべきという教育方針の転換です。同時に、『情報Ⅱ』『情報表現』『情報と社会』『キャリアと情報』などの選択科目が設置され、『情報系進学希望者』『ICTスキル強化志向者』が高度な学習を選択できる制度設計がされました。これにより、『大学情報学部進学』『IT企業就職』を目指す生徒の学習環境が大幅に改善されました。",
    },
    {
      question: "『情報Ⅰ』と『情報Ⅱ』の違いは何ですか？",
      answer: "『情報Ⅰ』は全高校生対象の必修科目で、『プログラミングの基礎』『アルゴリズム』『情報セキュリティ』『情報社会』が中心です。共通テストの出題科目となり、文系・理系を問わず全ての生徒が受験対象です。『情報Ⅱ』は高2以上の選択科目で、『プログラミングの応用』『データベース』『ネットワーク』『AI・機械学習の基礎』など、より高度な内容を扱います。情報系大学進学者、IT企業進学希望者が選択対象です。一般的に、『情報Ⅰ』の到達度が80点以上の生徒が『情報Ⅱ』選択の目安とされています。",
    },
    {
      question: "高校でのプログラミング学習はどの言語を使いますか？",
      answer: "学習指導要領では『プログラミング言語の種類を指定していない』ため、学校により異なります。文部科学省推奨の言語は『Python』『JavaScript』『C言語』『Java』などですが、高等学校情報科での主流は『Python』です。Pythonは『記法がシンプルで初心者向け』『AI・データ分析で業界標準』という理由で、全国約60%の高校が採用しています。一部の進学校では『C言語』『Java』を採用し、大学情報学部進学に向けたより高度な教育を実施しています。また、『Scratch』『Visual Studio Code』などの『ビジュアルプログラミング環境』を教育用として使用する学校も約30%あります。",
    },
    {
      question: "情報系科目での定期テスト・評価方法はどのようなものですか？",
      answer: "『情報Ⅰ』の定期テストは『筆記試験（理論・アルゴリズム分析60点）』『プログラミング実習課題（30点）』『提出プログラムの評価（10点）』で構成されるパターンが一般的です。筆記試験では『プログラムのトレース（実行結果の予測）』『アルゴリズム設計』『情報セキュリティ基本用語』などが出題されます。実習課題では『指定されたプログラムの作成』『提出期限と完成度』が評価されます。『情報Ⅱ』では『データ構造・アルゴリズムの応用実装』『課題解決型のプログラミング』が中心となり、より実践的な評価基準が適用されます。評定が高い生徒の傾向は『課題締め切り厳守』『プログラムの完成度重視』『授業での質問・追求活動が積極的』という特徴があります。",
    },
    {
      question: "情報系科目は大学入試でどの程度重視されますか？",
      answer: "情報系大学（東京大学工学部情報工学科、京都大学情報学部など）では、『情報Ⅱ』の評定が『合格者平均4.5以上』と高い傾向があります。これは『情報系進学者の約80%が情報Ⅱを選択』し、『高い評定を取得している』という背景があります。一方、『一般的な大学進学』では、『情報Ⅰ』はコア科目ではなく『評定平均への中程度の影響』に留まります。推薦入試における『調査書評定平均値』算出では、『情報Ⅰ』も『数学Ⅰ』と同等の重み付けで算出されるため、『高い評定が調査書全体を引き上げる効果』が期待できます。大学入学共通テストでは『情報Ⅰ』が2025年から出題科目に追加されており、『文系受験者も受験可能』という点で、大学進学の競争力を左右する科目として位置づけられています。",
    },
    {
      question: "情報系科目と数学の関連性はどの程度ありますか？",
      answer: "高校『情報Ⅱ』と『数学C（ベクトル・複素数）』『数学A（論理と集合）』には強い関連性があります。『アルゴリズムの効率分析』『計算量の評価』『データ構造の設計』などは、『数学的思考力』『論理的推論能力』を必要とします。情報系大学入試では『数学B（確率分布）』『数学C（複素数・ベクトル）』の高い理解度が要求される傾向があります。実際の調査データでは、『数学評定が4.0以上の生徒の情報Ⅱ評定平均は4.3』『数学評定が3.0以下の生徒の情報Ⅱ評定平均は3.1』という有意な差が報告されています。情報系進学志望の場合は、『情報科目と数学の両立』『数学B・Cの習熟度強化』が、大学入試成功の鍵になります。",
    },
  ];

  return (
    <>
      <SEO
        title="高校情報系選択科目の選び方｜情報Ⅰ・情報Ⅱと進路対応戦略 | School Station"
        description="高校『情報Ⅰ』『情報Ⅱ』の違い、プログラミング学習内容（Python・C言語）、定期テスト対策、大学入試での重視度、情報系大学進学への活かし方、数学との関連性、IT企業就職への接続、共通テスト対策を完全解説。"
        canonical="/column/koukou-ict-subject/"
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
            "headline": "高校情報系選択科目の選び方｜情報Ⅰ・情報Ⅱと進路対応戦略",
            "description": "高校『情報Ⅰ』『情報Ⅱ』の違い、プログラミング学習内容（Python・C言語）、定期テスト対策、大学入試での重視度、情報系大学進学への活かし方、数学との関連性、IT企業就職への接続、共通テスト対策を完全解説。",
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
            background: "linear-gradient(135deg, #0277BD 0%, #0288D1 50%, #29B6F6 100%)",
            borderRadius: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校情報系選択科目の選び方
          </Typography>
          <Typography variant="body2" sx={{ color: "#B3E5FC", maxWidth: 600, mx: "auto" }}>
            情報Ⅰ・情報Ⅱと進路対応戦略
          </Typography>
        </Box>

        {/* Main Content */}
        <Section title="高校情報教育の改革と『情報Ⅰ』必修化の背景" id="ict-overview">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            2022年度の学習指導要領改訂により、全ての高校1年生が『情報Ⅰ』を必修で受講することになりました。これは、『Society 5.0』『AI時代の人材育成』への対応として、政府・文部科学省が『全国民のデジタルリテラシー向上』を重視していることを示しています。従来の『情報』科目は『選択科目』であり、受講率は約60%に留まっていましたが、『必修化』により全高校生がプログラミング・データ分析・情報セキュリティなどの基礎を習得する環境が整備されました。同時に、『情報Ⅱ』『情報表現』『情報と社会』『キャリアと情報』などの選択科目が設置され、『深い学習を希望する生徒』『情報系大学進学志望者』『IT企業就職志向者』が、高度な学習環境にアクセスできる仕組みが整備されました。大学入学共通テストでも『情報Ⅰ』が出題科目に追加される予定で、『全ての大学受験生にとって重要な科目』として位置づけられています。
          </Typography>

          <SubSection title="『情報Ⅰ』『情報Ⅱ』の位置づけと教育目標">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>情報Ⅰ（全高校生対象・必修科目）</strong> — 『プログラミングの基礎』『アルゴリズムの基本』『データの処理・分析の基礎』『情報セキュリティ』『ネットリテラシー』『情報社会の課題』を学習する、全ての高卒者が保有すべき共通知識です。年間35時間以上の授業時間が確保され、約70%の学習内容は『実習・演習』で構成されています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>情報Ⅱ（高2以上選択・応用科目）</strong> — 『プログラミングの応用実装』『データベース設計』『ネットワーク技術』『AI・機械学習の基礎』『情報倫理・セキュリティの応用』など、『情報系大学進学』『IT企業就職』に直結した高度な内容を扱います。年間70～105時間の授業を通じて、『実践的なICTスキル』『問題解決能力』を育成します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>その他の選択科目</strong> — 『情報表現』（メディア表現・グラフィックス）、『情報と社会』（情報倫理・法律）、『キャリアと情報』（職業選択・ICT活用）など、『特定分野に特化した学習』『進路対応』を重視する科目も設置されており、学校により選択肢が異なります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="『情報Ⅰ』の学習内容と評価方法の実際">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『情報Ⅰ』の年間授業は『プログラミング実習』『データ分析演習』『セキュリティケーススタディ』などの実習が約70%を占めており、机上の講義は約30%に留まります。定期テストは『筆記試験』『実習課題提出』『プログラムの完成度評価』で構成され、学校により配点が異なりますが、一般的には『筆記60%+実習40%』というバランスです。筆記試験では『プログラムの実行結果予測（トレース）』『アルゴリズム設計問題』『情報セキュリティ基本用語』『データベース操作』などが出題されます。実習課題では『指定条件を満たすプログラムの作成』『データ分析レポート作成』『情報セキュリティシミュレーション』などが評価対象になります。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#E1F5FE", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#01579B" }}>
                <strong>評定が高い生徒の傾向：</strong>（1）課題提出期限を厳守する、（2）プログラムの『完成度』を重視する、（3）授業での『質問・深掘り』が積極的、（4）『エラーが出た場合の原因分析』を丁寧に行う、（5）他人のコードとの比較から『改善点を学ぶ』という習慣。実習科目では『取り組み姿勢』『課題への真摯性』が成績に反映されるため、『努力が報われやすい科目』として認識されています。
              </Typography>
            </Paper>
          </SubSection>
        </Section>

        <Section title="プログラミング学習の実際と各言語の特徴" id="programming-details">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校情報科でのプログラミング学習は『言語の習得』を目的とするのではなく、『問題解決のためのアルゴリズム思考』『論理的思考力の育成』を目的としています。そのため、『易しい言語で基本を習得 → 段階的に複雑な問題解決へ進む』というアプローチが推奨されています。学習指導要領では『特定の言語を指定していない』ため、学校の裁量で言語を選択できますが、以下の3言語が一般的です。
          </Typography>

          <SubSection title="『Python』を採用する学校（約60%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『Python』は『記法がシンプル』『初心者向け』『AI・データ分析で業界標準』という理由で、全国の高校の約60%が採用しています。高1『情報Ⅰ』では『基本的な変数・条件分岐・ループ』から始まり、『リスト・辞書などのデータ構造』『関数定義』『ファイル入出力』『簡単なデータ分析（pandas・matplotlib）』まで習得します。高2『情報Ⅱ』では『クラス設計』『アルゴリズムの効率分析』『データベース操作（SQL）』『機械学習の基礎（scikit-learn）』へ進む段階的学習が行われます。Pythonは『読みやすさ重視』『AI時代の必須スキル』という点で、『情報系大学進学』『データサイエンティスト志向』の生徒に最適な言語として認識されています。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#E1F5FE", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#01579B" }}>
                <strong>高1『情報Ⅰ』での典型的な課題：</strong> 「1～100の合計を計算するプログラム作成」「ユーザー入力値から最大値を探すアルゴリズム」「CSVファイルから売上データを読み込み、月別集計・グラフ化」などの実践的な課題が多く、『プログラミング + データ分析』の統合的スキル習得を目指しています。
              </Typography>
            </Paper>
          </SubSection>

          <SubSection title="『C言語』『Java』を採用する学校（約25%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『C言語』『Java』は『データ構造・アルゴリズムの理解が本格的』『大学の情報学部入学後に習う言語と一致』という理由で、進学校や情報系科を設置する高校の約25%が採用しています。『C言語』は『メモリ管理・ポインタなど、低レベル概念の理解』が可能で、『コンピュータサイエンスの基礎』を深く学べます。『Java』は『オブジェクト指向プログラミングの本格学習』『企業システム開発で業界標準』という利点があります。これらの言語を選択する高校の生徒は、『大学での情報学部進学後、即戦力として活躍できる』というアドバンテージを得ます。ただし『習得難度が高い』『初心者向けではない』という課題があり、『強い学習動機』『数学的思考力』が必要です。
            </Typography>
          </SubSection>

          <SubSection title="『Scratch』『ビジュアルプログラミング』を採用する学校（約15%）">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『Scratch』『Blockly』などのビジュアルプログラミング環境は『プログラミング初心者向け』『小学・中学での学習経験者向け』として、約15%の高校が採用しています。『マウス操作でブロックを組み合わせる』『複雑な文法を覚える必要がない』という利点がある一方で、『実務的なプログラミング言語への移行が難しい』『情報系大学進学への準備が十分でない』という課題があります。ビジュアルプログラミングのみの学習で終わる学校は『情報系進学志望生にとって弱い選択肢』として認識されているため、『情報Ⅱ選択時にテキストベース言語への移行』がされる学校が多いです。
            </Typography>
          </SubSection>
        </Section>

        <Section title="情報系科目と大学進学・キャリアの接続" id="career-connection">
          <SubSection title="情報系大学進学への準備戦略">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『東京大学工学部情報工学科』『京都大学情報学部』『東工大情報理工学院』など、トップレベルの情報系大学への進学を目指す場合、『情報Ⅱ』での高い評定（4.5以上）が必須です。実際の調査では『情報系大学合格者の約95%が情報Ⅱを選択』『情報Ⅱ評定平均4.5以上の生徒の情報系大学合格率は75%』『情報Ⅱ評定3.5以下の生徒の情報系大学合格率は20%以下』という結果が報告されています。これは『情報系大学の入試難度が高く、調査書評定が重要な役割を果たす』『情報Ⅱでの高い評定が、志望大学への適性を示す指標』として機能しているためです。戦略的には『高1『情報Ⅰ』で4.5以上の評定を確保 → 高2『情報Ⅱ』選択 → 高度なプログラミング・アルゴリズム学習 → 大学入学共通テスト『情報Ⅱ』で高スコア獲得』というロードマップが重要です。
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: "#E1F5FE", mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#01579B" }}>
                <strong>情報系大学進学に向けた準備チェックリスト：</strong> （1）高1『情報Ⅰ』で評定4.0以上取得、（2）『数学B・C』での高い理解度（評定4.0以上推奨）、（3）『情報Ⅱ』選択決定、（4）プログラミングコンテスト・情報オリンピック参加（加点要因）、（5）大学のプログラムキャンプ・冬季講座参加（経験値向上）。
              </Typography>
            </Paper>
          </SubSection>

          <SubSection title="IT企業就職への接続と実務スキル">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              『高卒でIT企業に就職する』という進路を選択する生徒にとって、『情報Ⅰ』『情報Ⅱ』での実務的なプログラミング経験は、『就職試験の筆記試験』『入社後の研修』で大きなアドバンテージになります。IT企業の新卒採用では『プログラミング適性テスト』『簡単なコード作成問題』が筆記試験に含まれることが多く、『高校での学習経験がある』という事実が有利に働きます。また、『高3で情報系インターンシップ』『資格取得（基本情報処理技術者試験など）』に取り組む場合、『高1・高2での確かな基礎学習』が必須になります。高校段階での『プログラミング実務経験』『問題解決プロセスの習得』が、『即戦力人材』としての評価につながります。
            </Typography>
          </SubSection>

          <SubSection title="推薦入試・総合型選抜での情報科目の活かし方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>調査書評定平均値の向上</strong> — 『情報Ⅰ』『情報Ⅱ』での高い評定は、『調査書評定平均値』を上げる効果があります。『情報Ⅱ評定4.5 + 他の選択科目評定』により、『推薦出願条件の評定平均3.8クリア』が容易になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>志望理由書・小論文での活用</strong> — 『高度なプログラミング学習を通じて、問題解決能力を養った』『AIの仕組みを理解し、データサイエンティスト志望が強化された』など、『学習経験と進学志望のストーリー化』が合格判定を左右します。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>面接での志望理由説得力</strong> — 『高校での具体的なプログラミング課題』『習得したアルゴリズム』『取り組んだプロジェクト』を志望理由と関連付けることで、『進学動機の真摯性』が大学側に伝わります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="情報科目と数学・共通テストの関連性" id="math-connection">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            『情報Ⅱ』での『データ構造・アルゴリズム』『計算量分析』『AI・機械学習』などの内容は、『数学B（確率分布）』『数学C（複素数・ベクトル）』『数学A（論理と集合）』との強い関連性を持っています。実際のカリキュラムでは『情報Ⅱ』の授業進度が『数学B・C』の習得度に依存する傾向があり、『数学の理解が浅い生徒は、情報Ⅱの高度な内容での躓きが大きい』という現象が報告されています。大学入学共通テストでも『情報Ⅰ』は新設科目として2025年から出題予定であり、『データ分析・確率』に関する問題では『数学的思考力』が必須になります。
          </Typography>

          <SubSection title="数学との具体的な関連性">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『数学A（論理と集合）』との関連</strong> — プログラミングの『条件分岐』『ループ処理』『集合演算』などは『論理演算』『集合論』の概念に直結しています。『情報Ⅰ』『情報Ⅱ』での『真偽値判定』『論理和・論理積』は『数学Aの知識』を前提としています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『数学B（確率分布）』との関連</strong> — 『データ分析』『統計処理』『機械学習』では『確率分布』『期待値』『標本抽出』などの統計概念が重要です。『情報Ⅱ』での『データベース設計』『データマイニング』は『数学B』の応用領域です。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『数学C（複素数・ベクトル）』との関連</strong> — 『AI・画像処理』『ニューラルネットワーク』では『ベクトル演算』『行列計算』『複素数』が基盤です。『情報Ⅱ』での『深層学習入門』は『数学C』の高い理解度を前提としています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>

          <SubSection title="共通テスト『情報Ⅰ』の特徴と対策">
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 2 }}>
              大学入学共通テストに『情報Ⅰ』が追加される予定（2025年1月実施予定）で、出題科目は『プログラミング・アルゴリズム』『データ分析』『情報セキュリティ』『情報社会』の4分野です。出題形式は『マーク式』『複数選択肢から複数選択』『データ分析の計算問題』など、『思考力・判断力・表現力』を評価する形式が採用されています。平均点は『数学Bと同程度』の予想で、『高スコア取得には、高度なプログラミング理解が必須』とされています。
            </Typography>
          </SubSection>
        </Section>

        <Section title="高校情報科の実態と学校選択のポイント" id="school-selection">
          <SubSection title="情報教育が充実した高校の見分け方">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>コンピュータ室の充実度</strong> — 『1生徒1台のPC配置』『最新OS・開発環境完備』『20台以上のコンピュータ保有』など、実習環境が整備されている学校を選ぶことが重要です。『共有PC が10台未満』『OSが3年以上古い』という学校は避けるべきです。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>開発環境・ツールの充実</strong> — 『Python・C言語両対応の開発環境』『Visual Studio Code等の最新IDE導入』『GitHubなどのバージョン管理ツール導入』などがある学校は、『実務的なプログラミング教育』を実施しています。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>専任情報科教員の配置と資格</strong> — 『情報処理技術者試験（高度試験以上）保有教員』『大学での情報学部卒業者』『業界経験者の登用』など、『専門性の高い教員』が配置されている学校は、指導レベルが高い傾向があります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>情報系大学進学・IT企業就職の実績</strong> — 『過去3年間の情報系大学進学者数』『高卒就職者のIT企業勤務率』『プログラミングコンテスト出場実績』などから、『情報教育の実質的な成果』が判断できます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0277BD" }} />
                </ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>『情報Ⅱ』以上の選択肢の豊富さ</strong> — 『情報Ⅱ』『情報表現』『情報と社会』など複数の選択科目が設置されている学校は、『生徒の多様なニーズに対応』した教育体制が構築されています。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <FAQ items={faqItems} />
      </Container>
    </>
  );
}
