import Head from "next/head";

import { NewRelicSnippet } from "../modules/newrelic-browser-agent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NewRelic Synthetic Playground with NextJs</title>
        {process.env.NODE_ENV === "production" && <NewRelicSnippet />}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
