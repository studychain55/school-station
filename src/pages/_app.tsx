import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GoogleAnalytics } from "@next/third-parties/google";
import theme from "@/theme";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import BackToTop from "@/components/BackToTop";
import "@/styles/globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CHROMELESS_ROUTES = new Set([
  "/daigakujyukentaisaku/[universitySlug]",
  "/daigakujyukentaisaku/[universitySlug]/[facultySlug]",
  "/daigakujyukentaisaku/gunmapazdaigaku",
  "/daigakujyukentaisaku/gunmapazdaigaku/kangogakubu",
  "/tango/eikenjun1",
  "/tango/eikenjun1.html",
]);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isChromeless = CHROMELESS_ROUTES.has(router.pathname);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isChromeless && <Header />}
      <main id="main-content" style={{ minHeight: isChromeless ? 0 : "60vh" }}>
        <Component {...pageProps} />
      </main>
      {!isChromeless && <Footer />}
      {!isChromeless && <BackToTop />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </ThemeProvider>
  );
}
