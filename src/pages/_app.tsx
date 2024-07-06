import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500"]
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const scrollPositions = useRef<{ [url: string]: number }>({});
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      scrollPositions.current[router.asPath] = window.scrollY;
      setLastUrl(router.asPath);
    };

    const handleRouteChangeComplete = (url: string) => {
      if (scrollPositions.current[url] !== undefined) {
        window.scrollTo(0, scrollPositions.current[url]);
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    if (lastUrl && scrollPositions.current[lastUrl] !== undefined) {
      window.scrollTo(0, scrollPositions.current[lastUrl]);
    }
  }, [lastUrl]);

  return (
    <main className={poppins.className}>
      <SpeedInsights />
      <Component {...pageProps} />
    </main>
  );
}
