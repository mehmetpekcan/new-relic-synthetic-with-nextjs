import Head from "next/head";

import NewRelic from "../components/NewRelic";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NewRelic Synthetic Playground with NextJs</title>
        {process.env.NODE_ENV === "production" && (
          <NewRelic
            licenseKey={process.env.NEW_RELIC_BROWSER_LICENCE_KEY}
            applicationID={process.env.NEW_RELIC_APP_ID}
          />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
