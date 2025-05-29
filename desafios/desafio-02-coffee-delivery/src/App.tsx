import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './App.css'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </DefaultLayout>
  )
}

export default App
