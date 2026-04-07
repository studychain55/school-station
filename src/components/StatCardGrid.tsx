import { Box, Paper, Typography } from "@mui/material";
import type { MinkouSchoolListItem } from "@/types";

type Props = {
  schools: MinkouSchoolListItem[];
  totalCount: number;
};

export default function StatCardGrid({ schools, totalCount }: Props) {
  const publicCount = schools.filter((s) => s.classification === "PUBLIC").length;
  const privateCount = schools.filter((s) => s.classification === "PRIVATE").length;
  const nationalCount = schools.filter((s) => s.classification === "NATIONAL").length;

  const cards = [
    { label: "全校", count: totalCount, color: "#1565C0", bg: "#E3F2FD" },
    { label: "公立", count: publicCount, color: "#2E7D32", bg: "#E8F5E9" },
    { label: "私立", count: privateCount, color: "#C62828", bg: "#FFEBEE" },
    { label: "国立", count: nationalCount, color: "#F57F17", bg: "#FFF8E1" },
  ];

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: { xs: 1.5, sm: 2 }, mb: 3 }}>
      {cards.map((card) => (
        <Paper
          key={card.label}
          elevation={0}
          sx={{
            p: { xs: 1.5, sm: 2 },
            textAlign: "center",
            border: "1px solid #E0E0E0",
            borderTop: `3px solid ${card.color}`,
            "&:hover": { borderColor: card.color, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
          }}
        >
          <Typography variant="caption" sx={{ color: "#555", fontWeight: 500, fontSize: { xs: 11, sm: 12 } }}>
            {card.label}
          </Typography>
          <Typography sx={{ fontWeight: 900, color: card.color, fontSize: { xs: "1.5rem", sm: "1.8rem" }, my: 0.5, lineHeight: 1.2 }}>
            {card.count.toLocaleString()}
          </Typography>
          <Typography variant="caption" sx={{ color: "#757575", fontSize: 11 }}>
            校
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}
