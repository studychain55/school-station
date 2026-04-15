export const JUKU_RED = "#C62828";
export const JUKU_RED_LIGHT = "#EF5350";
export const JUKU_RED_DARK = "#8E0000";
export const JUKU_RED_BG = "#FFEBEE";
export const JUKU_RED_BG2 = "#FFCDD2";

export const JUKU_PURPOSES = [
  { value: "中学受験", label: "中学受験", emoji: "📚" },
  { value: "高校受験", label: "高校受験", emoji: "🏫" },
  { value: "大学受験", label: "大学受験", emoji: "🎓" },
  { value: "定期テスト対策", label: "定期テスト対策", emoji: "📝" },
  { value: "学習習慣・補習", label: "学習習慣・補習", emoji: "✏️" },
];

export const JUKU_CATEGORIES = [
  { value: "個別指導", label: "個別指導", emoji: "👤" },
  { value: "集団授業", label: "集団授業", emoji: "👥" },
  { value: "オンライン", label: "オンライン", emoji: "💻" },
  { value: "映像授業", label: "映像授業", emoji: "🎥" },
  { value: "自立学習", label: "自立学習", emoji: "📖" },
];

export const JUKU_YEARS = [
  { value: "小学生", label: "小学生" },
  { value: "中学生", label: "中学生" },
  { value: "高校生", label: "高校生" },
  { value: "浪人生", label: "浪人生" },
];

export const REVIEW_CATEGORIES = [
  { key: "rating_total", label: "総合評価" },
  { key: "rating_teacher", label: "講師" },
  { key: "rating_curriculum", label: "カリキュラム" },
  { key: "rating_access", label: "アクセス" },
  { key: "rating_price", label: "料金" },
  { key: "rating_support", label: "サポート" },
] as const;

export const POPULAR_PREFECTURES = [
  { slug: "tokyo", title: "東京都" },
  { slug: "kanagawa", title: "神奈川県" },
  { slug: "osaka", title: "大阪府" },
  { slug: "aichi", title: "愛知県" },
  { slug: "saitama", title: "埼玉県" },
  { slug: "chiba", title: "千葉県" },
  { slug: "fukuoka", title: "福岡県" },
  { slug: "hyogo", title: "兵庫県" },
];
