import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import ReviewStars from "@/components/juku/ReviewStars";
import JukuCard from "@/components/juku/JukuCard";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2 } from "@/utils/juku/config";
import { fetchJukuBrandWithSchools } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuBrand, JukuSchoolListItem } from "@/types";

type Props = {
  brand: JukuBrand;
  schools: JukuSchoolListItem[];
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const brandSlug = params?.brand_id as string;
  const result = await fetchJukuBrandWithSchools(brandSlug);
  if (!result) return { notFound: true };

  setConditionalCacheHeaders(res, result.schools.length);
  return { props: { brand: result.brand, schools: result.schools } };
};

function avgRating(schools: JukuSchoolListItem[]): number | null {
  const rated = schools.filter((s) => s.review_average_rating);
  if (!rated.length) return null;
  return rated.reduce((sum, s) => sum + (s.review_average_rating ?? 0), 0) / rated.length;
}

function allCategories(schools: JukuSchoolListItem[]): string[] {
  const set = new Set<string>();
  schools.forEach((s) => s.JukuSchoolCategory.forEach((c) => set.add(c.category)));
  return Array.from(set);
}

function allPurposes(schools: JukuSchoolListItem[]): string[] {
  const set = new Set<string>();
  schools.forEach((s) => s.JukuSchoolPurpose.forEach((p) => set.add(p.purpose)));
  return Array.from(set);
}

function allYears(schools: JukuSchoolListItem[]): string[] {
  const set = new Set<string>();
  schools.forEach((s) => s.JukuSchoolYear.forEach((y) => set.add(y.year)));
  return Array.from(set);
}

