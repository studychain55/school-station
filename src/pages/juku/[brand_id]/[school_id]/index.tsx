import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrainIcon from "@mui/icons-material/Train";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import ReviewStars from "@/components/juku/ReviewStars";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2, REVIEW_CATEGORIES } from "@/utils/juku/config";
import { fetchJukuSchoolDetail, fetchRelatedSchools } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import JukuCard from "@/components/juku/JukuCard";
import type { JukuSchool, JukuSchoolListItem } from "@/types";

type Props = { school: JukuSchool; relatedSchools: JukuSchoolListItem[] };

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const brandSlug = params?.brand_id as string;
  const schoolSlug = params?.school_id as string;
  const school = await fetchJukuSchoolDetail(brandSlug, schoolSlug);
  if (!school) return { notFound: true };

  const relatedSchools = await fetchRelatedSchools(
    school.brand_id,
    school.id,
    school.prefecture_id,
    6
  );

  setConditionalCacheHeaders(res, 1);
  return { props: { school, relatedSchools } };
};

function ReviewRatingBar({ label, value }: { label: string; value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
      <Typography sx={{ fontSize: 13, color: "#6B7280", minWidth: 80 }}>{label}</Typography>
      <Box sx={{ flex: 1, bgcolor: "#F3F4F6", borderRadius: 1, height: 8, overflow: "hidden" }}>
        <Box sx={{ width: `${(value / 5) * 100}%`, bgcolor: JUKU_RED, height: "100%", borderRadius: 1 }} />
      </Box>
      <Typography sx={{ fontSize: 13, fontWeight: 700, color: JUKU_RED, minWidth: 28, textAlign: "right" }}>
        {value.toFixed(1)}
      </Typography>
    </Box>
  );
}

