import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          {/* Google Analytics conversion tracking code */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `gtag('event', 'conversion', {'send_to': 'AW-1012481815/Ufb7CLrUhZsZEJf-5OID'});`,
            }}
          /> */}
        </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
