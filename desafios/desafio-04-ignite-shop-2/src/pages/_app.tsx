import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { globalStyles } from "@/styles/global";
import logoImg from "@/assets/logo.svg";
import { CartButton, Container, Header } from "@/styles/pages/app";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="Logo" />
        </Link>

        <CartButton>
          <ShoppingBag size={24} />
          <span>0</span>
        </CartButton>
      </Header>

      <Component {...pageProps} className={roboto.className} />
    </Container>
  )
}