export default function JukuSchoolPage({ school, relatedSchools }: Props) {
  const sortedStation = [...school.JukuSchoolStation].sort((a, b) => a.sort_order - b.sort_order);
  const sortedRecommends = [...school.JukuRecommend].sort((a, b) => a.sort_order - b.sort_order);
  const sortedCourses = [...school.JukuCourse].sort((a, b) => a.sort_order - b.sort_order);
  const activeReviews = school.JukuReview.filter((r) => r.rating_total);
  const sortedImages = [...school.JukuImage].sort((a, b) => a.sort_order - b.sort_order);

  const avgRatings = REVIEW_CATEGORIES.map((cat) => {
    const vals = activeReviews.map((r) => r[cat.key] as number | null).filter((v): v is number => v !== null);
    return { label: cat.label, value: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0 };
  });

  const title = `${school.name}の口コミ・料金・アクセス`;

  return (
    <>
      <Head>
        <title>{title} | School Station</title>
        <meta
          name="description"
          content={`${school.name}の詳細情報。口コミ${school.total_review_count}件・評価${school.review_average_rating?.toFixed(1) ?? "—"}・コース料金・アクセス情報をチェック。`}
        />
        <link rel="canonical" href={`https://school-station.jp/juku/${school.JukuBrand.slug}/${school.slug}/`} />
        <meta property="og:title" content={`${title} | School Station`} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: school.name,
              address: { "@type": "PostalAddress", streetAddress: school.address },
              telephone: school.telephone,
              url: school.official_site_url,
              ...(school.review_average_rating && {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: school.review_average_rating,
                  reviewCount: school.total_review_count,
                  bestRating: 5,
                  worstRating: 1,
                },
              }),
            }),
          }}
        />
      </Head>

      {/* ヘッダー */}
      <Box sx={{ bgcolor: JUKU_RED_BG, borderBottom: `3px solid ${JUKU_RED}`, py: { xs: 3, sm: 4 } }}>
        <Container maxWidth="lg">
          {/* パンくず */}
          <Box sx={{ display: "flex", gap: 0.75, mb: 2, flexWrap: "wrap" }}>
            {[
              { label: "ホーム", href: "/" },
              { label: "塾を探す", href: "/juku/" },
              { label: school.JukuBrand.name, href: `/juku/${school.JukuBrand.slug}/` },
              { label: school.name },
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

          <Box sx={{ display: "flex", gap: 2.5, alignItems: "flex-start" }}>
            <Box
              sx={{
                width: { xs: 64, sm: 80 },
                height: { xs: 64, sm: 80 },
                minWidth: { xs: 64, sm: 80 },
                bgcolor: "#fff",
                border: `2px solid ${JUKU_RED_BG2}`,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {school.JukuBrand.logo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={school.JukuBrand.logo_url} alt={school.JukuBrand.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
              ) : (
                <Typography sx={{ fontWeight: 800, fontSize: 24, color: JUKU_RED }}>{school.JukuBrand.name.charAt(0)}</Typography>
              )}
            </Box>
            <Box>
              <Typography sx={{ fontSize: 12, color: "#6B7280", mb: 0.25 }}>{school.JukuBrand.name}</Typography>
              <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.3rem", sm: "1.7rem" }, color: "#111827", mb: 0.75 }}>
                {school.name}
              </Typography>
              {school.review_average_rating ? (
                <ReviewStars rating={school.review_average_rating} count={school.total_review_count} />
              ) : (
                <Typography sx={{ fontSize: 13, color: "#9CA3AF" }}>口コミ募集中</Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          {/* メインコンテンツ */}
          <Grid size={{ xs: 12, md: 8 }}>

            {/* おすすめポイント */}
            {sortedRecommends.length > 0 && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  おすすめポイント
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {sortedRecommends.map((rec, i) => (
                    <Box key={rec.id} sx={{ display: "flex", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          minWidth: 24,
                          bgcolor: JUKU_RED,
                          color: "#fff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {i + 1}
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{rec.title}</Typography>
                        {rec.body && <Typography sx={{ fontSize: 13, color: "#4B5563", mt: 0.5, lineHeight: 1.7 }}>{rec.body}</Typography>}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* 画像ギャラリー */}
            {sortedImages.length > 0 && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  教室の様子
                </Typography>
                <Grid container spacing={1}>
                  {sortedImages.slice(0, 6).map((img) => (
                    <Grid key={img.id} size={{ xs: 6, sm: 4 }}>
                      <Box sx={{ aspectRatio: "4/3", bgcolor: JUKU_RED_BG, borderRadius: 1, overflow: "hidden" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt={img.alt || school.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* 口コミ */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>
                  口コミ・評判
                </Typography>
                <Link href={`/juku/${school.JukuBrand.slug}/${school.slug}/reviews/`} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontSize: 13, color: JUKU_RED }}>すべて見る →</Typography>
                </Link>
              </Box>

              {activeReviews.length === 0 ? (
                <Typography sx={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", py: 4 }}>
                  口コミはまだありません
                </Typography>
              ) : (
                <>
                  {/* 評価サマリー */}
                  {school.review_average_rating && (
                    <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "2.5rem", color: JUKU_RED, lineHeight: 1 }}>
                          {school.review_average_rating.toFixed(1)}
                        </Typography>
                        <ReviewStars rating={school.review_average_rating} showNumber={false} />
                        <Typography sx={{ fontSize: 12, color: "#6B7280", mt: 0.5 }}>{school.total_review_count}件</Typography>
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 200 }}>
                        {avgRatings.filter((r) => r.value > 0).map((r) => (
                          <ReviewRatingBar key={r.label} label={r.label} value={r.value} />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* 最新3件 */}
                  {activeReviews.slice(0, 3).map((review) => (
                    <Box key={review.id} sx={{ borderTop: "1px solid #F3F4F6", pt: 2, mt: 2 }}>
                      <Box sx={{ display: "flex", gap: 1.5, mb: 1 }}>
                        <Box sx={{ width: 36, height: 36, bgcolor: JUKU_RED_BG, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Typography sx={{ fontSize: 14, color: JUKU_RED }}>👤</Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: 13, color: "#374151" }}>
                            {review.user_type || "生徒・保護者"}{review.year_type ? ` / ${review.year_type}` : ""}
                          </Typography>
                          {review.rating_total && <ReviewStars rating={review.rating_total} size="small" />}
                        </Box>
                      </Box>
                      {review.body_total && (
                        <Typography sx={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7, pl: 6 }}>
                          {review.body_total}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </>
              )}
            </Box>

            {/* コース・料金 */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>コース・料金</Typography>
                <Link href={`/juku/${school.JukuBrand.slug}/${school.slug}/prices/`} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontSize: 13, color: JUKU_RED }}>詳細を見る →</Typography>
                </Link>
              </Box>
              {sortedCourses.length === 0 ? (
                <Typography sx={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", py: 3 }}>料金情報を準備中</Typography>
              ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {sortedCourses.slice(0, 4).map((course) => (
                    <Box key={course.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", py: 1.5, borderBottom: "1px solid #F9FAFB" }}>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>{course.name}</Typography>
                        {course.target_grade && (
                          <Typography sx={{ fontSize: 12, color: "#6B7280" }}>{course.target_grade}</Typography>
                        )}
                      </Box>
                      <Typography sx={{ fontWeight: 700, fontSize: 14, color: JUKU_RED, whiteSpace: "nowrap" }}>
                        {course.monthly_fee_min
                          ? `月${course.monthly_fee_min.toLocaleString()}円〜`
                          : "要問い合わせ"}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* 詳細情報テーブル */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                詳細情報
              </Typography>
              <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <tbody>
                  {[
                    { label: "教室名", value: school.name },
                    { label: "住所", value: school.address || "—" },
                    { label: "電話番号", value: school.telephone || "—" },
                    { label: "営業時間", value: school.open_at && school.close_at ? `${school.open_at}〜${school.close_at}` : "—" },
                    { label: "対象学年", value: school.JukuSchoolYear.map((y) => y.year).join("・") || "—" },
                    { label: "授業スタイル", value: school.JukuSchoolCategory.map((c) => c.category).join("・") || "—" },
                    { label: "目的", value: school.JukuSchoolPurpose.map((p) => p.purpose).join("・") || "—" },
                  ].map((row) => (
                    <Box
                      component="tr"
                      key={row.label}
                      sx={{ borderBottom: "1px solid #F3F4F6", "&:last-child": { borderBottom: "none" } }}
                    >
                      <Box component="th" sx={{ textAlign: "left", py: 1.5, pr: 2, color: "#6B7280", fontWeight: 600, width: "35%", verticalAlign: "top" }}>
                        {row.label}
                      </Box>
                      <Box component="td" sx={{ py: 1.5, color: "#111827" }}>{row.value}</Box>
                    </Box>
                  ))}
                </tbody>
              </Box>
            </Box>
          </Grid>

          {/* サイドバー */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 2 }}>
              {/* 問い合わせCTA */}
              <Box sx={{ bgcolor: JUKU_RED, borderRadius: 2, p: 3, color: "#fff", textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, mb: 0.5 }}>
                  無料で問い合わせる
                </Typography>
                <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  体験授業・資料請求も受付中
                </Typography>
                {school.official_site_url && (
                  <a href={school.official_site_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <Box sx={{ bgcolor: "#fff", color: JUKU_RED, py: 1.25, borderRadius: 1.5, fontWeight: 700, fontSize: 14, mb: 1, "&:hover": { opacity: 0.9 } }}>
                      <PublicIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
                      公式サイトへ
                    </Box>
                  </a>
                )}
              </Box>

              {/* アクセス */}
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827", mb: 1.5, pb: 1, borderBottom: "1px solid #F3F4F6" }}>
                  アクセス
                </Typography>
                {school.address && (
                  <Box sx={{ display: "flex", gap: 1, mb: 1.25 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Box>
                      <Typography sx={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{school.address}</Typography>
                      {school.lat && school.lng && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${school.lat},${school.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 12, color: JUKU_RED, textDecoration: "none" }}
                        >
                          Google マップで見る →
                        </a>
                      )}
                    </Box>
                  </Box>
                )}
                {sortedStation.map((st) => (
                  <Box key={st.id} sx={{ display: "flex", gap: 1, mb: 0.75 }}>
                    <TrainIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Typography sx={{ fontSize: 13, color: "#374151" }}>
                      {st.station_name}駅{st.line_name ? `（${st.line_name}）` : ""}
                      {st.walk_minutes ? ` 徒歩${st.walk_minutes}分` : ""}
                    </Typography>
                  </Box>
                ))}
                {school.open_at && school.close_at && (
                  <Box sx={{ display: "flex", gap: 1, mt: 1.25, pt: 1.25, borderTop: "1px solid #F3F4F6" }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Typography sx={{ fontSize: 13, color: "#374151" }}>{school.open_at}〜{school.close_at}</Typography>
                  </Box>
                )}
                {school.telephone && (
                  <Box sx={{ display: "flex", gap: 1, mt: 0.75 }}>
                    <PhoneIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Typography sx={{ fontSize: 13, color: "#374151" }}>{school.telephone}</Typography>
                  </Box>
                )}
              </Box>

              {/* タグ情報 */}
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827", mb: 1.5 }}>授業・対象</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {school.JukuSchoolCategory.map((c) => (
                    <Chip key={c.id} label={c.category} size="small" sx={{ bgcolor: JUKU_RED_BG, color: JUKU_RED, fontWeight: 600, fontSize: 11 }} />
                  ))}
                  {school.JukuSchoolPurpose.map((p) => (
                    <Chip key={p.id} label={p.purpose} size="small" sx={{ bgcolor: "#F3F4F6", color: "#374151", fontWeight: 500, fontSize: 11 }} />
                  ))}
                  {school.JukuSchoolYear.map((y) => (
                    <Chip key={y.id} label={y.year} size="small" sx={{ bgcolor: "#F3F4F6", color: "#374151", fontWeight: 500, fontSize: 11 }} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 同じブランドの他の教室 */}
      {relatedSchools.length > 0 && (
        <Box sx={{ bgcolor: "#F9FAFB", py: { xs: 4, sm: 5 }, borderTop: "1px solid #E5E7EB" }}>
          <Container maxWidth="lg">
            <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.1rem", sm: "1.25rem" }, color: "#111827", mb: 2.5 }}>
              {school.JukuBrand.name}の他の教室
            </Typography>
            <Grid container spacing={2}>
              {relatedSchools.map((s) => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <JukuCard school={s} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Link href={`/juku/${school.JukuBrand.slug}/`} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "inline-block",
                    px: 4, py: 1.25,
                    border: `2px solid ${JUKU_RED}`,
                    borderRadius: 2,
                    color: JUKU_RED,
                    fontWeight: 700,
                    fontSize: 14,
                    transition: "all 0.15s",
                    "&:hover": { bgcolor: JUKU_RED, color: "#fff" },
                  }}
                >
                  {school.JukuBrand.name}の全教室を見る →
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
