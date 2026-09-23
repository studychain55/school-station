import { Box, Typography, Chip, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import { JUKU_RED, JUKU_RED_BG } from "@/utils/juku/config";
import type { JukuRankingItem } from "@/types";

type Props = {
  school: JukuRankingItem;
  rank: number;
};

const RANK_BADGE_COLORS: Record<number, { bg: string; color: string; label: string }> = {
  1: { bg: "#FFD700", color: "#7B5800", label: "1位" },
  2: { bg: "#C0C0C0", color: "#444", label: "2位" },
  3: { bg: "#CD7F32", color: "#fff", label: "3位" },
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          sx={{ fontSize: 16, color: n <= Math.round(rating) ? "#F59E0B" : "#E5E7EB" }}
        />
      ))}
      <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#111827", ml: 0.5 }}>
        {rating.toFixed(2)}
      </Typography>
      <Typography sx={{ fontSize: 12, color: "#6B7280" }}>({count}件)</Typography>
    </Box>
  );
}

function formatFee(min: number | null, max: number | null): string {
  if (min === 0) return "無料";
  if (!min) return "料金要問合せ";
  const minStr = min.toLocaleString();
  if (!max || max === min) return `月額${minStr}円〜`;
  return `月額${minStr}円〜${max.toLocaleString()}円`;
}

