import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli:900|Open+Sans:300,400"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
  )
  }
  }

  export default MyDocument
