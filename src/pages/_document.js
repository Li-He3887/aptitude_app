import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets as MUIStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet as SCStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

import theme from '../config/theme'

export default class FSATDocument extends Document {
  static async getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const muiStyleSheets = new MUIStyleSheets()
    const scStyleSheet = new SCStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            scStyleSheet.collectStyles(
              muiStyleSheets.collect(<App {...props} />)
            )
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {muiStyleSheets.getStyleElement()}
            {scStyleSheet.getStyleElement()}
            {flush() || null}
          </>
        )
      }
    } finally {
      scStyleSheet.seal()
    }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
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
