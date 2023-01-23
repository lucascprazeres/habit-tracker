import { GlobalStyle } from '@/styles/globals'
import { defaultTheme } from '@/styles/themes/defaut'
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
