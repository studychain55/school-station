import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Box, Typography, Grid, Pagination, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import JukuCard from "@/components/juku/JukuCard";
import JukuCompareTable from "@/features/juku/components/JukuCompareTable";
import { JUKU_RED, JUKU_RED_BG, JUKU_RED_BG2, JUKU_PURPOSES, JUKU_CATEGORIES } from "@/utils/juku/config";
import type { JukuListPageProps } from "@/types";
import type { Breadcrumb } from "@/types";

function BreadCrumbBar({ items }: { items: Breadcrumb[] }) {
  return (
    <Box
      component="nav"
      aria-label="パンくずリスト"
      sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 0.5, alignItems: "center" }}
    >
      {items.map((item, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {i > 0 && <Typography sx={{ color: "#9CA3AF", fontSize: 13 }}>›</Typography>}
          {item.href ? (
            <Link href={item.href} style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: 13, color: JUKU_RED, "&:hover": { textDecoration: "underline" } }}>
                {item.label}
              </Typography>
            </Link>
          ) : (
            <Typography sx={{ fontSize: 13, color: "#6B7280" }}>{item.label}</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default function JukuListPage({
  schools,
  totalCount,
  title,
  description,
  breadcrumbs,
  currentPage,
  perPage,
}: JukuListPageProps) {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / perPage);
  const [nameFilter, setNameFilter] = useState("");
  const displayedSchools = nameFilter
    ? schools.filter((s) => s.name.includes(nameFilter) || s.JukuBrand.name.includes(nameFilter))
    : schools;

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    const query = { ...router.query, page: page > 1 ? String(page) : undefined };
    if (!query.page) delete query.page;
    router.push({ pathname: router.pathname, query });
  };

  const canonical = `https://school-station.jp${router.asPath.split("?")[0]}`;

  return (
    <>
      <Head>
        <title>{title} | School Station</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${title} | School Station`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      {/* ヘッダーバー */}
      <Box sx={{ bgcolor: JUKU_RED_BG, borderBottom: `3px solid ${JUKU_RED}`, py: { xs: 3, sm: 4 } }}>
        <Container maxWidth="lg">
          <BreadCrumbBar items={breadcrumbs} />
          <Typography
            component="h1"
            sx={{ fontWeight: 800, fontSize: { xs: "1.5rem", sm: "2rem" }, color: "#111827", mb: 0.5 }}
          >
            {title}
          </Typography>
          {/* 件数表示 */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
            {totalCount > 0 ? (
              <Typography sx={{ fontSize: 14, color: "#374151" }}>
                <Box component="span" sx={{ fontWeight: 700, color: "#1e782d" }}>{totalCount.toLocaleString()}件</Box>
                {" "}中 {(currentPage - 1) * perPage + 1}〜{Math.min(currentPage * perPage, totalCount)}件を表示
              </Typography>
            ) : (
              <Typography sx={{ fontSize: 14, color: "#6B7280" }}>0件</Typography>
            )}
            {(router.query.purpose || router.query.category) && (
              <Link href={router.pathname} style={{ textDecoration: "none" }}>
                <Box component="span" sx={{ fontSize: 12, color: "#E53935", border: "1px solid #E53935", borderRadius: 5, px: 1.5, py: 0.5, cursor: "pointer", "&:hover": { bgcolor: "#fff5f5" } }}>
                  絞り込みをリセット
                </Box>
              </Link>
            )}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        {/* 塾名絞り込み */}
        <Box sx={{ mb: 2 }}>
          <TextField
            size="small"
            fullWidth
            placeholder="塾名・ブランド名で絞り込む"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: 18, color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ bgcolor: "#fff", borderRadius: 1 }}
          />
        </Box>

        {/* クイックフィルター */}
        {(() => {
          const currentPurpose = router.query.purpose as string | undefined;
          const currentCategory = router.query.category as string | undefined;
          const basePath = router.pathname;
          const baseQuery = { ...router.query };
          delete baseQuery.page;

          const buildFilterUrl = (key: string, value: string | undefined) => {
            const q = { ...baseQuery };
            if (value) q[key] = value; else delete q[key];
            delete q.page;
            const qs = new URLSearchParams(q as Record<string, string>).toString();
            return qs ? `${basePath}?${qs}` : basePath;
          };

          return (
            <Box sx={{ mb: 3 }}>
              {/* 目的フィルター */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 1.5, alignItems: "center" }}>
                <Typography sx={{ fontSize: 12, color: "#6B7280", minWidth: "fit-content" }}>目的:</Typography>
                {JUKU_PURPOSES.map((p) => {
                  const isActive = currentPurpose === p.value;
                  return (
                    <Link key={p.value} href={buildFilterUrl("purpose", isActive ? undefined : p.value)} style={{ textDecoration: "none" }}>
                      <Box component="span" sx={{
                        display: "inline-block", px: 1.5, py: 0.4, borderRadius: 5, fontSize: 12, fontWeight: 600, border: "1px solid",
                        bgcolor: isActive ? JUKU_RED : "#fff",
                        color: isActive ? "#fff" : JUKU_RED,
                        borderColor: isActive ? JUKU_RED : JUKU_RED_BG2,
                        cursor: "pointer",
                        transition: "all 0.12s",
                        "&:hover": { bgcolor: isActive ? "#8E0000" : JUKU_RED_BG },
                      }}>
                        {p.label}
                      </Box>
                    </Link>
                  );
                })}
              </Box>
              {/* スタイルフィルター */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, alignItems: "center" }}>
                <Typography sx={{ fontSize: 12, color: "#6B7280", minWidth: "fit-content" }}>スタイル:</Typography>
                {JUKU_CATEGORIES.map((c) => {
                  const isActive = currentCategory === c.value;
                  return (
                    <Link key={c.value} href={buildFilterUrl("category", isActive ? undefined : c.value)} style={{ textDecoration: "none" }}>
                      <Box component="span" sx={{
                        display: "inline-block", px: 1.5, py: 0.4, borderRadius: 5, fontSize: 12, fontWeight: 600, border: "1px solid",
                        bgcolor: isActive ? "#374151" : "#fff",
                        color: isActive ? "#fff" : "#374151",
                        borderColor: isActive ? "#374151" : "#E5E7EB",
                        cursor: "pointer",
                        transition: "all 0.12s",
                        "&:hover": { borderColor: "#374151", bgcolor: "#F3F4F6" },
                      }}>
                        {c.label}
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          );
        })()}

        {schools.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
              bgcolor: "#fff",
              borderRadius: 2,
              border: "1px solid #E5E7EB",
            }}
          >
            <Typography sx={{ fontSize: 48, mb: 2 }}>📚</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#374151", mb: 1 }}>
              現在掲載準備中です
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#6B7280", mb: 3 }}>
              順次データを追加していきます。しばらくお待ちください。
            </Typography>
            <Link href="/juku/" style={{ textDecoration: "none" }}>
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  bgcolor: JUKU_RED,
                  color: "#fff",
                  px: 3,
                  py: 1,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                塾トップに戻る
              </Box>
            </Link>
          </Box>
        ) : (
          <>
            {nameFilter && (
              <Typography sx={{ fontSize: 13, color: "#6B7280", mb: 1.5 }}>
                「{nameFilter}」で絞り込み中 — {displayedSchools.length}件
              </Typography>
            )}
            <Grid container spacing={2}>
              {displayedSchools.map((school, i) => (
                <Grid key={school.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <JukuCard school={school} rank={currentPage === 1 && !nameFilter ? i + 1 : undefined} />
                </Grid>
              ))}
            </Grid>

            {schools.length >= 2 && currentPage === 1 && (
              <JukuCompareTable
                schools={schools.slice(0, 10)}
                title={`${title} 比較表`}
              />
            )}

            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                      bgcolor: JUKU_RED,
                      "&:hover": { bgcolor: "#8E0000" },
                    },
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </>
  );
}
