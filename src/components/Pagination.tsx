import { Box, Pagination as MuiPagination, Typography } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  totalCount: number;
  currentPage: number;
  perPage: number;
};

export default function Pagination({ totalCount, currentPage, perPage }: Props) {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / perPage);

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalCount);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, my: 3 }}>
      <Typography variant="caption" sx={{ color: "#666" }}>
        {totalCount.toLocaleString()}件中 {startItem.toLocaleString()}-{endItem.toLocaleString()}件を表示
      </Typography>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_e, page) => {
          const { page: _p, ...rest } = router.query;
          router.push({
            pathname: router.pathname,
            query: page === 1 ? rest : { ...rest, page },
          });
        }}
        size="medium"
        siblingCount={1}
        boundaryCount={1}
        showFirstButton
        showLastButton
        sx={{ "& .MuiPagination-ul": { gap: 0.5 } }}
      />
    </Box>
  );
}
