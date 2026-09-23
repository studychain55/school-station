import Link from "next/link";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckIcon from "@mui/icons-material/Check";
import { JUKU_RED, JUKU_RED_BG } from "@/utils/juku/config";
import type { JukuRankingItem } from "@/types";

type Props = {
  schools: JukuRankingItem[];
};

const STYLE_COLOR: Record<string, { bg: string; color: string }> = {
  "個別指導": { bg: "#FFF0F0", color: "#C62828" },
  "映像授業": { bg: "#F0F4FF", color: "#4f46e5" },
  "自立学習": { bg: "#E8F5E9", color: "#2E7D32" },
  "AI学習": { bg: "#FFF8E1", color: "#F57F17" },
};

export default function OnlineJukuCompareTable({ schools }: Props) {
  if (schools.length < 2) return null;

  return (
    <Box sx={{ mt: 5, mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Box sx={{ width: 4, height: 20, bgcolor: JUKU_RED, borderRadius: 2 }} />
        <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1rem", sm: "1.15rem" }, color: "#111827" }}>
          オンライン塾 一覧比較表
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#fff",
          border: "1px solid #E5E7EB",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        }}
      >
        <Box sx={{ overflowX: "auto" }}>
          <Box
            component="table"
            sx={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: 700,
              fontSize: 13,
            }}
          >
            {/* ヘッダー */}
            <Box component="thead">
              <Box component="tr" sx={{ bgcolor: JUKU_RED }}>
                {["順位", "塾名", "評価", "月額料金", "スタイル", "対象", "入会金", "無料体験"].map((h) => (
                  <Box
                    key={h}
                    component="th"
                    sx={{
                      py: 1.25,
                      px: { xs: 1, sm: 1.5 },
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 12,
                      textAlign: h === "順位" ? "center" : "left",
                      whiteSpace: "nowrap",
                      ...(h === "塾名" && { position: "sticky", left: 0, bgcolor: JUKU_RED, zIndex: 2 }),
                    }}
                  >
                    {h}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ボディ */}
            <Box component="tbody">
              {schools.map((school, i) => {
                const rank = i + 1;
                const siteUrl = school.official_site_url || school.JukuBrand.official_site_url;
                const mainCourse = [...(school.JukuCourse || [])].sort((a, b) => a.sort_order - b.sort_order)[0];
                const feeText = mainCourse
                  ? mainCourse.monthly_fee_min === 0
                    ? "無料"
                    : mainCourse.monthly_fee_min
                    ? `${mainCourse.monthly_fee_min.toLocaleString()}円〜`
                    : "要問合せ"
                  : "要問合せ";
                const hasFreeTrial = siteUrl != null;
                const enrollFree = mainCourse?.enrollment_fee === 0;
                const style = school.JukuSchoolCategory[0];
                const styleColor = style ? STYLE_COLOR[style.category] ?? { bg: "#F3F4F6", color: "#374151" } : { bg: "#F3F4F6", color: "#374151" };

                return (
                  <Box
                    key={school.id}
                    component="tr"
                    sx={{
                      borderTop: "1px solid #F3F4F6",
                      "&:hover": { bgcolor: "#FFF5F5" },
                      transition: "background-color 0.12s",
                      bgcolor: rank <= 3 ? (rank === 1 ? "#FFFDE7" : rank === 2 ? "#FAFAFA" : "#FFF8F2") : "transparent",
                    }}
                  >
                    {/* 順位 */}
                    <Box
                      component="td"
                      sx={{
                        py: 1.5, px: 1.5, textAlign: "center",
                        fontWeight: 900, fontSize: 15,
                        color: rank === 1 ? "#B8860B" : rank === 2 ? "#757575" : rank === 3 ? "#CD7F32" : "#9CA3AF",
                      }}
                    >
                      {rank}
                    </Box>

                    {/* 塾名 */}
                    <Box
                      component="td"
                      sx={{
                        py: 1.5, px: 1.5,
                        position: "sticky", left: 0,
                        bgcolor: rank <= 3 ? (rank === 1 ? "#FFFDE7" : rank === 2 ? "#FAFAFA" : "#FFF8F2") : "#fff",
                        zIndex: 1,
                        borderRight: "1px solid #F3F4F6",
                        minWidth: 160,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {school.JukuBrand.logo_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={school.JukuBrand.logo_url}
                            alt={school.JukuBrand.name}
                            style={{ width: 28, height: 28, objectFit: "contain", borderRadius: 4, border: "1px solid #eee", flexShrink: 0 }}
                          />
                        ) : (
                          <Box sx={{ width: 28, height: 28, borderRadius: 1, bgcolor: JUKU_RED_BG, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Typography sx={{ fontWeight: 800, fontSize: 12, color: JUKU_RED }}>{school.JukuBrand.name.charAt(0)}</Typography>
                          </Box>
                        )}
                        <Link href={`/juku/${school.JukuBrand.slug}/${school.slug}/`} style={{ textDecoration: "none" }}>
                          <Typography sx={{ fontWeight: 700, fontSize: 12, color: "#111827", lineHeight: 1.3, "&:hover": { color: JUKU_RED } }}>
                            {school.name.length > 16 ? school.name.slice(0, 15) + "…" : school.name}
                          </Typography>
                        </Link>
                      </Box>
                    </Box>

                    {/* 評価 */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, whiteSpace: "nowrap" }}>
                      {school.review_average_rating ? (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                          <StarIcon sx={{ fontSize: 14, color: "#F59E0B" }} />
                          <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>
                            {school.review_average_rating.toFixed(2)}
                          </Typography>
                          <Typography sx={{ fontSize: 11, color: "#9CA3AF" }}>({school.total_review_count})</Typography>
                        </Box>
                      ) : <Typography sx={{ color: "#9CA3AF", fontSize: 12 }}>—</Typography>}
                    </Box>

                    {/* 月額料金 */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, whiteSpace: "nowrap" }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 13, color: feeText === "無料" ? "#1e782d" : JUKU_RED }}>
                        {feeText}
                      </Typography>
                    </Box>

                    {/* スタイル */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, whiteSpace: "nowrap" }}>
                      {style ? (
                        <Box sx={{ display: "inline-block", bgcolor: styleColor.bg, color: styleColor.color, fontSize: 11, fontWeight: 700, px: 1, py: 0.25, borderRadius: 1 }}>
                          {style.category}
                        </Box>
                      ) : <Typography sx={{ color: "#9CA3AF", fontSize: 12 }}>—</Typography>}
                    </Box>

                    {/* 対象学年 */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, maxWidth: 120 }}>
                      <Typography sx={{ fontSize: 11, color: "#374151" }}>
                        {school.JukuSchoolYear.slice(0, 3).map((y) => y.year).join("・") || "—"}
                      </Typography>
                    </Box>

                    {/* 入会金 */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, textAlign: "center", whiteSpace: "nowrap" }}>
                      {enrollFree ? (
                        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.3, color: "#1e782d", fontSize: 12, fontWeight: 700 }}>
                          <CheckIcon sx={{ fontSize: 14 }} /> 無料
                        </Box>
                      ) : mainCourse?.enrollment_fee ? (
                        <Typography sx={{ fontSize: 11, color: "#6B7280" }}>{mainCourse.enrollment_fee.toLocaleString()}円</Typography>
                      ) : (
                        <Typography sx={{ fontSize: 11, color: "#9CA3AF" }}>—</Typography>
                      )}
                    </Box>

                    {/* 無料体験 */}
                    <Box component="td" sx={{ py: 1.5, px: 1.5, textAlign: "center", whiteSpace: "nowrap" }}>
                      {siteUrl ? (
                        <Box
                          component="a"
                          href={siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "inline-flex", alignItems: "center", gap: 0.3,
                            bgcolor: JUKU_RED, color: "#fff", fontSize: 11, fontWeight: 700,
                            px: 1.25, py: 0.4, borderRadius: 1, textDecoration: "none",
                            "&:hover": { bgcolor: "#A31515" }, transition: "background 0.12s",
                          }}
                        >
                          <OpenInNewIcon sx={{ fontSize: 11 }} /> 公式へ
                        </Box>
                      ) : (
                        <Typography sx={{ fontSize: 11, color: "#9CA3AF" }}>—</Typography>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ fontSize: 11, color: "#9CA3AF", mt: 1, textAlign: "right" }}>
        ※ 料金は代表コースの税込価格。最新情報は各公式サイトをご確認ください。
      </Typography>
    </Box>
  );
}
