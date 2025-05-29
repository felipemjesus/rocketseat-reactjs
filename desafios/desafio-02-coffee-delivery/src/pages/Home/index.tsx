import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import './styles.css'

export function Home() {
  return (
    <>
      <Intro />
      <CoffeeList />
    </>
  )
}
