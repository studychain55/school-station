import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Typography, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrainIcon from "@mui/icons-material/Train";
import LaptopIcon from "@mui/icons-material/Laptop";
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
  const yearText = school.JukuSchoolYear.slice(0, 2).map((y) => y.year).join("・") || "対象要確認";
  const styleText = school.JukuSchoolCategory.slice(0, 2).map((c) => c.category).join("・") || "形式要確認";
  const imageUrl = school.JukuBrand.logo_url;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          border: "1px solid #E5E7EB",
          borderRadius: { xs: 2, sm: 2.5 },
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: { xs: "104px 1fr", sm: "168px 1fr" },
          transition: "all 0.18s ease",
          position: "relative",
          boxShadow: "0 8px 20px rgba(15,23,42,0.07)",
          "&:hover": {
            borderColor: JUKU_RED,
            boxShadow: `0 4px 16px ${JUKU_RED}22`,
            transform: "translateY(-1px)",
          },
          }}
        >
        <Box
          sx={{
            minHeight: { xs: 158, sm: 190 },
            bgcolor: JUKU_RED_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            borderRight: "1px solid #F1F5F9",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,232,232,0.82))",
            }}
          />
          <Box
            sx={{
              position: "relative",
              width: { xs: 70, sm: 104 },
              height: { xs: 70, sm: 104 },
              borderRadius: 2,
              bgcolor: "#fff",
              border: "1px solid #FEE2E2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              boxShadow: "0 8px 18px rgba(15,23,42,0.12)",
            }}
          >
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={school.JukuBrand.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <Typography sx={{ fontWeight: 900, fontSize: { xs: 28, sm: 36 }, color: JUKU_RED }}>
                {school.JukuBrand.name.charAt(0)}
              </Typography>
            )}
          </Box>
          {rank && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                bgcolor: rank <= 3 ? JUKU_RED : "#111827",
                color: "#fff",
                fontSize: { xs: 11, sm: 12 },
                fontWeight: 900,
                px: 1,
                py: 0.4,
                borderRadius: 999,
                lineHeight: 1,
              }}
            >
              {rank}位
            </Box>
          )}
        </Box>

        <Box sx={{ p: { xs: 1.25, sm: 2 }, minWidth: 0 }}>
        <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-start", minWidth: 0 }}>
          {/* ロゴ */}
          <Box
            sx={{
              width: { xs: 56, sm: 72 },
              height: { xs: 56, sm: 72 },
              minWidth: { xs: 56, sm: 72 },
              bgcolor: JUKU_RED_BG,
              borderRadius: 1.5,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              mt: rank ? { xs: 1.25, sm: 1.5 } : 0,
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
              fontWeight: 800,
            }}
          >
            {school.JukuBrand.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 15, sm: 18 },
              color: "#111827",
              mb: 0.75,
              lineHeight: 1.25,
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
          <Box sx={{ display: "flex", flexWrap: { xs: "nowrap", sm: "wrap" }, gap: 0.5, mb: 0.75, overflowX: { xs: "auto", sm: "visible" }, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
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
                  flexShrink: 0,
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
                  flexShrink: 0,
                  "& .MuiChip-label": { px: 0.75 },
                  "&:hover": { bgcolor: "#E5E7EB", color: JUKU_RED },
                }}
              />
            ))}
          </Box>

          {/* アクセス / オンライン表示 */}
          {!school.address && !station ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LaptopIcon sx={{ fontSize: 14, color: "#1e782d" }} />
              <Typography sx={{ fontSize: 12, color: "#1e782d", fontWeight: 600 }}>
                全国オンライン受講可
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
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
          )}
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: { xs: 0.75, sm: 1 }, pt: { xs: 0.5, sm: 1 } }}>
          <Box sx={{ border: "1px solid #E5E7EB", borderRadius: 1.5, p: { xs: 0.85, sm: 1 }, bgcolor: "#FAFAFA", minWidth: 0 }}>
            <Typography sx={{ fontSize: 10, color: "#6B7280", fontWeight: 800 }}>口コミ</Typography>
            <Typography sx={{ fontSize: 13, color: "#111827", fontWeight: 900 }}>
              {school.review_average_rating ? `${school.review_average_rating.toFixed(1)} / ${school.total_review_count}件` : "募集中"}
            </Typography>
          </Box>
          <Box sx={{ border: "1px solid #FFD5D5", borderRadius: 1.5, p: { xs: 0.85, sm: 1 }, bgcolor: JUKU_RED_BG, minWidth: 0 }}>
            <Typography sx={{ fontSize: 10, color: JUKU_RED, fontWeight: 800 }}>対象・形式</Typography>
            <Typography sx={{ fontSize: 13, color: JUKU_RED, fontWeight: 900, lineHeight: 1.25, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {yearText} / {styleText}
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </Link>
  );
}
