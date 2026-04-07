import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import SEO from "@/components/UI/SEO";

export default function Custom404() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://school-station.com/",
      },
    ],
  };

  return (
    <>
      <SEO title="ページが見つかりません | School Station" description="お探しのページは見つかりませんでした。" />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </Head>
      <Container maxWidth="sm" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "4rem", fontWeight: 900, color: "#E0E0E0", mb: 1 }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.3rem", mb: 2, color: "#424242" }}>
          ページが見つかりません
        </Typography>
        <Typography variant="body2" sx={{ color: "#757575", mb: 4 }}>
          お探しのページは移動または削除された可能性があります。
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">トップページへ</Button>
          </Link>
          <Link href="/rankings/koukou/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="large">ランキングを見る</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
