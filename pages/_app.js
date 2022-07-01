import '../styles/globals.scss'
import Head from 'next/head'

import TransitionLayout from "../components/TransitionLayout";
function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Head>
        <title>Célian HAMON | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </TransitionLayout>
  );
}
export default MyApp
