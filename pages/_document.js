import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:900|Roboto:300,400"
          rel="stylesheet"
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
