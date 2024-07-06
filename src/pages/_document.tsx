import { AboutData } from "@/constants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Fadhilah Dwi Ananda">
        <meta name="keywords" content="Fadhilah Dwi Ananda" />
        <meta name="description" content={AboutData} />
        {/* <meta name="image" content={seo.image} />

        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} /> */}

        <meta name="google-site-verification" content="WOEis6svQhfZKFfVrfyM2ZRXqqSO9NlQzxQGBciPfuM" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
