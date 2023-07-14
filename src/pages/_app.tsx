import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>EDM Box</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(App);
