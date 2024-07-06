import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <SpeedInsights />
      <Component {...pageProps} />
    </main>
  );
}
