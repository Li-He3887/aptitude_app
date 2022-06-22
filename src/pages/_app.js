import React from 'react'
import App from 'next/app'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { DefaultSeo } from 'next-seo'
import { SnackbarProvider } from 'notistack'
import * as Sentry from '@sentry/node'
import FullStory from 'react-fullstory'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import theme from '../config/theme'
import SEO from '../config/seo'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production'
})

const queryClient = new QueryClient()

export default class FSATApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err } = this.props
    const modifiedPageProps = { ...pageProps, err }

    return (
      // Make sure MUI styles are loaded first, so that any subsequent overrides using SC styles will be preserved.
      <StylesProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <SnackbarProvider maxSnack={3}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {process.browser && (
                  <FullStory
                    org={process.env.FULLSTORY_ORG_ID}
                    debug={process.env.NODE_ENV === 'development'}
                  />
                )}
                <DefaultSeo {...SEO} />
                <Component {...modifiedPageProps} />
              </SnackbarProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </LocalizationProvider>
      </StylesProvider>
    )
  }
}
