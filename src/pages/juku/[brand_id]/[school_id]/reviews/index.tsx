import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid, Chip } from "@mui/material";
import ReviewStars from "@/components/juku/ReviewStars";
import { JUKU_RED, JUKU_RED_BG, REVIEW_CATEGORIES } from "@/utils/juku/config";
import { fetchJukuSchoolDetail } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuSchool, JukuReview } from "@/types";

type Props = { school: JukuSchool };

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const school = await fetchJukuSchoolDetail(params?.brand_id as string, params?.school_id as string);
  if (!school) return { notFound: true };
  setConditionalCacheHeaders(res, school.total_review_count);
  return { props: { school } };
};

function ReviewCard({ review }: { review: JukuReview }) {
  return (
    <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5 }}>
      <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
        <Box sx={{ width: 40, height: 40, minWidth: 40, bgcolor: JUKU_RED_BG, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: 18 }}>👤</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 13, color: "#374151" }}>
            {review.user_type || "生徒・保護者"}
            {review.year_type ? ` / ${review.year_type}` : ""}
            {review.purpose ? ` / ${review.purpose}` : ""}
          </Typography>
          {review.rating_total && <ReviewStars rating={review.rating_total} size="small" />}
          {review.frequency && (
            <Typography sx={{ fontSize: 12, color: "#9CA3AF" }}>通塾頻度：{review.frequency}</Typography>
          )}
        </Box>
      </Box>

      {/* 各評価 */}
      <Grid container spacing={1} sx={{ mb: 1.5 }}>
        {REVIEW_CATEGORIES.slice(1).map((cat) => {
          const val = review[cat.key] as number | null;
          if (!val) return null;
          return (
            <Grid key={cat.key} size={{ xs: 6, sm: 4 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6B7280" }}>
                <span>{cat.label}</span>
                <Typography component="span" sx={{ fontWeight: 700, color: JUKU_RED, fontSize: 12 }}>{val.toFixed(1)}</Typography>
              </Box>
              <Box sx={{ bgcolor: "#F3F4F6", borderRadius: 0.5, height: 4, mt: 0.5, overflow: "hidden" }}>
                <Box sx={{ width: `${(val / 5) * 100}%`, bgcolor: JUKU_RED, height: "100%" }} />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {review.body_total && (
        <Box sx={{ mb: 1 }}>
          <Chip label="総合" size="small" sx={{ bgcolor: JUKU_RED_BG, color: JUKU_RED, fontSize: 10, fontWeight: 700, height: 18, mb: 0.75, "& .MuiChip-label": { px: 0.75 } }} />
          <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>{review.body_total}</Typography>
        </Box>
      )}
      {review.body_teacher && (
        <Box sx={{ mb: 1 }}>
          <Chip label="講師" size="small" sx={{ bgcolor: "#F3F4F6", color: "#6B7280", fontSize: 10, fontWeight: 700, height: 18, mb: 0.75, "& .MuiChip-label": { px: 0.75 } }} />
          <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>{review.body_teacher}</Typography>
        </Box>
      )}
      {review.body_advantage && (
        <Box>
          <Chip label="メリット" size="small" sx={{ bgcolor: "#F3F4F6", color: "#6B7280", fontSize: 10, fontWeight: 700, height: 18, mb: 0.75, "& .MuiChip-label": { px: 0.75 } }} />
          <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>{review.body_advantage}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default function JukuReviewsPage({ school }: Props) {
  const activeReviews = school.JukuReview.filter((r) => r.is_active !== false);

  const avgRatings = REVIEW_CATEGORIES.map((cat) => {
    const vals = activeReviews.map((r) => r[cat.key] as number | null).filter((v): v is number => v !== null);
    return { label: cat.label, value: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0 };
  });

  return (
    <>
      <Head>
        <title>{school.name}の口コミ・評判 | School Station</title>
        <meta name="description" content={`${school.name}の口コミ${activeReviews.length}件。講師・料金・カリキュラムなど項目別の評価を掲載。`} />
        <link rel="canonical" href={`https://school-station.jp/juku/${school.JukuBrand.slug}/${school.slug}/reviews/`} />
      </Head>

      <Box sx={{ bgcolor: JUKU_RED_BG, borderBottom: `3px solid ${JUKU_RED}`, py: { xs: 3, sm: 4 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 0.75, mb: 2, flexWrap: "wrap" }}>
            {[
              { label: "ホーム", href: "/" },
              { label: "塾を探す", href: "/juku/" },
              { label: school.JukuBrand.name, href: `/juku/${school.JukuBrand.slug}/` },
              { label: school.name, href: `/juku/${school.JukuBrand.slug}/${school.slug}/` },
              { label: "口コミ" },
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
          <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", sm: "1.75rem" }, color: "#111827" }}>
            {school.name}の口コミ・評判
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#6B7280", mt: 0.5 }}>{activeReviews.length}件の口コミ</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            {activeReviews.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 10, bgcolor: "#fff", borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Typography sx={{ fontSize: 48, mb: 2 }}>💬</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#374151" }}>口コミはまだありません</Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {activeReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </Box>
            )}
          </Grid>

          {/* サマリーサイドバー */}
          <Grid size={{ xs: 12, md: 4 }}>
            {school.review_average_rating && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5, position: "sticky", top: 80 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  評価サマリー
                </Typography>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "2.5rem", color: JUKU_RED, lineHeight: 1 }}>
                    {school.review_average_rating.toFixed(1)}
                  </Typography>
                  <ReviewStars rating={school.review_average_rating} showNumber={false} size="large" />
                  <Typography sx={{ fontSize: 12, color: "#6B7280", mt: 0.5 }}>{school.total_review_count}件のレビュー</Typography>
                </Box>
                {avgRatings.filter((r) => r.value > 0).map((r) => (
                  <Box key={r.label} sx={{ mb: 0.75 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
                      <Typography sx={{ fontSize: 12, color: "#6B7280" }}>{r.label}</Typography>
                      <Typography sx={{ fontSize: 12, fontWeight: 700, color: JUKU_RED }}>{r.value.toFixed(1)}</Typography>
                    </Box>
                    <Box sx={{ bgcolor: "#F3F4F6", borderRadius: 0.5, height: 6, overflow: "hidden" }}>
                      <Box sx={{ width: `${(r.value / 5) * 100}%`, bgcolor: JUKU_RED, height: "100%", borderRadius: 0.5 }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
