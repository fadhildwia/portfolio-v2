import { AboutData } from "@/constants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Fadhilah Dwi Ananda">
        <meta name="keywords" content="Fadhilah Dwi Ananda" />
        <meta name="description" content={AboutData} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
