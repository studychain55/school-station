import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { JUKU_RED } from "@/utils/juku/config";

type Props = {
  rating: number;
  count?: number;
  size?: "small" | "medium" | "large";
  showNumber?: boolean;
};

export default function ReviewStars({ rating, count, size = "medium", showNumber = true }: Props) {
  const fontSize = size === "small" ? 14 : size === "large" ? 22 : 18;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return "full";
    if (rating >= i + 0.5) return "half";
    return "empty";
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Box sx={{ display: "flex", color: "#F59E0B" }}>
        {stars.map((type, i) =>
          type === "full" ? (
            <StarIcon key={i} sx={{ fontSize }} />
          ) : type === "half" ? (
            <StarHalfIcon key={i} sx={{ fontSize }} />
          ) : (
            <StarBorderIcon key={i} sx={{ fontSize, color: "#D1D5DB" }} />
          )
        )}
      </Box>
      {showNumber && (
        <Typography
          component="span"
          sx={{ fontWeight: 700, fontSize: fontSize - 2, color: JUKU_RED, lineHeight: 1 }}
        >
          {rating.toFixed(1)}
        </Typography>
      )}
      {count !== undefined && (
        <Typography component="span" sx={{ fontSize: 12, color: "#6B7280" }}>
          ({count}件)
        </Typography>
      )}
    </Box>
  );
}
