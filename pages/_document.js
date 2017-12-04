import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
        <title>Jason Bacchetta</title>
        <meta name="description" content="Who I am, what I do, where to find me, and how to get in touch." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Muli:900|Roboto:300" rel="stylesheet" />
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
