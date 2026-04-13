import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import type { Breadcrumb } from "@/types";

type Props = {
  items: Breadcrumb[];
};

export default function BreadCrumb({ items }: Props) {
  return (
    <Breadcrumbs
      aria-label="パンくずリスト"
      sx={{ mb: 2, fontSize: { xs: 12, sm: 13 } }}
    >
      {items.map((item, i) =>
        item.href && i < items.length - 1 ? (
          <Link
            key={i}
            href={item.href}
            style={{ color: "#1e782d", textDecoration: "none" }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography
            key={i}
            color="text.secondary"
            aria-current={i === items.length - 1 ? "page" : undefined}
            sx={{ fontSize: { xs: 12, sm: 13 } }}
          >
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
