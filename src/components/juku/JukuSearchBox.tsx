import { useState } from "react";
import { useRouter } from "next/router";
import { Box, TextField, Button, MenuItem, Select, FormControl, InputLabel, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TrainIcon from "@mui/icons-material/Train";
import { JUKU_RED, JUKU_PURPOSES, JUKU_CATEGORIES } from "@/utils/juku/config";
import prefectures from "@/data/prefectures";

type SearchMode = "pref" | "station";

export default function JukuSearchBox() {
  const router = useRouter();
  const [mode, setMode] = useState<SearchMode>("pref");
  const [prefSlug, setPrefSlug] = useState("");
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [stationInput, setStationInput] = useState("");

  const handleSearch = () => {
    if (mode === "station" && stationInput.trim()) {
      router.push(`/juku/s-${encodeURIComponent(stationInput.trim())}/`);
      return;
    }
    if (prefSlug) {
      const params = new URLSearchParams();
      if (purpose) params.set("purpose", purpose);
      if (category) params.set("category", category);
      const qs = params.toString();
      router.push(`/juku/p-${prefSlug}/${qs ? "?" + qs : ""}`);
    } else {
      router.push("/juku/");
    }
  };

  const inputStyle = {
    bgcolor: "rgba(255,255,255,0.15)",
    color: "#fff",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.4)" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
    "& .MuiSvgIcon-root": { color: "#fff" },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      {/* モード切替 */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {[
          { id: "pref" as SearchMode, label: "都道府県で探す" },
          { id: "station" as SearchMode, label: "駅名で探す" },
        ].map((m) => (
          <Box
            key={m.id}
            onClick={() => setMode(m.id)}
            sx={{
              px: 2, py: 0.75, borderRadius: 2, cursor: "pointer", fontSize: 13, fontWeight: 600,
              bgcolor: mode === m.id ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.2)",
              color: mode === m.id ? JUKU_RED : "#fff",
              transition: "all 0.15s",
            }}
          >
            {m.label}
          </Box>
        ))}
      </Box>

      {/* 検索フォーム */}
      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: 3,
          p: { xs: 2, sm: 2.5 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          alignItems: { sm: "flex-end" },
        }}
      >
        {mode === "station" ? (
          <TextField
            size="small"
            placeholder="駅名を入力（例: 渋谷）"
            value={stationInput}
            onChange={(e) => setStationInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            sx={{ flex: 1, ...inputStyle, "& input": { color: "#fff" }, "& input::placeholder": { color: "rgba(255,255,255,0.6)" } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <TrainIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        ) : (
          <>
            {/* 都道府県 */}
            <FormControl size="small" sx={{ minWidth: 130, flex: 1 }}>
              <InputLabel sx={{ color: "rgba(255,255,255,0.9)", "&.Mui-focused": { color: "#fff" } }}>都道府県</InputLabel>
              <Select value={prefSlug} label="都道府県" onChange={(e) => setPrefSlug(e.target.value)} sx={inputStyle}>
                <MenuItem value="">都道府県を選択</MenuItem>
                {prefectures.map((p) => (
                  <MenuItem key={p.slug} value={p.slug}>{p.title}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* 目的 */}
            <FormControl size="small" sx={{ minWidth: 120, flex: 1 }}>
              <InputLabel sx={{ color: "rgba(255,255,255,0.9)", "&.Mui-focused": { color: "#fff" } }}>目的</InputLabel>
              <Select value={purpose} label="目的" onChange={(e) => setPurpose(e.target.value)} sx={inputStyle}>
                <MenuItem value="">目的を選択</MenuItem>
                {JUKU_PURPOSES.map((p) => (
                  <MenuItem key={p.value} value={p.value}>{p.label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* 授業スタイル */}
            <FormControl size="small" sx={{ minWidth: 120, flex: 1 }}>
              <InputLabel sx={{ color: "rgba(255,255,255,0.9)", "&.Mui-focused": { color: "#fff" } }}>スタイル</InputLabel>
              <Select value={category} label="スタイル" onChange={(e) => setCategory(e.target.value)} sx={inputStyle}>
                <MenuItem value="">スタイルを選択</MenuItem>
                {JUKU_CATEGORIES.map((c) => (
                  <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}

        <Button
          variant="contained"
          onClick={handleSearch}
          startIcon={<SearchIcon />}
          sx={{
            bgcolor: "#fff", color: JUKU_RED, fontWeight: 700, px: 3, py: 1,
            whiteSpace: "nowrap", "&:hover": { bgcolor: "#FFF0F0" },
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          塾を探す
        </Button>
      </Box>
    </Box>
  );
}
