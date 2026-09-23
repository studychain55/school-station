import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

const JUKU_RED = "#0f766e";

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
          backgroundColor: isJuku ? JUKU_RED : "#4f46e5",
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
          bgcolor: "#ffffff",
          boxShadow: "0 1px 0 rgba(15, 23, 42, 0.08)",
          transition: "background-color 0.2s",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 52, sm: 56 }, gap: { xs: 1.5, sm: 3 } }}>
            <Link href="/" aria-label="オンライン塾比較ステーション ホーム" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", letterSpacing: 0, fontSize: { xs: 12, sm: 15 }, lineHeight: 1.2 }}>
                オンライン塾比較ステーション
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
                  color: "#475569",
                  "&:hover": { color: "#0f766e", bgcolor: "rgba(15, 118, 110, 0.12)" },
                  transition: "color 0.15s",
                }}
              >
                偏差値データ
              </Box>
            </Link>
            <Link
              href="/juku/"
              style={{ textDecoration: "none", fontSize: 13, fontWeight: 500 }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0f766e",
                  fontWeight: isJuku ? 700 : 500,
                  bgcolor: "rgba(15, 118, 110, 0.08)",
                  px: isJuku ? 1.5 : 0,
                  py: isJuku ? 0.5 : 0,
                  borderRadius: 1,
                  transition: "all 0.15s",
                  "&:hover": { color: "#0f766e", bgcolor: "rgba(15, 118, 110, 0.12)" },
                }}
              >
                比較する
              </Box>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
