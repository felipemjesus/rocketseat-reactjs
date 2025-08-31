import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={nunito.className} />;
}
