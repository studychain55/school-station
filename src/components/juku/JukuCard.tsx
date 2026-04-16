import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Typography, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrainIcon from "@mui/icons-material/Train";
import ReviewStars from "./ReviewStars";
import { JUKU_RED, JUKU_RED_BG } from "@/utils/juku/config";
import type { JukuSchoolListItem } from "@/types";

type Props = {
  school: JukuSchoolListItem;
  rank?: number;
};

export default function JukuCard({ school, rank }: Props) {
  const href = `/juku/${school.JukuBrand.slug}/${school.slug}/`;
  const station = school.JukuSchoolStation[0];
  const router = useRouter();

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          border: "1px solid #E5E7EB",
          borderRadius: 2,
          p: 2,
          display: "flex",
          gap: 2,
          transition: "all 0.18s ease",
          position: "relative",
          "&:hover": {
            borderColor: JUKU_RED,
            boxShadow: `0 4px 16px ${JUKU_RED}22`,
            transform: "translateY(-1px)",
          },
        }}
      >
        {/* ランク */}
        {rank && (
          <Box
            sx={{
              position: "absolute",
              top: -1,
              left: 12,
              bgcolor: rank <= 3 ? JUKU_RED : "#6B7280",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              px: 1,
              py: 0.25,
              borderRadius: "0 0 4px 4px",
              lineHeight: 1.6,
            }}
          >
            {rank}位
          </Box>
        )}

        {/* ロゴ */}
        <Box
          sx={{
            width: 72,
            height: 72,
            minWidth: 72,
            bgcolor: JUKU_RED_BG,
            borderRadius: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            mt: rank ? 1.5 : 0,
          }}
        >
          {school.JukuBrand.logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={school.JukuBrand.logo_url}
              alt={school.JukuBrand.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }}
            />
          ) : (
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: JUKU_RED }}>
              {school.JukuBrand.name.charAt(0)}
            </Typography>
          )}
        </Box>

        {/* コンテンツ */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: 11,
              color: "#6B7280",
              mb: 0.25,
              fontWeight: 500,
            }}
          >
            {school.JukuBrand.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 14, sm: 15 },
              color: "#111827",
              mb: 0.75,
              lineHeight: 1.3,
              "&:hover": { color: JUKU_RED },
            }}
          >
            {school.name}
          </Typography>

          {/* 評価 */}
          {school.review_average_rating ? (
            <Box sx={{ mb: 0.75 }}>
              <ReviewStars
                rating={school.review_average_rating}
                count={school.total_review_count}
                size="small"
              />
            </Box>
          ) : (
            <Typography sx={{ fontSize: 12, color: "#9CA3AF", mb: 0.75 }}>口コミ募集中</Typography>
          )}

          {/* タグ */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 0.75 }}>
            {school.JukuSchoolCategory.slice(0, 2).map((c) => (
              <Chip
                key={c.id}
                label={c.category}
                size="small"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/juku/?category=${encodeURIComponent(c.category)}`); }}
                sx={{
                  bgcolor: JUKU_RED_BG,
                  color: JUKU_RED,
                  fontWeight: 600,
                  fontSize: 11,
                  height: 20,
                  cursor: "pointer",
                  "& .MuiChip-label": { px: 0.75 },
                  "&:hover": { bgcolor: JUKU_RED, color: "#fff" },
                }}
              />
            ))}
            {school.JukuSchoolPurpose.slice(0, 2).map((p) => (
              <Chip
                key={p.id}
                label={p.purpose}
                size="small"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/juku/?purpose=${encodeURIComponent(p.purpose)}`); }}
                sx={{
                  bgcolor: "#F3F4F6",
                  color: "#374151",
                  fontWeight: 500,
                  fontSize: 11,
                  height: 20,
                  cursor: "pointer",
                  "& .MuiChip-label": { px: 0.75 },
                  "&:hover": { bgcolor: "#E5E7EB", color: JUKU_RED },
                }}
              />
            ))}
          </Box>

          {/* アクセス */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 1.5 }}>
            {school.address && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                <LocationOnIcon sx={{ fontSize: 13, color: "#9CA3AF" }} />
                <Typography sx={{ fontSize: 12, color: "#6B7280" }}>
                  {school.address.replace(/^.{2,5}[都道府県]/, "").slice(0, 20)}
                </Typography>
              </Box>
            )}
            {station && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                <TrainIcon sx={{ fontSize: 13, color: "#9CA3AF" }} />
                <Typography sx={{ fontSize: 12, color: "#6B7280" }}>
                  {station.station_name}駅
                  {station.walk_minutes ? `　徒歩${station.walk_minutes}分` : ""}
                </Typography>
              </Box>
            )}
          </Box>

          {/* CTA */}
          <Box
            sx={{
              mt: "auto",
              bgcolor: school.review_average_rating && school.review_average_rating > 0 ? "#b70c07" : JUKU_RED,
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              py: 1,
              borderRadius: 1.5,
              textAlign: "center",
              "&:hover": { opacity: 0.9 },
              transition: "opacity 0.15s",
            }}
          >
            {school.review_average_rating && school.review_average_rating > 0 ? "口コミを見る・無料体験を申し込む →" : "詳細を見る →"}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
