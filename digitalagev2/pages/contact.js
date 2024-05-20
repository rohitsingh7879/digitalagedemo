import Head from "next/head";
import Contactus from "@/components/Contactus/Contactus"
import Footer from "@/components/Footer/Footer"
import Testomonial from "@/components/Testomonial/Testomonial"
import Script from "next/script";
function ConactPage() {
    return (
        <>
            <Head>
                <title>Digital Age/Contact</title>
                <meta name="description" content="Transforming Ideas Into Powerful Solutions: Web Design, Web Development, Mobile Development, SEO, Digital Marketing, DevOPS, Data Science" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `gtag('event', 'conversion', {'send_to': 'AW-1012481815/Ufb7CLrUhZsZEJf-5OID'});`,
                    }}
                /> */}
            </Head>
            <Script id="google-event-snippet" strategy="afterInteractive">
                {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-1012481815/Ufb7CLrUhZsZEJf-5OID',
              'event_callback': callback
            });
            return false;
          }
        `}
            </Script>
            <div>
                <Contactus />
                <div style={{ marginBottom: "100px" }}>
                    <Testomonial />
                </div>
                <Footer />
            </div>
        </>

    )
}

export default ConactPage