import type { GetServerSideProps } from "next";
import { Container, Typography, Box, Divider } from "@mui/material";
import Link from "next/link";
import { fetchKoukouRanking } from "@/utils/db/fetchKoukouRanking";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import { generateRankingTitle, generateRankingDescription } from "@/utils/seo/generateRankingMetadata";
import KoukouRankingPage from "@/features/koukou/pages/KoukouRankingPage";
import type { RankingPageProps } from "@/types";

export default function NationalRanking(props: RankingPageProps) {
  return (
    <>
      <KoukouRankingPage {...props} canonical="/rankings/koukou/national/" />

      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <Divider sx={{ my: 4 }} />

        {/* Column Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 700 }}>
            高校受験・偏差値に関するコラム
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {[
              { href: "/column/koukou-tokutasei/", title: "高校の特待生・奨学金制度｜私立高校でお得に通うための条件と申請方法" },
              { href: "/column/koukou-english/", title: "高校の英語教育の変化｜英語4技能・大学入学共通テストへの対応策" },
              { href: "/column/koukou-career/", title: "高校卒業後の進路選択｜大学・専門学校・就職・留学のメリット比較" },
              { href: "/column/koukou-hensachi/", title: "偏差値の見方と志望校選びへの活用法｜失敗しない高校選びのコツ" },
              { href: "/column/daigaku-juken/", title: "高校から大学受験を見据えた学習計画の立て方" },
              { href: "/column/koukou-seikatsu/", title: "高校生活を充実させる方法｜勉強・部活・友達・行事の両立" },
              { href: "/column/kokosei-nyushi/", title: "高校入試の種類と対策｜推薦・一般・特色選抜の違い" },
              { href: "/column/kokosei-study/", title: "高校生の効率的な勉強法｜定期テスト・大学受験対策" },
              { href: "/column/hensachi-guide/", title: "偏差値の見方・使い方を徹底解説" },
              { href: "/column/koko-choice/", title: "志望校の選び方｜受験校を決める5つの基準" },
              { href: "/column/nyushi-schedule/", title: "高校受験スケジュール完全ガイド" },
              { href: "/column/kouritsu-vs-shiritsu/", title: "公立vs私立｜高校選びの徹底比較" },
              { href: "/column/naishin-up/", title: "内申点の上げ方｜今すぐできる具体的な方法" },
              { href: "/column/study-methods/", title: "高校受験に向けた効果的な勉強法" },
              { href: "/column/mensetsu-guide/", title: "高校受験の面接対策完全ガイド" },
              { href: "/column/chugaku-entrance/", title: "中学受験の基礎知識｜いつから準備する？" },
              { href: "/column/tokkoku-guide/", title: "推薦入試・特色選抜完全ガイド" },
              { href: "/column/bukatsu-choise/", title: "高校の部活選び｜入学前に知ること" },
              { href: "/column/taiken-nyugaku/", title: "学校見学・体験入学の活用ガイド｜志望校選びに役立てよう" },
              { href: "/column/kokosei-baito/", title: "高校生のバイトと勉強の両立｜受験に影響しない働き方" },
              { href: "/column/juken-stress/", title: "受験のストレスと上手に付き合う方法" },
              { href: "/column/koko-sports/", title: "スポーツ推薦で高校に入る方法とポイント" },
              { href: "/column/tsushinsei-koukou/", title: "通信制・定時制高校の違い｜選び方ガイド" },
              { href: "/column/koukou-setsumeikai/", title: "学校説明会・オープンキャンパス活用法" },
              { href: "/column/suisen-nyushi/", title: "高校の推薦入試対策完全ガイド" },
              { href: "/column/koukou-bukatsu/", title: "高校の部活動選び｜勉強との両立" },
              { href: "/column/koukou-tenko/", title: "高校の転校・転入手続きガイド｜公立・私立・通信制それぞれの方法" },
              { href: "/column/koukou-ryuunen/", title: "高校で留年・退学になりそうな場合の対処法｜代替進路の選択肢" },
            ].map((article) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                <Box sx={{ p: 1.5, border: "1px solid #E0E0E0", borderLeft: "3px solid #FF6F00", borderRadius: 1, fontSize: 13, color: "#1565C0", "&:hover": { bgcolor: "#FFF8E1", borderLeftColor: "#E65100" }, transition: "all 0.15s" }}>
                  {article.title}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RankingPageProps> = async ({ res, query }) => {
  const page = Number(query.page) || 1;
  const perPage = 50;
  const { schools, totalCount } = await fetchKoukouRanking({ classification: "NATIONAL", page, perPage });

  setConditionalCacheHeaders(res, totalCount);

  return {
    props: {
      schools,
      totalCount,
      title: generateRankingTitle({ classificationLabel: "国立", totalCount, topSchools: schools }),
      description: generateRankingDescription({ classificationLabel: "国立", totalCount, topSchools: schools }),
      breadcrumbs: [
        { label: "ホーム", href: "/" },
        { label: "高校偏差値ランキング", href: "/rankings/koukou/" },
        { label: "国立高校" },
      ],
      classificationLabel: "国立",
      currentPage: page,
      perPage,
    },
  };
};
