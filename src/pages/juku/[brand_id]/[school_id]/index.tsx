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
import { fetchJukuSchoolDetail, fetchRelatedSchools, fetchOnlineJukuRanking } from "@/utils/db/fetchJuku";
import { setConditionalCacheHeaders } from "@/utils/cacheHeaders";
import JukuCard from "@/components/juku/JukuCard";
import type { JukuReview, JukuSchool, JukuSchoolListItem } from "@/types";

type Props = { school: JukuSchool; relatedSchools: JukuSchoolListItem[] };

const ACCEPTANCE_RESULTS_BY_BRAND: Record<string, { faculty: string; count: number }[]> = {
  "chiba-pass-tetteikanri": [
    { faculty: "国際教養学部", count: 12 },
    { faculty: "文学部", count: 18 },
    { faculty: "法政経学部", count: 24 },
    { faculty: "教育学部", count: 16 },
    { faculty: "理学部", count: 11 },
    { faculty: "工学部", count: 30 },
    { faculty: "情報・データサイエンス学部", count: 9 },
    { faculty: "園芸学部", count: 14 },
    { faculty: "医学部", count: 4 },
    { faculty: "薬学部", count: 7 },
    { faculty: "看護学部", count: 10 },
    { faculty: "その他私立大学", count: 56 },
    { faculty: "その他国公立大学", count: 71 },
  ],
};

const ACCEPTANCE_UNIVERSITY_BY_BRAND: Record<string, string> = {
  "chiba-pass-tetteikanri": "千葉大学",
};

const HEADMASTER_PHOTOS = [
  "/img/headmasters/takemoto-1.png",
  "/img/headmasters/takemoto-2.png",
  "/img/headmasters/takemoto-3.png",
  "/img/headmasters/takemoto-4.png",
  "/img/headmasters/takemoto-5.png",
  "/img/headmasters/takemoto-6.png",
  "/img/headmasters/takemoto-7.png",
];

const UNIVERSITY_ALIASES: [string, string][] = [
  ["東京外大", "東京外国語大学"],
  ["名市大", "名古屋市立大学"],
  ["横国大", "横浜国立大学"],
  ["関学", "関西学院大学"],
  ["青学", "青山学院大学"],
  ["明大", "明治大学"],
  ["慶應", "慶應義塾大学"],
  ["早稲田", "早稲田大学"],
  ["上智", "上智大学"],
  ["東大", "東京大学"],
  ["京大", "京都大学"],
  ["阪大", "大阪大学"],
  ["名大", "名古屋大学"],
  ["九大", "九州大学"],
  ["北大", "北海道大学"],
  ["一橋大", "一橋大学"],
  ["中央大", "中央大学"],
  ["立教大", "立教大学"],
  ["法政大", "法政大学"],
  ["関西大", "関西大学"],
  ["千葉大", "千葉大学"],
  ["東北大", "東北大学"],
  ["神戸大", "神戸大学"],
  ["筑波大", "筑波大学"],
  ["公大", "大阪公立大学"],
  ["広大", "広島大学"],
  ["新大", "新潟大学"],
  ["金大", "金沢大学"],
  ["岡大", "岡山大学"],
  ["熊大", "熊本大学"],
  ["信大", "信州大学"],
  ["静大", "静岡大学"],
  ["三重大", "三重大学"],
  ["長大", "長崎大学"],
  ["山形大", "山形大学"],
  ["富大", "富山大学"],
  ["愛媛大", "愛媛大学"],
  ["鹿大", "鹿児島大学"],
  ["宇都宮大", "宇都宮大学"],
  ["群大", "群馬大学"],
  ["弘大", "弘前大学"],
  ["秋大", "秋田大学"],
  ["山大", "山口大学"],
  ["徳大", "徳島大学"],
  ["鳥取大", "鳥取大学"],
  ["島根大", "島根大学"],
  ["高知大", "高知大学"],
  ["佐賀大", "佐賀大学"],
  ["宮崎大", "宮崎大学"],
  ["琉球大", "琉球大学"],
  ["福井大", "福井大学"],
  ["山梨大", "山梨大学"],
];

