import { RouterProvider } from 'react-router-dom'
import './globals.css'
import { router } from './routes'

export function App() {
  return <RouterProvider router={router} />
}
