import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Container, Box, Typography, Chip } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import OnlineJukuRankingCard from "@/components/juku/OnlineJukuRankingCard";
import OnlineJukuCompareTable from "@/components/juku/OnlineJukuCompareTable";
import { JUKU_RED, JUKU_RED_BG, JUKU_PURPOSES, JUKU_CATEGORIES } from "@/utils/juku/config";
import { fetchOnlineJukuRanking } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuRankingItem } from "@/types";

const FILTER_TAGS = [
  { label: "すべて", value: "" },
  { label: "個別指導", value: "category:個別指導" },
  { label: "映像授業", value: "category:映像授業" },
  { label: "自立学習", value: "category:自立学習" },
  { label: "中学受験", value: "purpose:中学受験" },
  { label: "高校受験", value: "purpose:高校受験" },
  { label: "大学受験", value: "purpose:大学受験" },
  { label: "小学生", value: "year:小学生" },
  { label: "中学生", value: "year:中学生" },
  { label: "高校生", value: "year:高校生" },
];

const RELATED_LINKS = [
  { label: "オンライン塾一覧", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" },
  { label: "📚 中学受験向けランキング", href: "/juku/ranking/chugaku/" },
  { label: "🏫 高校受験向けランキング", href: "/juku/ranking/koukou/" },
  { label: "🎓 大学受験向けランキング", href: "/juku/ranking/daigaku/" },
  { label: "📝 定期テスト対策ランキング", href: "/juku/ranking/teiki/" },
  { label: "✏️ 学習習慣・補習ランキング", href: "/juku/ranking/kihon/" },
  { label: "👦 小学生向けランキング", href: "/juku/ranking/grade/shogaku/" },
  { label: "📖 中学生向けランキング", href: "/juku/ranking/grade/chugaku/" },
  { label: "🎒 高校生向けランキング", href: "/juku/ranking/grade/koukou/" },
  { label: "📓 浪人生向けランキング", href: "/juku/ranking/grade/rounin/" },
];

type Props = {
  schools: JukuRankingItem[];
  totalCount: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  const { schools, totalCount } = await fetchOnlineJukuRanking({ perPage: 50 });
  setConditionalCacheHeaders(res, totalCount);
  return { props: { schools, totalCount } };
};

export default function OnlineJukuRankingPage({ schools, totalCount }: Props) {
  const [activeFilter, setActiveFilter] = useState("");

  const filteredSchools = schools.filter((s) => {
    if (!activeFilter) return true;
    const [type, value] = activeFilter.split(":");
    if (type === "category") return s.JukuSchoolCategory.some((c) => c.category === value);
    if (type === "purpose") return s.JukuSchoolPurpose.some((p) => p.purpose === value);
    if (type === "year") return s.JukuSchoolYear.some((y) => y.year === value);
    return true;
  });

  return (
    <>
      <Head>
        <title>オンライン塾ランキング【2026年最新】比較・おすすめ{totalCount}選 | オンライン塾比較ステーション</title>
        <meta
          name="description"
          content={`2026年最新のオンライン塾ランキング。口コミ評価・料金・特徴を徹底比較した${totalCount}選。個別指導・映像授業・大学受験など目的別に厳選したおすすめオンライン塾を紹介します。`}
        />
        <link rel="canonical" href="https://school-station.com/juku/ranking/" />
        <meta property="og:title" content={`オンライン塾ランキング【2026年最新】${totalCount}選`} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "オンライン塾ランキング 2026年版",
              "description": "口コミ評価に基づいたオンライン塾ランキング",
              "itemListElement": schools.slice(0, 10).map((s, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": s.name,
                "url": `https://school-station.com/juku/${s.JukuBrand.slug}/${s.slug}/`,
              })),
            }),
          }}
        />
      </Head>

      {/* ━━━━ ページヘッダー ━━━━ */}
      <Box
        sx={{
          position: "relative",
          bgcolor: JUKU_RED,
          color: "#fff",
          py: { xs: 4, sm: 5 },
          overflow: "hidden",
          minHeight: { xs: 160, sm: 200 },
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* 背景画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1400&h=500&fit=crop&q=70"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${JUKU_RED}ee 40%, ${JUKU_RED}99 100%)` }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* パンくず */}
          <Box sx={{ display: "flex", gap: 0.75, mb: 2, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontSize: 12 }}>ホーム</Link>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>›</span>
            <Link href="/juku/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontSize: 12 }}>塾を探す</Link>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>›</span>
            <span style={{ color: "#fff", fontSize: 12 }}>オンライン塾ランキング</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <EmojiEventsIcon sx={{ fontSize: { xs: 32, sm: 42 }, color: "#FFD700" }} />
            <Typography component="h1" sx={{ fontWeight: 900, fontSize: { xs: "1.5rem", sm: "2.1rem" }, letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              2026年最新 オンライン塾ランキング
            </Typography>
          </Box>
          <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: { xs: 13, sm: 15 }, lineHeight: 1.7, mb: 2, maxWidth: 600 }}>
            口コミ評価・料金・特徴を徹底比較。中学受験・高校受験・大学受験対応のオンライン塾{totalCount}選を厳選紹介します。
          </Typography>
          {/* 統計バッジ */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {[
              { icon: "🏆", text: `${totalCount}塾掲載` },
              { icon: "⭐", text: "口コミ評価順" },
              { icon: "💰", text: "月額0円〜" },
              { icon: "📍", text: "全国対応" },
            ].map((b) => (
              <Box key={b.text} sx={{ bgcolor: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)", px: 1.5, py: 0.5, borderRadius: 5, fontSize: 12, fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)" }}>
                {b.icon} {b.text}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 2.5, sm: 3.5 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 280px" }, gap: { xs: 3, md: 4 }, alignItems: "start" }}>

          {/* ━━━━ メインコンテンツ ━━━━ */}
          <Box>
            {/* フィルタータグ */}
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: 2,
                p: { xs: 1.5, sm: 2 },
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: 12, color: "#6B7280", fontWeight: 600, mb: 1.25 }}>
                絞り込み
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {FILTER_TAGS.map((tag) => (
                  <Chip
                    key={tag.value}
                    label={tag.label}
                    size="small"
                    onClick={() => setActiveFilter(tag.value === activeFilter ? "" : tag.value)}
                    sx={{
                      bgcolor: activeFilter === tag.value ? JUKU_RED : (tag.value === "" && activeFilter === "" ? JUKU_RED : "#F3F4F6"),
                      color: (activeFilter === tag.value || (tag.value === "" && activeFilter === "")) ? "#fff" : "#374151",
                      fontWeight: 600,
                      fontSize: 12,
                      height: 26,
                      cursor: "pointer",
                      "& .MuiChip-label": { px: 1.25 },
                      "&:hover": { bgcolor: activeFilter === tag.value ? "#A31515" : JUKU_RED_BG },
                      transition: "all 0.15s",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* 件数・ソート表示 */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, px: 0.5 }}>
              <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
                <Typography component="span" sx={{ fontWeight: 700, color: "#111827", fontSize: 15 }}>
                  {filteredSchools.length}
                </Typography>
                件表示中（全{totalCount}件）
              </Typography>
              <Typography sx={{ fontSize: 12, color: "#6B7280" }}>
                評価スコア順
              </Typography>
            </Box>

            {/* ランキングカード */}
            {filteredSchools.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8, bgcolor: "#fff", borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Typography sx={{ fontSize: 40, mb: 2 }}>📚</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#374151", mb: 1 }}>
                  該当する塾が見つかりませんでした
                </Typography>
                <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
                  別の条件で検索してみてください
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {filteredSchools.map((school, i) => {
                  const globalRank = schools.findIndex((s) => s.id === school.id) + 1;
                  return (
                    <OnlineJukuRankingCard key={school.id} school={school} rank={globalRank} />
                  );
                })}
              </Box>
            )}

            {/* 注釈 */}
            <Box sx={{ mt: 3, p: 2, bgcolor: "#F9FAFB", borderRadius: 1.5, border: "1px solid #E5E7EB" }}>
              <Typography sx={{ fontSize: 11, color: "#6B7280", lineHeight: 1.8 }}>
                ※ ランキングは口コミ評価スコアを基準に作成しています。料金・特徴は各社の公開情報に基づくものであり、変更になる場合があります。最新情報は各塾の公式サイトでご確認ください。
              </Typography>
            </Box>

            {/* 比較表 */}
            <OnlineJukuCompareTable schools={filteredSchools} />
          </Box>

          {/* ━━━━ サイドバー ━━━━ */}
          <Box sx={{ position: { md: "sticky" }, top: { md: 80 }, display: "flex", flexDirection: "column", gap: 2 }}>
            {/* 目的別ランキング */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ bgcolor: JUKU_RED, px: 2, py: 1.25 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  目的別で探す
                </Typography>
              </Box>
              <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
                {JUKU_PURPOSES.map((p) => (
                  <Box
                    key={p.value}
                    component="button"
                    onClick={() => setActiveFilter(activeFilter === `purpose:${p.value}` ? "" : `purpose:${p.value}`)}
                    sx={{
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      fontSize: 13,
                      color: activeFilter === `purpose:${p.value}` ? JUKU_RED : "#374151",
                      fontWeight: activeFilter === `purpose:${p.value}` ? 700 : 500,
                      bgcolor: activeFilter === `purpose:${p.value}` ? JUKU_RED_BG : "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      "&:hover": { bgcolor: JUKU_RED_BG, color: JUKU_RED },
                      transition: "all 0.12s",
                    }}
                  >
                    {p.emoji} {p.label}の塾
                  </Box>
                ))}
              </Box>
            </Box>

            {/* スタイル別 */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ bgcolor: "#4f46e5", px: 2, py: 1.25 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  授業スタイル別
                </Typography>
              </Box>
              <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
                {JUKU_CATEGORIES.map((c) => (
                  <Box
                    key={c.value}
                    component="button"
                    onClick={() => setActiveFilter(activeFilter === `category:${c.value}` ? "" : `category:${c.value}`)}
                    sx={{
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      fontSize: 13,
                      color: activeFilter === `category:${c.value}` ? "#4f46e5" : "#374151",
                      fontWeight: activeFilter === `category:${c.value}` ? 700 : 500,
                      bgcolor: activeFilter === `category:${c.value}` ? "#EEF2FF" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      "&:hover": { bgcolor: "#EEF2FF", color: "#4f46e5" },
                      transition: "all 0.12s",
                    }}
                  >
                    {c.emoji} {c.label}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* 関連リンク */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ bgcolor: "#F3F4F6", px: 2, py: 1.25, borderBottom: "1px solid #E5E7EB" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#374151" }}>
                  関連ページ
                </Typography>
              </Box>
              <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", gap: 0.25 }}>
                {RELATED_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        fontSize: 13,
                        color: "#374151",
                        "&:hover": { bgcolor: JUKU_RED_BG, color: JUKU_RED },
                        transition: "all 0.12s",
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ━━━━ FAQ ━━━━ */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #E5E7EB" }}>
          <Typography variant="h2" sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#111827", mb: 3 }}>
            よくある質問
          </Typography>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "オンライン塾の費用はどのくらいかかりますか？", "acceptedAnswer": { "@type": "Answer", "text": "映像授業型は月額2,000円〜5,000円程度、個別指導型は月額1万〜3万円程度が相場です。スタディサプリや河合塾Oneのような映像授業系はリーズナブルで、東大先生・トウコベなどのコーチング系は高めになります。無料体験を活用して自分に合うかを確認しましょう。" }},
                { "@type": "Question", "name": "オンライン塾と通塾ではどちらが良いですか？", "acceptedAnswer": { "@type": "Answer", "text": "自己管理ができる生徒や、地方在住・部活で通塾が難しい場合はオンライン塾が有利です。一方、強制力が必要な生徒や対面のコミュニケーションを重視する場合は通塾が向いています。最近はオンライン塾でも毎日の学習管理・コーチングが充実してきており、成果を出す生徒も増えています。" }},
                { "@type": "Question", "name": "中学生におすすめのオンライン塾はどこですか？", "acceptedAnswer": { "@type": "Answer", "text": "中学生には「家庭教師のトライ（オンライン）」「そら塾」「スマイルゼミ」「スタディサプリ中学講座」などが人気です。定期テスト対策なら個別指導型、効率よく全教科勉強したいなら映像授業＋自立学習型がおすすめです。" }},
                { "@type": "Question", "name": "大学受験対策に強いオンライン塾は？", "acceptedAnswer": { "@type": "Answer", "text": "難関大受験には「東大先生」「スタディコーチ」「現論会」「STRUX」などのコーチング型が効果的です。映像授業系ではスタディサプリ（合格特訓コース）や武田塾オンラインも人気です。自分の学習スタイルに合わせて選びましょう。" }},
                { "@type": "Question", "name": "無料で始められるオンライン塾はありますか？", "acceptedAnswer": { "@type": "Answer", "text": "Try IT（トライイット）は映像授業が完全無料で利用できます。スタディサプリ・N予備校・河合塾Oneは月額2,000円前後と格安です。多くの塾で無料体験授業が提供されているので、まず体験してから比較することをおすすめします。" }},
              ]
            })}}
          />
          {[
            { q: "オンライン塾の費用はどのくらいかかりますか？", a: "映像授業型は月額2,000〜5,000円程度、個別指導型は月額1〜3万円程度が相場です。スタディサプリや河合塾Oneのような映像授業系はリーズナブルで、東大先生・トウコベなどのコーチング系は高めになります。無料体験を活用して合うかを確認しましょう。" },
            { q: "オンライン塾と通塾ではどちらが良いですか？", a: "自己管理ができる生徒や地方在住・部活で通塾が難しい場合はオンライン塾が有利です。強制力が必要な生徒や対面コミュニケーションを重視する場合は通塾が向いています。最近はオンライン塾でも毎日の学習管理・コーチングが充実してきています。" },
            { q: "中学生におすすめのオンライン塾はどこですか？", a: "「家庭教師のトライ（オンライン）」「そら塾」「スマイルゼミ」「スタディサプリ中学講座」などが人気です。定期テスト対策なら個別指導型、全教科を効率よく学ぶなら映像授業＋自立学習型がおすすめです。" },
            { q: "大学受験対策に強いオンライン塾は？", a: "難関大受験には「東大先生」「スタディコーチ」「現論会」「STRUX」などのコーチング型が効果的です。映像授業系ではスタディサプリ（合格特訓コース）や武田塾オンラインも人気です。学習スタイルに合わせて選びましょう。" },
            { q: "無料で始められるオンライン塾はありますか？", a: "Try IT（トライイット）は映像授業が完全無料で利用できます。スタディサプリ・N予備校・河合塾Oneは月額2,000円前後と格安です。多くの塾で無料体験授業も提供されているので、まず体験して比較することをおすすめします。" },
          ].map((item, i) => (
            <Box key={i} sx={{ mb: 2.5, bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ bgcolor: JUKU_RED_BG, px: 2.5, py: 1.5, display: "flex", gap: 1, alignItems: "flex-start" }}>
                <Box sx={{ bgcolor: JUKU_RED, color: "#fff", fontWeight: 800, fontSize: 13, px: 0.75, py: 0.1, borderRadius: 0.5, flexShrink: 0, mt: 0.1 }}>Q</Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{item.q}</Typography>
              </Box>
              <Box sx={{ px: 2.5, py: 1.5, display: "flex", gap: 1, alignItems: "flex-start" }}>
                <Box sx={{ bgcolor: "#4f46e5", color: "#fff", fontWeight: 800, fontSize: 13, px: 0.75, py: 0.1, borderRadius: 0.5, flexShrink: 0, mt: 0.1 }}>A</Box>
                <Typography sx={{ fontSize: 14, color: "#374151", lineHeight: 1.8 }}>{item.a}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ━━━━ SEOテキスト ━━━━ */}
        <Box sx={{ mt: 4, pt: 4, borderTop: "1px solid #E5E7EB" }}>
          <Typography variant="h2" sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", mb: 1.5 }}>
            オンライン塾ランキングについて
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#6B7280", lineHeight: 1.9, mb: 1.5 }}>
            当サイトのオンライン塾ランキングは、各塾の口コミ評価スコアを基に作成しています。個別指導・映像授業・AI学習など様々なスタイルのオンライン塾を網羅し、中学受験・高校受験・大学受験それぞれの目的に合った塾を比較できます。
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#6B7280", lineHeight: 1.9 }}>
            ランキングの詳細情報（おすすめポイント・コース料金）は各塾のページでご確認ください。無料体験・資料請求も各塾の公式サイトから申し込めます。
          </Typography>
        </Box>
      </Container>
    </>
  );
}
