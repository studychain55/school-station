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

const linkStyle = { color: "#bcd7c0", textDecoration: "none", fontSize: 13, lineHeight: "2" };

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#1e782d", color: "#fff", pt: 5, pb: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {FOOTER_SECTIONS.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 4 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1.5, color: "#e9f2ea" }}>
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

        {/* おすすめサービス */}
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", pt: 3, mb: 3 }}>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 13, mb: 1.5 }}>おすすめサービス</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <a href="https://studychain.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">Studychain</a>
          <a href="https://pilates-station.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ピラティスステーション</a>
          <a href="https://gym-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ジムナビ</a>
          <a href="https://ohaka-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">お墓ステーション</a>
          <a href="https://photo-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">フォトスタジオナビ</a>
          <a href="https://tantei-navi.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">探偵ナビ</a>
          <a href="https://sigyo-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">士業ナビ</a>
          <a href="https://hakenstation.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">派遣ステーション</a>
          <a href="https://driverstation.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ドライバーステーション</a>
          <a href="https://internationalschool-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">インターナショナルスクールナビ</a>
          <a href="https://ryugakustation.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">留学ステーション</a>
          <a href="https://musicschool-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">音楽教室ステーション</a>
          <a href="https://butsudan-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">仏壇ステーション</a>
          <a href="https://eikaiwa-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">英会話ステーション</a>
          <a href="https://cookschool-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">料理教室ステーション</a>
          <a href="https://danceschool-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ダンススクールステーション</a>
          <a href="https://golfschool-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ゴルフスクールステーション</a>
          <a href="https://whitening-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ホワイトニングステーション</a>
          <a href="https://seitai-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">整体ステーション</a>
          <a href="https://kaitai-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">解体ステーション</a>
          <a href="https://reform-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">リフォームステーション</a>
          <a href="https://rojinhome-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">老人ホームステーション</a>
          <a href="https://trimming-station.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">トリミングステーション</a>
          <a href="https://petsalon-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ペットサロンナビ</a>
          <a href="https://pethotel-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">ペットホテルナビ</a>
          <a href="https://animal-hospital-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">動物病院ナビ</a>
          <a href="https://allkaishu-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">不用品回収ナビ</a>
          <a href="https://hearing-aid-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">補聴器ナビ</a>
          <a href="https://ihinseiri-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">遺品整理ナビ</a>
          <a href="https://suido-repair-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">水道修理ナビ</a>
          <a href="https://kajidaiko-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">家事代行ナビ</a>
          <a href="https://kekkon-soudanjo-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">結婚相談所ナビ</a>
          <a href="https://karaoke-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">カラオケナビ</a>
          <a href="https://solarsystem-navi.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">太陽光ナビ</a>
          </Box>
        </Box>

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
