import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import BackToTop from "@/components/BackToTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main id="main-content" style={{ minHeight: "60vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
