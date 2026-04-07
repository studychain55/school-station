import { Box, Container, Typography, Grid } from "@mui/material";
import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "分類別ランキング",
    links: [
      { label: "全国高校ランキング", href: "/rankings/koukou/" },
      { label: "公立高校ランキング", href: "/rankings/koukou/public/" },
      { label: "私立高校ランキング", href: "/rankings/koukou/private/" },
      { label: "国立高校ランキング", href: "/rankings/koukou/national/" },
    ],
  },
  {
    title: "地方別ランキング",
    links: [
      { label: "関東地方", href: "/rankings/koukou/region/kanto/" },
      { label: "近畿地方", href: "/rankings/koukou/region/kansai/" },
      { label: "中部地方", href: "/rankings/koukou/region/chubu/" },
      { label: "九州・沖縄地方", href: "/rankings/koukou/region/kyushu/" },
      { label: "東北地方", href: "/rankings/koukou/region/tohoku/" },
    ],
  },
  {
    title: "人気エリア",
    links: [
      { label: "東京都", href: "/rankings/koukou/p-tokyo/" },
      { label: "大阪府", href: "/rankings/koukou/p-osaka/" },
      { label: "神奈川県", href: "/rankings/koukou/p-kanagawa/" },
      { label: "愛知県", href: "/rankings/koukou/p-aichi/" },
      { label: "福岡県", href: "/rankings/koukou/p-fukuoka/" },
      { label: "埼玉県", href: "/rankings/koukou/p-saitama/" },
    ],
  },
];

const linkStyle = { color: "#BBDEFB", textDecoration: "none", fontSize: 13, lineHeight: "2" };

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0D47A1", color: "#fff", pt: 5, pb: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {FOOTER_SECTIONS.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 4 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1.5, color: "#E3F2FD" }}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={linkStyle}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", pt: 3, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
            School Station
          </Typography>
          <Typography variant="caption" sx={{ color: "#90CAF9" }}>
            &copy; {new Date().getFullYear()} School Station. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
