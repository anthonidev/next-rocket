import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" >
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>

  )
}

export default MyApp