export default function OnlineJukuRankingCard({ school, rank }: Props) {
  const href = `/juku/${school.JukuBrand.slug}/${school.slug}/`;
  const siteUrl = school.official_site_url || school.JukuBrand.official_site_url;
  const badge = RANK_BADGE_COLORS[rank];
  const recommends = [...(school.JukuRecommend || [])].sort((a, b) => a.sort_order - b.sort_order);
  const courses = [...(school.JukuCourse || [])].sort((a, b) => a.sort_order - b.sort_order);
  const mainCourse = courses[0];

  // Website screenshot via thum.io (free, no API key needed)
  const screenshotUrl = siteUrl
    ? `https://image.thum.io/get/width/900/crop/500/noanimate/${siteUrl}`
    : null;

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: rank <= 3 ? `2px solid ${badge?.bg ?? JUKU_RED}` : "1px solid #E5E7EB",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: rank <= 3 ? "0 4px 20px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: "0 6px 24px rgba(0,0,0,0.12)" },
      }}
    >
      {/* ランクヘッダー */}
      <Box
        sx={{
          bgcolor: badge ? badge.bg : rank <= 10 ? JUKU_RED : "#6B7280",
          px: 2,
          py: 0.75,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: 15, color: badge ? badge.color : "#fff", letterSpacing: "0.05em" }}>
          {rank}位
        </Typography>
        {rank === 1 && (
          <Box sx={{ bgcolor: "rgba(0,0,0,0.15)", color: "#7B5800", fontSize: 10, fontWeight: 700, px: 1, py: 0.25, borderRadius: 1, letterSpacing: "0.08em" }}>
            オンライン塾 総合No.1
          </Box>
        )}
        {rank === 2 && (
          <Box sx={{ bgcolor: "rgba(0,0,0,0.12)", color: "#444", fontSize: 10, fontWeight: 700, px: 1, py: 0.25, borderRadius: 1 }}>高評価</Box>
        )}
        {rank === 3 && (
          <Box sx={{ bgcolor: "rgba(0,0,0,0.12)", color: "#fff", fontSize: 10, fontWeight: 700, px: 1, py: 0.25, borderRadius: 1 }}>おすすめ</Box>
        )}
        <Box sx={{ ml: "auto", bgcolor: "rgba(0,0,0,0.15)", color: badge ? badge.color : "#fff", fontSize: 10, fontWeight: 600, px: 1, py: 0.25, borderRadius: 1 }}>
          💻 オンライン
        </Box>
      </Box>

      {/* サイトスクリーンショット */}
      {screenshotUrl && (
        <Box
          component="a"
          href={siteUrl ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "block",
            aspectRatio: "16/9",
            overflow: "hidden",
            bgcolor: "#F3F4F6",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshotUrl}
            alt={`${school.name} 公式サイト`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* ロゴオーバーレイ */}
          {school.JukuBrand.logo_url && (
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                bgcolor: "rgba(255,255,255,0.95)",
                borderRadius: 1.5,
                p: 0.75,
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                backdropFilter: "blur(4px)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={school.JukuBrand.logo_url}
                alt={school.JukuBrand.name}
                style={{ width: 28, height: 28, objectFit: "contain" }}
              />
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#111827", maxWidth: 120, lineHeight: 1.2 }}>
                {school.JukuBrand.name}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.55)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              px: 1,
              py: 0.25,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              gap: 0.4,
            }}
          >
            <OpenInNewIcon sx={{ fontSize: 11 }} /> 公式サイト
          </Box>
        </Box>
      )}

      <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
        {/* 塾名・評価 */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 1.5 }}>
          {/* ロゴ（スクリーンショットなし時のみ大きく表示） */}
          {!screenshotUrl && (
            <Box
              sx={{
                width: 64,
                height: 64,
                minWidth: 64,
                bgcolor: JUKU_RED_BG,
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #FFD5D5",
                flexShrink: 0,
              }}
            >
              {school.JukuBrand.logo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={school.JukuBrand.logo_url}
                  alt={school.JukuBrand.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
                />
              ) : (
                <Typography sx={{ fontWeight: 900, fontSize: 22, color: JUKU_RED }}>
                  {school.JukuBrand.name.charAt(0)}
                </Typography>
              )}
            </Box>
          )}

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Link href={href} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 15, sm: 17 },
                  color: "#111827",
                  lineHeight: 1.3,
                  mb: 0.5,
                  "&:hover": { color: JUKU_RED },
                }}
              >
                {school.name}
              </Typography>
            </Link>
            {school.review_average_rating && (
              <StarRating rating={school.review_average_rating} count={school.total_review_count} />
            )}
          </Box>
        </Box>

        {/* 説明文 */}
        {school.description && (
          <Typography sx={{ fontSize: 13, color: "#374151", lineHeight: 1.7, mb: 1.5 }}>
            {school.description}
          </Typography>
        )}

        {/* タグ（カテゴリー・目的・学年） */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 1.5 }}>
          {school.JukuSchoolCategory.map((c) => (
            <Chip key={c.id} label={c.category} size="small" sx={{ bgcolor: JUKU_RED_BG, color: JUKU_RED, fontWeight: 700, fontSize: 11, height: 22, "& .MuiChip-label": { px: 1 } }} />
          ))}
          {school.JukuSchoolPurpose.map((p) => (
            <Chip key={p.id} label={p.purpose} size="small" sx={{ bgcolor: "#F0F4FF", color: "#4f46e5", fontWeight: 600, fontSize: 11, height: 22, "& .MuiChip-label": { px: 1 } }} />
          ))}
          {school.JukuSchoolYear.slice(0, 3).map((y) => (
            <Chip key={y.id} label={y.year} size="small" sx={{ bgcolor: "#F3F4F6", color: "#6B7280", fontSize: 11, height: 22, "& .MuiChip-label": { px: 1 } }} />
          ))}
        </Box>

        {/* ここがおすすめ */}
        {recommends.length > 0 && (
          <>
            <Divider sx={{ my: 1.5 }} />
            <Box sx={{ mb: 1.5 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#111827", mb: 1, display: "flex", alignItems: "center", gap: 0.5 }}>
                <CheckCircleIcon sx={{ fontSize: 16, color: "#1e782d" }} />
                ここがおすすめ
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                {recommends.slice(0, 3).map((rec, i) => (
                  <Box key={rec.id} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                    <Box sx={{ width: 20, height: 20, minWidth: 20, borderRadius: "50%", bgcolor: "#1e782d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, mt: 0.1, flexShrink: 0 }}>
                      {i + 1}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>{rec.title}</Typography>
                      {rec.body && <Typography sx={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6, mt: 0.25 }}>{rec.body}</Typography>}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}

        {/* 代表コース・料金 */}
        {mainCourse && (
          <>
            <Divider sx={{ my: 1.5 }} />
            <Box sx={{ bgcolor: "#FAFAFA", border: "1px solid #E5E7EB", borderRadius: 1.5, p: 1.5, mb: 1.5 }}>
              <Typography sx={{ fontSize: 11, color: "#6B7280", fontWeight: 600, mb: 0.5 }}>代表コース</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{mainCourse.name}</Typography>
                  {mainCourse.target_grade && <Typography sx={{ fontSize: 11, color: "#6B7280" }}>{mainCourse.target_grade}</Typography>}
                </Box>
                <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 800, color: JUKU_RED }}>
                    {formatFee(mainCourse.monthly_fee_min, mainCourse.monthly_fee_max)}
                  </Typography>
                  {mainCourse.enrollment_fee != null && mainCourse.enrollment_fee > 0 && (
                    <Typography sx={{ fontSize: 11, color: "#6B7280" }}>入会金{mainCourse.enrollment_fee.toLocaleString()}円</Typography>
                  )}
                  {mainCourse.enrollment_fee === 0 && (
                    <Typography sx={{ fontSize: 11, color: "#1e782d", fontWeight: 600 }}>入会金無料</Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </>
        )}

        {/* CTAボタン */}
        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
          {siteUrl && (
            <Box
              component="a"
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex", alignItems: "center", gap: 0.5,
                px: 2.5, py: 1, bgcolor: JUKU_RED, color: "#fff",
                borderRadius: 1.5, fontWeight: 700, fontSize: 13, textDecoration: "none",
                "&:hover": { bgcolor: "#A31515" }, transition: "background-color 0.15s",
                flex: 1, justifyContent: "center",
              }}
            >
              <OpenInNewIcon sx={{ fontSize: 14 }} />
              無料体験・公式サイト
            </Box>
          )}
          <Link href={href} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                px: 2, py: 1, border: `1.5px solid ${JUKU_RED}`, color: JUKU_RED,
                borderRadius: 1.5, fontWeight: 700, fontSize: 13,
                "&:hover": { bgcolor: JUKU_RED_BG }, transition: "background-color 0.15s",
              }}
            >
              詳細を見る
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
