import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Northbound Yoga</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} className="bg-gray" />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
