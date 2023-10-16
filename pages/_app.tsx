import type { AppProps } from 'next/app';

import "../src/sass/bootstrap-custom.scss";
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};