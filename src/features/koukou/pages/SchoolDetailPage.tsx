import { Container, Typography, Box, Paper, Card, CardContent, Button, Rating, Divider, Link as MuiLink } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SEO from "@/components/UI/SEO";
import BreadCrumb from "@/components/UI/BreadCrumb";
import FAQ from "@/components/UI/FAQ";
import { generateGoogleMapsUrl } from "@/utils/maps";
import type { MinkouSchoolListItem, Breadcrumb } from "@/types";

type Props = {
  school: MinkouSchoolListItem;
  breadcrumbs: Breadcrumb[];
  canonical: string;
  prefectureTitle?: string;
  relatedSchools?: MinkouSchoolListItem[];
  prefectureSlug?: string;
};

export default function SchoolDetailPage({ school, breadcrumbs, canonical, prefectureTitle, relatedSchools = [], prefectureSlug }: Props) {
  const faqItems = [
    {
      question: `${school.name}の偏差値はどのくらいですか？`,
      answer: `${school.name}の${new Date().getFullYear()}年度の偏差値は${school.deviation_value_max || "データなし"}です。${school.deviation_value_min && school.deviation_value_min !== school.deviation_value_max ? `コース別には${school.deviation_value_min}から${school.deviation_value_max}の幅で分布しています。` : ""}`,
    },
    {
      question: `${school.name}は公立ですか、それとも私立ですか？`,
      answer: `${school.name}は${school.classification === "PUBLIC" ? "公立高校" : school.classification === "PRIVATE" ? "私立高校" : "国立高校"}です。`,
    },
    {
      question: `${school.name}の所在地はどこですか？`,
      answer: school.address ? `${school.name}は${school.address}に所在しています。Google Mapsで詳細な位置情報を確認できます。` : `${school.name}の詳細な所在地は掲載されていません。`,
    },
    {
      question: `${school.name}に関する口コミや評判を確認できますか？`,
      answer: school.review_count && school.review_count > 0 ? `${school.name}には現在${school.review_count}件の評価が寄せられており、平均評価は${school.star_rating ? `${school.star_rating}つ星` : "データなし"}です。` : `${school.name}の評価情報はまだ寄せられていません。`,
    },
    {
      question: `${school.name}の詳細情報をもっと知るにはどうすればよいですか？`,
      answer: `公式サイトをご確認いただくか、学校見学会や説明会への参加をおすすめします。偏差値だけでなく、教育方針や施設、部活動など様々な観点から学校選択をすることが重要です。`,
    },
  ];

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": school.name,
    "address": school.address || undefined,
    "contactType": "General",
    "educationalLevel": "High School",
  };

  const SITE_URL = "https://school-station.com";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": bc.label,
      ...(bc.href ? { "item": `${SITE_URL}${bc.href}` } : {}),
    })),
  };

  return (
    <>
      <SEO
        title={`${school.name} 偏差値【${new Date().getFullYear()}年度版】| School Station`}
        description={`${school.name}の${new Date().getFullYear()}年度偏差値は${school.deviation_value_max || "データなし"}。${prefectureTitle || ""}高校の中での評価や基本情報、進学支援情報をSchool Stationでチェック。`}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
      </Head>

      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <BreadCrumb items={breadcrumbs} />

        {/* Hero Section */}
        <Box sx={{ mb: 4, p: { xs: 2, sm: 3 }, background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)", borderRadius: 2 }}>
          <Typography variant="h1" component="h1" sx={{ fontSize: { xs: "1.4rem", sm: "2rem" }, mb: 1, color: "#0D47A1", fontWeight: 700 }}>
            {school.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#37474F", mb: 1 }}>
            {school.classification === "PUBLIC" ? "公立高校" : school.classification === "PRIVATE" ? "私立高校" : "国立高校"}
            {prefectureTitle && ` • ${prefectureTitle}`}
          </Typography>
        </Box>

        {/* Main Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr" }, gap: 3, mb: 4 }}>
          {/* Left Column - Key Info */}
          <Box>
            {/* Deviation Score Card */}
            <Card sx={{ mb: 3, border: "1px solid #E0E0E0" }}>
              <CardContent>
                <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
                  偏差値情報
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 2 }}>
                  <Box sx={{ p: 2, bgcolor: "#F5F9FF", borderRadius: 1, textAlign: "center" }}>
                    <Typography sx={{ color: "#757575", fontSize: 12, mb: 0.5 }}>
                      最高偏差値
                    </Typography>
                    <Typography sx={{ color: "#1565C0", fontSize: 28, fontWeight: 700 }}>
                      {school.deviation_value_max || "-"}
                    </Typography>
                  </Box>
                  {school.deviation_value_min && school.deviation_value_min !== school.deviation_value_max && (
                    <Box sx={{ p: 2, bgcolor: "#F5F5F5", borderRadius: 1, textAlign: "center" }}>
                      <Typography sx={{ color: "#757575", fontSize: 12, mb: 0.5 }}>
                        最低偏差値
                      </Typography>
                      <Typography sx={{ color: "#424242", fontSize: 28, fontWeight: 700 }}>
                        {school.deviation_value_min}
                      </Typography>
                    </Box>
                  )}
                </Box>
                {school.MinkouCourse && school.MinkouCourse.length > 0 && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>
                      コース別偏差値
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {school.MinkouCourse.filter((c) => c.deviation_value)
                        .sort((a, b) => (b.deviation_value || 0) - (a.deviation_value || 0))
                        .map((course) => (
                          <Box key={course.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1.5, bgcolor: "#FAFAFA", borderRadius: 1 }}>
                            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                              {course.name}
                            </Typography>
                            <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#1565C0" }}>
                              {course.deviation_value}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Basic Info Card */}
            <Card sx={{ mb: 3, border: "1px solid #E0E0E0" }}>
              <CardContent>
                <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
                  基本情報
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box>
                    <Typography sx={{ color: "#757575", fontSize: 12, fontWeight: 600, mb: 0.5 }}>
                      区分
                    </Typography>
                    <Typography>
                      {school.classification === "PUBLIC" ? "公立高校" : school.classification === "PRIVATE" ? "私立高校" : "国立高校"}
                    </Typography>
                  </Box>
                  {school.address && (
                    <Box>
                      <Typography sx={{ color: "#757575", fontSize: 12, fontWeight: 600, mb: 0.5 }}>
                        所在地
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography>{school.address}</Typography>
                        <MuiLink
                          href={generateGoogleMapsUrl(school)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Google Mapsで確認"
                          sx={{ display: "inline-flex", alignItems: "center", color: "#1565C0" }}
                        >
                          <LocationOnIcon sx={{ fontSize: 16 }} />
                        </MuiLink>
                      </Box>
                    </Box>
                  )}
                  {school.gender && (
                    <Box>
                      <Typography sx={{ color: "#757575", fontSize: 12, fontWeight: 600, mb: 0.5 }}>
                        男女別
                      </Typography>
                      <Typography>{school.gender}</Typography>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>

            {/* Description Card */}
            {school.description && (
              <Card sx={{ mb: 3, border: "1px solid #E0E0E0" }}>
                <CardContent>
                  <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
                    説明
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, color: "#424242" }}>
                    {school.description}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Box>

          {/* Right Column - Sidebar */}
          <Box>
            {/* Evaluation Card */}
            {school.star_rating !== null || school.review_count !== null ? (
              <Card sx={{ mb: 3, border: "1px solid #E0E0E0" }}>
                <CardContent>
                  <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
                    利用者評価
                  </Typography>
                  {school.star_rating !== null && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography sx={{ color: "#757575", fontSize: 12, fontWeight: 600, mb: 0.5 }}>
                        平均評価
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Rating value={school.star_rating} readOnly size="small" />
                        <Typography sx={{ fontWeight: 600 }}>
                          {school.star_rating.toFixed(1)}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  {school.review_count !== null && (
                    <Box>
                      <Typography sx={{ color: "#757575", fontSize: 12, fontWeight: 600, mb: 0.5 }}>
                        評価数
                      </Typography>
                      <Typography>
                        {school.review_count}件
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ) : null}

            {/* Action Card */}
            <Card sx={{ border: "1px solid #E0E0E0" }}>
              <CardContent>
                <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
                  アクション
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {school.address && (
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<LocationOnIcon />}
                      href={generateGoogleMapsUrl(school)}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ justifyContent: "flex-start" }}
                    >
                      Google Mapsで見る
                    </Button>
                  )}
                  {school.source_url && (
                    <Button
                      variant="outlined"
                      fullWidth
                      endIcon={<OpenInNewIcon />}
                      href={school.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      公式サイト
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Related Schools Section */}
        {relatedSchools && relatedSchools.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.25rem", fontWeight: 600 }}>
              {prefectureTitle}の関連高校
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2 }}>
              {relatedSchools.slice(0, 6).map((relatedSchool) => (
                <Link
                  key={relatedSchool.id}
                  href={`/rankings/koukou/p-${prefectureSlug}/schools/${relatedSchool.id}/`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        transform: "translateY(-2px)",
                      },
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h3" component="h3" sx={{ fontSize: "0.95rem", fontWeight: 600, mb: 1, color: "#0D47A1" }}>
                        {relatedSchool.name}
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Box sx={{ p: 1, bgcolor: "#F5F9FF", borderRadius: 0.5, textAlign: "center" }}>
                          <Typography sx={{ color: "#757575", fontSize: 11 }}>
                            偏差値
                          </Typography>
                          <Typography sx={{ color: "#1565C0", fontSize: 18, fontWeight: 700 }}>
                            {relatedSchool.deviation_value_max || "-"}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: 12, color: "#757575" }}>
                          {relatedSchool.classification === "PUBLIC" ? "公立" : relatedSchool.classification === "PRIVATE" ? "私立" : "国立"}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Box>
          </Box>
        )}

        {/* FAQ */}
        <Box sx={{ mb: 4 }}>
          <FAQ items={faqItems} />
        </Box>

        {/* Related Column Articles Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.25rem", fontWeight: 600 }}>
            受験コラムを読む
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2 }}>
            <Link href="/column/hensachi-guide/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  border: "1px solid #E0E0E0",
                  borderLeft: "4px solid #FF6F00",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transform: "translateY(-2px)",
                    borderLeftColor: "#E65100",
                  },
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#0D47A1", lineHeight: 1.4 }}>
                  偏差値の見方・使い方を徹底解説
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#757575" }}>
                  偏差値の計算方法や見方、受験戦略への活かし方を初心者向けに解説
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/koko-choice/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  border: "1px solid #E0E0E0",
                  borderLeft: "4px solid #FF6F00",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transform: "translateY(-2px)",
                    borderLeftColor: "#E65100",
                  },
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#0D47A1", lineHeight: 1.4 }}>
                  志望校の選び方｜受験校を決める5つの基準
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#757575" }}>
                  学力レベル・学科・教育方針など、最適な志望校選びの基準を解説
                </Typography>
              </Paper>
            </Link>
            <Link href="/column/nyushi-schedule/" style={{ textDecoration: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  border: "1px solid #E0E0E0",
                  borderLeft: "4px solid #FF6F00",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transform: "translateY(-2px)",
                    borderLeftColor: "#E65100",
                  },
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#0D47A1", lineHeight: 1.4 }}>
                  高校受験のスケジュール｜中3の年間スケジュール
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#757575" }}>
                  春の基礎固めから冬の追い込みまで、時期別の勉強法を解説
                </Typography>
              </Paper>
            </Link>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Link href="/column/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#1565C0", fontSize: 14, fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
                すべてのコラムを見る →
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* SEO Text Section */}
        <Box sx={{ mb: 4, p: 2, bgcolor: "#F5F5F5", borderRadius: 1 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem", mb: 2, fontWeight: 600 }}>
            {school.name}について
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242", mb: 1.5 }}>
            {school.name}は{school.classification === "PUBLIC" ? "公立の" : school.classification === "PRIVATE" ? "私立の" : "国立の"}高校です。
            {school.deviation_value_max && (
              <>
                {new Date().getFullYear()}年度の偏差値は{school.deviation_value_max}で、
                {school.deviation_value_max >= 70 ? "難関校" : school.deviation_value_max >= 60 ? "上位校" : "標準的な"}レベルの学校となっています。
              </>
            )}
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
            School Stationでは{school.name}の詳細な偏差値情報や所在地、評価などをまとめています。
            志望校選びの参考として、これらの情報をぜひお役立てください。
            学校の教育方針や部活動、施設など、偏差値以外の情報も学校選択の重要な要素です。
          </Typography>
        </Box>
      </Container>
    </>
  );
}
