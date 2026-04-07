import { Chip } from "@mui/material";

const BADGE_STYLES: Record<string, { label: string; bg: string; color: string }> = {
  PUBLIC: { label: "公立", bg: "#E8F5E9", color: "#2E7D32" },
  PRIVATE: { label: "私立", bg: "#FCE4EC", color: "#C62828" },
  NATIONAL: { label: "国立", bg: "#FFF8E1", color: "#F57F17" },
};

type Props = {
  classification: string;
  size?: "small" | "medium";
};

export default function ClassificationBadge({ classification, size = "small" }: Props) {
  const style = BADGE_STYLES[classification] || { label: classification, bg: "#ECEFF1", color: "#546E7A" };

  return (
    <Chip
      label={style.label}
      size={size}
      sx={{
        bgcolor: style.bg,
        color: style.color,
        fontWeight: 600,
        fontSize: size === "small" ? 11 : 13,
        height: size === "small" ? 22 : 28,
      }}
    />
  );
}