export default function JukuBrandPage({ brand, schools }: Props) {
  const rating = avgRating(schools);
  const totalReviews = schools.reduce((sum, s) => sum + s.total_review_count, 0);
  const categories = allCategories(schools);
  const purposes = allPurposes(schools);
  const years = allYears(schools);
  const title = `${brand.name}の評判・料金・教室一覧`;

  return (
    <>
      <Head>
        <title>{title} | School Station</title>
        <meta
          name="description"
          content={`${brand.name}の口コミ・評判・料金・教室一覧。全国${schools.length}教室の詳細情報をチェック。`}
        />
        <link rel="canonical" href={`https://school-station.jp/juku/${brand.slug}/`} />
        <meta property="og:title" content={`${title} | School Station`} />
        <meta property="og:type" content="website" />
      </Head>

      {/* ヘッダー */}
      <Box sx={{ bgcolor: JUKU_RED_BG, borderBottom: `3px solid ${JUKU_RED}`, py: { xs: 3, sm: 4 } }}>
        <Container maxWidth="lg">
          {/* パンくず */}
          <Box sx={{ display: "flex", gap: 0.75, mb: 2, flexWrap: "wrap" }}>
            {[
              { label: "ホーム", href: "/" },
              { label: "塾を探す", href: "/juku/" },
              { label: brand.name },
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                {i > 0 && <Typography sx={{ color: "#9CA3AF", fontSize: 13 }}>›</Typography>}
                {item.href ? (
                  <Link href={item.href} style={{ textDecoration: "none" }}>
                    <Typography sx={{ fontSize: 13, color: JUKU_RED }}>{item.label}</Typography>
                  </Link>
                ) : (
                  <Typography sx={{ fontSize: 13, color: "#6B7280" }}>{item.label}</Typography>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            {/* ロゴ */}
            <Box
              sx={{
                width: { xs: 72, sm: 96 },
                height: { xs: 72, sm: 96 },
                minWidth: { xs: 72, sm: 96 },
                bgcolor: "#fff",
                border: `2px solid ${JUKU_RED_BG2}`,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {brand.logo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brand.logo_url} alt={brand.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }} />
              ) : (
                <Typography sx={{ fontWeight: 800, fontSize: 28, color: JUKU_RED }}>{brand.name.charAt(0)}</Typography>
              )}
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", sm: "1.75rem" }, color: "#111827", mb: 0.75 }}>
                {brand.name}
              </Typography>

              {rating && (
                <Box sx={{ mb: 1 }}>
                  <ReviewStars rating={rating} count={totalReviews} size="medium" />
                </Box>
              )}

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {brand.is_online && (
                  <Chip label="オンライン対応" size="small" sx={{ bgcolor: JUKU_RED, color: "#fff", fontWeight: 700, fontSize: 11 }} />
                )}
                {categories.map((c) => (
                  <Chip key={c} label={c} size="small" sx={{ bgcolor: JUKU_RED_BG, color: JUKU_RED, fontWeight: 600, fontSize: 11 }} />
                ))}
                {purposes.map((p) => (
                  <Chip key={p} label={p} size="small" sx={{ bgcolor: "#F3F4F6", color: "#374151", fontWeight: 500, fontSize: 11 }} />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          {/* メインコンテンツ */}
          <Grid size={{ xs: 12, md: 8 }}>

            {/* 概要 */}
            {brand.description && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 1.5, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  {brand.name}について
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.8 }}>
                  {brand.description}
                </Typography>
              </Box>
            )}

            {/* 基本情報テーブル */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                基本情報
              </Typography>
              <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <tbody>
                  {[
                    { label: "塾名", value: brand.name },
                    { label: "教室数", value: `全国${schools.length}教室` },
                    { label: "対象学年", value: years.join("・") || "—" },
                    { label: "授業スタイル", value: categories.join("・") || "—" },
                    { label: "目的", value: purposes.join("・") || "—" },
                    { label: "オンライン対応", value: brand.is_online ? "あり" : "なし" },
                  ].map((row) => (
                    <Box
                      component="tr"
                      key={row.label}
                      sx={{ borderBottom: "1px solid #F3F4F6", "&:last-child": { borderBottom: "none" } }}
                    >
                      <Box component="th" sx={{ textAlign: "left", py: 1.5, pr: 2, color: "#6B7280", fontWeight: 600, width: "35%", verticalAlign: "top" }}>
                        {row.label}
                      </Box>
                      <Box component="td" sx={{ py: 1.5, color: "#111827" }}>
                        {row.value}
                      </Box>
                    </Box>
                  ))}
                  {brand.official_site_url && (
                    <Box component="tr">
                      <Box component="th" sx={{ textAlign: "left", py: 1.5, pr: 2, color: "#6B7280", fontWeight: 600, width: "35%" }}>
                        公式サイト
                      </Box>
                      <Box component="td" sx={{ py: 1.5 }}>
                        <a href={brand.official_site_url} target="_blank" rel="noopener noreferrer" style={{ color: JUKU_RED, fontSize: 14 }}>
                          公式サイトを見る
                        </a>
                      </Box>
                    </Box>
                  )}
                </tbody>
              </Box>
            </Box>

            {/* 教室一覧 */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 800, fontSize: 17, color: "#111827", mb: 2 }}>
                <SchoolIcon sx={{ mr: 1, color: JUKU_RED, verticalAlign: "middle", fontSize: 20 }} />
                教室一覧（{schools.length}件）
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {schools.length === 0 ? (
                  <Box sx={{ textAlign: "center", py: 6, bgcolor: "#fff", borderRadius: 2, border: "1px solid #E5E7EB" }}>
                    <Typography sx={{ color: "#9CA3AF", fontSize: 14 }}>教室情報を準備中です</Typography>
                  </Box>
                ) : (
                  schools.map((school) => (
                    <JukuCard key={school.id} school={school} />
                  ))
                )}
              </Box>
            </Box>
          </Grid>

          {/* サイドバー */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* 問い合わせCTA */}
            <Box
              sx={{
                bgcolor: JUKU_RED,
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                color: "#fff",
                mb: 3,
                position: "sticky",
                top: 80,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 15, mb: 0.5 }}>無料で相談・問い合わせ</Typography>
              <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.8)", mb: 2 }}>
                教室や料金についてお気軽にご相談ください
              </Typography>
              {brand.official_site_url && (
                <a href={brand.official_site_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      color: JUKU_RED,
                      py: 1.25,
                      borderRadius: 1.5,
                      fontWeight: 700,
                      fontSize: 14,
                      mb: 1,
                      "&:hover": { opacity: 0.9 },
                    }}
                  >
                    <PublicIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
                    公式サイトへ
                  </Box>
                </a>
              )}
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
                外部サイトへ遷移します
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
