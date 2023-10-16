import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" />

        <script src="https://kit.fontawesome.com/d246c389a9.js" crossOrigin="anonymous"></script>
      </Head>
      {/* <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>I'm Martin</title>
      </head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}