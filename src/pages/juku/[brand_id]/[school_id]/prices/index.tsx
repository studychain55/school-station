import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid } from "@mui/material";
import { JUKU_RED, JUKU_RED_BG } from "@/utils/juku/config";
import { fetchJukuSchoolDetail } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import type { JukuSchool } from "@/types";

type Props = { school: JukuSchool };

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const brandSlug = params?.brand_id as string;
  const schoolSlug = params?.school_id as string;
  const school = await fetchJukuSchoolDetail(brandSlug, schoolSlug);
  if (!school) return { notFound: true };
  setConditionalCacheHeaders(res, school.JukuCourse.length);
  return { props: { school } };
};

export default function JukuSchoolPricesPage({ school }: Props) {
  const sortedCourses = [...school.JukuCourse].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <>
      <Head>
        <title>{school.name}の料金・コース一覧 | School Station</title>
        <meta name="description" content={`${school.name}のコース・料金一覧。月謝・入塾金・年間費用を詳しく掲載。`} />
        <link rel="canonical" href={`https://school-station.jp/juku/${school.JukuBrand.slug}/${school.slug}/prices/`} />
      </Head>

      <Box sx={{ bgcolor: JUKU_RED_BG, borderBottom: `3px solid ${JUKU_RED}`, py: { xs: 3, sm: 4 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 0.75, mb: 2, flexWrap: "wrap" }}>
            {[
              { label: "ホーム", href: "/" },
              { label: "塾を探す", href: "/juku/" },
              { label: school.JukuBrand.name, href: `/juku/${school.JukuBrand.slug}/` },
              { label: school.name, href: `/juku/${school.JukuBrand.slug}/${school.slug}/` },
              { label: "料金" },
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
            {school.name}のコース・料金一覧
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            {sortedCourses.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 10, bgcolor: "#fff", borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Typography sx={{ fontSize: 48, mb: 2 }}>💰</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#374151", mb: 1 }}>料金情報を準備中です</Typography>
                <Typography sx={{ fontSize: 14, color: "#6B7280" }}>公式サイトにてご確認ください。</Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {sortedCourses.map((course) => (
                  <Box key={course.id} sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, overflow: "hidden" }}>
                    <Box sx={{ bgcolor: JUKU_RED, px: 2.5, py: 1.5 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>{course.name}</Typography>
                      {course.target_grade && (
                        <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{course.target_grade}</Typography>
                      )}
                    </Box>
                    <Box sx={{ p: 2.5 }}>
                      <Grid container spacing={2}>
                        {[
                          { label: "月謝", value: course.monthly_fee_min ? (course.monthly_fee_max && course.monthly_fee_max !== course.monthly_fee_min ? `${course.monthly_fee_min.toLocaleString()}〜${course.monthly_fee_max.toLocaleString()}円` : `${course.monthly_fee_min.toLocaleString()}円`) : "—" },
                          { label: "入塾金", value: course.enrollment_fee !== null ? `${course.enrollment_fee.toLocaleString()}円` : "—" },
                          { label: "年間費用", value: course.annual_fee !== null ? `${course.annual_fee.toLocaleString()}円` : "—" },
                        ].map((item) => (
                          <Grid key={item.label} size={{ xs: 4 }}>
                            <Typography sx={{ fontSize: 11, color: "#9CA3AF", mb: 0.25 }}>{item.label}</Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: 14, color: JUKU_RED }}>{item.value}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                      {course.description && (
                        <Typography sx={{ fontSize: 13, color: "#4B5563", mt: 2, lineHeight: 1.7 }}>
                          {course.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5, position: "sticky", top: 80 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827", mb: 1.5, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                料金について
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>
                掲載料金は目安です。コマ数・教科数・学年により異なる場合があります。詳細は公式サイトまたは直接お問い合わせください。
              </Typography>
              {school.official_site_url && (
                <a href={school.official_site_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Box sx={{ bgcolor: JUKU_RED, color: "#fff", py: 1.25, borderRadius: 1.5, fontWeight: 700, fontSize: 14, textAlign: "center", mt: 2, "&:hover": { opacity: 0.88 } }}>
                    公式サイトで確認する
                  </Box>
                </a>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
