import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Link as MuiLink, Tooltip } from "@mui/material";
import NextLink from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClassificationBadge from "./ClassificationBadge";
import { generateGoogleMapsUrl } from "@/utils/maps";
import type { MinkouSchoolListItem } from "@/types";

type Props = {
  schools: MinkouSchoolListItem[];
  startRank?: number;
  prefectureSlug?: string;
};

function formatDeviation(school: MinkouSchoolListItem): string {
  if (!school.deviation_value_max) return "-";
  if (school.deviation_value_min && school.deviation_value_min !== school.deviation_value_max) {
    return `${school.deviation_value_min} - ${school.deviation_value_max}`;
  }
  return String(school.deviation_value_max);
}

export default function RankingTable({ schools, startRank = 1, prefectureSlug }: Props) {
  if (schools.length === 0) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#BDBDBD", mb: 1, fontWeight: 500 }}>
          該当する高校が見つかりませんでした
        </Typography>
        <Typography variant="body2" sx={{ color: "#9E9E9E" }}>
          検索条件を変更してお試しください。
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: "1px solid #E0E0E0", overflowX: "auto" }}
    >
      <Table size="small" aria-label="高校偏差値ランキング">
        <TableHead>
          <TableRow sx={{ bgcolor: "#F5F5F5" }}>
            <TableCell scope="col" sx={{ width: { xs: 40, sm: 50 }, fontWeight: 600, fontSize: { xs: 12, sm: 13 }, px: { xs: 1, sm: 2 } }}>
              順位
            </TableCell>
            <TableCell scope="col" sx={{ fontWeight: 600, fontSize: { xs: 12, sm: 13 } }}>
              高校名
            </TableCell>
            <TableCell scope="col" sx={{ width: { xs: 80, sm: 120 }, fontWeight: 600, fontSize: { xs: 12, sm: 13 }, textAlign: "center", px: { xs: 1, sm: 2 } }}>
              偏差値
            </TableCell>
            <TableCell scope="col" sx={{ width: { xs: 50, sm: 70 }, fontWeight: 600, fontSize: { xs: 12, sm: 13 }, textAlign: "center", px: { xs: 1, sm: 2 }, display: { xs: "none", sm: "table-cell" } }}>
              区分
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schools.map((school, i) => {
            const rank = startRank + i;
            const isTop3 = rank <= 3;
            return (
              <TableRow
                key={school.id}
                sx={{
                  "&:hover": { bgcolor: "#F5F9FF" },
                  ...(isTop3 && { bgcolor: "#FFFDE7" }),
                }}
              >
                <TableCell sx={{ fontWeight: isTop3 ? 900 : 700, color: isTop3 ? "#FF6F00" : "#424242", fontSize: { xs: isTop3 ? 16 : 13, sm: isTop3 ? 18 : 14 }, px: { xs: 1, sm: 2 } }}>
                  {rank}
                </TableCell>
                <TableCell sx={{ py: 1.2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      {prefectureSlug ? (
                        <NextLink href={`/rankings/koukou/p-${prefectureSlug}/schools/${school.id}/`} style={{ textDecoration: "none" }}>
                          <MuiLink
                            component="span"
                            sx={{
                              fontWeight: 600,
                              fontSize: { xs: 13, sm: 14 },
                              color: "#1e782d",
                              cursor: "pointer",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            {school.name}
                          </MuiLink>
                        </NextLink>
                      ) : (
                        <Typography sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 14 } }}>
                          {school.name}
                        </Typography>
                      )}
                      {school.address && (
                        <Tooltip title="Google Mapsで位置情報を確認">
                          <MuiLink
                            href={generateGoogleMapsUrl(school)}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: 24,
                              minHeight: 24,
                              color: "#1e782d",
                              "&:hover": { color: "#0d5a1f" },
                              transition: "color 0.2s",
                            }}
                          >
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                          </MuiLink>
                        </Tooltip>
                      )}
                    </Box>
                    {/* Mobile only: classification badge inline */}
                    <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
                      <ClassificationBadge classification={school.classification} />
                    </Box>
                  </Box>
                  {school.MinkouCourse && school.MinkouCourse.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0.5 }}>
                      {school.MinkouCourse
                        .filter((c) => c.deviation_value)
                        .sort((a, b) => (b.deviation_value || 0) - (a.deviation_value || 0))
                        .slice(0, 3)
                        .map((course) => (
                          <Typography
                            key={course.id}
                            variant="caption"
                            sx={{
                              color: "#555",
                              fontSize: { xs: 10, sm: 11 },
                              bgcolor: "#F5F5F5",
                              px: 0.8,
                              py: 0.2,
                              borderRadius: 1,
                            }}
                          >
                            {course.name}({course.deviation_value})
                          </Typography>
                        ))}
                    </Box>
                  )}
                </TableCell>
                <TableCell sx={{ textAlign: "center", px: { xs: 1, sm: 2 } }}>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 14, sm: 16 }, color: "#1e782d" }}>
                    {formatDeviation(school)}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center", px: { xs: 1, sm: 2 }, display: { xs: "none", sm: "table-cell" } }}>
                  <ClassificationBadge classification={school.classification} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
