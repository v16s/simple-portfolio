import Document, { Head, Main, NextScript } from 'next/document'
import 'react-tabs/style/react-tabs.css';
import '../style.css'
import 'material-components-web/dist/material-components-web.min.css';
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <title>Sample Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}