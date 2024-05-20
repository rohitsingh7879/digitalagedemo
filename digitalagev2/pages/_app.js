/* eslint-disable @next/next/inline-script-id */
import GoogleTag from "@/components/Google/GoogleTag";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import { Auth0Provider } from '@auth0/auth0-react';
import { createContext, useEffect, useState } from 'react';

export const userContext = createContext()

export default function App({ Component, pageProps }) {
  const [userdata, setuserdata] = useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  }, [])
  const [redirectUri, setRedirectUri] = useState();
  useEffect(() => {
    // Check if window is defined (i.e., not in a server-side rendering context)
    if (typeof window == 'undefined') {
      setRedirectUri(window.location.origin);
      // Your client-side code using redirectUri goes here
    }
  }, []);
  console.log('Redirect URI:', redirectUri);

  return <>

    <userContext.Provider value={{ userdata, setuserdata }}>

      <Auth0Provider
        domain="dev-k8js7m1ijl606rx4.us.auth0.com"
        clientId="dOId2Qsk0xhDeWEYmcp3EQ2Krthvj0sp"
        authorizationParams={{
          redirect_uri: 'http://localhost:3000'
        }}
      >
        <GoogleTag />
        <Component {...pageProps} />
      </Auth0Provider>
    </userContext.Provider>
    {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-1012481815"></Script>
    <Script> {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1012481815');`}</Script> */}
    {/* <Script> {`gtag('event', 'conversion', {'send_to': 'AW-1012481815/Ufb7CLrUhZsZEJf-5OID'});`} </Script> */}
  </>
}
