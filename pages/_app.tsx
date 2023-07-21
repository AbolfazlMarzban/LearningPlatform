import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import setImageUrl from '@/mixins/setImageUrl'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
