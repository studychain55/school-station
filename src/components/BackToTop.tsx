import { useState, useEffect } from "react";
import { Fab } from "@mui/material";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Fab
      size="small"
      aria-label="ページトップに戻る"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        bgcolor: "#0D47A1",
        color: "#fff",
        "&:hover": { bgcolor: "#1565C0" },
        zIndex: 1000,
        boxShadow: 3,
      }}
    >
      ↑
    </Fab>
  );
}
