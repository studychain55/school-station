import type { NextApiRequest, NextApiResponse } from "next";
import prefectures from "@/data/prefectures";
import { REGIONS } from "@/data/regions";
import supabase from "@/utils/supabase";
import {
  buildKoukouCityRankingHref,
  buildKoukouPrefectureRankingHref,
  buildKoukouSchoolDetailHref,
} from "@/utils/routes/koukou";
import { facultyHref, universityHref } from "@/lib/daigaku-lp";
import { universities } from "@/lib/daigaku-lp-data";

const SITE_URL = "https://school-station.com";

type URLEntry = {
  loc: string;
  lastmod?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const urls: URLEntry[] = [
    
    { loc: "/service/", changefreq: "weekly", priority: 0.8 },
    { loc: "/service/eiken-coach/", changefreq: "monthly", priority: 0.7 },
    { loc: "/service/eiken-coach-adults/", changefreq: "monthly", priority: 0.7 },
    { loc: "/service/toeic-coach/", changefreq: "monthly", priority: 0.7 },
{ loc: "/", changefreq: "weekly", priority: 1.0 },
    { loc: "/english-level/eiken-1-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toeic-900-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/ielts-7-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toefl-ibt-95-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/eiken-pre1-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toeic-800-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/ielts-6-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toefl-ibt-80-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/eiken-2-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toeic-600-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/ielts-5-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toefl-ibt-60-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/eiken-pre2-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toeic-400-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/ielts-4-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/toefl-ibt-40-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/english-level/eiken-3-vocabulary-test/", changefreq: "weekly", priority: 0.95 },
    { loc: "/eiken-grade1-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/eiken-pre1-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/eiken-grade2-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/eiken-pre2-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/eiken-grade3-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/toeic-600-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/toeic-700-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/toeic-800-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/toeic-900-vocabulary/", changefreq: "weekly", priority: 0.95 },
    { loc: "/rankings/koukou/", changefreq: "weekly", priority: 0.9 },
    { loc: "/rankings/koukou/public/", changefreq: "weekly", priority: 0.8 },
    { loc: "/rankings/koukou/private/", changefreq: "weekly", priority: 0.8 },
    { loc: "/rankings/koukou/national/", changefreq: "weekly", priority: 0.7 },
    { loc: "/guide/", changefreq: "monthly", priority: 0.8 },
    { loc: "/column/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-club/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-seifuku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-shingaku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-juku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-seiseki/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-naishinsho/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-benkyou/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-soudan/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-event/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-oyako/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-kokugo/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-rekishi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-math/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-kagaku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-school-select/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-tokutasei/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-english/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-ict/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-language/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-career/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-hensachi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/hensachi-guide/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koko-choice/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/nyushi-schedule/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/kouritsu-vs-shiritsu/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/naishin-up/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/mensetsu-guide/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/chugaku-entrance/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/study-methods/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/tokkoku-guide/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/bukatsu-choise/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/taiken-nyugaku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/kokosei-baito/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/kokosei-nyushi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/kokosei-study/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/daigaku-juken/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-seikatsu/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/tsushinsei-koukou/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-setsumeikai/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/suisen-nyushi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-bukatsu/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-tenko/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-ryuunen/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-sports/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-arts/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-gakuhi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-mensetsu/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-tsuugaku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-futoko/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-daiichi/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-juken-system/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-hensachi-how/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-open/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-tokkatsu/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-shokugyou/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-sogo/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-ryugaku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-volunteer/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-taiiku/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-shakai/", changefreq: "monthly", priority: 0.7 },
    { loc: "/column/koukou-test-week/", changefreq: "monthly", priority: 0.7 },
  ];

  const today = new Date().toISOString().split("T")[0];

  universities.forEach((university) => {
    urls.push({
      loc: universityHref(university),
      changefreq: "monthly",
      priority: 0.65,
      lastmod: today,
    });
    university.faculties.forEach((faculty) => {
      urls.push({
        loc: facultyHref(university, faculty),
        changefreq: "monthly",
        priority: 0.6,
        lastmod: today,
      });
    });
  });

  // Region pages
  REGIONS.forEach((r) => {
    urls.push({
      loc: `/rankings/koukou/region/${r.slug}/`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: today,
    });
  });

  // Prefecture pages
  prefectures.forEach((p) => {
    urls.push({
      loc: buildKoukouPrefectureRankingHref(p.slug),
      changefreq: "weekly",
      priority: 0.75,
      lastmod: today,
    });
    urls.push({
      loc: `/rankings/koukou/public/p-${p.slug}/`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: today,
    });
  });

  // Fetch cities and add city pages
  try {
    const { data: cities } = await supabase
      .from("City")
      .select("id, prefecture_id")
      .eq("is_hidden", false);

    if (cities && cities.length > 0) {
      cities.forEach((city) => {
        const pref = prefectures.find((p) => p.id === city.prefecture_id);
        if (pref) {
          urls.push({
            loc: buildKoukouCityRankingHref(pref.slug, city.id),
            changefreq: "weekly",
            priority: 0.65,
            lastmod: today,
          });
        }
      });
    }
  } catch (error) {
    console.error("Error fetching cities for sitemap:", error);
    // Continue without city pages if DB fails
  }

  // Fetch schools and add detail pages
  try {
    const { data: schools } = await supabase
      .from("MinkouSchool")
      .select("id, prefecture_id, updated_at")
      .eq("is_hidden", false);

    if (schools && schools.length > 0) {
      schools.forEach((school) => {
        const prefId = school.prefecture_id;
        const pref = prefectures.find((p) => p.id === prefId);
        if (pref) {
          const lastmod = school.updated_at ? school.updated_at.split("T")[0] : today;
          urls.push({
            loc: buildKoukouSchoolDetailHref(school.id, pref.slug, pref.id) ?? buildKoukouPrefectureRankingHref(pref.slug),
            changefreq: "monthly",
            priority: 0.6,
            lastmod,
          });
        }
      });
    }
  } catch (error) {
    console.error("Error fetching schools for sitemap:", error);
    // Continue without school detail pages if DB fails
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
${url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>\n` : ""}    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(sitemap);
}
