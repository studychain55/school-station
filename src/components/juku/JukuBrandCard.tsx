import Link from "next/link";
import { Box, Typography, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ReviewStars from "./ReviewStars";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2 } from "@/utils/juku/config";
import type { JukuBrand, JukuSchoolListItem } from "@/types";

type Props = {
  brand: JukuBrand;
  schools: JukuSchoolListItem[];
  rank?: number;
};

function avgRating(schools: JukuSchoolListItem[]): number | null {
  const rated = schools.filter((s) => s.review_average_rating);
  if (!rated.length) return null;
  return rated.reduce((sum, s) => sum + (s.review_average_rating ?? 0), 0) / rated.length;
}

function totalReviews(schools: JukuSchoolListItem[]): number {
  return schools.reduce((sum, s) => sum + s.total_review_count, 0);
}

function allCategories(schools: JukuSchoolListItem[]): string[] {
  const set = new Set<string>();
  schools.forEach((s) => s.JukuSchoolCategory.forEach((c) => set.add(c.category)));
  return Array.from(set).slice(0, 3);
}

function allPurposes(schools: JukuSchoolListItem[]): string[] {
  const set = new Set<string>();
  schools.forEach((s) => s.JukuSchoolPurpose.forEach((p) => set.add(p.purpose)));
  return Array.from(set).slice(0, 3);
}

export default function JukuBrandCard({ brand, schools, rank }: Props) {
  const rating = avgRating(schools);
  const reviews = totalReviews(schools);
  const categories = allCategories(schools);
  const purposes = allPurposes(schools);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.18s ease",
        position: "relative",
        "&:hover": {
          borderColor: JUKU_RED,
          boxShadow: `0 4px 20px ${JUKU_RED}1A`,
        },
      }}
    >
      {/* ランクバッジ */}
      {rank && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: rank <= 3 ? JUKU_RED : "#6B7280",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            px: 1.5,
            py: 0.5,
            borderRadius: "0 0 8px 0",
            zIndex: 1,
          }}
        >
          #{rank}
        </Box>
      )}

      {/* ヘッダー */}
      <Box sx={{ bgcolor: JUKU_RED_BG, px: 2, pt: rank ? 4 : 2, pb: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            minWidth: 64,
            bgcolor: "#fff",
            borderRadius: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${JUKU_RED_BG2}`,
            overflow: "hidden",
          }}
        >
          {brand.logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={brand.logo_url}
              alt={brand.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
            />
          ) : (
            <Typography sx={{ fontWeight: 800, fontSize: 22, color: JUKU_RED }}>
              {brand.name.charAt(0)}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: 17, color: "#111827", lineHeight: 1.3 }}>
            {brand.name}
          </Typography>
          {brand.is_online && (
            <Chip
              label="オンライン対応"
              size="small"
              sx={{ bgcolor: JUKU_RED, color: "#fff", fontSize: 10, fontWeight: 700, height: 18, mt: 0.5, "& .MuiChip-label": { px: 0.75 } }}
            />
          )}
        </Box>
      </Box>

      {/* ボディ */}
      <Box sx={{ p: 2 }}>
        {/* 評価 */}
        <Box sx={{ mb: 1.5 }}>
          {rating ? (
            <ReviewStars rating={rating} count={reviews} size="medium" />
          ) : (
            <Typography sx={{ fontSize: 13, color: "#9CA3AF" }}>口コミ募集中</Typography>
          )}
        </Box>

        {/* 説明文 */}
        {brand.description && (
          <Typography
            sx={{
              fontSize: 13,
              color: "#4B5563",
              mb: 1.5,
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {brand.description}
          </Typography>
        )}

        {/* タグ */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              size="small"
              sx={{
                bgcolor: JUKU_RED_BG,
                color: JUKU_RED,
                fontWeight: 600,
                fontSize: 11,
                height: 22,
                "& .MuiChip-label": { px: 0.75 },
              }}
            />
          ))}
          {purposes.map((p) => (
            <Chip
              key={p}
              label={p}
              size="small"
              sx={{
                bgcolor: "#F3F4F6",
                color: "#374151",
                fontWeight: 500,
                fontSize: 11,
                height: 22,
                "& .MuiChip-label": { px: 0.75 },
              }}
            />
          ))}
        </Box>

        {/* 教室数 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mb: 2,
            color: "#6B7280",
          }}
        >
          <SchoolIcon sx={{ fontSize: 15 }} />
          <Typography sx={{ fontSize: 13 }}>
            全国{schools.length}教室
          </Typography>
        </Box>

        {/* CTAボタン */}
        <Link href={`/juku/${brand.slug}/`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              bgcolor: JUKU_RED,
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 1.5,
              textAlign: "center",
              fontWeight: 700,
              fontSize: 14,
              transition: "opacity 0.15s",
              "&:hover": { opacity: 0.88 },
            }}
          >
            無料体験・詳細を見る →
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
