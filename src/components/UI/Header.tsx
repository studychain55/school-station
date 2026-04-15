import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

const JUKU_RED = "#C62828";

export default function Header() {
  const router = useRouter();
  const isJuku = router.pathname.startsWith("/juku");

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
          backgroundColor: isJuku ? JUKU_RED : "#1e782d",
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
          bgcolor: isJuku ? JUKU_RED : "#1e782d",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          transition: "background-color 0.2s",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 52, sm: 56 }, gap: { xs: 1.5, sm: 3 } }}>
            <Link href="/" aria-label="School Station ホーム" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", letterSpacing: 1, fontSize: { xs: 14, sm: 18 } }}>
                School Station
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link
              href="/rankings/koukou/"
              style={{ textDecoration: "none", fontSize: 13, fontWeight: 500 }}
            >
              <Box
                component="span"
                sx={{
                  color: isJuku ? "rgba(255,255,255,0.7)" : "#e9f2ea",
                  "&:hover": { color: "#fff" },
                  transition: "color 0.15s",
                }}
              >
                高校ランキング
              </Box>
            </Link>
            <Link
              href="/juku/"
              style={{ textDecoration: "none", fontSize: 13, fontWeight: 500 }}
            >
              <Box
                component="span"
                sx={{
                  color: isJuku ? "#fff" : "rgba(233,242,234,0.7)",
                  fontWeight: isJuku ? 700 : 500,
                  bgcolor: isJuku ? "rgba(255,255,255,0.18)" : "transparent",
                  px: isJuku ? 1.5 : 0,
                  py: isJuku ? 0.5 : 0,
                  borderRadius: 1,
                  transition: "all 0.15s",
                  "&:hover": { color: "#fff" },
                }}
              >
                塾を探す
              </Box>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
