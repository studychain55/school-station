import type { Prefecture } from "@/types";

const prefectures: Prefecture[] = [
  { id: 1, title: "北海道", title_kana: "ホッカイドウ", title_hira: "ほっかいどう", title_alphabet: "hokkaido", slug: "hokkaido", type: "prefecture" },
  { id: 2, title: "青森県", title_kana: "アオモリケン", title_hira: "あおもりけん", title_alphabet: "aomori", slug: "aomori", type: "prefecture" },
  { id: 3, title: "岩手県", title_kana: "イワテケン", title_hira: "いわてけん", title_alphabet: "iwate", slug: "iwate", type: "prefecture" },
  { id: 4, title: "宮城県", title_kana: "ミヤギケン", title_hira: "みやぎけん", title_alphabet: "miyagi", slug: "miyagi", type: "prefecture" },
  { id: 5, title: "秋田県", title_kana: "アキタケン", title_hira: "あきたけん", title_alphabet: "akita", slug: "akita", type: "prefecture" },
  { id: 6, title: "山形県", title_kana: "ヤマガタケン", title_hira: "やまがたけん", title_alphabet: "yamagata", slug: "yamagata", type: "prefecture" },
  { id: 7, title: "福島県", title_kana: "フクシマケン", title_hira: "ふくしまけん", title_alphabet: "fukushima", slug: "fukushima", type: "prefecture" },
  { id: 8, title: "茨城県", title_kana: "イバラキケン", title_hira: "いばらきけん", title_alphabet: "ibaraki", slug: "ibaraki", type: "prefecture" },
  { id: 9, title: "栃木県", title_kana: "トチギケン", title_hira: "とちぎけん", title_alphabet: "tochigi", slug: "tochigi", type: "prefecture" },
  { id: 10, title: "群馬県", title_kana: "グンマケン", title_hira: "ぐんまけん", title_alphabet: "gunma", slug: "gunma", type: "prefecture" },
  { id: 11, title: "埼玉県", title_kana: "サイタマケン", title_hira: "さいたまけん", title_alphabet: "saitama", slug: "saitama", type: "prefecture" },
  { id: 12, title: "千葉県", title_kana: "チバケン", title_hira: "ちばけん", title_alphabet: "chiba", slug: "chiba", type: "prefecture" },
  { id: 13, title: "東京都", title_kana: "トウキョウト", title_hira: "とうきょうと", title_alphabet: "tokyo", slug: "tokyo", type: "prefecture" },
  { id: 14, title: "神奈川県", title_kana: "カナガワケン", title_hira: "かながわけん", title_alphabet: "kanagawa", slug: "kanagawa", type: "prefecture" },
  { id: 15, title: "新潟県", title_kana: "ニイガタケン", title_hira: "にいがたけん", title_alphabet: "nigata", slug: "nigata", type: "prefecture" },
  { id: 16, title: "富山県", title_kana: "トヤマケン", title_hira: "とやまけん", title_alphabet: "toyama", slug: "toyama", type: "prefecture" },
  { id: 17, title: "石川県", title_kana: "イシカワケン", title_hira: "いしかわけん", title_alphabet: "ishikawa", slug: "ishikawa", type: "prefecture" },
  { id: 18, title: "福井県", title_kana: "フクイケン", title_hira: "ふくいけん", title_alphabet: "fukui", slug: "fukui", type: "prefecture" },
  { id: 19, title: "山梨県", title_kana: "ヤマナシケン", title_hira: "やまなしけん", title_alphabet: "yamanashi", slug: "yamanashi", type: "prefecture" },
  { id: 20, title: "長野県", title_kana: "ナガノケン", title_hira: "ながのけん", title_alphabet: "nagano", slug: "nagano", type: "prefecture" },
  { id: 21, title: "岐阜県", title_kana: "ギフケン", title_hira: "ぎふけん", title_alphabet: "gifu", slug: "gifu", type: "prefecture" },
  { id: 22, title: "静岡県", title_kana: "シズオカケン", title_hira: "しずおかけん", title_alphabet: "shizuoka", slug: "shizuoka", type: "prefecture" },
  { id: 23, title: "愛知県", title_kana: "アイチケン", title_hira: "あいちけん", title_alphabet: "aichi", slug: "aichi", type: "prefecture" },
  { id: 24, title: "三重県", title_kana: "ミエケン", title_hira: "みえけん", title_alphabet: "mie", slug: "mie", type: "prefecture" },
  { id: 25, title: "滋賀県", title_kana: "シガケン", title_hira: "しがけん", title_alphabet: "shiga", slug: "shiga", type: "prefecture" },
  { id: 26, title: "京都府", title_kana: "キョウトフ", title_hira: "きょうとふ", title_alphabet: "kyoto", slug: "kyoto", type: "prefecture" },
  { id: 27, title: "大阪府", title_kana: "オオサカフ", title_hira: "おおさかふ", title_alphabet: "osaka", slug: "osaka", type: "prefecture" },
  { id: 28, title: "兵庫県", title_kana: "ヒョウゴケン", title_hira: "ひょうごけん", title_alphabet: "hyogo", slug: "hyogo", type: "prefecture" },
  { id: 29, title: "奈良県", title_kana: "ナラケン", title_hira: "ならけん", title_alphabet: "nara", slug: "nara", type: "prefecture" },
  { id: 30, title: "和歌山県", title_kana: "ワカヤマケン", title_hira: "わかやまけん", title_alphabet: "wakayama", slug: "wakayama", type: "prefecture" },
  { id: 31, title: "鳥取県", title_kana: "トットリケン", title_hira: "とっとりけん", title_alphabet: "tottori", slug: "tottori", type: "prefecture" },
  { id: 32, title: "島根県", title_kana: "シマネケン", title_hira: "しまねけん", title_alphabet: "shimane", slug: "shimane", type: "prefecture" },
  { id: 33, title: "岡山県", title_kana: "オカヤマケン", title_hira: "おかやまけん", title_alphabet: "okayama", slug: "okayama", type: "prefecture" },
  { id: 34, title: "広島県", title_kana: "ヒロシマケン", title_hira: "ひろしまけん", title_alphabet: "hiroshima", slug: "hiroshima", type: "prefecture" },
  { id: 35, title: "山口県", title_kana: "ヤマグチケン", title_hira: "やまぐちけん", title_alphabet: "yamaguchi", slug: "yamaguchi", type: "prefecture" },
  { id: 36, title: "徳島県", title_kana: "トクシマケン", title_hira: "とくしまけん", title_alphabet: "tokushima", slug: "tokushima", type: "prefecture" },
  { id: 37, title: "香川県", title_kana: "カガワケン", title_hira: "かがわけん", title_alphabet: "kagawa", slug: "kagawa", type: "prefecture" },
  { id: 38, title: "愛媛県", title_kana: "エヒメケン", title_hira: "えひめけん", title_alphabet: "ehime", slug: "ehime", type: "prefecture" },
  { id: 39, title: "高知県", title_kana: "コウチケン", title_hira: "こうちけん", title_alphabet: "kochi", slug: "kochi", type: "prefecture" },
  { id: 40, title: "福岡県", title_kana: "フクオカケン", title_hira: "ふくおかけん", title_alphabet: "fukuoka", slug: "fukuoka", type: "prefecture" },
  { id: 41, title: "佐賀県", title_kana: "サガケン", title_hira: "さがけん", title_alphabet: "saga", slug: "saga", type: "prefecture" },
  { id: 42, title: "長崎県", title_kana: "ナガサキケン", title_hira: "ながさきけん", title_alphabet: "nagasaki", slug: "nagasaki", type: "prefecture" },
  { id: 43, title: "熊本県", title_kana: "クマモトケン", title_hira: "くまもとけん", title_alphabet: "kumamoto", slug: "kumamoto", type: "prefecture" },
  { id: 44, title: "大分県", title_kana: "オオイタケン", title_hira: "おおいたけん", title_alphabet: "oita", slug: "oita", type: "prefecture" },
  { id: 45, title: "宮崎県", title_kana: "ミヤザキケン", title_hira: "みやざきけん", title_alphabet: "miyazaki", slug: "miyazaki", type: "prefecture" },
  { id: 46, title: "鹿児島県", title_kana: "カゴシマケン", title_hira: "かごしまけん", title_alphabet: "kagoshima", slug: "kagoshima", type: "prefecture" },
  { id: 47, title: "沖縄県", title_kana: "オキナワケン", title_hira: "おきなわけん", title_alphabet: "okinawa", slug: "okinawa", type: "prefecture" },
];

export default prefectures;

export const recommendPrefectures = prefectures.filter((p) =>
  [13, 27, 40, 23, 1, 14].includes(p.id)
);

export function getPrefectureBySlug(slug: string): Prefecture | undefined {
  return prefectures.find((p) => p.slug === slug);
}

export function getPrefectureById(id: number): Prefecture | undefined {
  return prefectures.find((p) => p.id === id);
}
