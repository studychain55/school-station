import type { NextApiRequest, NextApiResponse } from "next";
import prefectures from "@/data/prefectures";
import { REGIONS } from "@/data/regions";

const SITE_URL = "https://school-station.com";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const urls: string[] = [
    "/",
    "/rankings/koukou/",
    "/rankings/koukou/public/",
    "/rankings/koukou/private/",
    "/rankings/koukou/national/",
  ];

  // Region pages
  REGIONS.forEach((r) => urls.push(`/rankings/koukou/region/${r.slug}/`));

  // Prefecture pages
  prefectures.forEach((p) => {
    urls.push(`/rankings/koukou/p-${p.slug}/`);
    urls.push(`/rankings/koukou/public/p-${p.slug}/`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE_URL}${url}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
  res.status(200).send(sitemap);
}
