import '../lib/dayjs'

import { GlobalStyle } from '@app/styles/globals'
import { defaultTheme } from '@app/styles/themes/defaut'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
