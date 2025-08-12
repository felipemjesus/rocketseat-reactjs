import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { globalStyles } from "@/styles/global";
import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo" />
      </Header>

      <Component {...pageProps} className={roboto.className} />
    </Container>
  )
}
