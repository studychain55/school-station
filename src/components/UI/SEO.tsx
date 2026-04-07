import Head from "next/head";
import type { Breadcrumb } from "@/types";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbs?: Breadcrumb[];
  faqItems?: { question: string; answer: string }[];
  schools?: { name: string; position: number }[];
  isRankingPage?: boolean;
};

const SITE_URL = "https://school-station.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "School Station",
  "description": "全国の高校偏差値ランキングを都道府県別・地方別・分類別に掲載",
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "School Station",
  "description": "高校偏差値ランキング情報サイト",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "sameAs": [],
};

export default function SEO({ title, description, canonical, breadcrumbs, faqItems, schools, isRankingPage }: SEOProps) {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : undefined;

  const articleJsonLd = isRankingPage ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": fullCanonical,
    "image": OG_IMAGE,
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "School Station",
    },
    "publisher": {
      "@type": "Organization",
      "name": "School Station",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
  } : null;

  const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": bc.label,
      ...(bc.href ? { "item": `${SITE_URL}${bc.href}` } : {}),
    })),
  } : null;

  const faqJsonLd = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  } : null;

  const itemListJsonLd = schools && schools.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": schools.slice(0, 10).map((s) => ({
      "@type": "ListItem",
      "position": s.position,
      "name": s.name,
    })),
  } : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="School Station" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ja_JP" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      {articleJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      {itemListJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      )}
    </Head>
  );
}
