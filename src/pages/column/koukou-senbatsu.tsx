import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

export default function KoukouSenbatsuPage() {
  const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "コラム", href: "/column/" },
    { label: "高校1年生の学習ガイド｜先取り学習・予習復習習慣づくり" },
  ];

  const faqItems = [
    {
      question: "高校1年生が最初にやるべき学習準備は何ですか？",
      answer: "高校1年生が最初の1～2週間でやるべき準備は、(1)教科書・参考書の全体構成を把握する、(2)各科目の進度と難度を理解する、(3)学習スケジュール（毎日の予習復習時間）を決める、(4)わからないことを相談できる先生や先輩を確保する、(5)基本的な学習環境を整備する、という5つの準備が重要です。",
    },
    {
      question: "先取り学習をいつから始めるべきですか？",
      answer: "先取り学習を始めるタイミングは、(1)入学直後（春休み）から開始する方法、(2)高1の4月中に授業の進度と同じペースで進める方法、(3)高1秋以降に次年度の単元を予習する方法、という3つのアプローチがあります。最も効果的なのは、授業の進度と同じペースで、わからないことをその場で解決する授業連動型の先取り学習です。",
    },
    {
      question: "予習復習の習慣を作るコツは何ですか？",
      answer: "予習復習の習慣化のコツは、(1)最初は1教科だけから始める、(2)毎日同じ時間に同じ場所で学習する、(3)参考書・ノート・ペンなど学習環境を整える、(4)最初の1ヶ月は完璧を目指さない、(5)小さな成功を積み重ねる、という段階的で心理的に無理のない方法が効果的です。",
    },
    {
      question: "高校と中学の勉強方法で最も変わる部分は何ですか？",
      answer: "高校と中学の勉強方法で最も本質的に変わる部分は、(1)受け身の学習から主体的な学習へ、(2)暗記から理解へ、(3)定期テスト対策から継続的な学習へ、という3つの根本的な転換です。この変化に素早く適応できるかどうかが、高校全体での成績を決定する最重要要素です。",
    },
    {
      question: "定期テストと大学受験対策をどう両立させますか？",
      answer: "定期テストと大学受験対策の両立は、高1では定期テスト重視、高2で50:50のバランス、高3で受験対策重視、という段階的なシフトが最も効率的です。高1で重要なのは、定期テストで高得点を取ることで高い評定平均を維持し、その過程で基礎学力を完全に定着させることです。",
    },
    {
      question: "つまずいた時はどうしたら良いですか？",
      answer: "つまずいた時の対応が早ければ早いほど、その後の学習が決定されます。対応ステップは、(1)つまずきに気づく、(2)即座に質問する、(3)理解するまで繰り返す、(4)類似問題で定着させる、(5)その単元の学習を一度終わらせる、という5段階のプロセスが重要です。放置すれば指数関数的に難度が増します。",
    },
  ];

  return (
    <>
      <SEO
        title="高校1年生の学習ガイド｜先取り学習・予習復習習慣づくり | School Station"
        description="高校1年生が最初にやるべき学習準備、先取り学習のタイミングと効果的な方法、毎日の予習復習習慣の作り方、中学との勉強方法の違い、定期テストと受験対策の両立、つまずきへの対応策を完全ガイド。"
        canonical="/column/koukou-senbatsu/"
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
            "headline": "高校1年生の学習ガイド｜先取り学習・予習復習習慣づくり",
            "description": "高校1年生が最初にやるべき学習準備、先取り学習のタイミングと効果的な方法、毎日の予習復習習慣の作り方、中学との勉強方法の違い、定期テストと受験対策の両立、つまずきへの対応策を完全ガイド。",
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

        <Box sx={{ textAlign: "center", py: { xs: 4, sm: 5 }, mb: 4, background: "linear-gradient(135deg, #1565C0 0%, #1976D2 50%, #42A5F5 100%)", borderRadius: 3, color: "#fff" }}>
          <Typography variant="h1" sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" }, mb: 2, fontWeight: 700 }}>
            高校1年生の学習ガイド
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3F2FD", maxWidth: 600, mx: "auto" }}>
            先取り学習・予習復習習慣づくり、中学との違いへの適応戦略
          </Typography>
        </Box>

        <Section title="高校1年生が直面する学習環境の激変" id="kankyo-gekihan">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校進学は単なる「進学」ではなく、学習環境の根本的な「変換」です。中学までの学習方法が通用しない、授業スピードが倍になる、学習量が3～5倍に増えるという劇的な変化の中で、最初の1～3ヶ月での適応が、その後の3年間を決定します。
          </Typography>
          <SubSection title="中学との最大の違い">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>授業スピードが2～3倍になり、予習なしについていくことが物理的に不可能になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>内容の難度が数段階上昇し、「暗記」では対応できず「理解」が必須になります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>毎日4～5時間の自学習が必須になり、部活・行事との両立が現実的な課題になります。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="高校1年生の最初1～2週間でやるべき準備" id="saisho-junbi">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高校入学直後の準備が甘いと、その後3年間で取り返しがつきません。最初の1～2週間で「学習の基盤」を完成させることが、その後の成功の分岐点です。
          </Typography>
          <SubSection title="準備STEP1：各科目の教科書・シラバスを理解する（初日～3日目）">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>各科目について：(1)教科書の全体構成を把握、(2)1年間の進度予定を確認、(3)定期テストの日程と評価方法を把握、(4)参考書・問題集のリストアップ</Typography>
          </SubSection>
          <SubSection title="準備STEP2：学習スケジュールの設計（3日目～1週間目）">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>朝何時に起床し、朝食後どの科目を何分勉強するか、下校後はどう時間配分するか、就寝時刻までの全体像を決めます。最初は「理想的なスケジュール」ではなく「継続可能なスケジュール」を重視することが習慣化のコツです。</Typography>
          </SubSection>
          <SubSection title="準備STEP3：学習環境の整備（1週間目～2週間目）">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>机の上を整理し、参考書・ノート・筆記具をまとめ、スマートフォンを触らない工夫をします。環境による無意識の行動変化は、習慣形成に大きな役割を果たします。</Typography>
          </SubSection>
        </Section>

        <Section title="先取り学習の効果的な進め方" id="sakitori-gakushu">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            先取り学習は「正しく実施すれば極めて効果的」ですが「誤った方法では逆効果」になります。授業との連動を意識した段階的なアプローチが重要です。
          </Typography>
          <SubSection title="高校1年のタイムラインに沿った先取り学習">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1", mb: 0.8 }}>春休み（入学前）</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>中学の復習を中心に。高校数学・英語の基礎単元を軽く予習する程度。完全な先取りは避けます。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1", mb: 0.8 }}>高1年4月～7月</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>授業と同じペースで学習。予習は「教科書を読んで全体像を把握」程度。復習に時間を割くことを優先します。
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#0D47A1", mb: 0.8 }}>高1年9月～12月</Typography>
                  <Typography variant="body2" sx={{ color: "#424242" }}>定期テスト対策を充実させながら、次の単元を軽く予習。「授業で初見」ではなく「復習として聞く」というマインドセットを作ります。
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="毎日の予習復習習慣の作り方" id="yosyuu-fukusyuu-syuukan">
          <SubSection title="習慣化の心理学：最初の21日が勝負">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>新しい習慣の定着には平均66日かかりますが、最初の21日で「脳の回路」が作られます。この期間、どれだけ無理なく継続できるかが、その後の3年間を決めます。
            </Typography>
          </SubSection>
          <SubSection title="実践的な習慣化ステップ">
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Week 1-3：最初は1教科、1日15分から</strong> — すべての科目に同時に取り組むと挫折確実。数学だけ、英語だけ、という形で小さく始めます。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Week 4-8：同じ時間に同じ場所で</strong> — 「毎日夜7時に机に座る」という習慣化により、脳が自動的に学習モードに入ります。
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon>
                <Typography variant="body2" sx={{ color: "#424242" }}>
                  <strong>Week 9-12：成功の小さな積み重ねを記録</strong> — 「できた」という実績を見える化（シール、チェックマーク）することで、脳のドーパミン報酬系が刺激されます。
                </Typography>
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="定期テストと受験対策の上手な両立" id="teiki-vs-juken">
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 3 }}>
            高1の最大の誤りは「定期テストだけに集中する」または「受験対策に集中して定期テストを軽視する」というどちらかの極端です。両者は実は同じプロセスなのです。
          </Typography>
          <SubSection title="高1年の戦略：定期テストが受験対策">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>定期テストで高得点を取るための学習プロセス（予習→授業→復習→演習）は、そのまま受験対策の基礎学力定着プロセスです。この認識を持つことが、両立のコツです。具体的には、定期テスト対策で「ただ暗記する」のではなく「根本から理解する」ことを心がけることで、自動的に受験対策につながります。</Typography>
          </SubSection>
        </Section>

        <Section title="つまずきの早期発見と対応" id="tsumazuki-taisaku">
          <SubSection title="つまずきの危険信号">
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}><ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon><Typography variant="body2" sx={{ color: "#424242" }}>授業で「何を言っているかわからない」という状態が2～3日続く</Typography></ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}><ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon><Typography variant="body2" sx={{ color: "#424242" }}>練習問題で「解き方の流れがわからない」という状態が出現する</Typography></ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}><ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon sx={{ color: "#1565C0" }} /></ListItemIcon><Typography variant="body2" sx={{ color: "#424242" }}>予習時に「教科書を読んでもさっぱりわからない」という困惑が生じる</Typography></ListItem>
            </List>
          </SubSection>
          <SubSection title="対応の黄金ルール：24時間以内の質問">
            <Typography variant="body2" sx={{ color: "#424242", mb: 2 }}>つまずいてから24時間以内に質問・相談することが、その後の学習を大きく左右します。理由は「わからない」という状態は指数関数的に拡大するからです。</Typography>
          </SubSection>
        </Section>

        <Box sx={{ my: 5 }}><Divider sx={{ mb: 4 }} /><FAQ items={faqItems} /></Box>

        <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, background: "linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)", borderRadius: 2, border: "1px solid #E0E0E0", textAlign: "center" }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#0D47A1", mb: 2 }}>
            高校1年の準備が、3年間の成否を決める
          </Typography>
          <Typography variant="body2" sx={{ color: "#424242", lineHeight: 1.8, mb: 3 }}>
            高校1年の最初の3ヶ月は「学習の基礎」を作る極めて重要な時期です。予習復習の習慣、つまずきの早期対応、学習環境の整備——これらを完成させることで、その後の大学受験まで安定した学力成長が実現できます。
          </Typography>
          <Link href="/column/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "inline-block", mt: 2, px: 3, py: 1.2, bgcolor: "#1565C0", color: "#fff", borderRadius: 1, fontWeight: 600, "&:hover": { bgcolor: "#0D47A1" } }}>
              コラム一覧に戻る
            </Box>
          </Link>
        </Paper>
      </Container>
    </>
  );
}
