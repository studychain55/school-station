import Link from "next/link";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export default function Header() {
  return (
    <>
      <Link
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          zIndex: 2000,
          padding: "8px 16px",
          backgroundColor: "#1e782d",
          color: "#fff",
          textDecoration: "none",
        }}
        onFocus={(e) => { e.currentTarget.style.left = "8px"; }}
        onBlur={(e) => { e.currentTarget.style.left = "-9999px"; }}
      >
        メインコンテンツにスキップ
      </Link>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#1e782d",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 52, sm: 56 }, gap: 2 }}>
            <Link href="/" aria-label="School Station ホーム" style={{ textDecoration: "none", color: "inherit" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", letterSpacing: 1, fontSize: { xs: 15, sm: 18 } }}>
                  School Station
                </Typography>
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link
              href="/rankings/koukou/"
              style={{ textDecoration: "none", color: "#e9f2ea", fontSize: 14, fontWeight: 500 }}
            >
              高校偏差値ランキング
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
