import { Box, Container, Typography, Grid } from "@mui/material";
import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "高校ランキング",
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
    title: "塾を探す",
    links: [
      { label: "塾トップ", href: "/juku/" },
      { label: "塾ランキング", href: "/juku/ranking/" },
      { label: "東京の塾", href: "/juku/p-tokyo/" },
      { label: "大阪の塾", href: "/juku/p-osaka/" },
      { label: "神奈川の塾", href: "/juku/p-kanagawa/" },
      { label: "愛知の塾", href: "/juku/p-aichi/" },
    ],
  },
  {
    title: "目的・スタイルで探す",
    links: [
      { label: "中学受験の塾", href: "/juku/?purpose=%E4%B8%AD%E5%AD%A6%E5%8F%97%E9%A8%93" },
      { label: "高校受験の塾", href: "/juku/?purpose=%E9%AB%98%E6%A0%A1%E5%8F%97%E9%A8%93" },
      { label: "大学受験の塾", href: "/juku/?purpose=%E5%A4%A7%E5%AD%A6%E5%8F%97%E9%A8%93" },
      { label: "個別指導の塾", href: "/juku/?category=%E5%80%8B%E5%88%A5%E6%8C%87%E5%B0%8E" },
      { label: "集団授業の塾", href: "/juku/?category=%E9%9B%86%E5%9B%A3%E6%8E%88%E6%A5%AD" },
      { label: "オンライン塾", href: "/juku/?category=%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" },
    ],
  },
];

const linkStyle = { color: "#cbd5e1", textDecoration: "none", fontSize: 13, lineHeight: "2" };

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0f172a", color: "#fff", pt: 5, pb: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {FOOTER_SECTIONS.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1.5, color: "#e2e8f0" }}>
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

        {/* 関連サービス */}
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", pt: 3, mb: 3 }}>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 13, mb: 1.5 }}>関連サービス</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" }, gap: 1 }}>
            <a href="https://studychain.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">Studychain</a>
            <a href="https://mitsukaru-next.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ミツカル転職</a>
            <a href="https://mitsukaru-career.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ミツカル就職</a>
          <a href="https://pilates-station.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ピラティスステーション</a>
          <a href="https://gym-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ジムナビ</a>
          <a href="https://ohaka-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">お墓ステーション</a>
          <a href="https://photo-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">フォトスタジオナビ</a>
          <a href="https://tantei-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">探偵ナビ</a>
          <a href="https://sigyo-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">士業ナビ</a>
          <a href="https://hakenstation.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">派遣ステーション</a>
            <a href="https://mendan-kakutoku.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">求職者面談獲得くん</a>
            <a href="https://robots-center.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ロボット手書きDMセンター</a>
            <a href="https://scout-souken.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">AIスカウト総合研究所</a>
            <a href="https://japan-writing-center.com/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">AIショート動画広告納品くん</a>
          <a href="https://driverstation.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ドライバーステーション</a>
          <a href="https://internationalschool-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">インターナショナルスクールナビ</a>
          <a href="https://ryugakustation.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">留学ステーション</a>
          <a href="https://musicschool-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">音楽教室ステーション</a>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
            
            
            
            
            
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", pt: 3, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
            オンライン塾比較ステーション
          </Typography>
          <Typography variant="caption" sx={{ color: "#94a3b8" }}>
            &copy; {new Date().getFullYear()} オンライン塾比較ステーション. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
