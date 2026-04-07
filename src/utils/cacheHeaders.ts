import type { GetServerSidePropsContext } from "next";

export const setCacheHeaders = (res: GetServerSidePropsContext["res"]) => {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
};

export const setMediumCacheHeaders = (res: GetServerSidePropsContext["res"]) => {
  res.setHeader("Cache-Control", "public, s-maxage=14400, stale-while-revalidate=86400");
};

export const setLongCacheHeaders = (res: GetServerSidePropsContext["res"]) => {
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
};

export const setShortCacheHeadersForZeroResults = (res: GetServerSidePropsContext["res"]) => {
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
};

export const setConditionalCacheHeaders = (
  res: GetServerSidePropsContext["res"],
  dataCount: number
) => {
  if (dataCount === 0) {
    setShortCacheHeadersForZeroResults(res);
  } else {
    setLongCacheHeaders(res);
  }
};