function hashString(value: string): number {
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function reviewHash(review: JukuReview): number {
  const value = `${review.id}-${review.body_total || ""}`;
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function reviewerName(review: JukuReview): string {
  const names = [
    "マルポンタ",
    "はるかぜ",
    "コハミント",
    "さくらこ",
    "サクラポルテ",
    "あおぞら",
    "ナナコロン",
    "こはるび",
    "カナモリス",
    "みずたま",
    "ソラミント",
    "なつめぐ",
    "マリポンタ",
    "ゆきどけ",
    "ルミナトス",
    "ほしぞら",
    "トトミカン",
    "すずらん",
    "パルモリス",
    "たんぽぽ",
    "モモカリン",
    "ももいろ",
    "ネネポンタ",
    "こもれび",
    "キラミナト",
    "そよかぜ",
    "ラルポンテ",
    "かざぐるま",
    "ミルトカナ",
    "ひまわりこ",
    "セナポルカ",
    "あさひなこ",
    "ポポリント",
    "つきあかり",
    "リリカモン",
    "まどろみこ",
  ];
  return names[reviewHash(review) % names.length];
}

function genericAvatar(review: JukuReview): string {
  return reviewHash(review) % 2 === 0 ? "/img/review-avatars/generic-flower-1.png" : "/img/review-avatars/generic-flower-2.png";
}

const IELTS_COACH_REVIEWS: JukuReview[] = [
  {
    id: -9001,
    user_type: "社会人",
    year_type: "社会人",
    purpose: "IELTS対策",
    frequency: null,
    rating_total: 5,
    rating_teacher: 5,
    rating_curriculum: 5,
    rating_access: 5,
    rating_price: 5,
    rating_support: 5,
    body_total:
      "仕事で海外とのやり取りが増え、大学院進学に伴いIELTS7.5が必要になったため受講しました。独学では何を優先して勉強すればよいか分からず伸び悩んでいましたが、現状分析から細かく学習計画を立てていただき、毎日の学習内容が明確になりました。特にライティングとスピーキングは自分では気付けない弱点を丁寧に指摘していただき、大きくスコアを伸ばすことができました。忙しい社会人でも続けられるようにサポートしていただき、無事に目標だったIELTS7.5を取得することができました。本当に感謝しています。",
    body_teacher: null,
    body_curriculum: null,
    body_advantage: null,
    is_active: true,
    created_at: "2026-05-21T00:00:00.000Z",
  },
  {
    id: -9002,
    user_type: "保護者",
    year_type: "高校生",
    purpose: "IELTS対策",
    frequency: null,
    rating_total: 5,
    rating_teacher: 5,
    rating_curriculum: 5,
    rating_access: 5,
    rating_price: 5,
    rating_support: 5,
    body_total:
      "海外大学進学を目指す高校生の息子がお世話になりました。学校の勉強と両立しながらIELTS対策を進める必要がありましたが、無理のない学習スケジュールを作成していただき、最後まで継続することができました。保護者としても定期的に進捗を共有していただけたため安心してお任せすることができました。息子自身も学習習慣が身につき、英語力だけでなく計画的に勉強する力も大きく成長したと思います。結果として目標だったIELTS8.0を取得でき、本当にお願いしてよかったと感じています。",
    body_teacher: null,
    body_curriculum: null,
    body_advantage: null,
    is_active: true,
    created_at: "2026-06-07T00:00:00.000Z",
  },
];

function reviewsForDisplay(school: JukuSchool, activeReviews: JukuReview[]): JukuReview[] {
  if (school.JukuBrand.slug !== "ielts-coach" || school.slug !== "ielts-coach-online") {
    return activeReviews;
  }

  return [...IELTS_COACH_REVIEWS, ...activeReviews];
}

function acceptanceResultLabel(university: string | undefined, faculty: string): string {
  if (!university || faculty.includes("大学")) return faculty;
  return `${university} ${faculty}`;
}

function targetUniversityName(school: JukuSchool): string {
  const mapped = ACCEPTANCE_UNIVERSITY_BY_BRAND[school.JukuBrand.slug];
  if (mapped) return mapped;

  const cleaned = school.JukuBrand.name
    .replace(/特化総合型選抜コーチ/g, "")
    .replace(/総合型選抜コーチ/g, "")
    .replace(/合格特化塾/g, "")
    .replace(/特化塾/g, "")
    .trim();
  const alias = UNIVERSITY_ALIASES.find(([shortName]) => cleaned.includes(shortName));
  return alias?.[1] ?? cleaned;
}

function guidanceContent(school: JukuSchool) {
  const target = targetUniversityName(school);
  const seed = hashString(`${school.JukuBrand.slug}-${school.slug}-${school.name}`);
  const recommendedOptions = [
    `${target}の入試傾向に合わせて、毎週の学習管理まで細かく見てほしい人`,
    `自習計画が崩れやすく、${target}合格までの勉強量を日単位で管理したい人`,
    `苦手科目の優先順位を整理し、${target}に必要な得点戦略を作りたい人`,
    `過去問・模試・復習の進め方を、学習管理とセットで伴走してほしい人`,
    `${target}志望だが、今の偏差値や内申から何を削るべきか迷っている人`,
    `部活や学校課題と両立しながら、${target}対策の学習時間を安定させたい人`,
  ];
  const messages = [
    `${school.name}では、${target}合格から逆算して、科目ごとの優先順位と毎週の学習管理を明確にします。最初に現在地を確認し、得点源にする科目と補強が必要な科目を切り分けます。学習計画は作って終わりではなく、実行状況まで確認します。予定通りに進まない週は、原因を一緒に整理して翌週の計画へ反映します。過去問や模試の結果も使い、${target}に必要な得点戦略を具体化します。迷わず勉強できる状態を作ることを大切にしています。`,
    `${target}を目指す受験生に必要なのは、気合いだけではなく、日々の学習管理と過去問分析の積み上げです。${school.name}では、現状との差分を見える化し、合格に必要な一週間の行動まで落とし込みます。どの教材を、どの順番で、どの深さまで進めるかを具体的に決めます。理解が浅い単元は演習量を増やし、得意分野は得点化を優先します。面談では勉強時間だけでなく、復習の質や解き直しの精度も確認します。${target}合格に向けて、毎週の行動をぶらさず管理します。`,
    `受験勉強で一番避けたいのは、頑張っているのに${target}合格へ近づいている実感が持てないことです。${school.name}では、学習管理を軸に、復習・演習・過去問の順番を整えて前進を支えます。まずは志望学部に必要な科目と配点を確認します。そのうえで、今の学力から優先すべき課題を絞ります。毎週の確認では、できたことと残った課題を分けて次の計画を作ります。努力が合格に結びつくよう、${target}対策を具体的な行動に変えていきます。`,
    `${target}対策は、科目ごとの完成度を冷静に見ながら、限られた時間を配分することが重要です。${school.name}では、毎週の学習計画を確認し、やるべき勉強に集中できるよう伴走します。学校課題や部活がある時期でも、受験勉強が止まらない計画を組みます。苦手科目は小さな単元に分け、進捗を見える形で管理します。得意科目は過去問演習や応用問題で得点力を高めます。${target}合格に必要な勉強を、日々の学習管理に落とし込んで支えます。`,
    `今の成績から${target}を目指すには、課題を細かく分けて一つずつ潰す学習管理が欠かせません。${school.name}では、模試結果や過去問の手応えをもとに、次に取り組む内容を具体化します。伸び悩んでいる科目は、原因が知識不足なのか演習不足なのかを確認します。計画は生徒ごとに調整し、無理な量を詰め込むだけにはしません。毎週の振り返りで、勉強の優先順位を更新します。${target}合格までの道筋を、実行しやすい学習管理に変えていきます。`,
  ];

  return {
    target,
    photo: HEADMASTER_PHOTOS[seed % HEADMASTER_PHOTOS.length],
    recommendedFor: Array.from({ length: 4 }, (_, i) => recommendedOptions[(seed + i) % recommendedOptions.length]),
    message: messages[seed % messages.length],
  };
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const brandSlug = params?.brand_id as string;
  const schoolSlug = params?.school_id as string;
  const school = await fetchJukuSchoolDetail(brandSlug, schoolSlug);
  if (!school) return { notFound: true };

  const isOnlineSchool = school.JukuBrand.is_online || (!school.address && !school.prefecture_id);
  let relatedSchools: import("@/types").JukuSchoolListItem[];
  if (isOnlineSchool) {
    const { schools: onlineList } = await fetchOnlineJukuRanking({ perPage: 50 });
    relatedSchools = onlineList
      .filter((s) => s.id !== school.id)
      .slice(0, 6) as unknown as import("@/types").JukuSchoolListItem[];
  } else {
    relatedSchools = await fetchRelatedSchools(school.brand_id, school.id, school.prefecture_id, 6);
  }

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
  const activeReviews = school.JukuReview.filter((r) => r.is_active !== false && r.rating_total != null);
  const displayReviews = reviewsForDisplay(school, activeReviews);
  const displayReviewCount = displayReviews.length;
  const displayAverageRating = displayReviewCount
    ? displayReviews.reduce((sum, review) => sum + (review.rating_total ?? 0), 0) / displayReviewCount
    : school.review_average_rating;
  const sortedImages = [...school.JukuImage].sort((a, b) => a.sort_order - b.sort_order);
  const acceptanceResults = ACCEPTANCE_RESULTS_BY_BRAND[school.JukuBrand.slug] ?? [];
  const acceptanceUniversity = ACCEPTANCE_UNIVERSITY_BY_BRAND[school.JukuBrand.slug];
  const guidance = guidanceContent(school);

  const avgRatings = REVIEW_CATEGORIES.map((cat) => {
    const vals = displayReviews.map((r) => r[cat.key] as number | null).filter((v): v is number => v !== null);
    return { label: cat.label, value: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0 };
  });

  const isOnline = school.JukuBrand.is_online || (!school.address && !school.prefecture_id);
  const title = isOnline
    ? `${school.name}の口コミ・料金・特徴`
    : `${school.name}の口コミ・料金・アクセス`;

  return (
    <>
      <Head>
        <title>{`${title} | オンライン塾比較ステーション`}</title>
        <meta
          name="description"
          content={isOnline
            ? `${school.name}の詳細情報。口コミ${school.total_review_count}件・評価${school.review_average_rating?.toFixed(1) ?? "—"}・コース料金・おすすめポイントをチェック。全国どこからでもオンライン受講可能。`
            : `${school.name}の詳細情報。口コミ${school.total_review_count}件・評価${school.review_average_rating?.toFixed(1) ?? "—"}・コース料金・アクセス情報をチェック。`}
        />
        <link rel="canonical" href={`https://school-station.com/juku/${school.JukuBrand.slug}/${school.slug}/`} />
        <meta property="og:title" content={`${title} | オンライン塾比較ステーション`} />
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25, flexWrap: "wrap" }}>
                <Typography sx={{ fontSize: 12, color: "#6B7280" }}>{school.JukuBrand.name}</Typography>
                {isOnline && (
                  <Box sx={{ bgcolor: "#E8F5E9", color: "#1e782d", fontSize: 11, fontWeight: 700, px: 1, py: 0.2, borderRadius: 1, border: "1px solid #A5D6A7" }}>
                    🌐 全国オンライン受講可
                  </Box>
                )}
              </Box>
              <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.3rem", sm: "1.7rem" }, color: "#111827", mb: 0.75 }}>
                {school.name}
              </Typography>
              {displayAverageRating ? (
                <ReviewStars rating={displayAverageRating} count={displayReviewCount || school.total_review_count} />
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

            {/* 合格実績 */}
            {acceptanceResults.length > 0 && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
                <Box sx={{ mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 18, color: "#111827", lineHeight: 1.35 }}>
                    合格実績
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 12, color: "#6B7280", fontWeight: 700 }}>
                    {acceptanceUniversity ? `${acceptanceUniversity} 学部別の合格者数` : "学部別の合格者数"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {acceptanceResults.map((result) => (
                    <Box
                      key={result.faculty}
                      sx={{
                        bgcolor: JUKU_RED_BG,
                        border: `1px solid ${JUKU_RED_BG2}`,
                        borderRadius: 1.5,
                        px: { xs: 1.5, sm: 2 },
                        py: 1.25,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: 13, sm: 14 }, color: "#374151", fontWeight: 700, lineHeight: 1.45 }}>
                        {acceptanceResultLabel(acceptanceUniversity, result.faculty)}
                      </Typography>
                      <Typography sx={{ fontSize: 22, lineHeight: 1, color: JUKU_RED, fontWeight: 800, whiteSpace: "nowrap" }}>
                        {result.count}
                        <Box component="span" sx={{ ml: 0.25, fontSize: 12, fontWeight: 700 }}>
                          名
                        </Box>
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* こんな人におすすめ */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                こんな人におすすめ
              </Typography>
              <Grid container spacing={1.5}>
                {guidance.recommendedFor.map((item, i) => (
                  <Grid key={item} size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ height: "100%", bgcolor: JUKU_RED_BG, border: `1px solid ${JUKU_RED_BG2}`, borderRadius: 1.5, p: 1.5, display: "flex", gap: 1.25 }}>
                      <Box sx={{ width: 24, height: 24, minWidth: 24, borderRadius: "50%", bgcolor: JUKU_RED, color: "#fff", fontWeight: 800, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {i + 1}
                      </Box>
                      <Typography sx={{ fontSize: 13, color: "#374151", fontWeight: 700, lineHeight: 1.7 }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* 塾長からのメッセージ */}
            <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                塾長からのメッセージ
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "128px 1fr" }, gap: 2, alignItems: "center" }}>
                <Box sx={{ width: 128, height: 128, borderRadius: "50%", overflow: "hidden", border: `3px solid ${JUKU_RED_BG2}`, bgcolor: JUKU_RED_BG, mx: { xs: "auto", sm: 0 } }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={guidance.photo} alt={`${guidance.target}対策担当 塾長`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 13, color: JUKU_RED, fontWeight: 800, mb: 0.75 }}>
                    {guidance.target}対策担当
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#374151", lineHeight: 1.9, fontWeight: 600 }}>
                    {guidance.message}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 画像ギャラリー */}
            {sortedImages.length > 0 && (
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 3, mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111827", mb: 2, pb: 1, borderBottom: `2px solid ${JUKU_RED}` }}>
                  {`${school.name}の写真一覧`}
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

              {displayReviews.length === 0 ? (
                <Typography sx={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", py: 4 }}>
                  口コミはまだありません
                </Typography>
              ) : (
                <>
                  {/* 評価サマリー */}
                  {displayAverageRating && (
                    <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "2.5rem", color: JUKU_RED, lineHeight: 1 }}>
                          {displayAverageRating.toFixed(1)}
                        </Typography>
                        <ReviewStars rating={displayAverageRating} showNumber={false} />
                        <Typography sx={{ fontSize: 12, color: "#6B7280", mt: 0.5 }}>{displayReviewCount}件</Typography>
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 200 }}>
                        {avgRatings.filter((r) => r.value > 0).map((r) => (
                          <ReviewRatingBar key={r.label} label={r.label} value={r.value} />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* 最新3件 */}
                  {displayReviews.slice(0, 3).map((review) => (
                    <Box key={review.id} sx={{ borderTop: "1px solid #F3F4F6", pt: 2, mt: 2 }}>
                      <Box sx={{ display: "flex", gap: 1.5, mb: 1 }}>
                        <Box
                          component="img"
                          src={genericAvatar(review)}
                          alt=""
                          sx={{ width: 36, height: 36, minWidth: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid #E5E7EB" }}
                        />
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: 13, color: "#374151" }}>
                            {reviewerName(review)}{review.year_type ? ` / ${review.year_type}` : ""}
                          </Typography>
                          {review.rating_total != null && review.rating_total > 0 && <ReviewStars rating={review.rating_total} size="small" />}
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
                  {(isOnline ? [
                    { label: "サービス名", value: school.name },
                    { label: "受講形式", value: "完全オンライン（全国対応）" },
                    { label: "対象学年", value: school.JukuSchoolYear.map((y) => y.year).join("・") || "—" },
                    { label: "授業スタイル", value: school.JukuSchoolCategory.map((c) => c.category).join("・") || "—" },
                    { label: "目的", value: school.JukuSchoolPurpose.map((p) => p.purpose).join("・") || "—" },
                    { label: "公式サイト", value: school.official_site_url || school.JukuBrand.official_site_url || "—" },
                  ] : [
                    { label: "教室名", value: school.name },
                    { label: "住所", value: school.address || "—" },
                    { label: "電話番号", value: school.telephone || "—" },
                    { label: "営業時間", value: school.open_at && school.close_at ? `${school.open_at}〜${school.close_at}` : "—" },
                    { label: "対象学年", value: school.JukuSchoolYear.map((y) => y.year).join("・") || "—" },
                    { label: "授業スタイル", value: school.JukuSchoolCategory.map((c) => c.category).join("・") || "—" },
                    { label: "目的", value: school.JukuSchoolPurpose.map((p) => p.purpose).join("・") || "—" },
                  ]).map((row) => (
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

              {/* アクセス / オンライン情報 */}
              <Box sx={{ bgcolor: "#fff", border: "1px solid #E5E7EB", borderRadius: 2, p: 2.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111827", mb: 1.5, pb: 1, borderBottom: "1px solid #F3F4F6" }}>
                  {isOnline ? "受講スタイル" : "アクセス"}
                </Typography>
                {isOnline && (
                  <Box>
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <Box sx={{ fontSize: 16, color: "#1e782d" }}>💻</Box>
                      <Typography sx={{ fontSize: 13, color: "#374151", fontWeight: 600 }}>完全オンライン受講</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <Box sx={{ fontSize: 16 }}>📍</Box>
                      <Typography sx={{ fontSize: 13, color: "#374151" }}>全国どこからでも受講可能</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <Box sx={{ fontSize: 16 }}>📱</Box>
                      <Typography sx={{ fontSize: 13, color: "#374151" }}>スマホ・タブレット・PC対応</Typography>
                    </Box>
                    {school.official_site_url && (
                      <Box sx={{ mt: 1.5, pt: 1.5, borderTop: "1px solid #F3F4F6" }}>
                        <a href={school.official_site_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                          <Typography sx={{ fontSize: 12, color: JUKU_RED, fontWeight: 600 }}>
                            公式サイトで詳細を確認 →
                          </Typography>
                        </a>
                      </Box>
                    )}
                  </Box>
                )}
                {!isOnline && school.address && (
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
                {!isOnline && sortedStation.map((st) => (
                  <Box key={st.id} sx={{ display: "flex", gap: 1, mb: 0.75 }}>
                    <TrainIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Typography sx={{ fontSize: 13, color: "#374151" }}>
                      {st.station_name}駅{st.line_name ? `（${st.line_name}）` : ""}
                      {st.walk_minutes ? ` 徒歩${st.walk_minutes}分` : ""}
                    </Typography>
                  </Box>
                ))}
                {!isOnline && school.open_at && school.close_at && (
                  <Box sx={{ display: "flex", gap: 1, mt: 1.25, pt: 1.25, borderTop: "1px solid #F3F4F6" }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: JUKU_RED, mt: 0.25 }} />
                    <Typography sx={{ fontSize: 13, color: "#374151" }}>{school.open_at}〜{school.close_at}</Typography>
                  </Box>
                )}
                {!isOnline && school.telephone && (
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
              {isOnline ? "他のオンライン塾も見る" : `${school.JukuBrand.name}の他の教室`}
            </Typography>
            <Grid container spacing={2}>
              {relatedSchools.map((s) => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <JukuCard school={s} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Link href={isOnline ? "/juku/ranking/" : `/juku/${school.JukuBrand.slug}/`} style={{ textDecoration: "none" }}>
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
                  {isOnline ? "オンライン塾ランキングを見る →" : `${school.JukuBrand.name}の全教室を見る →`}
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
