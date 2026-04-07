import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import RankingTable from "@/components/RankingTable";
import StatCardGrid from "@/components/StatCardGrid";
import Pagination from "@/components/Pagination";
import type { RankingPageProps } from "@/types";
import prefectures from "@/data/prefectures";
import { REGIONS } from "@/data/regions";
import { generateFAQItems } from "@/utils/seo/generateRankingMetadata";

type Props = RankingPageProps & {
  canonical: string;
};

const CLASSIFICATION_LINKS = [
  { label: "全て", href: "/rankings/koukou/", classification: undefined },
  { label: "公立高校", href: "/rankings/koukou/public/", classification: "PUBLIC" },
  { label: "私立高校", href: "/rankings/koukou/private/", classification: "PRIVATE" },
  { label: "国立高校", href: "/rankings/koukou/national/", classification: "NATIONAL" },
];

export default function KoukouRankingPage(props: Props) {
  const {
    schools,
    totalCount,
    title,
    description,
    breadcrumbs,
    prefectureTitle,
    prefectureSlug,
    classificationLabel,
    regionTitle,
    canonical,
    currentPage,
    perPage,
  } = props;

  const faqItems = generateFAQItems({
    schools,
    totalCount,
    topSchools: schools.slice(0, 7),
    prefectureTitle,
    classificationLabel,
    regionTitle,
  });

  const top5 = schools.slice(0, 5);
  const startRank = (currentPage - 1) * perPage + 1;

  const areaLabel = prefectureTitle || regionTitle || "";
  const classLabel = classificationLabel ? ` ${classificationLabel}` : "";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        schools={schools.slice(0, 10).map((s, i) => ({ name: s.name, position: i + 1 }))}
        isRankingPage={true}
      />
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <BreadCrumb items={breadcrumbs} />

        {/* Page Hero */}
        <Box
          sx={{
            mb: 3,
            p: { xs: 2.5, sm: 3 },
            background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, mb: 1, color: "#0D47A1" }}
          >
            {areaLabel}{classLabel} 高校偏差値ランキング
          </Typography>
          <Typography variant="body2" sx={{ color: "#37474F", lineHeight: 1.6 }}>
            {description.slice(0, 140)}
          </Typography>
        </Box>

        {/* Stat Cards */}
        <StatCardGrid schools={schools} totalCount={totalCount} />

        {/* Classification Filter */}
        <Box
          component="nav"
          aria-label="分類フィルター"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: 1,
            mb: 3,
          }}
        >
          {CLASSIFICATION_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
              <Button
                variant={classificationLabel === link.label || (!classificationLabel && !link.classification) ? "contained" : "outlined"}
                fullWidth
                size="small"
                sx={{ fontSize: { xs: 12, sm: 13 }, borderRadius: 4, py: 0.8 }}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* TOP 5 Highlight (only on page 1) */}
        {currentPage === 1 && top5.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              偏差値トップ5
            </Typography>
            <RankingTable schools={top5} startRank={1} prefectureSlug={prefectureSlug} />
          </Box>
        )}

        {/* Full Ranking */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            全ランキング（{totalCount.toLocaleString()}校）
          </Typography>
          <RankingTable schools={schools} startRank={startRank} prefectureSlug={prefectureSlug} />
        </Box>

        {/* Pagination */}
        <Pagination totalCount={totalCount} currentPage={currentPage} perPage={perPage} />

        {/* Region Links */}
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            地方別ランキング
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: 1 }}>
            {REGIONS.map((region) => (
              <Link key={region.slug} href={`/rankings/koukou/region/${region.slug}/`} style={{ textDecoration: "none" }}>
                <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 13, py: 0.8 }}>
                  {region.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>

        {/* Prefecture Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            都道府県別ランキング
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }, gap: 1 }}>
            {prefectures.map((pref) => (
              <Link key={pref.slug} href={`/rankings/koukou/p-${pref.slug}/`} style={{ textDecoration: "none" }}>
                <Button variant="outlined" fullWidth size="small" sx={{ fontSize: 12, minHeight: 36 }}>
                  {pref.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>

        {/* SEO Text Section */}
        <Box sx={{ mb: 4, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1rem", mb: 1.5, fontWeight: 600 }}>
            {areaLabel || "全国"}{classLabel} 高校偏差値ランキングについて
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            {prefectureTitle && (
              <>
                {prefectureTitle}の高校を偏差値順にランキング。School Station では{totalCount}校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
                <br />
                <br />
                偏差値は学校の学力レベルを示す指標で、50を平均として上下に分布します。偏差値が高いほど入試難易度が高い傾向にあります。{prefectureTitle}の中でも偏差値トップの高校は入試競争が激しくなるため、志願倍率や入試結果も合わせてご確認ください。
              </>
            )}
            {regionTitle && (
              <>
                {regionTitle}地方の高校を偏差値順にランキング。School Station では{totalCount}校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
                <br />
                <br />
                {regionTitle}内の都道府県ごとに偏差値の分布が異なります。詳細は各都道府県のランキングページでご確認ください。
              </>
            )}
            {!prefectureTitle && !regionTitle && (
              <>
                全国の高校を偏差値順にランキング。School Station では{totalCount}校の高校の偏差値データを網羅しており、進路選択や学校選びに役立つ情報を提供しています。上記のランキングに掲載されている学校は、文部科学省や各校が発表している{CURRENT_YEAR}年度の最新偏差値データをもとに作成しています。
                <br />
                <br />
                偏差値は学校の学力レベルを示す指標で、50を平均として上下に分布します。各都道府県や地方ごとのランキングもご確認いただけます。自分の志望エリアに合わせて、最適な学校選択をしてください。
              </>
            )}
          </Typography>
        </Box>

        {/* FAQ */}
        <FAQ items={faqItems} />
      </Container>
    </>
  );
}

const CURRENT_YEAR = new Date().getFullYear();
