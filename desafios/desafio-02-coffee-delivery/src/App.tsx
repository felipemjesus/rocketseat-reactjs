import { Outlet } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <DefaultLayout>
      <CoffeeContextProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </CoffeeContextProvider>
    </DefaultLayout>
  )
}

export default App
