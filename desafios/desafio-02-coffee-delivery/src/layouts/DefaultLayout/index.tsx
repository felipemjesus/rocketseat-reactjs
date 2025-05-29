import { Header } from '../../components/Header'
import { type ReactNode } from 'react'
import './styles.css'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
