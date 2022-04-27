import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'

import 'normalize.css/normalize.css'
import './global.css'
import theme from '@theme'
import { MetamaskProvider } from '@contexts/metamaskContext'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
        />
        <link
          rel="preload"
          href="/fonts/Nexa-Light.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <MetamaskProvider>
            <Component {...pageProps} />
          </MetamaskProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
