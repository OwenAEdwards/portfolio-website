import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Other meta tags */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
