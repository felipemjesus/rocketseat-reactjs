import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { GitHubProvider } from './contexts/GitHubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubProvider>
          <Router />
        </GitHubProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
